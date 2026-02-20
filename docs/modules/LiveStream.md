LiveStream
直播间
分类：Web
描述：一些直播间的功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LiveStream 是 JackalClient 的 Web 分类模块。启用后会围绕 直播间 这一能力工作，核心行为是：一些直播间的功能。

配置项
- Receive Info Data：类型=布尔，默认=true
- HUD Online Audience Query Source：类型=枚举，默认="Front-end"
- HUD Information Font Size：类型=数值，默认=30
- Connect Timeout (s)：类型=数值，默认=8L
- HUD Online Audience Background Unification：类型=布尔，默认=true
- HUD Show Basic Information：类型=布尔，默认=true
- Audience Level Up Only When Host is Present：类型=布尔，默认=true
- HUD Online Audience Animation Speed：类型=数值，默认=6.0f
- HUD Online Audience Background Color：类型=枚举，默认="Black"
- Audience Level Upgrade Congratulations：类型=枚举，默认="Real Chatter"
- Notify Audience Face Download：类型=布尔，默认=false
- HUD：类型=布尔，默认=true
- Gift Triggers Config Path：类型=文本，默认="config/liveStreamGiftTriggers.ini"
- Gift Notify Mode：类型=枚举，默认="Notify"
- Audience Level System Speed：类型=数值，默认=1.0f
- HUD Online Audience Face Circle：类型=布尔，默认=true
- Notify Audience Enter：类型=枚举，默认="Off"
- Gift Trigger Default Command：类型=文本，默认="/bili live chatter Thanks {{nickname}} for {{gift}}[比心]!!!"
- HUD Online Audience Face：类型=布尔，默认=true
- HUD Online Audience Update Cooldown (ms)：类型=数值，默认=8000L
- HUD Online Audience Face Update Cooldown (d)：类型=数值，默认=7
- HUD Online Audience Background Shadow Thickness：类型=数值，默认=20.0f
- Notify Audience Leave：类型=枚举，默认="Off"
- HUD Online Audience Background Shadow Opacity (0~1)：类型=数值，默认=0.5f
- Audience Enter Preset：类型=枚举，默认="Enter"
- HUD X Rate：类型=数值，默认=0.05f
- HUD Online Audience Query API Page Size：类型=数值，默认=2
- HUD Online Audience Background Roundness：类型=数值，默认=0.3f
- HUD Online Audience Max Absolute Time (min)：类型=数值，默认=240
- Room ID：类型=数值，默认=0L
- HUD Online Audience Query API Host UID：类型=通用，默认=WORMWAKER_MID
- Gift Check：类型=布尔，默认=true
- HUD Online Audience Background：类型=布尔，默认=true
- Gift Value Display：类型=枚举，默认="Off"
- Gift Update Cooldown (ms)：类型=数值，默认=5000L
- Notify Audience Leave Chatter Color：类型=枚举，默认="Black"
- Wipe Audience Profile If Not Fans：类型=布尔，默认=true
- HUD Online Audience Background Opacity (0~1)：类型=数值，默认=0.5f
- HUD Online Audience Max Count：类型=数值，默认=12U
- HUD Online Audience Background Shadow Color：类型=枚举，默认="Black"
- HUD Online Audience Background Shadow：类型=布尔，默认=true
- Notify Audience Enter Chatter Color：类型=枚举，默认="Colorful"
- HUD Online Audience Line Gap：类型=数值，默认=35
- HUD Online Audience Background Round Corners：类型=布尔，默认=true
- Audience Level System Only Followers：类型=布尔，默认=true
- Gift Title Color：类型=枚举，默认="Flow"
- HUD Online Audience Nickname Font Size：类型=数值，默认=20
- HUD Online Audience Time Mode：类型=枚举，默认="Absolute"
- HUD Show Online Audience：类型=布尔，默认=true
- HUD Y Rate：类型=数值，默认=0.2f
- Audience Leave Preset：类型=枚举，默认="Leave"
- Gift Triggers Enabled (PRO)：类型=布尔，默认=false
- Auto Toggle LiveChatter Module：类型=布尔，默认=true

历史更新
- 7. 修复 Livestream 模块中 Chatter Remote Execution (Riskful) 无效的问题。
- 8. 为 Livestream 添加配置：
- 14. 添加模块：LiveStream，支持爬取B站直播间弹幕并显示出来：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无
