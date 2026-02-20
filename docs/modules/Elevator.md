Elevator
电梯
分类：Process
描述：使用驱动程序提升进程权限，无需重启它。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：是
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Elevator 是 JackalClient 的 Process 分类模块。启用后会围绕 电梯 这一能力工作，核心行为是：使用驱动程序提升进程权限，无需重启它。

配置项
- Max Process Count：类型=数值，默认=8
- Process Name (Empty For Any)：类型=文本，默认="JackalClient.exe"
- Process Id (Zero For Any)：类型=数值，默认=0

历史更新
- 23. 添加使用驱动的模块：Elevator，使用驱动程序提升目标进程权限。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)
- [ListServices (枚举服务)](./ListServices.md)

相关资料
无
