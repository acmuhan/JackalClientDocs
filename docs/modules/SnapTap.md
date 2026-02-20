SnapTap
急停键
分类：Control
描述：按下新键（A/D）和（W/S）时，自动释放之前按住的键。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SnapTap 是 JackalClient 的 Control 分类模块。启用后会围绕 急停键 这一能力工作，核心行为是：按下新键（A/D）和（W/S）时，自动释放之前按住的键。

配置项
- W & S：类型=布尔，默认=true
- Up & Down Arrows：类型=布尔，默认=true
- Custom Key Pairs (e.g. Z&X;J&K)：类型=文本，默认=""
- Left & Right Arrows：类型=布尔，默认=true
- A & D：类型=布尔，默认=true
- Custom Keys：类型=布尔，默认=false

历史更新
- 6. 为 Snap Tap 添加了自定义键对：
- 6. 添加模块：SnapTap。在按下方向键（AWSD，箭头键，开关可以在配置中调）的反方向键后，会自动帮你释放前一个按键，达到急停并反向移动的效果。该功能已在多个FPS游戏中被禁用，请调查清楚后使用。注意：打开后按键将无法进行长按连续输入。

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
