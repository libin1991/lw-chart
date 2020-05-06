!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LWChart=e():t.LWChart=e()}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"f",(function(){return c})),i.d(e,"i",(function(){return h})),i.d(e,"h",(function(){return f})),i.d(e,"g",(function(){return l})),i.d(e,"d",(function(){return u})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return v}));var n="undefined"!=typeof window,a=(!0===n?window.navigator.userAgent:"").toLowerCase(),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=t.length,n=[];for(i>=4&&(n=t.slice(0,4)),3===i&&(n=t.concat(t[1]));n.length<4;)n=n.concat(t);return n.map((function(t){return t*e}))},s=a.indexOf("android")>-1,r=/iphone|ipad|ipod|ios/.test(a),c=s||r,h=function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)},f=function(t,e,i){t&&e&&t.removeEventListener(e,i,!1)},l=function(){return performance?performance.now():Date.now()},u=function(t){for(var e=t,i=0,n=0;null!==e;)i+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent;return{top:i,left:n}},d=function(t){if(t.length<=0)return[];var e=t.length;return t.map((function(i,n){var a=n===e-1?i:t[n+1],o=i.x,s=i.y,r=a.x,c=a.y,h=Math.abs(r-o);return{start:i,end:a,control1:{x:o+h*(1/3),y:s},control2:{x:r-h*(1/3),y:c}}}))},v=function(t,e,i,n,a){a>1&&(a=1);var o=1-a;return t*Math.pow(o,3)+3*e*a*Math.pow(o,2)+3*i*Math.pow(a,2)*o+n*Math.pow(a,3)}},function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return o}));var n=i(0);function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=void 0,this.elWidth=0,this.elHeight=0,this.options={},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasPadding=[0],this.chartWidth=0,this.chartHeight=0,this.chartStartX=0,this.chartStartY=0,this.chartEndX=0,this.chartEndY=0,this.chartPadding=[0],this.titleBarHeight=0,this.mousePosition={x:0,y:0},this.dpi=1,this.el=e,this.mergeOptions(i),this.createCanvas(),this.addMoveHandler()}var e,i,o;return e=t,(i=[{key:"createCanvas",value:function(){if(!1!==n.e){if(this.elWidth=this.el.offsetWidth,this.elHeight=this.el.offsetHeight,this.canvas=document.createElement("canvas"),this.canvas.innerHTML="您的浏览器不支持Canvas",this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("TWChart: get canvas 2D context fail");var t=this.ctx,e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,i=(window.devicePixelRatio||1)/e;i<1&&(i=1),this.dpi=i/e,this.el.innerHTML="",this.el.appendChild(this.canvas)}}},{key:"handleMove",value:function(t){if(this.canvas){if(n.f){var e=Object(n.d)(this.canvas),i=e.top,a=e.left,o=t.targetTouches[0],s=o.pageX,r=o.pageY;this.mousePosition={x:(s-a)*this.dpi,y:(r-i)*this.dpi}}else{var c=t||window.event;c.offsetX||0===c.offsetX?this.mousePosition={x:c.offsetX*this.dpi,y:c.offsetY*this.dpi}:(c.layerX||0===c.layerX)&&(this.mousePosition={x:c.layerX*this.dpi,y:c.layerY*this.dpi})}this.onMove()}}},{key:"addMoveHandler",value:function(){if(this.canvas){var t=n.f?"touchmove":"mousemove";this.removeMoveHandler(),Object(n.i)(this.canvas,t,this.handleMove.bind(this))}}},{key:"removeMoveHandler",value:function(){var t=n.f?"touchmove":"mousemove";Object(n.h)(this.canvas,t,this.handleMove.bind(this))}},{key:"mergeOptions",value:function(t){var e={canvasPadding:[0],canvasBg:"#fff",title:"",titleStyle:void 0,titleBarHeight:30,chartPadding:[0],chartBg:"#fff",chartCursor:"pointer"};this.options=Object.assign({},e,this.options,t);var i=Object(n.b)(this.options.canvasPadding||[0]),a={size:18,font:"PingFangSC-Semibold PingFang SC",weight:"bold",x:i[3],y:i[0],color:"#333"},o=Object.assign({},a,this.options.titleStyle,null==t?void 0:t.titleStyle);this.options.titleStyle=o}},{key:"formatNumParam",value:function(t){return(t||0)*this.dpi}},{key:"drawText",value:function(t,e){if(this.ctx){var i=e.size,n=e.font,a=e.weight,o=e.color,s=e.x,r=e.y,c=e.maxWidth;i=i||16,n=n||"PingFangSC-Semibold PingFang SC",o=o||"#333",s=s||0,r=r||0,this.ctx.save(),this.ctx.font="".concat(a," ").concat(i,"px ").concat(n),this.ctx.fillStyle=o,this.ctx.fillText(t,s,r,c),this.ctx.restore()}}},{key:"drawLine",value:function(t,e,i,n,a,o){this.ctx&&(this.ctx.save(),this.ctx.fillStyle=o,this.ctx.strokeStyle=o,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(i,n),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore())}},{key:"fixPixel",value:function(t){return(t=parseInt(t+""))%2!=0?t+1:t}},{key:"drawRect",value:function(t,e,i,n,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.ctx&&this.canvas&&(this.ctx.save(),this.ctx.beginPath(),t=this.fixPixel(t),e=this.fixPixel(e),i=this.fixPixel(i),n=this.fixPixel(n),this.ctx.rect(t,e,i,n),this.ctx.isPointInPath(this.mousePosition.x,this.mousePosition.y)&&(this.canvas.style.cursor=o),this.ctx.fillStyle=a,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore())}},{key:"drawTitle",value:function(){var t=this,e=this.options,i=e.title,n=e.titleStyle,a=Object.assign({},n);["x","y","size","maxWidth"].map((function(e){if("number"==typeof a[e]){var i=a[e];a[e]=i*t.dpi}})),this.ctx&&i&&(this.ctx.save(),this.ctx.textBaseline="top",this.ctx.textAlign="start",this.drawText(i,a),this.ctx.restore())}},{key:"drawCanvasBg",value:function(){if(this.ctx){var t=this.options.canvasBg;t=t||"#fff",this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.drawRect(0,0,this.canvasWidth,this.canvasHeight,t)}}},{key:"drawChartBg",value:function(){if(this.ctx){var t=this.options.chartBg;t=t||"#fff",this.ctx.clearRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight),this.drawRect(this.chartStartX,this.chartStartY,this.chartWidth,this.chartHeight,t,this.options.chartCursor)}}}])&&a(e.prototype,i),o&&a(e,o),t}()}]).default}));