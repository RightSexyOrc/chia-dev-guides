"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[597],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={id:"chialisp-primer-testnet-setup",slug:"/chialisp-testnet-setup",title:"Testnet Setup"},s=void 0,p={unversionedId:"chialisp-primer/chialisp-primer-testnet-setup",id:"chialisp-primer/chialisp-primer-testnet-setup",title:"Testnet Setup",description:"If you haven't already, you will need to clone the Chia Blockchain repository, then follow the below steps to set it up and configure it for the testnet.",source:"@site/guides/chialisp-primer/testnet-setup.md",sourceDirName:"chialisp-primer",slug:"/chialisp-testnet-setup",permalink:"/guides/chialisp-testnet-setup",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/chialisp-primer/testnet-setup.md",tags:[],version:"current",frontMatter:{id:"chialisp-primer-testnet-setup",slug:"/chialisp-testnet-setup",title:"Testnet Setup"},sidebar:"tutorialSidebar",previous:{title:"Using Modules",permalink:"/guides/chialisp-using-modules"},next:{title:"First Smart Coin",permalink:"/guides/chialisp-first-smart-coin"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"Faucet",id:"faucet",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you haven't already, you will need to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain"},"clone the Chia Blockchain repository"),", then follow the below steps to set it up and configure it for the testnet."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using Windows, we recommend PowerShell, and you may need to replace forward slashes ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," with backslashes ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),"."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," folder in a command prompt of your choice."),(0,r.kt)("li",{parentName:"ol"},"Set the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"CHIA_ROOT")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.chia/testnet10"),"."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"./Install.ps1")," on Windows or ",(0,r.kt)("inlineCode",{parentName:"li"},"./install.sh")," on MacOS or Linux."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},". ./activate")," to use the Python virtual environment."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia init")," to setup and configure Chia."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia keys generate")," to prepare the wallet keys."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia configure -t true")," to use the Testnet."),(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://download.chia.net/testnet10/blockchain_v2_testnet10.sqlite.gz"},"Testnet database")," and place it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.chia/testnet10/db")," folder."),(0,r.kt)("li",{parentName:"ol"},"Finally, run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia start node")," to start the full node.")),(0,r.kt)("h2",{id:"faucet"},"Faucet"),(0,r.kt)("p",null,"Now you can set up the wallet and use a faucet to receive Testnet coins to use in the upcoming guides."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia start wallet")," to start the wallet."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia wallet get_address")," to get the next wallet address."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://testnet10-faucet.chia.net"},"Testnet faucet")," and give it your address."),(0,r.kt)("li",{parentName:"ol"},"Wait a minute or two and run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia wallet show")," to check your balance.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You should now be ready to use the Testnet to create and spend smart coins. As always, if you ran into any issues while setting up the Testnet, feel free to ask for support on our ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase"),"."))}m.isMDXComponent=!0}}]);