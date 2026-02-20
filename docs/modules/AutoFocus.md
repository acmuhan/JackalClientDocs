AutoFocus
自动聚焦
分类：Window
描述：自动聚焦到某些窗口。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoFocus 是 JackalClient 的 Window 分类模块。启用后会围绕 自动聚焦 这一能力工作，核心行为是：自动聚焦到某些窗口。

配置项
- Mode：类型=枚举，默认="PointAt"
- Restore Window While Focusing：类型=布尔，默认=false
- Notify：类型=枚举，默认="Off"
- Disable When Quit：类型=布尔，默认=false
- Disable When Menu On：类型=布尔，默认=false
- Check Cooldown (ms)：类型=数值，默认=200

历史更新
- 17. 【WIP】添加模块：HoverFocus，和 Auto Focus效果一样但是是 Windows 自带的。会同步系统的设置。
- 19. 新增模块：AutoFocus 自动聚焦窗口。
- 33. 将 Title 模块的 Check Topmost 改为只设置窗口置顶，添加 Auto Focus 配置项（这个才是设置焦点）

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
