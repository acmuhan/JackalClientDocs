AntiDebug
反调试
分类：Combat
描述：防止客户端被调试。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiDebug（反调试）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：启用异步处理可降低主线程卡顿；如需稳定复现实验流程可暂时关闭。
- Active Defense（主动防御）
 类型：布尔；默认：true
 说明：该开关会直接改变系统或窗口行为。建议逐项启用并观察，避免一次开启过多导致排查困难。
- Check Cooldown（检查冷却）
 类型：数值；默认：500
 说明：该值控制轮询/触发间隔。调小响应更快但占用更高；调大更省资源。
- Related File Detection（相关文件探测）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Reaction（反应）
 类型：枚举；默认："Exit"
 说明：该项会影响模块行为，建议基于默认值小步调整。
 可选：Warn（警告）；Exit（退出）；Self Destruct（自毁）；Extinction（灭亡）
历史更新
- 8. 修复 Anti Debug 报错的问题。
- 4. 修复了 AntiDebug 反调试模块无法击杀部分窗口的问题，并支持异步模式了，以免很卡。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无

