Tracers
追踪线
分类：Window
描述：绘制鼠标到窗口的追踪线。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Tracers（追踪线）会从参考点向目标窗口绘制连线，用于快速建立视觉关联。先调好锚点比例，再调颜色和透明度。
配置项
- Line Color（线条颜色）
 类型：枚举；默认："Rainbow"
 说明：连线颜色。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Line Width（线条宽度）
 类型：数值；默认：1.0f
 说明：连线宽度。
- Line Opacity (0~1)（线条不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：连线透明度。
- Window Point X Rate（窗口点横坐标比例）
 类型：数值；默认：0.5f
 说明：窗口锚点横向比例。0=左侧，1=右侧。
- Window Point Y Rate（窗口点纵坐标比例）
 类型：数值；默认：0.05f
 说明：窗口锚点纵向比例。0=顶部，1=底部。
历史更新
- 13. 添加模块：Tracers，绘制从鼠标到顶层窗口的追踪线
- 14. WindowESP 的顶层窗口更新现已和 Tracers 共用，更新冷却在 Config 设置

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

