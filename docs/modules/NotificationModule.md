NotificationModule
通知
分类：Misc
描述：显示客户端的通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
NotificationModule 是 JackalClient 的 Misc 分类模块。启用后会围绕 通知 这一能力工作，核心行为是：显示客户端的通知。

配置项
- Notify Vertical Margin：类型=数值，默认=150
- Prefix Style：类型=枚举，默认="Jackal (Pro
- Notify Module Toggle：类型=枚举，默认="Always"
- Notify Line Gap：类型=数值，默认=10
- Notify MessageBox Set as Foreground：类型=布尔，默认=true
- Notify Opacity (0~1)：类型=数值，默认=1.0f
- Override Notify When Hidden：类型=枚举，默认="WinToast"
- Notify Device Changes：类型=枚举，默认="Audio Device"
- Notify Horizontal Margin：类型=数值，默认=80
- Output Notification：类型=布尔，默认=true
- Notify WinToast Attempt to Jump Queue：类型=布尔，默认=false
- Notify Style：类型=枚举，默认="Metro"
- Notify Height：类型=数值，默认=45
- Notify AntiSpam：类型=布尔，默认=true
- Notify Translator：类型=枚举，默认="Off"
- Log Notification：类型=布尔，默认=true
- Notify Texture Load：类型=布尔，默认=false
- Notify MessageBox Random Position：类型=布尔，默认=true
- Notify Start Position：类型=枚举，默认="Bottom-Right"
- Off：类型=文本，默认="Classic", "Keybind", "Always"
- Notify Min Width：类型=数值，默认=200
- Prefix Timestamp：类型=布尔，默认=true
- Notify Metro Style：类型=枚举，默认="Vape"
- Notify Stay Time (0~1)：类型=数值，默认=0.3
- Notify AntiSpam Min Similarity (0~1)：类型=数值，默认=0.97f
- Output Notification Debug String：类型=布尔，默认=false
- Notify MessageBox Duration Coefficient：类型=数值，默认=0.2f
- Enabled：类型=布尔，默认=true
- Notify Font Size：类型=数值，默认=35
- hidden：类型=布尔，默认=true
- Notify Font Reload：类型=布尔，默认=false
- Notify Max Length：类型=数值，默认=120

历史更新
- 47. 现在 Notification 的 Notify AntiSpam 已默认开启，作用是防止通知刷屏。
- 50. 为 Notification 添加配置项：
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：

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
