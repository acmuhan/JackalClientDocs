MacroPlayer
宏播放
分类：Control
描述：播放键盘和鼠标操作的宏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MacroPlayer 是 JackalClient 的 Control 分类模块。启用后会围绕 宏播放 这一能力工作，核心行为是：播放键盘和鼠标操作的宏。

配置项
- Start Delay (ms)：类型=数值，默认=3000L
- Actionbar Display Mouse Wheel：类型=布尔，默认=true
- Perform Window Assertions：类型=布尔，默认=true
- Playing HUD：类型=枚举，默认="Off"
- Close Menu：类型=布尔，默认=true
- Playing HUD X Rate：类型=数值，默认=0.05f
- bind (Enable)：类型=按键/复合，默认={{"Keybind", {0}}}
- adjust offset (Earlier)：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_UP}}}
- bind (Disable)：类型=按键/复合，默认={{"Keybind", {0}}}
- Actionbar Display Mouse Move：类型=布尔，默认=true
- Adjust Offset Step (ms)：类型=数值，默认=50L
- Actionbar Display Key Press：类型=布尔，默认=true
- Playing HUD Font Size：类型=数值，默认=50
- Macro Path：类型=文本，默认=""
- Reset Keyboard When Disable：类型=布尔，默认=true
- Notify：类型=布尔，默认=true
- Auto Loop：类型=布尔，默认=false
- Playing HUD Y Rate：类型=数值，默认=0.12f
- adjust offset (Later)：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_DOWN}}}

历史更新
- 27. 为 Macro Player 添加配置：
- 11. 添加模块： MacroPlayer（宏播放）

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
