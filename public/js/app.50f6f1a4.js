(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);m&&m(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},o={app:0},n={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2305fcb8"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"76ae783d"}[t]+".css",n=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===n))return e()}var v=document.getElementsByTagName("style");for(s=0;s<v.length;s++){c=v[s],u=c.getAttribute("data-href");if(u===r||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],m.parentNode.removeChild(m),a(i)},m.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var v=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",v.name="ChunkLoadError",v.type=r,v.request=o,a[1](v)}n[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var v=0;v<c.length;v++)e(c[v]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e4b":function(t,e,a){t.exports=a.p+"img/servicios_contratista.4ec96971.png"},"3b59":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Menu"),a("router-view",[a("v-content")],1),a("Footer")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{dark:""}},[r("v-toolbar",[t.$vuetify.breakpoint.xsOnly?r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}):t._e(),r("v-toolbar-title",{class:{"":t.$vuetify.breakpoint.smAndDown,"ml-6":t.$vuetify.breakpoint.mdAndUp}},[t._v(" Iservi ")]),r("v-spacer"),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-capitalize mr-2 v-btn--active",attrs:{dark:""}},[r("router-link",{staticClass:"flm",attrs:{to:"/"}},[t._v("Home")])],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-capitalize mr-2 ",attrs:{dark:""}},[r("router-link",{staticClass:"flm",attrs:{to:"/servicios"}},[t._v("Servicios")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-center mr-2"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{dark:""}},"v-btn",o,!1),a),[r("router-link",{staticClass:"flm",attrs:{to:"/Noticias"}},[t._v("Noticias")])],1)]}}])})],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-capitalize mr-2",attrs:{dark:""}},[r("router-link",{staticClass:"flm",attrs:{to:"/Equipo"}},[t._v("Equipo")])],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-capitalize mr-14",attrs:{dark:""}},[r("router-link",{staticClass:"flm",attrs:{to:"/Nosotros"}},[t._v("Nosotros")])],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-capitalize mr-2",attrs:{dark:""}},[r("router-link",{staticClass:"flm",attrs:{to:"/tablacrud"}},[t._v("Registro Tabla")])],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgOnly,expression:"$vuetify.breakpoint.lgOnly"}],staticClass:"text-capitalize mr-2",attrs:{dark:""}},[r("router-link",{staticClass:"flm",attrs:{to:"/añadirservicio"}},[t._v("Añadir Servicio")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",width:"100%",height:"auto",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("mdi-home")])],1),r("v-list-item-title",[r("router-link",{staticClass:"flm",attrs:{to:"/"}},[t._v("Home")])],1)],1),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("mdi-account-multiple")])],1),r("v-list-item-title",[r("router-link",{staticClass:"flm",attrs:{to:"/Noticias"}},[t._v("Noticias")])],1)],1),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("mdi-format-list-bulleted")])],1),r("v-list-item-title",[r("router-link",{staticClass:"flm",attrs:{to:"/Equipo"}},[t._v("Equipo")])],1)],1),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("mdi-earth")])],1),r("v-list-item-title",[r("router-link",{staticClass:"flm",attrs:{to:"/Nosotros"}},[t._v("Nosotros")])],1)],1),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("mdi-earth")])],1),r("v-list-item-title",[r("router-link",{staticClass:"flm",attrs:{to:"/Registro"}},[t._v("Añadir")])],1)],1),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("mdi-earth")])],1),r("v-list-item-title",[r("router-link",{staticClass:"flm",attrs:{to:"/tablacrud"}},[t._v("RegistroUsuario")])],1)],1)],1)],1)],1),r("v-img",{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-height":"300","max-width":"100%",src:a("84d8")}})],1)},s=[],l={name:"Menu",data:function(){return{}},methods:{menuItems:function(){return this.menu}}},c=l,u=(a("a4e0"),a("2877")),v=a("6544"),m=a.n(v),d=a("5bc1"),p=a("8336"),f=a("b0af"),b=a("132d"),h=a("adda"),g=a("8860"),w=a("da13"),y=a("1baa"),_=a("34c3"),C=a("5d23"),k=a("e449"),x=a("f774"),S=a("2fa4"),O=a("71d9"),V=a("2a7f"),N=Object(u["a"])(c,i,s,!1,null,null,null),$=N.exports;m()(N,{VAppBarNavIcon:d["a"],VBtn:p["a"],VCard:f["a"],VIcon:b["a"],VImg:h["a"],VList:g["a"],VListItem:w["a"],VListItemGroup:y["a"],VListItemIcon:_["a"],VListItemTitle:C["b"],VMenu:k["a"],VNavigationDrawer:x["a"],VSpacer:S["a"],VToolbar:O["a"],VToolbarTitle:V["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pt-5 mt-10",attrs:{dark:""}},[a("v-btn",{attrs:{variant:"outline-primary"},on:{click:t.cerrarSesion}},[t._v("Cerrar sesion")]),a("v-container",[a("div",{staticClass:"text-center"},[a("p",[t._v(" Iservi © "),a("span",{attrs:{id:"año"}}),t._v(". Todos los Derechos Reservados. ")])])])],1)},E=[],j={name:"Footer",methods:{"obtenerAño":function(){var t=(new Date).getFullYear();document.getElementById("año").innerHTML=t},cerrarSesion:function(){window.localStorage.removeItem("autenticacion"),window.localStorage.removeItem("rol"),this.$router.push({path:"/"})}},mounted:function(){this.obtenerAño()}},A=j,L=a("a523"),T=Object(u["a"])(A,I,E,!1,null,null,null),D=T.exports;m()(T,{VBtn:p["a"],VCard:f["a"],VContainer:L["a"]});var R=a("7c01"),U={name:"App",components:{Menu:$,Footer:D,ServiciosDesatacados:R["a"]},data:function(){return{}}},q=U,B=(a("5c0b"),a("7496")),H=a("a75b"),M=a("f6c4"),P=Object(u["a"])(q,o,n,!1,null,null,null),z=P.exports;m()(P,{VApp:B["a"],VContent:H["a"],VMain:M["a"]});a("d3b7"),a("3ca3"),a("ddb0");var F=a("8c4f"),W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("e4ec")}}),r("HelloWorld",{attrs:{msg:"Inicio de sesion"}}),r("v-btn",{staticClass:"ma-2",attrs:{color:"error"}},[r("router-link",{staticClass:"flm",attrs:{to:"/usuarionuevo"}},[t._v("Registrar Usuario")])],1),r("v-btn",{staticClass:"ma-2",attrs:{color:"error"}},[r("router-link",{staticClass:"flm",attrs:{to:"/clientenuevo"}},[t._v("Registrar Cliente")])],1)],1)},G=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),a("div",{staticClass:"container"},[t.show?a("b-form",{on:{submit:function(e){return e.preventDefault(),t.buscarUsuario()}}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Nombre de usuario","label-for":"input-1",description:"Ingrese el nombre de usuario"}},[a("b-form-input",{attrs:{id:"input-1",placeholder:"Debe ingresar el  nombre de usuario",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Contraseña","label-for":"input-2",description:"Ingrese la contraseña"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Debe ingresar la contraseña",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Acceder")])],1):t._e()],1)])},K=[],Y=(a("159b"),{name:"HelloWorld",data:function(){return{form:{username:"",password:""},show:!0,users:[]}},props:{msg:String},methods:{buscarUsuario:function(){var t=this;console.log("Se ejecuta la función buscar"),this.axios.get("get_all_customers").then((function(e){t.users=e.data,console.log(t.users),t.users.forEach((function(e,a){console.log(e.username),console.log(e.password),t.form.username===e.username?(console.log("Usuario si existe"),t.form.password===e.password&&(console.log("contraseña correcta"),window.localStorage.setItem("autenticacion","ok"),window.localStorage.setItem("rol","Cliente"),t.$router.push({path:"/servicios"}))):t.axios.get("get_all_employees").then((function(e){t.users=e.data,console.log(t.users),t.users.forEach((function(e,a){console.log(e.username),console.log(e.password),t.form.username===e.username&&(console.log("Usuario si existe"),t.form.password===e.password&&(console.log("contraseña correcta"),window.localStorage.setItem("autenticacion","ok"),t.$router.push({path:"/servicios"})))}))}))}))}))},beforeCreate:function(){console.log("Se inicia el BeforeCreate");var t=window.localStorage.getItem("autenticacion");console.log("Autenticacion esta "+t),"ok"==t&&"Cliente"!==rol&&(this.$router.push({path:"/servicios"},{path:"/Noticias"},{path:"/Equipo"},{path:"/Nosotros"},{path:"/Registro"},{path:"/Registro"}),console.log("Hay inciado un cliente"))}}}),Q=Y,X=(a("b6b1"),Object(u["a"])(Q,J,K,!1,null,"3607ab63",null)),Z=X.exports,tt={name:"Home",components:{HelloWorld:Z}},et=tt,at=Object(u["a"])(et,W,G,!1,null,null,null),rt=at.exports;m()(at,{VBtn:p["a"]}),r["default"].use(F["a"]);var ot=[{path:"/",name:"Home",component:rt},{path:"/usuarionuevo",name:"RegistrarUsuarioNuevo",component:function(){return a.e("about").then(a.bind(null,"c835"))}},{path:"/clientenuevo",name:"RegistroClienteNuevo",component:function(){return a.e("about").then(a.bind(null,"96c1"))}},{path:"/servicios",name:"Servicios",component:function(){return a.e("about").then(a.bind(null,"0f4c"))}},{path:"/Noticias",name:"Noticias",component:function(){return a.e("about").then(a.bind(null,"42a6"))}},{path:"/Equipo",name:"Equipo",component:function(){return a.e("about").then(a.bind(null,"b547"))}},{path:"/Nosotros",name:"Nosotros",component:function(){return a.e("about").then(a.bind(null,"5252"))}},{path:"/tablacrud",name:"TablaCRUD",component:function(){return a.e("about").then(a.bind(null,"b5c8"))}},{path:"/añadirservicio",name:"AñadirServicio",component:function(){return a.e("about").then(a.bind(null,"9d51"))}}],nt=new F["a"]({mode:"history",base:"/",routes:ot}),it=nt,st=a("2f62");r["default"].use(st["a"]);var lt=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=a("f309");r["default"].use(ct["a"]);var ut=new ct["a"]({}),vt=a("5f5b"),mt=a("bc3a"),dt=a.n(mt),pt=a("130e");a("f9e3"),a("2dd8");r["default"].use(pt["a"],dt.a),dt.a.defaults.baseURL="http://localhost:3000/api",r["default"].use(vt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:it,store:lt,vuetify:ut,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5dbb":function(t,e,a){t.exports=a.p+"img/servicios_valoracion.c35d9ae5.png"},"7c01":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-item-group",{staticClass:"mt-6"},[r("v-snackbar",{attrs:{timeout:-1,value:!0,absolute:"",color:"teal lighten-2",left:"",shaped:"",top:""}},[t._v(" FUNCIONALIDAD DE LOS SERVICIOS ")]),r("v-container",{attrs:{fluid:""}}),r("v-container"),r("v-container"),r("v-container",[r("v-row",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-img",{attrs:{src:a("abb3"),height:"200px"}}),r("v-card-title",{staticClass:"justify-center"},[t._v(" Usuarios ")]),r("v-card-subtitle",{staticClass:"alinearjustificado"},[t._v(" La plataforma iServi ofrece una variedad de servicios domesticos a los cuales los usuarios pueden acceder. ")]),r("v-btn",{staticClass:"ml-3 mb-3",attrs:{color:"teal lighten-2","text-color":"white"}},[t._v(" Leer más ... ")])],1),r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-img",{attrs:{src:a("5dbb"),height:"200px"}}),r("v-card-title",{staticClass:"justify-center"},[t._v(" Valoración ")]),r("v-card-subtitle",{staticClass:"alinearjustificado"},[t._v(" iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas. ")]),r("v-btn",{staticClass:"ml-3 mb-3",attrs:{color:"teal lighten-2","text-color":"white"}},[t._v(" Leer más ... ")])],1),r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-img",{attrs:{src:a("1e4b"),height:"200px"}}),r("v-card-title",{staticClass:"justify-center"},[t._v(" Contratista ")]),r("v-card-subtitle",{staticClass:"alinearjustificado"},[t._v(" iServi, da la opción de agregar los servicios que desea ofertar a nuestra comunidad de usuarios. ")]),r("v-btn",{staticClass:"ml-3 mb-3",attrs:{color:"teal lighten-2","text-color":"white"}},[t._v(" Leer más ... ")])],1)],1)],1)],1)},o=[],n={name:"Servicios"},i=n,s=(a("98c8"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),v=a("b0af"),m=a("99d9"),d=a("a523"),p=a("adda"),f=a("604c"),b=a("0fd9"),h=a("2db4"),g=Object(s["a"])(i,r,o,!1,null,null,null);e["a"]=g.exports;c()(g,{VBtn:u["a"],VCard:v["a"],VCardSubtitle:m["b"],VCardTitle:m["d"],VContainer:d["a"],VImg:p["a"],VItemGroup:f["b"],VRow:b["a"],VSnackbar:h["a"]})},"80bc":function(t,e,a){},"84d8":function(t,e,a){t.exports=a.p+"img/BannerOpt.f55feb67.gif"},"98c8":function(t,e,a){"use strict";a("80bc")},"9c0c":function(t,e,a){},a4e0:function(t,e,a){"use strict";a("faf7")},abb3:function(t,e,a){t.exports=a.p+"img/servicios_usuarios.c9cae569.png"},b6b1:function(t,e,a){"use strict";a("3b59")},e4ec:function(t,e,a){t.exports=a.p+"img/logoiServi.e712f3f9.png"},faf7:function(t,e,a){}});
//# sourceMappingURL=app.50f6f1a4.js.map