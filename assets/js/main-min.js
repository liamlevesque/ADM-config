/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

// Rivets.js + Sightglass.js
// version: 0.9.6
// author: Michael Richards
// license: MIT
(function(){function t(t,s,i,h){return new e(t,s,i,h)}function e(t,e,i,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=i,this.objectPath=[],this.update=this.update.bind(this),this.parse(),s(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function s(t){return"object"==typeof t&&null!==t}function i(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,s){var i,h,a=[],o={i:s,path:""};for(i=0;i<t.length;i++)h=t.charAt(i),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var s,h,a=this.interfaces();a.length||i("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(s=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(s=this.options.root||t.root)&&i("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,s),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,i=!1;return this.tokens.forEach(function(h,a){s(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update),this.set(!0,h,e,this.update),this.objectPath[a]=e):(this.set(!0,h,e,this.update),this.objectPath[a]=e),e=this.get(h,e)):(i===!1&&(i=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update))},this),i!==!1&&this.objectPath.splice(i),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(s(this.target)&&this.set(!1,this.key,this.target,this.callback),s(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,(this.value()instanceof Function||this.value()!==e)&&this.callback())},e.prototype.value=function(){return s(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){s(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,s,i){var h=t?"observe":"unobserve";this.adapter(e)[h](s,e.path,i)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,s){(t=this.objectPath[s])&&this.set(!1,e,t,this.update)},this),s(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
(function(){var t,e,i,n,r,s=function(t,e){return function(){return t.apply(e,arguments)}},o=[].slice,u={}.hasOwnProperty,l=function(t,e){function i(){this.constructor=t}for(var n in e)u.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler","executeFunctions"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s,o;if(null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],s=e.template.call(this,i),s instanceof HTMLElement){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(s)}else i.innerHTML=s;return r=e.initialize.call(this,i,n),o=new t.View(i,r),o.bind(),o}}},window.jQuery||window.$?(i=window.jQuery||window.$,r="on"in i.prototype?["on","off"]:["bind","unbind"],e=r[0],n=r[1],t.Util={bindEvent:function(t,n,r){return i(t)[e](n,r)},unbindEvent:function(t,e,r){return i(t)[n](e,r)},getInputValue:function(t){var e;return e=i(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:""===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var r,o,u,l,h,a,p,d,c,f,b,v,m;for(this.els=e,this.models=i,null==n&&(n={}),this.update=s(this.update,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.select=s(this.select,this),this.traverse=s(this.traverse,this),this.build=s(this.build,this),this.buildBinding=s(this.buildBinding,this),this.bindingRegExp=s(this.bindingRegExp,this),this.options=s(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(r in f)u=f[r],this[o][r]=u}b=t["public"][o];for(r in b)u=b[r],null==(l=this[o])[r]&&(l[r]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(m=n[o])?m:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r)for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),c=0,b=v.length;b>c;c++)s=v[c],i(s)}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(m=n||e.attributes,d=0,f=m.length;f>d;d++)i=m[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.bind()},e.prototype.unbind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},e.prototype.sync=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],"function"==typeof t.sync&&t.sync()},e.prototype.publish=function(){var t,e,i,n;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),e=0,i=n.length;i>e;e++)t=n[e],t.publish()},e.prototype.update=function(t){var e,i,n,r,s,o;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,r=0,s=o.length;s>r;r++)e=o[r],"function"==typeof e.update&&e.update(t)},e}(),t.Binding=function(){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.getValue=s(this.getValue,this),this.update=s(this.update,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.set=s(this.set,this),this.eventHandler=s(this.eventHandler,this),this.formattedValue=s(this.formattedValue,this),this.parseFormatterArguments=s(this.parseFormatterArguments,this),this.parseTarget=s(this.parseTarget,this),this.observe=s(this.observe,this),this.setBinder=s(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),e.type===t.TypeParser.types.primitive?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.parseFormatterArguments=function(e,i){var n,r,s,o,u,l,h;for(e=function(){var i,n,s;for(s=[],i=0,n=e.length;n>i;i++)r=e[i],s.push(t.TypeParser.parse(r));return s}(),o=[],n=l=0,h=e.length;h>l;n=++l)r=e[n],o.push(r.type===t.TypeParser.types.primitive?r.value:((u=this.formatterObservers)[i]||(u[i]={}),(s=this.formatterObservers[i][n])?void 0:(s=this.observe(this.view.models,r.value,this.sync),this.formatterObservers[i][n]=s),s.value()));return o},e.prototype.formattedValue=function(t){var e,i,n,r,s,u,l,h,a;for(h=this.formatters,i=u=0,l=h.length;l>u;i=++u)n=h[i],e=n.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),r=e.shift(),n=this.view.formatters[r],s=this.parseFormatterArguments(e,i),(null!=n?n.read:void 0)instanceof Function?t=(a=n.read).call.apply(a,[this.model,t].concat(o.call(s))):n instanceof Function&&(t=n.call.apply(n,[this.model,t].concat(o.call(s))));return t},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(e){var i;return e=e instanceof Function&&!this.binder["function"]&&t["public"].executeFunctions?this.formattedValue(e.call(this.model)):this.formattedValue(e),null!=(i=this.binder.routine)?i.call(this,this.el,e):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,s,u,l,h,a,p,d,c;if(this.observer){for(l=this.getValue(this.el),s=this.formatters.length-1,p=this.formatters.slice(0).reverse(),i=h=0,a=p.length;a>h;i=++h)n=p[i],e=s-i,t=n.split(/\s+/),r=t.shift(),u=this.parseFormatterArguments(t,e),(null!=(d=this.view.formatters[r])?d.publish:void 0)&&(l=(c=this.view.formatters[r]).publish.apply(c,[l].concat(o.call(u))));return this.observer.setValue(l)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(e,i,n){var r,o,u,l,a,p,d,c;for(this.view=e,this.el=i,this.type=n,this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.locals=s(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},o=e.bindingRegExp(),d=this.el.attributes||[],a=0,p=d.length;p>a;a++)r=d[a],o.test(r.name)||(u=this.camelCase(r.name),l=t.TypeParser.parse(r.value),h.call(null!=(c=this.component["static"])?c:[],u)>=0?this["static"][u]=r.value:l.type===t.TypeParser.types.primitive?this["static"][u]=l.value:this.observers[u]=r.value)}return l(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}m=this.view[s];for(e in m)l=m[e],null==(h=o[s])[e]&&(h[e]=l)}for(y=t.options,p=0,c=y.length;c>p;p++)s=y[p],o[s]=null!=(g=this.component[s])?g:this.view[s];this.componentView=new t.View(Array.prototype.slice.call(this.el.childNodes),u,o),this.componentView.bind(),w=this.observers;for(i in w)r=w[i],this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r))}},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.sync=s(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return l(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var n,r,s,o,u,l,a;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=i(t),(null!=e?e.toString():void 0)!==(null!=(o=t.val())?o.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(a=[],r=0,s=t.length;s>r;r++)n=t[r],a.push(n.selected=(u=n.value,h.call(e,u)>=0));return a}}else if((null!=e?e.toString():void 0)!==(null!=(l=t.value)?l.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n;if(null!=this.iterated)for(n=this.iterated,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w,k,x;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,m=w.length;m>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,y=i.length;y>b;o=++b)if(l=i[o],r={index:o},r[t["public"].iterationAlias(h)]=o,r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName)for(x=this.view.bindings,v=0,g=x.length;g>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type&&n.sync()},update:function(t){var e,i,n,r,s,o,u;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,s=0,o=u.length;o>s;s++)r=u[s],r.update(e)}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].formatters.call=function(){var t,e;return e=arguments[0],t=2<=arguments.length?o.call(arguments,1):[],e.call.apply(e,[this].concat(o.call(t)))},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,l;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,l=r.length;l>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),h.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(i){return function(r){var o,u,l,a,p;if(r!==s&&(i.unobserveMutations(s,t[i.id],e),s=r,u=i.weakmap[t[i.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),l=0,a=p.length;a>l;l++)o=p[l],h.call(n[e],o)>=0&&o();return i.observeMutations(r,t[i.id],e)}}}(this)}))),h.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||(delete s.callbacks[e],this.unobserveMutations(t[e],t[this.id],e))),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);

/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
var List=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,r){function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var i=r(4),s=/\s+/;Object.prototype.toString;t.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),r=i(e,t);return~r||e.push(t),this.el.className=e.join(" "),this},n.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),r=i(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},n.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),r=e.split(s);return""===r[0]&&r.shift(),r},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~i(this.array(),t)}},function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"",a=r(5);e.bind=function(t,e,r,i){t=a(t);for(var o=0;o<t.length;o++)t[o][n](s+e,r,i||!1)},e.unbind=function(t,e,r,n){t=a(t);for(var o=0;o<t.length;o++)t[o][i](s+e,r,n||!1)}},function(t,e){t.exports=function(t){return function(e,r,n){var i=this;this._values={},this.found=!1,this.filtered=!1;var s=function(e,r,n){if(void 0===r)n?i.values(e,n):i.values(e);else{i.elm=r;var s=t.templater.get(i,e);i.values(s)}};this.values=function(e,r){if(void 0===e)return i._values;for(var n in e)i._values[n]=e[n];r!==!0&&t.templater.set(i,i.values())},this.show=function(){t.templater.show(i)},this.hide=function(){t.templater.hide(i)},this.matching=function(){return t.filtered&&t.searched&&i.found&&i.filtered||t.filtered&&!t.searched&&i.filtered||!t.filtered&&t.searched&&i.found||!t.filtered&&!t.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=t.list)},s(e,r,n)}}},function(t,e){var r=function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)},n=function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)},i=function(t,e,r){for(var n=[],i="*",s=t.getElementsByTagName(i),a=s.length,o=new RegExp("(^|\\s)"+e+"(\\s|$)"),l=0,u=0;l<a;l++)if(o.test(s[l].className)){if(r)return s[l];n[u]=s[l],u++}return n};t.exports=function(){return function(t,e,s,a){return a=a||{},a.test&&a.getElementsByClassName||!a.test&&document.getElementsByClassName?r(t,e,s):a.test&&a.querySelector||!a.test&&document.querySelector?n(t,e,s):i(t,e,s)}}()},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){function r(t){return"[object Array]"===Object.prototype.toString.call(t)}t.exports=function(t){if("undefined"==typeof t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(r(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],n=0;n<t.length;n++)(Object.prototype.hasOwnProperty.call(t,n)||n in t)&&e.push(t[n]);return e.length?e:[]}},function(t,e){t.exports=function(t){return t=void 0===t?"":t,t=null===t?"":t,t=t.toString()}},function(t,e){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e){t.exports=function(t){var e=function(r,n,i){var s=r.splice(0,50);i=i||[],i=i.concat(t.add(s)),r.length>0?setTimeout(function(){e(r,n,i)},1):(t.update(),n(i))};return e}},function(t,e){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,i=r.length;n<i;n++){var s=r[n];e(s)?s.filtered=!0:s.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},function(t,e,r){var n=(r(0),r(1)),i=r(7),s=r(6),a=r(3),o=r(19);t.exports=function(t,e){e=e||{},e=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e);var r={search:function(n,i){for(var s=e.multiSearch?n.replace(/ +$/,"").split(/ +/):[n],a=0,o=t.items.length;a<o;a++)r.item(t.items[a],i,s)},item:function(t,e,n){for(var i=!0,s=0;s<n.length;s++){for(var a=!1,o=0,l=e.length;o<l;o++)r.values(t.values(),e[o],n[s])&&(a=!0);a||(i=!1)}t.found=i},values:function(t,r,n){if(t.hasOwnProperty(r)){var i=s(t[r]).toLowerCase();if(o(i,n,e))return!0}return!1}};return n.bind(a(t.listContainer,e.searchClass),"keyup",function(e){var n=e.target||e.srcElement;t.search(n.value,r.search)}),function(e,n){t.search(e,n,r.search)}}},function(t,e,r){var n=r(18),i=r(3),s=r(7),a=r(4),o=r(1),l=r(6),u=r(0),c=r(17),f=r(5);t.exports=function(t,e,h){var d,v=this,m=r(2)(v),g=r(8)(v),p=r(12)(v);d={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:i,extend:s,indexOf:a,events:o,toString:l,naturalSort:n,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=i(v.listContainer,v.listClass,!0),v.parse=r(13)(v),v.templater=r(16)(v),v.search=r(14)(v),v.filter=r(9)(v),v.sort=r(15)(v),v.fuzzySearch=r(10)(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==h&&v.add(h)},pagination:function(){if(void 0!==e.pagination){e.pagination===!0&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,r=e.pagination.length;t<r;t++)p(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,r=v.items.length;e<r;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(e)return void g(t,e);var r=[],n=!1;void 0===t[0]&&(t=[t]);for(var i=0,s=t.length;i<s;i++){var a=null;n=v.items.length>v.page,a=new m(t[i],void 0,n),v.items.push(a),r.push(a)}return v.update(),r}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,r){for(var n=0,i=0,s=v.items.length;i<s;i++)v.items[i].values()[t]==e&&(v.templater.remove(v.items[i],r),v.items.splice(i,1),s--,i--,n++);return v.update(),n},this.get=function(t,e){for(var r=[],n=0,i=v.items.length;n<i;n++){var s=v.items[n];s.values()[t]==e&&r.push(s)}return r},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var r=v.handlers[t],n=a(r,e);return n>-1&&r.splice(n,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[r].show(),v.visibleItems.push(t[r]),v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return v.trigger("updated"),v},d.start()}},function(t,e,r){var n=r(0),i=r(1),s=r(11);t.exports=function(t){var e=function(e,i){var s,o=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(o/u),f=Math.ceil(l/u),h=i.innerWindow||2,d=i.left||i.outerWindow||0,v=i.right||i.outerWindow||0;v=c-v,e.clear();for(var m=1;m<=c;m++){var g=f===m?"active":"";r.number(m,d,v,f,h)?(s=e.add({page:m,dotted:!1})[0],g&&n(s.elm).add(g),a(s.elm,m,u)):r.dotted(e,m,d,v,f,h,e.size())&&(s=e.add({page:"...",dotted:!0})[0],n(s.elm).add("disabled"))}},r={number:function(t,e,r,n,i){return this.left(t,e)||this.right(t,r)||this.innerWindow(t,n,i)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,r){return t>=e-r&&t<=e+r},dotted:function(t,e,r,n,i,s,a){return this.dottedLeft(t,e,r,n,i,s)||this.dottedRight(t,e,r,n,i,s,a)},dottedLeft:function(t,e,r,n,i,s){return e==r+1&&!this.innerWindow(e,i,s)&&!this.right(e,n)},dottedRight:function(t,e,r,n,i,s,a){return!t.items[a-1].values().dotted&&(e==n&&!this.innerWindow(e,i,s)&&!this.right(e,n))}},a=function(e,r,n){i.bind(e,"click",function(){t.show((r-1)*n+1,n)})};return function(r){var n=new s(t.listContainer.id,{listClass:r.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});t.on("updated",function(){e(n,r)}),e(n,r)}}},function(t,e,r){t.exports=function(t){var e=r(2)(t),n=function(t){for(var e=t.childNodes,r=[],n=0,i=e.length;n<i;n++)void 0===e[n].data&&r.push(e[n]);return r},i=function(r,n){for(var i=0,s=r.length;i<s;i++)t.items.push(new e(n,r[i]))},s=function(e,r){var n=e.splice(0,50);i(n,r),e.length>0?setTimeout(function(){s(e,r)},1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=n(t.list),r=t.valueNames;t.indexAsync?s(e,r):i(e,r)}}},function(t,e){t.exports=function(t){var e,r,n,i,s={resetList:function(){t.i=1,t.templater.clear(),i=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?r=t[1]:2==t.length&&"function"==typeof t[1]?(r=void 0,i=t[1]):3==t.length?(r=t[1],i=t[2]):r=void 0},setColumns:function(){0!==t.items.length&&void 0===r&&(r=void 0===t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=t.utils.toString(e).toLowerCase(),e=e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},a={list:function(){for(var e=0,r=t.items.length;e<r;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,n=r.length;e<n;e++)if(a.values(t.values(),r[e]))return void(t.found=!0)},values:function(r,i){return!!(r.hasOwnProperty(i)&&(e=t.utils.toString(r[i]).toLowerCase(),""!==n&&e.search(n)>-1))},reset:function(){t.reset.search(),t.searched=!1}},o=function(e){return t.trigger("searchStart"),s.resetList(),s.setSearchString(e),s.setOptions(arguments),s.setColumns(),""===n?a.reset():(t.searched=!0,i?i(n,r):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",function(e){var r=e.target||e.srcElement,n=""===r.value&&!t.searched;n||o(r.value)}),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",function(t){var e=t.target||t.srcElement;""===e.value&&o("")}),o}},function(t,e){t.exports=function(t){var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");"false"===n?r.insensitive=!1:r.insensitive=!0},setOrder:function(r){for(var n=0,i=e.els.length;n<i;n++){var s=e.els[n];if(t.utils.getAttribute(s,"data-sort")===r.valueName){var a=t.utils.getAttribute(s,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(s).add(r.order):t.utils.classes(s).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):(r=arguments[1]||r,r.valueName=arguments[0],r.order=r.order||"asc",r.insensitive="undefined"==typeof r.insensitive||r.insensitive),e.clear(),e.setOrder(r);var i,s=r.sortFunction||t.sortFunction||null,a="desc"===r.order?-1:1;i=s?function(t,e){return s(t,e,r)*a}:function(e,n){var i=t.utils.naturalSort;return i.alphabet=t.alphabet||r.alphabet||void 0,!i.alphabet&&r.insensitive&&(i=t.utils.naturalSort.caseInsensitive),i(e.values()[r.valueName],n.values()[r.valueName])*a},t.items.sort(i),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},function(t,e){var r=function(t){var e,r=this,n=function(){e=r.getItemSource(t.item),e&&(e=r.clearSourceItem(e,t.valueNames))};this.clearSourceItem=function(e,r){for(var n=0,i=r.length;n<i;n++){var s;if(r[n].data)for(var a=0,o=r[n].data.length;a<o;a++)e.setAttribute("data-"+r[n].data[a],"");else r[n].attr&&r[n].name?(s=t.utils.getByClass(e,r[n].name,!0),s&&s.setAttribute(r[n].attr,"")):(s=t.utils.getByClass(e,r[n],!0),s&&(s.innerHTML=""));s=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var r=t.list.childNodes,n=0,i=r.length;n<i;n++)if(void 0===r[n].data)return r[n].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var s=document.createElement("tbody");return s.innerHTML=e,s.firstChild}if(e.indexOf("<")!==-1){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var o=document.getElementById(t.item);if(o)return o}},this.get=function(e,n){r.create(e);for(var i={},s=0,a=n.length;s<a;s++){var o;if(n[s].data)for(var l=0,u=n[s].data.length;l<u;l++)i[n[s].data[l]]=t.utils.getAttribute(e.elm,"data-"+n[s].data[l]);else n[s].attr&&n[s].name?(o=t.utils.getByClass(e.elm,n[s].name,!0),i[n[s].name]=o?t.utils.getAttribute(o,n[s].attr):""):(o=t.utils.getByClass(e.elm,n[s],!0),i[n[s]]=o?o.innerHTML:"");o=void 0}return i},this.set=function(e,n){var i=function(e){for(var r=0,n=t.valueNames.length;r<n;r++)if(t.valueNames[r].data){for(var i=t.valueNames[r].data,s=0,a=i.length;s<a;s++)if(i[s]===e)return{data:e}}else{if(t.valueNames[r].attr&&t.valueNames[r].name&&t.valueNames[r].name==e)return t.valueNames[r];if(t.valueNames[r]===e)return e}},s=function(r,n){var s,a=i(r);a&&(a.data?e.elm.setAttribute("data-"+a.data,n):a.attr&&a.name?(s=t.utils.getByClass(e.elm,a.name,!0),s&&s.setAttribute(a.attr,n)):(s=t.utils.getByClass(e.elm,a,!0),s&&(s.innerHTML=n)),s=void 0)};if(!r.create(e))for(var a in n)n.hasOwnProperty(a)&&s(a,n[a])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n=e.cloneNode(!0);return n.removeAttribute("id"),t.elm=n,r.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},n()};t.exports=function(t){return new r(t)}},function(t,e){t.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,i=n.length,s=0;s<i;s++)void 0!==e[s]&&e[s].nodeName===e&&(r=e[s].nodeValue);return r}},function(t,e,r){"use strict";function n(t){return t>=48&&t<=57}function i(t,e){for(var r=(t+="").length,i=(e+="").length,s=0,l=0;s<r&&l<i;){var u=t.charCodeAt(s),c=e.charCodeAt(l);if(n(u)){if(!n(c))return u-c;for(var f=s,h=l;48===u&&++f<r;)u=t.charCodeAt(f);for(;48===c&&++h<i;)c=e.charCodeAt(h);for(var d=f,v=h;d<r&&n(t.charCodeAt(d));)++d;for(;v<i&&n(e.charCodeAt(v));)++v;var m=d-f-v+h;if(m)return m;for(;f<d;)if(m=t.charCodeAt(f++)-e.charCodeAt(h++))return m;s=d,l=v}else{if(u!==c)return u<o&&c<o&&a[u]!==-1&&a[c]!==-1?a[u]-a[c]:u-c;++s,++l}}return r-i}var s,a,o=0;i.caseInsensitive=i.i=function(t,e){return i((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return s},set:function(t){s=t,a=[];var e=0;if(s)for(;e<s.length;e++)a[s.charCodeAt(e)]=e;for(o=a.length,e=0;e<o;e++)void 0===a[e]&&(a[e]=-1)}}}),t.exports=i},function(t,e){t.exports=function(t,e,r){function n(t,r){var n=t/e.length,i=Math.abs(o-r);return s?n+i/s:i?1:n}var i=r.location||0,s=r.distance||100,a=r.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var o=i,l=function(){var t,r={};for(t=0;t<e.length;t++)r[e.charAt(t)]=0;for(t=0;t<e.length;t++)r[e.charAt(t)]|=1<<e.length-t-1;return r}(),u=a,c=t.indexOf(e,o);c!=-1&&(u=Math.min(n(0,c),u),c=t.lastIndexOf(e,o+e.length),c!=-1&&(u=Math.min(n(0,c),u)));var f=1<<e.length-1;c=-1;for(var h,d,v,m=e.length+t.length,g=0;g<e.length;g++){for(h=0,d=m;h<d;)n(g,o+d)<=u?h=d:m=d,d=Math.floor((m-h)/2+h);m=d;var p=Math.max(1,o-d+1),C=Math.min(o+d,t.length)+e.length,y=Array(C+2);y[C+1]=(1<<g)-1;for(var b=C;b>=p;b--){var w=l[t.charAt(b-1)];if(0===g?y[b]=(y[b+1]<<1|1)&w:y[b]=(y[b+1]<<1|1)&w|((v[b+1]|v[b])<<1|1)|v[b+1],y[b]&f){var x=n(g,b-1);if(x<=u){if(u=x,c=b-1,!(c>o))break;p=Math.max(1,2*o-c)}}}if(n(g+1,o)>u)break;v=y}return!(c<0)}}]);

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dragula=e()}}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});

/*! tooltipster v4.2.5 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.5",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){var e=null;if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{e=c.__geometry();var f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b,geo:e})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&e.__options.animationDuration[1]>0&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state?b.option("animationDuration",0)._close(null,null,!0):b.__timeoutsClear(),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),
this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});

//THIS FILE PULLS IN ALL OF THE JAVASCRIPT DEPENDENCIES AND THE MODELS FOR EACH FUNCTIONAL AREA

function formatprice(amt){
	if(amt === 0) return 0;
	else if(!amt) return null;

	var price;

	if($('#js--body').hasClass('INR')) 
		price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1<span class="divider"></span>');
	else 
		price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '<span class="divider"></span>');

	return price; 
};
 
rivets.formatters.price = function(value){
	return formatprice(value);
};

rivets.formatters.compare = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;
	
	if(typeof comparisons == "string"){
		var args = comparisons.split(',');
		if(args.includes(value)) return true;
	}
	else if(comparisons === value) return true;
	
	return false;
};

rivets.formatters.greaterthan = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;

	if(value > comparisons) return true;
	else return false;
};

rivets.binders.addtextclass = function(el,value){
	if(value === "") return false;
	$(el).removeClass().addClass('s-'+ value);
};

rivets.binders.ccyclass = function(el,value){
	if(value === "") return false;
	$(el).addClass(value);
};

rivets.binders.percenttowidth = function(el,value){
	$(el).css({'transform':"scaleX("+value/100+")"});
};

rivets.binders.sortclasses = function(el,value){
	var thiscolumn = $(el).data('column');
	var direction = dataObject.sortdirection;
	$(el).removeClass('s-active-sort s-sort-asc s-sort-desc');
	
	if(value === thiscolumn) $(el).addClass('s-active-sort s-sort-'+direction);
};

rivets.binders.ischecked = function(el,value){
	if(value) $(el).prop('checked',true);
	else $(el).prop('checked',false);
};

rivets.binders.lotgroupdecor = function(el,value){
	if(value === 'start') $(el).addClass('s-group-start');
	if(value === 'mid') $(el).addClass('s-group');
	if(value === 'end') $(el).addClass('s-group-end');
};

rivets.formatters.indexof = function(list,item){
	if(list.indexOf(item) >= 0) return true;
	else return false;
};


rivets.formatters.divide = function(value,divisor){
	return Math.floor((value/divisor*100));
};

rivets.formatters.lengthToBool = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length === 0) return false;
	return true;
};

rivets.formatters.invalidinput = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length === 0) return false;
	if(value.match(/[^A-Za-z0-9-_]/gi) != null) return false;
	return true;
};

rivets.formatters.lengthGreaterThanOne = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length > 1) return true;
	return false;
};

rivets.formatters.inverseLengthToBool = function(value){
	if(typeof value === 'undefined') return true;
	if(value.length === 0) return true;
	return false;
};

rivets.formatters.length = function(value){
	if(typeof value === 'undefined') return 0;
	return value.length;
};

rivets.formatters.invert = function(value){
	console.log(value);
	if(typeof value != "undefined") return false;
	return true;
};

rivets.formatters.propertyList = function(obj) {
  return (function() {
    var properties = []
    for (key in obj) {
      properties.push({key: key, value: obj[key]})
    }
    return properties
  });
};

rivets.formatters.findShortcuts = function(arr,index){
	if(typeof arr[index] === 'undefined') return false;
	return arr[index].shortcuts;
};

rivets.formatters.and = function(value,item){
	if(value && item) return true;
	return false;
};

rivets.binders.backgroundsrc = function(el,value){
	$(el).css({'background-image':value});
}

rivets.formatters.formatThousands = function(value){
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

rivets.formatters.disablePhotoDownload = function(value, arg){
	if(typeof value == "undefined" || typeof arg == "undefined") return true;
	if(arg.length === 0 && value) return false;
	return true;
}





const lotlist = [
		{
			"lotNumber" : "2741",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp1.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false
		},
		{
			"lotNumber" : "2745",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":[
				{"src": "assets/img/vramp1.jpg","disabled":false}
			],
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp5.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false
		},
		{
			"lotNumber" : "2745A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'start',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/no-photo.jpg",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"unused" : true
		},
		{
			"lotNumber" : "2743",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : "out",
			"description" : "2012 Manitou 4x4 Bucket Lift #2",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				
			],
			"usage" : "90000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift #3",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2742",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2743",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : "out",
			"description" : "2012 Manitou 4x4 Bucket Lift #2",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "90000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift #3",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2742",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2743",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'end',
			"video":false,
			"status" : "out",
			"description" : "2012 Manitou 4x4 Bucket Lift #2",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "90000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift #3",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2744",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift #3",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'start',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'end',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'start',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'end',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'start',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'end',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'start',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'mid',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": 'end',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "out",
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2746",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : "sold",
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2747",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2749",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2750",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2751",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "27444A",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2753",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2754",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp4.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2755",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2756",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2757",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2758",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2759",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2760",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2761",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2762",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2763",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2764",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2765",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2766",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2767",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2768",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2769",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2770",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2771",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2772",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2773",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2774",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2775",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2776",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2777",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2778",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2779",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2780",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2781",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2782",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2783",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2784",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2785",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2786",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2787",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2788",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2789",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2012 Manitou 4x4 Bucket Lift for Liam",
			"photo" : "assets/img/vramp2.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2790",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		},
		{
			"lotNumber" : "2791",
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": '',
			"video":false,
			"status" : null,
			"description" : "2008 Manitou 4x4 Bucket Lift",
			"photo" : "assets/img/vramp3.png",
			"photos": [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"active":false
		}
	];

$(function(){
	if($('#js-media-list').length > 0){
		medialist = new List('js-media-list',listOptions);
		medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});
	} 

	if($('#js-sale-list').length > 0){
		saleList = new List('js-sale-list',saleListOptions);
	} 

	if($('.js-header-waypoint').length > 0){
		var waypoint = new Waypoint({
		  element: $('.js-header-waypoint'),
		  handler: function(direction) {
		    $('.js-sticky-header').toggleClass('s-fixed');
		  }
		});
	} 

	$('.js-filter-readout').tooltipster({
		content: $('.js-filter-popup'),
		animation: 'fade',
		animationDuration: 0,
		arrow: false,
		theme: 'ritchie-tooltips',
		trigger: 'custom',
		interactive: true,
		delay: 0,
		triggerOpen: {
	        click: true
	    },
	    triggerClose: {
	        click: true,
	    },
		side: 'bottom',
	});

	$('.js-export-popup-toggle').tooltipster({
		content: $('.js-export-popup'),
		animation: 'fade',
		animationDuration: 0,
		arrow: false,
		theme: 'ritchie-tooltips',
		trigger: 'custom',
		interactive: true,
		delay: 0,
		triggerOpen: {
	        click: true
	    },
	    triggerClose: {
	        click: true,
	    },
		side: 'bottom',
	});

	if($('.swiper-container').length > 0){
		initializeSlideshow();
	};
	

	$('.js-pres-settings').on('change keyup',function(){
		dataObject.savePresChangeVisible = true;
		dataObject.resetChangesVisible = true;
	});

	$('.js-advanced-settings').on('change keyup',function(){
		dataObject.savePresChangeVisible = true;
		dataObject.resetChangesVisible = true;
	});

	
}); 

var drake;
var medialist;

const listOptions = {
	valueNames:["js-lotnumber",
				"js-lotequipid",
				"js-lotvideo",
				"js-lotphoto",
				"js-lotnotes",
				"js-lotflagged",
				"js-lotupdated",
				{data:['lot']},
			],
};

var saleList;
const saleListOptions = {
	valueNames:["jsSaleName",
				"jsSaleNumber",
			],
};

const relativeURL = function(target){
	let location = window.location.pathname.split('/');
	location.pop();
	return location.join('/')+target;
};

const cleanPathname = function(){
	let location = window.location.pathname.split('/');
	location = '/' + location.pop();
	return location;
};

const dataObject = {
	activePage: cleanPathname(),
	auctionName: 'Regina, Sk',
	auctionLots: {
		haveData: false,
		downloaded: 2500,
	},
	auctionPhotos:{
		haveData: false,
		downloaded: 1582,
		missingHero: 7,
		withVideo: 21,
	},
	auctionOtherRings: 3,

	getOtherSalesVisible: false,
	dataCenterSwitchVisible: false,
	deleteEventVisible: false,
	addDisplayVisible: false,
	displayList: [],
	tempDisplay: {},
	saveDisplayAllowed: false,
	historyExpanded: false,
	CCYSettingsVisible: false,
	confirmDeleteDisplayVisible: false,
	downloadPhotosSettingsVisible: false,

	altccys:[
		{
			ccy: 'AUD',
			symbol: '$',
			rate: 1.01,
			format: '$999,999,999.99'
		},
		{
			ccy: 'JPY',
			symbol: '$',
			rate: 107.2,
			format: '¥999,999,999.99'
		}
	],
	ccys: [
		{
			ccy: 'CAD',
			symbol: '$',
			rate: 0.79,
			format: '$999,999,999.99'
		},
		{
			ccy: 'USD',
			symbol: '$',
			rate: 1.213,
			format: '$999,999,999.99'
		},
		{
			ccy: 'AUD',
			symbol: '$',
			rate: 1.01,
			format: '$999,999,999.99'
		},
		{
			ccy: 'JPY',
			symbol: '$',
			rate: 107.2,
			format: '¥999,999,999.99'
		},
	],

	dataCenter2: false,
	confirmSwitchDataCenter: false,
	salesList: [
		{
			name: "Orlando, FL",
			number: "2017345-1",
			ring: 1,
			totalRings: 3,
			hasTal: true,
		},
		{
			name: "Regina, SK",
			number: "2017101-1",
			ring: 1,
			totalRings: 3,
			hasTal: true,
		},
		{
			name: "Regina, SK",
			number: "2017101-2",
			ring: 2,
			totalRings: 3,
			hasTal: true,
		},
		{
			name: "Edmonton, AB",
			number: "2017345-1",
			ring: 1,
			totalRings: 3,
			hasTal: true,
		},

	],

	lots: lotlist,
	sortedColumn: 'js-lotnumber',
	sortdirection: 'asc',
	filterRangeStart: null,
	filterRangeEnd: null,
	mediaFilters: ['All Lots'],
	sendEmailVisible: false,
	mediaImportVisible: false,
	mediaProcessingVisible: false,
	mediaConflictVisible: false,
	mediaDoneVisible: false,


	activeTab: 'general',
	savePresChangeVisible: false,
	savedConfirmationVisible: false,
	processingChangeVisible: false,
	resetChangesVisible: false,
	slideDuration: 8,
	slideAutoPlay: true,
	cycleChoiceGroup: true,
	lotpres: [
				{"src": "assets/img/lot1.jpg","disabled":false},
				{"src": "assets/img/lot2.jpg","disabled":false},
				{"src": "assets/img/lot3.jpg","disabled":false},
				{"src": "assets/img/lot4.jpg","disabled":false}
			],
	slideshowSettingVisibile:false,
	mktgSlideDuration: 8,
	mktgpres: [
				{"src": "assets/img/mktg1.jpg","disabled":false},
				{"src": "assets/img/mktg2.jpg","disabled":false},
				{"src": "assets/img/mktg3.jpg","disabled":false},
				{"src": "assets/img/mktg4.jpg","disabled":false}
			],
	mktgprespre: [],
	deleteSlideVisible: false,
	presentation: {
		ring: 'Ring 1',
		lots: 'Lots 1 - 451, 8001 - 8012',
		welcomeMsg: '',
		startLabel: '',
		startTime: '',
		bidEnded: '',
		tomorrowLabel: '',
		tomorrowTime: '',
		tomorrowLots: '',
		pausedExplanation: 'We are currently experiencing technical difficulties and will resume shortly.',
		pausedMsg: '',
		ring2start: 'Starts ~ 09:00',
		ring3start: 'Starts ~ 11:00',
		talstart: 'Lots start closing Tuesday'
	},

	manageMessageGroupVisible: false,
	confirmDeleteShortcutsVisible: false,
	currentShortcuts: 0,
	keyboardShortcuts: [
	],
	clonedshortcuts: {},
	tempshortcuts: {
		name: '',
		shortcuts: [
			{
				key: 'f1',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f2',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f3',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f4',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f6',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f7',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f8',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f9',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f10',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f12',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			
		]
	},

	haveTriedToDownload: false,
	noInventoryErrorVisible: false,
	downloads:[
		{
			title: "Downloading Photos",
			progress: 8,
			checkprogress: 0,
			items: 20,
			error: false,
			active: false,
		},
		{
			title: "Downloading Lots",
			progress: 5,
			items: 200,
			error: false,
			active: false,
		}
	],
	downloadStarted: false,
	hasDownloaded: false,
	photoDownloadInput: '',
	photoDownloadLotSelected: false,
	photoDownloadLotInput: '',
	confirmMediaSentVisible: false,
	cancelDownloadVisible: false,
	cancelDownloadContext: null,

	reportClerkActivity:false,
	reportRecipient: '',
	confirmReportSentVisible: false,
	techReportRecipient: '',
	systemReportTypeSelected: false,

	advancedUserName: '',
	acceptedGraveResponsibility: false,
};

var mySwiper = null;

const initializeSlideshow = function(){
	if(mySwiper != null) mySwiper.destroy(false,true);
	mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay: (dataObject.slideAutoPlay)? dataObject.slideDuration * 1000 : 0,
		speed: 300,
		effect: "coverflow",
	})
};

function customKeyboardShortcuts(current,name){
	let newObj = jQuery.extend(true,{},current);
	newObj.name = name;
	return newObj;
}

dataObject.keyboardShortcuts.push(customKeyboardShortcuts(dataObject.tempshortcuts,'Default'));

const controller = {
	gotoPage: function(e){
		let target = $(e.currentTarget).data('targetpage');
		window.location.pathname = relativeURL(target);
	},

	gotoTab: function(e){
		let target = $(e.currentTarget).data('targetpage');
		dataObject.activeTab = target;

		if($('.swiper-container').length > 0){
			initializeSlideshow();
		};

		if($('.js-media-drag').length > 0){
			drake = dragula([$('.js-media-drag')], { revertOnSpill: true , direction: 'vertical'}).on('drag',function(e){
				console.log('drag');
			});
			console.log(drake);
		}
	},

	refreshData: function(e){
		$(e.currentTarget).addClass('s-loading');
		setTimeout(function(){
			$(e.currentTarget).removeClass('s-loading').addClass('s-success');

			setTimeout(function(){
				$(e.currentTarget).removeClass('s-success');
			},3000);

		},5000);
	},

	checkDownloadLotImages: function(e){
		$('.js-downloadLotImages').attr('checked','true');
		dataObject.photoDownloadLotSelected = true;
	},

	toggleConfirmSwitchDataCenter: function(e){
		dataObject.confirmSwitchDataCenter = !dataObject.confirmSwitchDataCenter;

		if(!dataObject.confirmSwitchDataCenter) dataObject.dataCenterSwitchVisible = false;
	},

	toggleGetOtherSales: function(e){
		dataObject.getOtherSalesVisible = !dataObject.getOtherSalesVisible;
	},
	filterSales: function(e){
		let query = $(e.currentTarget).val();
		saleList.filter(function(item) {
			if (item.values().jsSaleName.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
			   return true;
			} else {
			   return false;
			}
		});
	},
	toggleDataCenterSwitch: function(e){
		dataObject.dataCenterSwitchVisible = !dataObject.dataCenterSwitchVisible;	
	},
	toggleDeleteEventVisible: function(e){
		dataObject.deleteEventVisible = !dataObject.deleteEventVisible;
		e.stopPropagation();
	},
	toggleAddDisplayVisible: function(e){
		dataObject.addDisplayVisible = !dataObject.addDisplayVisible;
		dataObject.tempDisplay = null;
		dataObject.tempDisplay = {};
	},
	toggleHistoryExpanded: function(){
		dataObject.historyExpanded = !dataObject.historyExpanded;
	},
	toggleCCYSettingsVisible: function(){
		dataObject.CCYSettingsVisible = !dataObject.CCYSettingsVisible;
	},

	setCCY: function(e){
		let target = $(e.currentTarget).data('index');
		let index = parseInt($(e.currentTarget).val());
		
		dataObject.altccys[target] = (dataObject.ccys[index]);
	},
	clearCCY: function(e){
		let target = $(e.currentTarget).data('index');
		dataObject.altccys[target] = null;
	},

	toggleDownloadPhotosSettingsVisible: function(){
		if(controller.checkIfNoInventoryError()) return;
		dataObject.downloadPhotosSettingsVisible = !dataObject.downloadPhotosSettingsVisible;
	},
	toggleNoInventoryErrorVisible: function(){
		dataObject.noInventoryErrorVisible = !dataObject.noInventoryErrorVisible;
	},
	checkIfNoInventoryError: function(){
		if(!dataObject.haveTriedToDownload){
			dataObject.noInventoryErrorVisible = true;
			dataObject.haveTriedToDownload = true;
			return true;
		}
		else return false;
	},
	goToEventList: function(){
		window.location = "index.html";
	},

	//MEDIA IMPORT

		toggleMediaImport: function(){
			dataObject.mediaImportVisible = !dataObject.mediaImportVisible;
		},

		startMediaProcessing: function(){
			dataObject.mediaImportVisible = false;
			dataObject.mediaProcessingVisible = true;
		},

		stopMediaProcessing: function(){
			dataObject.mediaProcessingVisible = false;
		},

		toggleMediaConflict: function(){
			dataObject.mediaProcessingVisible = false;
			dataObject.mediaConflictVisible = !dataObject.mediaConflictVisible;
		},

		toggleMediaDoneVisible: function(){
			dataObject.mediaConflictVisible = false;
			dataObject.mediaDoneVisible = !dataObject.mediaDoneVisible;
		},

	//DISPLAY SETUP CONTROLS
		setDisplayType: function(e){
			dataObject.tempDisplay.type = $(e.currentTarget).data('type');
		},
		updateDisplayName: function(e){
			if($(e.currentTarget).val().length > 0) dataObject.saveDisplayAllowed = true;
			else dataObject.saveDisplayAllowed = false;
		},
		createDisplay: function(e){
			dataObject.displayList.push(dataObject.tempDisplay);
			controller.toggleAddDisplayVisible();
		},
		editDisplay: function(e,context){
			dataObject.addDisplayVisible = true;
			dataObject.tempDisplay.type = context.display.type;
			dataObject.tempDisplay.name = context.display.name;
			dataObject.tempDisplay.editing = true;
		},
		toggleDisplay: function(e,context){
			context.display.status = (context.display.status === "active") ? "inactive" : "active";
		},
		toggleConfirmDeleteDisplay: function(e,context){
			dataObject.confirmDeleteDisplayVisible = !dataObject.confirmDeleteDisplayVisible;
		},
		confirmDeleteDisplay: function(e,context){
			
			dataObject.confirmDeleteDisplayVisible = false;
			dataObject.addDisplayVisible = false;
			dataObject.displayList.pop();
		},

	//DOWNLOAD MONITOR
		startPhotoDownload:function(){
			dataObject.downloadStarted = true;
			dataObject.downloadPhotosSettingsVisible = false;
			startDownload(dataObject.downloads[0]);

		},
		startLotDownload:function(){
			if(controller.checkIfNoInventoryError()) return;
			dataObject.downloadStarted = true;
			startDownload(dataObject.downloads[1]);
		},
		confirmCancelDownload: function(e,context){
			dataObject.cancelDownloadVisible = !dataObject.cancelDownloadVisible;
			dataObject.cancelDownloadContext = context;
		},
		cancelDownload: function(e){
			dataObject.cancelDownloadVisible = false;
			dataObject.cancelDownloadContext.download.active = false;
		},
		throwDownloadError: function(e,context){
			context.download.error = true;
			clearInterval(progressTimer);
			dataObject.hasDownloaded = true;
			if(context.download.title === 'Downloading Lots') dataObject.auctionLots.haveData = true;
			else dataObject.auctionPhotos.haveData = true;
		},
		errorRetry: function(e,context){
			context.download.error = false;
			clearInterval(progressTimer);
			if(context.download.title === 'Downloading Lots') controller.startLotDownload();
			else controller.startPhotoDownload();
		},
		errorDismiss: function(e,context){
			context.download.active = false;
			context.download.error = false;
		},

	//MANAGE LOT MEDIA
		toggleExpandLot: function(e,context){
			if(typeof context.lot.expanded === "undefined") context.lot.expanded = true;
			else context.lot.expanded = !context.lot.expanded;

			if(context.lot.expanded) $(e.currentTarget).parent().addClass('s-expanded');
			else $(e.currentTarget).parent().removeClass('s-expanded');
		},
		sortColumn: function(e){
			let targetColumn = $(e.currentTarget).data('column');
			if(dataObject.sortedColumn === targetColumn)
				dataObject.sortdirection = (dataObject.sortdirection === 'asc')? 'desc': 'asc';
			else{
				dataObject.sortedColumn = targetColumn;
				dataObject.sortdirection = 'asc';
			}
			medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});
		},
		filterLotList:function(e){
			let rangeStart = (dataObject.filterRangeStart)? parseInt(dataObject.filterRangeStart) : 0;
			let rangeEnd = (dataObject.filterRangeEnd)? parseInt(dataObject.filterRangeEnd) : 9999;

			medialist.filter(function(item) {
				if (item.values().lot >= rangeStart && item.values().lot <= rangeEnd ) {
				   return true;
				} else {
				   return false;
				}
			});
		},
		clearAllFilters: function(e){
			medialist.filter();
			dataObject.filterRangeStart = null;
			dataObject.filterRangeEnd = null;
		},
		toggleFilterVisibility: function(e){
			$('.js-filter-popup').toggleClass('s-visible');
		},
		updateFilters: function(e){
			if(dataObject.mediaFilters.indexOf("All Lots") >= 0)dataObject.mediaFilters.splice(dataObject.mediaFilters.indexOf("All Lots"),1);

			let targetFilter = $(e.currentTarget).data('filter');
			if(dataObject.mediaFilters.indexOf(targetFilter) < 0) dataObject.mediaFilters.push(targetFilter);
			else dataObject.mediaFilters.splice(dataObject.mediaFilters.indexOf(targetFilter),1);

			if(dataObject.mediaFilters.length === 0) dataObject.mediaFilters = ['All Lots'];
			//console.log(dataObject.mediaFilters);
		},
		selectAllFilters: function(e){
			dataObject.mediaFilters = ['Lots with video','Lots misssing hero photos','Lots with less than 4 photos','Flagged lots','Lots with disabled media'];
		},
		clearFilters: function(e){
			dataObject.mediaFilters = ['All Lots'];
		},
		disableImage: function(e,context){
			context.photo.disabled = !context.photo.disabled;
		},
		toggleFlagged: function(e,context){
			context.lot.flagged = !context.lot.flagged;
			if(context.lot.flagged) context.lot.editingNote = true;
		},
		saveNote: function(e,context){
			context.lot.editingNote = false;
		},
		toggleExportVisibility:function(e){
			$('.js-export-popup').toggleClass('s-visible');
		},
		toggleEmailVisibility: function(e){
			dataObject.sendEmailVisible = !dataObject.sendEmailVisible;
			$('.js-export-popup').removeClass('s-visible');
		},

	//PRESENTATION SETUP
		toggleSlideshowSettingVisibility: function(e){
			dataObject.slideshowSettingVisibile = !dataObject.slideshowSettingVisibile;
		},
		toggleDeleteSlideVisible: function(e){
			dataObject.deleteSlideVisible = !dataObject.deleteSlideVisible;
		},
		showSavedConfirmation: function(e){
			dataObject.savePresChangeVisible = false;
			dataObject.resetChangesVisible = true;
			dataObject.processingChangeVisible = true;
			setTimeout(function(){
				dataObject.processingChangeVisible = false;
				dataObject.savedConfirmationVisible = true;
				setTimeout(function(){
					dataObject.savedConfirmationVisible = false;
				},toastDuration);
			},10000);
			
		},
		hideSavedConfirmation: function(e){
			dataObject.savePresChangeVisible = false;
		},
		clearSpecialMsg: function(e){
			dataObject.presentation.specialMsg = '';
		},
		slideshowUpdate: function(e){
			initializeSlideshow();
		},
		toggleManageMessageGroupVisible: function(e){
			dataObject.manageMessageGroupVisible = !dataObject.manageMessageGroupVisible;
			if(dataObject.manageMessageGroupVisible)
				dataObject.clonedshortcuts = customKeyboardShortcuts(dataObject.tempshortcuts,'');
		},
		clearKeyboardMsg: function(e,context){
			context.key.message = '';
		},
		createCustomMessageGroup: function(){
			dataObject.keyboardShortcuts.push(dataObject.clonedshortcuts);
			dataObject.clonedshortcuts = {};
			dataObject.currentShortcuts = dataObject.keyboardShortcuts.length - 1;
			dataObject.manageMessageGroupVisible = false;
		},
		deleteCustomMessageGroup: function(){
			dataObject.confirmDeleteShortcutsVisible = false;
			let tempindex = dataObject.currentShortcuts;
			dataObject.currentShortcuts = 0;
			dataObject.keyboardShortcuts.splice(tempindex,1);
		},
		setCurrentShortcuts: function(e){
			dataObject.currentShortcuts = parseInt($(e.currentTarget).data('target'));
		},
		toggleConfirmDeleteShortcuts: function(e){
			dataObject.confirmDeleteShortcutsVisible = !dataObject.confirmDeleteShortcutsVisible;
		},

	//REPORTS
		confirmReportSent: function(e){
			dataObject.confirmReportSentVisible = true;
			setTimeout(function(){
				dataObject.confirmReportSentVisible = false;
				dataObject.reportRecipient = '';
				dataObject.reportClerkActivity = false;
			},toastDuration);
		},
		showSendMediaSuccess: function(e){
			dataObject.confirmMediaSentVisible = true;
			dataObject.sendEmailVisible = false;
			setTimeout(function(){
				dataObject.confirmMediaSentVisible = false;
			},toastDuration);
		},
		setSystemReportTypeSelected: function(e){
			dataObject.systemReportTypeSelected = $('input[name=reportType]:checked').val();
		},

	//ADVANCED
		acceptGraveResponsibility: function(e){
			dataObject.acceptedGraveResponsibility = true;
		},
};

const toastDuration = 2000;

var progressTimer;

const startDownload = function(target){
	target.active = true;
	target.progress = 0;
	
	progressTimer = setInterval(function(){
		
		if(target.title === 'Downloading Lots') target.progress+= 10;
		else{
			if(target.checkprogress >= target.items) target.progress++;
			else target.checkprogress+=5;
		}

		if(target.progress >= target.items){
			clearInterval(progressTimer);
			target.active = false;
			if(target.title === 'Downloading Lots') dataObject.auctionLots.haveData = true;
			if(target.title === 'Downloading Photos') dataObject.auctionPhotos.haveData = true;
			dataObject.hasDownloaded = true;
		}
	},500);
};

const focusFirstInput = function(container){
	container.find('input').first().focus();
};


rivets.bind($('.js--data-context'),{
	dataObject: dataObject,
	controller: controller
});




