HexViewer
十六进制查看
分类：File
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
HexViewer 是 JackalClient 的 File 分类模块。启用后会围绕 十六进制查看 这一能力工作，核心行为是：暂无描述

配置项
- Category CR Color：类型=文本，默认="&11"
- Category Punct Unicode Color (Strict)：类型=文本，默认="255;80;80"
- Category Punct Color：类型=文本，默认="&14"
- Category 2-Byte Unicode Color：类型=文本，默认="255;110;180"
- Category Punct Unicode Color：类型=文本，默认="72;118;255"
- Category Space Color：类型=文本，默认="&12"
- Category LF Color：类型=文本，默认="&10"
- Category Null Color：类型=文本，默认="30;30;30"
- Category Number Color：类型=文本，默认="&9"
- Category 3-Byte Unicode Color：类型=文本，默认="255;110;180"
- Color Mode：类型=枚举，默认="Simple"
- Step Color Start：类型=文本，默认="30;30;30"
- Step Color End：类型=文本，默认="255;255;255"
- Category Alpha Color：类型=文本，默认="&7"
- Category Other Color：类型=文本，默认="&13"
- Category Control Color：类型=文本，默认="&6"
- Category 4-Byte Unicode Color：类型=文本，默认="255;110;180"

历史更新
- 1. 修复 Hex Viewer 数字左对齐的问题。
- 35. 为 Hex Viewer 添加了更多的类目自定义颜色。支持对 Unicode 字符的解析了。
- 9. 添加模块：Hex Viewer，十六进制查看。需要用指令调用。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)

相关资料
无
