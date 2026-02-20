CrackPassword
破解密码
分类：Combat
描述：凭借字典，暴力破解计算机当前用户的密码。

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
CrackPassword（破解密码）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：启用异步处理可降低主线程卡顿；如需稳定复现实验流程可暂时关闭。
- Multithread（多线程）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Memorize Prev Password（记住上一次的密码）
 类型：布尔；默认：true
 说明：该项与口令/口令策略有关。建议先在测试环境验证，避免影响正常登录流程。
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：该项用于控制作用目标或展示位置。建议先固定目标与位置，再调其它视觉参数。
- HUD Show Current Password Attempt（在HUD中显示当前的密码尝试）
 类型：布尔；默认：true
 说明：该项与口令/口令策略有关。建议先在测试环境验证，避免影响正常登录流程。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：该项用于控制作用目标或展示位置。建议先固定目标与位置，再调其它视觉参数。
- Use Strong Password Dictionary（使用强口令字典）
 类型：布尔；默认：true
 说明：该项与口令/口令策略有关。建议先在测试环境验证，避免影响正常登录流程。
- Try Birthdays（尝试生日）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Notify Password（通知密码）
 类型：布尔；默认：true
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
- Notify Speed（通知速率）
 类型：布尔；默认：true
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
- Threshold Setting Confirmation MessageBox Timeout (ms)（阈值设置确认提示框超时时间 (毫秒)）
 类型：数值；默认：20000
 说明：该值控制轮询/触发间隔。调小响应更快但占用更高；调大更省资源。
- Threshold Setting Default Option（阈值设置默认选项）
 类型：枚举；默认："Cancel"
 说明：该项决定执行策略。建议先用默认策略验证稳定性，再逐个切换比较效果与副作用。
 可选：Yes（是）；No（否）；Cancel（取消）
历史更新
- 18. 添加了 CrackPassword 破解密码时的HUD。
- 19. 修复 CrackPassword 中配置 Notify Password 无效的问题。
- 7. 添加模块：CrackPassword，用于暴力破解当前用户登录密码。使用一个字典。

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

