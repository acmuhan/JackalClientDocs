RemoteRun
远程执行
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
RemoteRun（远程执行）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Execution Policy。
该模块属于不安全能力，建议先备份关键数据并确认回滚路径。

配置项
- Execution Policy（执行策略）
 类型：枚举；默认："Async"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Async ，确认稳定后再逐项切换比较效果。
 可选：Sync（同步）；Async（异步）；Async NoWait（异步不等待）
- Process Architecture（进程架构）
 类型：枚举；默认："Both"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Both（两者）；x64（x64）；x86（x86）
- Injection Architecture（注入架构）
 类型：枚举；默认："Auto"
 说明：这是选项型配置。默认值 Auto 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Auto（自动）；x64（x64）；x86（x86）
- Exclude Self（排除自身）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Process Name (Empty For Any)（进程名 (用空指代任何)）
 类型：文本；默认："cmd.exe"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Process Id (Zero For Any)（进程ID (用0指代任何)）
 类型：数值；默认：0
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Command Line（命令行）
 类型：文本；默认："cmd.exe /c echo Jackal On Crack! && pause"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Max Process Count（最大进程数量）
 类型：数值；默认：8
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
历史更新
- 9. 为 RemoteRun 添加配置：
- 14. 添加模块 RemoteRun，通过注入在另一个进程中开线程运行命令。

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

