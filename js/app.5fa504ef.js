(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e081510a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1ddf":function(e,t,a){},"2ae5":function(e,t,a){e.exports=a.p+"img/Rectangle-red.da3888af.jpg"},"2bd0":function(e,t,a){e.exports=a.p+"img/sinus-skateboards.dabdd9f1.jpg"},"387e":function(e,t,a){e.exports=a.p+"img/github.184837f2.svg"},"3a19":function(e,t,a){e.exports=a.p+"img/profile.5da756b0.jpg"},"3b3a":function(e,t,a){e.exports=a.p+"img/Rectangle-aframe.d8cfec79.png"},4004:function(e,t,a){e.exports=a.p+"img/Rectangle-yellow.1de751e5.jpg"},"43e1":function(e,t,a){e.exports=a.p+"img/Rectangle-node.b840a487.png"},"4a5d":function(e,t,a){e.exports=a.p+"img/Rectangle-css.1104a8ba.png"},"4e82":function(e,t,a){e.exports=a.p+"img/goteborgarna.aa8649d5.jpg"},"4ef0":function(e,t,a){},5039:function(e,t,a){e.exports=a.p+"img/Rectangle-xd.892a7c7a.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{attrs:{id:"nav"}},[e._m(0),a("button",{staticClass:"hamburger hamburger--3dx",attrs:{type:"button"},on:{click:function(t){return e.myNav()}}},[e._m(1)]),e._m(2)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"logo",attrs:{href:"#main"}},[a("h2",[e._v("TL")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"hamburger-box"},[a("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{attrs:{id:"myNav"}},[a("li",[a("a",{attrs:{href:"#main"}},[e._v("Home")])]),a("li",[a("a",{attrs:{href:"#projects"}},[e._v("Projects")])]),a("li",[a("a",{attrs:{href:"#about"}},[e._v("About")])]),a("li",[a("a",{attrs:{href:"#contact"}},[e._v("Contact")])])])}],c={methods:{myNav:function(){document.querySelector("#myNav").classList.toggle("toggle"),document.querySelector(".hamburger").classList.toggle("is-active")}},watch:{closeNav:function(){window.innerWidth>440&&(alert("hej"),document.querySelector("#myNav").classList.toggle("toggle"),document.querySelector(".hamburger").classList.toggle("is-active"))}}},l=c,u=(a("69b7"),a("2877")),h=Object(u["a"])(l,o,i,!1,null,"7bbcdf73",null),m=h.exports,p={components:{Navbar:m}},f=p,g=(a("5c0b"),Object(u["a"])(f,n,s,!1,null,null,null)),d=g.exports,v=a("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var w=a("8c4f"),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"containerLanding"},[e._m(0),r("img",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:2},expression:"{\n        speed: 2\n      }"}],staticClass:"shatter",attrs:{src:"https://media.giphy.com/media/l3vRbTrGdpZrjjco8/giphy.gif",alt:""}})]),r("section",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:2},expression:"{\n      speed: 2\n    }"}],staticClass:"sectionTwo grid ",attrs:{id:"floating"}},[r("img",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:1},expression:"{\n        speed: 1\n      }"}],staticClass:"sectionTwoImgOne",attrs:{src:a("62cd"),alt:"blue"}}),r("img",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:-2},expression:"{\n        speed: -2\n      }"}],staticClass:"sectionTwoImgTwo ",attrs:{src:a("2ae5"),alt:"blue"}}),r("img",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:2},expression:"{\n        speed: 2\n      }"}],staticClass:"sectionTwoImgThree",attrs:{src:a("4004"),alt:"blue"}}),r("img",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:-1},expression:"{\n        speed: -1\n      }"}],staticClass:"sectionTwoImgFour",attrs:{src:a("be22"),alt:"blue"}}),r("section",{staticClass:"fewWords"},[r("h2",{staticClass:"d3"},[e._v(" Some words about me ")]),r("div",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:3},expression:"{\n          speed: 3\n        }"}],staticClass:"flexWords"},[e._m(1),r("span",[e._v("Determinate")]),r("span",[e._v("Friendly")]),r("span",[e._v("Curious")])]),r("div",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:2},expression:"{\n          speed: 2\n        }"}],staticClass:"flexWords"},[r("span",[e._v("Enthuastic")]),r("span",[e._v("Social")]),r("span",[e._v("Observant")])]),r("div",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:1},expression:"{\n          speed: 1\n        }"}],staticClass:"flexWords"},[r("span",[e._v("Creative")]),r("span",[e._v("Energetic")])])])]),r("section",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:2},expression:"{\n      speed: 2\n    }"}],staticClass:"sectionThree"},[r("section",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:1},expression:"{\n        speed: 1\n      }"}]},[r("h2",[e._v(" The tools ")]),e._m(2),r("p",[e._v(" Its really cool to have the ability to create apps that can work on all screensizes. And also have great functionality without any problems. ")])]),e._m(3)]),r("section",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:2},expression:"{\n      speed: 2\n    }"}],staticClass:"sectionFour",attrs:{id:"projects"}},[r("h2",[e._v(" Figma prototypes ")]),r("p",[e._v(" Here is a selection of prototypes which i have designed with Figma. You can click on the images to read more and see the prototype. ")]),r("div",{staticClass:"flex"},[r("div",{staticClass:"cardWrapperMain"},[r("div",{staticClass:"cardWrapper"},[!1===e.wakeup?r("img",{attrs:{src:a("c83b"),alt:""},on:{click:function(t){e.wakeup=!0}}}):e._e(),e.wakeup?r("div",{staticClass:"cardInfo",on:{click:function(t){e.wakeup=!1}}},[e._m(4),e._m(5)]):e._e()]),r("h3",[e._v("Wake up")])]),r("div",{staticClass:"cardWrapperMain"},[r("div",{staticClass:"cardWrapper"},[!1===e.boxingtimer?r("img",{attrs:{src:a("b61d"),alt:""},on:{click:function(t){e.boxingtimer=!0}}}):e._e(),e.boxingtimer?r("div",{staticClass:"cardInfo",attrs:{id:"boxingtimer"},on:{click:function(t){e.boxingtimer=!1}}},[e._m(6),e._m(7)]):e._e()]),r("h3",[e._v("Boxing timer")])]),r("div",{staticClass:"cardWrapperMain"},[r("div",{staticClass:"cardWrapper"},[!1===e.sinus?r("img",{attrs:{src:a("2bd0"),alt:""},on:{click:function(t){e.sinus=!0}}}):e._e(),e.sinus?r("div",{staticClass:"cardInfo",attrs:{id:"boxingtimer"},on:{click:function(t){e.sinus=!1}}},[e._m(8),e._m(9)]):e._e()]),r("h3",[e._v("Sinus skateboards")])])]),e._m(10)]),r("section",{staticClass:"sectionFive"},[e._m(11),r("div",{staticClass:"flex"},[r("div",{staticClass:"cardWrapperMain"},[r("div",{staticClass:"cardWrapper"},[!1===e.goteborgarna?r("img",{attrs:{src:a("4e82"),alt:""},on:{click:function(t){e.goteborgarna=!0}}}):e._e(),e.goteborgarna?r("div",{staticClass:"cardInfo",on:{click:function(t){e.goteborgarna=!1}}},[e._m(12),e._m(13)]):e._e()]),r("h3",{staticClass:"white"},[e._v("Göteborgarna")])]),r("div",{staticClass:"cardWrapperMain"},[r("div",{staticClass:"cardWrapper"},[!1===e.calorieking?r("img",{staticClass:"rightImage",attrs:{src:a("8ad5"),alt:""},on:{click:function(t){e.calorieking=!0}}}):e._e(),e.calorieking?r("div",{staticClass:"cardInfo",on:{click:function(t){e.calorieking=!1}}},[e._m(14),e._m(15)]):e._e()]),r("h3",{staticClass:"white"},[e._v("Calorieking")])]),r("div",{staticClass:"cardWrapperMain"},[r("div",{staticClass:"cardWrapper"},[!1===e.wearluxary?r("img",{staticClass:"rightImage",attrs:{src:a("686d"),alt:""},on:{click:function(t){e.wearluxary=!0}}}):e._e(),e.wearluxary?r("div",{staticClass:"cardInfo",on:{click:function(t){e.wearluxary=!1}}},[e._m(16),e._m(17)]):e._e()]),r("h3",{staticClass:"white"},[e._v("WearLuxary")])])])]),e._m(18),r("section",{staticClass:"sectionSeven",attrs:{id:"contact"}},[e._m(19),r("div",{staticClass:"flex"},[e._m(20),r("form",{attrs:{method:"POST","data-netlify":"true",name:"contact","data-netlify-honeypot":"bot-field"},on:{submit:function(t){e.formsubmit=!0}}},[r("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),r("label",{attrs:{for:"formEmail"}},[e._v("Email")]),r("input",{attrs:{type:"email",name:"email",id:"formEmail",required:"",placeholder:"What's your email?"}}),r("label",{attrs:{for:"formTel"}},[e._v("Phonenumber")]),r("input",{attrs:{type:"tel",id:"formTel",name:"telephone",placeholder:"What's your phonenumber?"}}),r("label",{attrs:{for:"formName",name:"name"}},[e._v("Your name or Company name")]),r("input",{attrs:{name:"name",id:"formName",required:"",placeholder:"What's your name?"}}),r("label",{attrs:{for:"contactReason",name:"contactReason"}},[e._v("Service")]),e._m(21),r("label",{attrs:{for:"formText"}},[e._v("Your message")]),r("textarea",{attrs:{required:"",id:"formText",placeholder:"What's your message?",cols:"100",name:"message"}}),r("input",{attrs:{type:"submit",value:"Send"}}),e.formsubmit?r("div",{staticStyle:{color:"green"}},[e._v(e._s(e.message))]):e._e()])]),e._m(22)])])},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"textLand text-focus-in ",attrs:{id:"main"}},[a("h1",[e._v("Thomas Laukkanen")]),a("h3",[e._v("Frontend Developer")]),a("p",[e._v(" I love to create "),a("strong",[e._v(" new ")]),e._v(" digital experiences that are visually appealing and functional at the same time. I use agile methodoligies when i work. Which keeps me organized and leads to an "),a("strong",[e._v("amazing")]),e._v(" end result for the customer. "),a("br"),a("a",{attrs:{href:"#projects"}},[a("strong",[e._v(" See my projects ")])]),e._v(" or "),a("a",{attrs:{href:"#contact"}},[a("strong",[e._v(" Contact me ")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("p",[e._v(" Passionate ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v(" These are some tools i have in my toolbelt right now. Which i can use to build powerful web applications, in any shape or form. ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{src:a("ce68"),alt:""}}),r("img",{attrs:{src:a("4a5d"),alt:""}}),r("img",{attrs:{src:a("b777"),alt:""}}),r("img",{attrs:{src:a("d6df"),alt:""}}),r("img",{attrs:{src:a("43e1"),alt:""}}),r("img",{attrs:{src:a("f837"),alt:""}}),r("img",{attrs:{src:a("b2c0"),alt:""}}),r("img",{attrs:{src:a("a77c"),alt:""}}),r("img",{attrs:{src:a("a57c"),alt:""}}),r("img",{attrs:{src:a("f555"),alt:""}}),r("img",{attrs:{src:a("d4af"),alt:""}}),r("img",{attrs:{src:a("e7a7"),alt:""}}),r("img",{attrs:{src:a("5039"),alt:""}}),r("img",{attrs:{src:a("8695"),alt:""}}),r("img",{attrs:{src:a("3b3a"),alt:""}}),r("img",{attrs:{src:a("d557"),alt:""}}),r("img",{attrs:{src:a("5aee"),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Wake up")]),a("p",[e._v(" Wakeup was a school project that i did together with my classmate Sofie Kihlström in the course Grafical & Ux design. The mission was to create a design prototype for an alarm. The design process started with creating two personas, which helped to understand which functionality the app should have and what kind of design. After that we started to brainstorm the best idéas we wanted to implement and together with some market research we came to a conclusion that we want to create an app, that appeals to a younger market and works with a smart home. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://www.figma.com/file/3Dh5ISBH2tKMQu4Yam2j4O/Wake-up?node-id=0%3A1"}},[a("strong",[e._v(" See the result ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Boxing timer")]),a("p",[e._v(" Boxingtimer is a prototype that i have done on my spare time. The idea that i had was to create a boxing timer that you can use to plan your training sessions in a smart way. It has a modular system where you can move the training sets as you which. And log the workouts so you can reuse them later. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://www.figma.com/file/1boFAXRxuRPU2sUnJPzw1m/Boxer?node-id=0%3A1"}},[a("strong",[e._v(" See the result ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Sinus")]),a("p",[e._v(" Sinus was a school project that i designed my self. The only thing we got from the teacher was the logo and the pictures. Our mission was to create a webshop with these skateboard products and make them sellable! The result that i had in my mind was more luxuries webshop, where the skateboards is on the higher price range. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://www.figma.com/file/VvQfU4ftnyXn9fUd1yEuLA/SINUS?node-id=2%3A53"}},[a("strong",[e._v(" See the result ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"thetext"},[e._v(" I have more projects on my "),a("a",{attrs:{href:"https://github.com/ThomasLaukkanen"}},[e._v("github")]),e._v(" page so feel free to check them out. These projects are just a selection of some latest projects i have been working on lately. As you can see, i can both produce beautiful UIs and also code the whole web application from start to finnish. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v(" Coded "),a("span",[e._v(" projects ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Göteborgarna")]),a("p",[e._v(" Göteborgarna was a school project where to goal was to learn to use vue-cli, bootstrap-vue and to learn to create progressive web applications that works offline also. It was a great learning experience to learn the ins and outs of bootstrap and vue. I can definetly say that im now more confident with using vue after this project. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://github.com/ThomasLaukkanen/bootstrap-vue-school"}},[a("strong",[e._v("See project on githu")]),e._v("b")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Calorieking")]),a("p",[e._v(" Calorieking was my first big javascript project that i created. It was fun to learn about apis and for this one i just used pure vanilla javascript, html and css. The api i chose was nutrionix, which is a big datebase where you can find all the nutrition values you need for common foods in usa. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://github.com/ThomasLaukkanen/Calorie-tracker"}},[a("strong",[e._v(" See project on github ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("WearLuxary")]),a("p",[e._v(" Wear Luxary is a webshop that was created together with five other classmates. The goal with the project was to create a luxury webshop. We used Scrum & Kanban to organise our sprints. And had daily standups, where we could talk about our tasks that we had done the day before, and what we should do next. It was fun to learn to work in a bigger team as it had a good learning curve with the use of git and github. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://github.com/ThomasLaukkanen/WearLuxury"}},[a("strong",[e._v(" See project on github ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"sectionSix flex",attrs:{id:"about"}},[r("section",[r("h2",[e._v("About me")]),r("p",[r("strong",[e._v(" I’m Thomas Laukkanen, a frontend developer who has passion for both the design part and coding part of creating attractive frontends to websites. I believe a website can look both amazing and still be functional at the same time, if the right amount of care is put in to it.")])]),r("p",{staticStyle:{"margin-top":"8px"}},[e._v(" In 2020 i started my journey to pursue a career in the web development space and since then i have not looked back. Im currently studying frontend development at It-högskolan in Gothenburg, Sweden. I have always been a person who has been technically interested, and i can still remember my first computer was running on windows 95 with very slow internet speed, it took forever to load a simple website. Since then i have been having a big interest in gaming, poker and producing music. I believe im a quick learner when it comes to tech and i like to learn the new hottest stuff. On my spare time i like to train MMA or produce music. But lately i would so that my main hobby is to become a better developer. ")])]),r("img",{attrs:{src:a("3a19"),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Contact me")]),a("p",[e._v(" Do you like what you see, and want to contact me? I will happily talk with you about anything. "),a("strong",[e._v(" Lets connect! ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"talk"},[a("p",[e._v(" The simplest and must secure way to contact me is trough email, but you can also leave a message in the form. ")]),a("a",{attrs:{href:"mailto:tlaukkanen@protonmail.com"}},[e._v("tlaukkanen@protonmail.com")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("select",{attrs:{name:"contactReason",id:"contactReason"}},[a("option",{attrs:{value:"sayHello"}},[e._v("I just want to say Hello!")]),a("option",{attrs:{value:"wantTohire"}},[e._v(" I want to hire you full-time or part-time")]),a("option",{attrs:{value:"workOnProject"}},[e._v("I want to work with you on a project")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"iconDiv flex"},[r("a",{attrs:{href:"https://dribbble.com/devtumppu"}},[r("img",{attrs:{src:a("c816"),alt:""}})]),r("a",{attrs:{href:"https://www.linkedin.com/in/thomas-laukkanen-3b8b491b0/?locale=sv_SE"}},[r("img",{attrs:{src:a("953d"),alt:""}})]),r("a",{attrs:{href:"https://github.com/ThomasLaukkanen"}},[r("img",{attrs:{src:a("387e"),alt:""}})])])}],b={name:"Home",data:function(){return{wakeup:!1,boxingtimer:!1,sinus:!1,goteborgarna:!1,calorieking:!1,wearluxary:!1,message:"I have received your message i will contact you as soon as possible // Thomas",formsubmit:!1}}},A=b,C=(a("e106"),Object(u["a"])(A,x,E,!1,null,"7c29b8cd",null)),R=C.exports;r["a"].use(w["a"]);var y=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],I=new w["a"]({routes:y}),S=I,Y=a("2f62");r["a"].use(Y["a"]);var k=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=a("d0bc"),M=(a("abe2"),a("dcd8")),B=a.n(M);r["a"].use(B.a),r["a"].use(T["a"]),r["a"].config.productionTip=!1,new r["a"]({router:S,store:k,render:function(e){return e(d)}}).$mount("#app")},"5aee":function(e,t,a){e.exports=a.p+"img/Rectangle-sass.fed43764.png"},"5c0b":function(e,t,a){"use strict";a("9c0c")},"62cd":function(e,t,a){e.exports=a.p+"img/Rectangle-blue.e757406f.jpg"},"686d":function(e,t,a){e.exports=a.p+"img/wearluxary.09dca443.jpg"},"69b7":function(e,t,a){"use strict";a("1ddf")},8695:function(e,t,a){e.exports=a.p+"img/Rectangle-ai.7b8176d2.png"},"8ad5":function(e,t,a){e.exports=a.p+"img/calorie-king.29216aae.jpg"},"953d":function(e,t,a){e.exports=a.p+"img/linkedin.7dc732a8.svg"},"9c0c":function(e,t,a){},a57c:function(e,t,a){e.exports=a.p+"img/Rectangle-github.52e1c94b.png"},a77c:function(e,t,a){e.exports=a.p+"img/Rectangle-git.65f96ecc.png"},abe2:function(e,t,a){},b2c0:function(e,t){e.exports="data:image/png;base64,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"},b61d:function(e,t,a){e.exports=a.p+"img/boxing-timer.54a355f7.jpg"},b777:function(e,t,a){e.exports=a.p+"img/Rectangle-boot.55a29f11.png"},be22:function(e,t,a){e.exports=a.p+"img/Rectangle-purple.99d8498a.jpg"},c816:function(e,t,a){e.exports=a.p+"img/dribble.c6edaba3.svg"},c83b:function(e,t,a){e.exports=a.p+"img/wake-up.29f02bf2.jpg"},ce68:function(e,t,a){e.exports=a.p+"img/Rectangle-html.824840ff.png"},d4af:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACQCAYAAADN9hMXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA47SURBVHgB7Z15cFXVHce/NzshgSxsIQHCHpB9bV1YBcWlUJciUqWD2Oo4jlqrtdW6Vp22OoDWVgbEisrUIhYqsjgqAhZQISBLSNgSkhAgCcnL+vLey3u3v5NHKmqhAX/n3HvgfJib9Q/uvHze75zf75z7Oxa+hW3b4+jTVLqm0ZUJxYQqShHcuRHBooOwiw8gVJKPUGUp4K2jX4Ygk8ReV0IqlgXExtF/1AZo3xHomA50zgB69w//TD07T11PWZZVcPovrOYvSIgk+vQkXfdBJbaNUFkJGreuQeDjdxE6kkc/kyvAmZAuxpkQwnTuAgweCQwbDSSnwgHmISyIp+mWxIdTUqynawgUIqKB/1+L0fjJMtg+L5zGMTFOJ4EiR7+BwNirgLR0KEZEj/FCjmYxhC3KIoWQIPDRO/AtnQvUeuAWXCFGM2JouWwCMI4EiY6BQuaRGA9YJEUmfZMPRQT3bUfDq4/SkJHbNIy4CVeJ0Uy3nsCNM4H0blDI+Aj68AQUEdj0PrzPzkaoYJ/rpHAtRw4Br/wRyPkKCpkqxFAyr/C//zp8Lz8Mu8Y9Q4c2+BqA114CtmyAIqZFQYEYgXVL4Vv0JAzfk3eXAI0B4ArpQ15mBCQT+GwVfK89AwMTq98DdnwO2UgVI3R4Dxpe+hVlIfUwMOH3Ae8tBQoOQibSxBApacOrv6Px0fn6xAVHfS2w/C0Kx37IQpoY/hULEczLhkESJUXAF59BFlLEEGXtwOolMEhm7Qqg/ARkIEUM/5olsD1lMEimnhYWN34kpSbELkbTgtiWdTAo4st/A54KcMMuRmDjShMtVCKylN07wA27GMGtJlooZ9tmcMMqhl11EsEDSmv6BsExylBqqsAJqxiN29c7tsnmokbsbMvbC05YxQju3gqDQzBXQlnFCBXmweAQxUfACa8YJhtxDjfPMey6ahgcop53oZI3XRUbSgzOIPZpMMIrhtmu5yAWOOEVIyYOBoeI4d1JziqGldAWBoeIiwcnvGIkt4fBIZgfcWQVI7LnQBgcgvmpNV4xsobD4BC9+oITVjGiho2l8UT6xnPDtxGveRZvtOadYyS1Q0T3S2BQTLfuQOtEcML+9o6eeCMMihkwDNzwi/GDq2Axp06Gs9CGSgRDR4EbdjGs1DREXfkTGBQxcASQlAJu+GeKloWY62bDSkyGQTIiWlw2DjKQkkJEpHVDzMwHwy2EDPK4fCLQsTNkIC23jJl4M2Uo/WGQRPfewNjJkIW8ogMtqMXd9awZUmQQEwvcMJMKR9GQhdRqVGTfoYi96xmTpXAipJhxR7jLn0SklymjL78esbc/AgMT02YAg+QvPURBAdHXzmoyveGVR8xmnvMlliLFtTcBo6+ACpQtbERPugWtHlsMK563dHtREJ8A3DI73N5REUpXvKJGTED8c/9AZL8RMLQAke6LNo533kfDh9rXTPT5VB/b/T74Vy6C/4O/wRZ9wl2Cq/p8tqYocfWPgVGXSc0+zoQzYpwiVHwQ/hWL0LjtY1cI4goxRNYx6nJgzCQg1bkdcY6K0Yx98jgCG1YgsPkDhA7tkX7KwJlwrsl8RPgUgpEkxIChtPaR7HjV2BVinI5dXYHGXZsRys9BqGg/QiUFsD3lsL21sINyhWnTeyJkERLb+yMiENF8LEU7cSxFp/DRFH37h5vLuwjXiVF3EjhGQaOqmK6jQPUxwOsBGn2Qzm1L8b0paQA2VdjYX4emK98LnKB7rw+Gfx9PwaF9DFW0qeaXRdOIfnRdkWKhYyxchZI6xtkQWtaVAYVfAoc2hGXQqdQRonstbrDxAU2RlpHE++vPfv/1FPSONISvT091SIqwbGS1pjJFB6p0pwFd45xffHQ0YohokLOahNhEL7C8lpUt5lwjxsF6GwsLw0L4mEa5VEpAxqUCd1GW2j/BOUEcEUMMCwc+AXYtp8zVRU2DWypGHQ0Lbx+1MfcwyR2EFNrRcHM7TT/u7mYhPhLKUS5GaR7w+WLAUwTX0RIxtlTaeHw/RbpaKGEozUmf62thkOK5qdLKZ/5mGldfdKcULWE1zSPm7FInhWBHNXBjto21iluPKBNDzCW2LqSxWOGLysmCQhv37rXhaYRyREZzxy4bS4rVBXclWcn+j4Dtb0Fb3qA/yNMH4Di/yROTXBt3dpU/KZUeMfK3kBRvQ1s+LLPxjAukaOYPNOFdfhzSkSrGyXyarC1QU5ySwVfVNu7ZSwU2F3Wo9NKw8vh+G19IPkFMmhhChi9eB4IuqE+cD2Jc/23u1xVLN+EJ0L3l2VLvTZoYe1cB5XIP4ZHKX47Y2FkD15JLk/i/l8ibjEoRo7IoPOHUlRwS4s2jcDVCiRdpvpEvqUAoRYy8D4EG3raTSnmdqprlGgyBInVeWGRLWVtiF6O2HCjaBm0potXQdRr1sRXrNEclTO7ZxRDVTZ2jxT+P2zip0YRZTEDXlGpwwpHO0UKwthzasUxCXYNVDC/V9SsOQVtKKSTvcnEmcib21YbvnRNWMY7u0Pt5IrHzSsf7F5uFPq3gvXFWMU7sg9bkarrAJ9jGPK9jFUPs09SZvDpoyx7mIZB3jqFxNiIo0Pi08VLmTIpVDL/G7zhBqabrOgKPm8XQdcGsmVoHNuFw4WeeNDOfVwKt0bllGPet8/YS5z0yQzkJDuzG5iKO+d5ZxYhpDa1x29Ng50Jb5k2arGK0SoLWdG8FbWnPHK1ZxUjtDq3prXHEE8/BcsIqRnveIzOU00djMS5l7prJKkbnQXofVzIm1UKEhplJJN3zhFQXn6IY1wZIyYS2dKBxur+GUUM8xpjM3I2J/f3dU023QWncLKc1t1SmdAA77GJkjACiND5+9ep2zjxdfr6IFHtqR/7xj12M+BSg11hoSzqlrNM1ihqi2UqahPoL/0E2JG+/KUCspn1exXtvToaFZMd7Df1/RLSYlSFntiwlh0ggi4eIQ440XXvIjAce6mm5/vZnd7HQS1L/fmnJZc8xemco09OAS1wc9UZTlflOiQcQSBMjktKn0bP1HVLEotTzWRZ7GshBa7q3Z/taiJVYM5JajmrXMyyHrlnKMKoPvHSJu7IUIcW8/lZTG0iZSK9TdhsNDJ8BbZmQCjzaC67h6T4WrpFQt/g2SgrYfSYBP/y5vhthfkYz/xeynI0cIlKIJm23KEqlla1s9BpH775fAzGanoI1Ix1YNNBCGwfS2BQq1c+nIW1WBpShdMlLLLJd9QTl31nQkrE0rCwfbrGvZJ4JEWEH0zznrcEWpig+iMCRBrDBALBvDZC3DqivhGtoaQNY0QV4YaGNxcXhPuEyEA1gH+5h4SZKm2OVvn3DONoyuuZUy+jibHcIcq4tow/VA28U2VhVxidIYlS4hjKnq4UuDmZzrjh9wFsZ7u5XsBWoOAzYDjVDO9/TB477gZXHgTVlNrKrKCKe4ysaZYWLadPTLEymIaNTrPNFY9cdS+GvpRd6LwlSGH7kseZE+Ak3rzcoXZhZS75/2iEap23xALurw0dTFDaEn0QX/cfFCy12onegP3wmLdb1irfQl+oRY1LgukKa68Q44vdgfU0+cn3lyPGW4YDvJE401tK4Lr99Xt2Qx2AI4/gaYoi8LPBXYqUnF0sqv8KBhgp6Z5mzWZ3GUTFyG8rx57LPsbRiF3y2CxtqXsQ4IkZt0I/FJ7Px/IlNqA5q2jb4Ake5GJtqCnD/0bVN0cLgXpSKsbRyNx4qXgdPsAEGd6NEDDGVnF+6Bb8/tgFeW+NeAxcRSsRYWLYNj5Z8DIM+SK/Cv1Oxh6TQuLH4RYrUiLG9vgR3F62iVNQMH7ohLWLUhfz4ZfFaI4WmSBNjHk02t1HEMOiJFDH2eEuxqDwbBn2RIsaC8m0obdS8t+NFDrsYhf4qrKrKhUFv2MV4p2I3RQsXHdhuOC/YxVhVvR8G/eE9faCxFtn1x2DQH1YxPqw+iJDZZHNBwCrGptpCGC4MWMXIadDo+EHDWWEVoyyg8RFBhm/AKobHbNO7YOA94SgUgOHCQOM+vrxE6HxYiQRYxYi1NGh1dwYSIzQ+k0ICrGIka9z5NS1acu8izWAVIy1a005sRI8YRU0vNIFVjCGtOkFX+sUp7kzicljF+EGCxMaTkhkY3xGGr2EVY1JiD0RqOLsXGcn4BM2PZ2KGVYx2Ua1pOEmDboyMT6d717RrnCTY6xi3pgyCblzfVvMzuyTALsZ1bftoVRPoRGnq9OQBMHwTdjHSKWW9LXUwdGFa237orHGaLQv+80ro3z3tR6G9BmN2JxLiF+1GwPBdpKyVZMYk4fG0cXD7iR93kxR94lJh+C7SFtFm0iR0WLx7M5RLE7ri3g6jYfjfSBNDLKjNz5iCVBcOKUmRcZibfrXWi36ykbrsPpQixssZ1yDBRVmKuJc3M2/AgFYKznbQGOn7MaYmZeH59IlwC3/KmIwJVKE1nB0hRgEkMzt1GBZ0/ZGjm2ESImIwv8sU3J6iTyrtIDuFGCuggJ/SZHRlj1uR4sCcQ5S73+5+E+akDoehRewULaPH0RfroYichlI8WLwOG2uPQDYWRajR8Rl4IX1y03zH0GK6N8V2kmMufbofivDbQfy17MumrsAlgRrIoAMt6Ilaili7ibU0OpPbeebRG+qBZjGSEI4aQ6CQw77KJjlWVeXhKJMgbSkVnZU6hIpXI9E1pi0M58ROusaTGJ7/zgZPyfEEFEaOZsTD0O9V5mAZXdneYwicY1/xKCsCI2jpfAYthl2b1AedohJ1PSTaSebR9ZSQQnzzndePBMlEWJAhUBxBBFVBH80/CrDLe6KprXS+vwLHA7Uoa+q5YdEQEY+0mERkRic1lbMHxnXE2MRuVLRqBcM5U4Bw8rGChNhw+i/+A17uZs3KMvOKAAAAAElFTkSuQmCC"},d557:function(e,t,a){e.exports=a.p+"img/Rectangle-bootstrapvue.1bcb0d98.png"},d6df:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACQCAYAAADN9hMXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA9qSURBVHgB7Z0JeBTlGcf/M3tnN7dgQEFSLzwQFJEqVUELFgELaktBoa1oEUUFBRRb0Ch4gAcUVLAoFayIFgUPqoIIAl5UjCAoqCSGwwBJdrP3Pf2+QfpEnA07szPJxry/54EnkE2enZnfvt/3ve93CDiCUEVJb0GUfitJwmD2z04gfrYIkMolCOWQUOYora788fd+QKooKAjBca8gSLeBaHVIgjTLkYyUCaUeD/+3LAaXIiLY3mP2dAPRauERxCZF+nA5RP4fPFKQFAR3ICTa7uFfC6xP0YmpUgGC+IG4hD4ik+IeEEQDLGzwIQrUhBBHwEekQqiyRAJBHIEIglCAxCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1CExCAUITEIRUgMQhESg1DEjFZELC4hEFB/MLXLKcBsFmAUcfa+fH4Jbm8Suypj+KYyjsrdcfZegVBYgtUqIC8XyHMJOLGjBaeebEFJWxPsdgH5uQIEQf/31qrE+HJnFBPv86LOrU6OqXe4MKhfDvQmEk3ilTdDeGtNFF98xYSoSCIaP9pPheW/XeztnHqSCT3PsWDYYAfO7mKFyaSfIK1KjFBIwte7kvj+gDoxausS0JPde+N4ZWUIf18QxL796iMYxx8EPt2SkP889VwYZ50mYuJNLvTrY0euM/MeQqsSo7mJRCQseTWIh+cGsKc6yZoQ6ILE3Pp8exKjxntx0QUhTBjjQq8emUUQ6nw2EbXuBO6f5cW4qT5U7tFPioZEYsCqdTFcf7sHb6wKIRNIjCagsiqOkWPdePSpEOtXwHB275Mw7EYvZj7hQyCoramipsRg3J4E/nhrHT77IommhOvw0JygPKK5caQTNpu6ZoUihoGEwklMneHDJ+VJNlRGkxNkQ93pswNYuDQo90PUQGIYyMuvBfHMkjCaE54fuYfJ+fWumKqfIzEMYue3MTmUS9qaeF3x+oGxd9ejpjb95ozEMIhV74fl0Ue28MGmOF57J5j260kMA6hjHc75i0JZES0OU1TIO59C2u+JRiUG8NaaMKr2aosWOQ4B53QxY8ClVnTrYkExe6CRCFi6PIYPP41j9foIdn2XvnHOHAEX9bRgzgN5OK5d+o+bxNCZaEzC+o+jmvIVRfkCZk/LxWV9HMh1/Xh4eW43G4YOBjz1Scx7zo95LCIdqG1ckM4niZh6O0uT93bIgqiBxNAZXr0t36ZuBMCxWgTMfTCPFescrJKr/BpeRC0sEDFpbB5O+YUZdz7gw97vfypHUYGAwf1tGHeDEyeVWqCl+Epi6AzPNH79rfpm5LLeZgy53JHWa00mYMgAB0teAUNZhrNhv+HcrmZMvtWJ/pc4kEk1njqfOlPvSyKgskxhYR/PX19kU/UzoihgQN8cDL/SJkcYhx0YM9KOZc8U4TeswprpFA2KGDoTCKqPFg67gJNLTVCLyD7WU8a7EGEZzlHX5ODCnnY5mugBiaEzWqqmwqGRpCZOON6CRXOLoPckLmpKdMZmVf+E+PS9XVXak2EGzOwjMfTG5RJVPyheYFu7MYJsgsTQGSdLUOU6Vf2IPKp4c3UUO3epH+YaBYmhMzk5YLkD9bc1xIqww8d4sGV7E8zkSQMSQ2dyHCLOOt0KLWzbkcBVo9xY9HJA88wrvSAxdIZ3Ps/rZkmZvTwae1gm8+a7fLjlbg/WfxSB29M8FVoSQ2d4x7PvxTa0KdZ+a+MJYMnyCAaNdOPP49x4dWVQHrk0JSSGAfAq5q8vzDxFxAtxb6+N4foJPlx1XS2WrgiyiNI0cwQpwWUAPGqMvc6F19+pg8eLjAmy/sZ7H8SxYZOXdWxN6HexBX8amoNOHSyw2wxIYoAihmGcfopFrnDqSSzGl1kmMPsfYVz2BzcmltVj+86oIROCSAyD4IugH5ichx5nGROUD9RIWPBCGN371WHQiBq8szbExNHPEBLDQPJyRTxSlod2bY1bKc95d0McY+70YfQEN8ughhGOZC4IiWEgfO3oeWdbMX2yE/l5MJR9+5NYsiKKEbfUY/K0etR7MxvmkhhNwLAhLsx7OBfFRcZGDk5NnYR5i8P41RUHsWpdiA19tUUPEqOJGNzfidcXF6A763OYdZoz0RjfVEq45mYvpj3uxYFa9ds4kBhNyNln2PDCUwX4/RVWFBYYHz34KrTH5ocwiY1e6tzqmhYSo4npeJwZ82YUYsGjeejexQTRYD/4EHfpa1HcOMmN2jpaiZbVWCwCLr/UgRWLivH4/bno0tlkyGSbhrz5bgwTyjxysiwdSIxmpLhQxPXDnVg6vxBzpjtR2kGU53EaQZIFi1dWRjHnWR/7+uhykBjNDBeh9AQzRg3PxfoVxXhkqos1McY8lihrVuY+G0L5F0ef80FiZBHFRSaM+ZMLG15vi7XLCnHVAFal1XmIy4ezU2b45RVtjUFFtCylZ3cbzjzNgq1fxrHy3TDeXhfF9h1xXfbu2vBxDJtZ1Liklz3layhiZDHOHBG/7G7FfZPy8CIb5t430Ym2x2QeQXiT8vrbEbnfkQoSo4VQ2tGM8aNz8dX6Nph9v0vTvNKGbNwUQdXe1OGHxGhhOBwiRl3jxLIFhXJZX+swd+e3SSZG6owoidECMbGs2CknWvD0zHxcPVCbHHx22GdbU49OSIwWTK5LxJMP5aNPL21jiB3fpF7HQmK0cFxOEeP/4vrJRivpUPFd6t5nqxKDz75OaJimIGZY0OBT7/bXJLFmfVg+gkJvupxmRtfT1Zdsaxs5haFFiVF9MC7vP6GVEKsTRKPqHwwfNmbC22tDuO42NwaO9GDeIr/uczTz80S0KVYvRmP7eLQIMWrqErj/sXqcP6AWTy70Qyv1/kNLAdXCN0xTi3wiwLYobrrTjSF/rseajTH5/2Y8EcTWr/Rdo8qTXjENkchqSf29rBaDL7J5Y1UYw0a78dDcEKoPSJi/OISqPdrSfxVVcU2bprU5Rt2ncc++OOYs8GH4TR4sXPrjVewHayXcNd2LLdv0k4OvVvtut/p7UpCf+ntZK8Z+1myMn+KRj1jYsCn+/yzd/oMS5j7jl3fHU8tnX6i3gm+DlG6YTiQkvLs+hKGjPfjrwwHsStG5W8uix9SZPvj8+hyQ8/mXMezQsO9Xu5LUjz/rxOCbp858wovufWvw3MsR1qf46Wvm/jOMpxYGGk3pHsm2HVG8/5H6T9VxJQKcaeyZtvGTCAaOqMWgkfXYvLXxmgZvUt5htY/Lr3Vj287MIse3lTFMnuaV09xq6XJq6rYka4pofNLqqnVhPDjbz9rgJMKN7CPCb+x09rqStgKuHJjDPtWN9wFqmWzTHvfLlUW18BlXPF+QipraBB6e68Wif0fh9aX/+/k1/Lc8juvHuzGODTf7X2KXlxukC59Tsa86gVHjPfL8TrXwcn/XM1Ovym92MRLsAr/6OoZ/LQvh2RdDqE9zSZ8vANxR5mdJmgRGDs1Bu7Ym+WyOw1lAid15PxuF7KqI49H5Aax4S9u+E6edYoalke2T+NEPaz+Mq5KiIeXbkvKakL4XhfHHoXac29Umb9bKO7xHno7Ir4l3nvcfTGD1+2HW3wqySKhtlHbiCSKTPnUTKYQqS5p1IwYvG37+7oY6TWH+MO2PFXDx+VacepIFhfmHeum1HkmekPLeBzGEMjgF6q0l+ex3p25L+Cd/8UsBjL7TBz3o1EHA2WdaWG7CgmOKRRTkHtrXs94rYe9+ST4Jch27ploPMmLob22YN6Mg5drXZheD39jH5vkwZUYg4/E9/4DJ+1JIh5JZmf4+/qn6bHUbeY5mY/CkFd+uYNmb+q0jPXwtfKkB/5rLzq8pqT2N8yOWzs/HFZelFr7ZO5/8oq8e6JBnTGcKfyh8VjTf7EyPBzTyd/ajSsHh61TvGutioVm/23n4WnjTEQwdmkOhlxTdzzKh13mNL7jOilFJxw5mTLndhWzimCIB116V/iG8Z3S2YuZUFxvaGr9eJBN432XSTS4UFTT+6LNCDH4r+Q75o0fYNG9RpCe8TZ84Jgft26l7MwP75uCByS440tsSvMnhJR++rfQVvzn6PuNZlce4a2we+l5o0W3bY60M7GvBH4ao3JMRh5pFfnrAvSz6tS/Jvsjxq54WjB2Vm9Zrm73zeST7qtnY/g4P3tvYDMcOMo5vJ2DNsmJ0aK89dPG+wNLlAdw6xQd/AFlBtzPMWDgrH51PtqT1+qzLfLYvMeO52YW4sr+1SRb/NuTMziYse6YwIyk4PHk07EonVr9UJJ8u1Jzw99L7AgveeL4wbSk4pr+Nc92LLIOXufv2tiEYTLAaQMLw0415E9CrhxnzZxYwOay6LRcsYUm3gf3sLIubYIW/BALpn1WnCy6WKJvA+krTJ+exzrS6T1nWNSUNCYeT2FQelRfIbN6S0FRabgzel+FZxtv/4sAN1zpRVGhMiOJbIG1nNZGnnw/g1ZVRuOuNu+VcapdTwPndTSibmIfTWT3EalFvelaLcRh/IIlFLwfxwishVqBK6JKjcLGR6NWD7BhxtQMX9NB3E7XG2Lw1gsXsWv6zJorv9uh76+02PrqzYvgQu3zCkdWqPfS1CDE4vGjEax+bt0blxTJbtsfklVl19en9PJ+UwhNQfHXXL88x4/JL7Tie9SX4ITJNDS8Y8sNxP91yKL3NJ+5UVsVRtU9SlcTicp9YakJnVgro0dWESy+0o1NHs7w7cabNYYsRoyH85h2oibMRjCSPYvjRk3zxTHWNhICf3Vx2RTb26cln1cqStiJKO1rkw+U6MDGObWPWNCPLKPi1uOsTOHAwiWr2p3J3DBVVMez7XkKdJylnPnkTyh82L/8f20Zk+RUTfsGuqdMJZlY8FOUCosWi7zW1SDEI46HlA4QiJAahCIlBKMLFqARBNECCVC4KgrAcBNEANtgtF6WktAIE0RAJZaKjtHotixqzQBDgKXVpFnOiUu582pK2Mh4+QLRqBNa3sCUjZfxrWQyhtNJjk2x9KHK0XniksEmRPkKpR55//pM8aqiipBP733tYBOnGeqfdQPycqWRCLJdEYbmjQ/W6ht/4H9BuckA7uyHZAAAAAElFTkSuQmCC"},e106:function(e,t,a){"use strict";a("4ef0")},e7a7:function(e,t,a){e.exports=a.p+"img/Rectangle-ps.4e6ec1e9.png"},f555:function(e,t,a){e.exports=a.p+"img/Rectangle-scrum.afadea04.png"},f837:function(e,t,a){e.exports=a.p+"img/Rectangle-vue.26138dde.png"}});
//# sourceMappingURL=app.5fa504ef.js.map