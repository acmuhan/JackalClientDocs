Volume
音量
分类：Misc
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Volume 是 JackalClient 的 Misc 分类模块。启用后会围绕 音量 这一能力工作，核心行为是：暂无描述

配置项
- System Volume Max：类型=数值，默认=50
- System Volume Min：类型=数值，默认=1
- Temp HUD Animation Duration (ms)：类型=数值，默认=300L
- Process Volume HUD Style：类型=枚举，默认="Bottom"
- Process Volume Smart ID Infer：类型=布尔，默认=true
- Step (%%)：类型=数值，默认=5U
- Off：类型=文本，默认="Once On Launch", "Output Device Changed", "Output Device Name Keyword When Chan ...
- Hide HUD When Menu On：类型=布尔，默认=false
- System Volume HUD Style：类型=枚举，默认="Bottom"
- Auto Mute Output Device Name Keyword (Exclude)：类型=文本，默认="耳机"
- Vol-：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LSHIFT, VK_DOWN}}}
- Vol+：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LSHIFT, VK_UP}}}
- Limit System Volume：类型=布尔，默认=false
- Auto Mute Output Device Name Keyword (Include)：类型=文本，默认=""
- Wheel Detect Only If Cursor Visible：类型=布尔，默认=true
- Wheel System Volume Adjust：类型=枚举，默认="Mouse On Taskbar"
- Wheel Process Volume Adjust：类型=枚举，默认="Mouse On Caption"
- Volume Mode：类型=枚举，默认="System"
- Wheel Volume Step：类型=数值，默认=5U
- Temp HUD Duration (ms)：类型=数值，默认=3000L
- Process Volume HUD：类型=枚举，默认="Temp"
- Mute：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LSHIFT, 'M'}}}
- System Volume HUD：类型=枚举，默认="Temp"
- Auto Mute：类型=枚举，默认="Off"
- Auto Mute Notify：类型=枚举，默认="Title"
- Notify Type：类型=枚举，默认="Off"

历史更新
- 1. 修复 Volume 模块内的按键绑定错误的问题。
- 17. 将 Volume 模块的三个按键改成自定义。
- 10. 添加模块 Volume ，用于辅助调节音量。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无
