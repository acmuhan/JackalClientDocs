TargetHUD
目标显示
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
TargetHUD（目标显示）会为当前目标窗口绘制信息面板，支持跟随、固定、阴影、背景图与动画。推荐先调好目标来源与位置，再处理样式细节，避免“好看但不易读”。
配置项
- Target（目标）
 类型：枚举；默认："Foreground"
 说明：选择要展示信息的目标窗口来源。`Foreground` 适合稳定展示，`PointAt` 适合快速查看鼠标下窗口。
 可选：Foreground（前端）；PointAt（指向）；it (Pronoun)（代词 it）
- Avatar Circle（圆形头像）
 类型：布尔；默认：true
 说明：头像裁剪为圆形，仅影响展示风格。
- UWP Show Original Process（UWP 应用显示原始进程）
 类型：布尔；默认：true
 说明：UWP窗口优先显示原始进程信息，减少壳进程带来的误判。
- HUD Position（HUD 位置）
 类型：枚举；默认："Follow"
 说明：决定HUD跟随目标还是固定位置。需要录制或演示时通常用 `Fixed` 更稳定。
 可选：Follow（追随）；Fixed（固定）
- HUD Background Color（HUD 背景颜色）
 类型：枚举；默认："Flow"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：Transparent（透明）；Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Background Darkness (0~1)（HUD 背景暗度 (0~1)）
 类型：数值；默认：0.85f
 说明：在背景色上叠加暗化，提升亮场景下文字对比度。
- HUD Background Opacity (0~1)（HUD 背景不透明度 (0~1)）
 类型：数值；默认：0.8f
 说明：HUD底板透明度，直接影响遮挡与可读性的平衡。
- HUD Round Corners（HUD 圆角）
 类型：布尔；默认：true
 说明：是否启用圆角外观；关闭后更偏信息面板风格。
- HUD Roundness（HUD 圆滑程度）
 类型：数值；默认：0.6f
 说明：圆角弧度大小。越大越圆润。
- HUD Shadow（HUD 阴影）
 类型：布尔；默认：true
 说明：启用阴影提升与背景分离度。
- HUD Shadow Opacity (0~1)（HUD 阴影不透明度 (0~1)）
 类型：数值；默认：0.7f
 说明：阴影透明度；过高会显脏，过低分离度不足。
- HUD Shadow Thickness（HUD 阴影厚度）
 类型：数值；默认：60.0f
 说明：阴影扩散范围，值越大“氛围感”越强。
- Mouse Click Feedback（鼠标点击反馈）
 类型：布尔；默认：true
 说明：点击目标窗口时在HUD附近给出反馈效果，便于确认输入是否送达。
- Mouse Click Feedback Particles（鼠标点击反馈粒子）
 类型：布尔；默认：true
 说明：在点击反馈基础上追加粒子效果。性能敏感设备可关闭。
- Flow Color（流动颜色）
 类型：布尔；默认：true
 说明：开启后使用动态流动色，视觉更活跃；关闭更稳定、辨识更强。
- HUD Shadow Color（HUD 阴影颜色）
 类型：枚举；默认："Black"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Outline Color（HUD 轮廓线颜色）
 类型：枚举；默认："Dark Green"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Give Way to Mouse（给鼠标让道）
 类型：布尔；默认：true
 说明：鼠标靠近HUD时自动让位，避免遮挡点击。交互频繁场景建议开启。
- Background Image（背景图片）
 类型：布尔；默认：false
 说明：启用后在HUD内叠加背景图。路径无效时会自动关闭，建议先用本地绝对路径测试。
- Background Image Path（背景图片路径）
 类型：文本；默认：""
 说明：背景图文件路径。建议使用PNG/JPG等常见格式并保持文件长期可访问。
- Background Image Opacity (0~1)（背景图片不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：背景图透明度。建议低于文本不透明度，避免抢占信息层级。
- Background Image Moving Speed（背景图片移动速度）
 类型：数值；默认：0.5f
 说明：控制背景图流动速度，0 附近更静态，过高会分散注意力。
- Fixed X Rate（固定X坐标比例）
 类型：数值；默认：0.85f
 说明：仅在固定模式生效，控制HUD横向位置比例。建议与拖拽功能配合微调。
- Fixed Y Rate（固定Y坐标比例）
 类型：数值；默认：0.65f
 说明：仅在固定模式生效，控制HUD纵向位置比例。
- Easing（缓动）
 类型：布尔；默认：true
 说明：开启后HUD位移会平滑过渡，减少跳动感。
- Easing Speed (0~1)（缓动速率 (0~1)）
 类型：数值；默认：0.2f
 说明：控制跟随速度。数值越大越“跟手”，越小越平滑。
- Fade Time (ms)（淡入淡出时间（毫秒））
 类型：数值；默认：500L
 说明：目标切换时淡入淡出时长。时间更长会更柔和，但切换反馈更慢。
- Style（风格）
 类型：枚举；默认："Default"
 说明：该项会影响模块行为，建议基于默认值小步调整。
 可选：Default（默认）
- Command Line Getter（命令行获取器）
 类型：枚举；默认："Console Output"
 说明：触发后读取目标进程命令行，并按选项输出到控制台或剪贴板。用于排查进程来源很实用。
 可选：Off（关闭）；Console Output（控制台输出）；Copy（复制）
- Command Line Getter Hotkey（命令行获取器快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LCONTROL, VK_LWIN, VK_SUBTRACT}}}
 说明：手动获取命令行的快捷键。建议使用不常见组合键，避免与系统截屏等冲突。
历史更新
- 40. 为 Target Hud 添加了裁剪，以免文本超出范围。
- 2. 修复通知、WindowTags、TargetHUD 中的百分号显示问题。
- 31. 添加新模块： TargetHUD，显示目标窗口HUD。拥有丝滑的动画

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

