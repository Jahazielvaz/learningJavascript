webpackJsonp([61],{1395:function(e,t,r){"use strict";function a(e,t){Object(o.a)(e,".ud-component--smart-bar--app",c,t)}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"SmartBarApp",function(){return c}),t.default=a;var n=r(0),i=r.n(n),o=r(433),s=r(3724),c=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}return babelHelpers.inherits(t,e),t.prototype.render=function(){return i.a.createElement(s.a,null)},t}(n.Component)},1588:function(e,t,r){(function(t){function r(){return Object.assign?Object.assign:function(e,t,r,a){for(var n=1;n<arguments.length;n++)s(Object(arguments[n]),function(t,r){e[r]=t});return e}}function a(){function e(){}return Object.create?function(e,t,r,a){var n=o(arguments,1);return d.apply(this,[Object.create(e)].concat(n))}:function(t,r,a,n){var i=o(arguments,1);return e.prototype=t,d.apply(this,[new e].concat(i))}}function n(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function i(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function o(e,t){return Array.prototype.slice.call(e,t||0)}function s(e,t){l(e,function(e,r){return t(e,r),!1})}function c(e,t){var r=u(e)?[]:{};return l(e,function(e,a){return r[a]=t(e,a),!1}),r}function l(e,t){if(u(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var a in e)if(e.hasOwnProperty(a)&&t(e[a],a))return e[a]}function u(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function m(e){return e&&"[object Function]"==={}.toString.call(e)}function p(e){return e&&"[object Object]"==={}.toString.call(e)}var d=r(),b=a(),f=n(),h="undefined"!=typeof window?window:t;e.exports={assign:d,create:b,trim:f,bind:i,slice:o,each:s,map:c,pluck:l,isList:u,isFunction:m,isObject:p,Global:h}}).call(t,r(60))},1661:function(e,t,r){function a(e,t){var r={_seenPlugins:[],_namespacePrefix:"",_namespaceRegexp:null,_legalNamespace:/^[a-zA-Z0-9_\-]+$/,_storage:function(){if(!this.enabled)throw new Error("store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)");return this._storage.resolved},_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(e){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){function t(){if(r)return s(arguments,function(e,t){a[t]=e}),r.apply(n,a)}var a=i(arguments,0),n=this,o=[t].concat(a);return e.apply(n,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(t){r=e}return void 0!==r?r:t}},a=c(r,p);return s(e,function(e){a.addStorage(e)}),s(t,function(e){a.addPlugin(e)}),a}var n=r(1588),i=n.slice,o=n.pluck,s=n.each,c=n.create,l=n.isList,u=n.isFunction,m=n.isObject;e.exports={createStore:a};var p={version:"2.0.4",enabled:!1,storage:null,addStorage:function(e){this.enabled||this._testStorage(e)&&(this._storage.resolved=e,this.enabled=!0,this.storage=e.name)},addPlugin:function(e){var t=this;if(l(e))return void s(e,function(e){t.addPlugin(e)});if(!o(this._seenPlugins,function(t){return e===t})){if(this._seenPlugins.push(e),!u(e))throw new Error("Plugins must be function values that return objects");var r=e.call(this);if(!m(r))throw new Error("Plugins must return an object of function properties");s(r,function(r,a){if(!u(r))throw new Error("Bad plugin property: "+a+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,a)})}},get:function(e,t){var r=this._storage().read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return void 0===t?this.remove(e):(this._storage().write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this._storage().remove(this._namespacePrefix+e)},each:function(e){var t=this;this._storage().each(function(r,a){e(t._deserialize(r),a.replace(t._namespaceRegexp,""))})},clearAll:function(){this._storage().clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},namespace:function(e){if(!this._legalNamespace.test(e))throw new Error("store.js namespaces can only have alhpanumerics + underscores and dashes");var t="__storejs_"+e+"_";return c(this,{_namespacePrefix:t,_namespaceRegexp:t?new RegExp("^"+t):null})},createStore:function(e,t){return a(e,t)}}},1662:function(e,t){function r(e){return s[e]}function a(e,t){s[e]=t}function n(e){for(var t in s)s.hasOwnProperty(t)&&e(s[t],t)}function i(e){delete s[e]}function o(e){s={}}e.exports={name:"memoryStorage",read:r,write:a,each:n,remove:i,clearAll:o};var s={}},1722:function(e,t,r){function a(){return u.localStorage}function n(e){return a().getItem(e)}function i(e,t){return a().setItem(e,t)}function o(e){for(var t=a().length-1;t>=0;t--){var r=a().key(t);e(n(r),r)}}function s(e){return a().removeItem(e)}function c(){return a().clear()}var l=r(1588),u=l.Global;e.exports={name:"localStorage",read:n,write:i,each:o,remove:s,clearAll:c}},2116:function(e,t,r){"use strict";function a(e,t,r,a,n){var i={};return Object.keys(a).forEach(function(e){i[e]=a[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,a){return a(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function n(e,t,r){function n(e){s.expirations.delete(e)}var o,s=Object(i.observable)({cacheKey:e+":"+t,expirations:Object(i.observable)(Object(i.asMap)()),expirationsCacheKey:"expiringLocalStorageFactory.expirations",storedValues:Object(i.observable)(Object(i.asMap)())});return s.expirations.observe(function(){var e=p.get(s.expirationsCacheKey)||{},t=Object.assign(e,Object(i.toJS)(s.expirations));p.set(s.expirationsCacheKey,t)}),Object(i.action)(function(){try{s.storedValues.merge(p.get(s.cacheKey)||{}),s.expirations.merge(p.get(s.expirationsCacheKey)||{})}catch(e){}var e=new Date;s.expirations.forEach(function(t,r){if(new Date(t)<e){p.remove(r);var a=p.get("expiringLocalStorageFactory.expirations");delete a[r],p.set(s.expirationsCacheKey,a),s.expirations.delete(r),s.storedValues.clear()}})})(),s.storedValues.observe(function(){p.set(s.cacheKey,s.storedValues),r&&!s.expirations.get(s.cacheKey)&&s.expirations.set(s.cacheKey,r)}),o={set:function(e,t){s.storedValues.set(e,t)},get:function(e){return s.storedValues.get(e)},delete:function(e){s.storedValues.delete(e)},clear:function(){s.storedValues.clear(),p.remove(s.cacheKey),p.remove(s.expirationsCacheKey),n(s.cacheKey)}},a(o,"set",[i.action],Object.getOwnPropertyDescriptor(o,"set"),o),a(o,"delete",[i.action],Object.getOwnPropertyDescriptor(o,"delete"),o),a(o,"clear",[i.action],Object.getOwnPropertyDescriptor(o,"clear"),o),o}t.a=n;var i=r(35),o=(r.n(i),r(1661)),s=r.n(o),c=r(1722),l=r.n(c),u=r(1662),m=r.n(u),p=s.a.createStore([l.a,m.a],[])},2118:function(e,t,r){"use strict";var a=r(135);t.a={getNoticesOfType:function(e,t){return a.b.get("notices/me",{params:{type:e,limit:t}}).then(function(e){return e.data.results}).catch(function(){return[]})}}},3724:function(e,t,r){"use strict";r.d(t,"a",function(){return w});var a,n,i=r(32),o=(r.n(i),r(0)),s=r.n(o),c=r(70),l=r.n(c),u=r(274),m=r.n(u),p=r(46),d=r(434),b=r(3725),f=r(3726),h=r(3727),g=r(3730),_=r.n(g),v=l()(function(e){var t=e.image;return t?s.a.createElement("img",{styleName:"smart-bar__image",src:t,alt:gettext("Promotional image"),"data-purpose":"smart-bar-image"}):null},_.a),y=l()(function(e){var t=e.title,r=e.subtitle,a=e.url,n=e.smartBarStore,i=s.a.createElement("span",{"data-purpose":"smart-bar-copy"},s.a.createElement("span",{styleName:"smart-bar__title","data-purpose":"smart-bar-title"},t),s.a.createElement("span",{onClick:n.trackClickToLinkInCopy,styleName:"smart-bar__subtitle","data-purpose":"smart-bar-subtitle",dangerouslySetInnerHTML:{__html:r},role:"presentation"}));return a?s.a.createElement("a",{styleName:"smart-bar__action-url",href:a,"data-purpose":"smart-bar-action-url",onClick:n.trackClickToActionUrl},i):i},_.a,{allowMultiple:!0}),w=(a=l()(_.a,{allowMultiple:!0}),Object(i.observer)(n=a(n=function(e){function t(r){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,e.call(this,r));return a.smartBarStore=Object(f.b)(Object(b.a)(f.a)),a}return babelHelpers.inherits(t,e),t.prototype.render=function(){if(!this.smartBarStore||this.smartBarStore.isHidden)return null;var e=this.smartBarStore.data;return s.a.createElement("div",{styleName:"smart-bar"},s.a.createElement(m.a,{onEnter:this.smartBarStore.seenHandler}),s.a.createElement("div",{styleName:"smart-bar__content"},s.a.createElement(v,{image:e.get("icon")}),s.a.createElement("div",null,s.a.createElement(y,{title:e.get("title"),subtitle:e.get("subtitle"),url:e.get("action_url"),smartBarStore:this.smartBarStore}),this.smartBarStore.data.get("enable_timer")&&s.a.createElement(h.a,{endTime:new Date(this.smartBarStore.membership.get("end_time")),shouldShowSeconds:this.smartBarStore.data.get("enable_seconds_in_timer"),daysToShowTimer:this.smartBarStore.data.get("days_to_show_timer")}))),s.a.createElement("div",{styleName:"smart-bar__close",onClick:this.smartBarStore.hide,onKeyDown:Object(d.b)(this.smartBarStore.hide),"data-purpose":"smart-bar-hide",role:"button",tabIndex:"0"},s.a.createElement(p.a,{glyph:"close",size:"small"})))},t}(o.Component))||n)||n)},3725:function(e,t,r){"use strict";function a(e){return{actions:{actionUrlClicked:"action-url-clicked",hide:"hide",seen:"seen",urlInCopyClicked:"url-in-copy-clicked"},track:function(t,r){var a={action:r,noticeId:t,noticeType:e};n.a.logEvents({events:[a],page:i})}}}t.a=a;var n=r(473),i="notice"},3726:function(e,t,r){"use strict";function a(e,t,r,a,n){var i={};return Object.keys(a).forEach(function(e){i[e]=a[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,a){return a(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function n(e){var t,r=Object(l.observable)({data:Object(l.observable)(Object(l.asMap)()),membership:Object(l.observable)(Object(l.asMap)()),seen:!1,storage:null,tracker:e}),n=parseInt(d.a.helloBarId,10);return d.a.helloBarId&&(h.includes(n)||isNaN(n))||!m.a.features.notice.smart_bar?void o.a.ud.ud_hellobar():(u.a.getNoticesOfType(g,1).then(Object(l.action)(function(e){if(!e.length)return void o.a.ud.ud_hellobar();var t=c()(e).first();r.data.merge(t.data||{}),r.membership.merge(t.membership||{});var a=void 0,n=r.membership.get("end_time");if(n)a=new Date(n);else{var i=new Date;a=new Date(i.setDate(i.getDate()+14))}r.storage=b(r.data.get("id"),a)})),t={data:r.data,membership:r.membership,hide:function(){r.storage.set("hidden",!0),r.tracker.track(r.data.get("id"),r.tracker.actions.hide)},get isHidden(){return!r.data.get("id")||r.storage&&r.storage.get("hidden")},seenHandler:function(){r.seen||(r.seen=!0,r.tracker.track(r.data.get("id"),r.tracker.actions.seen))},trackClickToLinkInCopy:function(e){"A"===e.target.tagName&&(e.stopPropagation(),r.tracker.track(r.data.get("id"),r.tracker.actions.urlInCopyClicked))},trackClickToActionUrl:function(){r.tracker.track(r.data.get("id"),r.tracker.actions.actionUrlClicked)},tracker:r.tracker},a(t,"hide",[l.action],Object.getOwnPropertyDescriptor(t,"hide"),t),a(t,"isHidden",[l.computed],Object.getOwnPropertyDescriptor(t,"isHidden"),t),a(t,"seenHandler",[l.action],Object.getOwnPropertyDescriptor(t,"seenHandler"),t),t)}r.d(t,"a",function(){return g}),t.b=n;var i=r(4),o=r.n(i),s=r(20),c=r.n(s),l=r(35),u=(r.n(l),r(2118)),m=r(16),p=r(2116),d=r(73),b=c.a.partial(p.a,"smartBarStorage"),f=4278,h=[f],g="smart_bar"},3727:function(e,t,r){"use strict";function a(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function n(e,t,r,a,n){var i={};return Object.keys(a).forEach(function(e){i[e]=a[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,a){return a(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}r.d(t,"a",function(){return j});var i,o,s,c,l,u,m=r(0),p=r.n(m),d=r(35),b=(r.n(d),r(32)),f=(r.n(b),r(70)),h=r.n(f),g=r(3728),_=r.n(g),v=r(137),y=r(41),w=r.n(y),O=86400,S=86400,x=h()(function(e){var t=e.remainingSeconds,r=e.shouldShowSeconds,a=v.b.duration(1e3*t),n=w()(a.hours()+24*a.days()).format("00"),i=w()(a.minutes()).format("00"),o=w()(a.seconds()).format("00"),s=n+"h "+i+"m";return r&&(s+=" "+o+"s"),p.a.createElement("span",{"data-purpose":"timer-countdown"},interpolate(gettext("Ends in %(timeRemainingText)s"),{timeRemainingText:s},!0))},_.a),j=(i=h()(_.a,{allowMultiple:!0}),Object(b.observer)(o=i((u=l=function(e){function t(){var r,n,i;babelHelpers.classCallCheck(this,t);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return r=n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a(n,"remainingSeconds",c,n),n.tickHandler=null,i=r,babelHelpers.possibleConstructorReturn(n,i)}return babelHelpers.inherits(t,e),t.prototype.componentWillMount=function(){var e=this;this.remainingSeconds=Object(v.b)(this.props.endTime).diff(Object(v.b)(),"seconds"),0<this.remainingSeconds&&this.remainingSeconds<=O&&(this.tickHandler=setInterval(function(){e.decrementRemainingTime()},1e3))},t.prototype.componentWillUnmount=function(){null!==this.tickHandler&&clearInterval(this.tickHandler)},t.prototype.decrementRemainingTime=function(){this.remainingSeconds<1?clearInterval(this.tickHandler):this.remainingSeconds-=1},t.prototype.render=function(){var e=Math.floor(this.remainingSeconds/S),t=void 0;return t=0<this.remainingSeconds&&this.remainingSeconds<=O?p.a.createElement(x,{remainingSeconds:this.remainingSeconds,shouldShowSeconds:this.props.shouldShowSeconds}):S<this.remainingSeconds&&e<=this.props.daysToShowTimer?p.a.createElement("span",{"data-purpose":"timer-x-days-left"},ninterpolate("%(daysRemaining)s day left!","%(daysRemaining)s days left!",e,{daysRemaining:e})):null,p.a.createElement("div",{styleName:"timer-container"},t)},t}(m.Component),l.propTypes={daysToShowTimer:m.PropTypes.number.isRequired,endTime:m.PropTypes.instanceOf(Date).isRequired,shouldShowSeconds:m.PropTypes.bool},l.defaultProps={shouldShowSeconds:!0,daysToShowTimer:3},s=u,n(s.prototype,"componentWillMount",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"componentWillMount"),s.prototype),c=n(s.prototype,"remainingSeconds",[d.observable],{enumerable:!0,initializer:null}),n(s.prototype,"decrementRemainingTime",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"decrementRemainingTime"),s.prototype),o=s))||o)||o)},3728:function(e,t,r){var a=r(3729);"string"==typeof a&&(a=[[e.i,a,""]]);r(1255)(a,{});a.locals&&(e.exports=a.locals)},3729:function(e,t,r){t=e.exports=r(1254)(!1),t.push([e.i,".smart-bar-timer--timer-container--2mwOn{font-size:13px;font-weight:600}@media (min-width:992px){.smart-bar-timer--timer-container--2mwOn{font-size:18px}}",""]),t.locals={"timer-container":"smart-bar-timer--timer-container--2mwOn"}},3730:function(e,t,r){var a=r(3731);"string"==typeof a&&(a=[[e.i,a,""]]);r(1255)(a,{});a.locals&&(e.exports=a.locals)},3731:function(e,t,r){t=e.exports=r(1254)(!1),t.push([e.i,".smart-bar--smart-bar--1rOkE{background-color:#853c6c;color:#fff;display:flex;font-size:13px;padding:10px}.smart-bar--smart-bar__action-url--1wVIX{cursor:default}.smart-bar--smart-bar__close--3mCup{align-self:baseline;cursor:pointer;margin-left:auto}.smart-bar--smart-bar__content--3X42a{display:flex;flex-basis:100%;justify-content:center;text-align:center}.smart-bar--smart-bar__content--3X42a:hover,.smart-bar--smart-bar__content--3X42a a,.smart-bar--smart-bar__content--3X42a a:active,.smart-bar--smart-bar__content--3X42a a:visited{color:#fff}.smart-bar--smart-bar__image--1qsPM{display:none;flex-shrink:0;height:48px;margin-right:20px;width:48px}.smart-bar--smart-bar__subtitle--I38FP a{text-decoration:underline}.smart-bar--smart-bar__timer--MFdXn{color:#fff}.smart-bar--smart-bar__title--1LFsk{font-weight:600;margin-right:5px}@media (min-width:576px){.smart-bar--smart-bar--1rOkE{font-size:15px}.smart-bar--smart-bar__image--1qsPM{display:block}}",""]),t.locals={"smart-bar":"smart-bar--smart-bar--1rOkE","smart-bar__action-url":"smart-bar--smart-bar__action-url--1wVIX","smart-bar__close":"smart-bar--smart-bar__close--3mCup","smart-bar__content":"smart-bar--smart-bar__content--3X42a","smart-bar__image":"smart-bar--smart-bar__image--1qsPM","smart-bar__subtitle":"smart-bar--smart-bar__subtitle--I38FP","smart-bar__timer":"smart-bar--smart-bar__timer--MFdXn","smart-bar__title":"smart-bar--smart-bar__title--1LFsk"}}});