(function(){"use strict";var e={810:function(e,t,a){var n=a(9242),o=a(3396);const r={id:"app",class:"container"};function s(e,t,a,n,s,i){const c=(0,o.up)("carrousel-header"),l=(0,o.up)("nav-bar"),d=(0,o.up)("hero-products"),u=(0,o.up)("categories-products"),p=(0,o.up)("footer-vue");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(c),(0,o.Wm)(l),(0,o.Wm)(d),(0,o.Wm)(u),(0,o.Wm)(p)])}const i=e=>((0,o.dD)("data-v-1b27a339"),e=e(),(0,o.Cn)(),e),c={class:"navbar navbar-expand-lg bg-body-tertiary"},l={class:"container-fluid d-flex justify-content-between align-items-center"},d=i((()=>(0,o._)("a",{class:"navbar-brand",href:"#"},[(0,o._)("span",{id:"logo"},"-A-")],-1))),u=i((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1))),p={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},v={class:"navbar-nav"},f={class:"nav-item"},g={class:"nav-item"},m={class:"nav-item"};function h(e,t,a,n,r,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",l,[d,u,(0,o._)("div",p,[(0,o._)("ul",v,[(0,o._)("li",f,[(0,o.Wm)(i,{class:"nav-link",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Inicio")])),_:1})]),(0,o._)("li",g,[(0,o.Wm)(i,{class:"nav-link",to:"/productos"},{default:(0,o.w5)((()=>[(0,o.Uk)("Productos")])),_:1})]),(0,o._)("li",m,[(0,o.Wm)(i,{class:"nav-link",to:"/carro"},{default:(0,o.w5)((()=>[(0,o.Uk)("Carro")])),_:1})])])])])])}var b={name:"NavBar"},_=a(89);const w=(0,_.Z)(b,[["render",h],["__scopeId","data-v-1b27a339"]]);var y=w,k=a(7139);const x=e=>((0,o.dD)("data-v-39dac542"),e=e(),(0,o.Cn)(),e),j={class:"carrousel-header"},C=x((()=>(0,o._)("div",{class:"logo-container"},[(0,o._)("img",{class:"logo",src:"https://i.postimg.cc/pyNt3yWf/logo-con-fondo.png",alt:"almen-deco logo"})],-1))),P={id:"carouselExampleAutoplaying",class:"carousel slide","data-bs-ride":"carousel"},D={class:"carousel-inner"},O=["src"],S={class:"carousel-caption d-none d-md-block"},W=(0,o.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" data-v-39dac542><span class="carousel-control-prev-icon" aria-hidden="true" data-v-39dac542></span><span class="visually-hidden" data-v-39dac542>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" data-v-39dac542><span class="carousel-control-next-icon" aria-hidden="true" data-v-39dac542></span><span class="visually-hidden" data-v-39dac542>Next</span></button>',2);function T(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",j,[C,(0,o._)("div",P,[(0,o._)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.items,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:(0,k.C_)({"carousel-item":!0,active:0===t})},[(0,o._)("img",{src:e.link,class:"d-block w-100",alt:"Slide"},null,8,O),(0,o._)("div",S,[(0,o._)("h5",null,(0,k.zw)(e.text),1),(0,o._)("p",null,(0,k.zw)(e.description),1)])],2)))),128))]),W])])}var N={name:"CarrouselHeader",data(){return{items:[{id:1,text:"Primera diapositiva",description:"Some representative placeholder content for the first slide of the carousel.",link:"https://i.postimg.cc/pdM5TRkm/image-1-1200.jpg"},{id:2,text:"Segunda diapositiva",description:"Some representative placeholder content for the second slide of the carousel.",link:"https://i.postimg.cc/3RKyX1s7/image-2-1200.jpg"},{id:3,text:"Tercera diapositiva",description:"Some representative placeholder content for the third slide of the carousel.",link:"https://i.postimg.cc/CKCBnX6m/image-3-1200.jpg"}]}}};const z=(0,_.Z)(N,[["render",T],["__scopeId","data-v-39dac542"]]);var A=z;const I={class:"hero-products"},J=(0,o.uE)('<div class="background-overlay"><div class="d-flex align-items-center overflow-hidden p-3 p-md-5 m-md-3 text-center" style="height:100vh;padding:20px;"><div class="d-flex flex-column align-items-center col-md-6 mx-auto my-5 bg-black bg-gradient" style="--bs-bg-opacity:.5;"><h1 class="p-2 fw-bold text-light">Designed for engineers</h1><h3 class="p-2 fw-normal mb-3 text-light">Build anything you want with Aperture</h3><div class="d-flex gap-3 justify-content-center lead fw-normal"><a class="icon-link" style="padding:20px;" href="#"> Learn more <svg class="bi"><use xlink:href="#chevron-right"></use></svg></a><a class="icon-link" href="#"> Buy <svg class="bi"><use xlink:href="#chevron-right"></use></svg></a></div></div></div></div>',1),B=[J];function E(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",I,B)}var H={name:"HeroProducts",data(){return{heroimage:"https://i.postimg.cc/fLrsjB1g/image-4-1200.jpg"}}};const X=(0,_.Z)(H,[["render",E]]);var Z=X;const F={class:"categories-products d-flex flex-wrap justify-content-around"},M=["src"],U={class:"card-body"},G={class:"card-title"},K={class:"card-text"},L=["href"];function R(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.products,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"card mb-3",key:t,style:{width:"18rem"}},[(0,o._)("img",{src:e.image,class:"card-img-top",alt:"Product Image"},null,8,M),(0,o._)("div",U,[(0,o._)("h5",G,(0,k.zw)(e.title),1),(0,o._)("p",K,(0,k.zw)(e.description),1),(0,o._)("a",{href:e.link,class:"btn btn-primary"},"Go somewhere",8,L)])])))),128))])}var V={name:"CategoriesProducts",data(){return{products:[{title:"Product 1",description:"Reciclados.",image:"https://i.postimg.cc/XJJ3CT1C/pinos.jpg",link:"#"},{title:"Product 2",description:"Tejidos.",image:"https://i.postimg.cc/XJJ3CT1C/pinos.jpg",link:"#"},{title:"Product 3",description:"Madera.",image:"https://i.postimg.cc/XJJ3CT1C/pinos.jpg",link:"#"},{title:"Product 4",description:"Fumada cosmica.",image:"https://i.postimg.cc/XJJ3CT1C/pinos.jpg",link:"#"}]}}};const Y=(0,_.Z)(V,[["render",R],["__scopeId","data-v-2d535f00"]]);var q=Y;const Q=e=>((0,o.dD)("data-v-7f21a4f6"),e=e(),(0,o.Cn)(),e),$={class:"footer-vue"},ee=Q((()=>(0,o._)("div",{class:"footer-section logo"},[(0,o._)("p",null,"-A-")],-1))),te=Q((()=>(0,o._)("div",{class:"footer-section"},[(0,o._)("p",null,"© 2023 Almendra Decoraciones - Nogolí, San Luis")],-1))),ae={class:"footer-section social"},ne=Q((()=>(0,o._)("h2",null,"SÍGUENOS",-1))),oe={class:"social-icons"},re={href:"https://www.facebook.com",target:"_blank"},se={href:"https://twitter.com",target:"_blank"},ie={href:"https://www.instagram.com",target:"_blank"},ce={href:"https://wa.me/your-phonenumber",target:"_blank"};function le(e,t,a,n,r,s){const i=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("footer",null,[ee,te,(0,o._)("div",ae,[ne,(0,o._)("div",oe,[(0,o._)("a",re,[(0,o.Wm)(i,{icon:["fab","facebook"],size:"1x"})]),(0,o._)("a",se,[(0,o.Wm)(i,{icon:["fab","twitter"],size:"1x"})]),(0,o._)("a",ie,[(0,o.Wm)(i,{icon:["fab","instagram"],size:"1x"})]),(0,o._)("a",ce,[(0,o.Wm)(i,{icon:["fab","whatsapp"],size:"1x"})])])])])])}var de=a(312),ue=a(1787),pe=a(5725);ue.vI.add(pe.neY,pe.mdU,pe.Zzi,pe.VHX);var ve={name:"FooterVue",components:{FontAwesomeIcon:de.GN}};const fe=(0,_.Z)(ve,[["render",le],["__scopeId","data-v-7f21a4f6"]]);var ge=fe,me={name:"App",components:{CarrouselHeader:A,NavBar:y,HeroProducts:Z,CategoriesProducts:q,FooterVue:ge}};const he=(0,_.Z)(me,[["render",s]]);var be=he,_e=(a(2166),a(3597));ue.vI.add(_e.BC0);const we=(0,n.ri)(be);we.component("font-awesome-icon",de.GN),we.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(n);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunkalmen_deco"]=self["webpackChunkalmen_deco"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(810)}));n=a.O(n)})();
//# sourceMappingURL=app.d5a5964c.js.map