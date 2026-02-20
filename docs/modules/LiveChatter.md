LiveChatter
直播弹幕
分类：Web
描述：管理直播间弹幕交互（接收/发送/AI回复）。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LiveChatter 是 JackalClient 的 Web 分类模块。启用后会围绕 直播弹幕 这一能力工作，核心行为是：管理直播间弹幕交互（接收/发送/AI回复）。

配置项
- File Output Path：类型=文本，默认="output\\Chatters.txt"
- Auto Send Content Mode：类型=枚举，默认="Fixed"
- AI Response Prompt：类型=文本，默认="请用简要的语言回复这条直播间弹幕，最好不要超过20字，但是不要复述弹幕："
- File Output：类型=布尔，默认=false
- Remote Execution Username Whitelist (Sep with Semicolon)：类型=文本，默认="Wormwaker;Worrnwaker"
- Title Font Size：类型=数值，默认=150
- Translator：类型=枚举，默认="Off"
- Console Output：类型=布尔，默认=true
- AI Response：类型=枚举，默认="Off"
- Auto Send List Current Index：类型=数值，默认=0
- Auto Send List Content (Sep With Semicolon)：类型=文本，默认=""
- AI Response Prefix：类型=布尔，默认=true
- AI Response Contexts Limit：类型=数值，默认=64
- User Blacklist Enabled：类型=布尔，默认=false
- User Blacklist (Sep With Semicolon)：类型=文本，默认=""
- Clipboard Quick Send Key：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_ADD}}}
- Remote Execution Display：类型=布尔，默认=false
- Speaker User Blacklist Enabled：类型=布尔，默认=false
- AI Response Contexts Enabled：类型=布尔，默认=true
- Custom Filter Enabled：类型=布尔，默认=false
- AI Response Chatter Type：类型=枚举，默认="Top"
- AI Response Title Color：类型=枚举，默认="Red"
- AI Response Prompt (With Contexts)：类型=文本，默认="请用简要的语言和直播间弹幕进行对话，每次你的输出一定不要超过40字，不要思考过程，不要复述用户的消息。下面开始对话。"
- Clipboard Quick Send：类型=枚举，默认="Off"
- Auto Send Split Cooldown Min (ms)：类型=数值，默认=1000
- Triggers Config Path：类型=文本，默认="config\\liveStreamChatterTriggers.ini"
- Display：类型=枚举，默认="Chatter"
- Color：类型=枚举，默认="White"
- Remote Execution Privileges Policy：类型=枚举，默认="Admin & Normal"
- Speaker User Whitelist (Sep With Semicolon)：类型=文本，默认="Wormwaker;Worrnwaker"
- Auto Send File Source Path：类型=文本，默认=""
- Speaker User Whitelist Enabled：类型=布尔，默认=false
- File Output Format：类型=文本，默认="{{content}}`{{nickname}}"
- Auto Send Fixed Content：类型=文本，默认="给主播点个关注~"
- Custom Filter Keywords (Sep With Semicolon)：类型=文本，默认=""
- Title Color：类型=枚举，默认="White"
- Single Chatter Length Limit：类型=数值，默认=40U
- Speaker：类型=枚举，默认="Off"
- Triggers Using Regex：类型=布尔，默认=true
- Clipboard Quick Send Apply Text Processor：类型=布尔，默认=false
- Remote Execution (Riskful)：类型=枚举，默认="Disabled"
- Trigger Disable Speaker：类型=布尔，默认=true
- AI Response Chatter Color：类型=枚举，默认="Red"
- Remote Execution Notify：类型=布尔，默认=true
- Max Allowed Chatter Delay (s)：类型=数值，默认=60U
- Console Output Timestamp：类型=布尔，默认=true
- Auto Send Time Mode：类型=枚举，默认="Off"
- User Whitelist Enabled：类型=布尔，默认=false
- AI Response Cooldown (ms)：类型=数值，默认=5000L
- AI Response Prefix String：类型=文本，默认="回复@{user}:"
- Horizontal Reverse：类型=布尔，默认=false
- Auto Send Split Cooldown Max (ms)：类型=数值，默认=2000
- Speaker User Blacklist (Sep With Semicolon)：类型=文本，默认=""
- Sound：类型=枚举，默认="Off"
- Clipboard Quick Send Prevent Repeat：类型=布尔，默认=true
- User Whitelist (Sep With Semicolon)：类型=文本，默认="Wormwaker;Worrnwaker"
- Auto Send Periodic Interval (ms)：类型=数值，默认=60000L
- Taboo Filter：类型=枚举，默认="Replace (Unsafe
- Console Output Wealth & Medal：类型=布尔，默认=true
- Auto Send Prefab Type：类型=枚举，默认="Aphorism"
- Clipboard Quick Send Confirm：类型=布尔，默认=false
- Speaker Skip Emoji：类型=布尔，默认=true
- Speaker Async：类型=布尔，默认=true
- AI Response User Blacklist (Sep With Semicolon)：类型=文本，默认="Wormwaker;Worrnwaker"
- Actionbar Color：类型=枚举，默认="Colorful"
- AI Response User Blacklist Enabled：类型=布尔，默认=true
- Clipboard Quick Send Confirm Time (s)：类型=数值，默认=5
- Triggers Enabled：类型=布尔，默认=false

历史更新
- 35. 将 AutoLiveChatter 模块重命名为 LiveChatter，并将 LiveStream 模块的弹幕部分分到 LiveChatter 模块。重命名部分配置项。
- 8. 添加模块：AutoLiveChatter，自动直播间弹幕。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无
