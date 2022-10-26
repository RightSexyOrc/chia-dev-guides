"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[6843],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2681:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={},c=void 0,s={unversionedId:"crash-course/random-info",id:"crash-course/random-info",title:"random-info",description:"You can get information on your plotNFT:",source:"@site/guides/crash-course/random-info.md",sourceDirName:"crash-course",slug:"/crash-course/random-info",permalink:"/guides/crash-course/random-info",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/crash-course/random-info.md",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Chia Dev Tools and Environment",id:"chia-dev-tools-and-environment",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can get information on your plotNFT:"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"How do we create a plot NFT from the terminal, get an address for faucet, etc?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotnft show\n")),(0,r.kt)("p",null,"List out plot NFTs with ",(0,r.kt)("inlineCode",{parentName:"p"},"chia plotnft show"),". From here you can grab the launcher ID, which is used to identify your plot NFT, and get a pool login link like ",(0,r.kt)("inlineCode",{parentName:"p"},"chia plotnft get_login_link -l acd777a0d537e8e4e457e94ebb89ue158b984b8f9722f46cac67cb893e569510f"),". Which by the way, you don\u2019t want to share out this link to the world as it\u2019s like a username and password for whatever pool you are using."),(0,r.kt)("p",null,"Another useful command is ",(0,r.kt)("inlineCode",{parentName:"p"},"chia farm summary")," which is the equivalent of the Farming page in the GUI."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exercise: Create a plot"),"Let\u2019s go through a quick CLI plotting example following [this documentation](https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference#madmax) (or `chia plotters madmax -h`).",(0,r.kt)("p",null,"For this you will need your farmer public key and your pool contract address."),(0,r.kt)("p",null,"First, issue ",(0,r.kt)("inlineCode",{parentName:"p"},"chia keys show")," to find your farmer public key. Next, use ",(0,r.kt)("inlineCode",{parentName:"p"},"chia plotnft show")," to find the contract address."),(0,r.kt)("p",null,"The values will look something like:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"8914eed5ca5737ed6bb36225910d110cfc4d567115cfbb19cc19f600736aabf2a6709995aef9de37152d29f35ed9cdd6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"xch1fafdg7w35l4ujyz4vcuj3k78s5gwj395gs8tszkfwjj40melx75scxgw8h")),(0,r.kt)("p",null,"The entire plotting command will look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia plotters madmax -k 32 -n 1 -r 7 -t temp -d . -f 8914eed5ca5737ed6bb36225910d110cfc4d567115cfbb19cc19f600736aabf2a6709995aef9de37152d29f35ed9cdd6 -c xch1fafdg7w35l4ujyz4vcuj3k78s5gwj395gs8tszkfwjj40melx75scxgw8h\n")),(0,r.kt)("p",null,"where -n is the number of plots you want to create and ",(0,r.kt)("inlineCode",{parentName:"p"},"temp")," is the name of a directory for temp files (create one with ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir temp"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is the current directory for the destination."),(0,r.kt)("p",null,"These are just a few examples of how to use the CLI. But now that we have the CLI ready we can go through some additional steps to make sure our farm is set up properly and the plots we created are working.")),(0,r.kt)("h2",{id:"chia-dev-tools-and-environment"},"Chia Dev Tools and Environment"),(0,r.kt)("p",null,"For the following Sections we suggest Atom or Visual Studio Code for the editor of choice. This is because they both currently have extensions to help you develop in Chialisp. For Atom, it is ",(0,r.kt)("a",{parentName:"p",href:"https://atom.io/packages/language-chialisp"},"language-chialisp")," and ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Rigidity.chialisplanguage"},"Chialisp Language")," in VS Code."),(0,r.kt)("p",null,"You will also need to install Chia Dev Tools. To do this, you'll first need Python installed. For this we will first create a directory for our project and virtual environment, then install ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-dev-tools")," inside of the virtual environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir chialisp\ncd chialisp\npython3 -m venv .venv\n. .venv/bin/activate\npip install chia-dev-tools\n")),(0,r.kt)("p",null,"This includes CLVM tools, which will include commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"brun"),". It will also install a version of the Chia blockchain so we should have access to various Chia commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brun --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv --help\n")))}h.isMDXComponent=!0}}]);