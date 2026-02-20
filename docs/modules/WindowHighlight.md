WindowHighlight
窗口高亮
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
WindowHighlight（窗口高亮）通过高亮框与暗背景突出目标窗口，适合演示和快速聚焦。建议先从前台模式开始，确认不影响操作后再开启更多效果。
配置项
- Easing（缓动）
 类型：布尔；默认：true
 说明：高亮框平滑过渡。
- Easing Speed (0~1)（缓动速率 (0~1)）
 类型：数值；默认：0.2f
 说明：高亮跟随速度。
- Only Foreground（仅前端）
 类型：布尔；默认：false
 说明：仅高亮前台窗口，避免多窗口同显时过度干扰。
- Aura Target Highlight（高亮光环目标）
 类型：布尔；默认：true
 说明：与目标系统联动时优先高亮当前目标。
- Endangered Excla Mark（濒危感叹号）
 类型：布尔；默认：true
 说明：在危险状态时显示强调标记，便于快速识别。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true
 说明：菜单打开时不绘制高亮。
- Color（颜色）
 类型：枚举；默认："Rainbow"
 说明：高亮主色。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Dark Background（暗背景）
 类型：布尔；默认：true
 说明：给非目标区域加暗幕，突出目标窗口。
- Dark Background Color（暗背景颜色）
 类型：枚举；默认："Black"
 说明：暗幕颜色。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Dark Background Alpha (0~1)（暗背景不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：暗幕透明度。
历史更新
- 18. 为 Window Highlight 添加配置：
- 25. 为 Window Highlight 添加配置：
- 17. 为 Window Highlight 模块添加丝滑动画。添加配置：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

