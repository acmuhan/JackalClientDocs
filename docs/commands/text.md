# 文本处理命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 40 组命令。

## `/echo <string...>`

```text
/echo <string...>
```

说明摘录：

```text
回显文本。
```

## `/translate [content...=clipboard]`

```text
/translate [content...=clipboard]
/translatecopy [content...=clipboard]
/translateto <lang> [content...=clipboard]
/translatetocopy <lang> [content...=clipboard]
/translateloop <times> [content...=clipboard]
/translateloopcopy <times> [content...=clipboard]
```

说明摘录：

```text
Edge 翻译功能。translateto 可指定目标语言， translateloop 将会把文本按每一种语言轮流进行翻译，最后翻回原先的语言，共翻译 times 次。
如果结尾是copy，则会将结果复制到剪贴板。
```

## `/translateoffline <from> <to> [content...=clipboard]`

```text
/translateoffline <from> <to> [content...=clipboard]
```

说明摘录：

```text
opencc 离线翻译。
支持的语言缩写有：s简体中文，t繁体中文，hk香港，tw台湾繁体，jp日本汉字
```

## `/memeizer [content...=clipboard]`

```text
/memeizer [content...=clipboard]
```

说明摘录：

```text
生草机翻译。相关设置请到生草机模块进行配置。
```

## `/calc [expr...]`

```text
/calc [expr...]
/calculate <expr...>
/calccopy <expr...>
/getcalc <expr...>
```

说明摘录：

```text
前者如果参数不填，则异步启动一个计算器。
否则，计算并输出数学表达式 expr 的值。支持四则运算、**乘方运算、三角函数、反三角函数、双曲三角函数、expr、sqrt、pow、random()、randint(a,b)、uniform(a,b)
注意这其实是调用 PowerShell 进行运算，并非客户端自身计算。

calculate 命令会输出转化后的PowerShell表达式并输出用时。
calccopy 命令如果成功，将会将结果写入剪贴板。
getcalc 命令如果成功，将会将结果以字符串形式写入it
```

## `/textdatabase get <key>`

```text
/textdatabase get <key>
/textdatabase query <key>
/textdatabase copy <key>
/textdatabase obtain <key>
/tdb get <key>
/tdb query <key>
/tdb copy <key>
/tdb obtain <key>
/pastebin get <key>
/pastebin query <key>
/pastebin copy <key>
/pastebin obtain <key>
```

说明摘录：

```text
从文本数据库获取文本。key 为秘钥。其中 copy 会把结果存入剪贴板，obtain 会把结果存入 it 代词中。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
```

## `/textdatabase set <key>`

```text
/textdatabase set <key>
/textdatabase update <key>
/tdb set <key>
/tdb update <key>
/pastebin set <key>
/pastebin update <key>
```

说明摘录：

```text
文本数据库中设置文本。key 为秘钥。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
```

## `/textdatabase clear <key>`

```text
/textdatabase clear <key>
/textdatabase delete <key>
/tdb clear <key>
/tdb delete <key>
/pastebin clear <key>
/pastebin delete <key>
```

说明摘录：

```text
文本数据库中清空文本。key 为秘钥。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
```

## `/qrcode [content...]`

```text
/qrcode [content...]
```

说明摘录：

```text
根据内容生成二维码并打开。如果不写参数，则读取剪贴板内容（必须是文本类型）。
```

## `/string [content...]`

```text
/string [content...]
```

说明摘录：

```text
为 it 赋值字符串。
```

## `/string2 [content...]`

```text
/string2 [content...]
```

说明摘录：

```text
为 it 赋值字符串。但会弹出一个高级输入框让你编辑。content 将作为输入框的初始内容。
```

## `/string3 [content...]`

```text
/string3 [content...]
```

说明摘录：

```text
为 it 赋值字符串。但会弹出一个聊天框让你编辑。content 将作为输入框的初始内容。
```

## `/copystr [content...]`

```text
/copystr [content...]
```

说明摘录：

```text
复制字符串，但先弹出一个高级输入框让你编辑。content 作为输入框的初始内容。
```

## `/str <params...>`

```text
/str <params...>
```

说明摘录：

```text
字符串功能。params 为相关参数。
```

## `/str size [content=it...]`

```text
/str size [content=it...]
```

说明摘录：

```text
获取字符串长度与字符数。
```

## `/str transform lower [content=it...]`

```text
/str transform lower [content=it...]
```

说明摘录：

```text
字符串转小写。
```

## `/str transform upper [content=it...]`

```text
/str transform upper [content=it...]
```

说明摘录：

```text
字符串转大写。
```

## `/str transform reverse [content=it...]`

```text
/str transform reverse [content=it...]
```

说明摘录：

```text
字符串反转。注意基本单位为字符而不是字节。
```

## `/str transform swapcase [content=it...]`

```text
/str transform swapcase [content=it...]
```

说明摘录：

```text
交换字符串大小写。
```

## `/str transform annoycase [content=it...]`

```text
/str transform annoycase [content=it...]
```

说明摘录：

```text
混写字符串大小写。
```

## `/str transform remove <substr> [content=it...]`

```text
/str transform remove <substr> [content=it...]
```

说明摘录：

```text
移除子串。
```

## `/str transform replace <old> <new> [content=it...]`

```text
/str transform replace <old> <new> [content=it...]
```

说明摘录：

```text
替换字符串。
```

## `/str transform split <sep> [content=it...]`

```text
/str transform split <sep> [content=it...]
```

说明摘录：

```text
分隔字符串。
```

## `/str transform join <sep> [content=it...]`

```text
/str transform join <sep> [content=it...]
```

说明摘录：

```text
在字符串每个字符间添加字符。
```

## `/str transform delpunct [content=it...]`

```text
/str transform delpunct [content=it...]
```

说明摘录：

```text
删除字符串标点符号。
```

## `/str transform punctcutline [content=it...]`

```text
/str transform punctcutline [content=it...]
```

说明摘录：

```text
根据字符串标点符号换行。
```

## `/str transform toengpunct [content=it...]`

```text
/str transform toengpunct [content=it...]
```

说明摘录：

```text
将字符串的标点符号全部改为英文标点。
```

## `/str transform tochnpunct [content=it...]`

```text
/str transform tochnpunct [content=it...]
```

说明摘录：

```text
将字符串的标点符号全部改为中文标点。
```

## `/str transform obfuscate <mode> [content=it...]`

```text
/str transform obfuscate <mode> [content=it...]
```

说明摘录：

```text
使用 mode 模式混淆字符串。
```

## `/str transform quote [content=it...]`

```text
/str transform quote [content=it...]
```

说明摘录：

```text
添加双引号。
```

## `/str transform unquote [content=it...]`

```text
/str transform unquote [content=it...]
```

说明摘录：

```text
移除首尾双引号。
```

## `/str transform escape [content=it...]`

```text
/str transform escape [content=it...]
```

说明摘录：

```text
转义字符串。例如将换行符替换为\n（写成这样）。
```

## `/str transform unescape [content=it...]`

```text
/str transform unescape [content=it...]
```

说明摘录：

```text
反转义字符串。
```

## `/str transform escapehtml [content=it...]`

```text
/str transform escapehtml [content=it...]
```

说明摘录：

```text
转义字符串。但是是 HTML 转义规则。
```

## `/str transform unescapehtml [content=it...]`

```text
/str transform unescapehtml [content=it...]
```

说明摘录：

```text
反转义字符串。但是是 HTML 转义规则。
```

## `/str transform extractext [content=it...]`

```text
/str transform extractext [content=it...]
```

说明摘录：

```text
提取文件路径扩展名。
```

## `/str transform delext [content=it...]`

```text
/str transform delext [content=it...]
```

说明摘录：

```text
去除文件路径扩展名。
```

## `/str transform filter [content=it...]`

```text
/str transform filter [content=it...]
```

说明摘录：

```text
对字符串进行屏蔽词过滤。
```

## `/str transform cut [content=it...]`

```text
/str transform cut [content=it...]
```

说明摘录：

```text
中文分词。使用在线API。
```

## `/str transform cut_bili [content=it...]`

```text
/str transform cut_bili [content=it...]
```

说明摘录：

```text
中文分词。使用B站搜索推荐词。
```
