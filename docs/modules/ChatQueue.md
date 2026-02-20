ChatQueue
聊天队列
分类：Control
描述：管理MC的聊天发送任务。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ChatQueue 是 JackalClient 的 Control 分类模块。启用后会围绕 聊天队列 这一能力工作，核心行为是：管理MC的聊天发送任务。

配置项
- HUD Y Rate：类型=数值，默认=0.1f
- Hide HUD When Menu On：类型=布尔，默认=false
- HUD Out Sharpness：类型=数值，默认=20.0f
- HUD Hide Auto Account：类型=布尔，默认=true
- HUD Background Opacity (0~1)：类型=数值，默认=0.55f
- Transparent：类型=通用，默认=NAMED_COLOR_BASE_LIST
- HUD Background Round Corners：类型=布尔，默认=true
- HUD Highlight Cooldown：类型=枚举，默认="Override"
- HUD Current Instance Only：类型=布尔，默认=true
- Target Unique Message：类型=布尔，默认=true
- HUD Background Roundness：类型=数值，默认=0.35f
- Chat Send Task Lifetime (s)：类型=数值，默认=30.0f
- HUD：类型=布尔，默认=true
- Chat Send Required Idle Time (ms)：类型=数值，默认=1500L
- HUD Text Font Size：类型=数值，默认=25
- Chat Send Cooldown (s)：类型=数值，默认=20.0f
- HUD Item Width：类型=数值，默认=300
- HUD Move Sharpness：类型=数值，默认=18.0f
- HUD In Sharpness：类型=数值，默认=16.0f
- HUD Background Shadow Opacity (0~1)：类型=数值，默认=0.45f
- Clear Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, 'F'}}}
- HUD X Rate：类型=数值，默认=0.7f
- HUD Item Gap：类型=数值，默认=10
- HUD Text Opacity (0~1)：类型=数值，默认=1.0f
- HUD Item Height：类型=数值，默认=60
- HUD Leave Max Time (ms)：类型=数值，默认=2200L
- HUD Title：类型=布尔，默认=true
- Pause Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, '0'}}}
- Clear When Bed Destroyed：类型=布尔，默认=true
- HUD Time Countdown：类型=布尔，默认=true
- Send Queue Front Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_ADD}}}
- HUD Background：类型=布尔，默认=true
- HUD Hide Auto L：类型=布尔，默认=false
- HUD Background Shadow Thickness：类型=数值，默认=2.0f
- HUD Max Items：类型=数值，默认=5
- Clear When Team Eliminated：类型=布尔，默认=true
- Block Keyboard While Sending：类型=布尔，默认=true
- HUD Item Width Strict：类型=布尔，默认=false
- HUD Background Shadow：类型=布尔，默认=true
- Discard Queue Front Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_SUBTRACT}}}

历史更新
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。
- 69. 添加模块：Auto Text，包括 AutoGG, AutoThankWatchdog, AutoLogin, AutoRegister 等，在 Minecraft 自动发送文本。建议打开 ChatQueue 模块实时查看待发送消息队列。
- 70. 添加模块：Chat Queue，管理 Minecraft 消息发送队列，并提供一个 HUD，可以显示每条消息的剩余时间以及发送冷却的情况。

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
