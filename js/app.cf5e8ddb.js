(function(e){function t(t){for(var r,s,l=t[0],o=t[1],c=t[2],h=0,f=[];h<l.length;h++)s=l[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],r=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-tic-tac-toe/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},"034f":function(e,t,i){"use strict";var r=i("85ec"),a=i.n(r);a.a},"189a":function(e,t,i){"use strict";var r=i("f9d6"),a=i.n(r);a.a},4077:function(e,t,i){},"85ec":function(e,t,i){},abca:function(e,t,i){"use strict";var r=i("4077"),a=i.n(r);a.a},cd49:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r,a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"columns is-centered is-vcentered is-mobile"},[i("transition",{attrs:{appear:"",name:"animate-flip",mode:"out-in","enter-active-class":"animated flipInY faster","leave-active-class":"animated flipOutY faster"}},[1==e.currentPlayer?i("i",{key:"1",staticClass:"far fa-circle"}):2==e.currentPlayer?i("i",{key:"2",staticClass:"fas fa-times"}):e._e()])],1),i("transition",{attrs:{appear:"",name:"animate-zoomIn","enter-active-class":"animated zoomIn"}},[i("div",{staticClass:"columns is-centered is-mobile"},[i("Grid",{ref:"gameGrid",attrs:{size:3},on:{playerChanged:e.onPlayerChanged,gameOver:e.onGameOver}})],1)]),i("div",{staticClass:"columns is-centered is-mobile"},[i("transition",{attrs:{name:"animate-bounceIn","enter-active-class":"animated bounceIn"}},[e.isGameOver?i("button",{staticClass:"button is-success is-large",on:{click:e.onRestartButtonClicked}},[i("i",{staticClass:"fas fa-redo-alt"})]):e._e()])],1)],1)},s=[],l=i("d4ec"),o=i("bee2"),c=i("99de"),u=i("7e84"),h=i("262e"),f=i("9ab4"),d=i("60a3"),v=i("289d"),p=(i("5abe"),i("5ed1"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grid"},[i("table",[i("tbody",e._l(e.tileMatrix,(function(t,r){return i("tr",{key:r},e._l(t,(function(t,a){return i("td",{key:a},[i("Tile",{attrs:{x:r,y:a,value:t,isHighlighted:e.isReadyToHighlight&&e.isHighlightedTile(r,a),isGameOver:e.isGameOver},on:{tileClicked:e.onTileClicked}})],1)})),0)})),0)])])}),b=[],y=(i("cb29"),i("7db0"),i("2fe1")),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tile",class:{"disable-hover":0!=e.value||e.isGameOver},on:{click:function(t){return e.$emit("tileClicked",e.x,e.y)}}},[i("transition",{attrs:{appear:"",name:"bounce"}},[1==e.value?i("i",{key:"1",staticClass:"far fa-circle",class:{enlarge:e.isHighlighted}}):2==e.value?i("i",{staticClass:"fas fa-times",class:{enlarge:e.isHighlighted}}):e._e()])],1)},g=[];(function(e){e[e["None"]=0]="None",e[e["O"]=1]="O",e[e["X"]=2]="X"})(r||(r={}));var m=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isGameOver=!1,e}return Object(h["a"])(t,e),t}(a["a"]);f["a"]([Object(d["b"])({default:0})],m.prototype,"x",void 0),f["a"]([Object(d["b"])({default:0})],m.prototype,"y",void 0),f["a"]([Object(d["b"])({default:r.None})],m.prototype,"value",void 0),f["a"]([Object(d["b"])({default:!1})],m.prototype,"isHighlighted",void 0),f["a"]([Object(d["b"])({default:!1})],m.prototype,"isGameOver",void 0),m=f["a"]([y["b"]],m);var j=m,x=j,k=(i("189a"),i("2877")),T=Object(k["a"])(x,O,g,!1,null,"4ed2e7af",null),P=(T.exports,function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.tileMatrix=[],e.currentPlayerTile=r.None,e.isGameOver=!1,e.highlightedTilePoints=[],e.isReadyToHighlight=!1,e}return Object(h["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){this.reset(),this.$parent.$on("restart",this.reset)}},{key:"onTileClicked",value:function(e,t){var i=this;if(!this.isGameOver&&this.tileMatrix[e][t]==r.None){this.setTile(e,t,this.currentPlayerTile),this.currentPlayerTile=this.currentPlayerTile===r.O?r.X:r.O,this.$emit("playerChanged",this.currentPlayerTile);var a=this.getConnectionPoints();if(this.isFull()||a.length>0){this.isGameOver=!0,this.highlightedTilePoints=a,setTimeout((function(){i.isReadyToHighlight=!0}),1e3);var n=a[0],s=n?this.tileMatrix[n.x][n.y]:r.None;this.$emit("gameOver",s)}}}},{key:"reset",value:function(){this.isGameOver=!1,this.currentPlayerTile=r.X,this.highlightedTilePoints=[],this.isReadyToHighlight=!1,this.tileMatrix=new Array(this.size);for(var e=0;e<this.size;e++)this.tileMatrix[e]=new Array(this.size),this.tileMatrix[e].fill(r.None);this.$emit("playerChanged",this.currentPlayerTile)}},{key:"setTile",value:function(e,t,i){this.tileMatrix=Object.assign({},this.tileMatrix),this.tileMatrix[e][t]=i}},{key:"isHighlightedTile",value:function(e,t){return void 0!=this.highlightedTilePoints.find((function(i){return i.x==e&&i.y==t}))}},{key:"isFull",value:function(){for(var e=0;e<this.size;e++)for(var t=0;t<this.size;t++)if(this.tileMatrix[t][e]===r.None)return!1;return!0}},{key:"getConnectionPoints",value:function(){for(var e=0;e<this.size;e++){for(var t=!0,i=[],a=this.tileMatrix[0][e],n=0;n<this.size;n++)if(i.push(new M(n,e)),a===r.None||this.tileMatrix[n][e]!=a){t=!1;break}if(t)return i}for(var s=0;s<this.size;s++){for(var l=!0,o=[],c=this.tileMatrix[s][0],u=0;u<this.size;u++)if(o.push(new M(s,u)),c===r.None||this.tileMatrix[s][u]!=c){l=!1;break}if(l)return o}for(var h=this.tileMatrix[0][0],f=!0,d=[],v=0,p=0;v<this.size&&p<this.size;v++,p++)if(d.push(new M(v,p)),h===r.None||this.tileMatrix[v][p]!=h){f=!1;break}if(f)return d;h=this.tileMatrix[0][this.size-1],f=!0,d=[];for(var b=0,y=this.size-1;b<this.size&&y>=0;b++,y--)if(d.push(new M(b,y)),h===r.None||this.tileMatrix[b][y]!=h){f=!1;break}return f?d:[]}}]),t}(a["a"]));f["a"]([Object(d["b"])({default:0})],P.prototype,"size",void 0),P=f["a"]([Object(y["b"])({components:{Tile:m}})],P);var C=P,M=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(l["a"])(this,e),this.x=0,this.y=0,this.x=t,this.y=i},w=C,z=(i("abca"),Object(k["a"])(w,p,b,!1,null,"201e7b08",null)),G=z.exports,_=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isGameOver=!1,e.winner=r.None,e.currentPlayer=r.None,e}return Object(h["a"])(t,e),Object(o["a"])(t,[{key:"onPlayerChanged",value:function(e){this.currentPlayer=e}},{key:"onRestartButtonClicked",value:function(){this.isGameOver=!1,this.winner=r.None,this.$emit("restart")}},{key:"onGameOver",value:function(e){this.isGameOver=!0,this.winner=e}}]),t}(d["c"]);_=f["a"]([Object(d["a"])({components:{Grid:G,Tile:m}})],_);var N=_;_.use(v["a"]);var $=N,H=(i("034f"),Object(k["a"])($,n,s,!1,null,null,null)),R=H.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(R)}}).$mount("#app")},f9d6:function(e,t,i){}});
//# sourceMappingURL=app.cf5e8ddb.js.map