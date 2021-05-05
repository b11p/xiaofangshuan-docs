(self.webpackChunkxiaofangshuan_docs=self.webpackChunkxiaofangshuan_docs||[]).push([[689],{724:(e,l,t)=>{"use strict";t.r(l),t.d(l,{data:()=>n});const n={key:"v-491ec40a",path:"/fenshen/",title:"消防栓分身",lang:"zh-CN",frontmatter:{title:"消防栓分身",lang:"zh-CN"},excerpt:"",headers:[{level:2,title:"部署",slug:"部署",children:[{level:3,title:"方法一：使用开发者打包好的 go-cqhttp 部署",slug:"方法一-使用开发者打包好的-go-cqhttp-部署",children:[]},{level:3,title:"方法二：使用消防栓分身部署工具",slug:"方法二-使用消防栓分身部署工具",children:[]},{level:3,title:"方法三：自行配置 OneBot",slug:"方法三-自行配置-onebot",children:[]}]},{level:2,title:"原理",slug:"原理",children:[]},{level:2,title:"优点",slug:"优点",children:[{level:3,title:"风控概率减小",slug:"风控概率减小",children:[]},{level:3,title:"风控处理更方便",slug:"风控处理更方便",children:[]}]},{level:2,title:"风险",slug:"风险",children:[]},{level:2,title:"限制",slug:"限制",children:[]}],filePathRelative:"fenshen/README.md",git:{updatedTime:1620181189e3,contributors:[]}}},21:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>N});var n=t(252);const r=(0,n.uE)('<h1 id="消防栓分身"><a class="header-anchor" href="#消防栓分身">#</a> 消防栓分身</h1><p>消防栓分身可以帮助您用自己的 QQ 号提供消防栓的功能，以缓解封号、风控等问题。</p><h2 id="部署"><a class="header-anchor" href="#部署">#</a> 部署</h2><h3 id="方法一-使用开发者打包好的-go-cqhttp-部署"><a class="header-anchor" href="#方法一-使用开发者打包好的-go-cqhttp-部署">#</a> 方法一：使用开发者打包好的 go-cqhttp 部署</h3>',4),a=(0,n.Uk)("下载 "),h={href:"https://res.bleatingsheep.org/%E6%B6%88%E9%98%B2%E6%A0%93%E5%88%86%E8%BA%AB2.zip",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Uk)("消防栓分身2.zip"),s=(0,n.Uk)(" 并解压，打开 "),c=(0,n.Wm)("code",null,"config.hjson",-1),i=(0,n.Uk)(" 文件，输入账号和密码，然后运行 "),p=(0,n.Wm)("code",null,"go-cqhttp.exe",-1),d=(0,n.Uk)(" 文件。"),u={class:"custom-container tip"},m=(0,n.Wm)("p",{class:"custom-container-title"},"TIP",-1),g=(0,n.Uk)("压缩包中包含 Windows 和 Linux x86_64 平台的可执行文件。如果需要运行在其他平台（如 x86 或 ARM），可以自行前往 go-cqhttp 的 "),k={href:"https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.40-fix5",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("Release"),W=(0,n.Uk)(" 页面下载。当前推荐 v0.9.40-fix5 版本。"),U=(0,n.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>双击运行即可，尽管会提示不推荐，但主要是出错退出时窗口会消失，截不到错误消息。如果没有错误，无需在控制台运行。</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>不要</strong>使用管理员权限运行。</p></div><h3 id="方法二-使用消防栓分身部署工具"><a class="header-anchor" href="#方法二-使用消防栓分身部署工具">#</a> 方法二：使用消防栓分身部署工具</h3><p><em>WIP 制作中</em></p><h3 id="方法三-自行配置-onebot"><a class="header-anchor" href="#方法三-自行配置-onebot">#</a> 方法三：自行配置 OneBot</h3>',5),v=(0,n.Uk)("下载安装任何 "),b={href:"https://onebot.page.moe/ecosystem.html#onebot-%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Uk)("OneBot 实现"),q=(0,n.Uk)("（至少应该实现了反向 WebSocket 通信方式）。"),x=(0,n.Wm)("li",null,[(0,n.Uk)("设置远程服务器为 "),(0,n.Wm)("code",null,"https://public-service.b11p.com/"),(0,n.Uk)("。")],-1),B=(0,n.Wm)("li",null,[(0,n.Uk)("设置 "),(0,n.Wm)("code",null,"AccessToken"),(0,n.Uk)(" 为 "),(0,n.Wm)("code",null,"bleatingsheep.org"),(0,n.Uk)("。")],-1),A=(0,n.Wm)("li",null,"打开运行。",-1),Q=(0,n.uE)('<h2 id="原理"><a class="header-anchor" href="#原理">#</a> 原理</h2><p>在分身的机器上收发 QQ 消息。所有消息都会被发送给远程服务器，实际业务逻辑还是在远程服务器上执行。</p><h2 id="优点"><a class="header-anchor" href="#优点">#</a> 优点</h2><h3 id="风控概率减小"><a class="header-anchor" href="#风控概率减小">#</a> 风控概率减小</h3><p>由于您部署的分身专为您服务，收发消息少，更不容易被风控。</p><h3 id="风控处理更方便"><a class="header-anchor" href="#风控处理更方便">#</a> 风控处理更方便</h3><p>就算分身也被风控了，您也可以自行处理，例如换另一个号，不用等开发者处理，避免影响您使用。</p><h2 id="风险"><a class="header-anchor" href="#风险">#</a> 风险</h2>',8),_=(0,n.Uk)("用 "),w={href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("go-cqhttp"),R=(0,n.Uk)(" 等 OneBot 实现登录 QQ 号，使您的 QQ 号有被风控乃至封号的风险。出现这种情况，开发者概不负责，请自行斟酌是否使用。"),z=(0,n.Wm)("strong",null,"强烈推荐用小号提供消防栓分身功能。",-1),C=(0,n.Wm)("h2",{id:"限制"},[(0,n.Wm)("a",{class:"header-anchor",href:"#限制"},"#"),(0,n.Uk)(" 限制")],-1),I=(0,n.Wm)("p",null,[(0,n.Uk)("用分身有一些限制，如不能用分身绑定 osu! 账号等，这是为了确保安全而特意设置的。鉴于消防栓主号暂停服务，请未绑定账号者暂时用 "),(0,n.Wm)("code",null,"where"),(0,n.Uk)(" 等命令查询。")],-1),N={render:function(e,l){const t=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,(0,n.Wm)("p",null,[a,(0,n.Wm)("a",h,[o,(0,n.Wm)(t)]),s,c,i,p,d]),(0,n.Wm)("div",u,[m,(0,n.Wm)("p",null,[g,(0,n.Wm)("a",k,[f,(0,n.Wm)(t)]),W])]),U,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[v,(0,n.Wm)("a",b,[E,(0,n.Wm)(t)]),q]),x,B,A]),Q,(0,n.Wm)("p",null,[_,(0,n.Wm)("a",w,[O,(0,n.Wm)(t)]),R,z]),C,I],64)}}}}]);