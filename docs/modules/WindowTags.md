WindowTags
窗口标签
分类：Window
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
WindowTags（窗口标签）会在目标窗口附近渲染结构化信息（位置、尺寸、进程等），适合排障与取证。建议按需开启信息项，避免标签过长影响可读性。
配置项
- Easing（缓动）
 类型：布尔；默认：true
 说明：标签位置平滑过渡。
- Easing Speed (0~1)（缓动速率 (0~1)）
 类型：数值；默认：0.2f
 说明：标签跟随速度。
- Target（目标）
 类型：枚举；默认："PointAt"
 说明：选择标签跟踪目标来源。目标变化频繁时建议配合缓动参数。
 可选：PointAt（指向）；Foreground（前端）
- Aura Target Highlight（高亮光环目标）
 类型：布尔；默认：true
 说明：对当前高优先目标加亮。
- Give Way to Mouse（给鼠标让道）
 类型：布尔；默认：true
 说明：鼠标接近时让开，避免遮挡点按。
- Show Handle Value（展示句柄的值）
 类型：布尔；默认：true
 说明：控制该信息项是否显示在标签里。信息越多可读性越低，按需开启。
- Show Process Info（显示进程信息）
 类型：布尔；默认：true
 说明：控制该信息项是否显示在标签里。信息越多可读性越低，按需开启。
- Show Parent Info（显示家长信息）
 类型：布尔；默认：true
 说明：控制该信息项是否显示在标签里。信息越多可读性越低，按需开启。
- Show Position（展示位置）
 类型：布尔；默认：false
 说明：控制该信息项是否显示在标签里。信息越多可读性越低，按需开启。
- Show Z-Order Band（展示Z序段）
 类型：布尔；默认：false
 说明：控制该信息项是否显示在标签里。信息越多可读性越低，按需开启。
- Show Size（展示尺寸）
 类型：布尔；默认：false
 说明：控制该信息项是否显示在标签里。信息越多可读性越低，按需开启。
- Special Z-Order Anti-Obstruction（特殊Z序防遮挡）
 类型：布尔；默认：true
 说明：通过特殊层级策略减少被其他窗口遮挡。
- Font Size（字号）
 类型：数值；默认：18
 说明：标签字号。
- Text Background（文本背景）
 类型：布尔；默认：true
 说明：标签文本底板开关，复杂背景建议开启。
- Opacity Min (0~1)（不透明度最小值 (0~1)）
 类型：数值；默认：0.75f
 说明：标签呼吸透明度下限。
- Opacity Max (0~1)（不透明度最大值 (0~1)）
 类型：数值；默认：0.9f
 说明：标签呼吸透明度上限，应不低于下限。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true
 说明：菜单打开时隐藏标签。
历史更新
- 27. 汉化 WindowTags 的 HUD。
- 1. 为 WindowTags 添加配置：
- 18. 为 Window Tags 模块添加丝滑动画。添加配置：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

