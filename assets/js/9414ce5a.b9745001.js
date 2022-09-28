"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(4334),o=n(2389),l=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),N=y.tabGroupChoices,C=y.setTabGroupChoices,T=(0,r.useState)(b),x=T[0],O=T[1],z=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=N[f];null!=D&&D!==x&&g.some((function(e){return e.value===D}))&&O(D)}var P=function(e){var t=e.currentTarget,n=z.indexOf(t),a=g[n].value;a!==x&&(E(t),O(a),null!=f&&C(f,String(a)))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=z.indexOf(e.currentTarget)+1;n=null!=(a=z[r])?a:z[0];break;case"ArrowLeft":var i,o=z.indexOf(e.currentTarget)-1;n=null!=(i=z[o])?i:z[z.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return z.push(e)},onKeyDown:q,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(5488),l=n(5162),s=["components"],u={slug:"/crash-course/intro-to-chialisp",title:"Chialisp"},p=void 0,c={unversionedId:"crash-course/intro-to-chialisp",id:"crash-course/intro-to-chialisp",title:"Chialisp",description:"To get started with Chialisp you will first want to install the Chia Dev Tools. You can refer to the Chia Dev Tools repository for more information, but the summary of the installation is here:",source:"@site/guides/crash-course/intro-to-chialisp.md",sourceDirName:"crash-course",slug:"/crash-course/intro-to-chialisp",permalink:"/guides/crash-course/intro-to-chialisp",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/crash-course/intro-to-chialisp.md",tags:[],version:"current",frontMatter:{slug:"/crash-course/intro-to-chialisp",title:"Chialisp"}},d={},m=[{value:"Writing a Chialisp Program (Puzzle)",id:"writing-a-chialisp-program-puzzle",level:2},{value:"Comparisons and If Statements",id:"comparisons-and-if-statements",level:2},{value:"Moving to a Text Editor",id:"moving-to-a-text-editor",level:2},{value:"Defining Functions",id:"defining-functions",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To get started with Chialisp you will first want to install the Chia Dev Tools. You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-dev-tools"},"Chia Dev Tools repository")," for more information, but the summary of the installation is here:"),(0,i.kt)(o.Z,{groupId:"OS",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/MacOS",value:"linux-macos"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir learning\ncd learning\npy -m venv venv\n./venv/Scripts/activate\npip install chia-dev-tools\ncdv --version\n"))),(0,i.kt)(l.Z,{value:"linux-macos",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir learning\ncd learning\npython3 -m venv venv\n. ./venv/bin/activate\npip install chia-dev-tools\ncdv --version\n")))),(0,i.kt)("p",null,"This will install the Chia Dev Tools within your activated virtual environment. You'll want to make sure this virtual environment is activated before working on Chialisp. You'll see a ",(0,i.kt)("inlineCode",{parentName:"p"},"(venv)")," on the left of your terminal prompt."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Virtual environments allow you to install specific Python packages that will only be usable with the environment is active. This allows you to switch between different environments for different projects or if you just want to use different software versions.")),(0,i.kt)("p",null,"You should now get a usage response when using ",(0,i.kt)("inlineCode",{parentName:"p"},"cdv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cdv\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: cdv [OPTIONS] COMMAND [ARGS]...\n\n  Dev tooling for Chia development\n\nOptions:\n  --version   Show the version and exit.\n  -h, --help  Show this message and exit.\n\nCommands:\n  clsp     Commands to use when developing with chialisp\n  decode   Decode a bech32m address to a puzzle hash\n  encode   Encode a puzzle hash to a bech32m address\n  hash     SHA256 hash UTF-8 strings or bytes (use 0x prefix for bytes)\n  inspect  Inspect various data structures\n  rpc      Make RPC requests to a Chia full node\n  sim      Configure and make requests to a Chia Simulator Full Node\n  test     Run the local test suite (located in ./tests)\n")),(0,i.kt)("p",null,"You will also now have a ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command that can be issued directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run\n")),(0,i.kt)("p",null,"By itself, ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," will only return ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),", but you can also pass a valid Chialisp program to execute it. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run '(+ 2 3)'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"5\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The syntax (+ 2 3) may look confusing. In Chialisp, we place the operator first, followed by the operands. This is known as ",(0,i.kt)("strong",{parentName:"p"},"prefix notation"),". Think of this as the equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"2 + 3")," in most other programming languages. or regular math :)."),(0,i.kt)("p",{parentName:"admonition"},"It is set up this way as every program in Chialisp is written as a list, where the first item is an operator. ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ 2 3)")," is a list of three elements with the first being the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator, thus it's a valid Chialisp program.")),(0,i.kt)("h2",{id:"writing-a-chialisp-program-puzzle"},"Writing a Chialisp Program (Puzzle)"),(0,i.kt)("p",null,"First off, in Chialisp a program is called a ",(0,i.kt)("strong",{parentName:"p"},"puzzle"),". To create larger puzzles we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," operator. The ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," operator will allow us to take arguments passed in to customize the functionality / result of executing the puzzle. These passed in arguments in Chialisp are known as the ",(0,i.kt)("strong",{parentName:"p"},"solution"),"."),(0,i.kt)("p",null,"A very basic example would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run '(mod (arg1 arg2) (+ arg1 arg2))'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(+ 2 5)\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"What in the world is ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ 2 5)")," that ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," returned? This is an example of compiled Chialisp (bytecode) that is then executed by the Chialisp Virtual Machine (CLVM). It is not very human-readable, but don't worry about that as you are not required to understand CLVM bytecode."),(0,i.kt)("p",{parentName:"admonition"},"Our first command, ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", will take Chialisp code and compile it. Next, ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," will take chialisp bytecode and execute it.")),(0,i.kt)("p",null,"We will then run this puzzle with the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command, followed by a solution of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brun '(+ 2 5)' '(10 5)'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"15\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are now using ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," to demand a solution for our puzzle. Whenever this is the case, you will be required to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command after ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),".")),(0,i.kt)("p",null,"Pay close attention to the location of quotes and parenthesis. It's easy to get lost! With ",(0,i.kt)("inlineCode",{parentName:"p"},"brun"),", the solution is passed in as a distinct value surrounded by quotes. ",(0,i.kt)("inlineCode",{parentName:"p"},"(10, 5)")," is the solution in this example and translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"arg1 = 10")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2 = 5"),"."),(0,i.kt)("p",null,"You can run it again with a different solution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brun '(+ 2 5)' '(20 7)'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27\n")),(0,i.kt)("p",null,"At this point you have a working Chialisp puzzle that will take inputs and give back an output! Congrats!"),(0,i.kt)("h2",{id:"comparisons-and-if-statements"},"Comparisons and If Statements"),(0,i.kt)("p",null,"Going with a contrived example, let's say we wanted to add two numbers and return ",(0,i.kt)("inlineCode",{parentName:"p"},"large")," if they were ",(0,i.kt)("inlineCode",{parentName:"p"},"> 100"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"small")," if they were ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 100"),"."),(0,i.kt)("p",null,"You can compare two values like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(> arg1 arg2)\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"arg1")," is larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2"),", this returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"You can then use an if statement to return one of two different things depending on the result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(if <comparison> <result if true> <result if false>)\n")),(0,i.kt)("p",null,"A concrete example of an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'run \'(if 0 "its true" "its false")\'\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"its false"\n')),(0,i.kt)("p",null,"Now, we will add ",(0,i.kt)("inlineCode",{parentName:"p"},"arg1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2")," with the code ",(0,i.kt)("inlineCode",{parentName:"p"},"(+ arg1 arg2)")," and compare it to the literal value ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),". This comparison will determine whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". We end up with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run '(mod (arg1 arg2) (if (> (+ arg1 arg2) 100) 'large' 'small'))'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'(a (i (> (+ 2 5) (q . 100)) (q 1 . "large") (q 1 . "small")) 1)\n')),(0,i.kt)("p",null,"Next, let's put this bytecode through ",(0,i.kt)("inlineCode",{parentName:"p"},"brun"),", giving it a solution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(10 90)'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"small\n")),(0,i.kt)("p",null,"Now, again with a different solution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(10 91)'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"large\n")),(0,i.kt)("p",null,"The difference here being the new solution of ",(0,i.kt)("inlineCode",{parentName:"p"},"(10 91)"),". When added together, ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"91")," are greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,i.kt)("h2",{id:"moving-to-a-text-editor"},"Moving to a Text Editor"),(0,i.kt)("p",null,"At this point our Chialisp program can be written on a single line, but it's started to get difficult to keep things organized."),(0,i.kt)("p",null,"Moving forward, let's write Chialisp in a file."),(0,i.kt)("p",null,"What text editor you choose is up to you. For Visual Studio Code, you can issue this command to open a new file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"code first.clsp\n")),(0,i.kt)("p",null,"This allows us to format our code nicely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(mod (arg1 arg2)\n    (if (> (+ arg1 arg2) 100) 'large' 'small')\n)\n\n")),(0,i.kt)("p",null,"Now, we can execute the file by name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run first.clsp\n")),(0,i.kt)("p",null,"This output will be exactly the same as before, but our code is a bit easier to manage."),(0,i.kt)("p",null,"We will still execute the output like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'brun "(a (i (> (+ 2 5) (q . 100)) (q 1 . "large") (q 1 . "small")) 1)" "(50 51)"\n\n')),(0,i.kt)("p",null,"And, using nesting, ",(0,i.kt)("inlineCode",{parentName:"p"},"$()")," will execute anything within ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," first. We can simplify further with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'brun "$(run first.clsp)" "(50 51)"\n')),(0,i.kt)("h2",{id:"defining-functions"},"Defining Functions"),(0,i.kt)("p",null,"A function will give a name to some lines of code, often taking an input and returning a result. Let's create a new file to practice functions inside of Chialisp."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"code sum.clsp\n")))}f.isMDXComponent=!0}}]);