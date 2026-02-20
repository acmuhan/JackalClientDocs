CompileESP
编译透视
[PRO]
分类：Process
描述：监控编译器进程并通知编译开始/结束。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
CompileESP 是 JackalClient 的 Process 分类模块。启用后会围绕 编译透视 这一能力工作，核心行为是：监控编译器进程并通知编译开始/结束。

配置项
- Hide HUD When Menu On：类型=布尔，默认=false
- HUD Show Task Count：类型=布尔，默认=true
- HUD Background Roundness：类型=数值，默认=0.3f
- HUD Background Opacity (0~1)：类型=数值，默认=0.35f
- HUD Subtext：类型=枚举，默认="Type + Duration"
- HUD Fade In Duration (ms)：类型=数值，默认=2000L
- HUD Text Line Gap：类型=数值，默认=3
- HUD：类型=布尔，默认=true
- Check Cooldown (ms)：类型=数值，默认=300L
- HUD Text Font Size：类型=数值，默认=24
- HUD Text Gap：类型=数值，默认=8
- HUD Text Color：类型=枚举，默认="White"
- Compiler Process Blacklist (Regex Sep With Semicolon)：类型=文本，默认=""
- HUD Padding：类型=数值，默认=14
- Compiler Process Blacklist Enabled：类型=布尔，默认=false
- HUD Background：类型=布尔，默认=true
- HUD Loading Color 2：类型=枚举，默认="Sky Blue"
- Compiler Process Whitelist (Regex Sep With Semicolon)：类型=文本，默认=""
- HUD Main Text：类型=文本，默认="Compiling..."
- HUD Extra Height：类型=数值，默认=12
- HUD Loading Color 1：类型=枚举，默认="Aqua"
- HUD Subtext Color：类型=枚举，默认="Aqua"
- HUD X Rate：类型=数值，默认=0.5f
- Show Duration：类型=布尔，默认=true
- HUD Loading Thickness：类型=数值，默认=5.0f
- Arraylist Extra Info：类型=枚举，默认="Type"
- HUD Background Color：类型=枚举，默认="Black"
- Show Command Line：类型=布尔，默认=false
- HUD Fade Out Duration (ms)：类型=数值，默认=1000L
- HUD Loading Period (ms)：类型=数值，默认=1800L
- Show PID：类型=布尔，默认=true
- HUD Opacity (0~1)：类型=数值，默认=0.92f
- HUD Loading Radius：类型=数值，默认=18.0f
- HUD Y Rate：类型=数值，默认=0.56f

历史更新
- 34. 【PRO】添加 CompileESP 模块：监控常见编译器进程（Java / C / C++，支持 MSVC/GCC/Clang），在编译开始和结束时发送通知。
- 35. 【PRO】为 CompileESP 添加可配置项：开始/结束通知模式、PID/命令行/耗时显示、编译器进程白名单/黑名单、检查间隔。以及各种HUD配置项。

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
