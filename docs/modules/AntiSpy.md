AntiSpy
反间谍
分类：Combat
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiSpy 是 JackalClient 的 Combat 分类模块。启用后会围绕 反间谍 这一能力工作，核心行为是：暂无描述

配置项
- Clear Recent File History：类型=布尔，默认=true
- Clear Recent Office History：类型=布尔，默认=true
- Clear Run History (PRO)：类型=布尔，默认=true
- Check Cooldown (ms)：类型=数值，默认=1000U
- Disable Clipboard History：类型=布尔，默认=true
- Anti Prefetch Blacklist Processes Enabled：类型=布尔，默认=false
- Anti Prefetch Deletion Notify：类型=布尔，默认=false
- Clear Recent Activity Timeline (PRO)：类型=布尔，默认=true
- Anti Prefetch Whitelist Processes (Sep With Semicolon)：类型=文本，默认="JackalClient.exe;loader.exe;Inject.exe;Injector.exe;liquidlauncher.exe;Vape_V4. ...
- Anti Prefetch Blacklist Processes (Sep With Semicolon)：类型=文本，默认=""
- Anti Prefetch Check Cooldown (ms)：类型=数值，默认=50000L
- Async：类型=布尔，默认=true
- Clear Explorer Search History (PRO)：类型=布尔，默认=true
- Anti Prefetch (PRO)：类型=枚举，默认="Filtered"
- Notify：类型=布尔，默认=true
- Toggle Anti Microphone：类型=布尔，默认=false
- Anti Prefetch Whitelist Processes Enabled：类型=布尔，默认=true

历史更新
- 79. 为 Anti Spy 添加配置项：
- 33. 为 Anti Spy 添加配置：
- 8. 添加模块： Anti Spy，反间谍。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无
