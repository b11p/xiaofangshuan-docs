(self.webpackChunkxiaofangshuan_docs=self.webpackChunkxiaofangshuan_docs||[]).push([[443],{443:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>Re});var a=l(252),n=l(963),r=l(262),o=l(119),i=l(621),s=l(577);const u={class:"hero"},c={key:1,id:"main-title"},d={key:2,class:"description"},v={key:3,class:"actions"},m={key:0,class:"features"},p={class:"theme-default-content custom"};var g=l(480);const h=(0,a.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,o.yj)(),l=(0,i.WF)(),{item:n}=(0,r.BK)(e),s=(0,a.Fl)((()=>(0,g.ak)(n.value.link))),u=(0,a.Fl)((()=>(0,g.B2)(n.value.link)||(0,g.R5)(n.value.link))),c=(0,a.Fl)((()=>{if(!u.value)return n.value.target?n.value.target:s.value?"_blank":void 0})),d=(0,a.Fl)((()=>"_blank"===c.value)),v=(0,a.Fl)((()=>!s.value&&!u.value&&!d.value)),m=(0,a.Fl)((()=>{if(!u.value)return n.value.rel?n.value.rel:d.value?"noopener noreferrer":void 0})),p=(0,a.Fl)((()=>n.value.ariaLabel||n.value.text)),h=(0,a.Fl)((()=>{const e=Object.keys(l.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link}));return{isActiveInSubpath:(0,a.Fl)((()=>!(!v.value||!h.value)&&t.path.startsWith(n.value.link))),isBlankTarget:d,isRouterLink:v,linkRel:m,linkTarget:c,linkAriaLabel:p}}});h.render=function(e,t,l,n,r,o){const i=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return e.isRouterLink?((0,a.wg)(),(0,a.j4)(i,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":e.isActiveInSubpath}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,s.zw)(e.item.text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.j4)("a",(0,a.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,s.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.ry)("",!0),(0,a.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))};const k=h,b=(0,a.aZ)({name:"Home",components:{NavLink:k},setup(){const e=(0,i.I2)(),t=(0,i.I5)(),l=(0,a.Fl)((()=>e.value.heroImage?(0,i.pJ)(e.value.heroImage):null)),n=(0,a.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),r=(0,a.Fl)((()=>e.value.heroAlt||n.value||"hero")),o=(0,a.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),s=(0,a.Fl)((()=>(0,g.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),u=(0,a.Fl)((()=>(0,g.kJ)(e.value.features)?e.value.features:[])),c=(0,a.Fl)((()=>e.value.footer)),d=(0,a.Fl)((()=>e.value.footerHtml));return{heroImage:l,heroAlt:r,heroText:n,tagline:o,actions:s,features:u,footer:c,footerHtml:d}}});b.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavLink"),g=(0,a.up)("Content");return(0,a.wg)(),(0,a.j4)("main",{class:"home","aria-labelledby":e.heroText?"main-title":null},[(0,a.Wm)("header",u,[e.heroImage?((0,a.wg)(),(0,a.j4)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):(0,a.ry)("",!0),e.heroText?((0,a.wg)(),(0,a.j4)("h1",c,(0,s.zw)(e.heroText),1)):(0,a.ry)("",!0),e.tagline?((0,a.wg)(),(0,a.j4)("p",d,(0,s.zw)(e.tagline),1)):(0,a.ry)("",!0),e.actions.length?((0,a.wg)(),(0,a.j4)("p",v,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.actions,(e=>((0,a.wg)(),(0,a.j4)(i,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):(0,a.ry)("",!0)]),e.features.length?((0,a.wg)(),(0,a.j4)("div",m,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.features,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.title,class:"feature"},[(0,a.Wm)("h2",null,(0,s.zw)(e.title),1),(0,a.Wm)("p",null,(0,s.zw)(e.details),1)])))),128))])):(0,a.ry)("",!0),(0,a.Wm)("div",p,[(0,a.Wm)(g)]),e.footer?((0,a.wg)(),(0,a.j4)(a.HY,{key:1},[e.footerHtml?((0,a.wg)(),(0,a.j4)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):((0,a.wg)(),(0,a.j4)("div",{key:1,class:"footer",textContent:(0,s.zw)(e.footer)},null,8,["textContent"]))],64)):(0,a.ry)("",!0)],8,["aria-labelledby"])};const w=b,f={class:"page"},y={class:"theme-default-content"},L={class:"page-meta"},W={key:0,class:"meta-item edit-link"},j={key:1,class:"meta-item last-updated"},x={class:"meta-item-label"},F={class:"meta-item-info"},I={key:2,class:"meta-item contributors"},T={class:"meta-item-label"},N={class:"meta-item-info"},B=(0,a.Uk)(", ");var H=l(319);const C=e=>!(0,g.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,z={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$=()=>{const e=(0,H.X6)(),t=(0,i.Vi)(),l=(0,i.I2)();return(0,a.Fl)((()=>{var a,n;if(null!=(n=null!=(a=l.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:o=r,docsBranch:i="main",docsDir:s="",editLinkText:u}=e.value;if(!o)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{const r=C(e);let o;return n?o=n:null!==r&&(o=z[r]),o?o.replace(/:repo/,(0,g.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,g.FY)(`${(0,g.U1)(l)}/${a}`)):null})({docsRepo:o,docsBranch:i,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))},S=(0,a.aZ)({name:"PageMeta",components:{NavLink:k},setup:()=>({themeLocale:(0,H.X6)(),editNavLink:$(),lastUpdated:(()=>{const e=(0,i.I5)(),t=(0,H.X6)(),l=(0,i.Vi)(),n=(0,i.I2)();return(0,a.Fl)((()=>{var a,r,o,i;return(null==(r=null!=(a=n.value.lastUpdated)?a:t.value.lastUpdated)||r)&&(null==(o=l.value.git)?void 0:o.updatedTime)?new Date(null==(i=l.value.git)?void 0:i.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,H.X6)(),t=(0,i.Vi)(),l=(0,i.I2)();return(0,a.Fl)((()=>{var a,n,r,o;return null!=(n=null!=(a=l.value.contributors)?a:e.value.contributors)&&!n||null==(o=null==(r=t.value.git)?void 0:r.contributors)?null:o}))})()})});S.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("footer",L,[e.editNavLink?((0,a.wg)(),(0,a.j4)("div",W,[(0,a.Wm)(i,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,a.ry)("",!0),e.lastUpdated?((0,a.wg)(),(0,a.j4)("div",j,[(0,a.Wm)("span",x,(0,s.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,a.Wm)("span",F,(0,s.zw)(e.lastUpdated),1)])):(0,a.ry)("",!0),e.contributors&&e.contributors.length?((0,a.wg)(),(0,a.j4)("div",I,[(0,a.Wm)("span",T,(0,s.zw)(e.themeLocale.contributorsText)+": ",1),(0,a.Wm)("span",N,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.contributors,((t,l)=>((0,a.wg)(),(0,a.j4)(a.HY,{key:l},[(0,a.Wm)("span",{class:"contributor",title:`email: ${t.email}`},(0,s.zw)(t.name),9,["title"]),l!==e.contributors.length-1?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[B],64)):(0,a.ry)("",!0)],64)))),128))])])):(0,a.ry)("",!0)])};const A=S,M={key:0,class:"page-nav"},P={class:"inner"},R={key:0,class:"prev"},U=(0,a.Uk)(" ← "),Y={key:1,class:"next"},D=(0,a.Uk)(" → "),E=e=>!1===e?null:(0,g.HD)(e)?(0,H.sC)(e):!!(0,g.PO)(e)&&e,O=(e,t,l)=>{const a=e.findIndex((e=>e.link===t));if(-1!==a){const t=e[a+l];return(null==t?void 0:t.link)?t:null}for(const a of e)if(a.children){const e=O(a.children,t,l);if(e)return e}return null},Z=(0,a.aZ)({name:"PageNav",components:{NavLink:k},setup(){const e=(0,i.I2)(),t=(0,H.VU)(),l=(0,o.yj)();return{prevNavLink:(0,a.Fl)((()=>{const a=E(e.value.prev);return!1!==a?a:O(t.value,l.path,-1)})),nextNavLink:(0,a.Fl)((()=>{const a=E(e.value.next);return!1!==a?a:O(t.value,l.path,1)}))}}});Z.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,a.wg)(),(0,a.j4)("nav",M,[(0,a.Wm)("p",P,[e.prevNavLink?((0,a.wg)(),(0,a.j4)("span",R,[U,(0,a.Wm)(i,{item:e.prevNavLink},null,8,["item"])])):(0,a.ry)("",!0),e.nextNavLink?((0,a.wg)(),(0,a.j4)("span",Y,[(0,a.Wm)(i,{item:e.nextNavLink},null,8,["item"]),D])):(0,a.ry)("",!0)])])):(0,a.ry)("",!0)};const X=Z,V=(0,a.aZ)({name:"Page",components:{PageMeta:A,PageNav:X}});V.render=function(e,t,l,n,r,o){const i=(0,a.up)("Content"),s=(0,a.up)("PageMeta"),u=(0,a.up)("PageNav");return(0,a.wg)(),(0,a.j4)("main",f,[(0,a.WI)(e.$slots,"top"),(0,a.Wm)("div",y,[(0,a.Wm)(i)]),(0,a.Wm)(s),(0,a.Wm)(u),(0,a.WI)(e.$slots,"bottom")])};const _=V,G={ref:"navbar",class:"navbar"},K={ref:"siteBrand"},q={key:0,class:"navbar-links"},J={class:"title"},Q=(0,a.Wm)("span",{class:"arrow down"},null,-1),ee={class:"title"},te={class:"nav-dropdown"},le={class:"dropdown-subtitle"},ae={key:1},ne={class:"dropdown-subitem-wrapper"},re=(0,a.aZ)({name:"DropdownLink",components:{NavLink:k},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,r.BK)(e),l=(0,a.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,r.iH)(!1),i=(0,o.yj)();return(0,a.YP)((()=>i.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:l,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});re.render=function(e,t,l,r,o,i){const u=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,a.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,a.Wm)("span",J,(0,s.zw)(e.item.text),1),Q],8,["aria-label"]),(0,a.Wm)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[(0,a.Wm)("span",ee,(0,s.zw)(e.item.text),1),(0,a.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,a.wy)((0,a.Wm)("ul",te,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.item.children,((t,l)=>((0,a.wg)(),(0,a.j4)("li",{key:t.link||l,class:"dropdown-item"},[t.children?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[(0,a.Wm)("h4",le,[t.link?((0,a.wg)(),(0,a.j4)(u,{key:0,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.j4)("span",ae,(0,s.zw)(t.text),1))]),(0,a.Wm)("ul",ne,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.children,(l=>((0,a.wg)(),(0,a.j4)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(u,{item:l,onFocusout:a=>e.isLastItemOfArray(l,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(u,{key:1,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[n.F8,e.open]])],2)};const oe=re,ie=e=>(0,g.HD)(e)?(0,H.sC)(e):e.children?{...e,children:e.children.map(ie)}:e,se=(0,a.aZ)({name:"NavbarLinks",components:{NavLink:k,DropdownLink:oe},setup(){const e=(()=>{const e=(0,H.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(ie)))})(),t=(()=>{const e=(0,o.tv)(),t=(0,i.I)(),l=(0,i.I5)(),n=(0,H.X6)();return(0,a.Fl)((()=>{var a,r;const o=Object.keys(l.value.locales);if(o.length<2)return[];const i=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unkown language",ariaLabel:null!=(r=n.value.selectLanguageAriaLabel)?r:"unkown language",children:o.map((a=>{var r,o,u,c,d,v;const m=null!=(o=null==(r=l.value.locales)?void 0:r[a])?o:{},p=null!=(c=null==(u=n.value.locales)?void 0:u[a])?c:{},g=`${m.lang}`,h=null!=(d=p.selectLanguageName)?d:g;let k;if(g===l.value.lang)k=s;else{const l=i.replace(t.value,a);k=e.getRoutes().some((e=>e.path===l))?l:null!=(v=p.home)?v:a}return{text:h,link:k}}))}]}))})(),l=(()=>{const e=(0,H.X6)(),t=(0,a.Fl)((()=>e.value.repo)),l=(0,a.Fl)((()=>t.value?C(t.value):null)),n=(0,a.Fl)((()=>t.value&&!(0,g.ak)(t.value)?`https://github.com/${t.value}`:t.value)),r=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return(0,a.Fl)((()=>n.value&&r.value?[{text:r.value,link:n.value}]:[]))})();return{navbarLinks:(0,a.Fl)((()=>[...e.value,...t.value,...l.value]))}}});se.render=function(e,t,l,n,r,o){const i=(0,a.up)("DropdownLink"),s=(0,a.up)("NavLink");return e.navbarLinks.length?((0,a.wg)(),(0,a.j4)("nav",q,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.navbarLinks,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.link,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(i,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(s,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.ry)("",!0)};const ue=se,ce={class:"icon",focusable:"false",viewBox:"0 0 32 32"},de=(0,a.Wm)("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),ve=(0,a.Wm)("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),me=(0,a.Wm)("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),pe=(0,a.Wm)("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),ge=(0,a.Wm)("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),he=(0,a.Wm)("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),ke=(0,a.Wm)("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),be=(0,a.Wm)("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),we=(0,a.Wm)("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),fe={class:"icon",focusable:"false",viewBox:"0 0 32 32"},ye=(0,a.Wm)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Le=(0,a.aZ)({expose:[],setup(e){const t=(0,r.iH)(!1),l=()=>{t.value=!t.value},o=()=>{const e=null==window?void 0:window.document.querySelector("html");null==e||e.classList.toggle("dark",t.value)};return(0,a.bv)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");t.value=e.matches,e.addEventListener("change",(e=>{t.value=e.matches})),(0,a.YP)(t,o,{immediate:!0})})),(e,r)=>((0,a.wg)(),(0,a.j4)("button",{class:"toggle-dark-button",onClick:l},[(0,a.wy)(((0,a.wg)(),(0,a.j4)("svg",ce,[de,ve,me,pe,ge,he,ke,be,we],512)),[[n.F8,!t.value]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)("svg",fe,[ye],512)),[[n.F8,t.value]])]))}}),We=(0,a.Wm)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,a.Wm)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1),je=(0,a.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});je.render=function(e,t,l,n,r,o){return(0,a.wg)(),(0,a.j4)("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[We])};const xe=je,Fe=(0,a.aZ)({name:"Navbar",components:{NavbarLinks:ue,ToggleDarkButton:Le,ToggleSidebarButton:xe},emits:["toggle-sidebar"],setup(){const e=(0,i.I)(),t=(0,i.I5)(),l=(0,H.X6)(),n=(0,r.iH)(null),o=(0,r.iH)(null),s=(0,a.Fl)((()=>l.value.home||e.value)),u=(0,a.Fl)((()=>l.value.logo)),c=(0,a.Fl)((()=>t.value.title)),d=(0,r.iH)(0),v=(0,a.Fl)((()=>d.value?{maxWidth:d.value+"px"}:{}));return(0,a.bv)((()=>{const e=Ie(n.value,"paddingLeft")+Ie(n.value,"paddingRight"),t=()=>{var t;window.innerWidth<719?d.value=0:d.value=n.value.offsetWidth-e-((null==(t=o.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),{navbar:n,siteBrand:o,siteBrandLink:s,siteBrandLogo:u,siteBrandTitle:c,linksWrapperStyle:v,withBase:i.pJ}}});function Ie(e,t){var l,a,n;const r=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],o=Number.parseInt(r,10);return Number.isNaN(o)?0:o}Fe.render=function(e,t,l,n,r,o){const i=(0,a.up)("ToggleSidebarButton"),u=(0,a.up)("RouterLink"),c=(0,a.up)("NavbarLinks"),d=(0,a.up)("ToggleDarkButton"),v=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.j4)("header",G,[(0,a.Wm)(i,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),(0,a.Wm)("span",K,[(0,a.Wm)(u,{to:e.siteBrandLink},{default:(0,a.w5)((()=>[e.siteBrandLogo?((0,a.wg)(),(0,a.j4)("img",{key:0,class:"logo",src:e.withBase(e.siteBrandLogo),alt:e.siteBrandTitle},null,8,["src","alt"])):(0,a.ry)("",!0),e.siteBrandTitle?((0,a.wg)(),(0,a.j4)("span",{key:1,class:["site-name",{"can-hide":e.siteBrandLogo}]},(0,s.zw)(e.siteBrandTitle),3)):(0,a.ry)("",!0)])),_:1},8,["to"])],512),(0,a.Wm)("div",{class:"navbar-links-wrapper",style:e.linksWrapperStyle},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(c,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,a.Wm)(d),(0,a.Wm)(v)],4)],512)};const Te=Fe,Ne={class:"sidebar"},Be={class:"sidebar-links"},He=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ce=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||He(e.path)===He(t)))(e,t.link)||!!t.children&&t.children.some((t=>Ce(e,t))),ze=(e,t)=>e.link?(0,a.h)(k,{...t,item:e}):(0,a.h)("p",t,e.text),$e=(e,t)=>{var l;return(null===(l=e.children)||void 0===l?void 0:l.length)?(0,a.h)("ul",{class:{"sidebar-sub-headers":t>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(Se,{item:e,depth:t+1}))))):null},Se=({item:e,depth:t=0})=>{const l=(0,o.yj)(),n=Ce(l,e);return e.isGroup?[(0,a.h)("section",{class:"sidebar-group"},[ze(e,{class:{"sidebar-heading":!0,active:n}}),$e(e,t)])]:[ze(e,{class:{"sidebar-link":!0,active:n}}),$e(e,t)]};Se.displayName="SidebarChild",Se.props={item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}};const Ae=(0,a.aZ)({name:"Sidebar",components:{NavbarLinks:ue,SidebarChild:Se},setup:()=>({sidebarItems:(0,H.VU)()})});Ae.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavbarLinks"),s=(0,a.up)("SidebarChild");return(0,a.wg)(),(0,a.j4)("aside",Ne,[(0,a.Wm)(i),(0,a.WI)(e.$slots,"top"),(0,a.Wm)("ul",Be,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.sidebarItems,(e=>((0,a.wg)(),(0,a.j4)(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")])};const Me=Ae,Pe=(0,a.aZ)({name:"Layout",components:{Home:w,Page:_,Navbar:Te,Sidebar:Me,Transition:n.uT},setup(){const e=(0,i.Vi)(),t=(0,i.I2)(),l=(0,H.X6)(),n=(0,a.Fl)((()=>!1!==t.value.navbar&&!1!==l.value.navbar)),s=(0,H.VU)(),u=(0,r.iH)(!1),c=e=>{u.value="boolean"==typeof e?e:!u.value},d={x:0,y:0},v=(0,a.Fl)((()=>[{"no-navbar":!n.value,"no-sidebar":!s.value.length,"sidebar-open":u.value},t.value.pageClass]));let m;(0,a.bv)((()=>{const e=(0,o.tv)();m=e.afterEach((()=>{c(!1)}))})),(0,a.Ah)((()=>{m()}));const p=(0,H.P$)(),g=p.resolve,h=p.pending;return{frontmatter:t,page:e,containerClass:v,shouldShowNavbar:n,toggleSidebar:c,onTouchStart:e=>{d.x=e.changedTouches[0].clientX,d.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-d.x,l=e.changedTouches[0].clientY-d.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&d.x<=80?c(!0):c(!1))},onBeforeEnter:g,onBeforeLeave:h}}});Pe.render=function(e,t,l,r,o,i){const s=(0,a.up)("Navbar"),u=(0,a.up)("Sidebar"),c=(0,a.up)("Home"),d=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,a.wg)(),(0,a.j4)(s,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):(0,a.ry)("",!0),(0,a.Wm)("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),(0,a.Wm)(u,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?((0,a.wg)(),(0,a.j4)(c,{key:1})):((0,a.wg)(),(0,a.j4)(n.uT,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{key:e.page.path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)};const Re=Pe}}]);