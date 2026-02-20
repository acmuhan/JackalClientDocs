QuickRun
快捷运行
分类：未分类
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
QuickRun 是 JackalClient 的 未分类 分类模块。启用后会围绕 快捷运行 这一能力工作，核心行为是：暂无描述

配置项
- Confirm Before Scanning：类型=布尔，默认=true
- Scan Skip System Files：类型=布尔，默认=false
- Scan Policy：类型=枚举，默认="Lazy"
- Scan Skip Readonly Files：类型=布尔，默认=false
- Output Error：类型=布尔，默认=false
- Scan Skip Hidden Files：类型=布尔，默认=false
- Output While Scanning：类型=布尔，默认=true
- Execution：类型=枚举，默认="system & pause"
- Unknown Command Auto Resolve：类型=枚举，默认="Off"
- Remember Multi-Result Selection：类型=布尔，默认=true

历史更新
- 32. 完善 /quickrun ，先扫描 Program Files，如果无结果再扫描全盘。
- 11. 添加模块：QuickRun，需要用指令调用。
- 27. 完善 QuickRun 模块。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无
