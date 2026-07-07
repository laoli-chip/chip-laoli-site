# 芯片专家老李Ai · 个人知识站

芯片封装设计工程师"芯片专家老李Ai"的个人知识站，包含系列丛书介绍和交互工具。

## 项目结构

```
├── index.html                # 主站首页
├── vercel.json               # Vercel 部署配置
├── README.md                 # 本文件
├── css/
│   └── style.css             # 共享样式
├── js/
│   └── main.js               # 共享脚本
├── books/
│   ├── book-01.html          # 半导体实战：从设计到应用全流程指南
│   ├── book-02.html          # 先进封装设计实战（Cadence 2.5D/3D IC）
│   ├── book-03.html          # EDA 封装验证实战（Cadence 版）
│   ├── book-04.html          # MCM 多芯片封装设计实战
│   └── book-05.html          # SiP 系统级封装设计实战
└── tools/
    └── 3d-packaging.html     # 3D 封装结构可视化（Three.js 交互工具）
```

## 部署到 Vercel

### 方法一：关联 GitHub 仓库自动部署（推荐）

1. 在 GitHub 新建一个仓库（如 `laoli-aiic-site`）
2. 将本项目的文件推送到该仓库
3. 登录 [Vercel](https://vercel.com)，点击 "Add New → Project"
4. 选择刚创建的 GitHub 仓库
5. 保持默认设置（Framework Preset: Other），点击 Deploy
6. 部署完成后，设置自定义域名为 `laoli-aiic.com`

### 方法二：命令行部署

```bash
# 安装 Vercel CLI
npm install -g vercel

# 在项目目录中部署
cd /path/to/laoli-aiic-site
vercel

# 关联域名
vercel --prod
```

> 当前现有网站的文件可以保留备份。部署前建议先将现有网站完整下载到本地作为备份。

## 页面说明

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 丛书总览 + 知识库 + 关于作者 |
| 书1详情 | `/books/book-01.html` | 半导体实战 |
| 书2详情 | `/books/book-02.html` | 先进封装设计实战（已完稿） |
| 书3详情 | `/books/book-03.html` | EDA 封装验证实战 — Cadence 版 |
| 书4详情 | `/books/book-04.html` | MCM 多芯片封装 |
| 书5详情 | `/books/book-05.html` | SiP 系统级封装 |
| 3D 工具 | `/tools/3d-packaging.html` | 交互式 3D 封装结构可视化 |
