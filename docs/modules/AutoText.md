AutoText
自动文本
分类：Control
描述：特定情况下自动发送指定文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoText 是 JackalClient 的 Control 分类模块。启用后会围绕 自动文本 这一能力工作，核心行为是：特定情况下自动发送指定文本。

配置项
- Password Source：类型=枚举，默认="Fixed"
- Auto Register (PRO)：类型=布尔，默认=false
- Auto Thank Watchdog Content (Heypixel)：类型=文本，默认="少羽牛逼"
- Auto Thank Watchdog：类型=布尔，默认=true
- Auto Thank Watchdog Mode：类型=枚举，默认="Smart Send"
- Auto GG Mode：类型=枚举，默认="Smart Send"
- Password (Fixed)：类型=文本，默认="123456"
- Auto Talk Back (Experimental)：类型=布尔，默认=false
- Auto GG (PRO)：类型=布尔，默认=true
- Auto Thank Watchdog Content (Hypixel)：类型=文本，默认="Thanks Watchd0g!!!"
- Auto Login (PRO)：类型=布尔，默认=false
- Auto GG Content (Defeat)：类型=文本，默认="gg"
- Auto GG Content (Victory)：类型=文本，默认="gg"
- Password File Path：类型=文本，默认=""

历史更新
- 30. 修复 AutoText 未启用时仍 Auto Thank Watchdog 的问题。
- 5. 【PRO】修复了 AutoText 没有启用的情况下启用 Auto Login / Auto Register 仍会触发的问题。
- 69. 添加模块：Auto Text，包括 AutoGG, AutoThankWatchdog, AutoLogin, AutoRegister 等，在 Minecraft 自动发送文本。建议打开 ChatQueue 模块实时查看待发送消息队列。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无
