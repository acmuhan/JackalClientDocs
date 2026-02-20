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
CrackPassword 是 JackalClient 的 Combat 分类模块。启用后会围绕 破解密码 这一能力工作，核心行为是：凭借字典，暴力破解计算机当前用户的密码。

配置项
- Threshold Setting Confirmation MessageBox Timeout (ms)：类型=数值，默认=20000
- Hide HUD When Menu On：类型=布尔，默认=false
- HUD：类型=布尔，默认=true
- Multithread：类型=布尔，默认=true
- Async：类型=布尔，默认=true
- Try Birthdays：类型=布尔，默认=true
- HUD Show Current Password Attempt：类型=布尔，默认=true
- Threshold Setting Default Option：类型=枚举，默认="Cancel"
- Memorize Prev Password：类型=布尔，默认=true
- Use Strong Password Dictionary：类型=布尔，默认=true
- Notify Password：类型=布尔，默认=true
- Notify Speed：类型=布尔，默认=true

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
