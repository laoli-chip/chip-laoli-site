#!/usr/bin/env python3
"""Generate the EDA book promo video used by the website."""

from pathlib import Path
import math
import subprocess
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / ".video-build"
OUTPUT = ROOT / "videos" / "eda-book-intro.mp4"
FONT = "/System/Library/Fonts/STHeiti Light.ttc"
W, H = 1920, 1080
PHOTO_MAP = {
    1: ("silicon-wafers.jpg", "Silicon wafers · ArticCynda · CC0"),
    3: ("wire-bonding.jpg", "IC wire bonding · Mister rf · CC BY-SA 4.0"),
    4: ("wire-bonding.jpg", "IC wire bonding · Mister rf · CC BY-SA 4.0"),
    6: ("macro-pcb.jpg", "Macro circuit board · Ingo Dierking · CC BY-SA 4.0"),
}

SLIDES = [
    ("EDA 封装验证实战", "从设计数据到制造签核\n一条可复制的工程验证主线", "BOOK 03 · CADENCE + SIEMENS", "03"),
    ("为什么需要系统验证？", "封装复杂度上升后\n任何孤立检查都不足以保证可制造、可测试、可量产", "RULES · DATA · PROCESS", "01"),
    ("建立可信的设计基线", "叠层、材料、单位、元件库与约束规则\n每一项都必须有来源、版本和适用范围", "STACKUP / LIBRARY / CONSTRAINT", "02"),
    ("双生态工具路径", "Cadence 17.4 与 Siemens 操作案例\n覆盖数据库建立、布局布线、检查与数据交换", "CADENCE 17.4 + SIEMENS", "03"),
    ("DRC + LVS", "几何规则与电气连通性双重验证\n让错误在交付制造前被发现", "DESIGN RULE / CONNECTIVITY", "04"),
    ("SI / PI 协同", "高速通道、回流路径、电源网络与去耦策略\n把仿真结论反映到真实版图", "SIGNAL + POWER INTEGRITY", "05"),
    ("DFM 与签核闭环", "工具检查、制造商检查、工程师评审\n形成可追溯的报告和版本基线", "DFM / REVIEW / SIGN-OFF", "06"),
    ("让验证成为工程能力", "不是记住按钮，而是理解检查逻辑\n《EDA 封装验证实战》", "芯片专家老李Ai", "07"),
]

NARRATION = """复杂封装项目中，设计完成并不等于可以制造。《EDA封装验证实战》以真实工程流程为主线，帮助你建立一套可复制的验证方法。首先建立可信的设计基线，统一叠层、材料、单位、元件库与约束来源。然后分别进入Cadence十七点四和Siemens工具路径，完成数据库建立、布局布线、检查与数据交换。通过DRC和LVS，验证几何规则与电气连通性，让错误在制造交付前被发现。再将版图连接到信号完整性与电源完整性分析，检查高速通道、回流路径、电源网络和去耦策略。最后结合DFM、制造商检查与工程师评审，形成可追溯的签核报告和版本基线。学习这套方法，不只是记住软件按钮，而是把验证真正变成团队的工程能力。芯片专家老李Ai，EDA封装验证实战。"""


def font(size):
    return ImageFont.truetype(FONT, size)


def gradient(draw, top, bottom):
    for y in range(H):
        t = y / (H - 1)
        color = tuple(round(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        draw.line((0, y, W, y), fill=color)


def wrapped_lines(text):
    return text.split("\n")


def render_slide(index, data):
    title, subtitle, eyebrow, number = data
    image = Image.new("RGB", (W, H), "#071426")
    draw = ImageDraw.Draw(image)
    gradient(draw, (7, 20, 38), (15, 32, 62))

    # technical grid and luminous traces
    for x in range(0, W, 120):
        draw.line((x, 0, x, H), fill=(30, 55, 90), width=1)
    for y in range(0, H, 120):
        draw.line((0, y, W, y), fill=(30, 55, 90), width=1)
    for j in range(5):
        cy = 170 + j * 165
        draw.line((100, cy, 530, cy), fill=(38, 122, 246), width=4)
        draw.ellipse((514, cy - 11, 536, cy + 11), fill=(96, 165, 250))
    photo_info = PHOTO_MAP.get(index)
    if photo_info and (BUILD / "assets" / photo_info[0]).exists():
        source = Image.open(BUILD / "assets" / photo_info[0]).convert("RGB")
        target_w, target_h = 610, 680
        scale = max(target_w / source.width, target_h / source.height)
        source = source.resize((math.ceil(source.width * scale), math.ceil(source.height * scale)), Image.Resampling.LANCZOS)
        left = (source.width - target_w) // 2
        top = (source.height - target_h) // 2
        source = source.crop((left, top, left + target_w, top + target_h))
        dark = Image.new("RGB", source.size, (4, 18, 35))
        source = Image.blend(source, dark, .30)
        mask = Image.new("L", source.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, target_w, target_h), radius=36, fill=255)
        image.paste(source, (1240, 190), mask)
        draw.rounded_rectangle((1240, 190, 1850, 870), radius=36, outline=(96, 165, 250), width=2)
        draw.text((1260, 888), photo_info[1], font=font(20), fill=(112, 135, 166))
    else:
        draw.rounded_rectangle((1450, 120, 1780, 450), radius=40, outline=(55, 100, 155), width=3)
        for r in range(4):
            y = 175 + r * 68
            draw.line((1505, y, 1725, y), fill=(55, 100, 155), width=2)
            for c in range(5):
                x = 1520 + c * 48
                draw.ellipse((x - 7, y - 7, x + 7, y + 7), fill=(6, 182, 212))

    draw.text((160, 125), eyebrow, font=font(30), fill=(96, 165, 250))
    draw.rounded_rectangle((160, 195, 280, 315), radius=26, fill=(59, 130, 246))
    nbox = draw.textbbox((0, 0), number, font=font(56))
    draw.text((220 - (nbox[2] - nbox[0]) / 2, 255 - (nbox[3] - nbox[1]) / 2 - 6), number, font=font(56), fill="white")

    draw.text((160, 380), title, font=font(78), fill=(248, 250, 252))
    y = 520
    for line in wrapped_lines(subtitle):
        draw.text((160, y), line, font=font(42), fill=(180, 196, 218))
        y += 68
    draw.rounded_rectangle((160, 790, 780, 794), radius=2, fill=(59, 130, 246))
    draw.text((160, 850), "芯片专家老李Ai · 二十年工程经验沉淀", font=font(28), fill=(112, 135, 166))
    draw.text((1650, 900), f"0{index + 1} / 08", font=font(26), fill=(96, 165, 250))
    return image


def run(cmd):
    subprocess.run(cmd, check=True)


def main():
    BUILD.mkdir(exist_ok=True)
    OUTPUT.parent.mkdir(exist_ok=True)
    for index, slide in enumerate(SLIDES):
        render_slide(index, slide).save(BUILD / f"slide-{index:02d}.png", quality=95)

    audio = BUILD / "narration.aiff"
    run(["say", "-v", "Tingting", "-r", "182", "-o", str(audio), NARRATION])
    duration = float(subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(audio)
    ]).decode().strip())
    slide_duration = max(6.0, (duration + 1.0) / len(SLIDES))
    total = slide_duration * len(SLIDES)

    command = ["ffmpeg", "-y"]
    for index in range(len(SLIDES)):
        command += ["-loop", "1", "-t", f"{slide_duration:.3f}", "-i", str(BUILD / f"slide-{index:02d}.png")]
    command += ["-i", str(audio)]

    filters = []
    for index in range(len(SLIDES)):
        filters.append(
            f"[{index}:v]zoompan=z='min(zoom+0.00012,1.025)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'"
            f":d=1:s={W}x{H}:fps=30,fade=t=in:st=0:d=0.45,fade=t=out:st={slide_duration-.5:.3f}:d=0.5,setsar=1[v{index}]"
        )
    filters.append("".join(f"[v{i}]" for i in range(len(SLIDES))) + f"concat=n={len(SLIDES)}:v=1:a=0[vout]")
    command += [
        "-filter_complex", ";".join(filters), "-map", "[vout]", "-map", f"{len(SLIDES)}:a",
        "-t", f"{total:.3f}", "-c:v", "libx264", "-preset", "slow", "-crf", "24",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-c:a", "aac", "-b:a", "128k", str(OUTPUT)
    ]
    run(command)
    print(OUTPUT)


if __name__ == "__main__":
    main()
