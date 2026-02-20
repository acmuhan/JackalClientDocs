AutoClicker
连点器
分类：Control
描述：自动帮助你飞快地点击鼠标。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoClicker 是 JackalClient 的 Control 分类模块。启用后会围绕 连点器 这一能力工作，核心行为是：自动帮助你飞快地点击鼠标。

配置项
- Extra Key Sound：类型=文本，默认="kbhit_2.wav"
- Extra Key Hotkey：类型=按键/复合，默认={{"Keybind", {0}}}
- Extra Key Enabled：类型=布尔，默认=false
- Click Shake Max Radius：类型=数值，默认=8
- Interrupt Key 1：类型=按键/复合，默认={{"Keybind", {'E'}}}
- Extra Key Trigger Mode：类型=枚举，默认="Hotkey Hold"
- Notify Mode：类型=枚举，默认="Notify"
- Right CPS Min：类型=数值，默认=6U
- Interrupt Key 4：类型=按键/复合，默认={{"Keybind", {VK_OEM_2}}}
- Left Trigger Mode：类型=枚举，默认="Assist (PRO
- Right Blatant Mode：类型=布尔，默认=false
- Window Message Cancel Extra Up：类型=布尔，默认=false
- Assist Interrupt Cooldown (ms)：类型=数值，默认=3000L
- CPS Fast Stop：类型=布尔，默认=true
- Keep Target Window Active：类型=布尔，默认=false
- Only When Cursor Hidden：类型=布尔，默认=false
- Extra Key CPS Max：类型=数值，默认=15U
- Pause Shake While Not Moving：类型=布尔，默认=true
- Extra Custom Key Code：类型=数值，默认=32
- Left Blatant Mode：类型=布尔，默认=false
- Only Window Center Radius：类型=数值，默认=100.0
- Assist Mode CPS Threshold：类型=数值，默认=5
- TargetKey Hold Threshold Time：类型=数值，默认=700U
- Right CPS Max：类型=数值，默认=11U
- Interrupt Key 2：类型=按键/复合，默认={{"Keybind", {'T'}}}
- Stop When Menu On：类型=布尔，默认=true
- Click Point Setting：类型=枚举，默认="Manual"
- Only Window Center：类型=布尔，默认=false
- Left Sound：类型=文本，默认="jclick.wav"
- Only Trigger While Moving：类型=布尔，默认=false
- Left CPS Max：类型=数值，默认=14U
- Only In Minecraft Window：类型=布尔，默认=false
- Left Mouse Button Enabled：类型=布尔，默认=true
- Extra Key CPS Min：类型=数值，默认=8U
- Window Message Cancel Left Up：类型=布尔，默认=false
- Click Internal Gap：类型=数值，默认=5U
- Window Message Cancel Right Up：类型=布尔，默认=false
- Right Hotkey：类型=按键/复合，默认={{"Keybind", {VK_XBUTTON1}}}
- CPS Transition Speed：类型=数值，默认=0.2f
- Gap Random Deviation (%%)：类型=数值，默认=10U
- Left CPS Min：类型=数值，默认=7U
- Right Mouse Button Enabled：类型=布尔，默认=true
- Right Trigger Mode：类型=枚举，默认="Assist (PRO
- Extra Key Blatant Mode：类型=布尔，默认=false
- Left Hotkey：类型=按键/复合，默认={{"Keybind", {VK_XBUTTON2}}}
- Click Method：类型=枚举，默认="WMessage"
- Extra Target Key：类型=枚举，默认="Custom"
- Interrupt Key 3：类型=按键/复合，默认={{"Keybind", {VK_ESCAPE}}}
- Right Sound：类型=文本，默认="nclick.wav"

历史更新
- 8. 大幅度升级 AutoClicker 连点器模块，将左键、右键和额外键分开来，独立设置CPS（范围）、触发方式。
- 27. 为 Auto Clicker 连点器增加配置：
- 1. Auto Clicker: 连点器功能。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

相关资料
无
