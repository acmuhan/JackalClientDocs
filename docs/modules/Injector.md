Injector
注入器
分类：Process
描述：暂无描述

需求
- 安全级别：不安全模块（谨慎使用）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Injector 是 JackalClient 的 Process 分类模块。启用后会围绕 注入器 这一能力工作，核心行为是：暂无描述

配置项
- Operation：类型=枚举，默认="InjectDll"
- Process Id (Zero For Any)：类型=数值，默认=0
- Process Name (Empty For Any)：类型=文本，默认="cmd.exe"
- Dll Path：类型=文本，默认=""
- Max Process Count：类型=数值，默认=8
- Process Architecture：类型=枚举，默认="Both"
- Exclude Self：类型=布尔，默认=true
- Method：类型=枚举，默认="NtCreateThreadEx"
- Execution Policy：类型=枚举，默认="Async"

历史更新
- 13. 添加模块 Injector, 支持自定义模块注入。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

相关资料
无
