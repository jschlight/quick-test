(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+Gsb":function(e,n,t){"use strict";e.exports=r;var l=r.prototype;function r(e,n){this.property=e,this.attribute=n}l.space=null,l.attribute=null,l.property=null,l.boolean=!1,l.booleanish=!1,l.overloadedBoolean=!1,l.number=!1,l.commaSeparated=!1,l.spaceSeparated=!1,l.commaOrSpaceSeparated=!1,l.mustUseProperty=!1,l.defined=!1},"2Dja":function(e,n,t){"use strict";var l=t("fLZw"),r=t("oxnk"),i=t("WhXs"),a=t("TTG4"),o=t("vfP8"),u=t("EwUw"),s=t("qrWY"),c=t("VgDs"),p=/-([a-z])/g;function f(e,n,t,l){var r,u=l.schema,s=i(u,n);null==t||!1===t||t!=t||s.boolean&&!t||(null!==t&&"object"==typeof t&&"length"in t&&(t=(s.commaSeparated?o:a).stringify(t)),s.boolean&&!0===l.hyperscript&&(t=""),s.mustUseProperty||(!0===l.vdom?r="attributes":!0===l.hyperscript&&(r="attrs")),r?(void 0===e[r]&&(e[r]={}),e[r][s.attribute]=t):e[l.react&&s.space?s.property:s.attribute]=t)}function d(e){return Boolean(e&&e.context&&e.cleanup)}function h(e,n){return n.toUpperCase()}e.exports=function(e,n,t){var i,a,o,m=t||{};if("function"!=typeof e)throw new Error("h is not a function");"string"==typeof m||"boolean"==typeof m?(i=m,m={}):i=m.prefix;a=function(e){var n=e&&e("div");return Boolean(n&&("_owner"in n||"_store"in n)&&null===n.key)}(e),o=function(e){return e&&"VirtualNode"===e("div").type}(e),null==i&&(i=(!0===a||!0===o)&&"h-");if(c("root",n))n=1===n.children.length&&c("element",n.children[0])?n.children[0]:{type:"element",tagName:"div",properties:{},children:n.children};else if(!c("element",n))throw new Error("Expected root or element, not `"+(n&&n.type||n)+"`");return function e(n,t,l){var i,a,o,d,m,g,v,y,x,b=l.schema,w=b,k=t.tagName;"html"===b.space&&"svg"===k.toLowerCase()&&(w=r,l.schema=w);!0===l.vdom&&"html"===w.space&&(k=k.toUpperCase());for(d in i=t.properties,a={},i)f(a,d,i[d],l);"string"!=typeof a.style||!0!==l.vdom&&!0!==l.react||(a.style=function(e,n){var t={};try{u(e,(function(e,n){t[function(e){"-ms-"===e.slice(0,4)&&(e="ms-"+e.slice(4));return e.replace(p,h)}(e)]=n}))}catch(l){throw l.message=n+"[style]"+l.message.slice("undefined".length),l}return t}(a.style,k));l.prefix&&(l.key++,a.key=l.prefix+l.key);l.vdom&&"html"!==w.space&&(a.namespace=s[w.space]);m=[],o=t.children,g=o?o.length:0,v=-1;for(;++v<g;)y=o[v],c("element",y)?m.push(e(n,y,l)):c("text",y)&&m.push(y.value);return x=0===m.length?n(k,a):n(k,a,m),l.schema=b,x}(e,n,{schema:"svg"===m.space?r:l,prefix:i,key:0,react:a,vdom:o,hyperscript:d(e)})}},"2dtT":function(e,n,t){"use strict";var l=t("oNNP"),r=t("2Dja"),i=t("RdQs");e.exports=function(e){var n=e||{},t=n.createElement,a=n.components||{};function o(e,n,r){var i=l(a,e)?a[e]:e;return t(i,n,r)}this.Compiler=function(e){return"root"===e.type&&(e=1===e.children.length&&"element"===e.children[0].type?e.children[0]:{type:"element",tagName:"div",properties:e.properties||{},children:e.children}),r(o,i(e),n.prefix)}}},"4Gnl":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var l=t("XZJ/"),r=t("vOnD"),i=Object(r.d)("article").withConfig({displayName:"DocsWrapper",componentId:"sc-1mhhmqm-0"})(["display:flex;flex-direction:column;flex:1 1 auto;position:relative;padding:32px;@media (min-width:","px){flex-direction:",";}@media (max-width:","px){overflow-x:auto;}"],l.a.lg,(function(e){return e.hasToc&&"row-reverse"}),l.a.lg-1)},"5x5n":function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var l=t("q1tI"),r=t.n(l),i=t("vOnD"),a=t("XZJ/"),o=t("X+9d"),u=Object(i.d)("footer").withConfig({displayName:"Footer__Wrapper",componentId:"sc-1oylx1d-0"})(["padding-top:24px;border-top:1px solid ",";"],a.b.grey02),s=function(){return r.a.createElement(u,null,r.a.createElement(o.c,{margin:0},r.a.createElement("div",null,"Comments or suggestions about this page?"," ",r.a.createElement("a",{href:"https://github.com/nodejs/node-addon-examples/issues",target:"_blank",rel:"noopener noreferrer"},"Let us know"),"."),r.a.createElement("small",null,"Created with"," ",r.a.createElement("a",{href:"https://github.com/kata-ai/grundgesetz-skeleton",target:"_blank",rel:"noopener noreferrer"},"Grundgesetz"),".")))},c=Object(i.d)("div").withConfig({displayName:"FooterWrapper",componentId:"sc-133mj4t-0"})(["margin-top:","px;"],a.h.xxl)},Bc3h:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var l=t("vOnD"),r=Object(l.d)("div").withConfig({displayName:"Container",componentId:"ktspcb-0"})(["position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:704px;"])},D3zA:function(e,n,t){"use strict";var l=t("aI7X");e.exports=Function.prototype.bind||l},DayG:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var l=t("q1tI"),r=t("X+9d"),i=function(e){var n=e.title,t=e.subtitle;return l.createElement(r.a,{as:"header",mb:"md"},l.createElement(r.b,{as:"h1",scale:800,color:"grey09"},n),t&&l.createElement(r.d,{as:"p",scale:400,mt:"md"},t))}},EwUw:function(e,n,t){var l=t("Lc7W");e.exports=function(e,n){var t,r=null;if(!e||"string"!=typeof e)return r;for(var i,a,o=l(e),u="function"==typeof n,s=0,c=o.length;s<c;s++)i=(t=o[s]).property,a=t.value,u?n(i,a,t):a&&(r||(r={}),r[i]=a);return r}},Ex3r:function(e,n,t){"use strict";var l=t("U6jy"),r=t("GGo3");e.exports=function(e){var n,t,i=e.length,a=[],o=[],u=-1;for(;++u<i;)n=e[u],a.push(n.property),o.push(n.normal),t=n.space;return new r(l.apply(null,a),l.apply(null,o),t)}},GGo3:function(e,n,t){"use strict";e.exports=r;var l=r.prototype;function r(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}l.space=null,l.normal={},l.property={}},JMON:function(e,n,t){"use strict";e.exports=r;var l=t("SAtU");function r(e,n,t,r){var a;function o(e,l,u){var s,c=[];return(n&&!a(e,l,u[u.length-1]||null)||!1!==(c=i(t(e,u)))[0])&&e.children&&"skip"!==c[0]&&!1===(s=i(function(e,n){var t,l=r?-1:1,i=(r?e.length:-1)+l;for(;i>-1&&i<e.length;){if(!1===(t=o(e[i],i,n))[0])return t;i="number"==typeof t[1]?t[1]:i+l}}(e.children,u.concat(e))))[0]?s:c}"function"==typeof n&&"function"!=typeof t&&(r=t,t=n,n=null),a=l(n),o(e,null,[])}function i(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[!0,e]:[e]}r.CONTINUE=!0,r.SKIP="skip",r.EXIT=!1},Lc7W:function(e,n){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,s=/^\s+|\s+$/g;function c(e){return e?e.replace(s,""):""}e.exports=function(e,n){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var s=1,p=1;function f(e){var n=e.match(l);n&&(s+=n.length);var t=e.lastIndexOf("\n");p=~t?e.length-t:p+e.length}function d(){var e={line:s,column:p};return function(n){return n.position=new h(e),y(),n}}function h(e){this.start=e,this.end={line:s,column:p},this.source=n.source}h.prototype.content=e;var m=[];function g(t){var l=new Error(n.source+":"+s+":"+p+": "+t);if(l.reason=t,l.filename=n.source,l.line=s,l.column=p,l.source=e,!n.silent)throw l;m.push(l)}function v(n){var t=n.exec(e);if(t){var l=t[0];return f(l),e=e.slice(l.length),t}}function y(){v(r)}function x(e){var n;for(e=e||[];n=b();)!1!==n&&e.push(n);return e}function b(){var n=d();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var t=2;""!=e.charAt(t)&&("*"!=e.charAt(t)||"/"!=e.charAt(t+1));)++t;if(t+=2,""===e.charAt(t-1))return g("End of comment missing");var l=e.slice(2,t-2);return p+=2,f(l),e=e.slice(t),p+=2,n({type:"comment",comment:l})}}function w(){var e=d(),n=v(i);if(n){if(b(),!v(a))return g("property missing ':'");var l=v(o),r=e({type:"declaration",property:c(n[0].replace(t,"")),value:l?c(l[0].replace(t,"")):""});return v(u),r}}return y(),function(){var e,n=[];for(x(n);e=w();)!1!==e&&(n.push(e),x(n));return n}()}},MDy1:function(e,n,t){"use strict";var l=t("hcgW"),r=t("NhCq"),i=l.booleanish,a=l.number,o=l.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:i,ariaAutoComplete:null,ariaBusy:i,ariaChecked:i,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:o,ariaCurrent:null,ariaDescribedBy:o,ariaDetails:null,ariaDisabled:i,ariaDropEffect:o,ariaErrorMessage:null,ariaExpanded:i,ariaFlowTo:o,ariaGrabbed:i,ariaHasPopup:null,ariaHidden:i,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:o,ariaLevel:a,ariaLive:null,ariaModal:i,ariaMultiLine:i,ariaMultiSelectable:i,ariaOrientation:null,ariaOwns:o,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:i,ariaReadOnly:i,ariaRelevant:null,ariaRequired:i,ariaRoleDescription:o,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:i,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},MZ32:function(e,n,t){"use strict";var l=t("tPCP");e.exports=function(e,n){return l(e,n.toLowerCase())}},MwcK:function(e,n,t){"use strict";var l=t("NhCq"),r=t("MZ32");e.exports=l({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})},N9qd:function(e,n,t){"use strict";var l=t("NhCq");e.exports=l({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},NhCq:function(e,n,t){"use strict";var l=t("w9a4"),r=t("GGo3"),i=t("dIZg");e.exports=function(e){var n,t,a=e.space,o=e.mustUseProperty||[],u=e.attributes||{},s=e.properties,c=e.transform,p={},f={};for(n in s)t=new i(n,c(u,n),s[n],a),-1!==o.indexOf(n)&&(t.mustUseProperty=!0),p[n]=t,f[l(n)]=n,f[l(t.attribute)]=n;return new r(p,f,a)}},RdQs:function(e,n,t){"use strict";var l=t("ptzP"),r=Object.prototype.hasOwnProperty,i={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(e){var n;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(n in i)r.call(i,n)&&void 0!==e.properties[n]&&(o(e,i[n],e.properties[n]),delete e.properties[n])}function o(e,n,t){var l=(e.properties.style||"").trim();l&&!/;\s*/.test(l)&&(l+=";"),l&&(l+=" ");var r=l+n+": "+t+";";e.properties.style=r}e.exports=function(e){return l(e,"element",a),e}},SAtU:function(e,n,t){"use strict";function l(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return a;if("object"==typeof e)return("length"in e?i:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(n){var t;for(t in e)if(n[t]!==e[t])return!1;return!0}}function i(e){var n=function(e){for(var n=[],t=e.length,r=-1;++r<t;)n[r]=l(e[r]);return n}(e),t=n.length;return function(){var e=-1;for(;++e<t;)if(n[e].apply(this,arguments))return!0;return!1}}function a(){return!0}e.exports=l},TTG4:function(e,n,t){"use strict";n.parse=function(e){var n=String(e||"").trim();return""===n?[]:n.split(l)},n.stringify=function(e){return e.join(" ").trim()};var l=/[ \t\n\r\f]+/g},U6jy:function(e,n){e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var l=arguments[n];for(var r in l)t.call(l,r)&&(e[r]=l[r])}return e};var t=Object.prototype.hasOwnProperty},VgDs:function(e,n,t){"use strict";function l(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return a;if("object"==typeof e)return("length"in e?i:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(n){var t;for(t in e)if(n[t]!==e[t])return!1;return!0}}function i(e){var n=function(e){for(var n=[],t=e.length,r=-1;++r<t;)n[r]=l(e[r]);return n}(e),t=n.length;return function(){var e=-1;for(;++e<t;)if(n[e].apply(this,arguments))return!0;return!1}}function a(){return!0}e.exports=function e(n,t,r,i,a){var o=null!=i,u=null!=r,s=l(n);if(u&&("number"!=typeof r||r<0||r===1/0))throw new Error("Expected positive finite index or child node");if(o&&(!e(null,i)||!i.children))throw new Error("Expected parent node");if(!t||!t.type||"string"!=typeof t.type)return!1;if(o!==u)throw new Error("Expected both parent and index");return Boolean(s.call(a,t,r,i))}},WhXs:function(e,n,t){"use strict";var l=t("w9a4"),r=t("dIZg"),i=t("+Gsb");e.exports=function(e,n){var t=l(n),p=n,f=i;if(t in e.normal)return e.property[e.normal[t]];t.length>4&&"data"===t.slice(0,4)&&a.test(n)&&("-"===n.charAt(4)?p=function(e){var n=e.slice(5).replace(o,c);return"data"+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);if(o.test(n))return e;"-"!==(n=n.replace(u,s)).charAt(0)&&(n="-"+n);return"data"+n}(n),f=r);return new f(p,n)};var a=/^data[-a-z0-9.:_]+$/i,o=/-[a-z]/g,u=/[A-Z]/g;function s(e){return"-"+e.toLowerCase()}function c(e){return e.charAt(1).toUpperCase()}},aI7X:function(e,n,t){"use strict";var l="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,i=Object.prototype.toString;e.exports=function(e){var n=this;if("function"!=typeof n||"[object Function]"!==i.call(n))throw new TypeError(l+n);for(var t,a=r.call(arguments,1),o=function(){if(this instanceof t){var l=n.apply(this,a.concat(r.call(arguments)));return Object(l)===l?l:this}return n.apply(e,a.concat(r.call(arguments)))},u=Math.max(0,n.length-a.length),s=[],c=0;c<u;c++)s.push("$"+c);if(t=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(o),n.prototype){var p=function(){};p.prototype=n.prototype,t.prototype=new p,p.prototype=null}return t}},dIZg:function(e,n,t){"use strict";var l=t("+Gsb"),r=t("hcgW");function i(e,n,t,i){a(this,"space",i),l.call(this,e,n),a(this,"boolean",o(t,r.boolean)),a(this,"booleanish",o(t,r.booleanish)),a(this,"overloadedBoolean",o(t,r.overloadedBoolean)),a(this,"number",o(t,r.number)),a(this,"commaSeparated",o(t,r.commaSeparated)),a(this,"spaceSeparated",o(t,r.spaceSeparated)),a(this,"commaOrSpaceSeparated",o(t,r.commaOrSpaceSeparated))}function a(e,n,t){t&&(e[n]=t)}function o(e,n){return(e&n)===n}e.exports=i,i.prototype=new l,i.prototype.defined=!0},dq8i:function(e,n,t){"use strict";var l=t("q1tI"),r=t("2dtT"),i=t.n(r),a=t("vOnD"),o=t("X+9d"),u=t("XZJ/"),s=Object(a.d)("ul").withConfig({displayName:"MarkdownComponents__UnorderedList",componentId:"slgx4q-0"})(["margin:","px 0;"],u.h.sm),c=function(e){return l.createElement(o.b,Object.assign({scale:800,as:"h1",fontFamily:"sansSerif",color:"grey09"},e))},p=function(e){return l.createElement(o.b,Object.assign({scale:600,as:"h2",mt:"xl",color:"grey09"},e))},f=function(e){return l.createElement(o.b,Object.assign({scale:500,as:"h3",mt:"xl",color:"grey09"},e))},d=function(e){return l.createElement(o.b,Object.assign({scale:400,as:"h4",mt:"xl",color:"grey09"},e))},h=function(e){return l.createElement(o.b,Object.assign({scale:400,as:"h5",mt:"xl",color:"grey09"},e))},m=function(e){return l.createElement(o.b,Object.assign({scale:400,as:"h6",mt:"xl",color:"grey09"},e))},g=function(e){return l.createElement(o.c,Object.assign({scale:400,mt:"sm",color:"grey07"},e))},v=function(e){return l.createElement(s,e)},y=function(e){return l.createElement(o.c,Object.assign({scale:400,as:"li",color:"grey07",my:"xxs"},e))},x=Object(a.d)("table").withConfig({displayName:"MarkdownComponents__table",componentId:"slgx4q-1"})(["width:100%;margin:","px 0;font-size:","px;line-height:","px;border-collapse:collapse;thead{border-bottom:2px solid ",";th{padding:","px ","px;font-style:normal;font-stretch:normal;font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;text-align:left;color:",";&:first-child{padding-left:0;}&:last-child{padding-right:0;}}}tfoot{tr{td{padding:","px ","px;vertical-align:top;font-style:normal;font-stretch:normal;font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;&:first-child{padding-left:0;}&:last-child{padding-right:0;}}}}tbody{tr{td{padding:","px ","px;vertical-align:top;font-size:","px;line-height:","px;color:",";&:first-child{padding-left:0;}&:last-child{padding-right:0;}}}}"],u.h.lg,u.i[400].fontSize,u.i[400].lineHeight,u.b.grey02,u.h.xs,u.h.sm,u.b.grey09,u.h.xs,u.h.sm,u.h.xs,u.h.sm,u.i[400].fontSize,u.i[400].lineHeight,u.b.grey07);n.a=function(e,n){return void 0===n&&(n={}),new i.a({createElement:l.createElement,components:Object.assign({h1:c,h2:p,h3:f,h4:d,h5:h,h6:m,p:g,ul:v,li:y,table:x},n)}).Compiler(e)}},fLZw:function(e,n,t){"use strict";var l=t("Ex3r"),r=t("N9qd"),i=t("rhP3"),a=t("MwcK"),o=t("MDy1"),u=t("wGdx");e.exports=l([i,r,a,o,u])},hcgW:function(e,n,t){"use strict";var l=0;function r(){return Math.pow(2,++l)}n.boolean=r(),n.booleanish=r(),n.overloadedBoolean=r(),n.number=r(),n.spaceSeparated=r(),n.commaSeparated=r(),n.commaOrSpaceSeparated=r()},iWCC:function(e,n,t){"use strict";var l=t("q1tI"),r=t.n(l),i=t("vOnD"),a=t("XZJ/");n.a=Object(i.d)((function(e){var n=e.className,t=e.html,l=e.children;return t?r.a.createElement("section",{className:n,dangerouslySetInnerHTML:{__html:t}}):r.a.createElement("section",{className:n},l)})).withConfig({displayName:"MarkdownContent",componentId:"sc-14tuuwr-0"})([".gatsby-highlight{margin:","px 0;}a[href^='#fn-'],a[href^='#fnref-']{display:inline-block;margin-left:0.1rem;font-weight:bold;}.footnotes{margin-top:2rem;font-size:85%;li[id^='fn-']{p{display:inline;}}}.lead{font-size:1.25rem;font-weight:300;@media (min-width:","){font-size:1.5rem;}}"],a.h.sm,a.a.md)},oNNP:function(e,n,t){"use strict";var l=t("D3zA");e.exports=l.call(Function.call,Object.prototype.hasOwnProperty)},oxnk:function(e,n,t){"use strict";var l=t("Ex3r"),r=t("N9qd"),i=t("rhP3"),a=t("MwcK"),o=t("MDy1"),u=t("rv6P");e.exports=l([i,r,a,o,u])},ptzP:function(e,n,t){"use strict";e.exports=o;var l=t("JMON"),r=l.CONTINUE,i=l.SKIP,a=l.EXIT;function o(e,n,t,r){"function"==typeof n&&"function"!=typeof t&&(r=t,t=n,n=null),l(e,n,(function(e,n){var l=n[n.length-1],r=l?l.children.indexOf(e):null;return t(e,r,l)}),r)}o.CONTINUE=r,o.SKIP=i,o.EXIT=a},qrWY:function(e){e.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},rhP3:function(e,n,t){"use strict";var l=t("NhCq");e.exports=l({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},rv6P:function(e,n,t){"use strict";var l=t("hcgW"),r=t("NhCq"),i=t("tPCP"),a=l.boolean,o=l.number,u=l.spaceSeparated,s=l.commaSeparated,c=l.commaOrSpaceSeparated;e.exports=r({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:i,properties:{about:c,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},tPCP:function(e,n,t){"use strict";e.exports=function(e,n){return n in e?e[n]:n}},vfP8:function(e,n,t){"use strict";n.parse=function(e){var n,t=[],l=String(e||""),r=l.indexOf(","),i=0,a=!1;for(;!a;)-1===r&&(r=l.length,a=!0),!(n=l.slice(i,r).trim())&&a||t.push(n),i=r+1,r=l.indexOf(",",i);return t},n.stringify=function(e,n){var t=n||{},l=!1===t.padLeft?"":" ",r=t.padRight?" ":"";""===e[e.length-1]&&(e=e.concat(""));return e.join(r+","+l).trim()}},w9a4:function(e,n,t){"use strict";e.exports=function(e){return e.toLowerCase().replace(/\b[:-]\b/g,"")}},wGdx:function(e,n,t){"use strict";var l=t("hcgW"),r=t("NhCq"),i=t("MZ32"),a=l.boolean,o=l.overloadedBoolean,u=l.booleanish,s=l.number,c=l.spaceSeparated,p=l.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:i,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:o,draggable:u,encType:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:c,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,prefix:null,property:null,results:s,security:null,unselectable:null}})}}]);
//# sourceMappingURL=30420f175656fdf9ebba9c2792f772c41d3f674e-27e9940cde3d299fd2b3.js.map