BandSetter
Z序段设置
[PRO]
分类：Window
描述：动态设置指定窗口的Z序段。（专业版）

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
BandSetter 是 JackalClient 的 Window 分类模块。启用后会围绕 Z序段设置 这一能力工作，核心行为是：动态设置指定窗口的Z序段。（专业版）

配置项
- Z-Order Band：类型=枚举，默认="UIAccess"
- Target：类型=枚举，默认="Foreground"
- Sync Topmost Status：类型=布尔，默认=true
- Operation：类型=枚举，默认="Auto"

历史更新
- 21. 【PRO】添加模块：BandSetter，动态设置窗口Z序段。

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
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无
