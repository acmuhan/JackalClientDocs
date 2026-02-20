Mixer
混音器
分类：Misc
描述：显示所有所有发声的进程的音量。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Mixer 是 JackalClient 的 Misc 分类模块。启用后会围绕 混音器 这一能力工作，核心行为是：显示所有所有发声的进程的音量。

配置项
- Easing Speed (0~1)：类型=数值，默认=0.1f
- HUD Mode：类型=枚举，默认="Temp"
- Text Font Size：类型=数值，默认=28
- Highlight Process Volume (%%)：类型=数值，默认=80
- Hide When Menu On：类型=布尔，默认=true
- Bar Gap：类型=数值，默认=100
- Fade Duration (ms)：类型=数值，默认=1000L
- Bar Direction：类型=枚举，默认="Down"
- Label Format：类型=枚举，默认="Process Name"
- Max Items：类型=数值，默认=10
- X Offset：类型=数值，默认=0.0f
- Base Y Rate：类型=数值，默认=0.05f
- Other Process Volume (%%)：类型=数值，默认=10
- Bar Thickness：类型=数值，默认=80
- Bar Opacity (0~1)：类型=数值，默认=0.35f
- Bar Max Height：类型=数值，默认=500
- Set Highlight Process Volume：类型=布尔，默认=false
- Process Id (Zero For Any)：类型=数值，默认=0
- Show Only Volume > 0：类型=布尔，默认=true
- Base X Rate：类型=数值，默认=0.5f
- Y Offset：类型=数值，默认=0.0f
- Text Color：类型=枚举，默认="Colorful"
- Temp HUD Duration (ms)：类型=数值，默认=3000L
- Easing：类型=布尔，默认=true
- Bar Color：类型=枚举，默认="White"
- Refresh Interval (ms)：类型=数值，默认=500.0f
- Process Name (Empty For Any)：类型=文本，默认="JackalClient.exe"
- Temp HUD Animation Duration (ms)：类型=数值，默认=300L

历史更新
无（HISTORY 中暂无明确记录）

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
