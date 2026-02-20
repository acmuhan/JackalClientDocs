TargetESP
目标透视
分类：Window
描述：标记目标窗口的位置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TargetESP（目标透视）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Target（目标）
 类型：枚举；默认："PointAt"
 说明：用于指定作用目标。建议先从单一目标验证，确认稳定后再扩大范围。
 可选：Target HUD（目标 是否显示HUD。）；Foreground（前端）；PointAt（指向）；it (Pronoun)（代词 it）
- Rotation Speed（旋转速度）
 类型：数值；默认：1.5f
 说明：该值控制强度/时序。建议以默认值为中心小步调整，避免一次跨度过大。
- Rotation Amplitude（最大旋转角）
 类型：数值；默认：150.0f
 说明：该值控制强度/时序。建议以默认值为中心小步调整，避免一次跨度过大。
- Easing Speed (0~1)（缓动速率 (0~1)）
 类型：数值；默认：0.05f
 说明：该值控制强度/时序。建议以默认值为中心小步调整，避免一次跨度过大。
- Scale（比例）
 类型：数值；默认：1.0f
 说明：该值控制强度/时序。建议以默认值为中心小步调整，避免一次跨度过大。
- Opacity (0~1)（不透明度 (0~1））
 类型：数值；默认：0.9f
 说明：用于控制透明度。数值越高越清晰但遮挡更明显。
- Fade In Time (ms)（淡入时长 (毫秒)）
 类型：数值；默认：1200L
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Fade Out Time (ms)（淡出时长 (毫秒)）
 类型：数值；默认：5000L
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Show Temporarily（临时显示）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Show Duration (ms)（显示时长（毫秒））
 类型：数值；默认：5000L
 说明：该值控制强度/时序。建议以默认值为中心小步调整，避免一次跨度过大。
- Color（颜色）
 类型：枚举；默认："White"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
历史更新
- 7. 添加模块：Target ESP

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

