IRC
聊天室
分类：Web
描述：一个简单的在线聊天系统。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IRC（聊天室）用于一个简单的在线聊天系统。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Notify My Mentions、Message Notify Type、Text Database Update Method。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Async While Getting Username（异步获取用户名）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Message Fetch Interval (ms)（消息拉取延迟 (毫秒)）
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Message Fetch Timeout (s)（消息拉取超时 (秒)）
 类型：数值；默认：20
 说明：用于控制检测/刷新/动画节奏。默认值 20 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Message Send Timeout (s)（消息发送超时 (秒)）
 类型：数值；默认：20
 说明：用于控制检测/刷新/动画节奏。默认值 20 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Old Messages Threshold (s)（久远消息阈值 (秒)）
 类型：数值；默认：180
 说明：这是数值型配置。默认值 180 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Ignore Old Messages（忽略久远的消息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Cancel Sending When As Guest（访客身份时取消发送）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Cancel Sending Repeated Message（取消发送重复消息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Auto Change Name When Name Missing（名称丢失时自动改名）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Notify My Mentions（通知对我的@）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；WinToast（系统通知）
- Message Notify Type（消息通知类型）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Island（岛）
- Text Database Update Method（文本数据库更新方法）
 类型：枚举；默认："POST"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 POST ，确认稳定后再逐项切换比较效果。
 可选：Old（老版）；GET（未收录）；POST（未收录）
- Quick Send Style（快速发送的样式）
 类型：枚举；默认："Input Box"
 说明：这是选项型配置。默认值 Input Box 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Bottom Chat（底部聊天栏）；Input Box（输入框）
- Quick Send Hotkey（快速发送快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LCONTROL, VK_LMENU, '0'}}}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Message Length Limit Via GET（使用GET时的消息长度上限）
 类型：数值；默认：39
 说明：这是数值型配置。默认值 39 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Speak Message（讲述消息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Speak Max Length（最大讲述长度）
 类型：数值；默认：60
 说明：这是数值型配置。默认值 60 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Blatant Send（暴力发送）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Console Output（控制台输出）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Fast Send With # Prefix Command（使用#开头的命令快速发送）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Blocked User Names (Sep With Semicolon) (PRO)（已屏蔽用户名称（用分号分隔）（专业版））
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Underline Pro User Messages（为专业版用户的消息添加下划线）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Taboo Filter（违禁词过滤）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Debug Output（调试输出）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

