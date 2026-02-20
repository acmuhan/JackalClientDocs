Keystrokes
按键显示
分类：Control
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Keystrokes 是 JackalClient 的 Control 分类模块。启用后会围绕 按键显示 这一能力工作，核心行为是：暂无描述

配置项
- Roundness：类型=数值，默认=0.2f
- Font Size：类型=数值，默认=43
- Shadow Color：类型=枚举，默认="Black"
- Box Opacity (0~1)：类型=数值，默认=1.0f
- Round Corners：类型=布尔，默认=false
- Background Color：类型=枚举，默认="Black"
- Give Way to Mouse：类型=布尔，默认=true
- Outline Color：类型=枚举，默认="Rainbow"
- Show CPS：类型=布尔，默认=true
- Shadow Thickness：类型=数值，默认=20.0f
- Hide When Menu On：类型=布尔，默认=false
- Text Color：类型=枚举，默认="Rainbow"
- Space：类型=布尔，默认=true
- Y Rate：类型=数值，默认=0.7f
- Box Size：类型=数值，默认=54
- Shift：类型=布尔，默认=true
- Shadow：类型=布尔，默认=true
- Easing Speed (0~1)：类型=数值，默认=0.1f
- Box Gap：类型=数值，默认=15
- Mouse Buttons：类型=布尔，默认=true
- X Rate：类型=数值，默认=0.9f

历史更新
- 8. 修复了 Keystrokes 里 Shift 隐藏无效的问题。
- 7. 为 Keystrokes2 添加了丝滑动画。添加配置项：
- 8. 为 Keystrokes 也添加了 Give Way to Mouse 选项，鼠标经过后会自动偏移。

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
