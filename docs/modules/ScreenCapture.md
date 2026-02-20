ScreenCapture
屏幕捕获
分类：Misc
描述：一个持续捕捉屏幕的后台线程。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ScreenCapture 是 JackalClient 的 Misc 分类模块。启用后会围绕 屏幕捕获 这一能力工作，核心行为是：一个持续捕捉屏幕的后台线程。

配置项
- Exclude Client：类型=枚举，默认="Keep"
- Backend：类型=枚举，默认="GDI"

历史更新
- 29. 将屏幕捕获线程单独放到新的模块：Screen Capture，支持DXGI方法
- 58. 添加 HUD Blur 模块，为 HUD 背景添加模糊或者【PRO】液体玻璃效果。需要实时屏幕捕获，会降低性能，但是可以调低频率。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无
