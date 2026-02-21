# B站命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 62 组命令。

## `/webpage <url...>`

```text
/webpage <url...>
/webpageraw <url...>
/bilipage <url...>
/bilipageraw <url...>
```

说明摘录：

```text
获取网页完整内容。/webpage /bilipage命令将解析格式以彩色输出，/webpageraw /bilipageraw 不会。/bilipage /bilipageraw 会携带对应的 Referer
```

## `/bili [args...]`

```text
/bili [args...]
/bilibili [args...]
```

说明摘录：

```text
哔哩哔哩全套命令。需要登录才能使用。输入 /bili login 或 /bilisettings 扫码登录。
不指定参数时，进入主页。
```

## `/bili login`

```text
/bili login
```

说明摘录：

```text
扫码登录。将会存储 Cookies 到 BiliSettings，请勿泄露以免被盗号。
```

## `/bili relogin`

```text
/bili relogin
```

说明摘录：

```text
重新扫码登录。
```

## `/bili logout`

```text
/bili logout
```

说明摘录：

```text
登出账号。清空 Cookies。
```

## `/bili space [uid]`

```text
/bili space [uid]
```

说明摘录：

```text
查看用户空间主页。如果不指定uid，则为当前登录账号的空间。
```

## `/bili parse <shortlink>`

```text
/bili parse <shortlink>
```

说明摘录：

```text
解析B站短链接。
```

## `/bili fans`

```text
/bili fans
/bili fans list [limit=100]
/bili fans enum [limit=100]
```

说明摘录：

```text
查看自己的粉丝列表。limit 为数量限制。如果粉丝太多，你可能因B站限制无法全部看完。【PRO】版的输出会更详细。
```

## `/bili fans find <kw...>`

```text
/bili fans find <kw...>
/bili fans findf <kw...>
/bili fans search <limit> <kw...>
/bili fans searchf <limit> <kw...>
```

说明摘录：

```text
【PRO】以昵称关键字kw搜索自己的粉丝。两个带f后缀的为快速模式，找到一个很符合的结果就会直接输出并停止。search(f)可以指定搜索范围limit（表示前limit个粉丝中搜索）, find 则为B站支持的最大搜索范围（可能为1000）中搜索。findf 为前 100 个中搜索。你可以使用UID=或UID:开头搜索指定UID的用户。
```

## `/bili video <aid/bid/link>`

```text
/bili video <aid/bid/link>
```

说明摘录：

```text
查看B站视频信息。会进入一个可交互页面。
```

## `/bili video <aid/bid/link> summary`

```text
/bili video <aid/bid/link> summary
```

说明摘录：

```text
使用人工智能总结视频信息。
```

## `/bili video <aid/bid/link> comment`

```text
/bili video <aid/bid/link> comment
```

说明摘录：

```text
使用人工智能生成并发送一条类似的评论。
```

## `/bili video <aid/bid/link> gencomment`

```text
/bili video <aid/bid/link> gencomment
```

说明摘录：

```text
使用人工智能生成一条类似的评论。仅生成不发送。
```

## `/bili comment add [type=1] <oid> <content...>`

```text
/bili comment add [type=1] <oid> <content...>
```

说明摘录：

```text
为指定评论区添加一条评论。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id。
```

## `/bili comment reply [type=1] <oid> <root> <content...>`

```text
/bili comment reply [type=1] <oid> <root> <content...>
```

说明摘录：

```text
为指定评论区添加一条二级评论（仅二级）。root为要回复的评论的 rpid。
```

## `/bili comment reply2 [type=1] <oid> <root> <parent> <content...>`

```text
/bili comment reply2 [type=1] <oid> <root> <parent> <content...>
```

说明摘录：

```text
为指定评论区添加一条大于二级的评论。root为要回复的评论所在的楼层的 rpid。parent 为要回复的评论的 rpid。
```

## `/bili comment recv [page=1]`

```text
/bili comment recv [page=1]
```

说明摘录：

```text
【PRO】查看“回复我的”消息列表。page 为页码（每页固定显示若干条），用于快速浏览近期收到的评论回复。
```

## `/bili comment recvui`

```text
/bili comment recvui
```

说明摘录：

```text
【PRO】进入交互式“回复我的”界面。支持方向键选择、回车直接回复、R 刷新、Q/Esc 退出。回复输入支持 cancel 或 /cancel 取消。
```

## `/bili comment list/enum <type> <oid> [count=20] [page=1] [sort=1]`

```text
/bili comment list/enum <type> <oid> [count=20] [page=1] [sort=1]
/bili comment list/enum <oid>
```

说明摘录：

```text
枚举评论区（单层，虽然可以显示部分子评论，但不会显示完整，分页）。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id。count 为每页数量，page 为页码，sort 为排序。
```

## `/bili comment listall <type> <oid> [sort=1]`

```text
/bili comment listall <type> <oid> [sort=1]
```

说明摘录：

```text
枚举评论区（单层，虽然可以显示部分子评论，但不会显示完整）。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，sort 为排序。
```

## `/bili comment tree <type> <oid> [sort=1]`

```text
/bili comment tree <type> <oid> [sort=1]
```

说明摘录：

```text
枚举评论区（多层）。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，sort 为排序。
```

## `/bili comment like <type> <oid> [rpid1;rpid2;rpid3;...]`

```text
/bili comment like <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment unlike <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment dislike <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment undislike <type> <oid> [rpid1;rpid2;rpid3;...]
```

说明摘录：

```text
给若干评论点赞/取消赞/点踩/取消踩。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，rpid 为目标评论rpid。rpid 不填时，代表所有评论。
```

## `/bili comment delete <type> <oid> [rpid1;rpid2;rpid3;...]`

```text
/bili comment delete <type> <oid> [rpid1;rpid2;rpid3;...]
```

说明摘录：

```text
删除若干评论。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，rpid 为目标评论rpid。rpid 不填时，代表所有评论。
```

## `/bili comment topmost <type> <oid> [rpid1;rpid2;rpid3;...]`

```text
/bili comment topmost <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment untopmost <type> <oid> [rpid1;rpid2;rpid3;...]
```

说明摘录：

```text
置顶/取消置顶评论。。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id, rpid 为目标评论rpid，支持并发置顶多个目标评论 （未成功）。rpid 不填时，代表所有评论。
```

## `/bili dynamic list/enum`

```text
/bili dynamic list/enum
/bili dynamic list/enum <uid> [limit=10] [offset_dynamic_id=0]
```

说明摘录：

```text
枚举编号为 uid 的用户动态。limit 表示最大数量。如果填写offset_dynamic_id，则从编号为offset_dynamic_id的动态开始枚举。
```

## `/bili dynamic likes <uid> [limit=8]`

```text
/bili dynamic likes <uid> [limit=8]
/bili dynamic unlikes <uid> [limit=8]
```

说明摘录：

```text
给指定用户动态点赞/取消点赞，最多 limit 个动态。
```

## `/bili contribution [uid=own] [limit=30]`

```text
/bili contribution [uid=own] [limit=30]
```

说明摘录：

```text
枚举指定用户的稿件列表。uid如果不填则是当前登录的用户。limit为数量限制，显示前多少的稿件。
```

## `/bili tag query <avid/bid/link...>`

```text
/bili tag query <avid/bid/link...>
```

说明摘录：

```text
该命令已被废弃。
```

## `/bili live`

```text
/bili live
/bili live feed/recommend [limit]
```

说明摘录：

```text
获得推荐的直播间列表。limit 为数量限制。
```

## `/bili live addchatter <room_id> <content...>`

```text
/bili live addchatter <room_id> <content...>
/bili live chatter <content...>
/bili live leetchatter <content...>
```

说明摘录：

```text
向 room_id 直播间发送弹幕。如果 room_id 填为 ~ ，则会使用 LiveStream 模块中的 Room ID。/bili live leetchatter 则会先将文本交给 Clipboard Tweaks 模块处理再发送。
```

## `/bili live go [roomId=~]`

```text
/bili live go [roomId=~]
/bili live link [roomId=~]
```

说明摘录：

```text
go 打开直播间网页。link 仅复制链接。如果 roomId 不填，则取 LiveStream 模块的 Room ID。
```

## `/bili live following`

```text
/bili live following
```

说明摘录：

```text
查询自己已关注的所有 up 的直播状态。
```

## `/bili live audience [roomId=~]`

```text
/bili live audience [roomId=~]
```

说明摘录：

```text
输出现在的直播间观众信息。如果 roomId 不填，则为当前的缓存。如果填~，则取 LiveStream 模块的 Room ID。
```

## `/bili live likeauds [roomId=~] [limit=5]`

```text
/bili live likeauds [roomId=~] [limit=5]
/bili live likeauds2 [roomId=~] [limit=5]
```

说明摘录：

```text
给现在的直播间观众的动态点赞。limit 为点赞的动态数量。
```

## `/bili live host [uid=~]`

```text
/bili live host [uid=~]
/bili live hostinfo [uid=~]
```

说明摘录：

```text
获取主播信息。
```

## `/bili live fetch [limit=100]`

```text
/bili live fetch [limit=100]
/bili live chat [limit=100]
```

说明摘录：

```text
获取并输出当前直播间弹幕列表的前limit个。
```

## `/bili live setroom [roomId=auto]`

```text
/bili live setroom [roomId=auto]
```

说明摘录：

```text
将有关模块的直播间ID选项全部设为roomId。如果不填，则为自己的直播间ID。
```

## `/bili live info [roomId=~]`

```text
/bili live info [roomId=~]
```

说明摘录：

```text
获得直播间原始信息JSON。
```

## `/bili live create`

```text
/bili live create
```

说明摘录：

```text
为自己创建一个直播间。
```

## `/bili live settitle <title...>`

```text
/bili live settitle <title...>
```

说明摘录：

```text
【PRO】设置直播间标题为 title。
```

## `/bili live gettitle [roomId=~]`

```text
/bili live gettitle [roomId=~]
/bili live title [roomId=~]
```

说明摘录：

```text
获取直播间标题。
```

## `/bili live areas`

```text
/bili live areas
```

说明摘录：

```text
查看所有直播分区及其ID。
```

## `/bili live area`

```text
/bili live area
/bili live getarea [roomId=~]
```

说明摘录：

```text
获取直播间分区。使用 /bili live areas 查看所有分区。
```

## `/bili live area <area_id/area_name>`

```text
/bili live area <area_id/area_name>
/bili live setarea <area_id/area_name>
```

说明摘录：

```text
设置直播间分区。可填分区ID或分区名。分区名将自动模糊匹配（命中规则：相似度>0.8，或>0.6且领先第二名>0.2）；若匹配失败会输出候选分区。使用 /bili live areas 查看所有分区。
```

## `/bili live start [area=current]`

```text
/bili live start [area=current]
/bili live startsilent [area=current]
```

说明摘录：

```text
【PRO】立即开播。房间号将采用 LiveStream 直播间模块的房间号。area为分区ID，如果不填则为当前分区。startsilent 子命令是静默开播，不会提示任何信息。
```

## `/bili live stop`

```text
/bili live stop
```

说明摘录：

```text
【PRO】关闭直播。房间号将采用 LiveStream 直播间模块的房间号。
```

## `/bili live levelsystem list`

```text
/bili live levelsystem list
```

说明摘录：

```text
枚举等级系统所有的观众档案数据。
```

## `/bili live levelsystem save`

```text
/bili live levelsystem save
```

说明摘录：

```text
立即保存等级系统所有的观众档案数据。
```

## `/bili live mute <uid/name> <duration_flag>`

```text
/bili live mute <uid/name> <duration_flag>
```

说明摘录：

```text
禁言指定的直播间用户。duration_flag可以填写：
	0/current: 本场直播。
	-1/permenant: 永久。
```

## `/bili live muted`

```text
/bili live muted
```

说明摘录：

```text
查看直播间已禁言列表。
```

## `/bili live unmute <uid/name>`

```text
/bili live unmute <uid/name>
```

说明摘录：

```text
取消指定用户的禁言。
```

## `/bili opus <id>`

```text
/bili opus <id>
```

说明摘录：

```text
阅读一个专栏。
```

## `/bili components <uid> [preset=for_speak]`

```text
/bili components <uid> [preset=for_speak]
```

说明摘录：

```text
查用户成分。uid 为用户ID。preset 为预设。
for_speak: 只讲述，不输出。
normal:	讲述并输出。
```

## `/bili cookies`

```text
/bili cookies
```

说明摘录：

```text
查看 Cookies。请勿泄露以免被盗号。
```

## `/bili setcookies [cookies.../cookiesjson...]`

```text
/bili setcookies [cookies.../cookiesjson...]
```

说明摘录：

```text
设置 Cookies 的必要项。如果只填前两项参数，则会提示分别输入 DedeUserID, DedeUserID__ckMd5, SESSDATA, bili_jct, sid。
```

## `/bilinickname <uid>`

```text
/bilinickname <uid>
/bilinicknames <uid1;uid2;...>
```

说明摘录：

```text
查询B站用户昵称。
```

## `/biliuid <nickname>`

```text
/biliuid <nickname>
/biliuid1 <nickname>
```

说明摘录：

```text
根据一个用户昵称反查用户UID。如果找不到精确的就输出相似的。/biliuid如果遇到空回复会多尝试几次，/biliuid1并不会。
```

## `/bilihot [limit]`

```text
/bilihot [limit]
```

说明摘录：

```text
显示B站热搜。
```

## `/bilisuggest <keyword>`

```text
/bilisuggest <keyword>
```

说明摘录：

```text
显示关于关键词 keyword 的哔哩哔哩搜索建议。一次会输出很多。
```

## `/bilivideo <aid/bid/link>`

```text
/bilivideo <aid/bid/link>
```

说明摘录：

```text
输出指定B站视频相关信息。
```

## `/bilivideocover <get/download/forward> <aid/bid/link>`

```text
/bilivideocover <get/download/forward> <aid/bid/link>
```

说明摘录：

```text
B站视频封面提取。
get输出图片链接，download下载至output\Cover，forward直接在浏览器在线查看此图片。
```

## `/biliprofile [uid1;uid2;...]`

```text
/biliprofile [uid1;uid2;...]
/biliprofiles <uid1;uid2;...>
```

说明摘录：

```text
获取指定B站用户完整档案。
```
