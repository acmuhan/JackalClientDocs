LetterGraph
字母图
分类：Control
描述：呈现字母数量的图表。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LetterGraph 是 JackalClient 的 Control 分类模块。启用后会围绕 字母图 这一能力工作，核心行为是：呈现字母数量的图表。

配置项
- Bar Gap：类型=数值，默认=10
- Text Font Size：类型=数值，默认=50
- Adaptive Height Scaling：类型=布尔，默认=true
- Bar Max Height：类型=数值，默认=500
- Easing：类型=布尔，默认=true
- Base Y Rate：类型=数值，默认=0.5f
- Sort By：类型=枚举，默认="Name"
- Bar Width：类型=数值，默认=50
- Base X Rate：类型=数值，默认=0.2f
- Y Offset：类型=数值，默认=0.0f
- Bar Opacity (0~1)：类型=数值，默认=0.3f
- Text Opacity (0~1)：类型=数值，默认=0.7f
- Bar Width Fill Mode：类型=布尔，默认=false
- Bar Color 2：类型=枚举，默认="Red"
- X Offset：类型=数值，默认=0.0f
- Bar Color 1：类型=枚举，默认="Green"
- Value Color：类型=枚举，默认="Pink"
- Stat Lyrics：类型=布尔，默认=true
- Key Max Value：类型=数值，默认=1024
- Easing Speed (0~1)：类型=数值，默认=0.2f
- Bar Direction：类型=枚举，默认="Right"
- Key Color：类型=枚举，默认="Colorful"
- Stat Keys：类型=布尔，默认=true

历史更新
- 23. 为 Download HUD, Chat Bar, Clipboard ESP, Security ESP, Letter Graph 添加 HUD Editor 拖曳。
- 29. 修复 LetterGraph 中的配置项 Text Opacity (0~1) 无效的问题。

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
