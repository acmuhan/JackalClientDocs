MacroRecorder
宏录制
分类：Control
描述：录制键盘和鼠标操作的宏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MacroRecorder 是 JackalClient 的 Control 分类模块。启用后会围绕 宏录制 这一能力工作，核心行为是：录制键盘和鼠标操作的宏。

配置项
- Recording HUD X Rate：类型=数值，默认=0.05f
- Record Window Assertions：类型=布尔，默认=false
- Recording HUD Font Size：类型=数值，默认=50
- First Perspective Mouse Offset Scale X：类型=数值，默认=5.0f
- First Perspective Mouse Offset：类型=布尔，默认=false
- Recording HUD：类型=枚举，默认="Off"
- Notify Mouse Pos (Chatter)：类型=布尔，默认=false
- Output Format：类型=枚举，默认="Jackal Macro"
- First Perspective Mouse Offset Scale Y：类型=数值，默认=1.0f
- Recording HUD Y Rate：类型=数值，默认=0.12f
- bind (Enable)：类型=按键/复合，默认={{"Keybind", {0}}}
- bind (Disable)：类型=按键/复合，默认={{"Keybind", {0}}}
- Notify File Path：类型=布尔，默认=true
- Notify Actions (Chatter)：类型=布尔，默认=false

历史更新
- 10. 添加模块： MacroRecorder（宏录制）

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
