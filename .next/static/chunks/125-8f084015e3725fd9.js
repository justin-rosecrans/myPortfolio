(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{58:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});var r=n(2265);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;let u=JSON.stringify(Object.keys(t.breakpoints||{})),c=JSON.stringify(Object.keys(e.breakpoints||{}));return u===c&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function l(t){return"string"==typeof t}function a(t){return"boolean"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return h(t).map(Number)}function m(t){return t[g(t)]}function g(t){return Math.max(0,t.length-1)}function y(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function h(t){return Object.keys(t)}function b(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function v(t,e){let n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function x(){let t=[],e={add:function(n,r,i,o={passive:!0}){return n.addEventListener(r,i,o),t.push(()=>n.removeEventListener(r,i,o)),e},clear:function(){t=t.filter(t=>t())}};return e}function w(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function O(t,e,n){let r="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},i=n.style,o=!1;return{clear:function(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(t){o||(i.transform=r(e.apply(t)))},toggleActive:function(t){o=!t}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function E(t,e,n){let r,i,o,u,k;let I=t.ownerDocument,_=I.defaultView,D=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(h(n).forEach(r=>{let i=e[r],o=n[r],u=s(i)&&s(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=h(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>h(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(_),P=(k=[],{init:function(t,e){return(k=e.filter(({options:t})=>!1!==D.optionsAtMedia(t).active)).forEach(e=>e.init(t,D)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){k=k.filter(t=>t.destroy())}}),A=x(),L=x(),j=function(){let t;let e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n}};return n}(),{animationRealms:M}=E,{mergeOptions:F,optionsAtMedia:N,optionsMediaQueries:T}=D,{on:R,off:z,emit:C}=j,B=!1,H=F(S,E.globalOptions),V=F(H),$=[];function U(e,n){if(B)return;let s=M.find(t=>t.window===_),S=s||function(t){let e=1e3/60,n=[],r=null,i=0,o=0;function u(c){r||(r=c);let l=c-r;for(r=c,i+=l;i>=e;)n.forEach(({animation:t})=>t.update()),i-=e;let a=f(i/e);n.forEach(({animation:t})=>t.render(a)),o&&t.requestAnimationFrame(u)}return{start:function(e){n.includes(e)||n.push(e),o||(o=t.requestAnimationFrame(u))},stop:function(e){(n=n.filter(t=>t!==e)).length||(t.cancelAnimationFrame(o),r=null,i=0,o=0)},reset:function(){r=null,i=0},window:t}}(_);s||M.push(S),V=N(H=F(H,e)),$=n||$,function(){let{container:e,slides:n}=V,r=l(e)?t.querySelector(e):e;o=r||t.children[0];let i=l(n)?o.querySelectorAll(n):n;u=[].slice.call(i||o.children)}(),r=function e(n,r){let i=function(t,e,n,r,i,o,u,l){let s,S;let{align:E,axis:k,direction:I,startIndex:_,loop:D,duration:P,dragFree:A,dragThreshold:L,inViewThreshold:j,slidesToScroll:M,skipSnaps:F,containScroll:N,watchResize:T,watchSlides:R,watchDrag:z}=o,C=e.getBoundingClientRect(),B=n.map(t=>t.getBoundingClientRect()),H=function(t){let e="rtl"===t?-1:1;return{apply:function(t){return t*e}}}(I),V=function(t,e){let n="y"===t?"y":"x";return{scroll:n,cross:"y"===t?"x":"y",startEdge:"y"===n?"top":"rtl"===e?"right":"left",endEdge:"y"===n?"bottom":"rtl"===e?"left":"right",measureSize:function(t){let{width:e,height:r}=t;return"x"===n?e:r}}}(k,I),$=V.measureSize(C),U={measure:function(t){return $*(t/100)}},q=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r){return c(t)?e*Number(t):n[t](r)}}}(E,$),J=!D&&!!N,W=D||!!N,{slideSizes:X,slideSizesWithGaps:Y,startGap:G,endGap:Q}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:l}=t,a=n[0]&&i,s=function(){if(!a)return 0;let t=n[0];return f(e[c]-t[c])}(),d=function(){if(!a)return 0;let t=o.getComputedStyle(m(r));return parseFloat(t.getPropertyValue(`margin-${l}`))}(),p=n.map(u),y=n.map((t,e,n)=>{let r=e===g(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:y,startGap:s,endGap:d}}(V,C,B,n,W,i),Z=function(t,e,n,r,i,o,u,l,a){let{startEdge:s,endEdge:d}=t,y=c(r);return{groupSlides:function(t){return y?p(t).filter(t=>t%r==0).map(e=>t.slice(e,e+r)):t.length?p(t).reduce((r,c)=>{let p=m(r)||0,y=c===g(t),h=o[s]-u[p][s],b=o[s]-u[c][d],v=i||0!==p?0:e.apply(l),x=!i&&y?e.apply(a):0,w=f(b-x-(h+v));return w>n&&r.push(c),y&&r.push(t.length),r},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(V,H,$,M,D,C,B,G,Q),{snaps:K,snapsAligned:tt}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,l=c(r).map(t=>m(t)[u]-t[0][o]).map(f).map(e.measure),a=r.map(t=>n[o]-t[o]).map(t=>-f(t)),s=c(a).map(t=>t[0]).map((t,e)=>t+l[e]);return{snaps:a,snapsAligned:s}}(V,q,C,B,Z),te=-m(K)+m(Y),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r){let i=v(-e+t,0),o=n.map(i.constrain).map(t=>parseFloat(t.toFixed(3))),u=function(){let t=o[0],e=m(o),n=o.lastIndexOf(t),r=o.indexOf(e)+1;return v(n,r)}(),c=function(){if(e<=t)return[i.max];if("keepSnaps"===r)return o;let{min:n,max:c}=u;return o.slice(n,c)}();return{snapsContained:c,scrollContainLimit:u}}($,te,tt,N),ti=J?tn:tt,{limit:to}=function(t,e,n){let r=e[0],i=n?r-t:m(e),o=v(i,r);return{limit:o}}(te,ti,D),tu=function t(e,n,r){let{constrain:i}=v(0,e),o=e+1,u=c(n);function c(t){return r?f((o+t)%o):i(t)}function l(){return t(e,u,r)}let a={get:function(){return u},set:function(t){return u=c(t),a},add:function(t){return l().set(u+t)},clone:l};return a}(g(ti),_,D),tc=tu.clone(),tl=p(n),ta=({dragHandler:t,scrollBody:e,scrollBounds:n,eventHandler:r,animation:i,options:{loop:o}})=>{let u=t.pointerDown();o||n.constrain(u);let c=e.seek().settled();c&&!u&&(i.stop(),r.emit("settle")),c||r.emit("scroll")},ts=({scrollBody:t,translate:e,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,options:{loop:u}},c)=>{let l=t.velocity();r.set(n.get()-l+l*c),u&&(i.loop(t.direction()),o.loop()),e.to(r.get())},tf={start:()=>l.start(tE),stop:()=>l.stop(tE),update:()=>ta(tE),render:t=>ts(tE,t)},td=ti[tu.get()],tp=w(td),tm=w(td),tg=w(td),ty=function(t,e,n,r){let i=!0,o=0,u=0,c=n,l=r,a=t.get(),s=0;function p(t){return c=t,g}function m(t){return l=t,g}let g={direction:function(){return u},duration:function(){return c},velocity:function(){return o},seek:function(){let n=e.get()-t.get(),r=!c,p=0;return r?(o=0,t.set(e),p=n):(o+=n/c,o*=l,a+=o,t.add(o),p=a-s),u=d(p),s=a,i=.001>f(n),g},settled:function(){return i},useBaseFriction:function(){return m(r)},useBaseDuration:function(){return p(n)},useFriction:m,useDuration:p};return g}(tp,tg,P,.68),th=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function l(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function a(e,r){let i=[e,e+n,e-n];if(!t)return i[0];if(!r)return l(i);let o=i.filter(t=>d(t)===r);return o.length?l(o):m(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:s,distance:d}=function(n){let r=t?u(n):c(n),i=e.map(t=>t-r).map(t=>a(t,0)).map((t,e)=>({diff:t,index:e})).sort((t,e)=>f(t.diff)-f(e.diff)),{index:o}=i[0];return{index:o,distance:r}}(l),p=!t&&o(l);if(!r||p)return{index:s,distance:n};let m=e[s]-d,g=n+a(m,0);return{index:s,distance:g}},byIndex:function(t,n){let r=e[t]-i.get(),o=a(r,n);return{index:t,distance:o}},shortcut:a}}(D,ti,te,to,tg),tb=function(t,e,n,r,i,o,u){function c(r){let c=r.distance,l=r.index!==e.get();o.add(c),c&&(i.duration()?t.start():(t.update(),t.render(1),t.update())),l&&(n.set(e.get()),e.set(r.index),u.emit("select"))}return{distance:function(t,e){let n=r.byDistance(t,e);c(n)},index:function(t,n){let i=e.clone().set(t),o=r.byIndex(i.get(),n);c(o)}}}(tf,tu,tc,th,ty,tg,u),tv=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tx=x(),tw=function(t,e,n,r){let i;let o={},u=null,c=null,l=!1;return{init:function(){i=new IntersectionObserver(t=>{l||(t.forEach(t=>{let n=e.indexOf(t.target);o[n]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),l=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=h(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,j),{slideRegistry:tO}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:l}=r,a=function(){let r=u(o);return!n||e<=t?r:r.slice(c,l).map((t,e,n)=>{let r=!e,i=!r&&e===g(n);if(r){let t=m(n[0])+1;return y(t)}if(i){let t=g(o)-m(n)[0]+1;return y(t,m(n)[0])}return t})}();return{slideRegistry:a}}($,te,J,tr,Z,tl),tS=function(t,e,n,r,i,o){let u=0;function l(t){"Tab"===t.code&&(u=new Date().getTime())}function a(l){o.add(l,"focus",()=>{let o=new Date().getTime(),a=o-u;if(a>10)return;t.scrollLeft=0;let s=e.indexOf(l),f=n.findIndex(t=>t.includes(s));c(f)&&(i.useDuration(0),r.index(f,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",l,!1),e.forEach(a)}}}(t,n,tO,tb,ty,tx),tE={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:C,slideRects:B,animation:tf,axis:V,direction:H,dragHandler:function(t,e,n,r,i,o,u,c,l,s,p,m,g,y,h,w,O,S,E,k){let{cross:I}=t,_=["INPUT","SELECT","TEXTAREA"],D={passive:!1},P=x(),A=x(),L=v(50,225).constrain(h.measure(20)),j={mouse:300,touch:400},M={mouse:500,touch:600},F=w?43:25,N=!1,T=0,R=0,z=!1,C=!1,B=!1,H=!1;function V(t){let n=u.readPoint(t),r=u.readPoint(t,I),i=f(n-T),c=f(r-R);if(!C&&!H&&(!t.cancelable||!(C=i>c)))return $(t);let a=u.pointerMove(t);i>O&&(B=!0),p.useFriction(.3).useDuration(1),l.start(),o.add(e.apply(a)),t.preventDefault()}function $(t){let n=m.byDistance(0,!1),r=n.index!==g.get(),i=u.pointerUp(t)*function(){let t=w?M:j,e=H?"mouse":"touch";return t[e]}(),o=function(t,e){let n=g.add(-1*d(t)),r=m.byDistance(t,!w).distance;return w||f(t)<L?r:S&&e?.5*r:m.byIndex(n.get(),0).distance}(e.apply(i),r),c=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let i=(n=f(t),r=f(e),f(n-r));return f(i/t)}(i,o);C=!1,z=!1,A.clear(),p.useDuration(F-10*c).useFriction(.68+c/50),s.distance(o,!w),H=!1,y.emit("pointerUp")}function U(t){B&&(t.stopPropagation(),t.preventDefault())}return{init:function(t){k&&P.add(n,"dragstart",t=>t.preventDefault(),D).add(n,"touchmove",()=>void 0,D).add(n,"touchend",()=>void 0).add(n,"touchstart",e).add(n,"mousedown",e).add(n,"touchcancel",$).add(n,"contextmenu",$).add(n,"click",U,!0);function e(e){(a(k)||k(t,e))&&function(t){let e=b(t,i);H=e,(!e||0===t.button)&&!function(t){let e=t.nodeName||"";return _.includes(e)}(t.target)&&(B=w&&e&&!t.buttons&&N,N=f(o.get()-c.get())>=2,z=!0,u.pointerDown(t),p.useFriction(0).useDuration(0),o.set(c),function(){let t=H?r:n;A.add(t,"touchmove",V,D).add(t,"touchend",$).add(t,"mousemove",V,D).add(t,"mouseup",$)}(),T=u.readPoint(t),R=u.readPoint(t,I),y.emit("pointerDown"))}(e)}},pointerDown:function(){return z},destroy:function(){P.clear(),A.clear()}}}(V,H,t,r,i,tg,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(b(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,l=e/u,a=u&&!c&&f(l)>.1;return a?l:0},readPoint:o}}(V,i),tp,tf,tb,ty,th,tu,u,U,A,L,F,0,z),eventStore:tx,percentOfView:U,index:tu,indexPrevious:tc,limit:to,location:tp,offsetLocation:tm,options:o,resizeHandler:function(t,e,n,r,i,o){let u,c;let l=[],s=!1;function f(t){return i.measureSize(t.getBoundingClientRect())}return{init:function(i){if(!o)return;c=f(t),l=r.map(f),u=new ResizeObserver(u=>{!s&&(a(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===t,a=r.indexOf(u.target),s=o?c:l[a],d=f(o?t:r[a]);if(s!==d){n.requestAnimationFrame(()=>{i.reInit(),e.emit("resize")});break}}}(u)});let d=[t].concat(r);d.forEach(t=>u.observe(t))},destroy:function(){u&&u.disconnect(),s=!0}}}(e,u,i,n,V,T),scrollBody:ty,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=v(.1,.99),l=!1;return{constrain:function(i){if(!(!l&&t.reachedAny(n.get())&&t.reachedAny(e.get())))return;let a=t.reachedMin(e.get())?"min":"max",s=f(t[a]-e.get()),d=n.get()-e.get(),p=c.constrain(s/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){l=!t}}}(to,tp,tg,ty,U),scrollLooper:function(t,e,n,r){let i=e.min+.1,o=e.max+.1,{reachedMin:u,reachedMax:c}=v(i,o);return{loop:function(e){if(!(1===e?c(n.get()):-1===e&&u(n.get())))return;let i=t*(-1*e);r.forEach(t=>t.add(i))}}}(te,to,tm,[tp,tm,tg]),scrollProgress:tv,scrollSnapList:ti.map(tv.get),scrollSnaps:ti,scrollTarget:th,scrollTo:tb,slideLooper:function(t,e,n,r,i,o,u,c,l,a){let s=p(o),f=p(o).reverse(),d=(function(){let t=c[0]-1,e=g(f,t);return y(e,r,!1)})().concat(function(){let t=n-c[0]-1,e=g(s,t);return y(e,-r,!0)}());function m(t,e){return t.reduce((t,e)=>t-o[e],e)}function g(t,e){return t.reduce((t,n)=>{let r=m(t,e);return r>0?t.concat([n]):t},[])}function y(o,c,s){let f=u.map((t,e)=>({start:t-i[e]+.5+c,end:t+n-.5+c}));return o.map(n=>{let i=s?0:-r,o=s?r:0,u=f[n][s?"end":"start"];return{index:n,slideLocation:w(-1),translate:O(t,e,a[n]),target:()=>l.get()>u?i:o}})}return{canLoop:function(){return d.every(({index:t})=>{let e=s.filter(e=>e!==t);return .1>=m(e,n)})},clear:function(){d.forEach(t=>t.translate.clear())},loop:function(){d.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:d}}(V,H,$,te,X,Y,K,ti,tm,n),slideFocus:tS,slidesHandler:(S=!1,{init:function(t){R&&(s=new MutationObserver(e=>{!S&&(a(R)||R(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){s&&s.disconnect(),S=!0}}),slidesInView:tw,slideIndexes:tl,slideRegistry:tO,slidesToScroll:Z,target:tg,translate:O(V,H,e)};return tE}(t,o,u,I,_,n,j,r);if(n.loop&&!i.slideLooper.canLoop()){let t=Object.assign({},n,{loop:!1});return e(t,r)}return i}(V,S),T([H,...$.map(({options:t})=>t)]).forEach(t=>A.add(t,"change",q)),V.active&&(r.translate.to(r.location.get()),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(Y),r.resizeHandler.init(Y),r.slidesHandler.init(Y),L.add(I,"visibilitychange",()=>{I.hidden&&S.reset()}),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(Y),i=P.init(Y,$))}function q(t,e){let n=X();J(),U(F({startIndex:n},t),e),j.emit("reInit")}function J(){r.dragHandler.destroy(),r.animation.stop(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),P.destroy(),A.clear(),L.clear()}function W(t,e,n){V.active&&!B&&(r.scrollBody.useBaseFriction().useDuration(e?0:V.duration),r.scrollTo.index(t,n||0))}function X(){return r.index.get()}let Y={canScrollNext:function(){let t=r.index.add(1).get();return t!==X()},canScrollPrev:function(){let t=r.index.add(-1).get();return t!==X()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){B||(B=!0,A.clear(),J(),j.emit("destroy"))},off:z,on:R,emit:C,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:q,rootNode:function(){return t},scrollNext:function(t){let e=r.index.add(1).get();W(e,!0===t,-1)},scrollPrev:function(t){let e=r.index.add(-1).get();W(e,!0===t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:W,selectedScrollSnap:X,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return U(e,n),setTimeout(()=>j.emit("init"),0),Y}function k(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,l]=(0,r.useState)(),[a,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){E.globalOptions=k.globalOptions;let t=E(a,n.current,i.current);return l(t),()=>t.destroy()}l(void 0)},[a,l]),(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>{let n=r[e];return o(t,n)})}(i.current,e)&&(i.current=e,f())},[e,f]),[s,c]}E.animationRealms=[],E.globalOptions=void 0,k.globalOptions=void 0},1295:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return a},unstable_getImgProps:function(){return l}});let r=n(1024),i=n(2301),o=n(7873),u=n(3222),c=r._(n(5033)),l=t=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:e}=(0,i.getImgProps)(t,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,n]of Object.entries(e))void 0===n&&delete e[t];return{props:e}},a=u.Image},622:function(t,e,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var r,o={},a=null,s=null;for(r in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(s=e.ref),e)u.call(e,r)&&!l.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:i,type:t,key:a,ref:s,props:o,_owner:c.current}}e.Fragment=o,e.jsx=a,e.jsxs=a},7437:function(t,e,n){"use strict";t.exports=n(622)},6691:function(t,e,n){t.exports=n(1295)}}]);