DialogPhysics
物理弹窗
分类：Window
描述：给对话框添加物理效果。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DialogPhysics 是 JackalClient 的 Window 分类模块。启用后会围绕 物理弹窗 这一能力工作，核心行为是：给对话框添加物理效果。

配置项
- Drag Spring K：类型=数值，默认=20.0f
- Drag Damping：类型=数值，默认=3.0f
- Pause When Menu On：类型=布尔，默认=true
- Initial Min Velocity：类型=数值，默认=4.0f
- Dialog Bounce Damping：类型=数值，默认=0.6f
- Initial Random Degree：类型=布尔，默认=true
- Gravity：类型=数值，默认=9.8f
- Initial Velocity：类型=布尔，默认=false
- Drag Inertia：类型=数值，默认=20.0f
- Step：类型=数值，默认=0.1f
- Constant Mode：类型=枚举，默认="Float"
- Collision：类型=枚举，默认="Omnidirectional"
- Basic Friction：类型=数值，默认=0.03f
- Initial Max Velocity：类型=数值，默认=8.0f
- Initial Custom Degree：类型=数值，默认=1.57f

历史更新
- 34. 添加模块：Dialog Physics，对话框物理。给登记过的对话框施加物理效果。

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
