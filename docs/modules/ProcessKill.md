ProcessKill
进程击杀
分类：Process
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ProcessKill 是 JackalClient 的 Process 分类模块。启用后会围绕 进程击杀 这一能力工作，核心行为是：暂无描述

配置项
- Disable After Attempt：类型=布尔，默认=true
- Kill PID：类型=数值，默认=0
- Kill Names (Sep with Semicolon)：类型=文本，默认="dwm.exe"
- Method：类型=枚举，默认="Chain"
- Notify Kill：类型=布尔，默认=true
- Keep：类型=布尔，默认=false

历史更新
- 32. 为模块 ProcessKill 添加配置：
- 33. 修复 ProcessKill 只指定 PID 时不工作的问题。
- 8. 将 ProcessKill 的 Kill Name 改为 Kill Names (Sep with Semicolon)，意味着可以同时指定杀多个进程了，只要在 Kill PID 那里填0就可以了。

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
