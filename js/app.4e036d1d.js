(function(e){function t(t){for(var r,a,o=t[0],i=t[1],u=t[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var b=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"287b":function(e,t,n){"use strict";n("c092")},"48b9":function(e,t,n){},"6f2a":function(e,t,n){},"76e1":function(e,t,n){"use strict";n("48b9")},a649:function(e,t,n){"use strict";n("d258")},bac0:function(e,t,n){},c092:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,s,a){var o=Object(r["p"])("HomePage");return Object(r["i"])(),Object(r["c"])(o)}var s=n("d4ec"),a=n("262e"),o=n("2caf"),i=n("9ab4"),u=n("ce1f"),b=n("5502"),d=n("d16a"),f=n.n(d),l={id:"chat"},g=Object(r["f"])("div",{id:"senderInfo",class:"foregr onTop"},[Object(r["f"])("div",{class:"circularImage"},[Object(r["f"])("img",{src:f.a,alt:"Jerry"})]),Object(r["f"])("div",{id:"nameText"},"Jerry")],-1);function p(e,t,n,c,s,a){var o=Object(r["p"])("MessageComposer"),i=Object(r["p"])("ChatHistory");return Object(r["i"])(),Object(r["e"])("div",l,[g,Object(r["g"])(o),Object(r["g"])(i,{class:"background"})])}var O={id:"chat_history"},j={key:0};function m(e,t,n,c,s,a){var o=Object(r["p"])("MessageWrapper"),i=Object(r["p"])("Loading");return Object(r["i"])(),Object(r["e"])("div",O,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["o"])(e.messages,(function(e){return Object(r["i"])(),Object(r["e"])("div",{key:e.id,ref:"messages"},[Object(r["g"])(o,{msg:e.text,sent:"me"===e.sender,image:e.image},null,8,["msg","sent","image"])],512)})),128)),e.writing?(Object(r["i"])(),Object(r["e"])("div",j,[Object(r["g"])(i)])):Object(r["d"])("",!0)])}var v,h=n("b85c"),y=n("1da1"),w=(n("96cf"),n("fb6a"),n("d3b7"),n("ade3")),S=n("2909"),x=(n("a4d3"),n("e01a"),n("99af"),n("d81d"),n("e9c4"),n("25f0"),function e(t){var n=t.text,r=t.sender,c=t.image,a=t.delay,o=t.customKeyboard,i=t.options;Object(s["a"])(this,e),this.id=Math.random().toString(16).slice(2),this.text=n,this.sender=r,this.image=c,this.customKeyboard=o,this.delay=a,this.options=i}),_=Symbol(),E="ADD_MESSAGE",k="SEND_MESSAGE_REQ",I="SEND_MESSAGE_RES",M="SEND_MESSAGE_ERR",R="CREATE_SESSION_REQ",H="CREATE_SESSION_RES",T="CREATE_SESSION_ERR",C=function(e){return JSON.parse(localStorage.getItem(e))},N=function(e){return localStorage.getItem(e)},P=Object(b["a"])({state:{messageHistory:C("messages")?Object(S["a"])(C("messages")):[],sessionId:N("sessionId")},mutations:(v={},Object(w["a"])(v,E,(function(e,t){e.messageHistory=[].concat(Object(S["a"])(e.messageHistory),[t])})),Object(w["a"])(v,k,(function(e,t){})),Object(w["a"])(v,I,(function(e,t){console.log(t),e.messageHistory=[].concat(Object(S["a"])(e.messageHistory),Object(S["a"])(t))})),Object(w["a"])(v,M,(function(e,t){console.error(t)})),Object(w["a"])(v,R,(function(e,t){console.log(t)})),Object(w["a"])(v,H,(function(e,t){e.sessionId=t})),Object(w["a"])(v,T,(function(e,t){console.error(t)})),v),actions:{createSession:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,c,s,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,c=e.dispatch,{"Content-Type":"application/json"},s={method:"POST",redirect:"follow"},n(R,s),t.prev=4,t.next=7,fetch("https://i9y86y0v1l.execute-api.eu-west-2.amazonaws.com/prod/createSession",s);case 7:return t.next=9,t.sent.json();case 9:a=t.sent,o=a.sessionId,c("saveStringOnLocal",{strKey:"sessionId",str:o}),n(H,o),i=a.messages.map((function(e){return new x({text:e.text,sender:"other",image:e.image,delay:e.delay,customKeyboard:e.customKeyboard,options:e.options})})),c("saveObjOnLocal",{objKey:"messages",obj:[].concat(Object(S["a"])(r.messageHistory),Object(S["a"])(i))}),n(I,i),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](4),n(T,t.t0);case 21:case"end":return t.stop()}}),t,null,[[4,18]])})))()},sendMessage:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,c,s,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=e.state,s=e.dispatch,null!==c.sessionId){n.next=3;break}throw new Error("sessionId null!");case 3:return r(E,{text:t,sender:"me"}),{"Content-Type":"application/json"},a={method:"POST",body:JSON.stringify({sessionId:c.sessionId,message:t}),redirect:"follow"},r(k,a),n.prev=7,n.next=10,fetch("https://i9y86y0v1l.execute-api.eu-west-2.amazonaws.com/prod/elaborateMessage",a);case 10:return n.next=12,n.sent.json();case 12:o=n.sent,i=o.messages.map((function(e){return new x({text:e.text,sender:"other",image:e.image,delay:e.delay,customKeyboard:e.customKeyboard,options:e.options})})),s("saveObjOnLocal",{objKey:"messages",obj:[].concat(Object(S["a"])(c.messageHistory),Object(S["a"])(i))}),r(I,i),n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](7),r(M,n.t0);case 21:case"end":return n.stop()}}),n,null,[[7,18]])})))()},saveObjOnLocal:function(e,t){var n=t.objKey,r=t.obj;localStorage.setItem(n,JSON.stringify(r))},saveStringOnLocal:function(e,t){var n=t.strKey,r=t.str;localStorage.setItem(n,r)}},modules:{}}),A=n("5c40"),K={key:0,class:"msg_container sent_msg_container"},F={class:"msg_text_container"},L={key:1,class:"msg_container received_msg_container"},B={key:0,class:"image"},J=["src"],D={class:"msg_text_container"};function q(e,t,n,c,s,a){return e.sent?(Object(r["i"])(),Object(r["e"])("div",K,[Object(r["f"])("div",F,Object(r["q"])(e.msg),1)])):(Object(r["i"])(),Object(r["e"])("div",L,[e.image?(Object(r["i"])(),Object(r["e"])("div",B,[Object(r["f"])("img",{src:e.image},null,8,J)])):Object(r["d"])("",!0),Object(r["f"])("div",D,Object(r["q"])(e.msg),1)]))}var z=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.sent=!1,e}return n}(u["b"]);z=Object(i["a"])([Object(u["a"])({props:{msg:String,image:String,sent:Boolean}})],z);var G=z,$=(n("db16"),n("6b0d")),Q=n.n($);const W=Q()(G,[["render",q],["__scopeId","data-v-2ae6421b"]]);var V=W,U=function(e){return Object(r["l"])("data-v-6b6cef84"),e=e(),Object(r["j"])(),e},X={class:"loading"},Y=U((function(){return Object(r["f"])("div",{class:"dot-pulse"},null,-1)})),Z=[Y];function ee(e,t,n,c,s,a){return Object(r["i"])(),Object(r["e"])("div",X,Z)}var te=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);n("daf5");const ne=Q()(te,[["render",ee],["__scopeId","data-v-6b6cef84"]]);var re=ne,ce=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);ce=Object(i["a"])([Object(u["a"])({components:{MessageWrapper:V,Loading:re},watch:{"$store.state.messageHistory":function(e,t){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function r(){var c,s,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:c=e.slice(-(e.length-t.length)),s=Object(h["a"])(c),r.prev=2,s.s();case 4:if((a=s.n()).done){r.next=20;break}if(o=a.value,console.log(o),!o.delay){r.next=16;break}return n.writing=!0,Object(A["s"])((function(){n.scrollOnBottom()})),r.next=12,ae(o.delay);case 12:n.writing=!1,n.messages.push(o),r.next=17;break;case 16:n.messages.push(o);case 17:Object(A["s"])((function(){n.scrollOnBottom()}));case 18:r.next=4;break;case 20:r.next=25;break;case 22:r.prev=22,r.t0=r["catch"](2),s.e(r.t0);case 25:return r.prev=25,s.f(),r.finish(25);case 28:case"end":return r.stop()}}),r,null,[[2,22,25,28]])})))()}},data:function(){var e=Object(b["b"])(_).state.messageHistory,t=!1;return{messages:e,writing:t}},methods:{scrollOnBottom:function(){var e=this.$el;e.children[e.childElementCount-1].scrollIntoView({behavior:"smooth"})}}})],ce);var se=ce;function ae(e){return new Promise((function(t,n){setTimeout((function(){t()}),e)}))}n("a649");const oe=Q()(se,[["render",m],["__scopeId","data-v-6e7de698"]]);var ie=oe,ue=function(e){return Object(r["l"])("data-v-3611bcc3"),e=e(),Object(r["j"])(),e},be={id:"msg_composer",class:"foregr onBottom"},de=ue((function(){return Object(r["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[Object(r["f"])("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(r["f"])("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})],-1)})),fe=[de];function le(e,t,n,c,s,a){return Object(r["i"])(),Object(r["e"])("div",be,[Object(r["f"])("div",{onInput:t[0]||(t[0]=function(){return e.updateMsg&&e.updateMsg.apply(e,arguments)}),"data-ph":"Scrivi messaggio",id:"send-msg",contenteditable:"true"},Object(r["q"])(e.msg),33),Object(r["f"])("div",{id:"send-btn",onClick:t[1]||(t[1]=function(t){return e.sendMessage(e.msg)})},fe)])}n("498a");var ge=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);ge=Object(i["a"])([Object(u["a"])({data:function(){return{msg:""}},methods:{updateMsg:function(e){this.msg=e.target.innerText},sendMessage:function(e){var t=e.trim();t.length>0&&(this.msg="",this.$store.dispatch("sendMessage",t))}}})],ge);var pe=ge;n("287b");const Oe=Q()(pe,[["render",le],["__scopeId","data-v-3611bcc3"]]);var je=Oe,me=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);me=Object(i["a"])([Object(u["a"])({components:{ChatHistory:ie,MessageComposer:je}})],me);var ve=me;n("ffeb");const he=Q()(ve,[["render",p]]);var ye=he,we=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);we=Object(i["a"])([Object(u["a"])({components:{HomePage:ye},mounted:function(){var e=Object(b["b"])(_);null===e.state.sessionId&&e.dispatch("createSession")}})],we);var Se=we;n("76e1");const xe=Q()(Se,[["render",c]]);var _e=xe,Ee=n("9483");Object(Ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(r["b"])(_e).use(P,_).mount("#app")},d16a:function(e,t,n){e.exports=n.p+"img/jerry.fed35c22.png"},d258:function(e,t,n){},daf5:function(e,t,n){"use strict";n("f355")},db16:function(e,t,n){"use strict";n("6f2a")},f355:function(e,t,n){},ffeb:function(e,t,n){"use strict";n("bac0")}});
//# sourceMappingURL=app.4e036d1d.js.map