/* 六大工程实战产品详情数据 */
var PRODUCT_DETAILS = {
  "01": {
    title: "半导体实战：从设计到应用全流程指南",
    subtitle: "建立芯片全生命周期的工程知识地图",
    accent: "#3b82f6",
    meta: ["通识入门", "148 页", "全生命周期"],
    intro: "本书从产品需求与芯片架构出发，依次讲清设计、制造、封装、测试、可靠性、质量与客户应用之间的关系。它不是术语词典，而是一张帮助工程师理解上下游协作和项目决策的全景地图。",
    audience: "芯片行业新人、转岗工程师、项目经理、质量与供应链人员，以及希望系统补齐半导体产业链知识的读者。",
    highlights: ["设计到量产的完整主线", "工程、质量与商业视角结合", "关键评审点与常见风险", "适合快速建立行业全局观"],
    chapters: ["半导体产业链与产品生命周期", "产品定义与芯片架构", "晶圆制造关键工艺", "封装技术与选型逻辑", "芯片测试与量产筛选", "可靠性验证与失效分析", "研发质量与供应链质量", "客户应用与问题闭环", "车规芯片的特殊要求", "项目复盘与工程检查清单"],
    samples: [
      {title:"精选一：如何从产品需求反推芯片方案", body:"芯片项目的起点不是电路图，而是应用场景。工程团队需要先把性能、功耗、成本、尺寸、寿命和工作环境转化为可验证的技术指标，再决定工艺平台、封装形式与测试策略。\n\n真正有效的产品定义应同时给出目标值、容差、验证条件和失效边界。只有这些条件被明确，后续设计评审才不会变成各专业之间的主观争论。"},
      {title:"精选二：量产不是设计完成后的最后一步", body:"量产能力要在设计阶段被考虑。晶圆波动、封装翘曲、测试覆盖率和供应链交期都会影响最终良率与成本。设计团队必须提前定义关键质量特性，并与制造、封测和质量团队共同确认控制方法。\n\n好的量产导入不是消灭所有问题，而是让问题能够被及时发现、快速定位并形成闭环。"}
    ]
  },
  "02": {
    title: "先进封装设计实战",
    subtitle: "2.5D / 3D IC、Chiplet 与 Cadence 设计全流程",
    accent: "#06b6d4",
    meta: ["设计方法", "337 页", "2.5D / 3D IC"],
    intro: "围绕先进封装项目的真实设计顺序，从需求分析、芯粒规划、互连架构和中介层设计，一直推进到 SI/PI、热机械协同、DRC/LVS 与生产输出。重点解释每一步为什么这样做，以及不同约束之间如何权衡。",
    audience: "先进封装、基板、封装设计与 SI/PI 工程师，Chiplet 项目负责人，以及准备从传统封装转向 2.5D/3D IC 的团队。",
    highlights: ["Chiplet 架构与接口规划", "凸点、RDL 与中介层协同", "SI / PI / 热 / 应力联合评估", "从需求到生产输出的完整流程"],
    chapters: ["先进封装技术全景", "Chiplet 系统架构与分区", "封装需求与约束定义", "Die / Chiplet 数据准备", "微凸点与 BGA 阵列规划", "2.5D 中介层设计", "3D 堆叠与 TSV 规划", "RDL 与高速互连布线", "电源网络与回流路径", "SI / PI 协同仿真", "热设计与机械可靠性", "DRC / LVS 与签核", "DFM、可测性与量产输出"],
    samples: [
      {title:"精选一：Chiplet 分区不是简单拆芯片", body:"合理的 Chiplet 分区要同时考虑工艺收益、接口带宽、功耗密度、测试边界和良率。逻辑上适合拆分的模块，不一定适合在封装上跨芯粒连接。\n\n工程评审时应建立接口矩阵，逐项记录带宽、延迟、摆幅、时钟、供电域与测试方式，再根据互连距离和封装资源确定最终分区。"},
      {title:"精选二：中介层逃线的核心是协同", body:"凸点阵列、通道数量、线宽线距、过孔结构和电源回流必须同步规划。只追求信号逃出而忽略参考平面，会在后续 SI/PI 阶段付出更高代价。\n\n建议先完成关键高速接口和电源域的拓扑草案，再锁定阵列与层数，最后进入详细布线。"}
    ]
  },
  "03": {
    title: "EDA 封装验证实战",
    subtitle: "Cadence 17.4 与 Siemens 双生态操作指南",
    accent: "#8b5cf6",
    meta: ["工具实战", "双生态", "验证签核"],
    intro: "本产品把封装设计数据准备、规则设置、版图检查和仿真验证串成可执行的工具流程。Cadence 与 Siemens 两条路线分别说明常用操作，并强调工具之间的数据接口、检查逻辑和结果复核。",
    audience: "EDA 封装设计、版图验证、CAD、SI/PI 与设计支持工程师，以及需要建立企业封装验证流程的团队。",
    highlights: ["Cadence 17.4 操作路径", "Siemens 设计案例手册", "DRC / LVS / DFM 签核", "工具结果的工程化复核"],
    chapters: ["EDA 封装工具链概览", "项目与数据库建立", "叠层、材料与单位设置", "元件库与封装数据准备", "约束管理与规则模板", "布局、布线与平面处理", "DRC 规则建立与调试", "LVS / 连通性验证", "3D 装配与碰撞检查", "SI / PI 数据接口", "DFM 与制造数据输出", "Cadence 案例操作", "Siemens 案例操作", "签核报告与版本管理"],
    samples: [
      {title:"精选一：规则设置前先建立规则来源", body:"EDA 规则不应只存在于工具界面。每条线宽、间距、过孔和阻焊要求都应能追溯到制造能力、设计规范或产品特殊约束。\n\n建议使用规则矩阵记录来源、适用层、对象、数值和例外条件，再导入工具。这样既便于审查，也能避免项目复制时带入过期规则。"},
      {title:"精选二：DRC 通过不等于设计可生产", body:"DRC 检查的是已编码的规则，而不是全部工程风险。铜平衡、局部密度、装配公差、测试探针空间和制造拼版等问题，往往需要 DFM 与人工评审补充。\n\n签核报告应区分工具检查、制造商检查和工程师评审三类结论。"}
    ]
  },
  "04": {
    title: "MCM + SiP 封装设计仿真实战",
    subtitle: "多芯片与系统级封装从架构到交付",
    accent: "#0d9488",
    meta: ["系统集成", "386 页", "含三类 SiP 案例"],
    intro: "将 MCM 多芯片模块与 SiP 系统级封装放在同一工程框架下，讲解芯片组合、基板设计、异质工艺协同、多物理场仿真、测试策略与量产交付，并配套 RF、TWS 和电源管理 SiP 案例。",
    audience: "MCM、SiP、模组、射频与系统集成工程师，封装项目经理，以及负责多芯片产品仿真和量产导入的团队。",
    highlights: ["MCM 与 SiP 统一设计框架", "Wire Bond / Flip Chip 混装", "RF、TWS、电源管理案例", "SI / PI / 热联合验证"],
    chapters: ["MCM 与 SiP 技术边界", "系统需求与功能分解", "芯片、无源器件与工艺选型", "基板叠层和材料", "多芯片布局与互连规划", "Wire Bond / Flip Chip 混装", "射频隔离与电磁兼容", "电源网络与去耦", "信号完整性验证", "热设计与结构可靠性", "DFT 与系统级测试", "制造数据与工艺协同", "RF 前端 SiP 案例", "TWS 蓝牙 SiP 案例", "电源管理 SiP 案例", "量产交付与问题闭环"],
    samples: [
      {title:"精选一：多芯片布局从功能分区开始", body:"布局的第一步不是摆放器件，而是把射频、数字、电源、存储和敏感模拟区域划分清楚。随后根据接口关系、热源位置与装配工艺确定芯片朝向和相对距离。\n\n对混装 SiP，还要提前预留焊线弧高、倒装回流和底填胶流动空间，避免电气最优方案在工艺阶段无法实现。"},
      {title:"精选二：系统级测试必须在架构阶段定义", body:"SiP 封装完成后，内部节点可能不再可访问。若不提前规划测试通道、旁路模式与已知良品策略，最终测试成本和失效定位难度会显著上升。\n\n项目应为每颗芯片定义来料状态、封装前测试、封装后覆盖率和失效隔离方法。"}
    ]
  },
  "05": {
    title: "MCM 封装工艺控制计划",
    subtitle: "从工艺流程、CTQ 到 PFMEA 的量产质量体系",
    accent: "#059669",
    meta: ["质量方法", "89 页", "Control Plan + PFMEA"],
    intro: "面向 MCM-L / MCM-D 量产导入，把工艺流程、关键质量特性、控制方法、抽样频次、反应计划与 PFMEA 串联起来，可作为项目策划、供应商审核和现场质量改进的基础模板。",
    audience: "封装 NPI、工艺、质量、供应商质量、可靠性与项目管理人员，以及需要建立 MCM 量产控制体系的团队。",
    highlights: ["完整工艺流程展开", "CTQ 与控制计划联动", "AIAG & VDA PFMEA 思路", "异常反应与闭环机制"],
    chapters: ["MCM 产品与工艺范围", "工艺流程图建立", "来料与芯片验收", "基板清洗与等离子处理", "Die Attach 工艺控制", "Wire Bond / Flip Chip 控制", "底填、塑封与固化", "切割、清洗与外观", "电性能与可靠性筛选", "CTQ 识别与量测系统", "控制计划编制", "PFMEA 结构与评分", "高风险失效模式", "SPC 与反应计划", "变更管理与持续改进"],
    samples: [
      {title:"精选一：控制计划必须回答五个问题", body:"每个控制项都应明确控制什么、用什么方法、何时检查、由谁负责以及异常后如何反应。只列参数和规格而没有反应计划，不能形成真正的过程控制。\n\n对于关键工序，还应补充量测系统分析、设备防错、首件确认和停线升级条件。"},
      {title:"精选二：PFMEA 的价值在于推动预防", body:"PFMEA 不是评分比赛。团队应先描述功能和失效链，再判断现有预防控制与探测控制是否真正有效。行动措施要能够改变发生概率或提升探测能力。\n\n完成行动后需要重新评价风险，并将有效措施同步到控制计划、作业指导书和审核表。"}
    ]
  },
  "06": {
    title: "ANSYS 2022 + Icepak 热与应力分析",
    subtitle: "面向 IC 封装、BEOL 与 TSV 的多物理场实战",
    accent: "#e11d48",
    meta: ["热应力仿真", "56 页", "Icepak + Mechanical"],
    intro: "以 ANSYS 2022 平台为基础，覆盖 Icepak 热模型建立、材料与边界条件、网格和收敛控制，并将温度场映射到 Mechanical 进行封装、BEOL 与 TSV 结构应力分析。",
    audience: "封装热设计、结构可靠性、仿真、产品与失效分析工程师，以及需要快速建立热—应力耦合流程的团队。",
    highlights: ["Icepak 热模型完整流程", "BEOL / TSV 局部建模", "温度场到结构场映射", "结果可信度与敏感性分析"],
    chapters: ["封装热与应力问题概览", "ANSYS 2022 工作平台", "Icepak 几何与简化原则", "材料参数与功耗加载", "环境、对流与接触边界", "网格策略与独立性检查", "稳态与瞬态热分析", "温度场结果判读", "Mechanical 结构模型", "热—应力数据映射", "BEOL 层间应力分析", "TSV 热失配与局部应力", "翘曲与界面风险", "参数敏感性与优化", "报告输出与模型复核"],
    samples: [
      {title:"精选一：热模型简化要守住热阻路径", body:"模型并非越细越准确。对于系统级热分析，应优先保留芯片、TIM、封装体、基板、散热器和空气通道等主要热阻路径；对远离热点且影响很小的细节可以等效处理。\n\n任何简化都应通过能量守恒和温升对比进行验证，并记录等效参数的来源。"},
      {title:"精选二：TSV 应力关注界面而不只看峰值", body:"TSV 与硅之间的热膨胀系数差异会在升降温过程中产生周期性应力。结果评估除了最大等效应力，还应观察界面剪切、径向应力、关键温度点和距离 TSV 的衰减规律。\n\n局部网格、材料非线性和参考温度会显著影响结果，必须在报告中明确。"}
    ]
  }
};

(function renderProductDetail() {
  var root = document.querySelector('[data-product-id]');
  if (!root) return;
  var id = root.getAttribute('data-product-id');
  var product = PRODUCT_DETAILS[id];
  if (!product) return;

  document.title = product.title + ' — 芯片专家老李Ai';
  document.documentElement.style.setProperty('--product-accent', product.accent);
  document.querySelector('[data-title]').textContent = product.title;
  document.querySelector('[data-subtitle]').textContent = product.subtitle;
  document.querySelector('[data-number]').textContent = id;
  document.querySelector('[data-intro]').textContent = product.intro;
  document.querySelector('[data-audience]').textContent = product.audience;
  document.querySelector('[data-meta]').innerHTML = product.meta.map(function(item) { return '<span>' + item + '</span>'; }).join('');
  document.querySelector('[data-highlights]').innerHTML = product.highlights.map(function(item) { return '<li>' + item + '</li>'; }).join('');
  document.querySelector('[data-chapters]').innerHTML = product.chapters.map(function(item, index) { return '<li><span>' + String(index + 1).padStart(2, '0') + '</span>' + item + '</li>'; }).join('');
  document.querySelector('[data-samples]').innerHTML = product.samples.map(function(sample) { return '<article class="sample-chapter"><h3>' + sample.title + '</h3>' + sample.body.split('\n\n').map(function(p) { return '<p>' + p + '</p>'; }).join('') + '</article>'; }).join('');
})();
