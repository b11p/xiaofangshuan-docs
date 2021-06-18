---
title: 消防栓分身
lang: zh-CN
---

# 消防栓分身
消防栓分身可以帮助您用自己的 QQ 号提供消防栓的功能，以缓解封号、风控等问题。

::: tip
如果刚开始使用时出现消息发不出去的情况，建议先用手机 QQ 挂一段时间（一周左右）再使用。
:::

## 部署
### 方法一：使用开发者打包好的 go-cqhttp 部署
下载 [消防栓分身2.zip](https://res.bleatingsheep.org/%E6%B6%88%E9%98%B2%E6%A0%93%E5%88%86%E8%BA%AB2.zip) 并解压，打开 `config.hjson` 文件，输入账号和密码，然后运行 `go-cqhttp.exe` 文件。

::: tip
压缩包中包含 Windows 和 Linux x86_64 平台的可执行文件。如果需要运行在其他平台（如 x86 或 ARM），可以自行前往 go-cqhttp 的 [Release](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.40-fix5) 页面下载。当前推荐 v0.9.40-fix5 版本。
:::

::: warning
**不要**使用管理员权限运行。
:::

::: danger
此前出现的重复发送私聊消息实际上是因为 go-cqhttp 反复上报私聊命令。此处提供的版本也会出现这种现象，请斟酌考虑再决定是否使用。
:::

### 方法二：使用消防栓分身启动器
下载 [消防栓分身启动器](https://res.bleatingsheep.org/xfs%20launcher.zip)，解压后打开，填写 QQ 号和密码运行，按照新出现的窗口中的提示进行安全认证，即可启动消防栓分身。

::: warning
请务必先解压再打开，不要直接在压缩包里双击运行。
:::

::: tip
初次登录可能需要加载较长时间，请耐心等待。
:::

::: tip
在启动器中填写的账号密码仅用于登录 QQ，不会被发送到消防栓服务器。您可以在下载的压缩文件中查看启动器的代码，在[仓库](https://github.com/Mrs4s/go-cqhttp)中查看 go-cqhttp 的代码。
:::

### 方法三：自行配置 OneBot
- 下载安装任何 [OneBot 实现](https://onebot.page.moe/ecosystem.html#onebot-%E5%AE%9E%E7%8E%B0)（至少应该实现了反向 WebSocket 通信方式）。
- 设置远程服务器为 `https://public-service.b11p.com/`。
- 设置 `AccessToken` 为 `bleatingsheep.org`。
- 打开运行。

## 原理
在分身的机器上收发 QQ 消息。所有消息都会被发送给远程服务器，实际业务逻辑还是在远程服务器上执行。

## 优点
### 风控概率减小
由于您部署的分身专为您服务，收发消息少，更不容易被风控。

### 风控处理更方便
就算分身也被风控了，您也可以自行处理，例如换另一个号，不用等开发者处理，避免影响您使用。

## 风险
用 [go-cqhttp](https://docs.go-cqhttp.org/) 等 OneBot 实现登录 QQ 号，使您的 QQ 号有被风控乃至封号的风险。出现这种情况，开发者概不负责，请自行斟酌是否使用。**强烈推荐用小号提供消防栓分身功能。**

所有事件都会传到消防栓服务器，包括聊天消息和其他由 OneBot 实现上报的事件。这是必要的，因为消防栓需要从聊天消息中提取指令。相比拉消防栓账号入群，用分身会发送更少的信息给开发者。

## 限制
用分身有一些限制，如不能用分身绑定 osu! 账号等，这是为了确保安全而特意设置的。鉴于消防栓主号暂停服务，请未绑定账号者暂时用 `where` 等命令查询。