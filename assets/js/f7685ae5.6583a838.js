"use strict";(self.webpackChunkrunnerty=self.webpackChunkrunnerty||[]).push([[701],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5193:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(4137)),o=["components"],l={id:"triggers",title:"Triggers",sidebar_label:"Triggers"},s=void 0,p={unversionedId:"triggers",id:"version-3.3.0/triggers",title:"Triggers",description:"The execution of chains happens by a trigger (npm module) that could be developed and coupled to Runnerty.",source:"@site/versioned_docs/version-3.3.0/triggers.md",sourceDirName:".",slug:"/triggers",permalink:"/docs/triggers",editUrl:"#/versioned_docs/version-3.3.0/triggers.md",tags:[],version:"3.3.0",frontMatter:{id:"triggers",title:"Triggers",sidebar_label:"Triggers"}},d=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Calendars",id:"calendars",children:[],level:2},{value:"Servers",id:"servers",children:[{value:"Configuration",id:"configuration-1",children:[],level:3},{value:"You can use two different authentication strategies, basic auth or API Key.",id:"you-can-use-two-different-authentication-strategies-basic-auth-or-api-key",children:[{value:"Basic Auth (standard):",id:"basic-auth-standard",children:[],level:4},{value:"API KEY",id:"api-key",children:[],level:4}],level:3},{value:"Plan",id:"plan",children:[],level:3},{value:"Usage",id:"usage-1",children:[],level:3}],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The execution of chains happens by a trigger (npm module) that could be developed and coupled to Runnerty."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In the config.json file of the project we are going to write the configuration of the different triggers that are going to be used in the chain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "triggers": [\n    {\n      "id": "schedule_default",\n      "start_date": "2017-04-01T00:00:00.00Z",\n      "end_date": "2099-11-01T00:00:00.00Z",\n      "schedule_interval": "*/1 * * * *"\n    },\n    {\n      "id": "filewatcher_default",\n      "file_name": "/etc/runnerty/myfile.txt",\n      "condition": "add"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"This is an example of the configuration of two triggers: ",(0,i.kt)("inlineCode",{parentName:"p"},"@runnerty/trigger-schedule")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@runnerty/triggers-file-watcher"),". Each trigger has it's owns properties, some of them are mandatory, you can have a look at each triggers documentation to know how to use them."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The destination of an trigger is to use it in our chains. We could say that using a trigger has two parts: ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"."),(0,i.kt)("p",null,"The configuration properties are set in the ",(0,i.kt)("a",{parentName:"p",href:"config.md"},"config.json"),". They are the identifiers fields of the trigger. For example, this is the configuration properties for the @runnerty/trigger-schedule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "triggers": [\n    {\n      "id": "schedule_default",\n      "type": "@runnerty-trigger-schedule"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is the name given for the trigger configuration. Note that we could have all the differents configuratios that we want for the same executor. The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is the name of the trigger module."),(0,i.kt)("p",null,"In the processes are set the variable properties (params) for the executor. This is an example of the usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@runnerty/trigger-schedule")," in a process"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6}","{6}":!0},'{\n  "id": "CHAIN_ONE",\n  "name": "Chain one sample",\n  "triggers": [\n    {\n      "id": "schedule_default",\n      "start_date": "2017-06-18T00:00:00.00Z",\n      "end_date": "2099-06-18T00:00:00.00Z",\n      "schedule_interval": "*/1 * * * *"\n    }\n  ],\n  //...\n}\n')),(0,i.kt)("p",null,"Runnerty matchs the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property from the plan with the ",(0,i.kt)("a",{parentName:"p",href:"config.md"},"config.json")," one to identify the executor to run. Properties like ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule_interval"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end_date")," are the variable properties that may change in every chain."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is important to know that it is possible to overwrite some configuration properties from the ",(0,i.kt)("inlineCode",{parentName:"p"},"triggers")," properties of the chain. For example: if we are using the @runnerty/trigger-schedule we may want to change the database that the trigger is going to connect."))),(0,i.kt)("p",null,"This is the configuration of the trigger. We are planing the execution of chain when file ",(0,i.kt)("inlineCode",{parentName:"p"},"myfile.txt")," is added to the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/runnerty/"),"\n",(0,i.kt)("a",{parentName:"p",href:"config.md"},"config.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "triggers": [\n    {\n      "id": "filewatcher_default",\n      "file_name": "/etc/runnerty/myfile.txt",\n      "condition": "add"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"We can overwrite this information from the ",(0,i.kt)("inlineCode",{parentName:"p"},"triggers")," properties of the chain:\n",(0,i.kt)("a",{parentName:"p",href:"chain.md"},"plan.json (object chains)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "CHAIN_ONE",\n  "name": "Chain one sample",\n  "triggers": [\n    {\n      "id": "filewatcher_default",\n      "file_name": "/etc/runnerty/otherfile.txt"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Overwrite file_name by ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/runnerty/otherfile.txt"),"."),(0,i.kt)("h2",{id:"calendars"},"Calendars"),(0,i.kt)("p",null,"There is also the possibility to trigger a chain using a calendars. The calendars path can be indicated in the ",(0,i.kt)("a",{parentName:"p",href:"config.md"},"config.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "general": {\n    "calendarsPath": "/calendars/"\n  }\n}\n')),(0,i.kt)("p",null,"Calendars dir:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"runnerty\n  \u2514\u2500\u2500 calendars/\n    \u2514\u2500\u2500 weekends.ics\n    \u2514\u2500\u2500 laboral_days.ics\n")),(0,i.kt)("p",null,"Calendars can be used for both, enabling or disabling execution dates through the ",(0,i.kt)("strong",{parentName:"p"},"enable")," and ",(0,i.kt)("strong",{parentName:"p"},"disable")," properties, so it can be specified, for example, to only execute a chain on laboral days, excluding weekends, like in the sample below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "EXAMPLE_CHAIN",\n  "name": "Name of the sample chain",\n  "calendars": {\n    "enable": "laboral_days",\n    "disable": "weekends"\n  }\n}\n')),(0,i.kt)("h2",{id:"servers"},"Servers"),(0,i.kt)("p",null,"Servers allow us to forget about the endpoints implementation in the triggers development. Runnerty will pull up the web servers indicted in the config file and will also manage the routing. It will make available the trigger's property ",(0,i.kt)("inlineCode",{parentName:"p"},"on_request"),". This will receive the requests to it's endpoint. Additionally, It allows us to customize the response either sending the status code and the response object."),(0,i.kt)("h3",{id:"configuration-1"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3-9}","{3-9}":!0},'{\n  "general": {\n    "servers": [\n      {\n        "id": "my_srv_sample",\n        "port": 8080,\n        "endpoint": "/my_endpoint"\n      }\n    ]\n  },\n  "triggers": [\n    {\n      "id": "server_default",\n      "type": "@runnerty-trigger-server"\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"you-can-use-two-different-authentication-strategies-basic-auth-or-api-key"},"You can use two different authentication strategies, basic auth or API Key."),(0,i.kt)("h4",{id:"basic-auth-standard"},"Basic Auth (standard):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "general": {\n    "servers": [\n      {\n        "id": "my_srv_sample",\n        "port": 8080,\n        "endpoint": "/my_endpoint",\n        "users": [\n          { "user": "user_one", "password": "pass_one" },\n          { "user": "user_two", "password": "pass_two" }\n        ]\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h4",{id:"api-key"},"API KEY"),(0,i.kt)("p",null,"You can send your API-Key in the endpoint call using the ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," query parameter or the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-api-key")," header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "general": {\n    "servers": [\n      {\n        "id": "my_srv_sample",\n        "port": 8080,\n        "endpoint": "/my_endpoint",\n        "apikey": "_API_KEY_SAMPLE_"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"plan"},"Plan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "...",\n  "name": "...",\n  "triggers": [\n    {\n      "id": "server_default",\n      "server": {\n        "id": "my_srv_sample",\n        "path": "/test",\n        "method": "post"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,"Both the values that arrive by ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," and those that arrive in ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),' will be available in the chain (via customValues).\nSo if for example we make a "post" like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" -d \'{"MY_VALUE_ONE":"ONE","MY_VALUE_TWO":"2"}\' http://localhost:8080/my_endpoint/test\n')),(0,i.kt)("p",null,"We can make use of the values through the ",(0,i.kt)("inlineCode",{parentName:"p"},"get values")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," @GV(my_value_one) / @GV(my_value_two) / @GV(my_query_value)\n")),(0,i.kt)("p",null,"Examples of ",(0,i.kt)("inlineCode",{parentName:"p"},"api-key")," authentication:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" -H "x-api-key: _API_KEY_SAMPLE_" http://localhost:8080/my_endpoint/test\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -H 'Content-Type: application/json' 'localhost:8080/my_endpoint/test?api_key=_API_KEY_SAMPLE_'\n")))}c.isMDXComponent=!0}}]);