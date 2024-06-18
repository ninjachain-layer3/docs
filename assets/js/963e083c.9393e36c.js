"use strict";(self.webpackChunkrunnerty=self.webpackChunkrunnerty||[]).push([[6400],{4137:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),p=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return i.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,g=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return n?i.createElement(g,o(o({ref:e},s),{},{components:n})):i.createElement(g,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9409:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(4137)),o=["components"],l={id:"bridge",title:"5. Bridge"},c=void 0,p={unversionedId:"bridge",id:"version-3.3.0/bridge",title:"5. Bridge",description:"Quickstart",source:"@site/versioned_docs/version-3.3.0/bridge.md",sourceDirName:".",slug:"/bridge",permalink:"/docs/bridge",editUrl:"#/versioned_docs/version-3.3.0/bridge.md",tags:[],version:"3.3.0",frontMatter:{id:"bridge",title:"5. Bridge"},sidebar:"version-3.3.0/someSidebar",previous:{title:"4. Swap",permalink:"/docs/swap"},next:{title:"build on ninjachain",permalink:"/docs/build-on-ninjachain"}},s=[{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Bridge from Arbitrum sepolia to Ninjachain testnet.",id:"bridge-from-arbitrum-sepolia-to-ninjachain-testnet",children:[],level:2},{value:"Bridge from Ninjachain testnet to Arbitrum sepolia.",id:"bridge-from-ninjachain-testnet-to-arbitrum-sepolia",children:[],level:2}],u={toc:s};function d(t){var e=t.components,l=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,'is for users who want to "deposit" ETH, NINJA or any ERC-20 tokens from a parent chain to a child chain (for example, from Ethereum to Arbitrum One, or from Arbitrum One to a Layer 3 Ninjachain), or "withdraw" from a child chain to a parent chain.'),(0,a.kt)("p",null,"For bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," ",(0,a.kt)("strong",{parentName:"p"},"Ninjachain")," first you need ",(0,a.kt)("a",{parentName:"p",href:"/docs/install-metamask"},"install metamask"),". Then add ",(0,a.kt)("a",{parentName:"p",href:"/docs/add-ninjachain-network"},"Ninjachain network"),"."),(0,a.kt)("h2",{id:"bridge-from-arbitrum-sepolia-to-ninjachain-testnet"},"Bridge from Arbitrum sepolia to Ninjachain testnet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," go to ",(0,a.kt)("a",{parentName:"p",href:"https://ninjachain-bridge.42web.io"},"Ninjachain bridge")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect with your wallet. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(8066).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(672).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Select the coin you want to bridge. Basically you can bridge all the coins on the Arbitrum Sepolia network. By default there is Ninjacoin but you can add other coins by entering the token address."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(8705).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," We will bridge 1 NINJA to the Ninjachain testnet network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(7739).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click move funds to Ninjachain testnet.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(789).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click the checklist and click pay approval fee.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Spending cap request will appear."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(704).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Fill in 1 because we will bridge 1 NINJA. If you want to bridge 1000 NINJA then fill in 1000.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click next.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(7688).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click approve.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(4441).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Then click confirm.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6.")," Transactions success."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(2950).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1 NINJA send to Ninjachain testnet.")),(0,a.kt)("h2",{id:"bridge-from-ninjachain-testnet-to-arbitrum-sepolia"},"Bridge from Ninjachain testnet to Arbitrum sepolia."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," go to ",(0,a.kt)("a",{parentName:"p",href:"https://ninjachain-bridge.42web.io"},"Ninjachain bridge")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect with your wallet. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(8066).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(672).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(6716).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Select the coin you want to bridge. Basically you can bridge all the coins on the Ninjachain testnet network. By default there is Ninjacoin but you can add other coins by entering the token address."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(3400).Z,width:"1293",height:"737"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," We will bridge 2 NINJA to the Arbitrum Sepolia network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(8960).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click move funds to Arbitrum Sepolia.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(4564).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click all checklist and click continue.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(9678).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Then click confirm.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Pending transactions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(9321).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Wait 1 hour.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6.")," Confirmed transactions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(7540).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click claim.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(2407).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Then click confirm.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 7.")," Transactions success."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge ",src:n(7887).Z,width:"1293",height:"737"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2 NINJA send to Arbitrum Sepolia.")))}d.isMDXComponent=!0},8066:function(t,e,n){e.Z=n.p+"assets/images/1-9e25c64317bbe1a8f5376589a36c5a24.png"},6716:function(t,e,n){e.Z=n.p+"assets/images/10-8f568fb60621303a662058f203b6cd3e.png"},3400:function(t,e,n){e.Z=n.p+"assets/images/11-b07025cb8378618cf74948c87ab997d7.png"},8960:function(t,e,n){e.Z=n.p+"assets/images/12-22b5a1a8bfdf1e348216c475fba6e99b.png"},4564:function(t,e,n){e.Z=n.p+"assets/images/14-3b5c3759c5730a3903b94ffb808fb32b.png"},9678:function(t,e,n){e.Z=n.p+"assets/images/15-27a7208e1c7eff052ed264848d2fc218.png"},9321:function(t,e,n){e.Z=n.p+"assets/images/16-985ebedc9896419a0541b95bfe67459c.png"},7540:function(t,e,n){e.Z=n.p+"assets/images/17-199430b11a71db94c2328b22fd7a326c.png"},2407:function(t,e,n){e.Z=n.p+"assets/images/18-1d1d289eb4e6887653cd8a065833aaa7.png"},7887:function(t,e,n){e.Z=n.p+"assets/images/19-2e935a507fc84d83f73d067a3a38c56b.png"},672:function(t,e,n){e.Z=n.p+"assets/images/2-3f6b627adfc3c795dde03bd2b227aa5d.png"},789:function(t,e,n){e.Z=n.p+"assets/images/20-cb76a2fdd6c393cea21ee700e322f550.png"},8705:function(t,e,n){e.Z=n.p+"assets/images/3-35209929ee4ba8a59c2f223e6e24f2f7.png"},704:function(t,e,n){e.Z=n.p+"assets/images/4-6bf58a8be8cfd1b394cf7f8e96d43477.png"},7739:function(t,e,n){e.Z=n.p+"assets/images/6-d440aa66891d906b0ff791f30bdfb44b.png"},7688:function(t,e,n){e.Z=n.p+"assets/images/7-754f8e93afaa2ee5ac21085b8f9fc59a.png"},4441:function(t,e,n){e.Z=n.p+"assets/images/8-4b9f1ab82cb58a8d5c03ee9ec4e338bf.png"},2950:function(t,e,n){e.Z=n.p+"assets/images/9-3970850d6997f546ce0eeba32cf2ab61.png"}}]);