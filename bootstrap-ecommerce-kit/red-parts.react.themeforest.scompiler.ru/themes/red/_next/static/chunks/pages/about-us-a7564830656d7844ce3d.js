_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"+oNx":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n("7eUB"),o=n("J/yf");function i(){return Object(r.useContext)(o.a)}function s(){return Object(r.useContext)(o.b)}function c(){var e=i();return Object(r.useMemo)((function(){return Object(a.a)().find((function(t){return t.locale===e}))}),[e])}function u(){return c().direction}},"+vqc":function(e,t,n){var r={"./ar.json":["V3Aw",104],"./en.json":["lWpT",105],"./ru.json":["AMPI",106]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id="+vqc",e.exports=a},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eUB":function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return w}));var r=n("rePB"),a=n("o0o1"),o=n.n(a),i=n("HaE+"),s=n("fkzy"),c="en",u=[{locale:"en",code:"en",name:"English",icon:"/images/languages/language-1.png",direction:"ltr"},{locale:"ru",code:"ru",name:"Russian",icon:"/images/languages/language-2.png",direction:"ltr"},{locale:"ar",code:"ar",name:"RTL",icon:"/images/languages/language-3.png",direction:"rtl"}];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(){return c}function m(){return u}function p(){var e=m().find((function(e){return e.locale===d()}));if(!e)throw new Error("Default language not found.");return e}function v(e){return m().find((function(t){return new RegExp("^\\/".concat(t.locale,"(\\/|$)")).test(e)}))||null}function b(e){return m().find((function(t){return t.locale===e}))||null}function h(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(s.a)("/i18n/".concat(t,".json"))).then((function(e){return e.json()})));case 2:return e.next=4,n("+vqc")("./".concat(t,".json"));case 4:return e.abrupt("return",e.sent.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t===d()?Promise.resolve({}):h(d()),r=h(t),e.t0=f,e.t1=f,e.t2={},e.next=7,n;case 7:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=11,r;case 11:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){for(var t=m(),n=0;n<t.length;n+=1){var r=t[n];if(new RegExp("^\\/".concat(r.locale,"(\\/|$)")).test(e))return e.substr(r.locale.length+1)}return e}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,c=d.length;s<c;s++){var u=d[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var v=p;t.default=v},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("a3WO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("zLVn");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return a}))},ISme:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),s=n("fkzy"),c=i.a.createElement,u=i.a.forwardRef((function(e,t){var n=e.src,i=Object(a.a)(e,["src"]),u=Object(o.useMemo)((function(){return n?Object(s.a)(n):n}),[n]);return c("img",Object(r.a)({alt:""},i,{src:u,ref:t}))}));t.a=u},"J/yf":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=a.a.createContext(""),i=a.a.createContext((function(){}))},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");var a=n("BsWD");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Kf4p:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),s=a.a.createElement;t.a=function(e){var t=e.value,n=e.className,r=i()("rating",n);return s("div",{className:r},s("div",{className:"rating__body"},[1,2,3,4,5].map((function(e){var n=i()("rating__star",{"rating__star--active":t>=e});return s("div",{key:e,className:n})}))))}},N5jx:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("ISme"),i=n("IKmv"),s=n("Kf4p"),c=[{name:"Jessica Moore",position:"CEO Meblya",avatar:"/images/testimonials/testimonial-1.jpg",rating:4,review:"This division is not obsolete but has changed. Natural philosophy has split into the various natural sciences, especially astronomy, and cosmology. Moral philosophy has birthed the social sciences, but still includes value theory."},{name:"Pete Bridges",position:"Truck driver",avatar:"/images/testimonials/testimonial-2.jpg",rating:5,review:"Philosophical questions can be grouped into categories. These groupings allow philosophers. The groupings also make philosophy easier for students to approach."},{name:"Jeff Kowalski",position:"CEO Stroyka",avatar:"/images/testimonials/testimonial-3.jpg",rating:4,review:"The ideas conceived by a society have profound repercussions on what actions the society performs. Philosophy yields applications such as those in ethics \u2013 applied ethics in particular \u2013 and political philosophy."}],u=a.a.createElement,l={dots:!0,arrows:!1,infinite:!0,speed:400,slidesToShow:1,slidesToScroll:1};var f=function(){return u("div",{className:"block block-reviews"},u("div",{className:"container"},u("div",{className:"block-reviews__title"},"Testimonials"),u("div",{className:"block-reviews__subtitle"},"During our work we have accumulated",u("br",null),"hundreds of positive reviews."),u("div",{className:"block-reviews__list"},u(i.a,l,c.map((function(e,t){return u("div",{key:t,className:"block-reviews__item"},u("div",{className:"block-reviews__item-avatar"},u(o.a,{src:e.avatar})),u("div",{className:"block-reviews__item-content"},u("div",{className:"block-reviews__item-text"},e.review),u("div",{className:"block-reviews__item-meta"},u("div",{className:"block-reviews__item-rating"},u(s.a,{value:e.rating})),u("div",{className:"block-reviews__item-author"},"".concat(e.name,", ").concat(e.position)))))}))))))},d=n("gOg4"),m=[{name:"Michael Russo",position:"Chief Executive Officer",avatar:"/images/teammates/teammate1.jpg"},{name:"Samantha Smith",position:"Account Manager",avatar:"/images/teammates/teammate2.jpg"},{name:"Anthony Harris",position:"Finance Director",avatar:"/images/teammates/teammate3.jpg"},{name:"Katherine Miller",position:"Marketing Officer",avatar:"/images/teammates/teammate4.jpg"},{name:"Boris Gilmore",position:"Engineer",avatar:"/images/teammates/teammate5.jpg"}],p=a.a.createElement,v={dots:!0,arrows:!1,infinite:!0,speed:400,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1199,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:439,settings:{slidesToShow:1,slidesToScroll:1}}]};var b=function(){return p("div",{className:"block block-teammates"},p("div",{className:"container container--max--xl"},p("div",{className:"block-teammates__title"},"Professional Team"),p("div",{className:"block-teammates__subtitle"},"Meet this is our professional team."),p("div",{className:"block-teammates__list"},p(i.a,v,m.map((function(e,t){return p("div",{key:t,className:"block-teammates__item teammate"},p("div",{className:"teammate__avatar"},p(o.a,{src:e.avatar})),p("div",{className:"teammate__info"},p("div",{className:"teammate__name"},e.name),p("div",{className:"teammate__position"},e.position)))}))))))},h=n("PXqZ"),y=n("P5m/"),g=n("fkzy"),_=a.a.createElement;t.default=function(){return _(a.a.Fragment,null,_(y.a,null,"About Us"),_("div",{className:"about"},_("div",{className:"about__body"},_("div",{className:"about__image"},_("div",{className:"about__image-bg",style:{backgroundImage:"url(".concat(Object(g.a)("/images/about.jpg"),")")}}),_(h.a,{className:"about__image-decor",type:"bottom"})),_("div",{className:"about__card"},_("div",{className:"about__card-title"},"About Us"),_("div",{className:"about__card-text"},"RedParts is an international company with 30 years of history selling spare parts for cars, trucks and motorcycles. During our work we managed to create a unique service for the sale and delivery of spare parts around the world."),_("div",{className:"about__card-author"},"Ryan Ford, CEO RedParts"),_("div",{className:"about__card-signature"},_(o.a,{src:"/images/signature.jpg",width:"160",height:"55"}))),_("div",{className:"about__indicators"},_("div",{className:"about__indicators-body"},_("div",{className:"about__indicators-item"},_("div",{className:"about__indicators-item-value"},"350"),_("div",{className:"about__indicators-item-title"},"Stores around the world")),_("div",{className:"about__indicators-item"},_("div",{className:"about__indicators-item-value"},"80 000"),_("div",{className:"about__indicators-item-title"},"Original auto parts")),_("div",{className:"about__indicators-item"},_("div",{className:"about__indicators-item-value"},"5 000"),_("div",{className:"about__indicators-item-title"},"Satisfied customers")))))),_(d.a,{layout:"divider-xl"}),_(b,null),_(d.a,{layout:"divider-xl"}),_(f,null),_(d.a,{layout:"before-footer"}))}},"P5m/":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),s=a.a.createElement;t.a=function(e){var t=e.children||"";return s(i.a,null,s("title",null,t,t?" \u2014 ":"","RedParts"))}},PXqZ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),s=a.a.createElement;t.a=function(e){var t=e.type,n=e.className,r=i()("decor","decor--type--".concat(t),n);return s("div",{className:r},s("div",{className:"decor__body"},s("div",{className:"decor__start"}),s("div",{className:"decor__end"}),s("div",{className:"decor__center"})))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=n("qXWd"),s=n("48fX"),c=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1,m=function(e){s(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,d&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=m},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},fkzy:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return c}));var r=n("KQm4");function a(e){return/^\/([^/]|$)/.test(e)?"".concat("/themes/red").concat(e):e}function o(e){return e?[].concat(Object(r.a)(o(e.parent)),[e]):[]}function i(e){return e.parent?[].concat(Object(r.a)(i(e.parent)),[e.parent]):[]}function s(e){return!!Array.isArray(e)&&!e.map((function(e){return"string"!==typeof e})).includes(!0)}function c(e){return!!Array.isArray(e)&&!e.map((function(e){return"number"!==typeof e})).includes(!0)}},gOg4:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),s=n("TSYQ"),c=n.n(s),u=i.a.createElement;t.a=i.a.memo((function(e){var t=e.layout,n=e.className,o=Object(a.a)(e,["layout","className"]),i=c()("block-space","block-space--layout--".concat(t),n);return u("div",Object(r.a)({className:i},o))}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},ndQk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return n("N5jx")}])},o0o1:function(e,t,n){e.exports=n("ls82")},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["ndQk",0,1,2,13]]]);