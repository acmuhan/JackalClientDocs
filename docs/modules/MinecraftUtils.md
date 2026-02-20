MinecraftUtils
MC功能
分类：Control
描述：一些MC上的实用功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MinecraftUtils 是 JackalClient 的 Control 分类模块。启用后会围绕 MC功能 这一能力工作，核心行为是：一些MC上的实用功能。

配置项
- Log Game Chat Speak Translator：类型=布尔，默认=false
- Key Input Method：类型=枚举，默认="SendInput"
- Auto Read Keybinds：类型=布尔，默认=true
- Right Key：类型=按键/复合，默认={{"Keybind", {'D'}}}
- Forward Key：类型=按键/复合，默认={{"Keybind", {'W'}}}
- Left Key：类型=按键/复合，默认={{"Keybind", {'A'}}}
- Inventory Key：类型=按键/复合，默认={{"Keybind", {'E'}}}
- Input Method (Chat)：类型=枚举，默认="Ignore"
- Sprint Key：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL}}}
- Backward Key：类型=按键/复合，默认={{"Keybind", {'S'}}}
- Auto Sprint (Forward)：类型=布尔，默认=true
- Log Parser Update Cooldown (ms)：类型=数值，默认=300L
- Log Game Chat Chatter Color：类型=枚举，默认="Colorful"
- Log Parser Notify：类型=布尔，默认=false
- Log Cache Max Lines：类型=数值，默认=32L
- Input Method (Game)：类型=枚举，默认="Ignore"
- Save Move Keys Release Interval (ms)：类型=数值，默认=10L
- In Game Detection：类型=枚举，默认="Auto"
- Log Game Chat Output Filter Mode：类型=枚举，默认="Warn & Block"
- Use Key：类型=按键/复合，默认={{"Keybind", {VK_RBUTTON}}}
- Command Key：类型=按键/复合，默认={{"Keybind", {VK_OEM_2}}}
- Log Parser UTF-8：类型=布尔，默认=true
- Save Move Keys (PRO)：类型=布尔，默认=true
- Log Game Chat Chatter Type：类型=枚举，默认="Top"
- Window Center Radius：类型=数值，默认=100.0f
- Sneak Key：类型=按键/复合，默认={{"Keybind", {VK_LSHIFT}}}
- Attack Key：类型=按键/复合，默认={{"Keybind", {VK_LBUTTON}}}
- Log Game Chat Output Mode (PRO)：类型=枚举，默认="Notify"
- Auto Read Cooldown (ms)：类型=数值，默认=60000L
- Auto Sprint (Attack)：类型=布尔，默认=true
- Log Parser Utilities：类型=布尔，默认=true
- Jump Key：类型=按键/复合，默认={{"Keybind", {VK_SPACE}}}
- Chat Key：类型=按键/复合，默认={{"Keybind", {'T'}}}
- Log Game Chat Output Filter：类型=布尔，默认=true

历史更新
- 52. 为 Minecraft Utils 添加配置：
- 13. 修复 MinecraftUtils 的 Log Parser Utilities 尝试对基岩版启动解析的问题。
- 8. 添加模块：MinecraftUtils，关于MC的合法功能

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
