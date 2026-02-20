PrivacySpy
隐私密探
分类：File
描述：根据本地文件汇总用户的隐私信息，让你变得紧张

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
PrivacySpy 是 JackalClient 的 File 分类模块。启用后会围绕 隐私密探 这一能力工作，核心行为是：根据本地文件汇总用户的隐私信息，让你变得紧张

配置项
- Skip Folders：类型=布尔，默认=false
- IDCard Valid Year Max：类型=数值，默认=2024
- IDCard Valid Year Min：类型=数值，默认=1914
- Scan Disk Privacy：类型=布尔，默认=true
- Filter File Extensions：类型=布尔，默认=true
- Skip System Files：类型=布尔，默认=true
- Skip Readonly Files：类型=布尔，默认=true
- Custom Scan Directory：类型=文本，默认="D:\\"
- Confirm Before Scanning：类型=布尔，默认=true
- Included File Extensions：类型=文本，默认=".txt;.md;.rtf;.doc;.ppt;.xls;.docx;.pptx;.xlsx;.wps;.zip;.rar;.7z;.gz;.c;.cpp;. ...
- Async：类型=布尔，默认=true
- Skip Hidden Files：类型=布尔，默认=true
- Find Other Privacy：类型=布尔，默认=true
- IDCard Strict Validify：类型=布尔，默认=true
- Person Name Character Max Count：类型=数值，默认=3
- Auto Console：类型=布尔，默认=true

历史更新
- 12. 现在 PrivacySpy 也会对文件夹名称进行检查统计了，如果你不想，就打开 Skip Folders 选项。
- 13. 现在 PrivacySpy 支持扫描时取消扫描。
- 31. 添加了新模块 PrivacySpy，对指定目录进行扫描，提取文件名中包含的人名、身份证号码和可能的手机号码并汇总输出。assets文件夹中多了PERSON_SUERNAMES.TXT存储姓氏，PERSON_EXCLUDE.TXT中存储非人名的排除项，可以自行修改。

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
