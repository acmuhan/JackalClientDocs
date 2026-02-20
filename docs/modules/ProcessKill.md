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
ProcessKill（进程击杀）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Method、Notify Kill。

配置项
- Method（方法）
 类型：枚举；默认："Chain"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Chain ，确认稳定后再逐项切换比较效果。
 可选：Chain（链式）；Normal（普通）；Thread Killer（线程杀手）；Thread Patcher（线程补丁）；Winsta（未收录）；Debugger（未收录）；Job（未收录）；WMI（未收录）；Kernel（未收录）
- Kill Names (Sep with Semicolon)（杀名称 (用分号分隔)）
 类型：文本；默认："dwm.exe"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Kill PID（杀PID）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Notify Kill（通知击杀）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Disable After Attempt（尝试之后关闭）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Keep（保持）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
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

