ColorPicker
取色器
分类：Control
描述：显示和复制鼠标位置的颜色。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ColorPicker 是 JackalClient 的 Control 分类模块。启用后会围绕 取色器 这一能力工作，核心行为是：显示和复制鼠标位置的颜色。

配置项
- Mode：类型=枚举，默认="Tool"
- HUD：类型=布尔，默认=true
- Format：类型=枚举，默认="R
- Copy Hotkey (Inverted Color)：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, 'I'}}}
- Exclude Client：类型=布尔，默认=true
- Copy Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, 'C'}}}
- HUD Font Size：类型=数值，默认=25

历史更新
- 13. 添加模块：Color Picker 取色器。

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
