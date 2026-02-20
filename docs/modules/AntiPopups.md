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
AntiPopups 是 JackalClient 的 Window 分类模块。启用后会围绕 反弹窗 这一能力工作，核心行为是：暂无描述

配置项
- Exclude SystemProcess：类型=布尔，默认=true
- Others Judge Policy：类型=枚举，默认="Title or Blacklist"
- Chain LegitMouseClick X Margin Max：类型=数值，默认=22
- Exclude MessageBox：类型=布尔，默认=true
- Chain Allow LegitMouseClick：类型=布尔，默认=true
- Chain LegitMouseClick Internal Delay (ms)：类型=数值，默认=200
- Measures：类型=枚举，默认="Chain"
- Exclude Maximized：类型=布尔，默认=false
- Chain：类型=文本，默认="Close", "Destroy", "EndSession", "KillProcess"
- Chain LegitMouseClick X Margin Min：类型=数值，默认=14
- BottomRight Judge Policy：类型=枚举，默认="Size or Blacklist"
- Exclude WinToast：类型=布尔，默认=true
- Check Cooldown：类型=数值，默认=250U
- Chain Allow Move Window Out：类型=布尔，默认=true
- Ad Window Title Keywords List：类型=文本，默认="每日;开通会员;游戏中心;今日;新闻;优选;精选;推荐;热搜;软件管家;贴士;小助手;奖励;特惠;公测;一刀;贪玩;上线;News;Free Trial"
- Whitelist Processes (Sep With Semicolon)：类型=文本，默认="哔哩哔哩.exe;explorer.exe;Snipaste.exe;steam.exe;steamwebhelper.exe;msedge.exe;iexp ...
- Whitelist Processes Enabled：类型=布尔，默认=true
- Chain LegitMouseClick Y Margin Max：类型=数值，默认=22
- Blacklist Processes (Sep With Semicolon)：类型=文本，默认="mini.lohaslady.exe;FlashHelperService.exe;MultiTip.exe;sesvcr.exe;360SpeedldHea ...
- Chain LegitMouseClick Y Margin Min：类型=数值，默认=14
- Ad Process Policy：类型=枚举，默认="Warn & AutoKill"

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
