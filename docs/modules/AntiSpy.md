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
AntiSpy（反间谍）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：启用异步处理可降低主线程卡顿；如需稳定复现实验流程可暂时关闭。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：1000U
 说明：该值控制轮询/触发间隔。调小响应更快但占用更高；调大更省资源。
- Toggle Anti Microphone（联动反麦克风）
 类型：布尔；默认：false
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Clear Recent File History（清空近期文件历史）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Clear Recent Office History（清空近期Office历史）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Clear Recent Activity Timeline (PRO)（清空最近活动时间轴（专业版））
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Clear Run History (PRO)（清空运行历史（专业版））
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Clear Explorer Search History (PRO)（清空资源管理器搜索历史（专业版））
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Disable Clipboard History（禁用剪贴板历史）
 类型：布尔；默认：true
 说明：该开关会直接改变系统或窗口行为。建议逐项启用并观察，避免一次开启过多导致排查困难。
- Anti Prefetch (PRO)（反预取（专业版））
 类型：枚举；默认："Filtered"
 说明：该项会影响模块行为，建议基于默认值小步调整。
 可选：Off（关闭）；Filtered（已过滤）；All（所有）
- Anti Prefetch Deletion Notify（反预取删除通知）
 类型：布尔；默认：false
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
- Anti Prefetch Check Cooldown (ms)（Anti Prefetch Check 冷却 (ms)）
 类型：数值；默认：50000L
 说明：该值控制轮询/触发间隔。调小响应更快但占用更高；调大更省资源。
- Anti Prefetch Whitelist Processes Enabled（反预取启用进程白名单）
 类型：布尔；默认：true
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Anti Prefetch Whitelist Processes (Sep With Semicolon)（反预取进程白名单（用分号分隔））
 类型：文本；默认："JackalClient.exe;loader.exe;Inject.exe;Injector.exe;liquidlauncher.exe;Vape_V4.exe;Vape_Lite.exe;patcher.exe;Kangaroo Patcher.exe;我的世界布吉岛启动器.exe ...
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Anti Prefetch Blacklist Processes Enabled（反预取启用进程黑名单）
 类型：布尔；默认：false
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Anti Prefetch Blacklist Processes (Sep With Semicolon)（反预取进程黑名单（用分号分隔））
 类型：文本；默认：""
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Notify（通知）
 类型：布尔；默认：true
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
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

