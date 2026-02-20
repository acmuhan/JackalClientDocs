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
Injector（注入器）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Method、Execution Policy。
该模块属于不安全能力，建议先备份关键数据并确认回滚路径。

配置项
- Method（方法）
 类型：枚举；默认："NtCreateThreadEx"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 NtCreateThreadEx ，确认稳定后再逐项切换比较效果。
 可选：CreateRemoteThread（未收录）；NtCreateThreadEx（未收录）；QueueUserAPC（未收录）；Reflective（反射式）；Reflective (External)（反射式 (外部)）
- Execution Policy（执行策略）
 类型：枚举；默认："Async"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Async ，确认稳定后再逐项切换比较效果。
 可选：Sync（同步）；Async（异步）；Async NoWait（异步不等待）
- Operation（操作）
 类型：枚举；默认："InjectDll"
 说明：这是选项型配置。默认值 InjectDll 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：InjectDll（注入DLL）；UninjectDll（取消注入DLL）
- Process Architecture（进程架构）
 类型：枚举；默认："Both"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Both（两者）；x64（x64）；x86（x86）
- Exclude Self（排除自身）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Process Name (Empty For Any)（进程名 (用空指代任何)）
 类型：文本；默认："cmd.exe"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Process Id (Zero For Any)（进程ID (用0指代任何)）
 类型：数值；默认：0
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Dll Path（DLL路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Max Process Count（最大进程数量）
 类型：数值；默认：8
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
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

