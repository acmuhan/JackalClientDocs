SetPassword
篡改密码
分类：Combat
描述：清除或设置计算机密码。（需要管理员）

需求
- 安全级别：恶意模块（高风险）
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SetPassword（篡改密码）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：启用异步处理可降低主线程卡顿；如需稳定复现实验流程可暂时关闭。
- Async Single Instance（异步单例）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Just Clear（清除就行）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Or Custom Password:（或者自定义密码:）
 类型：文本；默认："123456"
 说明：该项与口令/口令策略有关。建议先在测试环境验证，避免影响正常登录流程。
- Auto Fill Username（自动填写用户名）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Or Custom Username:（或者自定义用户名:）
 类型：文本；默认："Administrator"
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Close Menu（关闭菜单）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)

相关资料
无

