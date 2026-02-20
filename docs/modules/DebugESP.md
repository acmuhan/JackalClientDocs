DebugESP
调试透视
分类：Process
描述：接收并输出进程的调试字符串。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DebugESP 是 JackalClient 的 Process 分类模块。启用后会围绕 调试透视 这一能力工作，核心行为是：接收并输出进程的调试字符串。

配置项
- Chatter Type：类型=枚举，默认="Top"
- Capture Global Win32 (Admin Required)：类型=布尔，默认=false
- Capture Win32：类型=布尔，默认=true
- Show Namespace Source：类型=布尔，默认=false
- Show Process Source：类型=枚举，默认="Both"
- Anti Spam：类型=布尔，默认=true
- Display Mode：类型=枚举，默认="Chatter"

历史更新
- 25. 添加模块：Debug ESP，捕获并显示应用程序的调试信息，就跟 Debugview 一样。

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
