TriggerBot
触发点击
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
TriggerBot（触发器）会在满足条件时执行自动点击/触发。建议从较大冷却值开始，避免过于频繁触发。
配置项
- Cooldown (ms)（冷却 (毫秒)）
 类型：数值；默认：400U
 说明：两次自动触发之间的最小间隔。过小会产生连点感，建议按目标应用响应速度设定。
- Notify（通知）
 类型：布尔；默认：true
 说明：触发成功时是否提示。调试阶段可开，稳定后可关。
历史更新
无（HISTORY 中暂无明确记录）

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

