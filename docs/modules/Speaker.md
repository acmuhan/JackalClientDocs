Speaker
讲述人
分类：Misc
描述：调用 Windows 的讲述人念一段文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Speaker 是 JackalClient 的 Misc 分类模块。启用后会围绕 讲述人 这一能力工作，核心行为是：调用 Windows 的讲述人念一段文本。

配置项
- Custom Rate：类型=数值，默认=0
- Voice：类型=枚举，默认="Default"
- Fixed Spoken Text：类型=文本，默认="Hello World 你好，世界！"
- Notify Error：类型=布尔，默认=true
- Not As Debuggee：类型=布尔，默认=true
- Multiple Text Arrangement：类型=枚举，默认="Queue"
- Volume：类型=数值，默认=80
- Pitch：类型=枚举，默认="Default"
- Custom Voice Name：类型=文本，默认="Microsoft Huihui Desktop - Chinese (Simplified)"
- Async：类型=布尔，默认=true
- Spoken Text List：类型=文本，默认="你的钢门比较松弛;但是呢,你的痔疮又弥补了这一部分;如果做痔疮手术,把痔疮切除的话;可能就会显得你的钢门就比较大;可能会有一些漏液漏气的情况;现在最好的办法就 ...
- Rate：类型=枚举，默认="Default"
- Auto Rate Coefficient：类型=数值，默认=1.0f
- Method：类型=枚举，默认="SAPI"
- Custom Pitch：类型=数值，默认=0
- Spoken Text Mode：类型=枚举，默认="Fixed"
- List Current Index：类型=数值，默认=0
- Japanese Transformation：类型=布尔，默认=true

历史更新
- 14. 将部分配置中的 Speaker 改为 Speak
- 12. 为 Speaker 添加配置：
- 12. 添加模块：Speaker（讲述人）

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
