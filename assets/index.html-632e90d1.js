import{_ as s,M as r,p as c,q as i,R as e,t,N as n,a1 as o}from"./framework-fa6fd9c7.js";const h="/assets/miehuoqun-5592db7e.jpg",d={},l=o('<h1 id="消防栓分身" tabindex="-1"><a class="header-anchor" href="#消防栓分身" aria-hidden="true">#</a> 消防栓分身</h1><p>消防栓分身可以帮助您用自己的 QQ 号提供消防栓的功能，以缓解封号、风控等问题。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果刚开始使用时出现消息发不出去的情况，建议先用手机 QQ 挂一段时间（一周左右）再使用。</p></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><h3 id="方法一-使用开发者打包好的-go-cqhttp-部署" tabindex="-1"><a class="header-anchor" href="#方法一-使用开发者打包好的-go-cqhttp-部署" aria-hidden="true">#</a> 方法一：使用开发者打包好的 go-cqhttp 部署</h3><p>下载 <a href="%E6%B6%88%E9%98%B2%E6%A0%93%E5%88%86%E8%BA%AB.zip">消防栓分身.zip</a> 并解压，打开 <code>config.yml</code> 文件，输入账号和密码，然后在控制台运行 <code>go-cqhttp.exe</code> 文件。</p>',6),p={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"提示",-1),_={href:"https://github.com/Mrs4s/go-cqhttp/releases",target:"_blank",rel:"noopener noreferrer"},g=o('<div class="custom-container warning"><p class="custom-container-title">注意</p><p><strong>不要</strong>使用管理员权限运行。</p></div><h3 id="方法二-使用消防栓分身启动器" tabindex="-1"><a class="header-anchor" href="#方法二-使用消防栓分身启动器" aria-hidden="true">#</a> 方法二：使用消防栓分身启动器</h3><p>下载 <a href="xfs%20launcher.zip">消防栓分身启动器</a>，解压后打开，填写 QQ 号和密码运行，按照新出现的窗口中的提示进行安全认证，即可启动消防栓分身。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请务必先解压再打开，不要直接在压缩包里双击运行。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>初次登录可能需要加载较长时间，请耐心等待。</p></div>',5),b={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"提示",-1),m={href:"https://github.com/b11p/XfsLauncher",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"方法三-自行配置-onebot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方法三-自行配置-onebot","aria-hidden":"true"},"#"),t(" 方法三：自行配置 OneBot")],-1),Q={href:"https://onebot.dev/ecosystem.html#onebot-%E5%AE%9E%E7%8E%B0-1",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[t("开启反向 WebSocket，设置远程服务器为 "),e("code",null,"wss://public-service.b11p.com/"),t("。")],-1),B=e("li",null,[t("设置 "),e("code",null,"AccessToken"),t(" 为 "),e("code",null,"bleatingsheep.org"),t("。")],-1),E=e("li",null,"打开运行。",-1),y=o('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>目前只支持 OneBot 11，不支持 12。</p></div><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>在分身的机器上收发 QQ 消息。所有消息都会被发送给远程服务器，实际业务逻辑还是在远程服务器上执行。</p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><h3 id="风控概率减小" tabindex="-1"><a class="header-anchor" href="#风控概率减小" aria-hidden="true">#</a> 风控概率减小</h3><p>由于您部署的分身专为您服务，收发消息少，更不容易被风控。</p><h3 id="风控处理更方便" tabindex="-1"><a class="header-anchor" href="#风控处理更方便" aria-hidden="true">#</a> 风控处理更方便</h3><p>就算分身也被风控了，您也可以自行处理，例如换另一个号，不用等开发者处理，避免影响您使用。</p><h2 id="风险" tabindex="-1"><a class="header-anchor" href="#风险" aria-hidden="true">#</a> 风险</h2>',9),M={href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"强烈推荐用小号提供消防栓分身功能。",-1),A=o('<p>所有事件都会传到消防栓服务器，包括聊天消息和其他由 OneBot 实现上报的事件。这是必要的，因为消防栓需要从聊天消息中提取指令。相比拉消防栓账号入群，用分身会向开发者发送更少的信息。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>开发者不对任何消防栓分身的服务和安全性负责。如果您打算使用他人提供的分身，请确保您信任该账号的拥有者。任何分身均与开发者无关。消防栓的账号（1228***07）现不接受拉群和加好友请求，且随时可能无法使用。建议自备账号使用分身服务。</p></div><h2 id="分身共享" tabindex="-1"><a class="header-anchor" href="#分身共享" aria-hidden="true">#</a> 分身共享</h2><p>如您在部署分身时遇到困难，希望有现成的服务可以用，可以联系下表中的热心人士获取可用的分身。</p><p>如您愿意共享您的分身给他人使用，可以加入下面的“灭火装置交流群”，告知开发者后将会把您的分身登记在下面。或者直接使用本页底部的链接，发起 PR。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请自行承担使用或提供分身的相应风险，开发者对一切风险概不负责。</p></div><table><thead><tr><th style="text-align:center;">分身 QQ</th><th style="text-align:center;">联系人 QQ</th><th style="text-align:center;">联系 QQ 群</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;">29**90</td><td style="text-align:center;">-</td><td style="text-align:center;">595985887</td><td>欢迎加入 osu! 新人群（限 2000PP 以下）<br>分身仅限群内使用</td></tr></tbody></table><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h2><p>用分身有一些限制，如不能用分身绑定 osu! 账号等，这是为了确保安全而特意设置的。如需绑定请加入“灭火装置交流群”，群号 563180497。</p><p><img src="'+h+'" alt=""></p>',10);function L(N,O){const a=r("ExternalLinkIcon");return c(),i("div",null,[l,e("div",p,[u,e("p",null,[t("压缩包中包含 Windows 和 Linux x86 平台的可执行文件。如果需要运行在其他平台（如 ARM），可以自行前往 go-cqhttp 的 "),e("a",_,[t("Release"),n(a)]),t(" 页面下载。将下载到的文件解压到分身所在目录覆盖，然后运行即可。")])]),g,e("div",b,[f,e("p",null,[t("在启动器中填写的账号密码仅用于登录 QQ，不会被发送到消防栓服务器。您可以在 "),e("a",m,[t("b11p/XfsLauncher"),n(a)]),t(" 仓库检阅启动器的代码，在 "),e("a",x,[t("Mrs4s/go-cqhttp"),n(a)]),t(" 仓库检阅 go-cqhttp 的代码。")])]),v,e("ul",null,[e("li",null,[t("下载安装任何 "),e("a",Q,[t("OneBot 11 实现"),n(a)]),t("（至少应该实现了反向 WebSocket 通信方式）。推荐使用 "),e("a",q,[t("Mrs4s/go-cqhttp"),n(a)]),t("。")]),k,B,E]),y,e("p",null,[t("用 "),e("a",M,[t("go-cqhttp"),n(a)]),t(" 等 OneBot 实现登录 QQ 号，使您的 QQ 号有被风控乃至封号的风险。出现这种情况，开发者概不负责，请自行斟酌是否使用。"),w]),A])}const V=s(d,[["render",L],["__file","index.html.vue"]]);export{V as default};
