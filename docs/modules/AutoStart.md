AutoStart
开机自启
分类：Combat
描述：系统启动时自动启动本客户端。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoStart（开机自启）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：启用异步处理可降低主线程卡顿；如需稳定复现实验流程可暂时关闭。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：30000L
 说明：该值控制轮询/触发间隔。调小响应更快但占用更高；调大更省资源。
- Method（方法）
 类型：枚举；默认："Registry"
 说明：该项决定执行策略。建议先用默认策略验证稳定性，再逐个切换比较效果与副作用。
 可选：Registry（注册表）；Service（未收录）；Scheduled Task（计划任务）
- Registry（注册表）
 类型：文本；默认："Service", "Scheduled Task"
 说明：该项用于系统持久化配置（注册表/服务/计划任务）。修改前建议先备份原配置名称，避免重复项。
- Registry Value Name（注册表值名称）
 类型：文本；默认："JackalClient"
 说明：该项用于系统持久化配置（注册表/服务/计划任务）。修改前建议先备份原配置名称，避免重复项。
- Service Description（服务描述）
 类型：文本；默认："Jackal Client Auto Start Service"
 说明：该项用于系统持久化配置（注册表/服务/计划任务）。修改前建议先备份原配置名称，避免重复项。
- Service Display Name（服务显示名称）
 类型：文本；默认："Jackal Client Service"
 说明：该项用于系统持久化配置（注册表/服务/计划任务）。修改前建议先备份原配置名称，避免重复项。
- Service Stopping Timeout (s)（停止服务的超时时间 (秒)）
 类型：数值；默认：10
 说明：该值控制轮询/触发间隔。调小响应更快但占用更高；调大更省资源。
- Scheduled Task Name（计划任务名称）
 类型：文本；默认："JackalClient"
 说明：该项用于系统持久化配置（注册表/服务/计划任务）。修改前建议先备份原配置名称，避免重复项。
- Extra Arguments（额外参数）
 类型：文本；默认：""
 说明：该项用于系统持久化配置（注册表/服务/计划任务）。修改前建议先备份原配置名称，避免重复项。
历史更新
- 43. 将 AutoStart 开机自启默认项改为 Registry.
- 6. 添加模块 AutoStart，开机自启。

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

