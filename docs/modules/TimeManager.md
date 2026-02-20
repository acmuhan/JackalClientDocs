TimeManager
时间管理
分类：Misc
描述：调整系统时间及其流速。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TimeManager 是 JackalClient 的 Misc 分类模块。启用后会围绕 时间管理 这一能力工作，核心行为是：调整系统时间及其流速。

配置项
- Offset Second：类型=数值，默认=0
- Offset Minute：类型=数值，默认=0
- Set Year：类型=数值，默认=2025
- Online Sync Cooldown (ms)：类型=数值，默认=30000L
- Acceleration Speed：类型=数值，默认=1.0f
- Mode：类型=枚举，默认="Offset Toggle"
- Offset Year：类型=数值，默认=0
- Offset Hour：类型=数值，默认=12
- Sync Method (Disabling Offset)：类型=枚举，默认="Config"
- Async：类型=布尔，默认=true
- Offset Day：类型=数值，默认=0
- Offset Month：类型=数值，默认=0
- Set Minute：类型=数值，默认=0
- Set Day：类型=数值，默认=28
- Set Month：类型=数值，默认=2
- Sync Method (Disabling Set)：类型=枚举，默认="Memory"
- Set Hour：类型=数值，默认=12
- Set Second：类型=数值，默认=0
- Sync Method (Disabling Freeze)：类型=枚举，默认="Memory"

历史更新
- 2. 尝试修复 TimeManager 模块设置时间有时会发生错误的问题。添加时间修改数据的持久化。
- 3. 为 TimeManager 的 Mode 模式添加：Accelerated，仅加速模式。
- 15. 添加模块： TimeManager (时间管理大师)

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
