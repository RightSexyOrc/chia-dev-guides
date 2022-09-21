"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[697],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={id:"chialisp-primer-using-modules",slug:"/chialisp-using-modules",title:"2. Using Modules"},s=void 0,u={unversionedId:"chialisp-primer/chialisp-primer-using-modules",id:"chialisp-primer/chialisp-primer-using-modules",title:"2. Using Modules",description:"Up to this point, you have written single expressions and evaluated them on the command-line. However, sometimes you want to split your code into multiple functions or include common libraries. In order to do things like that, you will need to understand what modules are.",source:"@site/guides/chialisp-primer/using-modules.md",sourceDirName:"chialisp-primer",slug:"/chialisp-using-modules",permalink:"/guides/chialisp-using-modules",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/chialisp-primer/using-modules.md",tags:[],version:"current",frontMatter:{id:"chialisp-primer-using-modules",slug:"/chialisp-using-modules",title:"2. Using Modules"},sidebar:"tutorialSidebar",previous:{title:"1. Intro to Chialisp",permalink:"/guides/"},next:{title:"3. Testnet Setup",permalink:"/guides/chialisp-testnet-setup"}},p={},c=[{value:"Modules",id:"modules",level:2},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Up to this point, you have written single expressions and evaluated them on the command-line. However, sometimes you want to split your code into multiple functions or include common libraries. In order to do things like that, you will need to understand what modules are."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mod")," operator creates a context for converting the usage of constants into a single expression."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Functions inside the module will not have direct access to the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/glossary#solution"},"solution"),", so values you need access to will need to be passed in as a function parameter manually."),(0,r.kt)("p",{parentName:"admonition"},"In other words, there is no concept of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scope_(computer_science)"},"scope"),".")),(0,r.kt)("p",null,"This module will add two arbitrary values together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (first second)\n    (+ first second)\n)\n")),(0,r.kt)("p",null,"And this is an example of defining a constant and a function, followed by their usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},";;; Raises the number by one order of magnitude.\n\n(mod (value)\n    ; Defines a constant value with a name.\n    (defconstant ORDER_OF_MAGNITUDE 10)\n\n    ; Defines a function that can be called with a value.\n    (defun raise_magnitude (value)\n        (* value ORDER_OF_MAGNITUDE)\n    )\n\n    ; Calls the previously defined function.\n    (raise_magnitude value)\n)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The module takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ORDER_OF_MAGNITUDE")," is defined as 10."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"raise_magnitude")," function takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter (this is different from the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," defined as a module parameter)."),(0,r.kt)("li",{parentName:"ol"},"Returns the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," function parameter multiplied by the ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER_OF_MAGNITUDE"),"."),(0,r.kt)("li",{parentName:"ol"},"Calls the function with the module parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"By now you have seen how some aspects of the language work, and we can use these concepts to write and run a simple Chialisp program. We will write a module that calculates the factorial of a number using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Recursion"},"recursion"),"."),(0,r.kt)("p",null,"Put this in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"factorial.clsp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="factorial.clsp"',title:'"factorial.clsp"'},";;; Calculates a factorial recursively.\n;;; f(n) = n * f(n - 1)\n;;; f(n) = n if n <= 2\n\n(mod (number)\n    ; Defines the factorial function.\n    (defun factorial (number)\n        (if (> number 1)\n            (* number (factorial (- number 1)))\n            1\n        )\n    )\n\n    ; Calls the function with the number provided.\n    (factorial number)\n)\n")),(0,r.kt)("p",null,"Run this example with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'brun "$(run factorial.clsp)" "(5)"\n')),(0,r.kt)("p",null,"It will compile it and run the result with a solution where ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," is 5. The result of this should be the factorial of that number, which is 120. There were a few new operators used in these examples. For more information, you should refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm#the-built-in-opcodes"},"operator reference"),". Below is a detailed explanation of how this works."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The module takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," parameter."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"factorial")," function also takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," parameter."),(0,r.kt)("li",{parentName:"ol"},"If the number is greater than 2, returns the number times the previous factorial."),(0,r.kt)("li",{parentName:"ol"},"Otherwise, returns the number itself."),(0,r.kt)("li",{parentName:"ol"},"Call the recursive function with the ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," module parameter.")),(0,r.kt)("p",null,"We can visualize this function with the input 5 as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(factorial 5)\n(* 5 (factorial 4))\n(* 5 (* 4 (factorial 3)))\n(* 5 (* 4 (* 3 (factorial 2))))\n(* 5 (* 4 (* 3 (* 2 (factorial 1)))))\n(* 5 (* 4 (* 3 (* 2 1))))\n")),(0,r.kt)("p",null,"Which then simplifies like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(* 5 (* 4 (* 3 2)))\n(* 5 (* 4 6))\n(* 5 24)\n120\n")),(0,r.kt)("p",null,"Everything that would normally be written using iteration in an imperative language, for example array modification, is instead written using recursion in Chialisp. It can be hard to understand at first, but eventually it will make more and more sense."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Modules allow you to use functional programming in Chialisp, which makes writing it feel more natural. It also allows you to reuse your code and express it in a more clear way."),(0,r.kt)("p",null,"If you have any questions about modules, or anything else, remember to come ask questions on our ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase"),"."))}d.isMDXComponent=!0}}]);