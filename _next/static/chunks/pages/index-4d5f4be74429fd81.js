(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(_,$,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5658)}])},5658:function(_,$,t){"use strict";t.r($),t.d($,{__N_SSG:function(){return u},default:function(){return h}});var e=t(5893),n=t(7294),i=1e3/60,a={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,mouseleave:2},s=function(_,$,t,e,n){var i=Math.PI/180*n,a=Math.cos(i),s=Math.sin(i);return{x:a*(t-_)+s*(e-$)+_,y:a*(e-$)-s*(t-_)+$}},r=function(){function _($){var t=$.container,e=$.muted,n=this;!function(_,$){if(!(_ instanceof $))throw TypeError("Cannot call a class as a function")}(this,_),this.v={r:12,y:2,t:0,w:0,d:.988},this.inertia=.08,this.sticky=.1,this.maxR=60,this.maxY=110,this.last=null,this.rotate=0,this.initiated=!1,this.pageX=0,this.pageY=0,this.height=800,this.width=500,this.setMuted=function(_){Object.values(n.audio).forEach(function($){return $.muted=_}),n.muted=_},this.dispose=function(){var _=n.outline,$=n.container;_.removeEventListener("mousedown",n.start),_.removeEventListener("touchstart",n.start),document.removeEventListener("mousemove",n.move),document.removeEventListener("touchmove",n.move),document.removeEventListener("mouseup",n.end),document.removeEventListener("mouseleave",n.end),document.removeEventListener("touchcancel",n.end),document.removeEventListener("touchend",n.end),$.removeChild(_),$.removeChild(n.canvas)},this.start=function(_){_.preventDefault();var $=a[_.type];if(!n.initiated||n.initiated===$){n.initiated=$;var t="targetTouches"in _?_.touches[0]:_;n.pageX=t.pageX,n.pageY=t.pageY;var e=n.audio,i=e.transient,s=e.dancing,r=e.crazy;i.muted=n.muted,s.muted=n.muted,r.muted=n.muted}},this.move=function(_){if(a[_.type]===n.initiated){var $,t="targetTouches"in _?_.touches[0]:_,e=n.image.getBoundingClientRect(),i=e.left+e.width/2,s=t.pageX,r=t.pageY-n.pageY,o=(s-i)*n.sticky;o=Math.max(-n.maxR,o),o=Math.min(n.maxR,o),r=r*n.sticky*3,r=Math.max(-n.maxY,r),r=Math.min(n.maxY,r),n.v.r=o,n.v.y=r,n.v.w=0,n.v.t=0,n.draw()}},this.end=function(_){a[_.type]===n.initiated&&(n.initiated=!1,n.run(),n.play())},this.play=function(){var _=n.audio,$=_.transient,t=_.dancing,e=_.crazy;6>=Math.abs(n.v.r)&&($.currentTime=0,$.play(),t.pause(),e.pause()),Math.abs(n.v.r)>6&&30>=Math.abs(n.v.r)&&(t.currentTime=0,t.play(),$.pause(),e.pause()),Math.abs(n.v.r)>30&&(e.currentTime=0,e.play(),$.pause(),t.pause())},this.draw=function(){var _=n.v,$=_.r,t=_.y;n.image.style.transform="rotate(".concat($,"deg) translateX(").concat(5*$,"px) translateY(").concat(t,"px)");var e=n.context,i=n.width,a=n.height;e.clearRect(0,0,i,a),e.save(),e.strokeStyle="#182562",e.lineWidth=10,e.beginPath(),e.translate(i/2,640),e.moveTo(0,200);var r=s(0,-100,$,-t,$),o=r.x,c=-r.y-100;e.quadraticCurveTo(0,75,o,c),e.stroke(),e.restore()},this.run=function(){if(!n.initiated){var _=Date.now(),$=n.inertia,t=n.last?_-n.last:16;t<16&&($=$/i*t),n.last=_;var e=n.v,a=e.r,s=e.y,r=e.t,o=e.w,c=e.d;o=o-2*a-n.rotate,a+=o*$*1.2,n.v.w=o*c,n.v.r=a,r-=2*s,s+=r*$*2,n.v.t=r*c,n.v.y=s,!(.1>Math.max(Math.abs(n.v.w),Math.abs(n.v.r),Math.abs(n.v.t),Math.abs(n.v.y)))&&(n.draw(),requestAnimationFrame(n.run))}},this.muted=void 0!==e&&e,this.audio={transient:new Audio("".concat("/ji","/j.mp3")),dancing:new Audio("".concat("/ji","/jntm.mp3")),crazy:new Audio("".concat("/ji","/ngm.mp3"))};var r=this.height,o=this.width;this.container=t,t.style.position="relative",t.style.height=r+"px",t.style.width=o+"px";var c=this.image=new Image(197,300);c.src="kun.png";var u=this.outline=document.createElement("div");u.style.position="absolute",u.style.left="50%",u.style.top="50%",u.style.transform="translate(-50%, -50%)",u.appendChild(c);var h=window.devicePixelRatio||1,d=this.canvas=document.createElement("canvas");d.width=o*h,d.height=r*h,d.style.width=o+"px",d.style.height=r+"px";var v=this.context=d.getContext("2d");v.setTransform(1,0,0,1,0,0),v.scale(h,h),this.mount()}return _.prototype.mount=function(){var _=this.outline,$=this.container;_.addEventListener("mousedown",this.start),_.addEventListener("touchstart",this.start),document.addEventListener("mousemove",this.move),document.addEventListener("touchmove",this.move),document.addEventListener("mouseup",this.end),document.addEventListener("mouseleave",this.end),document.addEventListener("touchcancel",this.end),document.addEventListener("touchend",this.end),$.appendChild(_),$.appendChild(this.canvas)},_}(),o=t(214),c=t.n(o),u=!0,h=function(){var _=(0,n.useRef)(null),$=(0,n.useRef)(null),t=(0,n.useState)(!0),i=t[0],a=t[1];(0,n.useEffect)(function(){var t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);a(t);var e=$.current=new r({container:_.current,muted:t});return e.run(),function(){e.dispose()}},[]);var s=(0,n.useCallback)(function(){a(function(_){return!_})},[]);return(0,n.useMemo)(function(){var _;null===(_=$.current)||void 0===_||_.setMuted(i)},[i]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:c().options,children:[(0,e.jsx)("a",{href:"https://github.com/SyMind/ji",children:(0,e.jsx)("svg",{width:"30px",height:"30px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{fill:"#333333",d:"M1023.560892 524.587752c0 114.331752-32.549236 217.148443-97.647709 308.450075-65.047295 91.301632-149.132822 154.455339-252.205404 189.512299-11.975662 2.303012-20.778286 0.716493-26.305515-4.759558a27.584966 27.584966 0 0 1-8.342021-20.471218V853.150798c0-44.166653-11.566238-76.511177-34.647536-96.982394a446.272549 446.272549 0 0 0 68.32269-12.282731c20.16415-5.476051 41.044792-14.329852 62.590748-26.612583a187.311643 187.311643 0 0 0 53.992837-45.446104c14.432209-18.014672 26.203159-41.914819 35.312851-71.751618 9.109692-29.8368 13.664538-64.074912 13.664538-102.765514 0-55.118754-17.554069-102.049021-52.61103-140.739623 16.376974-41.454216 14.636921-87.872703-5.373695-139.357815-12.436265-4.094244-30.399759-1.535341-53.941659 7.523172a355.17563 355.17563 0 0 0-61.311297 30.041513l-25.333132 16.376974a462.137743 462.137743 0 0 0-127.945112-17.707604 462.137743 462.137743 0 0 0-127.945111 17.758782 589.571074 589.571074 0 0 0-28.301459-18.424096c-11.77095-7.31846-30.34858-16.069906-55.681713-26.305515-25.281954-10.235609-44.422543-13.306292-57.31941-9.212048-19.498835 51.433935-21.085354 97.852421-4.606024 139.306637-35.108139 38.690602-52.713386 85.620869-52.713386 140.739623 0 38.690602 4.606024 72.826357 13.715716 102.458445 9.109692 29.58091 20.778286 53.481057 34.954605 71.700441a180.658498 180.658498 0 0 0 53.634591 45.753172c21.545957 12.282731 42.477777 21.18771 62.641926 26.612583 20.215328 5.527229 42.989557 9.621472 68.32269 12.333909-17.758781 16.376974-28.659705 39.867697-32.651593 70.369811a129.941055 129.941055 0 0 1-29.990334 10.235609 184.087426 184.087426 0 0 1-37.974109 3.428929c-14.688099 0-29.171485-4.913092-43.654872-14.688099-14.432209-9.826185-26.766117-24.053681-37.001726-42.682489a109.162769 109.162769 0 0 0-32.293346-35.517563c-13.101579-9.109692-24.104859-14.585743-33.009839-16.376974l-13.306292-2.047122c-9.314404 0-15.762838 1.023561-19.345301 3.070683-3.582463 2.047122-4.606024 4.606024-3.326572 7.83024a37.769397 37.769397 0 0 0 5.987831 9.570295 49.182101 49.182101 0 0 0 8.700267 8.188487l4.606024 3.377751c9.826185 4.606024 19.447657 13.255114 29.017952 25.998447 9.570294 12.743333 16.581686 24.360749 20.982998 34.80107l6.653146 15.71166c5.783119 17.298179 15.558126 31.320963 29.376197 42.017174 13.766894 10.747389 28.659705 17.554069 44.627255 20.471218 15.96755 2.968327 31.423319 4.606024 46.316131 4.810736 14.841633 0.204712 27.22672-0.562958 37.001726-2.405368l15.302235-2.712436c0 17.298179 0.102356 37.564685 0.358247 60.799517l0.307068 36.848192c0 8.188487-2.86597 15.046345-8.700268 20.471218-5.731941 5.527229-14.636921 7.113748-26.612583 4.810736-103.072582-35.056961-187.158109-98.261846-252.205404-189.512299C32.549236 741.736195 0 638.919504 0 524.587752c0-95.191163 22.876586-182.910331 68.629758-263.31104a516.028224 516.028224 0 0 1 186.288082-190.894106A491.309228 491.309228 0 0 1 511.780446 0.012795a491.309228 491.309228 0 0 1 256.913784 70.369811 516.028224 516.028224 0 0 1 186.236905 190.894106C1000.684306 341.626242 1023.560892 429.447767 1023.560892 524.587752z"})})}),(0,e.jsx)("button",{className:c().bgm,onClick:s,children:i?(0,e.jsx)("svg",{width:"30px",height:"30",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{fill:"#888",d:"M616.576 730.976c-5.056 5.216-10.08 10.432-14.304 16.16-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304 9.632-3.136 18.784-6.816 27.424-11.008L616.576 730.976zM416 273.408l0-8.96 416-69.312 0 476.192 64 61.216L896 160c0-1.056-0.512-1.984-0.608-3.008-0.032-1.664 0.448-3.232 0.16-4.896-2.88-17.44-19.424-29.408-36.8-26.304l-480 80C370.24 207.2 363.2 211.936 358.4 218.336L416 273.408zM352 477.92l0 207.68c-20.128-9.376-43.648-14.784-69.408-14.784-21.28 0-42.816 3.456-63.968 10.336-39.584 12.8-73.568 36.224-95.584 65.984-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304 58.656-19.04 100.32-59.2 115.04-103.808C413.92 811.328 416 806.016 416 800l0-5.216c1.056-8.512 1.056-17.024 0-25.6l0-230.048L352 477.92zM928 928c-7.968 0-15.904-2.944-22.112-8.864l-736-704C157.12 202.912 156.672 182.656 168.864 169.888c12.192-12.736 32.48-13.216 45.248-0.992l736 704c12.736 12.224 13.216 32.48 0.992 45.248C944.832 924.672 936.448 928 928 928z"})}):(0,e.jsx)("svg",{width:"30px",height:"30px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{fill:"#333333",d:"M895.456 770.56C895.552 769.696 896 768.896 896 768L896 160c0-1.056-0.512-1.984-0.608-3.008-0.032-1.664 0.448-3.232 0.16-4.928-2.88-17.408-19.328-29.184-36.8-26.304l-480 80c-17.408 2.912-29.216 19.392-26.304 36.832 0.256 1.472 1.024 2.656 1.44 4.032C352.96 249.664 352 252.672 352 256l0 429.6c-20.128-9.376-43.648-14.784-69.408-14.784-21.312 0-42.816 3.456-63.968 10.336-39.616 12.8-73.536 36.224-95.584 65.984-24.064 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.72-3.456 63.904-10.304 58.656-19.04 100.288-59.2 115.04-103.808C413.888 811.328 416 806.016 416 800l0-5.312c1.056-8.48 1.056-16.96 0-25.472L416 264.448l416-69.344 0 490.88c-20.32-9.632-44.096-15.2-70.176-15.2-21.28 0-42.816 3.456-63.968 10.336-39.584 12.8-73.568 36.224-95.584 65.984-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304C853.472 894.56 902.176 831.68 895.456 770.56z"})})})]}),(0,e.jsx)("div",{className:c().container,children:(0,e.jsx)("div",{className:c().stage,ref:_})})]})}},214:function(_){_.exports={container:"Home_container__bCOhY",stage:"Home_stage__80p1Q",options:"Home_options__Lxd7W",bgm:"Home_bgm__ro3pg",mute:"Home_mute__Q0jOB",github:"Home_github__cSqgs"}}},function(_){_.O(0,[774,888,179],function(){return _(_.s=8312)}),_N_E=_.O()}]);