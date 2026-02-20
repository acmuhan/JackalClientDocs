AntiPopups
反弹窗
分类：Window
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiPopups（反弹窗）会持续检测窗口并按规则判定是否属于广告/骚扰弹窗，再执行关闭链路。建议先完善白名单，再逐步增强判定策略，避免误处理正常窗口。
配置项
- Ad Process Policy（广告进程策略）
 类型：枚举；默认："Warn & AutoKill"
 说明：检测到高风险弹窗进程后的处理策略。默认会先警告再自动结束，兼顾可控与效率。
 可选：Ignore（忽略）；Warn（警告）；AutoKill（自动击杀）；Warn & AutoKill（警告并自动击杀）
- BottomRight Judge Policy（右下角判定策略）
 类型：枚举；默认："Size or Blacklist"
 说明：右下角弹窗判定规则，支持按尺寸、标题或黑名单组合判断。误杀时优先收紧此项。
 可选：Size（大小）；Title（标题）；Size and Title（尺寸+标题）；Size or Blacklist（尺寸或黑名单）；Title or Blacklist（标题或黑名单）；Size and Title or Blacklist（尺寸+标题 或 在黑名单）
- Others Judge Policy（其他判定策略）
 类型：枚举；默认："Title or Blacklist"
 说明：非右下角弹窗的判定规则，通常以标题/黑名单为主。
 可选：Title（标题）；Blacklist（黑名单）；Title or Blacklist（标题或黑名单）
- Measures（措施）
 类型：枚举；默认："Chain"
 说明：判定命中后的执行动作。`Chain` 会按序尝试多种关闭手段，成功率更高。
 可选：Chain（链式）；Close（关闭）；Destroy（发送销毁消息）；EndSession（发送结束会话消息）；KillProcess（击杀进程）
- Chain（链式）
 类型：文本；默认："Close", "Destroy", "EndSession", "KillProcess"
 说明：链式动作执行序列。建议把无副作用动作放前面，激进动作放后面。
- Ad Window Title Keywords List（广告窗口标题关键词列表）
 类型：文本；默认："每日;开通会员;游戏中心;今日;新闻;优选;精选;推荐;热搜;软件管家;贴士;小助手;奖励;特惠;公测;一刀;贪玩;上线;News;Free Trial"
 说明：标题关键词库，命中后更可能判为广告弹窗。建议用分号分隔并逐步加词。
- Chain Allow LegitMouseClick（链允许合法鼠标点击）
 类型：布尔；默认：true
 说明：链式处理时模拟更自然的点击流程，降低被目标窗口拦截的概率。
- Chain LegitMouseClick Internal Delay (ms)（链合法鼠标点击内部延迟 (毫秒)）
 类型：数值；默认：200
 说明：模拟点击动作间隔。过小可能被判异常，过大处理会变慢。
- Chain LegitMouseClick X Margin Min（链合法鼠标点击横向偏移最小值）
 类型：数值；默认：14
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain LegitMouseClick X Margin Max（链合法鼠标点击横向偏移最大值）
 类型：数值；默认：22
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain LegitMouseClick Y Margin Min（链合法鼠标点击纵向偏移最小值）
 类型：数值；默认：14
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain LegitMouseClick Y Margin Max（链合法鼠标点击纵向偏移最大值）
 类型：数值；默认：22
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain Allow Move Window Out（链允许把窗口挪出去）
 类型：布尔；默认：true
 说明：允许先把弹窗移出主要视野再执行后续动作。
- Check Cooldown（检查冷却）
 类型：数值；默认：250U
 说明：弹窗扫描间隔。调小反应更快但占用更高。
- Exclude Maximized（排除最大化）
 类型：布尔；默认：false
 说明：跳过最大化窗口，降低误处理主应用窗口的风险。
- Exclude MessageBox（排除消息框）
 类型：布尔；默认：true
 说明：跳过标准消息框，避免影响正常交互提示。
- Exclude SystemProcess（排除系统进程）
 类型：布尔；默认：true
 说明：跳过系统进程窗口，减少系统稳定性风险。
- Exclude WinToast（排除系统通知）
 类型：布尔；默认：true
 说明：跳过系统通知Toast，防止误关系统通知。
- Blacklist Processes (Sep With Semicolon)（黑名单进程（用分号分隔））
 类型：文本；默认："mini.lohaslady.exe;FlashHelperService.exe;MultiTip.exe;sesvcr.exe;360SpeedldHealth.exe;360SpeedIdHealth.exe;360SpeedIdHealthEx.exe;Tgmn.exe;Tnuser.exe;Svnpnd.exe;SGNews.exe;biz_helper.exe;SOGOUSmartAssistant.exe;DesktopAssistant.exe;LenovoAppStore.exe;aipiclaunch.exe;SoftMgr.exe;NewIdView.exe;SodaDownloader.exe ...
 说明：进程黑名单，命中进程会更积极处理其弹窗。
- Whitelist Processes Enabled（是否启用进程白名单。）
 类型：布尔；默认：true
 说明：启用白名单后，名单内进程将被优先保护。
- Whitelist Processes (Sep With Semicolon)（进程白名单，用分号分隔。）
 类型：文本；默认："哔哩哔哩.exe;explorer.exe;Snipaste.exe;steam.exe;steamwebhelper.exe;msedge.exe;iexplore.exe;firefox.exe ...
 说明：受保护进程列表。建议先加入浏览器、资源管理器和常用工具。
历史更新
- 29. Anti Popups 模块的 Ad Process Policy 广告进程政策的默认值改为 Warn & AutoKill（警告并自动击杀）
- 1. 为 Anti Popups 设置进程白名单，防止信任窗口被关或进程被杀。
- 5. 添加新模块 Anti Popups: 可以根据规则自动关闭符合条件的弹窗。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无

