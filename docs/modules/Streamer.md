Streamer
主播模式
分类：Web
描述：防止直播过程中发生意外。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Streamer（主播模式）用于防止直播过程中发生意外。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Update Cooldown (ms)。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Sync Bili Live Status（同步B站直播状态）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Update Cooldown (ms)（更新冷却（毫秒））
 类型：数值；默认：8000L
 说明：用于控制检测/刷新/动画节奏。默认值 8000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Toggle Bili Live Status (PRO)（切换B站直播状态（专业版））
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Toggle LiveStream Module（切换直播间模块）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Bili Live Platform（哔哩直播平台）
 类型：枚举；默认："pc_link"
 说明：这是选项型配置。默认值 pc_link 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：pc_link（未收录）；web_link（网络_link）；android_link（未收录）
- Bili Live Area（哔哩直播分区）
 类型：枚举；默认："Current"
 说明：这是选项型配置。默认值 Current 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Current（当前）；Indie Game（独立游戏）；Other Standalones（其他单机）；Console Games（主机游戏）；Minecraft（未收录）；Terraria（未收录）；CS:GO（未收录）；Science（未收录）；Virtual（虚拟）；Custom（自定义）
- Param version（参数 version）
 类型：文本；默认："1.0.0"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Param build（参数 build）
 类型：数值；默认：1234L
 说明：这是数值型配置。默认值 1234L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bili Live Area Custom Id（哔哩直播自定义分区ID）
 类型：数值；默认：701L
 说明：这是数值型配置。默认值 701L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bili Live Stream Key Output（哔哩直播密钥输出）
 类型：枚举；默认："Both"
 说明：这是选项型配置。默认值 Both 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Copy（复制）；Console Output（控制台输出）；Both（两者）
历史更新
- 39. 为 Streamer 添加配置项：
- 3. 添加了 Streamer 模块的更多的过滤项。
- 6. 添加模块：Streamer，打开这个模块后会自动隐藏一些隐私内容

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
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无

