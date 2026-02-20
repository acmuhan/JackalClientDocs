AntiCapture
反捕获
分类：Combat
描述：从截屏或录屏中排除此客户端的窗口（至少需要 Win10）

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiCapture 是 JackalClient 的 Combat 分类模块。启用后会围绕 反捕获 这一能力工作，核心行为是：从截屏或录屏中排除此客户端的窗口（至少需要 Win10）

配置项
- Console：类型=布尔，默认=true
- HUD：类型=布尔，默认=false
- HUD Opacity (0~1)：类型=数值，默认=0.8f
- HUD Font Size：类型=数值，默认=30
- HUD X Rate：类型=数值，默认=0.5f
- HUD Y Rate：类型=数值，默认=0.55f
- HUD Color：类型=枚举，默认="Rainbow"
- Hide When Menu On：类型=布尔，默认=false
- HUD Alignment：类型=枚举，默认="Center"

历史更新
- 61. 为 Anti Capture 和 Black Capture 添加配置：
- 13. 为 AntiCapture 和 BlackCapture 添加 HUD 相关的配置。
- 5. 发现 SetWindowDisplayAffinity 和 图腾动画不兼容。受影响的模块有：AntiCapture, BlackCapture。经过修改，这两个模块在启用的时候如果 AutoTotem 启用，则会启用失败。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无
