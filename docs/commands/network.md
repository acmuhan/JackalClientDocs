# 网络命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 26 组命令。

## `/ipaddress [ip1;ip2;...]`

```text
/ipaddress [ip1;ip2;...]
/ipaddressex [ip1;ip2;...]
```

说明摘录：

```text
显示 IP 地址地理位置信息。如果不填参数则显示当前 IP 地址位置。/ipaddressex 命令显示人工智能对该地的描述。
```

## `/iphorror [ip1;ip2;...]`

```text
/iphorror [ip1;ip2;...]
/iphorrorex [ip1;ip2;...]
```

说明摘录：

```text
显示 IP 地址恐吓段落。如果不填参数则显示当前 IP 地址位置。/ipaddressex 命令则使用人工智能生成段落。
```

## `/tcptable`

```text
/tcptable
/tcptable2
/tcptable3
```

说明摘录：

```text
获取当前计算机的所有 TCP 连接。/tcptable2 还会获取外部IP的具体位置。（外国IP只能具体到国家）。 /tcptable3 还会显示该IP的大洲、地区、经纬度。
```

## `/irc`

```text
/irc
```

说明摘录：

```text
切换IRC聊天室模块状态。当启用时，会自动检查用户名以及状态。启用后就可以接受聊天室消息了。
```

## `/irc send [msg...]`

```text
/irc send [msg...]
```

说明摘录：

```text
发送一条聊天室公共信息。如果你启用了IRC模块的Fast Send With # Prefix Command选项，你可以直接使用#开头的字符串快捷发送消息。例如：#hello-world
如果不填msg，将会打开一个框，你可以在里面输入（也可以输入中文）。或者使用 ## 也可以。
当前不支持私聊。友善交流讨论。
```

## `/irc getname`

```text
/irc getname
```

说明摘录：

```text
获取自己的实际用户名。
```

## `/irc register <name>`

```text
/irc register <name>
/irc setname <name>
```

说明摘录：

```text
注册当前计算机的聊天室用户名称。名称为 name ，不能含空格。如果检测到名称被占用且不为自己，就不能修改。
```

## `/irc queryuser <name>`

```text
/irc queryuser <name>
```

说明摘录：

```text
查询 name 用户名是否被占用。
```

## `/irc block <name>`

```text
/irc block <name>
```

说明摘录：

```text
[PRO] 屏蔽指定用户的消息。会添加到模块配置中，随时可以改。收到被屏蔽用户的消息时，什么也不会显示。
```

## `/irc unblock <name>`

```text
/irc unblock <name>
/irc unblock all/*
```

说明摘录：

```text
[PRO] 取消屏蔽指定用户的消息。
```

## `/what`

```text
/what
/wtf
/what [text...=clipboard]
/wtf [text...=clipboard]
```

说明摘录：

```text
让 AI 解读一段文本。
```

## `/what is <term>`

```text
/what is <term>
/wtf is <term>
```

说明摘录：

```text
【PRO】在 Wikipedia 上搜索有关词汇的信息。
```

## `/what window [hwnd=it]`

```text
/what window [hwnd=it]
```

说明摘录：

```text
让 AI 解读一个窗口（会自动OCR）
```

## `/what process [pid=it]`

```text
/what process [pid=it]
```

说明摘录：

```text
让 AI 解读一个进程
```

## `/ncm <args...>`

```text
/ncm <args...>
/cloudmusic <args...>
```

说明摘录：

```text
网易云音乐相关命令。
```

## `/ncm song <keywords...>`

```text
/ncm song <keywords...>
/ncm songex <page> <keywords...>
/ncm songraw <keywords...>
```

说明摘录：

```text
搜索单曲。songraw 输出原始 json 数据。
```

## `/ncm songdetails/songinfo <id>`

```text
/ncm songdetails/songinfo <id>
```

说明摘录：

```text
获取单曲的详细信息。
```

## `/ncm getid`

```text
/ncm getid
```

说明摘录：

```text
查找一首歌曲的ID。需要输入标题和作曲家字符串。
```

## `/ncm clearcache`

```text
/ncm clearcache
```

说明摘录：

```text
清除封面图片缓存。output\Cover\NCM_Cache
```

## `/ncm lyrics <songid>`

```text
/ncm lyrics <songid>
```

说明摘录：

```text
根据歌曲ID获取没有时间轴的完整歌词。将会异步获取。
```

## `/ncm elog`

```text
/ncm elog
```

说明摘录：

```text
【实验性】解析并输出当前网易云ELOG内容。
```

## `/ncm checkdll`

```text
/ncm checkdll
```

说明摘录：

```text
【PRO】检查 version.dll 网易云监听DLL是否被安装，如果没有被安装则安装并重新启动网易云音乐。
```

## `/download <url...>`

```text
/download <url...>
```

说明摘录：

```text
开始一个下载任务。url必须以http开头。
```

## `/download list`

```text
/download list
```

说明摘录：

```text
打开 Download HUD 模块。
```

## `/search [text...]`

```text
/search [text...]
```

说明摘录：

```text
搜索相关内容，可以在命令行中交互。
```

## `/searchai [text...]`

```text
/searchai [text...]
```

说明摘录：

```text
搜索相关内容，可以在命令行中交互。且每一个条目都会用AI简短地总结。
```
