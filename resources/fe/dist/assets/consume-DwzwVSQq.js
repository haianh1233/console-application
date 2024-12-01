(function(){"use strict";var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ka(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Xa(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var wi={exports:{}},Za={},es=Object.freeze({__proto__:null,default:Za}),tn=Xa(es);(function(t,e){var r=function(n){n=n||{};var i=typeof n<"u"?n:{},a=!1,c=[],f="",d=[],p=[],y=[];function v(o){for(var s=[],u=unescape(encodeURIComponent(o)),h=0;h<u.length;h++)s.push(u.charCodeAt(h));return s}function b(o){for(var s=new Uint8Array(o),u="",h=0;h<s.length;++h)u+=String.fromCharCode(s[h]);return decodeURIComponent(escape(u))}i=Object.assign({noInitialRun:!0,noExitRuntime:!0,onRuntimeInitialized:function(){a=!0,c.forEach(function(o){o()})},preRun:function(){l.init(function(){return d.length?d.pop():f?(d=v(f),f="",d.push(null),d.reverse(),d.pop()):null},function(o){o&&p.push(o)},function(o){o&&y.push(o)})}},i);var E={},I;for(I in i)i.hasOwnProperty(I)&&(E[I]=i[I]);var O=[],R="./this.program",k=function(o,s){throw s},A=!1,T=!1,P=!1,U=!1,$=!1;A=typeof window=="object",T=typeof importScripts=="function",U=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",P=U&&!A&&!T,$=!A&&!P&&!T;var j="";function H(o){return i.locateFile?i.locateFile(o,j):j+o}var oe,ae;if(P){j=__dirname+"/";var ve,Fe;oe=function(o,s){var u;return ve||(ve=tn),Fe||(Fe=tn),o=Fe.normalize(o),u=ve.readFileSync(o),s?u:u.toString()},ae=function(o){var s=oe(o,!0);return s.buffer||(s=new Uint8Array(s)),re(s.buffer),s},process.argv.length>1&&(R=process.argv[1].replace(/\\/g,"/")),O=process.argv.slice(2),process.on("uncaughtException",function(o){if(!(o instanceof Qa))throw o}),process.on("unhandledRejection",Se),k=function(o){process.exit(o)},i.inspect=function(){return"[Emscripten Module object]"}}else $?(typeof read<"u"&&(oe=function(o){return read(o)}),ae=function(o){var s;return typeof readbuffer=="function"?new Uint8Array(readbuffer(o)):(s=read(o,"binary"),re(typeof s=="object"),s)},typeof scriptArgs<"u"?O=scriptArgs:typeof arguments<"u"&&(O=arguments),typeof quit=="function"&&(k=function(o){quit(o)}),typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)):(A||T)&&(T?j=self.location.href:document.currentScript&&(j=document.currentScript.src),j.indexOf("blob:")!==0?j=j.substr(0,j.lastIndexOf("/")+1):j="",oe=function(o){var s=new XMLHttpRequest;return s.open("GET",o,!1),s.send(null),s.responseText},T&&(ae=function(o){var s=new XMLHttpRequest;return s.open("GET",o,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}));var He=i.print||console.log.bind(console),z=i.printErr||console.warn.bind(console);for(I in E)E.hasOwnProperty(I)&&(i[I]=E[I]);E=null,i.arguments&&(O=i.arguments),i.thisProgram&&(R=i.thisProgram),i.quit&&(k=i.quit);function se(o){var s=N[di>>2],u=s+o+15&-16;return u>ja()&&Se(),N[di>>2]=u,s}var G;i.wasmBinary&&(G=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,typeof WebAssembly!="object"&&z("no native wasm support detected");var X,ce=new WebAssembly.Table({initial:177,maximum:177,element:"anyfunc"}),ue=!1;function re(o,s){o||Se("Assertion failed: "+s)}var Le=0;function $e(o,s,u,h){var m,g;typeof o=="number"?(m=!0,g=o):(m=!1,g=o.length);var w;if(w=[Ua,vi,se][u](Math.max(g,1)),m){var S;for(h=w,re((w&3)==0),S=w+(g&-4);h<S;h+=4)N[h>>2]=0;for(S=w+g;h<S;)je[h++>>0]=0;return w}return o.subarray||o.slice?pt.set(o,w):pt.set(new Uint8Array(o),w),w}var Ge=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ae(o,s,u){for(var h=s+u,m=s;o[m]&&!(m>=h);)++m;if(m-s>16&&o.subarray&&Ge)return Ge.decode(o.subarray(s,m));for(var g="";s<m;){var w=o[s++];if(!(w&128)){g+=String.fromCharCode(w);continue}var S=o[s++]&63;if((w&224)==192){g+=String.fromCharCode((w&31)<<6|S);continue}var F=o[s++]&63;if((w&240)==224?w=(w&15)<<12|S<<6|F:w=(w&7)<<18|S<<12|F<<6|o[s++]&63,w<65536)g+=String.fromCharCode(w);else{var M=w-65536;g+=String.fromCharCode(55296|M>>10,56320|M&1023)}}return g}function me(o,s){return o?Ae(pt,o,s):""}function Ee(o,s,u,h){if(!(h>0))return 0;for(var m=u,g=u+h-1,w=0;w<o.length;++w){var S=o.charCodeAt(w);if(S>=55296&&S<=57343){var F=o.charCodeAt(++w);S=65536+((S&1023)<<10)|F&1023}if(S<=127){if(u>=g)break;s[u++]=S}else if(S<=2047){if(u+1>=g)break;s[u++]=192|S>>6,s[u++]=128|S&63}else if(S<=65535){if(u+2>=g)break;s[u++]=224|S>>12,s[u++]=128|S>>6&63,s[u++]=128|S&63}else{if(u+3>=g)break;s[u++]=240|S>>18,s[u++]=128|S>>12&63,s[u++]=128|S>>6&63,s[u++]=128|S&63}}return s[u]=0,u-m}function hi(o,s,u){return Ee(o,pt,s,u)}function Gt(o){for(var s=0,u=0;u<o.length;++u){var h=o.charCodeAt(u);h>=55296&&h<=57343&&(h=65536+((h&1023)<<10)|o.charCodeAt(++u)&1023),h<=127?++s:h<=2047?s+=2:h<=65535?s+=3:s+=4}return s}typeof TextDecoder<"u"&&new TextDecoder("utf-16le");function Da(o){var s=Gt(o)+1,u=vi(s);return Ee(o,je,u,s),u}function Nl(o,s){je.set(o,s)}function xl(o,s,u){for(var h=0;h<o.length;++h)je[s++>>0]=o.charCodeAt(h);je[s>>0]=0}var Fl=65536;function Ta(o,s){return o%s>0&&(o+=s-o%s),o}var pr,je,pt,Ra,N;function Ca(o){pr=o,i.HEAP8=je=new Int8Array(o),i.HEAP16=Ra=new Int16Array(o),i.HEAP32=N=new Int32Array(o),i.HEAPU8=pt=new Uint8Array(o),i.HEAPU16=new Uint16Array(o),i.HEAPU32=new Uint32Array(o),i.HEAPF32=new Float32Array(o),i.HEAPF64=new Float64Array(o)}var Al=5575456,di=332416,Na=i.TOTAL_MEMORY||16777216;i.wasmMemory?X=i.wasmMemory:X=new WebAssembly.Memory({initial:Na/Fl}),X&&(pr=X.buffer),Na=pr.byteLength,Ca(pr),N[di>>2]=Al;function Jr(o){for(;o.length>0;){var s=o.shift();if(typeof s=="function"){s();continue}var u=s.func;typeof u=="number"?s.arg===void 0?i.dynCall_v(u):i.dynCall_vi(u,s.arg):u(s.arg===void 0?null:s.arg)}}var xa=[],Fa=[],Pl=[],Aa=[];function $l(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)ql(i.preRun.shift());Jr(xa)}function Ml(){!i.noFSInit&&!l.init.initialized&&l.init(),Jr(Fa)}function Ll(){l.ignorePermissions=!1,Jr(Pl)}function jl(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Vl(i.postRun.shift());Jr(Aa)}function ql(o){xa.unshift(o)}function Vl(o){Aa.unshift(o)}var pi=Math.abs,Kr=Math.ceil,Xr=Math.floor,mi=Math.min,kt=0,mr=null;function Pa(o){kt++,i.monitorRunDependencies&&i.monitorRunDependencies(kt)}function yi(o){if(kt--,i.monitorRunDependencies&&i.monitorRunDependencies(kt),kt==0&&mr){var s=mr;mr=null,s()}}i.preloadedImages={},i.preloadedAudios={};function Se(o){throw i.onAbort&&i.onAbort(o),o+="",He(o),z(o),ue=!0,o="abort("+o+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(o)}var $a="data:application/octet-stream;base64,";function Ma(o){return String.prototype.startsWith?o.startsWith($a):o.indexOf($a)===0}var mt="jq.wasm.wasm";Ma(mt)||(mt=H(mt));function La(){try{if(G)return new Uint8Array(G);if(ae)return ae(mt);throw"both async and sync fetching of the wasm failed"}catch(o){Se(o)}}function Bl(){return!G&&(A||T)&&typeof Ei!="object"&&typeof fetch=="function"?fetch(mt,{credentials:"same-origin"}).then(function(o){if(!o.ok)throw"failed to load wasm binary file at '"+mt+"'";return o.arrayBuffer()}).catch(function(){return La()}):new Promise(function(o,s){o(La())})}function Ul(){var o={env:Va,wasi_unstable:Va};function s(w,S){var F=w.exports;i.asm=F,yi()}Pa();function u(w){s(w.instance)}function h(w){return Bl().then(function(S){return WebAssembly.instantiate(S,o)}).then(w,function(S){z("failed to asynchronously prepare wasm: "+S),Se(S)})}function m(){if(!G&&typeof WebAssembly.instantiateStreaming=="function"&&!Ma(mt)&&typeof Ei!="object"&&typeof fetch=="function")fetch(mt,{credentials:"same-origin"}).then(function(w){var S=WebAssembly.instantiateStreaming(w,o);return S.then(u,function(F){z("wasm streaming compile failed: "+F),z("falling back to ArrayBuffer instantiation"),h(u)})});else return h(u)}if(i.instantiateWasm)try{var g=i.instantiateWasm(o,s);return g}catch(w){return z("Module.instantiateWasm callback failed with error: "+w),!1}return m(),{}}var Oe,et;Fa.push({func:function(){Tf()}});function Ql(o){var s=/\b_Z[\w\d_]+/g;return o.replace(s,function(u){var h=u;return u===h?u:h+" ["+u+"]"})}function zl(){var o=new Error;if(!o.stack){try{throw new Error(0)}catch(s){o=s}if(!o.stack)return"(no stack trace available)"}return o.stack.toString()}function Gl(){var o=zl();return i.extraStackTrace&&(o+=`
`+i.extraStackTrace()),Ql(o)}function Wl(o,s,u,h){Se("Assertion failed: "+me(o)+", at: "+[s?me(s):"unknown filename",u,h?me(h):"unknown function"])}function Yl(){}var ne={splitPath:function(o){var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(o).slice(1)},normalizeArray:function(o,s){for(var u=0,h=o.length-1;h>=0;h--){var m=o[h];m==="."?o.splice(h,1):m===".."?(o.splice(h,1),u++):u&&(o.splice(h,1),u--)}if(s)for(;u;u--)o.unshift("..");return o},normalize:function(o){var s=o.charAt(0)==="/",u=o.substr(-1)==="/";return o=ne.normalizeArray(o.split("/").filter(function(h){return!!h}),!s).join("/"),!o&&!s&&(o="."),o&&u&&(o+="/"),(s?"/":"")+o},dirname:function(o){var s=ne.splitPath(o),u=s[0],h=s[1];return!u&&!h?".":(h&&(h=h.substr(0,h.length-1)),u+h)},basename:function(o){if(o==="/")return"/";var s=o.lastIndexOf("/");return s===-1?o:o.substr(s+1)},extname:function(o){return ne.splitPath(o)[3]},join:function(){var o=Array.prototype.slice.call(arguments,0);return ne.normalize(o.join("/"))},join2:function(o,s){return ne.normalize(o+"/"+s)}};function yr(o){return i.___errno_location&&(N[i.___errno_location()>>2]=o),o}var Je={resolve:function(){for(var o="",s=!1,u=arguments.length-1;u>=-1&&!s;u--){var h=u>=0?arguments[u]:l.cwd();if(typeof h!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!h)return"";o=h+"/"+o,s=h.charAt(0)==="/"}return o=ne.normalizeArray(o.split("/").filter(function(m){return!!m}),!s).join("/"),(s?"/":"")+o||"."},relative:function(o,s){o=Je.resolve(o).substr(1),s=Je.resolve(s).substr(1);function u(M){for(var Y=0;Y<M.length&&M[Y]==="";Y++);for(var Q=M.length-1;Q>=0&&M[Q]==="";Q--);return Y>Q?[]:M.slice(Y,Q-Y+1)}for(var h=u(o.split("/")),m=u(s.split("/")),g=Math.min(h.length,m.length),w=g,S=0;S<g;S++)if(h[S]!==m[S]){w=S;break}for(var F=[],S=w;S<h.length;S++)F.push("..");return F=F.concat(m.slice(w)),F.join("/")}},_t={ttys:[],init:function(){},shutdown:function(){},register:function(o,s){_t.ttys[o]={input:[],output:[],ops:s},l.registerDevice(o,_t.stream_ops)},stream_ops:{open:function(o){var s=_t.ttys[o.node.rdev];if(!s)throw new l.ErrnoError(43);o.tty=s,o.seekable=!1},close:function(o){o.tty.ops.flush(o.tty)},flush:function(o){o.tty.ops.flush(o.tty)},read:function(o,s,u,h,m){if(!o.tty||!o.tty.ops.get_char)throw new l.ErrnoError(60);for(var g=0,w=0;w<h;w++){var S;try{S=o.tty.ops.get_char(o.tty)}catch{throw new l.ErrnoError(29)}if(S===void 0&&g===0)throw new l.ErrnoError(6);if(S==null)break;g++,s[u+w]=S}return g&&(o.node.timestamp=Date.now()),g},write:function(o,s,u,h,m){if(!o.tty||!o.tty.ops.put_char)throw new l.ErrnoError(60);try{for(var g=0;g<h;g++)o.tty.ops.put_char(o.tty,s[u+g])}catch{throw new l.ErrnoError(29)}return h&&(o.node.timestamp=Date.now()),g}},default_tty_ops:{get_char:function(o){if(!o.input.length){var s=null;if(P){var u=256,h=Buffer.alloc?Buffer.alloc(u):new Buffer(u),m=0;try{m=ve.readSync(process.stdin.fd,h,0,u,null)}catch(g){if(g.toString().indexOf("EOF")!=-1)m=0;else throw g}m>0?s=h.slice(0,m).toString("utf-8"):s=null}else typeof window<"u"&&typeof window.prompt=="function"?(s=window.prompt("Input: "),s!==null&&(s+=`
`)):typeof readline=="function"&&(s=readline(),s!==null&&(s+=`
`));if(!s)return null;o.input=Tt(s,!0)}return o.input.shift()},put_char:function(o,s){s===null||s===10?(He(Ae(o.output,0)),o.output=[]):s!=0&&o.output.push(s)},flush:function(o){o.output&&o.output.length>0&&(He(Ae(o.output,0)),o.output=[])}},default_tty1_ops:{put_char:function(o,s){s===null||s===10?(z(Ae(o.output,0)),o.output=[]):s!=0&&o.output.push(s)},flush:function(o){o.output&&o.output.length>0&&(z(Ae(o.output,0)),o.output=[])}}},ee={ops_table:null,mount:function(o){return ee.createNode(null,"/",16895,0)},createNode:function(o,s,u,h){if(l.isBlkdev(u)||l.isFIFO(u))throw new l.ErrnoError(63);ee.ops_table||(ee.ops_table={dir:{node:{getattr:ee.node_ops.getattr,setattr:ee.node_ops.setattr,lookup:ee.node_ops.lookup,mknod:ee.node_ops.mknod,rename:ee.node_ops.rename,unlink:ee.node_ops.unlink,rmdir:ee.node_ops.rmdir,readdir:ee.node_ops.readdir,symlink:ee.node_ops.symlink},stream:{llseek:ee.stream_ops.llseek}},file:{node:{getattr:ee.node_ops.getattr,setattr:ee.node_ops.setattr},stream:{llseek:ee.stream_ops.llseek,read:ee.stream_ops.read,write:ee.stream_ops.write,allocate:ee.stream_ops.allocate,mmap:ee.stream_ops.mmap,msync:ee.stream_ops.msync}},link:{node:{getattr:ee.node_ops.getattr,setattr:ee.node_ops.setattr,readlink:ee.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ee.node_ops.getattr,setattr:ee.node_ops.setattr},stream:l.chrdev_stream_ops}});var m=l.createNode(o,s,u,h);return l.isDir(m.mode)?(m.node_ops=ee.ops_table.dir.node,m.stream_ops=ee.ops_table.dir.stream,m.contents={}):l.isFile(m.mode)?(m.node_ops=ee.ops_table.file.node,m.stream_ops=ee.ops_table.file.stream,m.usedBytes=0,m.contents=null):l.isLink(m.mode)?(m.node_ops=ee.ops_table.link.node,m.stream_ops=ee.ops_table.link.stream):l.isChrdev(m.mode)&&(m.node_ops=ee.ops_table.chrdev.node,m.stream_ops=ee.ops_table.chrdev.stream),m.timestamp=Date.now(),o&&(o.contents[s]=m),m},getFileDataAsRegularArray:function(o){if(o.contents&&o.contents.subarray){for(var s=[],u=0;u<o.usedBytes;++u)s.push(o.contents[u]);return s}return o.contents},getFileDataAsTypedArray:function(o){return o.contents?o.contents.subarray?o.contents.subarray(0,o.usedBytes):new Uint8Array(o.contents):new Uint8Array},expandFileStorage:function(o,s){var u=o.contents?o.contents.length:0;if(!(u>=s)){var h=1048576;s=Math.max(s,u*(u<h?2:1.125)|0),u!=0&&(s=Math.max(s,256));var m=o.contents;o.contents=new Uint8Array(s),o.usedBytes>0&&o.contents.set(m.subarray(0,o.usedBytes),0)}},resizeFileStorage:function(o,s){if(o.usedBytes!=s){if(s==0){o.contents=null,o.usedBytes=0;return}if(!o.contents||o.contents.subarray){var u=o.contents;o.contents=new Uint8Array(new ArrayBuffer(s)),u&&o.contents.set(u.subarray(0,Math.min(s,o.usedBytes))),o.usedBytes=s;return}if(o.contents||(o.contents=[]),o.contents.length>s)o.contents.length=s;else for(;o.contents.length<s;)o.contents.push(0);o.usedBytes=s}},node_ops:{getattr:function(o){var s={};return s.dev=l.isChrdev(o.mode)?o.id:1,s.ino=o.id,s.mode=o.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=o.rdev,l.isDir(o.mode)?s.size=4096:l.isFile(o.mode)?s.size=o.usedBytes:l.isLink(o.mode)?s.size=o.link.length:s.size=0,s.atime=new Date(o.timestamp),s.mtime=new Date(o.timestamp),s.ctime=new Date(o.timestamp),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr:function(o,s){s.mode!==void 0&&(o.mode=s.mode),s.timestamp!==void 0&&(o.timestamp=s.timestamp),s.size!==void 0&&ee.resizeFileStorage(o,s.size)},lookup:function(o,s){throw l.genericErrors[44]},mknod:function(o,s,u,h){return ee.createNode(o,s,u,h)},rename:function(o,s,u){if(l.isDir(o.mode)){var h;try{h=l.lookupNode(s,u)}catch{}if(h)for(var m in h.contents)throw new l.ErrnoError(55)}delete o.parent.contents[o.name],o.name=u,s.contents[u]=o,o.parent=s},unlink:function(o,s){delete o.contents[s]},rmdir:function(o,s){var u=l.lookupNode(o,s);for(var h in u.contents)throw new l.ErrnoError(55);delete o.contents[s]},readdir:function(o){var s=[".",".."];for(var u in o.contents)o.contents.hasOwnProperty(u)&&s.push(u);return s},symlink:function(o,s,u){var h=ee.createNode(o,s,41471,0);return h.link=u,h},readlink:function(o){if(!l.isLink(o.mode))throw new l.ErrnoError(28);return o.link}},stream_ops:{read:function(o,s,u,h,m){var g=o.node.contents;if(m>=o.node.usedBytes)return 0;var w=Math.min(o.node.usedBytes-m,h);if(w>8&&g.subarray)s.set(g.subarray(m,m+w),u);else for(var S=0;S<w;S++)s[u+S]=g[m+S];return w},write:function(o,s,u,h,m,g){if(g=!1,!h)return 0;var w=o.node;if(w.timestamp=Date.now(),s.subarray&&(!w.contents||w.contents.subarray)){if(g)return w.contents=s.subarray(u,u+h),w.usedBytes=h,h;if(w.usedBytes===0&&m===0)return w.contents=new Uint8Array(s.subarray(u,u+h)),w.usedBytes=h,h;if(m+h<=w.usedBytes)return w.contents.set(s.subarray(u,u+h),m),h}if(ee.expandFileStorage(w,m+h),w.contents.subarray&&s.subarray)w.contents.set(s.subarray(u,u+h),m);else for(var S=0;S<h;S++)w.contents[m+S]=s[u+S];return w.usedBytes=Math.max(w.usedBytes,m+h),h},llseek:function(o,s,u){var h=s;if(u===1?h+=o.position:u===2&&l.isFile(o.node.mode)&&(h+=o.node.usedBytes),h<0)throw new l.ErrnoError(28);return h},allocate:function(o,s,u){ee.expandFileStorage(o.node,s+u),o.node.usedBytes=Math.max(o.node.usedBytes,s+u)},mmap:function(o,s,u,h,m,g,w){if(!l.isFile(o.node.mode))throw new l.ErrnoError(43);var S,F,M=o.node.contents;if(!(w&2)&&(M.buffer===s||M.buffer===s.buffer))F=!1,S=M.byteOffset;else{(m>0||m+h<o.node.usedBytes)&&(M.subarray?M=M.subarray(m,m+h):M=Array.prototype.slice.call(M,m,m+h)),F=!0;var Y=s.buffer==je.buffer;if(S=Ua(h),!S)throw new l.ErrnoError(48);(Y?je:s).set(M,S)}return{ptr:S,allocated:F}},msync:function(o,s,u,h,m){if(!l.isFile(o.node.mode))throw new l.ErrnoError(43);return m&2||ee.stream_ops.write(o,s,0,h,u,!1),0}}},l={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(o){if(!(o instanceof l.ErrnoError))throw o+" : "+Gl();return yr(o.errno)},lookupPath:function(o,s){if(o=Je.resolve(l.cwd(),o),s=s||{},!o)return{path:"",node:null};var u={follow_mount:!0,recurse_count:0};for(var h in u)s[h]===void 0&&(s[h]=u[h]);if(s.recurse_count>8)throw new l.ErrnoError(32);for(var m=ne.normalizeArray(o.split("/").filter(function(q){return!!q}),!1),g=l.root,w="/",S=0;S<m.length;S++){var F=S===m.length-1;if(F&&s.parent)break;if(g=l.lookupNode(g,m[S]),w=ne.join2(w,m[S]),l.isMountpoint(g)&&(!F||F&&s.follow_mount)&&(g=g.mounted.root),!F||s.follow)for(var M=0;l.isLink(g.mode);){var Y=l.readlink(w);w=Je.resolve(ne.dirname(w),Y);var Q=l.lookupPath(w,{recurse_count:s.recurse_count});if(g=Q.node,M++>40)throw new l.ErrnoError(32)}}return{path:w,node:g}},getPath:function(o){for(var s;;){if(l.isRoot(o)){var u=o.mount.mountpoint;return s?u[u.length-1]!=="/"?u+"/"+s:u+s:u}s=s?o.name+"/"+s:o.name,o=o.parent}},hashName:function(o,s){for(var u=0,h=0;h<s.length;h++)u=(u<<5)-u+s.charCodeAt(h)|0;return(o+u>>>0)%l.nameTable.length},hashAddNode:function(o){var s=l.hashName(o.parent.id,o.name);o.name_next=l.nameTable[s],l.nameTable[s]=o},hashRemoveNode:function(o){var s=l.hashName(o.parent.id,o.name);if(l.nameTable[s]===o)l.nameTable[s]=o.name_next;else for(var u=l.nameTable[s];u;){if(u.name_next===o){u.name_next=o.name_next;break}u=u.name_next}},lookupNode:function(o,s){var u=l.mayLookup(o);if(u)throw new l.ErrnoError(u,o);for(var h=l.hashName(o.id,s),m=l.nameTable[h];m;m=m.name_next){var g=m.name;if(m.parent.id===o.id&&g===s)return m}return l.lookup(o,s)},createNode:function(o,s,u,h){if(!l.FSNode){l.FSNode=function(S,F,M,Y){S||(S=this),this.parent=S,this.mount=S.mount,this.mounted=null,this.id=l.nextInode++,this.name=F,this.mode=M,this.node_ops={},this.stream_ops={},this.rdev=Y},l.FSNode.prototype={};var m=365,g=146;Object.defineProperties(l.FSNode.prototype,{read:{get:function(){return(this.mode&m)===m},set:function(S){S?this.mode|=m:this.mode&=~m}},write:{get:function(){return(this.mode&g)===g},set:function(S){S?this.mode|=g:this.mode&=~g}},isFolder:{get:function(){return l.isDir(this.mode)}},isDevice:{get:function(){return l.isChrdev(this.mode)}}})}var w=new l.FSNode(o,s,u,h);return l.hashAddNode(w),w},destroyNode:function(o){l.hashRemoveNode(o)},isRoot:function(o){return o===o.parent},isMountpoint:function(o){return!!o.mounted},isFile:function(o){return(o&61440)===32768},isDir:function(o){return(o&61440)===16384},isLink:function(o){return(o&61440)===40960},isChrdev:function(o){return(o&61440)===8192},isBlkdev:function(o){return(o&61440)===24576},isFIFO:function(o){return(o&61440)===4096},isSocket:function(o){return(o&49152)===49152},flagModes:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(o){var s=l.flagModes[o];if(typeof s>"u")throw new Error("Unknown file open mode: "+o);return s},flagsToPermissionString:function(o){var s=["r","w","rw"][o&3];return o&512&&(s+="w"),s},nodePermissions:function(o,s){return l.ignorePermissions?0:s.indexOf("r")!==-1&&!(o.mode&292)||s.indexOf("w")!==-1&&!(o.mode&146)||s.indexOf("x")!==-1&&!(o.mode&73)?2:0},mayLookup:function(o){var s=l.nodePermissions(o,"x");return s||(o.node_ops.lookup?0:2)},mayCreate:function(o,s){try{var u=l.lookupNode(o,s);return 20}catch{}return l.nodePermissions(o,"wx")},mayDelete:function(o,s,u){var h;try{h=l.lookupNode(o,s)}catch(g){return g.errno}var m=l.nodePermissions(o,"wx");if(m)return m;if(u){if(!l.isDir(h.mode))return 54;if(l.isRoot(h)||l.getPath(h)===l.cwd())return 10}else if(l.isDir(h.mode))return 31;return 0},mayOpen:function(o,s){return o?l.isLink(o.mode)?32:l.isDir(o.mode)&&(l.flagsToPermissionString(s)!=="r"||s&512)?31:l.nodePermissions(o,l.flagsToPermissionString(s)):44},MAX_OPEN_FDS:4096,nextfd:function(o,s){o=o||0,s=s||l.MAX_OPEN_FDS;for(var u=o;u<=s;u++)if(!l.streams[u])return u;throw new l.ErrnoError(33)},getStream:function(o){return l.streams[o]},createStream:function(o,s,u){l.FSStream||(l.FSStream=function(){},l.FSStream.prototype={},Object.defineProperties(l.FSStream.prototype,{object:{get:function(){return this.node},set:function(w){this.node=w}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}}));var h=new l.FSStream;for(var m in o)h[m]=o[m];o=h;var g=l.nextfd(s,u);return o.fd=g,l.streams[g]=o,o},closeStream:function(o){l.streams[o]=null},chrdev_stream_ops:{open:function(o){var s=l.getDevice(o.node.rdev);o.stream_ops=s.stream_ops,o.stream_ops.open&&o.stream_ops.open(o)},llseek:function(){throw new l.ErrnoError(70)}},major:function(o){return o>>8},minor:function(o){return o&255},makedev:function(o,s){return o<<8|s},registerDevice:function(o,s){l.devices[o]={stream_ops:s}},getDevice:function(o){return l.devices[o]},getMounts:function(o){for(var s=[],u=[o];u.length;){var h=u.pop();s.push(h),u.push.apply(u,h.mounts)}return s},syncfs:function(o,s){typeof o=="function"&&(s=o,o=!1),l.syncFSRequests++,l.syncFSRequests>1&&console.log("warning: "+l.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var u=l.getMounts(l.root.mount),h=0;function m(w){return l.syncFSRequests--,s(w)}function g(w){if(w)return g.errored?void 0:(g.errored=!0,m(w));++h>=u.length&&m(null)}u.forEach(function(w){if(!w.type.syncfs)return g(null);w.type.syncfs(w,o,g)})},mount:function(o,s,u){var h=u==="/",m=!u,g;if(h&&l.root)throw new l.ErrnoError(10);if(!h&&!m){var w=l.lookupPath(u,{follow_mount:!1});if(u=w.path,g=w.node,l.isMountpoint(g))throw new l.ErrnoError(10);if(!l.isDir(g.mode))throw new l.ErrnoError(54)}var S={type:o,opts:s,mountpoint:u,mounts:[]},F=o.mount(S);return F.mount=S,S.root=F,h?l.root=F:g&&(g.mounted=S,g.mount&&g.mount.mounts.push(S)),F},unmount:function(o){var s=l.lookupPath(o,{follow_mount:!1});if(!l.isMountpoint(s.node))throw new l.ErrnoError(28);var u=s.node,h=u.mounted,m=l.getMounts(h);Object.keys(l.nameTable).forEach(function(w){for(var S=l.nameTable[w];S;){var F=S.name_next;m.indexOf(S.mount)!==-1&&l.destroyNode(S),S=F}}),u.mounted=null;var g=u.mount.mounts.indexOf(h);u.mount.mounts.splice(g,1)},lookup:function(o,s){return o.node_ops.lookup(o,s)},mknod:function(o,s,u){var h=l.lookupPath(o,{parent:!0}),m=h.node,g=ne.basename(o);if(!g||g==="."||g==="..")throw new l.ErrnoError(28);var w=l.mayCreate(m,g);if(w)throw new l.ErrnoError(w);if(!m.node_ops.mknod)throw new l.ErrnoError(63);return m.node_ops.mknod(m,g,s,u)},create:function(o,s){return s=s!==void 0?s:438,s&=4095,s|=32768,l.mknod(o,s,0)},mkdir:function(o,s){return s=s!==void 0?s:511,s&=1023,s|=16384,l.mknod(o,s,0)},mkdirTree:function(o,s){for(var u=o.split("/"),h="",m=0;m<u.length;++m)if(u[m]){h+="/"+u[m];try{l.mkdir(h,s)}catch(g){if(g.errno!=20)throw g}}},mkdev:function(o,s,u){return typeof u>"u"&&(u=s,s=438),s|=8192,l.mknod(o,s,u)},symlink:function(o,s){if(!Je.resolve(o))throw new l.ErrnoError(44);var u=l.lookupPath(s,{parent:!0}),h=u.node;if(!h)throw new l.ErrnoError(44);var m=ne.basename(s),g=l.mayCreate(h,m);if(g)throw new l.ErrnoError(g);if(!h.node_ops.symlink)throw new l.ErrnoError(63);return h.node_ops.symlink(h,m,o)},rename:function(o,s){var u=ne.dirname(o),h=ne.dirname(s),m=ne.basename(o),g=ne.basename(s),w,S,F;try{w=l.lookupPath(o,{parent:!0}),S=w.node,w=l.lookupPath(s,{parent:!0}),F=w.node}catch{throw new l.ErrnoError(10)}if(!S||!F)throw new l.ErrnoError(44);if(S.mount!==F.mount)throw new l.ErrnoError(75);var M=l.lookupNode(S,m),Y=Je.relative(o,h);if(Y.charAt(0)!==".")throw new l.ErrnoError(28);if(Y=Je.relative(s,u),Y.charAt(0)!==".")throw new l.ErrnoError(55);var Q;try{Q=l.lookupNode(F,g)}catch{}if(M!==Q){var q=l.isDir(M.mode),K=l.mayDelete(S,m,q);if(K)throw new l.ErrnoError(K);if(K=Q?l.mayDelete(F,g,q):l.mayCreate(F,g),K)throw new l.ErrnoError(K);if(!S.node_ops.rename)throw new l.ErrnoError(63);if(l.isMountpoint(M)||Q&&l.isMountpoint(Q))throw new l.ErrnoError(10);if(F!==S&&(K=l.nodePermissions(S,"w"),K))throw new l.ErrnoError(K);try{l.trackingDelegate.willMovePath&&l.trackingDelegate.willMovePath(o,s)}catch(ye){console.log("FS.trackingDelegate['willMovePath']('"+o+"', '"+s+"') threw an exception: "+ye.message)}l.hashRemoveNode(M);try{S.node_ops.rename(M,F,g)}catch(ye){throw ye}finally{l.hashAddNode(M)}try{l.trackingDelegate.onMovePath&&l.trackingDelegate.onMovePath(o,s)}catch(ye){console.log("FS.trackingDelegate['onMovePath']('"+o+"', '"+s+"') threw an exception: "+ye.message)}}},rmdir:function(o){var s=l.lookupPath(o,{parent:!0}),u=s.node,h=ne.basename(o),m=l.lookupNode(u,h),g=l.mayDelete(u,h,!0);if(g)throw new l.ErrnoError(g);if(!u.node_ops.rmdir)throw new l.ErrnoError(63);if(l.isMountpoint(m))throw new l.ErrnoError(10);try{l.trackingDelegate.willDeletePath&&l.trackingDelegate.willDeletePath(o)}catch(w){console.log("FS.trackingDelegate['willDeletePath']('"+o+"') threw an exception: "+w.message)}u.node_ops.rmdir(u,h),l.destroyNode(m);try{l.trackingDelegate.onDeletePath&&l.trackingDelegate.onDeletePath(o)}catch(w){console.log("FS.trackingDelegate['onDeletePath']('"+o+"') threw an exception: "+w.message)}},readdir:function(o){var s=l.lookupPath(o,{follow:!0}),u=s.node;if(!u.node_ops.readdir)throw new l.ErrnoError(54);return u.node_ops.readdir(u)},unlink:function(o){var s=l.lookupPath(o,{parent:!0}),u=s.node,h=ne.basename(o),m=l.lookupNode(u,h),g=l.mayDelete(u,h,!1);if(g)throw new l.ErrnoError(g);if(!u.node_ops.unlink)throw new l.ErrnoError(63);if(l.isMountpoint(m))throw new l.ErrnoError(10);try{l.trackingDelegate.willDeletePath&&l.trackingDelegate.willDeletePath(o)}catch(w){console.log("FS.trackingDelegate['willDeletePath']('"+o+"') threw an exception: "+w.message)}u.node_ops.unlink(u,h),l.destroyNode(m);try{l.trackingDelegate.onDeletePath&&l.trackingDelegate.onDeletePath(o)}catch(w){console.log("FS.trackingDelegate['onDeletePath']('"+o+"') threw an exception: "+w.message)}},readlink:function(o){var s=l.lookupPath(o),u=s.node;if(!u)throw new l.ErrnoError(44);if(!u.node_ops.readlink)throw new l.ErrnoError(28);return Je.resolve(l.getPath(u.parent),u.node_ops.readlink(u))},stat:function(o,s){var u=l.lookupPath(o,{follow:!s}),h=u.node;if(!h)throw new l.ErrnoError(44);if(!h.node_ops.getattr)throw new l.ErrnoError(63);return h.node_ops.getattr(h)},lstat:function(o){return l.stat(o,!0)},chmod:function(o,s,u){var h;if(typeof o=="string"){var m=l.lookupPath(o,{follow:!u});h=m.node}else h=o;if(!h.node_ops.setattr)throw new l.ErrnoError(63);h.node_ops.setattr(h,{mode:s&4095|h.mode&-4096,timestamp:Date.now()})},lchmod:function(o,s){l.chmod(o,s,!0)},fchmod:function(o,s){var u=l.getStream(o);if(!u)throw new l.ErrnoError(8);l.chmod(u.node,s)},chown:function(o,s,u,h){var m;if(typeof o=="string"){var g=l.lookupPath(o,{follow:!h});m=g.node}else m=o;if(!m.node_ops.setattr)throw new l.ErrnoError(63);m.node_ops.setattr(m,{timestamp:Date.now()})},lchown:function(o,s,u){l.chown(o,s,u,!0)},fchown:function(o,s,u){var h=l.getStream(o);if(!h)throw new l.ErrnoError(8);l.chown(h.node,s,u)},truncate:function(o,s){if(s<0)throw new l.ErrnoError(28);var u;if(typeof o=="string"){var h=l.lookupPath(o,{follow:!0});u=h.node}else u=o;if(!u.node_ops.setattr)throw new l.ErrnoError(63);if(l.isDir(u.mode))throw new l.ErrnoError(31);if(!l.isFile(u.mode))throw new l.ErrnoError(28);var m=l.nodePermissions(u,"w");if(m)throw new l.ErrnoError(m);u.node_ops.setattr(u,{size:s,timestamp:Date.now()})},ftruncate:function(o,s){var u=l.getStream(o);if(!u)throw new l.ErrnoError(8);if(!(u.flags&2097155))throw new l.ErrnoError(28);l.truncate(u.node,s)},utime:function(o,s,u){var h=l.lookupPath(o,{follow:!0}),m=h.node;m.node_ops.setattr(m,{timestamp:Math.max(s,u)})},open:function(o,s,u,h,m){if(o==="")throw new l.ErrnoError(44);s=typeof s=="string"?l.modeStringToFlags(s):s,u=typeof u>"u"?438:u,s&64?u=u&4095|32768:u=0;var g;if(typeof o=="object")g=o;else{o=ne.normalize(o);try{var w=l.lookupPath(o,{follow:!(s&131072)});g=w.node}catch{}}var S=!1;if(s&64)if(g){if(s&128)throw new l.ErrnoError(20)}else g=l.mknod(o,u,0),S=!0;if(!g)throw new l.ErrnoError(44);if(l.isChrdev(g.mode)&&(s&=-513),s&65536&&!l.isDir(g.mode))throw new l.ErrnoError(54);if(!S){var F=l.mayOpen(g,s);if(F)throw new l.ErrnoError(F)}s&512&&l.truncate(g,0),s&=-641;var M=l.createStream({node:g,path:l.getPath(g),flags:s,seekable:!0,position:0,stream_ops:g.stream_ops,ungotten:[],error:!1},h,m);M.stream_ops.open&&M.stream_ops.open(M),i.logReadFiles&&!(s&1)&&(l.readFiles||(l.readFiles={}),o in l.readFiles||(l.readFiles[o]=1,console.log("FS.trackingDelegate error on read file: "+o)));try{if(l.trackingDelegate.onOpenFile){var Y=0;(s&2097155)!==1&&(Y|=l.tracking.openFlags.READ),s&2097155&&(Y|=l.tracking.openFlags.WRITE),l.trackingDelegate.onOpenFile(o,Y)}}catch(Q){console.log("FS.trackingDelegate['onOpenFile']('"+o+"', flags) threw an exception: "+Q.message)}return M},close:function(o){if(l.isClosed(o))throw new l.ErrnoError(8);o.getdents&&(o.getdents=null);try{o.stream_ops.close&&o.stream_ops.close(o)}catch(s){throw s}finally{l.closeStream(o.fd)}o.fd=null},isClosed:function(o){return o.fd===null},llseek:function(o,s,u){if(l.isClosed(o))throw new l.ErrnoError(8);if(!o.seekable||!o.stream_ops.llseek)throw new l.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new l.ErrnoError(28);return o.position=o.stream_ops.llseek(o,s,u),o.ungotten=[],o.position},read:function(o,s,u,h,m){if(h<0||m<0)throw new l.ErrnoError(28);if(l.isClosed(o))throw new l.ErrnoError(8);if((o.flags&2097155)===1)throw new l.ErrnoError(8);if(l.isDir(o.node.mode))throw new l.ErrnoError(31);if(!o.stream_ops.read)throw new l.ErrnoError(28);var g=typeof m<"u";if(!g)m=o.position;else if(!o.seekable)throw new l.ErrnoError(70);var w=o.stream_ops.read(o,s,u,h,m);return g||(o.position+=w),w},write:function(o,s,u,h,m,g){if(h<0||m<0)throw new l.ErrnoError(28);if(l.isClosed(o))throw new l.ErrnoError(8);if(!(o.flags&2097155))throw new l.ErrnoError(8);if(l.isDir(o.node.mode))throw new l.ErrnoError(31);if(!o.stream_ops.write)throw new l.ErrnoError(28);o.flags&1024&&l.llseek(o,0,2);var w=typeof m<"u";if(!w)m=o.position;else if(!o.seekable)throw new l.ErrnoError(70);var S=o.stream_ops.write(o,s,u,h,m,g);w||(o.position+=S);try{o.path&&l.trackingDelegate.onWriteToFile&&l.trackingDelegate.onWriteToFile(o.path)}catch(F){console.log("FS.trackingDelegate['onWriteToFile']('"+o.path+"') threw an exception: "+F.message)}return S},allocate:function(o,s,u){if(l.isClosed(o))throw new l.ErrnoError(8);if(s<0||u<=0)throw new l.ErrnoError(28);if(!(o.flags&2097155))throw new l.ErrnoError(8);if(!l.isFile(o.node.mode)&&!l.isDir(o.node.mode))throw new l.ErrnoError(43);if(!o.stream_ops.allocate)throw new l.ErrnoError(138);o.stream_ops.allocate(o,s,u)},mmap:function(o,s,u,h,m,g,w){if(g&2&&!(w&2)&&(o.flags&2097155)!==2)throw new l.ErrnoError(2);if((o.flags&2097155)===1)throw new l.ErrnoError(2);if(!o.stream_ops.mmap)throw new l.ErrnoError(43);return o.stream_ops.mmap(o,s,u,h,m,g,w)},msync:function(o,s,u,h,m){return!o||!o.stream_ops.msync?0:o.stream_ops.msync(o,s,u,h,m)},munmap:function(o){return 0},ioctl:function(o,s,u){if(!o.stream_ops.ioctl)throw new l.ErrnoError(59);return o.stream_ops.ioctl(o,s,u)},readFile:function(o,s){if(s=s||{},s.flags=s.flags||"r",s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error('Invalid encoding type "'+s.encoding+'"');var u,h=l.open(o,s.flags),m=l.stat(o),g=m.size,w=new Uint8Array(g);return l.read(h,w,0,g,0),s.encoding==="utf8"?u=Ae(w,0):s.encoding==="binary"&&(u=w),l.close(h),u},writeFile:function(o,s,u){u=u||{},u.flags=u.flags||"w";var h=l.open(o,u.flags,u.mode);if(typeof s=="string"){var m=new Uint8Array(Gt(s)+1),g=Ee(s,m,0,m.length);l.write(h,m,0,g,void 0,u.canOwn)}else if(ArrayBuffer.isView(s))l.write(h,s,0,s.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");l.close(h)},cwd:function(){return l.currentPath},chdir:function(o){var s=l.lookupPath(o,{follow:!0});if(s.node===null)throw new l.ErrnoError(44);if(!l.isDir(s.node.mode))throw new l.ErrnoError(54);var u=l.nodePermissions(s.node,"x");if(u)throw new l.ErrnoError(u);l.currentPath=s.path},createDefaultDirectories:function(){l.mkdir("/tmp"),l.mkdir("/home"),l.mkdir("/home/web_user")},createDefaultDevices:function(){l.mkdir("/dev"),l.registerDevice(l.makedev(1,3),{read:function(){return 0},write:function(h,m,g,w,S){return w}}),l.mkdev("/dev/null",l.makedev(1,3)),_t.register(l.makedev(5,0),_t.default_tty_ops),_t.register(l.makedev(6,0),_t.default_tty1_ops),l.mkdev("/dev/tty",l.makedev(5,0)),l.mkdev("/dev/tty1",l.makedev(6,0));var o;if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var s=new Uint8Array(1);o=function(){return crypto.getRandomValues(s),s[0]}}else if(P)try{var u=tn;o=function(){return u.randomBytes(1)[0]}}catch{}o||(o=function(){Se("random_device")}),l.createDevice("/dev","random",o),l.createDevice("/dev","urandom",o),l.mkdir("/dev/shm"),l.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){l.mkdir("/proc"),l.mkdir("/proc/self"),l.mkdir("/proc/self/fd"),l.mount({mount:function(){var o=l.createNode("/proc/self","fd",16895,73);return o.node_ops={lookup:function(s,u){var h=+u,m=l.getStream(h);if(!m)throw new l.ErrnoError(8);var g={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return m.path}}};return g.parent=g,g}},o}},{},"/proc/self/fd")},createStandardStreams:function(){i.stdin?l.createDevice("/dev","stdin",i.stdin):l.symlink("/dev/tty","/dev/stdin"),i.stdout?l.createDevice("/dev","stdout",null,i.stdout):l.symlink("/dev/tty","/dev/stdout"),i.stderr?l.createDevice("/dev","stderr",null,i.stderr):l.symlink("/dev/tty1","/dev/stderr"),l.open("/dev/stdin","r"),l.open("/dev/stdout","w"),l.open("/dev/stderr","w")},ensureErrnoError:function(){l.ErrnoError||(l.ErrnoError=function(o,s){this.node=s,this.setErrno=function(u){this.errno=u},this.setErrno(o),this.message="FS error"},l.ErrnoError.prototype=new Error,l.ErrnoError.prototype.constructor=l.ErrnoError,[44].forEach(function(o){l.genericErrors[o]=new l.ErrnoError(o),l.genericErrors[o].stack="<generic error, no stack>"}))},staticInit:function(){l.ensureErrnoError(),l.nameTable=new Array(4096),l.mount(ee,{},"/"),l.createDefaultDirectories(),l.createDefaultDevices(),l.createSpecialDirectories(),l.filesystems={MEMFS:ee}},init:function(o,s,u){l.init.initialized=!0,l.ensureErrnoError(),i.stdin=o||i.stdin,i.stdout=s||i.stdout,i.stderr=u||i.stderr,l.createStandardStreams()},quit:function(){l.init.initialized=!1;var o=i._fflush;o&&o(0);for(var s=0;s<l.streams.length;s++){var u=l.streams[s];u&&l.close(u)}},getMode:function(o,s){var u=0;return o&&(u|=365),s&&(u|=146),u},joinPath:function(o,s){var u=ne.join.apply(null,o);return s&&u[0]=="/"&&(u=u.substr(1)),u},absolutePath:function(o,s){return Je.resolve(s,o)},standardizePath:function(o){return ne.normalize(o)},findObject:function(o,s){var u=l.analyzePath(o,s);return u.exists?u.object:(yr(u.error),null)},analyzePath:function(o,s){try{var u=l.lookupPath(o,{follow:!s});o=u.path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=l.lookupPath(o,{parent:!0});h.parentExists=!0,h.parentPath=u.path,h.parentObject=u.node,h.name=ne.basename(o),u=l.lookupPath(o,{follow:!s}),h.exists=!0,h.path=u.path,h.object=u.node,h.name=u.node.name,h.isRoot=u.path==="/"}catch(m){h.error=m.errno}return h},createFolder:function(o,s,u,h){var m=ne.join2(typeof o=="string"?o:l.getPath(o),s),g=l.getMode(u,h);return l.mkdir(m,g)},createPath:function(o,s,u,h){o=typeof o=="string"?o:l.getPath(o);for(var m=s.split("/").reverse();m.length;){var g=m.pop();if(g){var w=ne.join2(o,g);try{l.mkdir(w)}catch{}o=w}}return w},createFile:function(o,s,u,h,m){var g=ne.join2(typeof o=="string"?o:l.getPath(o),s),w=l.getMode(h,m);return l.create(g,w)},createDataFile:function(o,s,u,h,m,g){var w=s?ne.join2(typeof o=="string"?o:l.getPath(o),s):o,S=l.getMode(h,m),F=l.create(w,S);if(u){if(typeof u=="string"){for(var M=new Array(u.length),Y=0,Q=u.length;Y<Q;++Y)M[Y]=u.charCodeAt(Y);u=M}l.chmod(F,S|146);var q=l.open(F,"w");l.write(q,u,0,u.length,0,g),l.close(q),l.chmod(F,S)}return F},createDevice:function(o,s,u,h){var m=ne.join2(typeof o=="string"?o:l.getPath(o),s),g=l.getMode(!!u,!!h);l.createDevice.major||(l.createDevice.major=64);var w=l.makedev(l.createDevice.major++,0);return l.registerDevice(w,{open:function(S){S.seekable=!1},close:function(S){h&&h.buffer&&h.buffer.length&&h(10)},read:function(S,F,M,Y,Q){for(var q=0,K=0;K<Y;K++){var ye;try{ye=u()}catch{throw new l.ErrnoError(29)}if(ye===void 0&&q===0)throw new l.ErrnoError(6);if(ye==null)break;q++,F[M+K]=ye}return q&&(S.node.timestamp=Date.now()),q},write:function(S,F,M,Y,Q){for(var q=0;q<Y;q++)try{h(F[M+q])}catch{throw new l.ErrnoError(29)}return Y&&(S.node.timestamp=Date.now()),q}}),l.mkdev(m,g,w)},createLink:function(o,s,u,h,m){var g=ne.join2(typeof o=="string"?o:l.getPath(o),s);return l.symlink(u,g)},forceLoadFile:function(o){if(o.isDevice||o.isFolder||o.link||o.contents)return!0;var s=!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(oe)try{o.contents=Tt(oe(o.url),!0),o.usedBytes=o.contents.length}catch{s=!1}else throw new Error("Cannot load without read() or XMLHttpRequest.");return s||yr(29),s},createLazyFile:function(o,s,u,h,m){function g(){this.lengthKnown=!1,this.chunks=[]}if(g.prototype.get=function(Q){if(!(Q>this.length-1||Q<0)){var q=Q%this.chunkSize,K=Q/this.chunkSize|0;return this.getter(K)[q]}},g.prototype.setDataGetter=function(Q){this.getter=Q},g.prototype.cacheLength=function(){var Q=new XMLHttpRequest;if(Q.open("HEAD",u,!1),Q.send(null),!(Q.status>=200&&Q.status<300||Q.status===304))throw new Error("Couldn't load "+u+". Status: "+Q.status);var q=Number(Q.getResponseHeader("Content-length")),K,ye=(K=Q.getResponseHeader("Accept-Ranges"))&&K==="bytes",De=(K=Q.getResponseHeader("Content-Encoding"))&&K==="gzip",Te=1024*1024;ye||(Te=q);var ie=function(L,le){if(L>le)throw new Error("invalid range ("+L+", "+le+") or no bytes requested!");if(le>q-1)throw new Error("only "+q+" bytes available! programmer error!");var W=new XMLHttpRequest;if(W.open("GET",u,!1),q!==Te&&W.setRequestHeader("Range","bytes="+L+"-"+le),typeof Uint8Array<"u"&&(W.responseType="arraybuffer"),W.overrideMimeType&&W.overrideMimeType("text/plain; charset=x-user-defined"),W.send(null),!(W.status>=200&&W.status<300||W.status===304))throw new Error("Couldn't load "+u+". Status: "+W.status);return W.response!==void 0?new Uint8Array(W.response||[]):Tt(W.responseText||"",!0)},D=this;D.setDataGetter(function(L){var le=L*Te,W=(L+1)*Te-1;if(W=Math.min(W,q-1),typeof D.chunks[L]>"u"&&(D.chunks[L]=ie(le,W)),typeof D.chunks[L]>"u")throw new Error("doXHR failed!");return D.chunks[L]}),(De||!q)&&(Te=q=1,q=this.getter(0).length,Te=q,console.log("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=q,this._chunkSize=Te,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!T)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new g;Object.defineProperties(w,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var S={isDevice:!1,contents:w}}else var S={isDevice:!1,url:u};var F=l.createFile(o,s,S,h,m);S.contents?F.contents=S.contents:S.url&&(F.contents=null,F.url=S.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var M={},Y=Object.keys(F.stream_ops);return Y.forEach(function(Q){var q=F.stream_ops[Q];M[Q]=function(){if(!l.forceLoadFile(F))throw new l.ErrnoError(29);return q.apply(null,arguments)}}),M.read=function(Q,q,K,ye,De){if(!l.forceLoadFile(F))throw new l.ErrnoError(29);var Te=Q.node.contents;if(De>=Te.length)return 0;var ie=Math.min(Te.length-De,ye);if(Te.slice)for(var D=0;D<ie;D++)q[K+D]=Te[De+D];else for(var D=0;D<ie;D++)q[K+D]=Te.get(De+D);return ie},F.stream_ops=M,F},createPreloadedFile:function(o,s,u,h,m,g,w,S,F,M){Browser.init();var Y=s?Je.resolve(ne.join2(o,s)):o;function Q(q){function K(De){M&&M(),S||l.createDataFile(o,s,De,h,m,F),g&&g(),yi()}var ye=!1;i.preloadPlugins.forEach(function(De){ye||De.canHandle(Y)&&(De.handle(q,Y,K,function(){w&&w(),yi()}),ye=!0)}),ye||K(q)}Pa(),typeof u=="string"?Browser.asyncLoad(u,function(q){Q(q)},w):Q(u)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(o,s,u){s=s||function(){},u=u||function(){};var h=l.indexedDB();try{var m=h.open(l.DB_NAME(),l.DB_VERSION)}catch(g){return u(g)}m.onupgradeneeded=function(){console.log("creating db");var g=m.result;g.createObjectStore(l.DB_STORE_NAME)},m.onsuccess=function(){var g=m.result,w=g.transaction([l.DB_STORE_NAME],"readwrite"),S=w.objectStore(l.DB_STORE_NAME),F=0,M=0,Y=o.length;function Q(){M==0?s():u()}o.forEach(function(q){var K=S.put(l.analyzePath(q).object.contents,q);K.onsuccess=function(){F++,F+M==Y&&Q()},K.onerror=function(){M++,F+M==Y&&Q()}}),w.onerror=u},m.onerror=u},loadFilesFromDB:function(o,s,u){s=s||function(){},u=u||function(){};var h=l.indexedDB();try{var m=h.open(l.DB_NAME(),l.DB_VERSION)}catch(g){return u(g)}m.onupgradeneeded=u,m.onsuccess=function(){var g=m.result;try{var w=g.transaction([l.DB_STORE_NAME],"readonly")}catch(q){u(q);return}var S=w.objectStore(l.DB_STORE_NAME),F=0,M=0,Y=o.length;function Q(){M==0?s():u()}o.forEach(function(q){var K=S.get(q);K.onsuccess=function(){l.analyzePath(q).exists&&l.unlink(q),l.createDataFile(ne.dirname(q),ne.basename(q),K.result,!0,!0,!0),F++,F+M==Y&&Q()},K.onerror=function(){M++,F+M==Y&&Q()}}),w.onerror=u},m.onerror=u}},Z={DEFAULT_POLLMASK:5,mappings:{},umask:511,calculateAt:function(o,s){if(s[0]!=="/"){var u;if(o===-100)u=l.cwd();else{var h=l.getStream(o);if(!h)throw new l.ErrnoError(8);u=h.path}s=ne.join2(u,s)}return s},doStat:function(o,s,u){try{var h=o(s)}catch(m){if(m&&m.node&&ne.normalize(s)!==ne.normalize(l.getPath(m.node)))return-54;throw m}return N[u>>2]=h.dev,N[u+4>>2]=0,N[u+8>>2]=h.ino,N[u+12>>2]=h.mode,N[u+16>>2]=h.nlink,N[u+20>>2]=h.uid,N[u+24>>2]=h.gid,N[u+28>>2]=h.rdev,N[u+32>>2]=0,et=[h.size>>>0,(Oe=h.size,+pi(Oe)>=1?Oe>0?(mi(+Xr(Oe/4294967296),4294967295)|0)>>>0:~~+Kr((Oe-+(~~Oe>>>0))/4294967296)>>>0:0)],N[u+40>>2]=et[0],N[u+44>>2]=et[1],N[u+48>>2]=4096,N[u+52>>2]=h.blocks,N[u+56>>2]=h.atime.getTime()/1e3|0,N[u+60>>2]=0,N[u+64>>2]=h.mtime.getTime()/1e3|0,N[u+68>>2]=0,N[u+72>>2]=h.ctime.getTime()/1e3|0,N[u+76>>2]=0,et=[h.ino>>>0,(Oe=h.ino,+pi(Oe)>=1?Oe>0?(mi(+Xr(Oe/4294967296),4294967295)|0)>>>0:~~+Kr((Oe-+(~~Oe>>>0))/4294967296)>>>0:0)],N[u+80>>2]=et[0],N[u+84>>2]=et[1],0},doMsync:function(o,s,u,h){var m=new Uint8Array(pt.subarray(o,o+u));l.msync(s,m,0,u,h)},doMkdir:function(o,s){return o=ne.normalize(o),o[o.length-1]==="/"&&(o=o.substr(0,o.length-1)),l.mkdir(o,s,0),0},doMknod:function(o,s,u){switch(s&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return l.mknod(o,s,u),0},doReadlink:function(o,s,u){if(u<=0)return-28;var h=l.readlink(o),m=Math.min(u,Gt(h)),g=je[s+m];return hi(h,s,u+1),je[s+m]=g,m},doAccess:function(o,s){if(s&-8)return-28;var u,h=l.lookupPath(o,{follow:!0});if(u=h.node,!u)return-44;var m="";return s&4&&(m+="r"),s&2&&(m+="w"),s&1&&(m+="x"),m&&l.nodePermissions(u,m)?-2:0},doDup:function(o,s,u){var h=l.getStream(u);return h&&l.close(h),l.open(o,s,0,u,u).fd},doReadv:function(o,s,u,h){for(var m=0,g=0;g<u;g++){var w=N[s+g*8>>2],S=N[s+(g*8+4)>>2],F=l.read(o,je,w,S,h);if(F<0)return-1;if(m+=F,F<S)break}return m},doWritev:function(o,s,u,h){for(var m=0,g=0;g<u;g++){var w=N[s+g*8>>2],S=N[s+(g*8+4)>>2],F=l.write(o,je,w,S,h);if(F<0)return-1;m+=F}return m},varargs:0,get:function(o){Z.varargs+=4;var s=N[Z.varargs-4>>2];return s},getStr:function(){var o=me(Z.get());return o},getStreamFromFD:function(o){o===void 0&&(o=Z.get());var s=l.getStream(o);if(!s)throw new l.ErrnoError(8);return s},get64:function(){var o=Z.get();return Z.get(),o},getZero:function(){Z.get()}};function Hl(o,s){Z.varargs=s;try{var u=Z.getStr(),h=Z.get();return Z.doStat(l.stat,u,h)}catch(m){return(typeof l>"u"||!(m instanceof l.ErrnoError))&&Se(m),-m.errno}}function Jl(o,s){Z.varargs=s;try{var u=Z.getStreamFromFD(),h=Z.get();return Z.doStat(l.stat,u.path,h)}catch(m){return(typeof l>"u"||!(m instanceof l.ErrnoError))&&Se(m),-m.errno}}function Kl(o,s){Z.varargs=s;try{return 0}catch(u){return(typeof l>"u"||!(u instanceof l.ErrnoError))&&Se(u),-u.errno}}function Xl(o,s){return Kl(o,s)}function Zl(o,s){Z.varargs=s;try{var u=Z.getStreamFromFD(),h=Z.get();switch(h){case 0:{var m=Z.get();if(m<0)return-28;var g;return g=l.open(u.path,u.flags,0,m),g.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var m=Z.get();return u.flags|=m,0}case 12:{var m=Z.get(),w=0;return Ra[m+w>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return yr(28),-1;default:return-28}}catch(S){return(typeof l>"u"||!(S instanceof l.ErrnoError))&&Se(S),-S.errno}}function ef(o,s){Z.varargs=s;try{var u=Z.getStr(),h=Z.get(),m=Z.get(),g=l.open(u,h,m);return g.fd}catch(w){return(typeof l>"u"||!(w instanceof l.ErrnoError))&&Se(w),-w.errno}}function tf(o,s){Z.varargs=s;try{var u=Z.getStreamFromFD(),h=Z.get();switch(h){case 21509:case 21505:return u.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return u.tty?0:-59;case 21519:{if(!u.tty)return-59;var m=Z.get();return N[m>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var m=Z.get();return l.ioctl(u,h,m)}case 21523:return u.tty?0:-59;case 21524:return u.tty?0:-59;default:Se("bad ioctl syscall "+h)}}catch(g){return(typeof l>"u"||!(g instanceof l.ErrnoError))&&Se(g),-g.errno}}function rf(o,s){Z.varargs=s;try{var u=Z.getStr(),h=Z.get(),m=Z.get();return Z.doReadlink(u,h,m)}catch(g){return(typeof l>"u"||!(g instanceof l.ErrnoError))&&Se(g),-g.errno}}function nf(){}function of(){Se()}function ja(){return je.length}function af(o,s,u){pt.set(pt.subarray(s,s+u),o)}function sf(o){try{return X.grow(o-pr.byteLength+65535>>16),Ca(X.buffer),1}catch{}}function cf(o){var s=ja(),u=65536,h=2147483648-u;if(o>h)return!1;for(var m=16777216,g=Math.max(s,m);g<o;)g<=536870912?g=Ta(2*g,u):g=Math.min(Ta((3*g+2147483648)/4,u),h);var w=sf(g);return!!w}var qa={};function vr(){if(!vr.strings){var o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:R};for(var s in qa)o[s]=qa[s];var u=[];for(var s in o)u.push(s+"="+o[s]);vr.strings=u}return vr.strings}function uf(o,s){var u=vr(),h=0;return u.forEach(function(m,g){var w=s+h;N[o+g*4>>2]=w,xl(m,w),h+=m.length+1}),0}function lf(o,s){var u=vr();N[o>>2]=u.length;var h=0;return u.forEach(function(m){h+=m.length+1}),N[s>>2]=h,0}function ff(o){}function hf(o){try{var s=Z.getStreamFromFD(o);return l.close(s),0}catch(u){return(typeof l>"u"||!(u instanceof l.ErrnoError))&&Se(u),u.errno}}function df(o,s){try{var u=Z.getStreamFromFD(o),h=u.tty?2:l.isDir(u.mode)?3:l.isLink(u.mode)?7:4;return je[s>>0]=h,0}catch(m){return(typeof l>"u"||!(m instanceof l.ErrnoError))&&Se(m),m.errno}}function pf(o,s,u,h){try{var m=Z.getStreamFromFD(o),g=Z.doReadv(m,s,u);return N[h>>2]=g,0}catch(w){return(typeof l>"u"||!(w instanceof l.ErrnoError))&&Se(w),w.errno}}function mf(o,s,u,h,m){try{var g=Z.getStreamFromFD(o),w=4294967296,S=u*w+(s>>>0),F=9007199254740992;return S<=-F||S>=F?-61:(l.llseek(g,S,h),et=[g.position>>>0,(Oe=g.position,+pi(Oe)>=1?Oe>0?(mi(+Xr(Oe/4294967296),4294967295)|0)>>>0:~~+Kr((Oe-+(~~Oe>>>0))/4294967296)>>>0:0)],N[m>>2]=et[0],N[m+4>>2]=et[1],g.getdents&&S===0&&h===0&&(g.getdents=null),0)}catch(M){return(typeof l>"u"||!(M instanceof l.ErrnoError))&&Se(M),M.errno}}function yf(o,s,u,h){try{var m=Z.getStreamFromFD(o),g=Z.doWritev(m,s,u);return N[h>>2]=g,0}catch(w){return(typeof l>"u"||!(w instanceof l.ErrnoError))&&Se(w),w.errno}}function vf(o){return 0}var gf=(hi("GMT",332480,4),332480);function bf(o,s){var u=new Date(N[o>>2]*1e3);N[s>>2]=u.getUTCSeconds(),N[s+4>>2]=u.getUTCMinutes(),N[s+8>>2]=u.getUTCHours(),N[s+12>>2]=u.getUTCDate(),N[s+16>>2]=u.getUTCMonth(),N[s+20>>2]=u.getUTCFullYear()-1900,N[s+24>>2]=u.getUTCDay(),N[s+36>>2]=0,N[s+32>>2]=0;var h=Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0),m=(u.getTime()-h)/(1e3*60*60*24)|0;return N[s+28>>2]=m,N[s+40>>2]=gf,s}function Zr(){if(Zr.called)return;Zr.called=!0,N[Cf()>>2]=new Date().getTimezoneOffset()*60;var o=new Date().getFullYear(),s=new Date(o,0,1),u=new Date(o,6,1);N[Rf()>>2]=+(s.getTimezoneOffset()!=u.getTimezoneOffset());function h(F){var M=F.toTimeString().match(/\(([A-Za-z ]+)\)$/);return M?M[1]:"GMT"}var m=h(s),g=h(u),w=$e(Tt(m),"i8",Le),S=$e(Tt(g),"i8",Le);u.getTimezoneOffset()<s.getTimezoneOffset()?(N[br()>>2]=w,N[br()+4>>2]=S):(N[br()>>2]=S,N[br()+4>>2]=w)}function Ef(o,s){Zr();var u=new Date(N[o>>2]*1e3);N[s>>2]=u.getSeconds(),N[s+4>>2]=u.getMinutes(),N[s+8>>2]=u.getHours(),N[s+12>>2]=u.getDate(),N[s+16>>2]=u.getMonth(),N[s+20>>2]=u.getFullYear()-1900,N[s+24>>2]=u.getDay();var h=new Date(u.getFullYear(),0,1),m=(u.getTime()-h.getTime())/(1e3*60*60*24)|0;N[s+28>>2]=m,N[s+36>>2]=-(u.getTimezoneOffset()*60);var g=new Date(u.getFullYear(),6,1).getTimezoneOffset(),w=h.getTimezoneOffset(),S=(g!=w&&u.getTimezoneOffset()==Math.min(w,g))|0;N[s+32>>2]=S;var F=N[br()+(S?4:0)>>2];return N[s+40>>2]=F,s}function wf(o){Zr();var s=new Date(N[o+20>>2]+1900,N[o+16>>2],N[o+12>>2],N[o+8>>2],N[o+4>>2],N[o>>2],0),u=N[o+32>>2],h=s.getTimezoneOffset(),m=new Date(s.getFullYear(),0,1),g=new Date(s.getFullYear(),6,1).getTimezoneOffset(),w=m.getTimezoneOffset(),S=Math.min(w,g);if(u<0)N[o+32>>2]=+(g!=w&&S==h);else if(u>0!=(S==h)){var F=Math.max(w,g),M=u>0?S:F;s.setTime(s.getTime()+(M-h)*6e4)}N[o+24>>2]=s.getDay();var Y=(s.getTime()-m.getTime())/(1e3*60*60*24)|0;return N[o+28>>2]=Y,s.getTime()/1e3|0}function Sf(o,s){switch(s){case 0:return 32e3;case 1:case 2:case 3:return 255;case 4:case 5:case 16:case 17:case 18:return 4096;case 6:case 7:case 20:return 1;case 8:return 0;case 9:case 10:case 11:case 12:case 14:case 15:case 19:return-1;case 13:return 64}return yr(28),-1}function If(){return Sf.apply(null,arguments)}function kf(o){return o=+o,o>=0?+Xr(o+.5):+Kr(o-.5)}function Wt(o){return o%4===0&&(o%100!==0||o%400===0)}function gr(o,s){for(var u=0,h=0;h<=s;u+=o[h++]);return u}var Ot=[31,29,31,30,31,30,31,31,30,31,30,31],Dt=[31,28,31,30,31,30,31,31,30,31,30,31];function yt(o,s){for(var u=new Date(o.getTime());s>0;){var h=Wt(u.getFullYear()),m=u.getMonth(),g=(h?Ot:Dt)[m];if(s>g-u.getDate())s-=g-u.getDate()+1,u.setDate(1),m<11?u.setMonth(m+1):(u.setMonth(0),u.setFullYear(u.getFullYear()+1));else return u.setDate(u.getDate()+s),u}return u}function _f(o,s,u,h){var m=N[h+40>>2],g={tm_sec:N[h>>2],tm_min:N[h+4>>2],tm_hour:N[h+8>>2],tm_mday:N[h+12>>2],tm_mon:N[h+16>>2],tm_year:N[h+20>>2],tm_wday:N[h+24>>2],tm_yday:N[h+28>>2],tm_isdst:N[h+32>>2],tm_gmtoff:N[h+36>>2],tm_zone:m?me(m):""},w=me(u),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var F in S)w=w.replace(new RegExp(F,"g"),S[F]);var M=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Y=["January","February","March","April","May","June","July","August","September","October","November","December"];function Q(D,L,le){for(var W=typeof D=="number"?D.toString():D||"";W.length<L;)W=le[0]+W;return W}function q(D,L){return Q(D,L,"0")}function K(D,L){function le(Ve){return Ve<0?-1:Ve>0?1:0}var W;return(W=le(D.getFullYear()-L.getFullYear()))===0&&(W=le(D.getMonth()-L.getMonth()))===0&&(W=le(D.getDate()-L.getDate())),W}function ye(D){switch(D.getDay()){case 0:return new Date(D.getFullYear()-1,11,29);case 1:return D;case 2:return new Date(D.getFullYear(),0,3);case 3:return new Date(D.getFullYear(),0,2);case 4:return new Date(D.getFullYear(),0,1);case 5:return new Date(D.getFullYear()-1,11,31);case 6:return new Date(D.getFullYear()-1,11,30)}}function De(D){var L=yt(new Date(D.tm_year+1900,0,1),D.tm_yday),le=new Date(L.getFullYear(),0,4),W=new Date(L.getFullYear()+1,0,4),Ve=ye(le),We=ye(W);return K(Ve,L)<=0?K(We,L)<=0?L.getFullYear()+1:L.getFullYear():L.getFullYear()-1}var Te={"%a":function(D){return M[D.tm_wday].substring(0,3)},"%A":function(D){return M[D.tm_wday]},"%b":function(D){return Y[D.tm_mon].substring(0,3)},"%B":function(D){return Y[D.tm_mon]},"%C":function(D){var L=D.tm_year+1900;return q(L/100|0,2)},"%d":function(D){return q(D.tm_mday,2)},"%e":function(D){return Q(D.tm_mday,2," ")},"%g":function(D){return De(D).toString().substring(2)},"%G":function(D){return De(D)},"%H":function(D){return q(D.tm_hour,2)},"%I":function(D){var L=D.tm_hour;return L==0?L=12:L>12&&(L-=12),q(L,2)},"%j":function(D){return q(D.tm_mday+gr(Wt(D.tm_year+1900)?Ot:Dt,D.tm_mon-1),3)},"%m":function(D){return q(D.tm_mon+1,2)},"%M":function(D){return q(D.tm_min,2)},"%n":function(){return`
`},"%p":function(D){return D.tm_hour>=0&&D.tm_hour<12?"AM":"PM"},"%S":function(D){return q(D.tm_sec,2)},"%t":function(){return"	"},"%u":function(D){return D.tm_wday||7},"%U":function(D){var L=new Date(D.tm_year+1900,0,1),le=L.getDay()===0?L:yt(L,7-L.getDay()),W=new Date(D.tm_year+1900,D.tm_mon,D.tm_mday);if(K(le,W)<0){var Ve=gr(Wt(W.getFullYear())?Ot:Dt,W.getMonth()-1)-31,We=31-le.getDate(),Be=We+Ve+W.getDate();return q(Math.ceil(Be/7),2)}return K(le,L)===0?"01":"00"},"%V":function(D){var L=new Date(D.tm_year+1900,0,4),le=new Date(D.tm_year+1901,0,4),W=ye(L),Ve=ye(le),We=yt(new Date(D.tm_year+1900,0,1),D.tm_yday);if(K(We,W)<0)return"53";if(K(Ve,We)<=0)return"01";var Be;return W.getFullYear()<D.tm_year+1900?Be=D.tm_yday+32-W.getDate():Be=D.tm_yday+1-W.getDate(),q(Math.ceil(Be/7),2)},"%w":function(D){return D.tm_wday},"%W":function(D){var L=new Date(D.tm_year,0,1),le=L.getDay()===1?L:yt(L,L.getDay()===0?1:7-L.getDay()+1),W=new Date(D.tm_year+1900,D.tm_mon,D.tm_mday);if(K(le,W)<0){var Ve=gr(Wt(W.getFullYear())?Ot:Dt,W.getMonth()-1)-31,We=31-le.getDate(),Be=We+Ve+W.getDate();return q(Math.ceil(Be/7),2)}return K(le,L)===0?"01":"00"},"%y":function(D){return(D.tm_year+1900).toString().substring(2)},"%Y":function(D){return D.tm_year+1900},"%z":function(D){var L=D.tm_gmtoff,le=L>=0;return L=Math.abs(L)/60,L=L/60*100+L%60,(le?"+":"-")+("0000"+L).slice(-4)},"%Z":function(D){return D.tm_zone},"%%":function(){return"%"}};for(var F in Te)w.indexOf(F)>=0&&(w=w.replace(new RegExp(F,"g"),Te[F](g)));var ie=Tt(w,!1);return ie.length>s?0:(Nl(ie,o),ie.length-1)}function Of(o,s,u){for(var h=me(s),m="\\!@#$^&*()+=-[]/{}|:<>?,.",g=0,w=m.length;g<w;++g)h=h.replace(new RegExp("\\"+m[g],"g"),"\\"+m[g]);var S={"%A":"%a","%B":"%b","%c":"%a %b %d %H:%M:%S %Y","%D":"%m\\/%d\\/%y","%e":"%d","%F":"%Y-%m-%d","%h":"%b","%R":"%H\\:%M","%r":"%I\\:%M\\:%S\\s%p","%T":"%H\\:%M\\:%S","%x":"%m\\/%d\\/(?:%y|%Y)","%X":"%H\\:%M\\:%S"};for(var F in S)h=h.replace(F,S[F]);var M={"%a":"(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)","%b":"(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)","%C":"\\d\\d","%d":"0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31","%H":"\\d(?!\\d)|[0,1]\\d|20|21|22|23","%I":"\\d(?!\\d)|0\\d|10|11|12","%j":"00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d","%m":"0[1-9]|[1-9](?!\\d)|10|11|12","%M":"0\\d|\\d(?!\\d)|[1-5]\\d","%n":"\\s","%p":"AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.","%S":"0\\d|\\d(?!\\d)|[1-5]\\d|60","%U":"0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53","%W":"0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53","%w":"[0-6]","%y":"\\d\\d","%Y":"\\d\\d\\d\\d","%%":"%","%t":"\\s"},Y={JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11},Q={SUN:0,MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6},q={MON:0,TUE:1,WED:2,THU:3,FRI:4,SAT:5,SUN:6};for(var K in M)h=h.replace(K,"("+K+M[K]+")");for(var ye=[],g=h.indexOf("%");g>=0;g=h.indexOf("%"))ye.push(h[g+1]),h=h.replace(new RegExp("\\%"+h[g+1],"g"),"");var De=new RegExp("^"+h,"i").exec(me(o));function Te(){function vt(gt,bi,Ja){return typeof gt!="number"||isNaN(gt)?bi:gt>=bi?gt<=Ja?gt:Ja:bi}return{year:vt(N[u+20>>2]+1900,1970,9999),month:vt(N[u+16>>2],0,11),day:vt(N[u+12>>2],1,31),hour:vt(N[u+8>>2],0,23),min:vt(N[u+4>>2],0,59),sec:vt(N[u>>2],0,59)}}if(De){var ie=Te(),D,L=function(vt){var gt=ye.indexOf(vt);if(gt>=0)return De[gt+1]};if((D=L("S"))&&(ie.sec=parseInt(D)),(D=L("M"))&&(ie.min=parseInt(D)),D=L("H"))ie.hour=parseInt(D);else if(D=L("I")){var le=parseInt(D);(D=L("p"))&&(le+=D.toUpperCase()[0]==="P"?12:0),ie.hour=le}if(D=L("Y"))ie.year=parseInt(D);else if(D=L("y")){var W=parseInt(D);(D=L("C"))?W+=parseInt(D)*100:W+=W<69?2e3:1900,ie.year=W}if((D=L("m"))?ie.month=parseInt(D)-1:(D=L("b"))&&(ie.month=Y[D.substring(0,3).toUpperCase()]||0),D=L("d"))ie.day=parseInt(D);else if(D=L("j"))for(var Ve=parseInt(D),We=Wt(ie.year),Be=0;Be<12;++Be){var Ya=gr(We?Ot:Dt,Be-1);Ve<=Ya+(We?Ot:Dt)[Be]&&(ie.day=Ve-Ya)}else if(D=L("a")){var Ha=D.substring(0,3).toUpperCase();if(D=L("U")){var Er=Q[Ha],wr=parseInt(D),tt=new Date(ie.year,0,1),rt;tt.getDay()===0?rt=yt(tt,Er+7*(wr-1)):rt=yt(tt,7-tt.getDay()+Er+7*(wr-1)),ie.day=rt.getDate(),ie.month=rt.getMonth()}else if(D=L("W")){var Er=q[Ha],wr=parseInt(D),tt=new Date(ie.year,0,1),rt;tt.getDay()===1?rt=yt(tt,Er+7*(wr-1)):rt=yt(tt,7-tt.getDay()+1+Er+7*(wr-1)),ie.day=rt.getDate(),ie.month=rt.getMonth()}}var Ke=new Date(ie.year,ie.month,ie.day,ie.hour,ie.min,ie.sec,0);return N[u>>2]=Ke.getSeconds(),N[u+4>>2]=Ke.getMinutes(),N[u+8>>2]=Ke.getHours(),N[u+12>>2]=Ke.getDate(),N[u+16>>2]=Ke.getMonth(),N[u+20>>2]=Ke.getFullYear()-1900,N[u+24>>2]=Ke.getDay(),N[u+28>>2]=gr(Wt(Ke.getFullYear())?Ot:Dt,Ke.getMonth()-1)+Ke.getDate()-1,N[u+32>>2]=0,o+Tt(De[0]).length-1}return 0}function Df(o){var s=Date.now()/1e3|0;return o&&(N[o>>2]=s),s}l.staticInit();function Tt(o,s,u){var h=Gt(o)+1,m=new Array(h),g=Ee(o,m,0,m.length);return s&&(m.length=g),m}var Va={a:Wl,y:Yl,i:Hl,B:Jl,u:Xl,h:Zl,e:ef,A:tf,v:rf,d:nf,j:of,q:af,r:cf,s:uf,t:lf,b:ff,c:hf,g:df,w:pf,o:mf,z:yf,D:vf,m:bf,l:Ef,memory:X,n:wf,C:If,x:kf,f:_f,p:Of,table:ce,k:Df},Ba=Ul();i.asm=Ba;var Tf=i.___wasm_call_ctors=function(){return i.asm.E.apply(null,arguments)};i._main=function(){return i.asm.F.apply(null,arguments)},i.___errno_location=function(){return i.asm.G.apply(null,arguments)};var Ua=i._malloc=function(){return i.asm.H.apply(null,arguments)},br=i.__get_tzname=function(){return i.asm.I.apply(null,arguments)},Rf=i.__get_daylight=function(){return i.asm.J.apply(null,arguments)},Cf=i.__get_timezone=function(){return i.asm.K.apply(null,arguments)},vi=i.stackAlloc=function(){return i.asm.L.apply(null,arguments)};i.dynCall_vi=function(){return i.asm.M.apply(null,arguments)},i.asm=Ba,i.callMain=za;var en;function Qa(o){this.name="ExitStatus",this.message="Program terminated with exit("+o+")",this.status=o}mr=function o(){en||gi(),en||(mr=o)};function za(o){var s=i._main;o=o||[];var u=o.length+1,h=vi((u+1)*4);N[h>>2]=Da(R);for(var m=1;m<u;m++)N[(h>>2)+m]=Da(o[m-1]);N[(h>>2)+u]=0;try{var g=s(u,h)}catch(S){if(S instanceof Qa||S=="SimulateInfiniteLoop")return;var w=S;S&&typeof S=="object"&&S.stack&&(w=[S,S.stack]),z("exception thrown: "+w),k(1,S)}finally{}}function gi(o){if(o=o||O,kt>0||($l(),kt>0))return;function s(){en||(en=!0,!ue&&(Ml(),Ll(),i.onRuntimeInitialized&&i.onRuntimeInitialized(),Ga&&za(o),jl()))}i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),s()},1)):s()}if(i.run=gi,i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();var Ga=!0;i.noInitialRun&&(Ga=!1),gi();function Wa(o,s,u){if(!a)return"{}";if(f=o,d=[],p=[],y=[],u=u||[],i.callMain(u.concat(s)),l.streams[1]=l.open("/dev/stdout",577,0),l.streams[2]=l.open("/dev/stderr",577,0),p.length)return b(p).trim();if(y.length){var h=b(y),m=h;if(m.indexOf(":")>-1){var g=m.split(":");m=g[g.length-1].trim()}var w=new Error(m);throw w.stack=h,w}return""}function Nf(o,s){if(!a)return{};var u=JSON.stringify(o),h=Wa(u,s,["-c"]).trim();return h.indexOf(`
`)!==-1?h.split(`
`).filter(function(m){return m}).reduce(function(m,g){return m.concat(JSON.parse(g))},[]):JSON.parse(h)}return n.json=Nf,n.raw=Wa,n.onInitialized={addListener:function(o){a&&o(),c.push(o)}},n.promised={},n.promised.json=function(){var o=arguments;return new Promise(function(s,u){n.onInitialized.addListener(function(){try{s(n.json.apply(n,o))}catch(h){u(h)}})})},n.promised.raw=function(){var o=arguments;return new Promise(function(s,u){n.onInitialized.addListener(function(){try{s(n.raw.apply(n,o))}catch(h){u(h)}})})},n}(typeof r=="object"?r:{});t.exports=r})(wi);var ts=wi.exports,Si=Ka(ts);let Sr;const rs=new Uint8Array(16);function ns(){if(!Sr&&(Sr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Sr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Sr(rs)}const Re=[];for(let t=0;t<256;++t)Re.push((t+256).toString(16).slice(1));function is(t,e=0){return(Re[t[e+0]]+Re[t[e+1]]+Re[t[e+2]]+Re[t[e+3]]+"-"+Re[t[e+4]]+Re[t[e+5]]+"-"+Re[t[e+6]]+Re[t[e+7]]+"-"+Re[t[e+8]]+Re[t[e+9]]+"-"+Re[t[e+10]]+Re[t[e+11]]+Re[t[e+12]]+Re[t[e+13]]+Re[t[e+14]]+Re[t[e+15]]).toLowerCase()}var Ii={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function os(t,e,r){if(Ii.randomUUID&&!e&&!t)return Ii.randomUUID();t=t||{};const n=t.random||(t.rng||ns)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,is(n)}var rn=function(t,e){return rn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},rn(t,e)};function Ue(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");rn(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var _=function(){return _=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_.apply(this,arguments)};function nt(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function it(t,e,r,n){function i(a){return a instanceof r?a:new r(function(c){c(a)})}return new(r||(r=Promise))(function(a,c){function f(y){try{p(n.next(y))}catch(v){c(v)}}function d(y){try{p(n.throw(y))}catch(v){c(v)}}function p(y){y.done?a(y.value):i(y.value).then(f,d)}p((n=n.apply(t,e||[])).next())})}function ot(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,c;return c={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function f(p){return function(y){return d([p,y])}}function d(p){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,p[0]&&(r=0)),r;)try{if(n=1,i&&(a=p[0]&2?i.return:p[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,p[1])).done)return a;switch(i=0,a&&(p=[p[0]&2,a.value]),p[0]){case 0:case 1:a=p;break;case 4:return r.label++,{value:p[1],done:!1};case 5:r.label++,i=p[1],p=[0];continue;case 7:p=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(p[0]===6||p[0]===2)){r=0;continue}if(p[0]===3&&(!a||p[1]>a[0]&&p[1]<a[3])){r.label=p[1];break}if(p[0]===6&&r.label<a[1]){r.label=a[1],a=p;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(p);break}a[2]&&r.ops.pop(),r.trys.pop();continue}p=e.call(t,r)}catch(y){p=[6,y],i=0}finally{n=a=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}}function at(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;var nn="Invariant Violation",ki=Object.setPrototypeOf,as=ki===void 0?function(t,e){return t.__proto__=e,t}:ki,_i=function(t){Ue(e,t);function e(r){r===void 0&&(r=nn);var n=t.call(this,typeof r=="number"?nn+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=nn,as(n,e.prototype),n}return e}(Error);function bt(t,e){if(!t)throw new _i(e)}var Oi=["debug","log","warn","error","silent"],ss=Oi.indexOf("log");function Ir(t){return function(){if(Oi.indexOf(t)>=ss){var e=console[t]||console.log;return e.apply(console,arguments)}}}(function(t){t.debug=Ir("debug"),t.log=Ir("log"),t.warn=Ir("warn"),t.error=Ir("error")})(bt||(bt={}));var on="3.8.3";function Qe(t){try{return t()}catch{}}var Di=Qe(function(){return globalThis})||Qe(function(){return window})||Qe(function(){return self})||Qe(function(){return global})||Qe(function(){return Qe.constructor("return this")()}),Ti=new Map;function an(t){var e=Ti.get(t)||1;return Ti.set(t,e+1),"".concat(t,":").concat(e,":").concat(Math.random().toString(36).slice(2))}function Ri(t,e){e===void 0&&(e=0);var r=an("stringifyForDisplay");return JSON.stringify(t,function(n,i){return i===void 0?r:i},e).split(JSON.stringify(r)).join("<undefined>")}function kr(t){return function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];t.apply(void 0,at([typeof e=="number"?sn(e):e],r,!1))}}var J=Object.assign(function(e,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e||bt(e,sn(r,n))},{debug:kr(bt.debug),log:kr(bt.log),warn:kr(bt.warn),error:kr(bt.error)});function Pe(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new _i(sn(t,e))}var Ci=Symbol.for("ApolloErrorMessageHandler_"+on);function sn(t,e){if(e===void 0&&(e=[]),!!t){var r=e.map(function(n){return typeof n=="string"?n:Ri(n,2).slice(0,1e3)});return Di[Ci]&&Di[Ci](t,r)||"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:on,message:t,args:r})))}}function _r(t,e){if(!!!t)throw new Error(e)}function cs(t){return typeof t=="object"&&t!==null}function us(t,e){if(!!!t)throw new Error("Unexpected invariant triggered.")}const ls=/\r\n|[\n\r]/g;function cn(t,e){let r=0,n=1;for(const i of t.body.matchAll(ls)){if(typeof i.index=="number"||us(!1),i.index>=e)break;r=i.index+i[0].length,n+=1}return{line:n,column:e+1-r}}function fs(t){return Ni(t.source,cn(t.source,t.start))}function Ni(t,e){const r=t.locationOffset.column-1,n="".padStart(r)+t.body,i=e.line-1,a=t.locationOffset.line-1,c=e.line+a,f=e.line===1?r:0,d=e.column+f,p=`${t.name}:${c}:${d}
`,y=n.split(/\r\n|[\n\r]/g),v=y[i];if(v.length>120){const b=Math.floor(d/80),E=d%80,I=[];for(let O=0;O<v.length;O+=80)I.push(v.slice(O,O+80));return p+xi([[`${c} |`,I[0]],...I.slice(1,b+1).map(O=>["|",O]),["|","^".padStart(E)],["|",I[b+1]]])}return p+xi([[`${c-1} |`,y[i-1]],[`${c} |`,v],["|","^".padStart(d)],[`${c+1} |`,y[i+1]]])}function xi(t){const e=t.filter(([n,i])=>i!==void 0),r=Math.max(...e.map(([n])=>n.length));return e.map(([n,i])=>n.padStart(r)+(i?" "+i:"")).join(`
`)}function hs(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class un extends Error{constructor(e,...r){var n,i,a;const{nodes:c,source:f,positions:d,path:p,originalError:y,extensions:v}=hs(r);super(e),this.name="GraphQLError",this.path=p??void 0,this.originalError=y??void 0,this.nodes=Fi(Array.isArray(c)?c:c?[c]:void 0);const b=Fi((n=this.nodes)===null||n===void 0?void 0:n.map(I=>I.loc).filter(I=>I!=null));this.source=f??(b==null||(i=b[0])===null||i===void 0?void 0:i.source),this.positions=d??(b==null?void 0:b.map(I=>I.start)),this.locations=d&&f?d.map(I=>cn(f,I)):b==null?void 0:b.map(I=>cn(I.source,I.start));const E=cs(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(a=v??E)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,un):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(e+=`

`+fs(r.loc));else if(this.source&&this.locations)for(const r of this.locations)e+=`

`+Ni(this.source,r);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function Fi(t){return t===void 0||t.length===0?void 0:t}function ke(t,e,r){return new un(`Syntax Error: ${r}`,{source:t,positions:[e]})}class ds{constructor(e,r,n){this.start=e.start,this.end=r.end,this.startToken=e,this.endToken=r,this.source=n}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ai{constructor(e,r,n,i,a,c){this.kind=e,this.start=r,this.end=n,this.line=i,this.column=a,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Pi={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},ps=new Set(Object.keys(Pi));function $i(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&ps.has(e)}var Rt;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(Rt||(Rt={}));var ln;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(ln||(ln={}));var V;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(V||(V={}));function fn(t){return t===9||t===32}function Yt(t){return t>=48&&t<=57}function Mi(t){return t>=97&&t<=122||t>=65&&t<=90}function Li(t){return Mi(t)||t===95}function ms(t){return Mi(t)||Yt(t)||t===95}function ys(t){var e;let r=Number.MAX_SAFE_INTEGER,n=null,i=-1;for(let c=0;c<t.length;++c){var a;const f=t[c],d=vs(f);d!==f.length&&(n=(a=n)!==null&&a!==void 0?a:c,i=c,c!==0&&d<r&&(r=d))}return t.map((c,f)=>f===0?c:c.slice(r)).slice((e=n)!==null&&e!==void 0?e:0,i+1)}function vs(t){let e=0;for(;e<t.length&&fn(t.charCodeAt(e));)++e;return e}function gs(t,e){const r=t.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,a=n.length>1&&n.slice(1).every(E=>E.length===0||fn(E.charCodeAt(0))),c=r.endsWith('\\"""'),f=t.endsWith('"')&&!c,d=t.endsWith("\\"),p=f||d,y=!i||t.length>70||p||a||c;let v="";const b=i&&fn(t.charCodeAt(0));return(y&&!b||a)&&(v+=`
`),v+=r,(y||p)&&(v+=`
`),'"""'+v+'"""'}var C;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(C||(C={}));class bs{constructor(e){const r=new Ai(C.SOF,0,0,0,0);this.source=e,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==C.EOF)do if(e.next)e=e.next;else{const r=ws(this,e.end);e.next=r,r.prev=e,e=r}while(e.kind===C.COMMENT);return e}}function Es(t){return t===C.BANG||t===C.DOLLAR||t===C.AMP||t===C.PAREN_L||t===C.PAREN_R||t===C.SPREAD||t===C.COLON||t===C.EQUALS||t===C.AT||t===C.BRACKET_L||t===C.BRACKET_R||t===C.BRACE_L||t===C.PIPE||t===C.BRACE_R}function Ct(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Or(t,e){return ji(t.charCodeAt(e))&&qi(t.charCodeAt(e+1))}function ji(t){return t>=55296&&t<=56319}function qi(t){return t>=56320&&t<=57343}function Et(t,e){const r=t.source.body.codePointAt(e);if(r===void 0)return C.EOF;if(r>=32&&r<=126){const n=String.fromCodePoint(r);return n==='"'?`'"'`:`"${n}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function Ie(t,e,r,n,i){const a=t.line,c=1+r-t.lineStart;return new Ai(e,r,n,a,c,i)}function ws(t,e){const r=t.source.body,n=r.length;let i=e;for(;i<n;){const a=r.charCodeAt(i);switch(a){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++t.line,t.lineStart=i;continue;case 13:r.charCodeAt(i+1)===10?i+=2:++i,++t.line,t.lineStart=i;continue;case 35:return Ss(t,i);case 33:return Ie(t,C.BANG,i,i+1);case 36:return Ie(t,C.DOLLAR,i,i+1);case 38:return Ie(t,C.AMP,i,i+1);case 40:return Ie(t,C.PAREN_L,i,i+1);case 41:return Ie(t,C.PAREN_R,i,i+1);case 46:if(r.charCodeAt(i+1)===46&&r.charCodeAt(i+2)===46)return Ie(t,C.SPREAD,i,i+3);break;case 58:return Ie(t,C.COLON,i,i+1);case 61:return Ie(t,C.EQUALS,i,i+1);case 64:return Ie(t,C.AT,i,i+1);case 91:return Ie(t,C.BRACKET_L,i,i+1);case 93:return Ie(t,C.BRACKET_R,i,i+1);case 123:return Ie(t,C.BRACE_L,i,i+1);case 124:return Ie(t,C.PIPE,i,i+1);case 125:return Ie(t,C.BRACE_R,i,i+1);case 34:return r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34?Ts(t,i):ks(t,i)}if(Yt(a)||a===45)return Is(t,i,a);if(Li(a))return Rs(t,i);throw ke(t.source,i,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Ct(a)||Or(r,i)?`Unexpected character: ${Et(t,i)}.`:`Invalid character: ${Et(t,i)}.`)}return Ie(t,C.EOF,n,n)}function Ss(t,e){const r=t.source.body,n=r.length;let i=e+1;for(;i<n;){const a=r.charCodeAt(i);if(a===10||a===13)break;if(Ct(a))++i;else if(Or(r,i))i+=2;else break}return Ie(t,C.COMMENT,e,i,r.slice(e+1,i))}function Is(t,e,r){const n=t.source.body;let i=e,a=r,c=!1;if(a===45&&(a=n.charCodeAt(++i)),a===48){if(a=n.charCodeAt(++i),Yt(a))throw ke(t.source,i,`Invalid number, unexpected digit after 0: ${Et(t,i)}.`)}else i=hn(t,i,a),a=n.charCodeAt(i);if(a===46&&(c=!0,a=n.charCodeAt(++i),i=hn(t,i,a),a=n.charCodeAt(i)),(a===69||a===101)&&(c=!0,a=n.charCodeAt(++i),(a===43||a===45)&&(a=n.charCodeAt(++i)),i=hn(t,i,a),a=n.charCodeAt(i)),a===46||Li(a))throw ke(t.source,i,`Invalid number, expected digit but got: ${Et(t,i)}.`);return Ie(t,c?C.FLOAT:C.INT,e,i,n.slice(e,i))}function hn(t,e,r){if(!Yt(r))throw ke(t.source,e,`Invalid number, expected digit but got: ${Et(t,e)}.`);const n=t.source.body;let i=e+1;for(;Yt(n.charCodeAt(i));)++i;return i}function ks(t,e){const r=t.source.body,n=r.length;let i=e+1,a=i,c="";for(;i<n;){const f=r.charCodeAt(i);if(f===34)return c+=r.slice(a,i),Ie(t,C.STRING,e,i+1,c);if(f===92){c+=r.slice(a,i);const d=r.charCodeAt(i+1)===117?r.charCodeAt(i+2)===123?_s(t,i):Os(t,i):Ds(t,i);c+=d.value,i+=d.size,a=i;continue}if(f===10||f===13)break;if(Ct(f))++i;else if(Or(r,i))i+=2;else throw ke(t.source,i,`Invalid character within String: ${Et(t,i)}.`)}throw ke(t.source,i,"Unterminated string.")}function _s(t,e){const r=t.source.body;let n=0,i=3;for(;i<12;){const a=r.charCodeAt(e+i++);if(a===125){if(i<5||!Ct(n))break;return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|Ht(a),n<0)break}throw ke(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+i)}".`)}function Os(t,e){const r=t.source.body,n=Vi(r,e+2);if(Ct(n))return{value:String.fromCodePoint(n),size:6};if(ji(n)&&r.charCodeAt(e+6)===92&&r.charCodeAt(e+7)===117){const i=Vi(r,e+8);if(qi(i))return{value:String.fromCodePoint(n,i),size:12}}throw ke(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+6)}".`)}function Vi(t,e){return Ht(t.charCodeAt(e))<<12|Ht(t.charCodeAt(e+1))<<8|Ht(t.charCodeAt(e+2))<<4|Ht(t.charCodeAt(e+3))}function Ht(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Ds(t,e){const r=t.source.body;switch(r.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ke(t.source,e,`Invalid character escape sequence: "${r.slice(e,e+2)}".`)}function Ts(t,e){const r=t.source.body,n=r.length;let i=t.lineStart,a=e+3,c=a,f="";const d=[];for(;a<n;){const p=r.charCodeAt(a);if(p===34&&r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34){f+=r.slice(c,a),d.push(f);const y=Ie(t,C.BLOCK_STRING,e,a+3,ys(d).join(`
`));return t.line+=d.length-1,t.lineStart=i,y}if(p===92&&r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34&&r.charCodeAt(a+3)===34){f+=r.slice(c,a),c=a+1,a+=4;continue}if(p===10||p===13){f+=r.slice(c,a),d.push(f),p===13&&r.charCodeAt(a+1)===10?a+=2:++a,f="",c=a,i=a;continue}if(Ct(p))++a;else if(Or(r,a))a+=2;else throw ke(t.source,a,`Invalid character within String: ${Et(t,a)}.`)}throw ke(t.source,a,"Unterminated string.")}function Rs(t,e){const r=t.source.body,n=r.length;let i=e+1;for(;i<n;){const a=r.charCodeAt(i);if(ms(a))++i;else break}return Ie(t,C.NAME,e,i,r.slice(e,i))}const Cs=10,Bi=2;function dn(t){return Dr(t,[])}function Dr(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return Ns(t,e);default:return String(t)}}function Ns(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const r=[...e,t];if(xs(t)){const n=t.toJSON();if(n!==t)return typeof n=="string"?n:Dr(n,r)}else if(Array.isArray(t))return As(t,r);return Fs(t,r)}function xs(t){return typeof t.toJSON=="function"}function Fs(t,e){const r=Object.entries(t);return r.length===0?"{}":e.length>Bi?"["+Ps(t)+"]":"{ "+r.map(([i,a])=>i+": "+Dr(a,e)).join(", ")+" }"}function As(t,e){if(t.length===0)return"[]";if(e.length>Bi)return"[Array]";const r=Math.min(Cs,t.length),n=t.length-r,i=[];for(let a=0;a<r;++a)i.push(Dr(t[a],e));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function Ps(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const r=t.constructor.name;if(typeof r=="string"&&r!=="")return r}return e}const $s=globalThis.process?function(e,r){return e instanceof r}:function(e,r){if(e instanceof r)return!0;if(typeof e=="object"&&e!==null){var n;const i=r.prototype[Symbol.toStringTag],a=Symbol.toStringTag in e?e[Symbol.toStringTag]:(n=e.constructor)===null||n===void 0?void 0:n.name;if(i===a){const c=dn(e);throw new Error(`Cannot use ${i} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Ui{constructor(e,r="GraphQL request",n={line:1,column:1}){typeof e=="string"||_r(!1,`Body must be a string. Received: ${dn(e)}.`),this.body=e,this.name=r,this.locationOffset=n,this.locationOffset.line>0||_r(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||_r(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Ms(t){return $s(t,Ui)}function Ls(t,e){return new js(t,e).parseDocument()}class js{constructor(e,r={}){const n=Ms(e)?e:new Ui(e);this._lexer=new bs(n),this._options=r,this._tokenCounter=0}parseName(){const e=this.expectToken(C.NAME);return this.node(e,{kind:V.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:V.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),r=e?this._lexer.lookahead():this._lexer.token;if(r.kind===C.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw ke(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(e,{kind:V.OPERATION_DEFINITION,operation:Rt.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let n;return this.peek(C.NAME)&&(n=this.parseName()),this.node(e,{kind:V.OPERATION_DEFINITION,operation:r,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(C.NAME);switch(e.value){case"query":return Rt.QUERY;case"mutation":return Rt.MUTATION;case"subscription":return Rt.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:V.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(e,{kind:V.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:V.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,r=this.parseName();let n,i;return this.expectOptionalToken(C.COLON)?(n=r,i=this.parseName()):i=r,this.node(e,{kind:V.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const r=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,r,C.PAREN_R)}parseArgument(e=!1){const r=this._lexer.token,n=this.parseName();return this.expectToken(C.COLON),this.node(r,{kind:V.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(C.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(C.NAME)?this.node(e,{kind:V.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:V.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:V.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:V.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const r=this._lexer.token;switch(r.kind){case C.BRACKET_L:return this.parseList(e);case C.BRACE_L:return this.parseObject(e);case C.INT:return this.advanceLexer(),this.node(r,{kind:V.INT,value:r.value});case C.FLOAT:return this.advanceLexer(),this.node(r,{kind:V.FLOAT,value:r.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:V.BOOLEAN,value:!0});case"false":return this.node(r,{kind:V.BOOLEAN,value:!1});case"null":return this.node(r,{kind:V.NULL});default:return this.node(r,{kind:V.ENUM,value:r.value})}case C.DOLLAR:if(e)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const n=this._lexer.token.value;throw ke(this._lexer.source,r.start,`Unexpected variable "$${n}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:V.STRING,value:e.value,block:e.kind===C.BLOCK_STRING})}parseList(e){const r=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:V.LIST,values:this.any(C.BRACKET_L,r,C.BRACKET_R)})}parseObject(e){const r=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:V.OBJECT,fields:this.any(C.BRACE_L,r,C.BRACE_R)})}parseObjectField(e){const r=this._lexer.token,n=this.parseName();return this.expectToken(C.COLON),this.node(r,{kind:V.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const r=[];for(;this.peek(C.AT);)r.push(this.parseDirective(e));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const r=this._lexer.token;return this.expectToken(C.AT),this.node(r,{kind:V.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let r;if(this.expectOptionalToken(C.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(C.BRACKET_R),r=this.node(e,{kind:V.LIST_TYPE,type:n})}else r=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(e,{kind:V.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:V.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(e,{kind:V.SCHEMA_DEFINITION,description:r,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,r=this.parseOperationType();this.expectToken(C.COLON);const n=this.parseNamedType();return this.node(e,{kind:V.OPERATION_TYPE_DEFINITION,operation:r,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:V.SCALAR_TYPE_DEFINITION,description:r,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:V.OBJECT_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:a,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(C.COLON);const a=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(e,{kind:V.FIELD_DEFINITION,description:r,name:n,arguments:i,type:a,directives:c})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseName();this.expectToken(C.COLON);const i=this.parseTypeReference();let a;this.expectOptionalToken(C.EQUALS)&&(a=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(e,{kind:V.INPUT_VALUE_DEFINITION,description:r,name:n,type:i,defaultValue:a,directives:c})}parseInterfaceTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:V.INTERFACE_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:a,fields:c})}parseUnionTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(e,{kind:V.UNION_TYPE_DEFINITION,description:r,name:n,directives:i,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(e,{kind:V.ENUM_TYPE_DEFINITION,description:r,name:n,directives:i,values:a})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:V.ENUM_VALUE_DEFINITION,description:r,name:n,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ke(this._lexer.source,this._lexer.token.start,`${Tr(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(e,{kind:V.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:n,directives:i,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===C.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),n=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(r.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:V.SCHEMA_EXTENSION,directives:r,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),n=this.parseConstDirectives();if(n.length===0)throw this.unexpected();return this.node(e,{kind:V.SCALAR_TYPE_EXTENSION,name:r,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:V.OBJECT_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:a})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:V.INTERFACE_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:a})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:V.UNION_TYPE_EXTENSION,name:r,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:V.ENUM_TYPE_EXTENSION,name:r,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:V.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const n=this.parseName(),i=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(e,{kind:V.DIRECTIVE_DEFINITION,description:r,name:n,arguments:i,repeatable:a,locations:c})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(ln,r.value))return r;throw this.unexpected(e)}node(e,r){return this._options.noLocation!==!0&&(r.loc=new ds(e,this._lexer.lastToken,this._lexer.source)),r}peek(e){return this._lexer.token.kind===e}expectToken(e){const r=this._lexer.token;if(r.kind===e)return this.advanceLexer(),r;throw ke(this._lexer.source,r.start,`Expected ${Qi(e)}, found ${Tr(r)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const r=this._lexer.token;if(r.kind===C.NAME&&r.value===e)this.advanceLexer();else throw ke(this._lexer.source,r.start,`Expected "${e}", found ${Tr(r)}.`)}expectOptionalKeyword(e){const r=this._lexer.token;return r.kind===C.NAME&&r.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const r=e??this._lexer.token;return ke(this._lexer.source,r.start,`Unexpected ${Tr(r)}.`)}any(e,r,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(r.call(this));return i}optionalMany(e,r,n){if(this.expectOptionalToken(e)){const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}return[]}many(e,r,n){this.expectToken(e);const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}delimitedMany(e,r){this.expectOptionalToken(e);const n=[];do n.push(r.call(this));while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,r=this._lexer.advance();if(e!==void 0&&r.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw ke(this._lexer.source,r.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function Tr(t){const e=t.value;return Qi(t.kind)+(e!=null?` "${e}"`:"")}function Qi(t){return Es(t)?`"${t}"`:t}function qs(t){return`"${t.replace(Vs,Bs)}"`}const Vs=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Bs(t){return Us[t.charCodeAt(0)]}const Us=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],pn=Object.freeze({});function Xe(t,e,r=Pi){const n=new Map;for(const k of Object.values(V))n.set(k,Qs(e,k));let i,a=Array.isArray(t),c=[t],f=-1,d=[],p=t,y,v;const b=[],E=[];do{f++;const k=f===c.length,A=k&&d.length!==0;if(k){if(y=E.length===0?void 0:b[b.length-1],p=v,v=E.pop(),A)if(a){p=p.slice();let P=0;for(const[U,$]of d){const j=U-P;$===null?(p.splice(j,1),P++):p[j]=$}}else{p=Object.defineProperties({},Object.getOwnPropertyDescriptors(p));for(const[P,U]of d)p[P]=U}f=i.index,c=i.keys,d=i.edits,a=i.inArray,i=i.prev}else if(v){if(y=a?f:c[f],p=v[y],p==null)continue;b.push(y)}let T;if(!Array.isArray(p)){var I,O;$i(p)||_r(!1,`Invalid AST Node: ${dn(p)}.`);const P=k?(I=n.get(p.kind))===null||I===void 0?void 0:I.leave:(O=n.get(p.kind))===null||O===void 0?void 0:O.enter;if(T=P==null?void 0:P.call(e,p,y,v,b,E),T===pn)break;if(T===!1){if(!k){b.pop();continue}}else if(T!==void 0&&(d.push([y,T]),!k))if($i(T))p=T;else{b.pop();continue}}if(T===void 0&&A&&d.push([y,p]),k)b.pop();else{var R;i={inArray:a,index:f,keys:c,edits:d,prev:i},a=Array.isArray(p),c=a?p:(R=r[p.kind])!==null&&R!==void 0?R:[],f=-1,d=[],v&&E.push(v),v=p}}while(i!==void 0);return d.length!==0?d[d.length-1][1]:t}function Qs(t,e){const r=t[e];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:t.enter,leave:t.leave}}function zs(t){return Xe(t,Ws)}const Gs=80,Ws={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>B(t.definitions,`

`)},OperationDefinition:{leave(t){const e=te("(",B(t.variableDefinitions,", "),")"),r=B([t.operation,B([t.name,e]),B(t.directives," ")]," ");return(r==="query"?"":r+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:r,directives:n})=>t+": "+e+te(" = ",r)+te(" ",B(n," "))},SelectionSet:{leave:({selections:t})=>ze(t)},Field:{leave({alias:t,name:e,arguments:r,directives:n,selectionSet:i}){const a=te("",t,": ")+e;let c=a+te("(",B(r,", "),")");return c.length>Gs&&(c=a+te(`(
`,Rr(B(r,`
`)),`
)`)),B([c,B(n," "),i]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+te(" ",B(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:r})=>B(["...",te("on ",t),B(e," "),r]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:r,directives:n,selectionSet:i})=>`fragment ${t}${te("(",B(r,", "),")")} on ${e} ${te("",B(n," ")," ")}`+i},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?gs(t):qs(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+B(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+B(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+te("(",B(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:r})=>te("",t,`
`)+B(["schema",B(e," "),ze(r)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:r})=>te("",t,`
`)+B(["scalar",e,B(r," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:r,directives:n,fields:i})=>te("",t,`
`)+B(["type",e,te("implements ",B(r," & ")),B(n," "),ze(i)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:r,type:n,directives:i})=>te("",t,`
`)+e+(zi(r)?te(`(
`,Rr(B(r,`
`)),`
)`):te("(",B(r,", "),")"))+": "+n+te(" ",B(i," "))},InputValueDefinition:{leave:({description:t,name:e,type:r,defaultValue:n,directives:i})=>te("",t,`
`)+B([e+": "+r,te("= ",n),B(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:r,directives:n,fields:i})=>te("",t,`
`)+B(["interface",e,te("implements ",B(r," & ")),B(n," "),ze(i)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:r,types:n})=>te("",t,`
`)+B(["union",e,B(r," "),te("= ",B(n," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:r,values:n})=>te("",t,`
`)+B(["enum",e,B(r," "),ze(n)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:r})=>te("",t,`
`)+B([e,B(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:r,fields:n})=>te("",t,`
`)+B(["input",e,B(r," "),ze(n)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:r,repeatable:n,locations:i})=>te("",t,`
`)+"directive @"+e+(zi(r)?te(`(
`,Rr(B(r,`
`)),`
)`):te("(",B(r,", "),")"))+(n?" repeatable":"")+" on "+B(i," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>B(["extend schema",B(t," "),ze(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>B(["extend scalar",t,B(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:r,fields:n})=>B(["extend type",t,te("implements ",B(e," & ")),B(r," "),ze(n)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:r,fields:n})=>B(["extend interface",t,te("implements ",B(e," & ")),B(r," "),ze(n)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:r})=>B(["extend union",t,B(e," "),te("= ",B(r," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:r})=>B(["extend enum",t,B(e," "),ze(r)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:r})=>B(["extend input",t,B(e," "),ze(r)]," ")}};function B(t,e=""){var r;return(r=t==null?void 0:t.filter(n=>n).join(e))!==null&&r!==void 0?r:""}function ze(t){return te(`{
`,Rr(B(t,`
`)),`
}`)}function te(t,e,r=""){return e!=null&&e!==""?t+e+r:""}function Rr(t){return te("  ",t.replace(/\n/g,`
  `))}function zi(t){var e;return(e=t==null?void 0:t.some(r=>r.includes(`
`)))!==null&&e!==void 0?e:!1}function Gi(t){return t.kind===V.FIELD||t.kind===V.FRAGMENT_SPREAD||t.kind===V.INLINE_FRAGMENT}function Jt(t,e){var r=t.directives;return!r||!r.length?!0:Js(r).every(function(n){var i=n.directive,a=n.ifArgument,c=!1;return a.value.kind==="Variable"?(c=e&&e[a.value.name.value],J(c!==void 0,64,i.name.value)):c=a.value.value,i.name.value==="skip"?!c:c})}function Kt(t,e,r){var n=new Set(t),i=n.size;return Xe(e,{Directive:function(a){if(n.delete(a.name.value)&&(!r||!n.size))return pn}}),r?!n.size:n.size<i}function Ys(t){return t&&Kt(["client","export"],t,!0)}function Hs(t){var e=t.name.value;return e==="skip"||e==="include"}function Js(t){var e=[];return t&&t.length&&t.forEach(function(r){if(Hs(r)){var n=r.arguments,i=r.name.value;J(n&&n.length===1,65,i);var a=n[0];J(a.name&&a.name.value==="if",66,i);var c=a.value;J(c&&(c.kind==="Variable"||c.kind==="BooleanValue"),67,i),e.push({directive:r,ifArgument:a})}}),e}const Ks=()=>Object.create(null),{forEach:Xs,slice:Zs}=Array.prototype,{hasOwnProperty:ec}=Object.prototype;class st{constructor(e=!0,r=Ks){this.weakness=e,this.makeData=r}lookup(...e){return this.lookupArray(e)}lookupArray(e){let r=this;return Xs.call(e,n=>r=r.getChildTrie(n)),ec.call(r,"data")?r.data:r.data=this.makeData(Zs.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let r=this;for(let n=0,i=e.length;r&&n<i;++n){const a=this.weakness&&Wi(e[n])?r.weak:r.strong;r=a&&a.get(e[n])}return r&&r.data}getChildTrie(e){const r=this.weakness&&Wi(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map);let n=r.get(e);return n||r.set(e,n=new st(this.weakness,this.makeData)),n}}function Wi(t){switch(typeof t){case"object":if(t===null)break;case"function":return!0}return!1}var Ze=typeof WeakMap=="function"&&Qe(function(){return navigator.product})!=="ReactNative",Yi=typeof WeakSet=="function",Hi=typeof Symbol=="function"&&typeof Symbol.for=="function",Cr=Hi&&Symbol.asyncIterator;Qe(function(){return window.document.createElement}),Qe(function(){return navigator.userAgent.indexOf("jsdom")>=0});function de(t){return t!==null&&typeof t=="object"}function tc(t,e){var r=e,n=[];t.definitions.forEach(function(a){if(a.kind==="OperationDefinition")throw Pe(68,a.operation,a.name?" named '".concat(a.name.value,"'"):"");a.kind==="FragmentDefinition"&&n.push(a)}),typeof r>"u"&&(J(n.length===1,69,n.length),r=n[0].name.value);var i=_(_({},t),{definitions:at([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],t.definitions,!0)});return i}function Nr(t){t===void 0&&(t=[]);var e={};return t.forEach(function(r){e[r.name.value]=r}),e}function xr(t,e){switch(t.kind){case"InlineFragment":return t;case"FragmentSpread":{var r=t.name.value;if(typeof e=="function")return e(r);var n=e&&e[r];return J(n,70,r),n||null}default:return null}}function Nt(t){return{__ref:String(t)}}function fe(t){return!!(t&&typeof t=="object"&&typeof t.__ref=="string")}function rc(t){return de(t)&&t.kind==="Document"&&Array.isArray(t.definitions)}function nc(t){return t.kind==="StringValue"}function ic(t){return t.kind==="BooleanValue"}function oc(t){return t.kind==="IntValue"}function ac(t){return t.kind==="FloatValue"}function sc(t){return t.kind==="Variable"}function cc(t){return t.kind==="ObjectValue"}function uc(t){return t.kind==="ListValue"}function lc(t){return t.kind==="EnumValue"}function fc(t){return t.kind==="NullValue"}function xt(t,e,r,n){if(oc(r)||ac(r))t[e.value]=Number(r.value);else if(ic(r)||nc(r))t[e.value]=r.value;else if(cc(r)){var i={};r.fields.map(function(c){return xt(i,c.name,c.value,n)}),t[e.value]=i}else if(sc(r)){var a=(n||{})[r.name.value];t[e.value]=a}else if(uc(r))t[e.value]=r.values.map(function(c){var f={};return xt(f,e,c,n),f[e.value]});else if(lc(r))t[e.value]=r.value;else if(fc(r))t[e.value]=null;else throw Pe(79,e.value,r.kind)}function hc(t,e){var r=null;t.directives&&(r={},t.directives.forEach(function(i){r[i.name.value]={},i.arguments&&i.arguments.forEach(function(a){var c=a.name,f=a.value;return xt(r[i.name.value],c,f,e)})}));var n=null;return t.arguments&&t.arguments.length&&(n={},t.arguments.forEach(function(i){var a=i.name,c=i.value;return xt(n,a,c,e)})),mn(t.name.value,n,r)}var dc=["connection","include","skip","client","rest","export","nonreactive"],mn=Object.assign(function(t,e,r){if(e&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(f){i[f]=e[f]}),"".concat(r.connection.key,"(").concat(Xt(i),")")}else return r.connection.key;var a=t;if(e){var c=Xt(e);a+="(".concat(c,")")}return r&&Object.keys(r).forEach(function(f){dc.indexOf(f)===-1&&(r[f]&&Object.keys(r[f]).length?a+="@".concat(f,"(").concat(Xt(r[f]),")"):a+="@".concat(f))}),a},{setStringify:function(t){var e=Xt;return Xt=t,e}}),Xt=function(e){return JSON.stringify(e,pc)};function pc(t,e){return de(e)&&!Array.isArray(e)&&(e=Object.keys(e).sort().reduce(function(r,n){return r[n]=e[n],r},{})),e}function Fr(t,e){if(t.arguments&&t.arguments.length){var r={};return t.arguments.forEach(function(n){var i=n.name,a=n.value;return xt(r,i,a,e)}),r}return null}function ct(t){return t.alias?t.alias.value:t.name.value}function yn(t,e,r){for(var n,i=0,a=e.selections;i<a.length;i++){var c=a[i];if(ut(c)){if(c.name.value==="__typename")return t[ct(c)]}else n?n.push(c):n=[c]}if(typeof t.__typename=="string")return t.__typename;if(n)for(var f=0,d=n;f<d.length;f++){var c=d[f],p=yn(t,xr(c,r).selectionSet,r);if(typeof p=="string")return p}}function ut(t){return t.kind==="Field"}function mc(t){return t.kind==="InlineFragment"}function Zt(t){J(t&&t.kind==="Document",71);var e=t.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw Pe(72,r.kind);return r});return J(e.length<=1,73,e.length),t}function er(t){return Zt(t),t.definitions.filter(function(e){return e.kind==="OperationDefinition"})[0]}function vn(t){return t.definitions.filter(function(e){return e.kind==="OperationDefinition"&&!!e.name}).map(function(e){return e.name.value})[0]||null}function Ar(t){return t.definitions.filter(function(e){return e.kind==="FragmentDefinition"})}function Ji(t){var e=er(t);return J(e&&e.operation==="query",74),e}function yc(t){J(t.kind==="Document",75),J(t.definitions.length<=1,76);var e=t.definitions[0];return J(e.kind==="FragmentDefinition",77),e}function tr(t){Zt(t);for(var e,r=0,n=t.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!e&&(e=i)}if(e)return e;throw Pe(78)}function gn(t){var e=Object.create(null),r=t&&t.variableDefinitions;return r&&r.length&&r.forEach(function(n){n.defaultValue&&xt(e,n.variable.name,n.defaultValue)}),e}function vc(t){return t}var Ki=function(){function t(e,r){r===void 0&&(r=Object.create(null)),this.resultCache=Yi?new WeakSet:new Set,this.transform=e,r.getCacheKey&&(this.getCacheKey=r.getCacheKey),r.cache!==!1&&(this.stableCacheKeys=new st(Ze,function(n){return{key:n}}))}return t.prototype.getCacheKey=function(e){return[e]},t.identity=function(){return new t(vc,{cache:!1})},t.split=function(e,r,n){return n===void 0&&(n=t.identity()),new t(function(i){var a=e(i)?r:n;return a.transformDocument(i)},{cache:!1})},t.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e;var r=this.getStableCacheEntry(e);if(r&&r.value)return r.value;Zt(e);var n=this.transform(e);return this.resultCache.add(n),r&&(r.value=n),n},t.prototype.concat=function(e){var r=this;return new t(function(n){return e.transformDocument(r.transformDocument(n))},{cache:!1})},t.prototype.getStableCacheEntry=function(e){if(this.stableCacheKeys){var r=this.getCacheKey(e);if(r)return J(Array.isArray(r),63),this.stableCacheKeys.lookupArray(r)}},t}(),Ft=Ze?new WeakMap:void 0,bn=function(t){var e;return e=Ft==null?void 0:Ft.get(t),e||(e=zs(t),Ft==null||Ft.set(t,e)),e},be=Array.isArray;function Ye(t){return Array.isArray(t)&&t.length>0}var Xi={kind:V.FIELD,name:{kind:V.NAME,value:"__typename"}};function Zi(t,e){return!t||t.selectionSet.selections.every(function(r){return r.kind===V.FRAGMENT_SPREAD&&Zi(e[r.name.value],e)})}function gc(t){return Zi(er(t)||yc(t),Nr(Ar(t)))?null:t}function bc(t){var e=new Map,r=new Map;return t.forEach(function(n){n&&(n.name?e.set(n.name,n):n.test&&r.set(n.test,n))}),function(n){var i=e.get(n.name.value);return!i&&r.size&&r.forEach(function(a,c){c(n)&&(i=a)}),i}}function eo(t){var e=new Map;return function(n){n===void 0&&(n=t);var i=e.get(n);return i||e.set(n,i={variables:new Set,fragmentSpreads:new Set}),i}}function to(t,e){Zt(e);for(var r=eo(""),n=eo(""),i=function(k){for(var A=0,T=void 0;A<k.length&&(T=k[A]);++A)if(!be(T)){if(T.kind===V.OPERATION_DEFINITION)return r(T.name&&T.name.value);if(T.kind===V.FRAGMENT_DEFINITION)return n(T.name.value)}return globalThis.__DEV__!==!1&&J.error(80),null},a=0,c=e.definitions.length-1;c>=0;--c)e.definitions[c].kind===V.OPERATION_DEFINITION&&++a;var f=bc(t),d=function(k){return Ye(k)&&k.map(f).some(function(A){return A&&A.remove})},p=new Map,y=!1,v={enter:function(k){if(d(k.directives))return y=!0,null}},b=Xe(e,{Field:v,InlineFragment:v,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(k,A,T,P,U){var $=i(U);$&&$.variables.add(k.name.value)}},FragmentSpread:{enter:function(k,A,T,P,U){if(d(k.directives))return y=!0,null;var $=i(U);$&&$.fragmentSpreads.add(k.name.value)}},FragmentDefinition:{enter:function(k,A,T,P){p.set(JSON.stringify(P),k)},leave:function(k,A,T,P){var U=p.get(JSON.stringify(P));if(k===U)return k;if(a>0&&k.selectionSet.selections.every(function($){return $.kind===V.FIELD&&$.name.value==="__typename"}))return n(k.name.value).removed=!0,y=!0,null}},Directive:{leave:function(k){if(f(k))return y=!0,null}}});if(!y)return e;var E=function(k){return k.transitiveVars||(k.transitiveVars=new Set(k.variables),k.removed||k.fragmentSpreads.forEach(function(A){E(n(A)).transitiveVars.forEach(function(T){k.transitiveVars.add(T)})})),k},I=new Set;b.definitions.forEach(function(k){k.kind===V.OPERATION_DEFINITION?E(r(k.name&&k.name.value)).fragmentSpreads.forEach(function(A){I.add(A)}):k.kind===V.FRAGMENT_DEFINITION&&a===0&&!n(k.name.value).removed&&I.add(k.name.value)}),I.forEach(function(k){E(n(k)).fragmentSpreads.forEach(function(A){I.add(A)})});var O=function(k){return!!(!I.has(k)||n(k).removed)},R={enter:function(k){if(O(k.name.value))return null}};return gc(Xe(b,{FragmentSpread:R,FragmentDefinition:R,OperationDefinition:{leave:function(k){if(k.variableDefinitions){var A=E(r(k.name&&k.name.value)).transitiveVars;if(A.size<k.variableDefinitions.length)return _(_({},k),{variableDefinitions:k.variableDefinitions.filter(function(T){return A.has(T.variable.name.value)})})}}}}))}var En=Object.assign(function(t){return Xe(t,{SelectionSet:{enter:function(e,r,n){if(!(n&&n.kind===V.OPERATION_DEFINITION)){var i=e.selections;if(i){var a=i.some(function(f){return ut(f)&&(f.name.value==="__typename"||f.name.value.lastIndexOf("__",0)===0)});if(!a){var c=n;if(!(ut(c)&&c.directives&&c.directives.some(function(f){return f.name.value==="export"})))return _(_({},e),{selections:at(at([],i,!0),[Xi],!1)})}}}}}})},{added:function(t){return t===Xi}});function Ec(t){var e=tr(t),r=e.operation;if(r==="query")return t;var n=Xe(t,{OperationDefinition:{enter:function(i){return _(_({},i),{operation:"query"})}}});return n}function ro(t){Zt(t);var e=to([{test:function(r){return r.name.value==="client"},remove:!0}],t);return e}var wc=Object.prototype.hasOwnProperty;function no(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return wn(t)}function wn(t){var e=t[0]||{},r=t.length;if(r>1)for(var n=new lt,i=1;i<r;++i)e=n.merge(e,t[i]);return e}var Sc=function(t,e,r){return this.merge(t[r],e[r])},lt=function(){function t(e){e===void 0&&(e=Sc),this.reconciler=e,this.isObject=de,this.pastCopies=new Set}return t.prototype.merge=function(e,r){for(var n=this,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];return de(r)&&de(e)?(Object.keys(r).forEach(function(c){if(wc.call(e,c)){var f=e[c];if(r[c]!==f){var d=n.reconciler.apply(n,at([e,r,c],i,!1));d!==f&&(e=n.shallowCopyForMerge(e),e[c]=d)}}else e=n.shallowCopyForMerge(e),e[c]=r[c]}),e):r},t.prototype.shallowCopyForMerge=function(e){return de(e)&&(this.pastCopies.has(e)||(Array.isArray(e)?e=e.slice(0):e=_({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},t}();function Ic(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=kc(t))||e){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kc(t,e){if(t){if(typeof t=="string")return io(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return io(t,e)}}function io(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function oo(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Sn(t,e,r){return e&&oo(t.prototype,e),r&&oo(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var In=function(){return typeof Symbol=="function"},kn=function(t){return In()&&!!Symbol[t]},_n=function(t){return kn(t)?Symbol[t]:"@@"+t};In()&&!kn("observable")&&(Symbol.observable=Symbol("observable"));var _c=_n("iterator"),On=_n("observable"),ao=_n("species");function Pr(t,e){var r=t[e];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function rr(t){var e=t.constructor;return e!==void 0&&(e=e[ao],e===null&&(e=void 0)),e!==void 0?e:pe}function Oc(t){return t instanceof pe}function At(t){At.log?At.log(t):setTimeout(function(){throw t})}function $r(t){Promise.resolve().then(function(){try{t()}catch(e){At(e)}})}function so(t){var e=t._cleanup;if(e!==void 0&&(t._cleanup=void 0,!!e))try{if(typeof e=="function")e();else{var r=Pr(e,"unsubscribe");r&&r.call(e)}}catch(n){At(n)}}function Dn(t){t._observer=void 0,t._queue=void 0,t._state="closed"}function Dc(t){var e=t._queue;if(e){t._queue=void 0,t._state="ready";for(var r=0;r<e.length&&(co(t,e[r].type,e[r].value),t._state!=="closed");++r);}}function co(t,e,r){t._state="running";var n=t._observer;try{var i=Pr(n,e);switch(e){case"next":i&&i.call(n,r);break;case"error":if(Dn(t),i)i.call(n,r);else throw r;break;case"complete":Dn(t),i&&i.call(n);break}}catch(a){At(a)}t._state==="closed"?so(t):t._state==="running"&&(t._state="ready")}function Tn(t,e,r){if(t._state!=="closed"){if(t._state==="buffering"){t._queue.push({type:e,value:r});return}if(t._state!=="ready"){t._state="buffering",t._queue=[{type:e,value:r}],$r(function(){return Dc(t)});return}co(t,e,r)}}var Tc=function(){function t(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new Rc(this);try{this._cleanup=n.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var e=t.prototype;return e.unsubscribe=function(){this._state!=="closed"&&(Dn(this),so(this))},Sn(t,[{key:"closed",get:function(){return this._state==="closed"}}]),t}(),Rc=function(){function t(r){this._subscription=r}var e=t.prototype;return e.next=function(n){Tn(this._subscription,"next",n)},e.error=function(n){Tn(this._subscription,"error",n)},e.complete=function(){Tn(this._subscription,"complete")},Sn(t,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),t}(),pe=function(){function t(r){if(!(this instanceof t))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var e=t.prototype;return e.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new Tc(n,this._subscriber)},e.forEach=function(n){var i=this;return new Promise(function(a,c){if(typeof n!="function"){c(new TypeError(n+" is not a function"));return}function f(){d.unsubscribe(),a()}var d=i.subscribe({next:function(p){try{n(p,f)}catch(y){c(y),d.unsubscribe()}},error:c,complete:a})})},e.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=rr(this);return new a(function(c){return i.subscribe({next:function(f){try{f=n(f)}catch(d){return c.error(d)}c.next(f)},error:function(f){c.error(f)},complete:function(){c.complete()}})})},e.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=rr(this);return new a(function(c){return i.subscribe({next:function(f){try{if(!n(f))return}catch(d){return c.error(d)}c.next(f)},error:function(f){c.error(f)},complete:function(){c.complete()}})})},e.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=rr(this),c=arguments.length>1,f=!1,d=arguments[1],p=d;return new a(function(y){return i.subscribe({next:function(v){var b=!f;if(f=!0,!b||c)try{p=n(p,v)}catch(E){return y.error(E)}else p=v},error:function(v){y.error(v)},complete:function(){if(!f&&!c)return y.error(new TypeError("Cannot reduce an empty sequence"));y.next(p),y.complete()}})})},e.concat=function(){for(var n=this,i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];var f=rr(this);return new f(function(d){var p,y=0;function v(b){p=b.subscribe({next:function(E){d.next(E)},error:function(E){d.error(E)},complete:function(){y===a.length?(p=void 0,d.complete()):v(f.from(a[y++]))}})}return v(n),function(){p&&(p.unsubscribe(),p=void 0)}})},e.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=rr(this);return new a(function(c){var f=[],d=i.subscribe({next:function(y){if(n)try{y=n(y)}catch(b){return c.error(b)}var v=a.from(y).subscribe({next:function(b){c.next(b)},error:function(b){c.error(b)},complete:function(){var b=f.indexOf(v);b>=0&&f.splice(b,1),p()}});f.push(v)},error:function(y){c.error(y)},complete:function(){p()}});function p(){d.closed&&f.length===0&&c.complete()}return function(){f.forEach(function(y){return y.unsubscribe()}),d.unsubscribe()}})},e[On]=function(){return this},t.from=function(n){var i=typeof this=="function"?this:t;if(n==null)throw new TypeError(n+" is not an object");var a=Pr(n,On);if(a){var c=a.call(n);if(Object(c)!==c)throw new TypeError(c+" is not an object");return Oc(c)&&c.constructor===i?c:new i(function(f){return c.subscribe(f)})}if(kn("iterator")&&(a=Pr(n,_c),a))return new i(function(f){$r(function(){if(!f.closed){for(var d=Ic(a.call(n)),p;!(p=d()).done;){var y=p.value;if(f.next(y),f.closed)return}f.complete()}})});if(Array.isArray(n))return new i(function(f){$r(function(){if(!f.closed){for(var d=0;d<n.length;++d)if(f.next(n[d]),f.closed)return;f.complete()}})});throw new TypeError(n+" is not observable")},t.of=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var c=typeof this=="function"?this:t;return new c(function(f){$r(function(){if(!f.closed){for(var d=0;d<i.length;++d)if(f.next(i[d]),f.closed)return;f.complete()}})})},Sn(t,null,[{key:ao,get:function(){return this}}]),t}();In()&&Object.defineProperty(pe,Symbol("extensions"),{value:{symbol:On,hostReportError:At},configurable:!0});function Cc(t){var e,r=t.Symbol;if(typeof r=="function")if(r.observable)e=r.observable;else{typeof r.for=="function"?e=r.for("https://github.com/benlesh/symbol-observable"):e=r("https://github.com/benlesh/symbol-observable");try{r.observable=e}catch{}}else e="@@observable";return e}var Pt;typeof self<"u"?Pt=self:typeof window<"u"?Pt=window:typeof global<"u"?Pt=global:typeof module<"u"?Pt=module:Pt=Function("return this")(),Cc(Pt);var uo=pe.prototype,lo="@@observable";uo[lo]||(uo[lo]=function(){return this});var Nc=Object.prototype.toString;function fo(t){return Rn(t)}function Rn(t,e){switch(Nc.call(t)){case"[object Array]":{if(e=e||new Map,e.has(t))return e.get(t);var r=t.slice(0);return e.set(t,r),r.forEach(function(i,a){r[a]=Rn(i,e)}),r}case"[object Object]":{if(e=e||new Map,e.has(t))return e.get(t);var n=Object.create(Object.getPrototypeOf(t));return e.set(t,n),Object.keys(t).forEach(function(i){n[i]=Rn(t[i],e)}),n}default:return t}}function xc(t){var e=new Set([t]);return e.forEach(function(r){de(r)&&Fc(r)===r&&Object.getOwnPropertyNames(r).forEach(function(n){de(r[n])&&e.add(r[n])})}),t}function Fc(t){if(globalThis.__DEV__!==!1&&!Object.isFrozen(t))try{Object.freeze(t)}catch(e){if(e instanceof TypeError)return null;throw e}return t}function Cn(t){return globalThis.__DEV__!==!1&&xc(t),t}function nr(t,e,r){var n=[];t.forEach(function(i){return i[e]&&n.push(i)}),n.forEach(function(i){return i[e](r)})}function Nn(t,e,r){return new pe(function(n){var i=n.next,a=n.error,c=n.complete,f=0,d=!1,p={then:function(E){return new Promise(function(I){return I(E())})}};function y(E,I){return E?function(O){++f;var R=function(){return E(O)};p=p.then(R,R).then(function(k){--f,i&&i.call(n,k),d&&v.complete()},function(k){throw--f,k}).catch(function(k){a&&a.call(n,k)})}:function(O){return I&&I.call(n,O)}}var v={next:y(e,i),error:y(r,a),complete:function(){d=!0,f||c&&c.call(n)}},b=t.subscribe(v);return function(){return b.unsubscribe()}})}function ho(t){function e(r){Object.defineProperty(t,r,{value:pe})}return Hi&&Symbol.species&&e(Symbol.species),e("@@species"),t}function po(t){return t&&typeof t.then=="function"}var $t=function(t){Ue(e,t);function e(r){var n=t.call(this,function(i){return n.addObserver(i),function(){return n.removeObserver(i)}})||this;return n.observers=new Set,n.promise=new Promise(function(i,a){n.resolve=i,n.reject=a}),n.handlers={next:function(i){n.sub!==null&&(n.latest=["next",i],n.notify("next",i),nr(n.observers,"next",i))},error:function(i){var a=n.sub;a!==null&&(a&&setTimeout(function(){return a.unsubscribe()}),n.sub=null,n.latest=["error",i],n.reject(i),n.notify("error",i),nr(n.observers,"error",i))},complete:function(){var i=n,a=i.sub,c=i.sources,f=c===void 0?[]:c;if(a!==null){var d=f.shift();d?po(d)?d.then(function(p){return n.sub=p.subscribe(n.handlers)}):n.sub=d.subscribe(n.handlers):(a&&setTimeout(function(){return a.unsubscribe()}),n.sub=null,n.latest&&n.latest[0]==="next"?n.resolve(n.latest[1]):n.resolve(),n.notify("complete"),nr(n.observers,"complete"))}}},n.nextResultListeners=new Set,n.cancel=function(i){n.reject(i),n.sources=[],n.handlers.complete()},n.promise.catch(function(i){}),typeof r=="function"&&(r=[new pe(r)]),po(r)?r.then(function(i){return n.start(i)},n.handlers.error):n.start(r),n}return e.prototype.start=function(r){this.sub===void 0&&(this.sources=Array.from(r),this.handlers.complete())},e.prototype.deliverLastMessage=function(r){if(this.latest){var n=this.latest[0],i=r[n];i&&i.call(r,this.latest[1]),this.sub===null&&n==="next"&&r.complete&&r.complete()}},e.prototype.addObserver=function(r){this.observers.has(r)||(this.deliverLastMessage(r),this.observers.add(r))},e.prototype.removeObserver=function(r){this.observers.delete(r)&&this.observers.size<1&&this.handlers.complete()},e.prototype.notify=function(r,n){var i=this.nextResultListeners;i.size&&(this.nextResultListeners=new Set,i.forEach(function(a){return a(r,n)}))},e.prototype.beforeNext=function(r){var n=!1;this.nextResultListeners.add(function(i,a){n||(n=!0,r(i,a))})},e}(pe);ho($t);function Mt(t){return"incremental"in t}function Ac(t){return"hasNext"in t&&"data"in t}function Pc(t){return Mt(t)||Ac(t)}function $c(t){return de(t)&&"payload"in t}function mo(t,e){var r=t,n=new lt;return Mt(e)&&Ye(e.incremental)&&e.incremental.forEach(function(i){for(var a=i.data,c=i.path,f=c.length-1;f>=0;--f){var d=c[f],p=!isNaN(+d),y=p?[]:{};y[d]=a,a=y}r=n.merge(r,a)}),r}function Mr(t){var e=xn(t);return Ye(e)}function xn(t){var e=Ye(t.errors)?t.errors.slice(0):[];return Mt(t)&&Ye(t.incremental)&&t.incremental.forEach(function(r){r.errors&&e.push.apply(e,r.errors)}),e}function Lt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object.create(null);return t.forEach(function(n){n&&Object.keys(n).forEach(function(i){var a=n[i];a!==void 0&&(r[i]=a)})}),r}function Fn(t,e){return Lt(t,e,e.variables&&{variables:Lt(_(_({},t&&t.variables),e.variables))})}function An(t){return new pe(function(e){e.error(t)})}var Pn=function(t,e,r){var n=new Error(r);throw n.name="ServerError",n.response=t,n.statusCode=t.status,n.result=e,n};function Mc(t){for(var e=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];if(e.indexOf(i)<0)throw Pe(41,i)}return t}function Lc(t,e){var r=_({},t),n=function(a){typeof a=="function"?r=_(_({},r),a(r)):r=_(_({},r),a)},i=function(){return _({},r)};return Object.defineProperty(e,"setContext",{enumerable:!1,value:n}),Object.defineProperty(e,"getContext",{enumerable:!1,value:i}),e}function jc(t){var e={variables:t.variables||{},extensions:t.extensions||{},operationName:t.operationName,query:t.query};return e.operationName||(e.operationName=typeof e.query!="string"?vn(e.query)||void 0:""),e}function qc(t,e){var r=_({},t),n=new Set(Object.keys(t));return Xe(e,{Variable:function(i,a,c){c&&c.kind!=="VariableDefinition"&&n.delete(i.name.value)}}),n.forEach(function(i){delete r[i]}),r}function yo(t,e){return e?e(t):pe.of()}function ir(t){return typeof t=="function"?new jt(t):t}function Lr(t){return t.request.length<=1}var jt=function(){function t(e){e&&(this.request=e)}return t.empty=function(){return new t(function(){return pe.of()})},t.from=function(e){return e.length===0?t.empty():e.map(ir).reduce(function(r,n){return r.concat(n)})},t.split=function(e,r,n){var i=ir(r),a=ir(n||new t(yo));return Lr(i)&&Lr(a)?new t(function(c){return e(c)?i.request(c)||pe.of():a.request(c)||pe.of()}):new t(function(c,f){return e(c)?i.request(c,f)||pe.of():a.request(c,f)||pe.of()})},t.execute=function(e,r){return e.request(Lc(r.context,jc(Mc(r))))||pe.of()},t.concat=function(e,r){var n=ir(e);if(Lr(n))return globalThis.__DEV__!==!1&&J.warn(33,n),n;var i=ir(r);return Lr(i)?new t(function(a){return n.request(a,function(c){return i.request(c)||pe.of()})||pe.of()}):new t(function(a,c){return n.request(a,function(f){return i.request(f,c)||pe.of()})||pe.of()})},t.prototype.split=function(e,r,n){return this.concat(t.split(e,r,n||new t(yo)))},t.prototype.concat=function(e){return t.concat(this,e)},t.prototype.request=function(e,r){throw Pe(34)},t.prototype.onError=function(e,r){if(r&&r.error)return r.error(e),!1;throw e},t.prototype.setOnError=function(e){return this.onError=e,this},t}(),$n=jt.execute;function Vc(t){var e,r=t[Symbol.asyncIterator]();return e={next:function(){return r.next()}},e[Symbol.asyncIterator]=function(){return this},e}function Bc(t){var e=null,r=null,n=!1,i=[],a=[];function c(v){if(!r){if(a.length){var b=a.shift();if(Array.isArray(b)&&b[0])return b[0]({value:v,done:!1})}i.push(v)}}function f(v){r=v;var b=a.slice();b.forEach(function(E){E[1](v)}),!e||e()}function d(){n=!0;var v=a.slice();v.forEach(function(b){b[0]({value:void 0,done:!0})}),!e||e()}e=function(){e=null,t.removeListener("data",c),t.removeListener("error",f),t.removeListener("end",d),t.removeListener("finish",d),t.removeListener("close",d)},t.on("data",c),t.on("error",f),t.on("end",d),t.on("finish",d),t.on("close",d);function p(){return new Promise(function(v,b){if(r)return b(r);if(i.length)return v({value:i.shift(),done:!1});if(n)return v({value:void 0,done:!0});a.push([v,b])})}var y={next:function(){return p()}};return Cr&&(y[Symbol.asyncIterator]=function(){return this}),y}function Uc(t){var e=!1,r={next:function(){return e?Promise.resolve({value:void 0,done:!0}):(e=!0,new Promise(function(n,i){t.then(function(a){n({value:a,done:!1})}).catch(i)}))}};return Cr&&(r[Symbol.asyncIterator]=function(){return this}),r}function vo(t){var e={next:function(){return t.read()}};return Cr&&(e[Symbol.asyncIterator]=function(){return this}),e}function Qc(t){return!!t.body}function zc(t){return!!t.getReader}function Gc(t){return!!(Cr&&t[Symbol.asyncIterator])}function Wc(t){return!!t.stream}function Yc(t){return!!t.arrayBuffer}function Hc(t){return!!t.pipe}function Jc(t){var e=t;if(Qc(t)&&(e=t.body),Gc(e))return Vc(e);if(zc(e))return vo(e.getReader());if(Wc(e))return vo(e.stream().getReader());if(Yc(e))return Uc(e.arrayBuffer());if(Hc(e))return Bc(e);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var Mn=Symbol();function Kc(t){return t.extensions?Array.isArray(t.extensions[Mn]):!1}function Xc(t){return t.hasOwnProperty("graphQLErrors")}var Zc=function(t){var e=at(at(at([],t.graphQLErrors,!0),t.clientErrors,!0),t.protocolErrors,!0);return t.networkError&&e.push(t.networkError),e.map(function(r){return de(r)&&r.message||"Error message not found."}).join(`
`)},wt=function(t){Ue(e,t);function e(r){var n=r.graphQLErrors,i=r.protocolErrors,a=r.clientErrors,c=r.networkError,f=r.errorMessage,d=r.extraInfo,p=t.call(this,f)||this;return p.name="ApolloError",p.graphQLErrors=n||[],p.protocolErrors=i||[],p.clientErrors=a||[],p.networkError=c||null,p.message=f||Zc(p),p.extraInfo=d,p.__proto__=e.prototype,p}return e}(Error),go=Object.prototype.hasOwnProperty;function eu(t,e){var r;return it(this,void 0,void 0,function(){var n,i,a,c,f,d,p,y,v,b,E,I,O,R,k,A,T,P,U,$,j,H,oe;return ot(this,function(ae){switch(ae.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),i=(r=t.headers)===null||r===void 0?void 0:r.get("content-type"),a="boundary=",c=i!=null&&i.includes(a)?i==null?void 0:i.substring((i==null?void 0:i.indexOf(a))+a.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",f=`\r
--`.concat(c),d="",p=Jc(t),y=!0,ae.label=1;case 1:return y?[4,p.next()]:[3,3];case 2:for(v=ae.sent(),b=v.value,E=v.done,I=typeof b=="string"?b:n.decode(b),O=d.length-f.length+1,y=!E,d+=I,R=d.indexOf(f,O);R>-1;){if(k=void 0,H=[d.slice(0,R),d.slice(R+f.length)],k=H[0],d=H[1],A=k.indexOf(`\r
\r
`),T=tu(k.slice(0,A)),P=T["content-type"],P&&P.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(U=k.slice(A),U){if($=bo(t,U),Object.keys($).length>1||"data"in $||"incremental"in $||"errors"in $||"payload"in $)$c($)?(j={},"payload"in $&&(j=_({},$.payload)),"errors"in $&&(j=_(_({},j),{extensions:_(_({},"extensions"in j?j.extensions:null),(oe={},oe[Mn]=$.errors,oe))})),e(j)):e($);else if(Object.keys($).length===1&&"hasNext"in $&&!$.hasNext)return[2]}R=d.indexOf(f)}return[3,1];case 3:return[2]}})})}function tu(t){var e={};return t.split(`
`).forEach(function(r){var n=r.indexOf(":");if(n>-1){var i=r.slice(0,n).trim().toLowerCase(),a=r.slice(n+1).trim();e[i]=a}}),e}function bo(t,e){if(t.status>=300){var r=function(){try{return JSON.parse(e)}catch{return e}};Pn(t,r(),"Response not successful: Received status code ".concat(t.status))}try{return JSON.parse(e)}catch(i){var n=i;throw n.name="ServerParseError",n.response=t,n.statusCode=t.status,n.bodyText=e,n}}function ru(t,e){t.result&&t.result.errors&&t.result.data&&e.next(t.result),e.error(t)}function nu(t){return function(e){return e.text().then(function(r){return bo(e,r)}).then(function(r){return e.status>=300&&Pn(e,r,"Response not successful: Received status code ".concat(e.status)),!Array.isArray(r)&&!go.call(r,"data")&&!go.call(r,"errors")&&Pn(e,r,"Server response was missing for query '".concat(Array.isArray(t)?t.map(function(n){return n.operationName}):t.operationName,"'.")),r})}}var Ln=function(t,e){var r;try{r=JSON.stringify(t)}catch(i){var n=Pe(37,e,i.message);throw n.parseError=i,n}return r},iu={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},ou={accept:"*/*","content-type":"application/json"},au={method:"POST"},su={http:iu,headers:ou,options:au},cu=function(t,e){return e(t)};function uu(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},a={};r.forEach(function(v){i=_(_(_({},i),v.options),{headers:_(_({},i.headers),v.headers)}),v.credentials&&(i.credentials=v.credentials),a=_(_({},a),v.http)}),i.headers&&(i.headers=lu(i.headers,a.preserveHeaderCase));var c=t.operationName,f=t.extensions,d=t.variables,p=t.query,y={operationName:c,variables:d};return a.includeExtensions&&(y.extensions=f),a.includeQuery&&(y.query=e(p,bn)),{options:i,body:y}}function lu(t,e){if(!e){var r=Object.create(null);return Object.keys(Object(t)).forEach(function(a){r[a.toLowerCase()]=t[a]}),r}var n=Object.create(null);Object.keys(Object(t)).forEach(function(a){n[a.toLowerCase()]={originalName:a,value:t[a]}});var i=Object.create(null);return Object.keys(n).forEach(function(a){i[n[a].originalName]=n[a].value}),i}var fu=function(t){if(!t&&typeof fetch>"u")throw Pe(35)},hu=function(t,e){var r=t.getContext(),n=r.uri;return n||(typeof e=="function"?e(t):e||"/graphql")};function du(t,e){var r=[],n=function(v,b){r.push("".concat(v,"=").concat(encodeURIComponent(b)))};if("query"in e&&n("query",e.query),e.operationName&&n("operationName",e.operationName),e.variables){var i=void 0;try{i=Ln(e.variables,"Variables map")}catch(v){return{parseError:v}}n("variables",i)}if(e.extensions){var a=void 0;try{a=Ln(e.extensions,"Extensions map")}catch(v){return{parseError:v}}n("extensions",a)}var c="",f=t,d=t.indexOf("#");d!==-1&&(c=t.substr(d),f=t.substr(0,d));var p=f.indexOf("?")===-1?"?":"&",y=f+p+r.join("&")+c;return{newURI:y}}var Eo=Qe(function(){return fetch}),pu=function(t){t===void 0&&(t={});var e=t.uri,r=e===void 0?"/graphql":e,n=t.fetch,i=t.print,a=i===void 0?cu:i,c=t.includeExtensions,f=t.preserveHeaderCase,d=t.useGETForQueries,p=t.includeUnusedVariables,y=p===void 0?!1:p,v=nt(t,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&fu(n||Eo);var b={http:{includeExtensions:c,preserveHeaderCase:f},options:v.fetchOptions,credentials:v.credentials,headers:v.headers};return new jt(function(E){var I=hu(E,r),O=E.getContext(),R={};if(O.clientAwareness){var k=O.clientAwareness,A=k.name,T=k.version;A&&(R["apollographql-client-name"]=A),T&&(R["apollographql-client-version"]=T)}var P=_(_({},R),O.headers),U={http:O.http,options:O.fetchOptions,credentials:O.credentials,headers:P};if(Kt(["client"],E.query)){var $=ro(E.query);if(!$)return An(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));E.query=$}var j=uu(E,a,su,b,U),H=j.options,oe=j.body;oe.variables&&!y&&(oe.variables=qc(oe.variables,E.query));var ae;!H.signal&&typeof AbortController<"u"&&(ae=new AbortController,H.signal=ae.signal);var ve=function(ue){return ue.kind==="OperationDefinition"&&ue.operation==="mutation"},Fe=function(ue){return ue.kind==="OperationDefinition"&&ue.operation==="subscription"},He=Fe(tr(E.query)),z=Kt(["defer"],E.query);if(d&&!E.query.definitions.some(ve)&&(H.method="GET"),z||He){H.headers=H.headers||{};var se="multipart/mixed;";He&&z&&globalThis.__DEV__!==!1&&J.warn(36),He?se+="boundary=graphql;subscriptionSpec=1.0,application/json":z&&(se+="deferSpec=20220824,application/json"),H.headers.accept=se}if(H.method==="GET"){var G=du(I,oe),X=G.newURI,ce=G.parseError;if(ce)return An(ce);I=X}else try{H.body=Ln(oe,"Payload")}catch(ue){return An(ue)}return new pe(function(ue){var re=n||Qe(function(){return fetch})||Eo,Le=ue.next.bind(ue);return re(I,H).then(function($e){var Ge;E.setContext({response:$e});var Ae=(Ge=$e.headers)===null||Ge===void 0?void 0:Ge.get("content-type");return Ae!==null&&/^multipart\/mixed/i.test(Ae)?eu($e,Le):nu(E)($e).then(Le)}).then(function(){ae=void 0,ue.complete()}).catch(function($e){ae=void 0,ru($e,ue)}),function(){ae&&ae.abort()}})})},mu=function(t){Ue(e,t);function e(r){r===void 0&&(r={});var n=t.call(this,pu(r).request)||this;return n.options=r,n}return e}(jt);const{toString:wo,hasOwnProperty:yu}=Object.prototype,So=Function.prototype.toString,jn=new Map;function ge(t,e){try{return qn(t,e)}finally{jn.clear()}}function qn(t,e){if(t===e)return!0;const r=wo.call(t),n=wo.call(e);if(r!==n)return!1;switch(r){case"[object Array]":if(t.length!==e.length)return!1;case"[object Object]":{if(ko(t,e))return!0;const i=Io(t),a=Io(e),c=i.length;if(c!==a.length)return!1;for(let f=0;f<c;++f)if(!yu.call(e,i[f]))return!1;for(let f=0;f<c;++f){const d=i[f];if(!qn(t[d],e[d]))return!1}return!0}case"[object Error]":return t.name===e.name&&t.message===e.message;case"[object Number]":if(t!==t)return e!==e;case"[object Boolean]":case"[object Date]":return+t==+e;case"[object RegExp]":case"[object String]":return t==`${e}`;case"[object Map]":case"[object Set]":{if(t.size!==e.size)return!1;if(ko(t,e))return!0;const i=t.entries(),a=r==="[object Map]";for(;;){const c=i.next();if(c.done)break;const[f,d]=c.value;if(!e.has(f)||a&&!qn(d,e.get(f)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),e=new Uint8Array(e);case"[object DataView]":{let i=t.byteLength;if(i===e.byteLength)for(;i--&&t[i]===e[i];);return i===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const i=So.call(t);return i!==So.call(e)?!1:!bu(i,gu)}}return!1}function Io(t){return Object.keys(t).filter(vu,t)}function vu(t){return this[t]!==void 0}const gu="{ [native code] }";function bu(t,e){const r=t.length-e.length;return r>=0&&t.indexOf(e,r)===r}function ko(t,e){let r=jn.get(t);if(r){if(r.has(e))return!0}else jn.set(t,r=new Set);return r.add(e),!1}function Eu(){}class wu{constructor(e=1/0,r=Eu){this.max=e,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const r=this.getNode(e);return r&&r.value}getNode(e){const r=this.map.get(e);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(e,r){let n=this.getNode(e);return n?n.value=r:(n={key:e,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const r=this.map.get(e);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(e),this.dispose(r.value,e),!0):!1}}let Ce=null;const _o={};let Su=1;const Iu=()=>class{constructor(){this.id=["slot",Su++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=Ce;e;e=e.parent)if(this.id in e.slots){const r=e.slots[this.id];if(r===_o)break;return e!==Ce&&(Ce.slots[this.id]=r),!0}return Ce&&(Ce.slots[this.id]=_o),!1}getValue(){if(this.hasValue())return Ce.slots[this.id]}withValue(e,r,n,i){const a={__proto__:null,[this.id]:e},c=Ce;Ce={parent:c,slots:a};try{return r.apply(i,n)}finally{Ce=c}}static bind(e){const r=Ce;return function(){const n=Ce;try{return Ce=r,e.apply(this,arguments)}finally{Ce=n}}}static noContext(e,r,n){if(Ce){const i=Ce;try{return Ce=null,e.apply(n,r)}finally{Ce=i}}else return e.apply(n,r)}};function Oo(t){try{return t()}catch{}}const Vn="@wry/context:Slot",Do=Oo(()=>globalThis)||Oo(()=>global)||Object.create(null),To=Do[Vn]||Array[Vn]||function(t){try{Object.defineProperty(Do,Vn,{value:t,enumerable:!1,writable:!1,configurable:!0})}finally{return t}}(Iu()),jr=new To,{hasOwnProperty:ku}=Object.prototype,Bn=Array.from||function(t){const e=[];return t.forEach(r=>e.push(r)),e};function Un(t){const{unsubscribe:e}=t;typeof e=="function"&&(t.unsubscribe=void 0,e())}const or=[],_u=100;function qt(t,e){if(!t)throw new Error(e||"assertion failure")}function Ou(t,e){const r=t.length;return r>0&&r===e.length&&t[r-1]===e[r-1]}function Ro(t){switch(t.length){case 0:throw new Error("unknown value");case 1:return t[0];case 2:throw t[1]}}function Du(t){return t.slice(0)}class qr{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++qr.count}peek(){if(this.value.length===1&&!ft(this))return Co(this),this.value[0]}recompute(e){return qt(!this.recomputing,"already recomputing"),Co(this),ft(this)?Tu(this,e):Ro(this.value)}setDirty(){this.dirty||(this.dirty=!0,this.value.length=0,No(this),Un(this))}dispose(){this.setDirty(),$o(this),Qn(this,(e,r)=>{e.setDirty(),Mo(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=or.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(Bn(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),or.push(this.deps),this.deps=null)}}qr.count=0;function Co(t){const e=jr.getValue();if(e)return t.parents.add(e),e.childValues.has(t)||e.childValues.set(t,[]),ft(t)?Fo(e,t):Ao(e,t),e}function Tu(t,e){return $o(t),jr.withValue(t,Ru,[t,e]),Nu(t,e)&&Cu(t),Ro(t.value)}function Ru(t,e){t.recomputing=!0,t.value.length=0;try{t.value[0]=t.fn.apply(null,e)}catch(r){t.value[1]=r}t.recomputing=!1}function ft(t){return t.dirty||!!(t.dirtyChildren&&t.dirtyChildren.size)}function Cu(t){t.dirty=!1,!ft(t)&&xo(t)}function No(t){Qn(t,Fo)}function xo(t){Qn(t,Ao)}function Qn(t,e){const r=t.parents.size;if(r){const n=Bn(t.parents);for(let i=0;i<r;++i)e(n[i],t)}}function Fo(t,e){qt(t.childValues.has(e)),qt(ft(e));const r=!ft(t);if(!t.dirtyChildren)t.dirtyChildren=or.pop()||new Set;else if(t.dirtyChildren.has(e))return;t.dirtyChildren.add(e),r&&No(t)}function Ao(t,e){qt(t.childValues.has(e)),qt(!ft(e));const r=t.childValues.get(e);r.length===0?t.childValues.set(e,Du(e.value)):Ou(r,e.value)||t.setDirty(),Po(t,e),!ft(t)&&xo(t)}function Po(t,e){const r=t.dirtyChildren;r&&(r.delete(e),r.size===0&&(or.length<_u&&or.push(r),t.dirtyChildren=null))}function $o(t){t.childValues.size>0&&t.childValues.forEach((e,r)=>{Mo(t,r)}),t.forgetDeps(),qt(t.dirtyChildren===null)}function Mo(t,e){e.parents.delete(t),t.childValues.delete(e),Po(t,e)}function Nu(t,e){if(typeof t.subscribe=="function")try{Un(t),t.unsubscribe=t.subscribe.apply(null,e)}catch{return t.setDirty(),!1}return!0}const xu={setDirty:!0,dispose:!0,forget:!0};function Lo(t){const e=new Map;function r(n){const i=jr.getValue();if(i){let a=e.get(n);a||e.set(n,a=new Set),i.dependOn(a)}}return r.dirty=function(i,a){const c=e.get(i);if(c){const f=a&&ku.call(xu,a)?a:"setDirty";Bn(c).forEach(d=>d[f]()),e.delete(i),Un(c)}},r}let jo;function Fu(...t){return(jo||(jo=new st(typeof WeakMap=="function"))).lookupArray(t)}const zn=new Set;function Vr(t,{max:e=Math.pow(2,16),makeCacheKey:r=Fu,keyArgs:n,subscribe:i}=Object.create(null)){const a=new wu(e,y=>y.dispose()),c=function(){const y=r.apply(null,n?n.apply(null,arguments):arguments);if(y===void 0)return t.apply(null,arguments);let v=a.get(y);v||(a.set(y,v=new qr(t)),v.subscribe=i,v.forget=()=>a.delete(y));const b=v.recompute(Array.prototype.slice.call(arguments));return a.set(y,v),zn.add(a),jr.hasValue()||(zn.forEach(E=>E.clean()),zn.clear()),b};Object.defineProperty(c,"size",{get(){return a.map.size},configurable:!1,enumerable:!1}),Object.freeze(c.options={max:e,makeCacheKey:r,keyArgs:n,subscribe:i});function f(y){const v=a.get(y);v&&v.setDirty()}c.dirtyKey=f,c.dirty=function(){f(r.apply(null,arguments))};function d(y){const v=a.get(y);if(v)return v.peek()}c.peekKey=d,c.peek=function(){return d(r.apply(null,arguments))};function p(y){return a.delete(y)}return c.forgetKey=p,c.forget=function(){return p(r.apply(null,arguments))},c.makeCacheKey=r,c.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(c)}var Au=function(){function t(){this.assumeImmutableResults=!1,this.getFragmentDoc=Vr(tc)}return t.prototype.batch=function(e){var r=this,n=typeof e.optimistic=="string"?e.optimistic:e.optimistic===!1?null:void 0,i;return this.performTransaction(function(){return i=e.update(r)},n),i},t.prototype.recordOptimisticTransaction=function(e,r){this.performTransaction(e,r)},t.prototype.transformDocument=function(e){return e},t.prototype.transformForLink=function(e){return e},t.prototype.identify=function(e){},t.prototype.gc=function(){return[]},t.prototype.modify=function(e){return!1},t.prototype.readQuery=function(e,r){return r===void 0&&(r=!!e.optimistic),this.read(_(_({},e),{rootId:e.id||"ROOT_QUERY",optimistic:r}))},t.prototype.readFragment=function(e,r){return r===void 0&&(r=!!e.optimistic),this.read(_(_({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:r}))},t.prototype.writeQuery=function(e){var r=e.id,n=e.data,i=nt(e,["id","data"]);return this.write(Object.assign(i,{dataId:r||"ROOT_QUERY",result:n}))},t.prototype.writeFragment=function(e){var r=e.id,n=e.data,i=e.fragment,a=e.fragmentName,c=nt(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(c,{query:this.getFragmentDoc(i,a),dataId:r,result:n}))},t.prototype.updateQuery=function(e,r){return this.batch({update:function(n){var i=n.readQuery(e),a=r(i);return a==null?i:(n.writeQuery(_(_({},e),{data:a})),a)}})},t.prototype.updateFragment=function(e,r){return this.batch({update:function(n){var i=n.readFragment(e),a=r(i);return a==null?i:(n.writeFragment(_(_({},e),{data:a})),a)}})},t}(),qo=function(t){Ue(e,t);function e(r,n,i,a){var c,f=t.call(this,r)||this;if(f.message=r,f.path=n,f.query=i,f.variables=a,Array.isArray(f.path)){f.missing=f.message;for(var d=f.path.length-1;d>=0;--d)f.missing=(c={},c[f.path[d]]=f.missing,c)}else f.missing=f.path;return f.__proto__=e.prototype,f}return e}(Error),_e=Object.prototype.hasOwnProperty;function ar(t){return t==null}function Vo(t,e){var r=t.__typename,n=t.id,i=t._id;if(typeof r=="string"&&(e&&(e.keyObject=ar(n)?ar(i)?void 0:{_id:i}:{id:n}),ar(n)&&!ar(i)&&(n=i),!ar(n)))return"".concat(r,":").concat(typeof n=="number"||typeof n=="string"?n:JSON.stringify(n))}var Bo={dataIdFromObject:Vo,addTypename:!0,resultCaching:!0,canonizeResults:!1};function Pu(t){return Lt(Bo,t)}function Uo(t){var e=t.canonizeResults;return e===void 0?Bo.canonizeResults:e}function $u(t,e){return fe(e)?t.get(e.__ref,"__typename"):e&&e.__typename}var Qo=/^[_a-z][_0-9a-z]*/i;function ht(t){var e=t.match(Qo);return e?e[0]:t}function Gn(t,e,r){return de(e)?be(e)?e.every(function(n){return Gn(t,n,r)}):t.selections.every(function(n){if(ut(n)&&Jt(n,r)){var i=ct(n);return _e.call(e,i)&&(!n.selectionSet||Gn(n.selectionSet,e[i],r))}return!0}):!1}function Vt(t){return de(t)&&!fe(t)&&!be(t)}function Mu(){return new lt}function zo(t,e){var r=Nr(Ar(t));return{fragmentMap:r,lookupFragment:function(n){var i=r[n];return!i&&e&&(i=e.lookup(n)),i||null}}}var Br=Object.create(null),Wn=function(){return Br},Go=Object.create(null),sr=function(){function t(e,r){var n=this;this.policies=e,this.group=r,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(i,a){return Cn(fe(i)?n.get(i.__ref,a):i&&i[a])},this.canRead=function(i){return fe(i)?n.has(i.__ref):typeof i=="object"},this.toReference=function(i,a){if(typeof i=="string")return Nt(i);if(fe(i))return i;var c=n.policies.identify(i)[0];if(c){var f=Nt(c);return a&&n.merge(c,i),f}}}return t.prototype.toObject=function(){return _({},this.data)},t.prototype.has=function(e){return this.lookup(e,!0)!==void 0},t.prototype.get=function(e,r){if(this.group.depend(e,r),_e.call(this.data,e)){var n=this.data[e];if(n&&_e.call(n,r))return n[r]}if(r==="__typename"&&_e.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof dt)return this.parent.get(e,r)},t.prototype.lookup=function(e,r){if(r&&this.group.depend(e,"__exists"),_e.call(this.data,e))return this.data[e];if(this instanceof dt)return this.parent.lookup(e,r);if(this.policies.rootTypenamesById[e])return Object.create(null)},t.prototype.merge=function(e,r){var n=this,i;fe(e)&&(e=e.__ref),fe(r)&&(r=r.__ref);var a=typeof e=="string"?this.lookup(i=e):e,c=typeof r=="string"?this.lookup(i=r):r;if(c){J(typeof i=="string",1);var f=new lt(ju).merge(a,c);if(this.data[i]=f,f!==a&&(delete this.refs[i],this.group.caching)){var d=Object.create(null);a||(d.__exists=1),Object.keys(c).forEach(function(p){if(!a||a[p]!==f[p]){d[p]=1;var y=ht(p);y!==p&&!n.policies.hasKeyArgs(f.__typename,y)&&(d[y]=1),f[p]===void 0&&!(n instanceof dt)&&delete f[p]}}),d.__typename&&!(a&&a.__typename)&&this.policies.rootTypenamesById[i]===f.__typename&&delete d.__typename,Object.keys(d).forEach(function(p){return n.group.dirty(i,p)})}}},t.prototype.modify=function(e,r){var n=this,i=this.lookup(e);if(i){var a=Object.create(null),c=!1,f=!0,d={DELETE:Br,INVALIDATE:Go,isReference:fe,toReference:this.toReference,canRead:this.canRead,readField:function(p,y){return n.policies.readField(typeof p=="string"?{fieldName:p,from:y||Nt(e)}:p,{store:n})}};if(Object.keys(i).forEach(function(p){var y=ht(p),v=i[p];if(v!==void 0){var b=typeof r=="function"?r:r[p]||r[y];if(b){var E=b===Wn?Br:b(Cn(v),_(_({},d),{fieldName:y,storeFieldName:p,storage:n.getStorage(e,p)}));E===Go?n.group.dirty(e,p):(E===Br&&(E=void 0),E!==v&&(a[p]=E,c=!0,v=E))}v!==void 0&&(f=!1)}}),c)return this.merge(e,a),f&&(this instanceof dt?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},t.prototype.delete=function(e,r,n){var i,a=this.lookup(e);if(a){var c=this.getFieldValue(a,"__typename"),f=r&&n?this.policies.getStoreFieldName({typename:c,fieldName:r,args:n}):r;return this.modify(e,f?(i={},i[f]=Wn,i):Wn)}return!1},t.prototype.evict=function(e,r){var n=!1;return e.id&&(_e.call(this.data,e.id)&&(n=this.delete(e.id,e.fieldName,e.args)),this instanceof dt&&this!==r&&(n=this.parent.evict(e,r)||n),(e.fieldName||n)&&this.group.dirty(e.id,e.fieldName||"__exists")),n},t.prototype.clear=function(){this.replace(null)},t.prototype.extract=function(){var e=this,r=this.toObject(),n=[];return this.getRootIdSet().forEach(function(i){_e.call(e.policies.rootTypenamesById,i)||n.push(i)}),n.length&&(r.__META={extraRootIds:n.sort()}),r},t.prototype.replace=function(e){var r=this;if(Object.keys(this.data).forEach(function(a){e&&_e.call(e,a)||r.delete(a)}),e){var n=e.__META,i=nt(e,["__META"]);Object.keys(i).forEach(function(a){r.merge(a,i[a])}),n&&n.extraRootIds.forEach(this.retain,this)}},t.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},t.prototype.release=function(e){if(this.rootIds[e]>0){var r=--this.rootIds[e];return r||delete this.rootIds[e],r}return 0},t.prototype.getRootIdSet=function(e){return e===void 0&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof dt?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},t.prototype.gc=function(){var e=this,r=this.getRootIdSet(),n=this.toObject();r.forEach(function(c){_e.call(n,c)&&(Object.keys(e.findChildRefIds(c)).forEach(r.add,r),delete n[c])});var i=Object.keys(n);if(i.length){for(var a=this;a instanceof dt;)a=a.parent;i.forEach(function(c){return a.delete(c)})}return i},t.prototype.findChildRefIds=function(e){if(!_e.call(this.refs,e)){var r=this.refs[e]=Object.create(null),n=this.data[e];if(!n)return r;var i=new Set([n]);i.forEach(function(a){fe(a)&&(r[a.__ref]=!0),de(a)&&Object.keys(a).forEach(function(c){var f=a[c];de(f)&&i.add(f)})})}return this.refs[e]},t.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},t}(),Wo=function(){function t(e,r){r===void 0&&(r=null),this.caching=e,this.parent=r,this.d=null,this.resetCaching()}return t.prototype.resetCaching=function(){this.d=this.caching?Lo():null,this.keyMaker=new st(Ze)},t.prototype.depend=function(e,r){if(this.d){this.d(Yn(e,r));var n=ht(r);n!==r&&this.d(Yn(e,n)),this.parent&&this.parent.depend(e,r)}},t.prototype.dirty=function(e,r){this.d&&this.d.dirty(Yn(e,r),r==="__exists"?"forget":"setDirty")},t}();function Yn(t,e){return e+"#"+t}function Yo(t,e){cr(t)&&t.group.depend(e,"__exists")}(function(t){var e=function(r){Ue(n,r);function n(i){var a=i.policies,c=i.resultCaching,f=c===void 0?!0:c,d=i.seed,p=r.call(this,a,new Wo(f))||this;return p.stump=new Lu(p),p.storageTrie=new st(Ze),d&&p.replace(d),p}return n.prototype.addLayer=function(i,a){return this.stump.addLayer(i,a)},n.prototype.removeLayer=function(){return this},n.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},n}(t);t.Root=e})(sr||(sr={}));var dt=function(t){Ue(e,t);function e(r,n,i,a){var c=t.call(this,n.policies,a)||this;return c.id=r,c.parent=n,c.replay=i,c.group=a,i(c),c}return e.prototype.addLayer=function(r,n){return new e(r,this,n,this.group)},e.prototype.removeLayer=function(r){var n=this,i=this.parent.removeLayer(r);return r===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(a){var c=n.data[a],f=i.lookup(a);f?c?c!==f&&Object.keys(c).forEach(function(d){ge(c[d],f[d])||n.group.dirty(a,d)}):(n.group.dirty(a,"__exists"),Object.keys(f).forEach(function(d){n.group.dirty(a,d)})):n.delete(a)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},e.prototype.toObject=function(){return _(_({},this.parent.toObject()),this.data)},e.prototype.findChildRefIds=function(r){var n=this.parent.findChildRefIds(r);return _e.call(this.data,r)?_(_({},n),t.prototype.findChildRefIds.call(this,r)):n},e.prototype.getStorage=function(){for(var r=this.parent;r.parent;)r=r.parent;return r.getStorage.apply(r,arguments)},e}(sr),Lu=function(t){Ue(e,t);function e(r){return t.call(this,"EntityStore.Stump",r,function(){},new Wo(r.group.caching,r.group))||this}return e.prototype.removeLayer=function(){return this},e.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},e}(dt);function ju(t,e,r){var n=t[r],i=e[r];return ge(n,i)?n:i}function cr(t){return!!(t instanceof sr&&t.group.caching)}function qu(t){return de(t)?be(t)?t.slice(0):_({__proto__:Object.getPrototypeOf(t)},t):t}var Hn=function(){function t(){this.known=new(Yi?WeakSet:Set),this.pool=new st(Ze),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return t.prototype.isKnown=function(e){return de(e)&&this.known.has(e)},t.prototype.pass=function(e){if(de(e)){var r=qu(e);return this.passes.set(r,e),r}return e},t.prototype.admit=function(e){var r=this;if(de(e)){var n=this.passes.get(e);if(n)return n;var i=Object.getPrototypeOf(e);switch(i){case Array.prototype:{if(this.known.has(e))return e;var a=e.map(this.admit,this),c=this.pool.lookupArray(a);return c.array||(this.known.add(c.array=a),globalThis.__DEV__!==!1&&Object.freeze(a)),c.array}case null:case Object.prototype:{if(this.known.has(e))return e;var f=Object.getPrototypeOf(e),d=[f],p=this.sortedKeys(e);d.push(p.json);var y=d.length;p.sorted.forEach(function(E){d.push(r.admit(e[E]))});var c=this.pool.lookupArray(d);if(!c.object){var v=c.object=Object.create(f);this.known.add(v),p.sorted.forEach(function(E,I){v[E]=d[y+I]}),globalThis.__DEV__!==!1&&Object.freeze(v)}return c.object}}}return e},t.prototype.sortedKeys=function(e){var r=Object.keys(e),n=this.pool.lookupArray(r);if(!n.keys){r.sort();var i=JSON.stringify(r);(n.keys=this.keysByJSON.get(i))||this.keysByJSON.set(i,n.keys={sorted:r,json:i})}return n.keys},t}(),St=Object.assign(function(t){if(de(t)){Jn===void 0&&Ho();var e=Jn.admit(t),r=Kn.get(e);return r===void 0&&Kn.set(e,r=JSON.stringify(e)),r}return JSON.stringify(t)},{reset:Ho}),Jn,Kn;function Ho(){Jn=new Hn,Kn=new(Ze?WeakMap:Map)}function Jo(t){return[t.selectionSet,t.objectOrReference,t.context,t.context.canonizeResults]}var Vu=function(){function t(e){var r=this;this.knownResults=new(Ze?WeakMap:Map),this.config=Lt(e,{addTypename:e.addTypename!==!1,canonizeResults:Uo(e)}),this.canon=e.canon||new Hn,this.executeSelectionSet=Vr(function(n){var i,a=n.context.canonizeResults,c=Jo(n);c[3]=!a;var f=(i=r.executeSelectionSet).peek.apply(i,c);return f?a?_(_({},f),{result:r.canon.admit(f.result)}):f:(Yo(n.context.store,n.enclosingRef.__ref),r.execSelectionSetImpl(n))},{max:this.config.resultCacheMaxSize,keyArgs:Jo,makeCacheKey:function(n,i,a,c){if(cr(a.store))return a.store.makeCacheKey(n,fe(i)?i.__ref:i,a.varString,c)}}),this.executeSubSelectedArray=Vr(function(n){return Yo(n.context.store,n.enclosingRef.__ref),r.execSubSelectedArrayImpl(n)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(n){var i=n.field,a=n.array,c=n.context;if(cr(c.store))return c.store.makeCacheKey(i,a,c.varString)}})}return t.prototype.resetCanon=function(){this.canon=new Hn},t.prototype.diffQueryAgainstStore=function(e){var r=e.store,n=e.query,i=e.rootId,a=i===void 0?"ROOT_QUERY":i,c=e.variables,f=e.returnPartialData,d=f===void 0?!0:f,p=e.canonizeResults,y=p===void 0?this.config.canonizeResults:p,v=this.config.cache.policies;c=_(_({},gn(Ji(n))),c);var b=Nt(a),E=this.executeSelectionSet({selectionSet:tr(n).selectionSet,objectOrReference:b,enclosingRef:b,context:_({store:r,query:n,policies:v,variables:c,varString:St(c),canonizeResults:y},zo(n,this.config.fragments))}),I;if(E.missing&&(I=[new qo(Bu(E.missing),E.missing,n,c)],!d))throw I[0];return{result:E.result,complete:!I,missing:I}},t.prototype.isFresh=function(e,r,n,i){if(cr(i.store)&&this.knownResults.get(e)===n){var a=this.executeSelectionSet.peek(n,r,i,this.canon.isKnown(e));if(a&&e===a.result)return!0}return!1},t.prototype.execSelectionSetImpl=function(e){var r=this,n=e.selectionSet,i=e.objectOrReference,a=e.enclosingRef,c=e.context;if(fe(i)&&!c.policies.rootTypenamesById[i.__ref]&&!c.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var f=c.variables,d=c.policies,p=c.store,y=p.getFieldValue(i,"__typename"),v=[],b,E=new lt;this.config.addTypename&&typeof y=="string"&&!d.rootIdsByTypename[y]&&v.push({__typename:y});function I(T,P){var U;return T.missing&&(b=E.merge(b,(U={},U[P]=T.missing,U))),T.result}var O=new Set(n.selections);O.forEach(function(T){var P,U;if(Jt(T,f))if(ut(T)){var $=d.readField({fieldName:T.name.value,field:T,variables:c.variables,from:i},c),j=ct(T);$===void 0?En.added(T)||(b=E.merge(b,(P={},P[j]="Can't find field '".concat(T.name.value,"' on ").concat(fe(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),P))):be($)?$=I(r.executeSubSelectedArray({field:T,array:$,enclosingRef:a,context:c}),j):T.selectionSet?$!=null&&($=I(r.executeSelectionSet({selectionSet:T.selectionSet,objectOrReference:$,enclosingRef:fe($)?$:a,context:c}),j)):c.canonizeResults&&($=r.canon.pass($)),$!==void 0&&v.push((U={},U[j]=$,U))}else{var H=xr(T,c.lookupFragment);if(!H&&T.kind===V.FRAGMENT_SPREAD)throw Pe(7,T.name.value);H&&d.fragmentMatches(H,y)&&H.selectionSet.selections.forEach(O.add,O)}});var R=wn(v),k={result:R,missing:b},A=c.canonizeResults?this.canon.admit(k):Cn(k);return A.result&&this.knownResults.set(A.result,n),A},t.prototype.execSubSelectedArrayImpl=function(e){var r=this,n=e.field,i=e.array,a=e.enclosingRef,c=e.context,f,d=new lt;function p(y,v){var b;return y.missing&&(f=d.merge(f,(b={},b[v]=y.missing,b))),y.result}return n.selectionSet&&(i=i.filter(c.store.canRead)),i=i.map(function(y,v){return y===null?null:be(y)?p(r.executeSubSelectedArray({field:n,array:y,enclosingRef:a,context:c}),v):n.selectionSet?p(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:y,enclosingRef:fe(y)?y:a,context:c}),v):(globalThis.__DEV__!==!1&&Uu(c.store,n,y),y)}),{result:c.canonizeResults?this.canon.admit(i):i,missing:f}},t}();function Bu(t){try{JSON.stringify(t,function(e,r){if(typeof r=="string")throw r;return r})}catch(e){return e}}function Uu(t,e,r){if(!e.selectionSet){var n=new Set([r]);n.forEach(function(i){de(i)&&(J(!fe(i),8,$u(t,i),e.name.value),Object.values(i).forEach(n.add,n))})}}var Xn=new To,Ko=new WeakMap;function ur(t){var e=Ko.get(t);return e||Ko.set(t,e={vars:new Set,dep:Lo()}),e}function Xo(t){ur(t).vars.forEach(function(e){return e.forgetCache(t)})}function Qu(t){ur(t).vars.forEach(function(e){return e.attachCache(t)})}function zu(t){var e=new Set,r=new Set,n=function(a){if(arguments.length>0){if(t!==a){t=a,e.forEach(function(d){ur(d).dep.dirty(n),Gu(d)});var c=Array.from(r);r.clear(),c.forEach(function(d){return d(t)})}}else{var f=Xn.getValue();f&&(i(f),ur(f).dep(n))}return t};n.onNextChange=function(a){return r.add(a),function(){r.delete(a)}};var i=n.attachCache=function(a){return e.add(a),ur(a).vars.add(n),n};return n.forgetCache=function(a){return e.delete(a)},n}function Gu(t){t.broadcastWatches&&t.broadcastWatches()}var Zo=Object.create(null);function Zn(t){var e=JSON.stringify(t);return Zo[e]||(Zo[e]=Object.create(null))}function ea(t){var e=Zn(t);return e.keyFieldsFn||(e.keyFieldsFn=function(r,n){var i=function(c,f){return n.readField(f,c)},a=n.keyObject=ei(t,function(c){var f=Bt(n.storeObject,c,i);return f===void 0&&r!==n.storeObject&&_e.call(r,c[0])&&(f=Bt(r,c,na)),J(f!==void 0,2,c.join("."),r),f});return"".concat(n.typename,":").concat(JSON.stringify(a))})}function ta(t){var e=Zn(t);return e.keyArgsFn||(e.keyArgsFn=function(r,n){var i=n.field,a=n.variables,c=n.fieldName,f=ei(t,function(p){var y=p[0],v=y.charAt(0);if(v==="@"){if(i&&Ye(i.directives)){var b=y.slice(1),E=i.directives.find(function(k){return k.name.value===b}),I=E&&Fr(E,a);return I&&Bt(I,p.slice(1))}return}if(v==="$"){var O=y.slice(1);if(a&&_e.call(a,O)){var R=p.slice(0);return R[0]=O,Bt(a,R)}return}if(r)return Bt(r,p)}),d=JSON.stringify(f);return(r||d!=="{}")&&(c+=":"+d),c})}function ei(t,e){var r=new lt;return ra(t).reduce(function(n,i){var a,c=e(i);if(c!==void 0){for(var f=i.length-1;f>=0;--f)c=(a={},a[i[f]]=c,a);n=r.merge(n,c)}return n},Object.create(null))}function ra(t){var e=Zn(t);if(!e.paths){var r=e.paths=[],n=[];t.forEach(function(i,a){be(i)?(ra(i).forEach(function(c){return r.push(n.concat(c))}),n.length=0):(n.push(i),be(t[a+1])||(r.push(n.slice(0)),n.length=0))})}return e.paths}function na(t,e){return t[e]}function Bt(t,e,r){return r=r||na,ia(e.reduce(function n(i,a){return be(i)?i.map(function(c){return n(c,a)}):i&&r(i,a)},t))}function ia(t){return de(t)?be(t)?t.map(ia):ei(Object.keys(t).sort(),function(e){return Bt(t,e)}):t}mn.setStringify(St);function ti(t){return t.args!==void 0?t.args:t.field?Fr(t.field,t.variables):null}var Wu=function(){},oa=function(t,e){return e.fieldName},aa=function(t,e,r){var n=r.mergeObjects;return n(t,e)},sa=function(t,e){return e},Yu=function(){function t(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=_({dataIdFromObject:Vo},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return t.prototype.identify=function(e,r){var n,i=this,a=r&&(r.typename||((n=r.storeObject)===null||n===void 0?void 0:n.__typename))||e.__typename;if(a===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var c=r&&r.storeObject||e,f=_(_({},r),{typename:a,storeObject:c,readField:r&&r.readField||function(){var b=ri(arguments,c);return i.readField(b,{store:i.cache.data,variables:b.variables})}}),d,p=a&&this.getTypePolicy(a),y=p&&p.keyFn||this.config.dataIdFromObject;y;){var v=y(_(_({},e),c),f);if(be(v))y=ea(v);else{d=v;break}}return d=d?String(d):void 0,f.keyObject?[d,f.keyObject]:[d]},t.prototype.addTypePolicies=function(e){var r=this;Object.keys(e).forEach(function(n){var i=e[n],a=i.queryType,c=i.mutationType,f=i.subscriptionType,d=nt(i,["queryType","mutationType","subscriptionType"]);a&&r.setRootTypename("Query",n),c&&r.setRootTypename("Mutation",n),f&&r.setRootTypename("Subscription",n),_e.call(r.toBeAdded,n)?r.toBeAdded[n].push(d):r.toBeAdded[n]=[d]})},t.prototype.updateTypePolicy=function(e,r){var n=this,i=this.getTypePolicy(e),a=r.keyFields,c=r.fields;function f(d,p){d.merge=typeof p=="function"?p:p===!0?aa:p===!1?sa:d.merge}f(i,r.merge),i.keyFn=a===!1?Wu:be(a)?ea(a):typeof a=="function"?a:i.keyFn,c&&Object.keys(c).forEach(function(d){var p=n.getFieldPolicy(e,d,!0),y=c[d];if(typeof y=="function")p.read=y;else{var v=y.keyArgs,b=y.read,E=y.merge;p.keyFn=v===!1?oa:be(v)?ta(v):typeof v=="function"?v:p.keyFn,typeof b=="function"&&(p.read=b),f(p,E)}p.read&&p.merge&&(p.keyFn=p.keyFn||oa)})},t.prototype.setRootTypename=function(e,r){r===void 0&&(r=e);var n="ROOT_"+e.toUpperCase(),i=this.rootTypenamesById[n];r!==i&&(J(!i||i===e,3,e),i&&delete this.rootIdsByTypename[i],this.rootIdsByTypename[r]=n,this.rootTypenamesById[n]=r)},t.prototype.addPossibleTypes=function(e){var r=this;this.usingPossibleTypes=!0,Object.keys(e).forEach(function(n){r.getSupertypeSet(n,!0),e[n].forEach(function(i){r.getSupertypeSet(i,!0).add(n);var a=i.match(Qo);(!a||a[0]!==i)&&r.fuzzySubtypes.set(i,new RegExp(i))})})},t.prototype.getTypePolicy=function(e){var r=this;if(!_e.call(this.typePolicies,e)){var n=this.typePolicies[e]=Object.create(null);n.fields=Object.create(null);var i=this.supertypeMap.get(e);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach(function(c,f){if(c.test(e)){var d=r.supertypeMap.get(f);d&&d.forEach(function(p){return i.add(p)})}})),i&&i.size&&i.forEach(function(c){var f=r.getTypePolicy(c),d=f.fields,p=nt(f,["fields"]);Object.assign(n,p),Object.assign(n.fields,d)})}var a=this.toBeAdded[e];return a&&a.length&&a.splice(0).forEach(function(c){r.updateTypePolicy(e,c)}),this.typePolicies[e]},t.prototype.getFieldPolicy=function(e,r,n){if(e){var i=this.getTypePolicy(e).fields;return i[r]||n&&(i[r]=Object.create(null))}},t.prototype.getSupertypeSet=function(e,r){var n=this.supertypeMap.get(e);return!n&&r&&this.supertypeMap.set(e,n=new Set),n},t.prototype.fragmentMatches=function(e,r,n,i){var a=this;if(!e.typeCondition)return!0;if(!r)return!1;var c=e.typeCondition.name.value;if(r===c)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(c))for(var f=this.getSupertypeSet(r,!0),d=[f],p=function(I){var O=a.getSupertypeSet(I,!1);O&&O.size&&d.indexOf(O)<0&&d.push(O)},y=!!(n&&this.fuzzySubtypes.size),v=!1,b=0;b<d.length;++b){var E=d[b];if(E.has(c))return f.has(c)||(v&&globalThis.__DEV__!==!1&&J.warn(4,r,c),f.add(c)),!0;E.forEach(p),y&&b===d.length-1&&Gn(e.selectionSet,n,i)&&(y=!1,v=!0,this.fuzzySubtypes.forEach(function(I,O){var R=r.match(I);R&&R[0]===r&&p(O)}))}return!1},t.prototype.hasKeyArgs=function(e,r){var n=this.getFieldPolicy(e,r,!1);return!!(n&&n.keyFn)},t.prototype.getStoreFieldName=function(e){var r=e.typename,n=e.fieldName,i=this.getFieldPolicy(r,n,!1),a,c=i&&i.keyFn;if(c&&r)for(var f={typename:r,fieldName:n,field:e.field||null,variables:e.variables},d=ti(e);c;){var p=c(d,f);if(be(p))c=ta(p);else{a=p||n;break}}return a===void 0&&(a=e.field?hc(e.field,e.variables):mn(n,ti(e))),a===!1?n:n===ht(a)?a:n+":"+a},t.prototype.readField=function(e,r){var n=e.from;if(n){var i=e.field||e.fieldName;if(i){if(e.typename===void 0){var a=r.store.getFieldValue(n,"__typename");a&&(e.typename=a)}var c=this.getStoreFieldName(e),f=ht(c),d=r.store.getFieldValue(n,c),p=this.getFieldPolicy(e.typename,f,!1),y=p&&p.read;if(y){var v=ca(this,n,e,r,r.store.getStorage(fe(n)?n.__ref:n,c));return Xn.withValue(this.cache,y,[d,v])}return d}}},t.prototype.getReadFunction=function(e,r){var n=this.getFieldPolicy(e,r,!1);return n&&n.read},t.prototype.getMergeFunction=function(e,r,n){var i=this.getFieldPolicy(e,r,!1),a=i&&i.merge;return!a&&n&&(i=this.getTypePolicy(n),a=i&&i.merge),a},t.prototype.runMergeFunction=function(e,r,n,i,a){var c=n.field,f=n.typename,d=n.merge;return d===aa?ua(i.store)(e,r):d===sa?r:(i.overwrite&&(e=void 0),d(e,r,ca(this,void 0,{typename:f,fieldName:c.name.value,field:c,variables:i.variables},i,a||Object.create(null))))},t}();function ca(t,e,r,n,i){var a=t.getStoreFieldName(r),c=ht(a),f=r.variables||n.variables,d=n.store,p=d.toReference,y=d.canRead;return{args:ti(r),field:r.field||null,fieldName:c,storeFieldName:a,variables:f,isReference:fe,toReference:p,storage:i,cache:t.cache,canRead:y,readField:function(){return t.readField(ri(arguments,e,f),n)},mergeObjects:ua(n.store)}}function ri(t,e,r){var n=t[0],i=t[1],a=t.length,c;return typeof n=="string"?c={fieldName:n,from:a>1?i:e}:(c=_({},n),_e.call(c,"from")||(c.from=e)),globalThis.__DEV__!==!1&&c.from===void 0&&globalThis.__DEV__!==!1&&J.warn(5,Ri(Array.from(t))),c.variables===void 0&&(c.variables=r),c}function ua(t){return function(r,n){if(be(r)||be(n))throw Pe(6);if(de(r)&&de(n)){var i=t.getFieldValue(r,"__typename"),a=t.getFieldValue(n,"__typename"),c=i&&a&&i!==a;if(c)return n;if(fe(r)&&Vt(n))return t.merge(r.__ref,n),r;if(Vt(r)&&fe(n))return t.merge(r,n.__ref),n;if(Vt(r)&&Vt(n))return _(_({},r),n)}return n}}function ni(t,e,r){var n="".concat(e).concat(r),i=t.flavors.get(n);return i||t.flavors.set(n,i=t.clientOnly===e&&t.deferred===r?t:_(_({},t),{clientOnly:e,deferred:r})),i}var Hu=function(){function t(e,r,n){this.cache=e,this.reader=r,this.fragments=n}return t.prototype.writeToStore=function(e,r){var n=this,i=r.query,a=r.result,c=r.dataId,f=r.variables,d=r.overwrite,p=er(i),y=Mu();f=_(_({},gn(p)),f);var v=_(_({store:e,written:Object.create(null),merge:function(E,I){return y.merge(E,I)},variables:f,varString:St(f)},zo(i,this.fragments)),{overwrite:!!d,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),b=this.processSelectionSet({result:a||Object.create(null),dataId:c,selectionSet:p.selectionSet,mergeTree:{map:new Map},context:v});if(!fe(b))throw Pe(9,a);return v.incomingById.forEach(function(E,I){var O=E.storeObject,R=E.mergeTree,k=E.fieldNodeSet,A=Nt(I);if(R&&R.map.size){var T=n.applyMerges(R,A,O,v);if(fe(T))return;O=T}if(globalThis.__DEV__!==!1&&!v.overwrite){var P=Object.create(null);k.forEach(function(j){j.selectionSet&&(P[j.name.value]=!0)});var U=function(j){return P[ht(j)]===!0},$=function(j){var H=R&&R.map.get(j);return!!(H&&H.info&&H.info.merge)};Object.keys(O).forEach(function(j){U(j)&&!$(j)&&Ju(A,O,j,v.store)})}e.merge(I,O)}),e.retain(b.__ref),b},t.prototype.processSelectionSet=function(e){var r=this,n=e.dataId,i=e.result,a=e.selectionSet,c=e.context,f=e.mergeTree,d=this.cache.policies,p=Object.create(null),y=n&&d.rootTypenamesById[n]||yn(i,a,c.fragmentMap)||n&&c.store.get(n,"__typename");typeof y=="string"&&(p.__typename=y);var v=function(){var T=ri(arguments,p,c.variables);if(fe(T.from)){var P=c.incomingById.get(T.from.__ref);if(P){var U=d.readField(_(_({},T),{from:P.storeObject}),c);if(U!==void 0)return U}}return d.readField(T,c)},b=new Set;this.flattenFields(a,i,c,y).forEach(function(T,P){var U,$=ct(P),j=i[$];if(b.add(P),j!==void 0){var H=d.getStoreFieldName({typename:y,fieldName:P.name.value,field:P,variables:T.variables}),oe=fa(f,H),ae=r.processFieldValue(j,P,P.selectionSet?ni(T,!1,!1):T,oe),ve=void 0;P.selectionSet&&(fe(ae)||Vt(ae))&&(ve=v("__typename",ae));var Fe=d.getMergeFunction(y,P.name.value,ve);Fe?oe.info={field:P,typename:y,merge:Fe}:ha(f,H),p=T.merge(p,(U={},U[H]=ae,U))}else globalThis.__DEV__!==!1&&!T.clientOnly&&!T.deferred&&!En.added(P)&&!d.getReadFunction(y,P.name.value)&&globalThis.__DEV__!==!1&&J.error(10,ct(P),i)});try{var E=d.identify(i,{typename:y,selectionSet:a,fragmentMap:c.fragmentMap,storeObject:p,readField:v}),I=E[0],O=E[1];n=n||I,O&&(p=c.merge(p,O))}catch(T){if(!n)throw T}if(typeof n=="string"){var R=Nt(n),k=c.written[n]||(c.written[n]=[]);if(k.indexOf(a)>=0||(k.push(a),this.reader&&this.reader.isFresh(i,R,a,c)))return R;var A=c.incomingById.get(n);return A?(A.storeObject=c.merge(A.storeObject,p),A.mergeTree=ii(A.mergeTree,f),b.forEach(function(T){return A.fieldNodeSet.add(T)})):c.incomingById.set(n,{storeObject:p,mergeTree:Ur(f)?void 0:f,fieldNodeSet:b}),R}return p},t.prototype.processFieldValue=function(e,r,n,i){var a=this;return!r.selectionSet||e===null?globalThis.__DEV__!==!1?fo(e):e:be(e)?e.map(function(c,f){var d=a.processFieldValue(c,r,n,fa(i,f));return ha(i,f),d}):this.processSelectionSet({result:e,selectionSet:r.selectionSet,context:n,mergeTree:i})},t.prototype.flattenFields=function(e,r,n,i){i===void 0&&(i=yn(r,e,n.fragmentMap));var a=new Map,c=this.cache.policies,f=new st(!1);return function d(p,y){var v=f.lookup(p,y.clientOnly,y.deferred);v.visited||(v.visited=!0,p.selections.forEach(function(b){if(Jt(b,n.variables)){var E=y.clientOnly,I=y.deferred;if(!(E&&I)&&Ye(b.directives)&&b.directives.forEach(function(k){var A=k.name.value;if(A==="client"&&(E=!0),A==="defer"){var T=Fr(k,n.variables);(!T||T.if!==!1)&&(I=!0)}}),ut(b)){var O=a.get(b);O&&(E=E&&O.clientOnly,I=I&&O.deferred),a.set(b,ni(n,E,I))}else{var R=xr(b,n.lookupFragment);if(!R&&b.kind===V.FRAGMENT_SPREAD)throw Pe(11,b.name.value);R&&c.fragmentMatches(R,i,r,n.variables)&&d(R.selectionSet,ni(n,E,I))}}}))}(e,n),a},t.prototype.applyMerges=function(e,r,n,i,a){var c,f=this;if(e.map.size&&!fe(n)){var d=!be(n)&&(fe(r)||Vt(r))?r:void 0,p=n;d&&!a&&(a=[fe(d)?d.__ref:d]);var y,v=function(b,E){return be(b)?typeof E=="number"?b[E]:void 0:i.store.getFieldValue(b,String(E))};e.map.forEach(function(b,E){var I=v(d,E),O=v(p,E);if(O!==void 0){a&&a.push(E);var R=f.applyMerges(b,I,O,i,a);R!==O&&(y=y||new Map,y.set(E,R)),a&&J(a.pop()===E)}}),y&&(n=be(p)?p.slice(0):_({},p),y.forEach(function(b,E){n[E]=b}))}return e.info?this.cache.policies.runMergeFunction(r,n,e.info,i,a&&(c=i.store).getStorage.apply(c,a)):n},t}(),la=[];function fa(t,e){var r=t.map;return r.has(e)||r.set(e,la.pop()||{map:new Map}),r.get(e)}function ii(t,e){if(t===e||!e||Ur(e))return t;if(!t||Ur(t))return e;var r=t.info&&e.info?_(_({},t.info),e.info):t.info||e.info,n=t.map.size&&e.map.size,i=n?new Map:t.map.size?t.map:e.map,a={info:r,map:i};if(n){var c=new Set(e.map.keys());t.map.forEach(function(f,d){a.map.set(d,ii(f,e.map.get(d))),c.delete(d)}),c.forEach(function(f){a.map.set(f,ii(e.map.get(f),t.map.get(f)))})}return a}function Ur(t){return!t||!(t.info||t.map.size)}function ha(t,e){var r=t.map,n=r.get(e);n&&Ur(n)&&(la.push(n),r.delete(e))}var da=new Set;function Ju(t,e,r,n){var i=function(v){var b=n.getFieldValue(v,r);return typeof b=="object"&&b},a=i(t);if(a){var c=i(e);if(c&&!fe(a)&&!ge(a,c)&&!Object.keys(a).every(function(v){return n.getFieldValue(c,v)!==void 0})){var f=n.getFieldValue(t,"__typename")||n.getFieldValue(e,"__typename"),d=ht(r),p="".concat(f,".").concat(d);if(!da.has(p)){da.add(p);var y=[];!be(a)&&!be(c)&&[a,c].forEach(function(v){var b=n.getFieldValue(v,"__typename");typeof b=="string"&&!y.includes(b)&&y.push(b)}),globalThis.__DEV__!==!1&&J.warn(12,d,f,y.length?"either ensure all objects of type "+y.join(" and ")+" have an ID or a custom merge function, or ":"",p,a,c)}}}}var Ku=function(t){Ue(e,t);function e(r){r===void 0&&(r={});var n=t.call(this)||this;return n.watches=new Set,n.addTypenameTransform=new Ki(En),n.assumeImmutableResults=!0,n.makeVar=zu,n.txCount=0,n.config=Pu(r),n.addTypename=!!n.config.addTypename,n.policies=new Yu({cache:n,dataIdFromObject:n.config.dataIdFromObject,possibleTypes:n.config.possibleTypes,typePolicies:n.config.typePolicies}),n.init(),n}return e.prototype.init=function(){var r=this.data=new sr.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=r.stump,this.resetResultCache()},e.prototype.resetResultCache=function(r){var n=this,i=this.storeReader,a=this.config.fragments;this.storeWriter=new Hu(this,this.storeReader=new Vu({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Uo(this.config),canon:r?void 0:i&&i.canon,fragments:a}),a),this.maybeBroadcastWatch=Vr(function(c,f){return n.broadcastWatch(c,f)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(c){var f=c.optimistic?n.optimisticData:n.data;if(cr(f)){var d=c.optimistic,p=c.id,y=c.variables;return f.makeCacheKey(c.query,c.callback,St({optimistic:d,id:p,variables:y}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(c){return c.resetCaching()})},e.prototype.restore=function(r){return this.init(),r&&this.data.replace(r),this},e.prototype.extract=function(r){return r===void 0&&(r=!1),(r?this.optimisticData:this.data).extract()},e.prototype.read=function(r){var n=r.returnPartialData,i=n===void 0?!1:n;try{return this.storeReader.diffQueryAgainstStore(_(_({},r),{store:r.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:i})).result||null}catch(a){if(a instanceof qo)return null;throw a}},e.prototype.write=function(r){try{return++this.txCount,this.storeWriter.writeToStore(this.data,r)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.modify=function(r){if(_e.call(r,"id")&&!r.id)return!1;var n=r.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(r.id||"ROOT_QUERY",r.fields)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.diff=function(r){return this.storeReader.diffQueryAgainstStore(_(_({},r),{store:r.optimistic?this.optimisticData:this.data,rootId:r.id||"ROOT_QUERY",config:this.config}))},e.prototype.watch=function(r){var n=this;return this.watches.size||Qu(this),this.watches.add(r),r.immediate&&this.maybeBroadcastWatch(r),function(){n.watches.delete(r)&&!n.watches.size&&Xo(n),n.maybeBroadcastWatch.forget(r)}},e.prototype.gc=function(r){St.reset();var n=this.optimisticData.gc();return r&&!this.txCount&&(r.resetResultCache?this.resetResultCache(r.resetResultIdentities):r.resetResultIdentities&&this.storeReader.resetCanon()),n},e.prototype.retain=function(r,n){return(n?this.optimisticData:this.data).retain(r)},e.prototype.release=function(r,n){return(n?this.optimisticData:this.data).release(r)},e.prototype.identify=function(r){if(fe(r))return r.__ref;try{return this.policies.identify(r)[0]}catch(n){globalThis.__DEV__!==!1&&J.warn(n)}},e.prototype.evict=function(r){if(!r.id){if(_e.call(r,"id"))return!1;r=_(_({},r),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(r,this.data)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.reset=function(r){var n=this;return this.init(),St.reset(),r&&r.discardWatches?(this.watches.forEach(function(i){return n.maybeBroadcastWatch.forget(i)}),this.watches.clear(),Xo(this)):this.broadcastWatches(),Promise.resolve()},e.prototype.removeOptimistic=function(r){var n=this.optimisticData.removeLayer(r);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())},e.prototype.batch=function(r){var n=this,i=r.update,a=r.optimistic,c=a===void 0?!0:a,f=r.removeOptimistic,d=r.onWatchUpdated,p,y=function(b){var E=n,I=E.data,O=E.optimisticData;++n.txCount,b&&(n.data=n.optimisticData=b);try{return p=i(n)}finally{--n.txCount,n.data=I,n.optimisticData=O}},v=new Set;return d&&!this.txCount&&this.broadcastWatches(_(_({},r),{onWatchUpdated:function(b){return v.add(b),!1}})),typeof c=="string"?this.optimisticData=this.optimisticData.addLayer(c,y):c===!1?y(this.data):y(),typeof f=="string"&&(this.optimisticData=this.optimisticData.removeLayer(f)),d&&v.size?(this.broadcastWatches(_(_({},r),{onWatchUpdated:function(b,E){var I=d.call(this,b,E);return I!==!1&&v.delete(b),I}})),v.size&&v.forEach(function(b){return n.maybeBroadcastWatch.dirty(b)})):this.broadcastWatches(r),p},e.prototype.performTransaction=function(r,n){return this.batch({update:r,optimistic:n||n!==null})},e.prototype.transformDocument=function(r){return this.addTypenameToDocument(this.addFragmentsToDocument(r))},e.prototype.broadcastWatches=function(r){var n=this;this.txCount||this.watches.forEach(function(i){return n.maybeBroadcastWatch(i,r)})},e.prototype.addFragmentsToDocument=function(r){var n=this.config.fragments;return n?n.transform(r):r},e.prototype.addTypenameToDocument=function(r){return this.addTypename?this.addTypenameTransform.transformDocument(r):r},e.prototype.broadcastWatch=function(r,n){var i=r.lastDiff,a=this.diff(r);n&&(r.optimistic&&typeof n.optimistic=="string"&&(a.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,r,a,i)===!1)||(!i||!ge(i.result,a.result))&&r.callback(r.lastDiff=a,i)},e}(Au),he;(function(t){t[t.loading=1]="loading",t[t.setVariables=2]="setVariables",t[t.fetchMore=3]="fetchMore",t[t.refetch=4]="refetch",t[t.poll=6]="poll",t[t.ready=7]="ready",t[t.error=8]="error"})(he||(he={}));function lr(t){return t?t<7:!1}function Xu(t,e,r,n){var i=e.data,a=nt(e,["data"]),c=r.data,f=nt(r,["data"]);return ge(a,f)&&Qr(tr(t).selectionSet,i,c,{fragmentMap:Nr(Ar(t)),variables:n})}function Qr(t,e,r,n){if(e===r)return!0;var i=new Set;return t.selections.every(function(a){if(i.has(a)||(i.add(a),!Jt(a,n.variables))||pa(a))return!0;if(ut(a)){var c=ct(a),f=e&&e[c],d=r&&r[c],p=a.selectionSet;if(!p)return ge(f,d);var y=Array.isArray(f),v=Array.isArray(d);if(y!==v)return!1;if(y&&v){var b=f.length;if(d.length!==b)return!1;for(var E=0;E<b;++E)if(!Qr(p,f[E],d[E],n))return!1;return!0}return Qr(p,f,d,n)}else{var I=xr(a,n.fragmentMap);if(I)return pa(I)?!0:Qr(I.selectionSet,e,r,n)}})}function pa(t){return!!t.directives&&t.directives.some(Zu)}function Zu(t){return t.name.value==="nonreactive"}var ma=Object.assign,el=Object.hasOwnProperty,oi=function(t){Ue(e,t);function e(r){var n=r.queryManager,i=r.queryInfo,a=r.options,c=t.call(this,function(R){try{var k=R._subscription._observer;k&&!k.error&&(k.error=tl)}catch{}var A=!c.observers.size;c.observers.add(R);var T=c.last;return T&&T.error?R.error&&R.error(T.error):T&&T.result&&R.next&&R.next(T.result),A&&c.reobserve().catch(function(){}),function(){c.observers.delete(R)&&!c.observers.size&&c.tearDownQuery()}})||this;c.observers=new Set,c.subscriptions=new Set,c.queryInfo=i,c.queryManager=n,c.waitForOwnResult=ai(a.fetchPolicy),c.isTornDown=!1;var f=n.defaultOptions.watchQuery,d=f===void 0?{}:f,p=d.fetchPolicy,y=p===void 0?"cache-first":p,v=a.fetchPolicy,b=v===void 0?y:v,E=a.initialFetchPolicy,I=E===void 0?b==="standby"?y:b:E;c.options=_(_({},a),{initialFetchPolicy:I,fetchPolicy:b}),c.queryId=i.queryId||n.generateQueryId();var O=er(c.query);return c.queryName=O&&O.name&&O.name.value,c}return Object.defineProperty(e.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),e.prototype.result=function(){var r=this;return new Promise(function(n,i){var a={next:function(f){n(f),r.observers.delete(a),r.observers.size||r.queryManager.removeQuery(r.queryId),setTimeout(function(){c.unsubscribe()},0)},error:i},c=r.subscribe(a)})},e.prototype.getCurrentResult=function(r){r===void 0&&(r=!0);var n=this.getLastResult(!0),i=this.queryInfo.networkStatus||n&&n.networkStatus||he.ready,a=_(_({},n),{loading:lr(i),networkStatus:i}),c=this.options.fetchPolicy,f=c===void 0?"cache-first":c;if(!(ai(f)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var d=this.queryInfo.getDiff();(d.complete||this.options.returnPartialData)&&(a.data=d.result),ge(a.data,{})&&(a.data=void 0),d.complete?(delete a.partial,d.complete&&a.networkStatus===he.loading&&(f==="cache-first"||f==="cache-only")&&(a.networkStatus=he.ready,a.loading=!1)):a.partial=!0,globalThis.__DEV__!==!1&&!d.complete&&!this.options.partialRefetch&&!a.loading&&!a.data&&!a.error&&va(d.missing)}return r&&this.updateLastResult(a),a},e.prototype.isDifferentFromLastResult=function(r,n){if(!this.last)return!0;var i=this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective?!Xu(this.query,this.last.result,r,this.variables):!ge(this.last.result,r);return i||n&&!ge(this.last.variables,n)},e.prototype.getLast=function(r,n){var i=this.last;if(i&&i[r]&&(!n||ge(i.variables,this.variables)))return i[r]},e.prototype.getLastResult=function(r){return this.getLast("result",r)},e.prototype.getLastError=function(r){return this.getLast("error",r)},e.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},e.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},e.prototype.refetch=function(r){var n,i={pollInterval:0},a=this.options.fetchPolicy;if(a==="cache-and-network"?i.fetchPolicy=a:a==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",globalThis.__DEV__!==!1&&r&&el.call(r,"variables")){var c=Ji(this.query),f=c.variableDefinitions;(!f||!f.some(function(d){return d.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&J.warn(18,r,((n=c.name)===null||n===void 0?void 0:n.value)||c)}return r&&!ge(this.options.variables,r)&&(i.variables=this.options.variables=_(_({},this.options.variables),r)),this.queryInfo.resetLastWrite(),this.reobserve(i,he.refetch)},e.prototype.fetchMore=function(r){var n=this,i=_(_({},r.query?r:_(_(_(_({},this.options),{query:this.options.query}),r),{variables:_(_({},this.options.variables),r.variables)})),{fetchPolicy:"no-cache"});i.query=this.transformDocument(i.query);var a=this.queryManager.generateQueryId();this.lastQuery=r.query?this.transformDocument(this.options.query):i.query;var c=this.queryInfo,f=c.networkStatus;c.networkStatus=he.fetchMore,i.notifyOnNetworkStatusChange&&this.observe();var d=new Set;return this.queryManager.fetchQuery(a,i,he.fetchMore).then(function(p){return n.queryManager.removeQuery(a),c.networkStatus===he.fetchMore&&(c.networkStatus=f),n.queryManager.cache.batch({update:function(y){var v=r.updateQuery;v?y.updateQuery({query:n.query,variables:n.variables,returnPartialData:!0,optimistic:!1},function(b){return v(b,{fetchMoreResult:p.data,variables:i.variables})}):y.writeQuery({query:i.query,variables:i.variables,data:p.data})},onWatchUpdated:function(y){d.add(y.query)}}),p}).finally(function(){d.has(n.query)||ya(n)})},e.prototype.subscribeToMore=function(r){var n=this,i=this.queryManager.startGraphQLSubscription({query:r.document,variables:r.variables,context:r.context}).subscribe({next:function(a){var c=r.updateQuery;c&&n.updateQuery(function(f,d){var p=d.variables;return c(f,{subscriptionData:a,variables:p})})},error:function(a){if(r.onError){r.onError(a);return}globalThis.__DEV__!==!1&&J.error(19,a)}});return this.subscriptions.add(i),function(){n.subscriptions.delete(i)&&i.unsubscribe()}},e.prototype.setOptions=function(r){return this.reobserve(r)},e.prototype.silentSetOptions=function(r){var n=Lt(this.options,r||{});ma(this.options,n)},e.prototype.setVariables=function(r){return ge(this.variables,r)?this.observers.size?this.result():Promise.resolve():(this.options.variables=r,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:r},he.setVariables):Promise.resolve())},e.prototype.updateQuery=function(r){var n=this.queryManager,i=n.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,a=r(i,{variables:this.variables});a&&(n.cache.writeQuery({query:this.options.query,data:a,variables:this.variables}),n.broadcastQueries())},e.prototype.startPolling=function(r){this.options.pollInterval=r,this.updatePolling()},e.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},e.prototype.applyNextFetchPolicy=function(r,n){if(n.nextFetchPolicy){var i=n.fetchPolicy,a=i===void 0?"cache-first":i,c=n.initialFetchPolicy,f=c===void 0?a:c;a==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy(a,{reason:r,options:n,observable:this,initialFetchPolicy:f}):r==="variables-changed"?n.fetchPolicy=f:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy},e.prototype.fetch=function(r,n){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,r,n)},e.prototype.updatePolling=function(){var r=this;if(!this.queryManager.ssrMode){var n=this,i=n.pollingInfo,a=n.options.pollInterval;if(!a){i&&(clearTimeout(i.timeout),delete this.pollingInfo);return}if(!(i&&i.interval===a)){J(a,20);var c=i||(this.pollingInfo={});c.interval=a;var f=function(){r.pollingInfo&&(lr(r.queryInfo.networkStatus)?d():r.reobserve({fetchPolicy:r.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},he.poll).then(d,d))},d=function(){var p=r.pollingInfo;p&&(clearTimeout(p.timeout),p.timeout=setTimeout(f,p.interval))};d()}}},e.prototype.updateLastResult=function(r,n){n===void 0&&(n=this.variables);var i=this.getLastError();return i&&this.last&&!ge(n,this.last.variables)&&(i=void 0),this.last=_({result:this.queryManager.assumeImmutableResults?r:fo(r),variables:n},i?{error:i}:null)},e.prototype.reobserveAsConcast=function(r,n){var i=this;this.isTornDown=!1;var a=n===he.refetch||n===he.fetchMore||n===he.poll,c=this.options.variables,f=this.options.fetchPolicy,d=Lt(this.options,r||{}),p=a?d:ma(this.options,d),y=this.transformDocument(p.query);this.lastQuery=y,a||(this.updatePolling(),r&&r.variables&&!ge(r.variables,c)&&p.fetchPolicy!=="standby"&&p.fetchPolicy===f&&(this.applyNextFetchPolicy("variables-changed",p),n===void 0&&(n=he.setVariables)));var v=y===p.query?p:_(_({},p),{query:y});this.waitForOwnResult&&(this.waitForOwnResult=ai(v.fetchPolicy));var b=function(){i.concast===O&&(i.waitForOwnResult=!1)},E=v.variables&&_({},v.variables),I=this.fetch(v,n),O=I.concast,R=I.fromLink,k={next:function(A){b(),i.reportResult(A,E)},error:function(A){b(),i.reportError(A,E)}};return!a&&(R||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=O,this.observer=k),O.addObserver(k),O},e.prototype.reobserve=function(r,n){return this.reobserveAsConcast(r,n).promise},e.prototype.resubscribeAfterError=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=this.last;this.resetLastResults();var a=this.subscribe.apply(this,r);return this.last=i,a},e.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},e.prototype.reportResult=function(r,n){var i=this.getLastError(),a=this.isDifferentFromLastResult(r,n);(i||!r.partial||this.options.returnPartialData)&&this.updateLastResult(r,n),(i||a)&&nr(this.observers,"next",r)},e.prototype.reportError=function(r,n){var i=_(_({},this.getLastResult()),{error:r,errors:r.graphQLErrors,networkStatus:he.error,loading:!1});this.updateLastResult(i,n),nr(this.observers,"error",this.last.error=r)},e.prototype.hasObservers=function(){return this.observers.size>0},e.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(r){return r.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},e.prototype.transformDocument=function(r){return this.queryManager.transform(r)},e}(pe);ho(oi);function ya(t){var e=t.options,r=e.fetchPolicy,n=e.nextFetchPolicy;return r==="cache-and-network"||r==="network-only"?t.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(){return this.nextFetchPolicy=n,typeof n=="function"?n.apply(this,arguments):r}}):t.reobserve()}function tl(t){globalThis.__DEV__!==!1&&J.error(21,t.message,t.stack)}function va(t){globalThis.__DEV__!==!1&&t&&globalThis.__DEV__!==!1&&J.debug(22,t)}function ai(t){return t==="network-only"||t==="no-cache"||t==="standby"}var ga=function(){function t(e){var r=e.cache,n=e.client,i=e.resolvers,a=e.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=r,n&&(this.client=n),i&&this.addResolvers(i),a&&this.setFragmentMatcher(a)}return t.prototype.addResolvers=function(e){var r=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach(function(n){r.resolvers=no(r.resolvers,n)}):this.resolvers=no(this.resolvers,e)},t.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},t.prototype.getResolvers=function(){return this.resolvers||{}},t.prototype.runResolvers=function(e){var r=e.document,n=e.remoteResult,i=e.context,a=e.variables,c=e.onlyRunForcedResolvers,f=c===void 0?!1:c;return it(this,void 0,void 0,function(){return ot(this,function(d){return r?[2,this.resolveDocument(r,n.data,i,a,this.fragmentMatcher,f).then(function(p){return _(_({},n),{data:p.result})})]:[2,n]})})},t.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},t.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},t.prototype.clientQuery=function(e){return Kt(["client"],e)&&this.resolvers?e:null},t.prototype.serverQuery=function(e){return ro(e)},t.prototype.prepareContext=function(e){var r=this.cache;return _(_({},e),{cache:r,getCacheKey:function(n){return r.identify(n)}})},t.prototype.addExportedVariables=function(e,r,n){return r===void 0&&(r={}),n===void 0&&(n={}),it(this,void 0,void 0,function(){return ot(this,function(i){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,r)||{},this.prepareContext(n),r).then(function(a){return _(_({},r),a.exportedVariables)})]:[2,_({},r)]})})},t.prototype.shouldForceResolvers=function(e){var r=!1;return Xe(e,{Directive:{enter:function(n){if(n.name.value==="client"&&n.arguments&&(r=n.arguments.some(function(i){return i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0}),r))return pn}}}),r},t.prototype.buildRootValueFromCache=function(e,r){return this.cache.diff({query:Ec(e),variables:r,returnPartialData:!0,optimistic:!1}).result},t.prototype.resolveDocument=function(e,r,n,i,a,c){return n===void 0&&(n={}),i===void 0&&(i={}),a===void 0&&(a=function(){return!0}),c===void 0&&(c=!1),it(this,void 0,void 0,function(){var f,d,p,y,v,b,E,I,O,R,k;return ot(this,function(A){return f=tr(e),d=Ar(e),p=Nr(d),y=this.collectSelectionsToResolve(f,p),v=f.operation,b=v?v.charAt(0).toUpperCase()+v.slice(1):"Query",E=this,I=E.cache,O=E.client,R={fragmentMap:p,context:_(_({},n),{cache:I,client:O}),variables:i,fragmentMatcher:a,defaultOperationType:b,exportedVariables:{},selectionsToResolve:y,onlyRunForcedResolvers:c},k=!1,[2,this.resolveSelectionSet(f.selectionSet,k,r,R).then(function(T){return{result:T,exportedVariables:R.exportedVariables}})]})})},t.prototype.resolveSelectionSet=function(e,r,n,i){return it(this,void 0,void 0,function(){var a,c,f,d,p,y=this;return ot(this,function(v){return a=i.fragmentMap,c=i.context,f=i.variables,d=[n],p=function(b){return it(y,void 0,void 0,function(){var E,I;return ot(this,function(O){return!r&&!i.selectionsToResolve.has(b)?[2]:Jt(b,f)?ut(b)?[2,this.resolveField(b,r,n,i).then(function(R){var k;typeof R<"u"&&d.push((k={},k[ct(b)]=R,k))})]:(mc(b)?E=b:(E=a[b.name.value],J(E,16,b.name.value)),E&&E.typeCondition&&(I=E.typeCondition.name.value,i.fragmentMatcher(n,I,c))?[2,this.resolveSelectionSet(E.selectionSet,r,n,i).then(function(R){d.push(R)})]:[2]):[2]})})},[2,Promise.all(e.selections.map(p)).then(function(){return wn(d)})]})})},t.prototype.resolveField=function(e,r,n,i){return it(this,void 0,void 0,function(){var a,c,f,d,p,y,v,b,E,I=this;return ot(this,function(O){return n?(a=i.variables,c=e.name.value,f=ct(e),d=c!==f,p=n[f]||n[c],y=Promise.resolve(p),(!i.onlyRunForcedResolvers||this.shouldForceResolvers(e))&&(v=n.__typename||i.defaultOperationType,b=this.resolvers&&this.resolvers[v],b&&(E=b[d?c:f],E&&(y=Promise.resolve(Xn.withValue(this.cache,E,[n,Fr(e,a),i.context,{field:e,fragmentMap:i.fragmentMap}]))))),[2,y.then(function(R){var k,A;if(R===void 0&&(R=p),e.directives&&e.directives.forEach(function(P){P.name.value==="export"&&P.arguments&&P.arguments.forEach(function(U){U.name.value==="as"&&U.value.kind==="StringValue"&&(i.exportedVariables[U.value.value]=R)})}),!e.selectionSet||R==null)return R;var T=(A=(k=e.directives)===null||k===void 0?void 0:k.some(function(P){return P.name.value==="client"}))!==null&&A!==void 0?A:!1;if(Array.isArray(R))return I.resolveSubSelectedArray(e,r||T,R,i);if(e.selectionSet)return I.resolveSelectionSet(e.selectionSet,r||T,R,i)})]):[2,null]})})},t.prototype.resolveSubSelectedArray=function(e,r,n,i){var a=this;return Promise.all(n.map(function(c){if(c===null)return null;if(Array.isArray(c))return a.resolveSubSelectedArray(e,r,c,i);if(e.selectionSet)return a.resolveSelectionSet(e.selectionSet,r,c,i)}))},t.prototype.collectSelectionsToResolve=function(e,r){var n=function(c){return!Array.isArray(c)},i=this.selectionsToResolveCache;function a(c){if(!i.has(c)){var f=new Set;i.set(c,f),Xe(c,{Directive:function(d,p,y,v,b){d.name.value==="client"&&b.forEach(function(E){n(E)&&Gi(E)&&f.add(E)})},FragmentSpread:function(d,p,y,v,b){var E=r[d.name.value];J(E,17,d.name.value);var I=a(E);I.size>0&&(b.forEach(function(O){n(O)&&Gi(O)&&f.add(O)}),f.add(d),I.forEach(function(O){f.add(O)}))}})}return i.get(c)}return a(e)},t}(),Ut=new(Ze?WeakMap:Map);function si(t,e){var r=t[e];typeof r=="function"&&(t[e]=function(){return Ut.set(t,(Ut.get(t)+1)%1e15),r.apply(this,arguments)})}function ba(t){t.notifyTimeout&&(clearTimeout(t.notifyTimeout),t.notifyTimeout=void 0)}var ci=function(){function t(e,r){r===void 0&&(r=e.generateQueryId()),this.queryId=r,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.subscriptions=new Set,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var n=this.cache=e.cache;Ut.has(n)||(Ut.set(n,0),si(n,"evict"),si(n,"modify"),si(n,"reset"))}return t.prototype.init=function(e){var r=e.networkStatus||he.loading;return this.variables&&this.networkStatus!==he.loading&&!ge(this.variables,e.variables)&&(r=he.setVariables),ge(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:r}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},t.prototype.reset=function(){ba(this),this.dirty=!1},t.prototype.getDiff=function(){var e=this.getDiffOptions();if(this.lastDiff&&ge(e,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var r=this.observableQuery;if(r&&r.options.fetchPolicy==="no-cache")return{complete:!1};var n=this.cache.diff(e);return this.updateLastDiff(n,e),n},t.prototype.updateLastDiff=function(e,r){this.lastDiff=e?{diff:e,options:r||this.getDiffOptions()}:void 0},t.prototype.getDiffOptions=function(e){var r;return e===void 0&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:(r=this.observableQuery)===null||r===void 0?void 0:r.options.canonizeResults}},t.prototype.setDiff=function(e){var r=this,n=this.lastDiff&&this.lastDiff.diff;this.updateLastDiff(e),!this.dirty&&!ge(n&&n.result,e&&e.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return r.notify()},0)))},t.prototype.setObservableQuery=function(e){var r=this;e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){var n=r.getDiff();n.fromOptimisticTransaction?e.observe():ya(e)})):delete this.oqListener)},t.prototype.notify=function(){var e=this;ba(this),this.shouldNotify()&&this.listeners.forEach(function(r){return r(e)}),this.dirty=!1},t.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(lr(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy;if(e!=="cache-only"&&e!=="cache-and-network")return!1}return!0},t.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=t.prototype.cancel,this.subscriptions.forEach(function(r){return r.unsubscribe()});var e=this.observableQuery;e&&e.stopPolling()}},t.prototype.cancel=function(){},t.prototype.updateWatch=function(e){var r=this;e===void 0&&(e=this.variables);var n=this.observableQuery;if(!(n&&n.options.fetchPolicy==="no-cache")){var i=_(_({},this.getDiffOptions(e)),{watcher:this,callback:function(a){return r.setDiff(a)}});(!this.lastWatch||!ge(i,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=i))}},t.prototype.resetLastWrite=function(){this.lastWrite=void 0},t.prototype.shouldWrite=function(e,r){var n=this.lastWrite;return!(n&&n.dmCount===Ut.get(this.cache)&&ge(r,n.variables)&&ge(e.data,n.result.data))},t.prototype.markResult=function(e,r,n,i){var a=this,c=new lt,f=Ye(e.errors)?e.errors.slice(0):[];if(this.reset(),"incremental"in e&&Ye(e.incremental)){var d=mo(this.getDiff().result,e);e.data=d}else if("hasNext"in e&&e.hasNext){var p=this.getDiff();e.data=c.merge(p.result,e.data)}this.graphQLErrors=f,n.fetchPolicy==="no-cache"?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(n.variables)):i!==0&&(ui(e,n.errorPolicy)?this.cache.performTransaction(function(y){if(a.shouldWrite(e,n.variables))y.writeQuery({query:r,data:e.data,variables:n.variables,overwrite:i===1}),a.lastWrite={result:e,variables:n.variables,dmCount:Ut.get(a.cache)};else if(a.lastDiff&&a.lastDiff.diff.complete){e.data=a.lastDiff.diff.result;return}var v=a.getDiffOptions(n.variables),b=y.diff(v);!a.stopped&&ge(a.variables,n.variables)&&a.updateWatch(n.variables),a.updateLastDiff(b,v),b.complete&&(e.data=b.result)}):this.lastWrite=void 0)},t.prototype.markReady=function(){return this.networkError=null,this.networkStatus=he.ready},t.prototype.markError=function(e){return this.networkStatus=he.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},t}();function ui(t,e){e===void 0&&(e="none");var r=e==="ignore"||e==="all",n=!Mr(t);return!n&&r&&t.data&&(n=!0),n}var rl=Object.prototype.hasOwnProperty,nl=function(){function t(e){var r=this,n=e.cache,i=e.link,a=e.defaultOptions,c=e.documentTransform,f=e.queryDeduplication,d=f===void 0?!1:f,p=e.onBroadcast,y=e.ssrMode,v=y===void 0?!1:y,b=e.clientAwareness,E=b===void 0?{}:b,I=e.localState,O=e.assumeImmutableResults,R=O===void 0?!!n.assumeImmutableResults:O;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(Ze?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map;var k=new Ki(function(A){return r.cache.transformDocument(A)},{cache:!1});this.cache=n,this.link=i,this.defaultOptions=a||Object.create(null),this.queryDeduplication=d,this.clientAwareness=E,this.localState=I||new ga({cache:n}),this.ssrMode=v,this.assumeImmutableResults=R,this.documentTransform=c?k.concat(c).concat(k):k,(this.onBroadcast=p)&&(this.mutationStore=Object.create(null))}return t.prototype.stop=function(){var e=this;this.queries.forEach(function(r,n){e.stopQueryNoBroadcast(n)}),this.cancelPendingFetches(Pe(23))},t.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach(function(r){return r(e)}),this.fetchCancelFns.clear()},t.prototype.mutate=function(e){var r,n,i=e.mutation,a=e.variables,c=e.optimisticResponse,f=e.updateQueries,d=e.refetchQueries,p=d===void 0?[]:d,y=e.awaitRefetchQueries,v=y===void 0?!1:y,b=e.update,E=e.onQueryUpdated,I=e.fetchPolicy,O=I===void 0?((r=this.defaultOptions.mutate)===null||r===void 0?void 0:r.fetchPolicy)||"network-only":I,R=e.errorPolicy,k=R===void 0?((n=this.defaultOptions.mutate)===null||n===void 0?void 0:n.errorPolicy)||"none":R,A=e.keepRootFields,T=e.context;return it(this,void 0,void 0,function(){var P,U,$,j;return ot(this,function(H){switch(H.label){case 0:return J(i,24),J(O==="network-only"||O==="no-cache",25),P=this.generateMutationId(),i=this.cache.transformForLink(this.transform(i)),U=this.getDocumentInfo(i).hasClientExports,a=this.getVariables(i,a),U?[4,this.localState.addExportedVariables(i,a,T)]:[3,2];case 1:a=H.sent(),H.label=2;case 2:return $=this.mutationStore&&(this.mutationStore[P]={mutation:i,variables:a,loading:!0,error:null}),c&&this.markMutationOptimistic(c,{mutationId:P,document:i,variables:a,fetchPolicy:O,errorPolicy:k,context:T,updateQueries:f,update:b,keepRootFields:A}),this.broadcastQueries(),j=this,[2,new Promise(function(oe,ae){return Nn(j.getObservableFromLink(i,_(_({},T),{optimisticResponse:c}),a,!1),function(ve){if(Mr(ve)&&k==="none")throw new wt({graphQLErrors:xn(ve)});$&&($.loading=!1,$.error=null);var Fe=_({},ve);return typeof p=="function"&&(p=p(Fe)),k==="ignore"&&Mr(Fe)&&delete Fe.errors,j.markMutationResult({mutationId:P,result:Fe,document:i,variables:a,fetchPolicy:O,errorPolicy:k,context:T,update:b,updateQueries:f,awaitRefetchQueries:v,refetchQueries:p,removeOptimistic:c?P:void 0,onQueryUpdated:E,keepRootFields:A})}).subscribe({next:function(ve){j.broadcastQueries(),(!("hasNext"in ve)||ve.hasNext===!1)&&oe(ve)},error:function(ve){$&&($.loading=!1,$.error=ve),c&&j.cache.removeOptimistic(P),j.broadcastQueries(),ae(ve instanceof wt?ve:new wt({networkError:ve}))}})})]}})})},t.prototype.markMutationResult=function(e,r){var n=this;r===void 0&&(r=this.cache);var i=e.result,a=[],c=e.fetchPolicy==="no-cache";if(!c&&ui(i,e.errorPolicy)){if(Mt(i)||a.push({result:i.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),Mt(i)&&Ye(i.incremental)){var f=r.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),d=void 0;f.result&&(d=mo(f.result,i)),typeof d<"u"&&(i.data=d,a.push({result:d,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var p=e.updateQueries;p&&this.queries.forEach(function(v,b){var E=v.observableQuery,I=E&&E.queryName;if(!(!I||!rl.call(p,I))){var O=p[I],R=n.queries.get(b),k=R.document,A=R.variables,T=r.diff({query:k,variables:A,returnPartialData:!0,optimistic:!1}),P=T.result,U=T.complete;if(U&&P){var $=O(P,{mutationResult:i,queryName:k&&vn(k)||void 0,queryVariables:A});$&&a.push({result:$,dataId:"ROOT_QUERY",query:k,variables:A})}}})}if(a.length>0||e.refetchQueries||e.update||e.onQueryUpdated||e.removeOptimistic){var y=[];if(this.refetchQueries({updateCache:function(v){c||a.forEach(function(O){return v.write(O)});var b=e.update,E=!Pc(i)||Mt(i)&&!i.hasNext;if(b){if(!c){var I=v.diff({id:"ROOT_MUTATION",query:n.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});I.complete&&(i=_(_({},i),{data:I.result}),"incremental"in i&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}E&&b(v,i,{context:e.context,variables:e.variables})}!c&&!e.keepRootFields&&E&&v.modify({id:"ROOT_MUTATION",fields:function(O,R){var k=R.fieldName,A=R.DELETE;return k==="__typename"?O:A}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach(function(v){return y.push(v)}),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(y).then(function(){return i})}return Promise.resolve(i)},t.prototype.markMutationOptimistic=function(e,r){var n=this,i=typeof e=="function"?e(r.variables):e;return this.cache.recordOptimisticTransaction(function(a){try{n.markMutationResult(_(_({},r),{result:{data:i}}),a)}catch(c){globalThis.__DEV__!==!1&&J.error(c)}},r.mutationId)},t.prototype.fetchQuery=function(e,r,n){return this.fetchConcastWithInfo(e,r,n).concast.promise},t.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach(function(r,n){e[n]={variables:r.variables,networkStatus:r.networkStatus,networkError:r.networkError,graphQLErrors:r.graphQLErrors}}),e},t.prototype.resetErrors=function(e){var r=this.queries.get(e);r&&(r.networkError=void 0,r.graphQLErrors=[])},t.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},t.prototype.getDocumentInfo=function(e){var r=this.transformCache;if(!r.has(e)){var n={hasClientExports:Ys(e),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:Kt(["nonreactive"],e),clientQuery:this.localState.clientQuery(e),serverQuery:to([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"}],e),defaultVars:gn(er(e)),asQuery:_(_({},e),{definitions:e.definitions.map(function(i){return i.kind==="OperationDefinition"&&i.operation!=="query"?_(_({},i),{operation:"query"}):i})})};r.set(e,n)}return r.get(e)},t.prototype.getVariables=function(e,r){return _(_({},this.getDocumentInfo(e).defaultVars),r)},t.prototype.watchQuery=function(e){var r=this.transform(e.query);e=_(_({},e),{variables:this.getVariables(r,e.variables)}),typeof e.notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!1);var n=new ci(this),i=new oi({queryManager:this,queryInfo:n,options:e});return i.lastQuery=r,this.queries.set(i.queryId,n),n.init({document:r,observableQuery:i,variables:i.variables}),i},t.prototype.query=function(e,r){var n=this;return r===void 0&&(r=this.generateQueryId()),J(e.query,26),J(e.query.kind==="Document",27),J(!e.returnPartialData,28),J(!e.pollInterval,29),this.fetchQuery(r,_(_({},e),{query:this.transform(e.query)})).finally(function(){return n.stopQuery(r)})},t.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},t.prototype.generateRequestId=function(){return this.requestIdCounter++},t.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},t.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},t.prototype.stopQueryInStoreNoBroadcast=function(e){var r=this.queries.get(e);r&&r.stop()},t.prototype.clearStore=function(e){return e===void 0&&(e={discardWatches:!0}),this.cancelPendingFetches(Pe(30)),this.queries.forEach(function(r){r.observableQuery?r.networkStatus=he.loading:r.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},t.prototype.getObservableQueries=function(e){var r=this;e===void 0&&(e="active");var n=new Map,i=new Map,a=new Set;return Array.isArray(e)&&e.forEach(function(c){typeof c=="string"?i.set(c,!1):rc(c)?i.set(r.transform(c),!1):de(c)&&c.query&&a.add(c)}),this.queries.forEach(function(c,f){var d=c.observableQuery,p=c.document;if(d){if(e==="all"){n.set(f,d);return}var y=d.queryName,v=d.options.fetchPolicy;if(v==="standby"||e==="active"&&!d.hasObservers())return;(e==="active"||y&&i.has(y)||p&&i.has(p))&&(n.set(f,d),y&&i.set(y,!0),p&&i.set(p,!0))}}),a.size&&a.forEach(function(c){var f=an("legacyOneTimeQuery"),d=r.getQuery(f).init({document:c.query,variables:c.variables}),p=new oi({queryManager:r,queryInfo:d,options:_(_({},c),{fetchPolicy:"network-only"})});J(p.queryId===f),d.setObservableQuery(p),n.set(f,p)}),globalThis.__DEV__!==!1&&i.size&&i.forEach(function(c,f){c||globalThis.__DEV__!==!1&&J.warn(typeof f=="string"?31:32,f)}),n},t.prototype.reFetchObservableQueries=function(e){var r=this;e===void 0&&(e=!1);var n=[];return this.getObservableQueries(e?"all":"active").forEach(function(i,a){var c=i.options.fetchPolicy;i.resetLastResults(),(e||c!=="standby"&&c!=="cache-only")&&n.push(i.refetch()),r.getQuery(a).setDiff(null)}),this.broadcastQueries(),Promise.all(n)},t.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},t.prototype.startGraphQLSubscription=function(e){var r=this,n=e.query,i=e.fetchPolicy,a=e.errorPolicy,c=a===void 0?"none":a,f=e.variables,d=e.context,p=d===void 0?{}:d;n=this.transform(n),f=this.getVariables(n,f);var y=function(b){return r.getObservableFromLink(n,p,b).map(function(E){i!=="no-cache"&&(ui(E,c)&&r.cache.write({query:n,result:E.data,dataId:"ROOT_SUBSCRIPTION",variables:b}),r.broadcastQueries());var I=Mr(E),O=Kc(E);if(I||O){var R={};if(I&&(R.graphQLErrors=E.errors),O&&(R.protocolErrors=E.extensions[Mn]),c==="none"||O)throw new wt(R)}return c==="ignore"&&delete E.errors,E})};if(this.getDocumentInfo(n).hasClientExports){var v=this.localState.addExportedVariables(n,f,p).then(y);return new pe(function(b){var E=null;return v.then(function(I){return E=I.subscribe(b)},b.error),function(){return E&&E.unsubscribe()}})}return y(f)},t.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},t.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},t.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},t.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(e){return e.notify()})},t.prototype.getLocalState=function(){return this.localState},t.prototype.getObservableFromLink=function(e,r,n,i){var a=this,c;i===void 0&&(i=(c=r==null?void 0:r.queryDeduplication)!==null&&c!==void 0?c:this.queryDeduplication);var f,d=this.getDocumentInfo(e),p=d.serverQuery,y=d.clientQuery;if(p){var v=this,b=v.inFlightLinkObservables,E=v.link,I={query:p,variables:n,operationName:vn(p)||void 0,context:this.prepareContext(_(_({},r),{forceFetch:!i}))};if(r=I.context,i){var O=bn(p),R=b.get(O)||new Map;b.set(O,R);var k=St(n);if(f=R.get(k),!f){var A=new $t([$n(E,I)]);R.set(k,f=A),A.beforeNext(function(){R.delete(k)&&R.size<1&&b.delete(O)})}}else f=new $t([$n(E,I)])}else f=new $t([pe.of({data:{}})]),r=this.prepareContext(r);return y&&(f=Nn(f,function(T){return a.localState.runResolvers({document:y,remoteResult:T,context:r,variables:n})})),f},t.prototype.getResultsFromLink=function(e,r,n){var i=e.lastRequestId=this.generateRequestId(),a=this.cache.transformForLink(n.query);return Nn(this.getObservableFromLink(a,n.context,n.variables),function(c){var f=xn(c),d=f.length>0;if(i>=e.lastRequestId){if(d&&n.errorPolicy==="none")throw e.markError(new wt({graphQLErrors:f}));e.markResult(c,a,n,r),e.markReady()}var p={data:c.data,loading:!1,networkStatus:he.ready};return d&&n.errorPolicy!=="ignore"&&(p.errors=f,p.networkStatus=he.error),p},function(c){var f=Xc(c)?c:new wt({networkError:c});throw i>=e.lastRequestId&&e.markError(f),f})},t.prototype.fetchConcastWithInfo=function(e,r,n){var i=this;n===void 0&&(n=he.loading);var a=r.query,c=this.getVariables(a,r.variables),f=this.getQuery(e),d=this.defaultOptions.watchQuery,p=r.fetchPolicy,y=p===void 0?d&&d.fetchPolicy||"cache-first":p,v=r.errorPolicy,b=v===void 0?d&&d.errorPolicy||"none":v,E=r.returnPartialData,I=E===void 0?!1:E,O=r.notifyOnNetworkStatusChange,R=O===void 0?!1:O,k=r.context,A=k===void 0?{}:k,T=Object.assign({},r,{query:a,variables:c,fetchPolicy:y,errorPolicy:b,returnPartialData:I,notifyOnNetworkStatusChange:R,context:A}),P=function(oe){T.variables=oe;var ae=i.fetchQueryByPolicy(f,T,n);return T.fetchPolicy!=="standby"&&ae.sources.length>0&&f.observableQuery&&f.observableQuery.applyNextFetchPolicy("after-fetch",r),ae},U=function(){return i.fetchCancelFns.delete(e)};this.fetchCancelFns.set(e,function(oe){U(),setTimeout(function(){return $.cancel(oe)})});var $,j;if(this.getDocumentInfo(T.query).hasClientExports)$=new $t(this.localState.addExportedVariables(T.query,T.variables,T.context).then(P).then(function(oe){return oe.sources})),j=!0;else{var H=P(T.variables);j=H.fromLink,$=new $t(H.sources)}return $.promise.then(U,U),{concast:$,fromLink:j}},t.prototype.refetchQueries=function(e){var r=this,n=e.updateCache,i=e.include,a=e.optimistic,c=a===void 0?!1:a,f=e.removeOptimistic,d=f===void 0?c?an("refetchQueries"):void 0:f,p=e.onQueryUpdated,y=new Map;i&&this.getObservableQueries(i).forEach(function(b,E){y.set(E,{oq:b,lastDiff:r.getQuery(E).getDiff()})});var v=new Map;return n&&this.cache.batch({update:n,optimistic:c&&d||!1,removeOptimistic:d,onWatchUpdated:function(b,E,I){var O=b.watcher instanceof ci&&b.watcher.observableQuery;if(O){if(p){y.delete(O.queryId);var R=p(O,E,I);return R===!0&&(R=O.refetch()),R!==!1&&v.set(O,R),R}p!==null&&y.set(O.queryId,{oq:O,lastDiff:I,diff:E})}}}),y.size&&y.forEach(function(b,E){var I=b.oq,O=b.lastDiff,R=b.diff,k;if(p){if(!R){var A=I.queryInfo;A.reset(),R=A.getDiff()}k=p(I,R,O)}(!p||k===!0)&&(k=I.refetch()),k!==!1&&v.set(I,k),E.indexOf("legacyOneTimeQuery")>=0&&r.stopQueryNoBroadcast(E)}),d&&this.cache.removeOptimistic(d),v},t.prototype.fetchQueryByPolicy=function(e,r,n){var i=this,a=r.query,c=r.variables,f=r.fetchPolicy,d=r.refetchWritePolicy,p=r.errorPolicy,y=r.returnPartialData,v=r.context,b=r.notifyOnNetworkStatusChange,E=e.networkStatus;e.init({document:a,variables:c,networkStatus:n});var I=function(){return e.getDiff()},O=function(P,U){U===void 0&&(U=e.networkStatus||he.loading);var $=P.result;globalThis.__DEV__!==!1&&!y&&!ge($,{})&&va(P.missing);var j=function(H){return pe.of(_({data:H,loading:lr(U),networkStatus:U},P.complete?null:{partial:!0}))};return $&&i.getDocumentInfo(a).hasForcedResolvers?i.localState.runResolvers({document:a,remoteResult:{data:$},context:v,variables:c,onlyRunForcedResolvers:!0}).then(function(H){return j(H.data||void 0)}):p==="none"&&U===he.refetch&&Array.isArray(P.missing)?j(void 0):j($)},R=f==="no-cache"?0:n===he.refetch&&d!=="merge"?1:2,k=function(){return i.getResultsFromLink(e,R,{query:a,variables:c,context:v,fetchPolicy:f,errorPolicy:p})},A=b&&typeof E=="number"&&E!==n&&lr(n);switch(f){default:case"cache-first":{var T=I();return T.complete?{fromLink:!1,sources:[O(T,e.markReady())]}:y||A?{fromLink:!0,sources:[O(T),k()]}:{fromLink:!0,sources:[k()]}}case"cache-and-network":{var T=I();return T.complete||y||A?{fromLink:!0,sources:[O(T),k()]}:{fromLink:!0,sources:[k()]}}case"cache-only":return{fromLink:!1,sources:[O(I(),e.markReady())]};case"network-only":return A?{fromLink:!0,sources:[O(I()),k()]}:{fromLink:!0,sources:[k()]};case"no-cache":return A?{fromLink:!0,sources:[O(e.getDiff()),k()]}:{fromLink:!0,sources:[k()]};case"standby":return{fromLink:!1,sources:[]}}},t.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new ci(this,e)),this.queries.get(e)},t.prototype.prepareContext=function(e){e===void 0&&(e={});var r=this.localState.prepareContext(e);return _(_({},r),{clientAwareness:this.clientAwareness})},t}(),Ea=!1,il=function(){function t(e){var r=this;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw Pe(13);var n=e.uri,i=e.credentials,a=e.headers,c=e.cache,f=e.documentTransform,d=e.ssrMode,p=d===void 0?!1:d,y=e.ssrForceFetchDelay,v=y===void 0?0:y,b=e.connectToDevTools,E=b===void 0?typeof window=="object"&&!window.__APOLLO_CLIENT__&&globalThis.__DEV__!==!1:b,I=e.queryDeduplication,O=I===void 0?!0:I,R=e.defaultOptions,k=e.assumeImmutableResults,A=k===void 0?c.assumeImmutableResults:k,T=e.resolvers,P=e.typeDefs,U=e.fragmentMatcher,$=e.name,j=e.version,H=e.link;H||(H=n?new mu({uri:n,credentials:i,headers:a}):jt.empty()),this.link=H,this.cache=c,this.disableNetworkFetches=p||v>0,this.queryDeduplication=O,this.defaultOptions=R||Object.create(null),this.typeDefs=P,v&&setTimeout(function(){return r.disableNetworkFetches=!1},v),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=on,this.localState=new ga({cache:c,client:this,resolvers:T,fragmentMatcher:U}),this.queryManager=new nl({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,documentTransform:f,queryDeduplication:O,ssrMode:p,clientAwareness:{name:$,version:j},localState:this.localState,assumeImmutableResults:A,onBroadcast:E?function(){r.devToolsHookCb&&r.devToolsHookCb({action:{},state:{queries:r.queryManager.getQueryStore(),mutations:r.queryManager.mutationStore||{}},dataWithOptimisticResults:r.cache.extract(!0)})}:void 0}),E&&this.connectToDevTools()}return t.prototype.connectToDevTools=function(){if(typeof window=="object"){var e=window,r=Symbol.for("apollo.devtools");(e[r]=e[r]||[]).push(this),e.__APOLLO_CLIENT__=this}!Ea&&globalThis.__DEV__!==!1&&(Ea=!0,setTimeout(function(){if(typeof window<"u"&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var n=window.navigator,i=n&&n.userAgent,a=void 0;typeof i=="string"&&(i.indexOf("Chrome/")>-1?a="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":i.indexOf("Firefox/")>-1&&(a="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),a&&globalThis.__DEV__!==!1&&J.log("Download the Apollo DevTools for a better development experience: %s",a)}},1e4))},Object.defineProperty(t.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),t.prototype.stop=function(){this.queryManager.stop()},t.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=Fn(this.defaultOptions.watchQuery,e)),this.disableNetworkFetches&&(e.fetchPolicy==="network-only"||e.fetchPolicy==="cache-and-network")&&(e=_(_({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},t.prototype.query=function(e){return this.defaultOptions.query&&(e=Fn(this.defaultOptions.query,e)),J(e.fetchPolicy!=="cache-and-network",14),this.disableNetworkFetches&&e.fetchPolicy==="network-only"&&(e=_(_({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},t.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=Fn(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},t.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},t.prototype.readQuery=function(e,r){return r===void 0&&(r=!1),this.cache.readQuery(e,r)},t.prototype.readFragment=function(e,r){return r===void 0&&(r=!1),this.cache.readFragment(e,r)},t.prototype.writeQuery=function(e){var r=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),r},t.prototype.writeFragment=function(e){var r=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),r},t.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},t.prototype.__requestRaw=function(e){return $n(this.link,e)},t.prototype.resetStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(e.resetStoreCallbacks.map(function(r){return r()}))}).then(function(){return e.reFetchObservableQueries()})},t.prototype.clearStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(e.clearStoreCallbacks.map(function(r){return r()}))})},t.prototype.onResetStore=function(e){var r=this;return this.resetStoreCallbacks.push(e),function(){r.resetStoreCallbacks=r.resetStoreCallbacks.filter(function(n){return n!==e})}},t.prototype.onClearStore=function(e){var r=this;return this.clearStoreCallbacks.push(e),function(){r.clearStoreCallbacks=r.clearStoreCallbacks.filter(function(n){return n!==e})}},t.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},t.prototype.refetchQueries=function(e){var r=this.queryManager.refetchQueries(e),n=[],i=[];r.forEach(function(c,f){n.push(f),i.push(c)});var a=Promise.all(i);return a.queries=n,a.results=i,a.catch(function(c){globalThis.__DEV__!==!1&&J.debug(15,c)}),a},t.prototype.getObservableQueries=function(e){return e===void 0&&(e="active"),this.queryManager.getObservableQueries(e)},t.prototype.extract=function(e){return this.cache.extract(e)},t.prototype.restore=function(e){return this.cache.restore(e)},t.prototype.addResolvers=function(e){this.localState.addResolvers(e)},t.prototype.setResolvers=function(e){this.localState.setResolvers(e)},t.prototype.getResolvers=function(){return this.localState.getResolvers()},t.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},t.prototype.setLink=function(e){this.link=this.queryManager.link=e},t}(),zr=new Map,li=new Map,wa=!0,Gr=!1;function Sa(t){return t.replace(/[\s,]+/g," ").trim()}function ol(t){return Sa(t.source.body.substring(t.start,t.end))}function al(t){var e=new Set,r=[];return t.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var i=n.name.value,a=ol(n.loc),c=li.get(i);c&&!c.has(a)?wa&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):c||li.set(i,c=new Set),c.add(a),e.has(a)||(e.add(a),r.push(n))}else r.push(n)}),_(_({},t),{definitions:r})}function sl(t){var e=new Set(t.definitions);e.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(i){var a=n[i];a&&typeof a=="object"&&e.add(a)})});var r=t.loc;return r&&(delete r.startToken,delete r.endToken),t}function cl(t){var e=Sa(t);if(!zr.has(e)){var r=Ls(t,{experimentalFragmentVariables:Gr,allowLegacyFragmentVariables:Gr});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");zr.set(e,sl(al(r)))}return zr.get(e)}function x(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];typeof t=="string"&&(t=[t]);var n=t[0];return e.forEach(function(i,a){i&&i.kind==="Document"?n+=i.loc.source.body:n+=i,n+=t[a+1]}),cl(n)}function ul(){zr.clear(),li.clear()}function ll(){wa=!1}function fl(){Gr=!0}function hl(){Gr=!1}var fr={gql:x,resetCaches:ul,disableFragmentWarnings:ll,enableExperimentalFragmentVariables:fl,disableExperimentalFragmentVariables:hl};(function(t){t.gql=fr.gql,t.resetCaches=fr.resetCaches,t.disableFragmentWarnings=fr.disableFragmentWarnings,t.enableExperimentalFragmentVariables=fr.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=fr.disableExperimentalFragmentVariables})(x||(x={})),x.default=x;const dl=x`
  fragment Logs on BrokerDto {
    logs {
      offsetLag
      partition
      path
      size
      topic
    }
  }
`,pl=x`
  fragment Config on BrokerDto {
    config {
      isSensitive
      readOnly
      key
      source
      type
      value
      readOnly
    }
  }
`,ml=x`
  fragment Entity on BrokerDto {
    hostname
    leaders
    leadersSkew
    listener
    nodeId
    partitions
    partitionsSkew
    rack
    replicas
    size
    underReplicatedPartitions
    version
  }
`;x`
  mutation CreateConsumerGroup(
    $clusterId: ID!
    $consumerGroupName: ConsumerGroupName!
    $topics: [String!]!
    $offsetCreationSpecification: OffsetCreationSpecification!
  ) {
    consumerGroups {
      createConsumerGroup(
        clusterId: $clusterId
        consumerGroupName: $consumerGroupName
        topics: $topics
        offsetCreationSpecification: $offsetCreationSpecification
      ) {
        _id
        membersSize
        name
        members {
          memberId
          assignments {
            partition
            topic
          }
        }
      }
    }
  }
`,x`
  mutation DeleteConsumerGroups($clusterId: ID!, $consumerGroups: [ConsumerGroupName!]!) {
    consumerGroups {
      deleteConsumerGroups(clusterId: $clusterId, consumerGroups: $consumerGroups)
    }
  }
`,x`
  mutation DuplicateConsumerGroup(
    $clusterId: ID!
    $consumerGroupToDuplicate: ConsumerGroupName!
    $newName: ConsumerGroupName!
  ) {
    consumerGroups {
      duplicateConsumerGroup(
        clusterId: $clusterId
        consumerGroupToDuplicate: $consumerGroupToDuplicate
        newName: $newName
      ) {
        _id
        members {
          assignments {
            partition
            topic
          }
          memberId
        }
        membersSize
        name
        state
      }
    }
  }
`,x`
  mutation ResetOffsets(
    $clusterId: ID!
    $consumerGroup: ConsumerGroupName!
    $topicPartitionSelection: TopicPartitionSelectionInput!
    $resetSpecification: OffsetResetSpecificationInput!
  ) {
    consumerGroups {
      resetOffsets(
        clusterId: $clusterId
        consumerGroup: $consumerGroup
        topicPartitionSelection: $topicPartitionSelection
        resetSpecification: $resetSpecification
      )
    }
  }
`,x`
  mutation KafkaConnectorAddOrUpdate(
    $kafkaConnectId: KafkaConnectId!
    $connectorName: String!
    $connectorConfiguration: Json!
  ) {
    kafkaConnect {
      addOrUpdateConnector(
        kafkaConnectId: $kafkaConnectId
        connectorName: $connectorName
        connectorConfiguration: $connectorConfiguration
      ) {
        name
        type
        config {
          key
          value
        }
        tasks {
          connector
          id
        }
      }
    }
  }
`,x`
  mutation KafkaConnectorDelete($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      deleteConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,x`
  mutation KafkaConnectorPause($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      pauseConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,x`
  mutation KafkaConnectorRestart($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      restartConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,x`
  mutation KafkaConnectorResume($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      resumeConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,x`
  mutation KafkaConnectorTaskRestart(
    $kafkaConnectId: KafkaConnectId!
    $connectorName: String!
    $taskId: Int!
  ) {
    kafkaConnect {
      restartConnectorTask(
        kafkaConnectId: $kafkaConnectId
        connectorName: $connectorName
        taskId: $taskId
      )
    }
  }
`,x`
  mutation KafkaConnectorResetTopics($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      resetTopicsConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,x`
  mutation ActivateAutoRestart(
    $kafkaConnectId: KafkaConnectId!
    $connectorName: String!
    $interval: Duration!
  ) {
    kafkaConnect {
      activateAutoRestart(
        kafkaConnectId: $kafkaConnectId
        connectorName: $connectorName
        interval: $interval
      )
    }
  }
`,x`
  mutation StopAutoRestart($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      stopAutoRestart(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,x`
  mutation SchemaRegistryCreate(
    $schemaRegistryId: SchemaRegistryId!
    $format: SchemaFormat!
    $isKey: Boolean!
    $schema: String!
    $topic: String
    $strategy: SubjectNameStrategy
    $subjectName: SubjectName
  ) {
    confluentLikeSchemaRegistry {
      createSchema(
        schemaRegistryId: $schemaRegistryId
        format: $format
        isKey: $isKey
        schema: $schema
        topic: $topic
        strategy: $strategy
        subjectName: $subjectName
      ) {
        ... on CreatedConfluentLikeSchema {
          id
          subject
          schema
        }
        ... on NewConfluentLikeSchemaIncompatible {
          message
        }
      }
    }
  }
`,x`
  mutation GlueSchemaRegistryCreate(
    $schemaRegistryId: SchemaRegistryId!
    $format: SchemaFormat!
    $schemaName: String!
    $schema: String!
    $compatibility: GlueCompatibility!
  ) {
    glueSchemaRegistry {
      createSchema(
        schemaRegistryId: $schemaRegistryId
        format: $format
        schemaName: $schemaName
        schema: $schema
        compatibility: $compatibility
      ) {
        ... on CreatedGlueSchema {
          schemaName
        }
        ... on NewGlueSchemaIncompatible {
          message
        }
      }
    }
  }
`,x`
  mutation DeleteGlueSchema($schemaRegistryId: SchemaRegistryId!, $schemaName: String!) {
    glueSchemaRegistry {
      deleteSchema(schemaRegistryId: $schemaRegistryId, schemaName: $schemaName)
    }
  }
`,x`
  mutation DeleteGlueSchemaVersion(
    $schemaRegistryId: SchemaRegistryId!
    $schemaName: String!
    $schemaVersion: SchemaVersion!
  ) {
    glueSchemaRegistry {
      deleteSchemaVersion(
        schemaRegistryId: $schemaRegistryId
        schemaName: $schemaName
        schemaVersion: $schemaVersion
      )
    }
  }
`,x`
  mutation PermanentDeleteVersions(
    $schemaRegistryId: SchemaRegistryId!
    $versions: [SubjectAndVersionInput!]!
  ) {
    confluentLikeSchemaRegistry {
      permanentDeleteVersions(schemaRegistryId: $schemaRegistryId, versions: $versions)
    }
  }
`,x`
  mutation PermanentDeleteSubjects(
    $schemaRegistryId: SchemaRegistryId!
    $subjects: [SubjectName!]!
  ) {
    confluentLikeSchemaRegistry {
      permanentDeleteSubjects(schemaRegistryId: $schemaRegistryId, subjects: $subjects)
    }
  }
`,x`
  mutation RegisterSchemaVersion(
    $schemaRegistryId: SchemaRegistryId!
    $schemaName: String!
    $schema: String!
  ) {
    glueSchemaRegistry {
      registerSchemaVersion(
        schemaRegistryId: $schemaRegistryId
        schemaName: $schemaName
        schema: $schema
      )
    }
  }
`,x`
  mutation SoftDeleteVersions(
    $schemaRegistryId: SchemaRegistryId!
    $versions: [SubjectAndVersionInput!]!
  ) {
    confluentLikeSchemaRegistry {
      softDeleteVersions(schemaRegistryId: $schemaRegistryId, versions: $versions)
    }
  }
`,x`
  mutation SoftDeleteSubjects($schemaRegistryId: SchemaRegistryId!, $subjects: [SubjectName!]!) {
    confluentLikeSchemaRegistry {
      softDeleteSubjects(schemaRegistryId: $schemaRegistryId, subjects: $subjects)
    }
  }
`,x`
  mutation UpdateGlobalCompatibility(
    $schemaRegistryId: SchemaRegistryId!
    $compatibility: Compatibility!
  ) {
    confluentLikeSchemaRegistry {
      updateCompatibility(schemaRegistryId: $schemaRegistryId, compatibility: $compatibility)
    }
  }
`,x`
  mutation UpdateSubjectsCompatibility(
    $schemaRegistryId: SchemaRegistryId!
    $subjects: [SubjectName!]!
    $compatibility: Compatibility!
  ) {
    confluentLikeSchemaRegistry {
      updateSubjectsCompatibility(
        schemaRegistryId: $schemaRegistryId
        subjects: $subjects
        compatibility: $compatibility
      )
    }
  }
`,x`
  mutation UpdateGlueSchemaCompatibility(
    $schemaRegistryId: SchemaRegistryId!
    $schemaName: String!
    $latest: Boolean!
    $compatibility: GlueCompatibility!
    $checkpoint: SchemaVersion
  ) {
    glueSchemaRegistry {
      updateCompatibility(
        schemaRegistryId: $schemaRegistryId
        schemaName: $schemaName
        latest: $latest
        compatibility: $compatibility
        checkpoint: $checkpoint
      )
    }
  }
`,x`
  mutation TagCreate($name: String!, $color: String!) {
    tag {
      create(name: $name, color: $color) {
        name
        id
        color
      }
    }
  }
`,x`
  mutation TagDelete($id: ID!) {
    tag {
      delete(value: $id)
    }
  }
`,x`
  mutation TagUpdate($id: ID!, $name: String!, $color: String!) {
    tag {
      update(name: $name, color: $color, id: $id) {
        name
        id
        color
      }
    }
  }
`,x`
  mutation TopicDelete($clusterId: ID!, $topicNames: [String!]!) {
    topic {
      delete(clusterId: $clusterId, topicNames: $topicNames)
    }
  }
`,x`
  mutation EmptyPartitions($clusterId: ID!, $topicPartitions: [TopicPartitionInput!]!) {
    topic {
      emptyPartitions(clusterId: $clusterId, topicPartitions: $topicPartitions)
    }
  }
`,x`
  mutation TopicsEmpty($clusterId: ID!, $topicNames: [String!]!) {
    topics {
      empty(clusterId: $clusterId, topicNames: $topicNames)
    }
  }
`,x`
  mutation TopicTag($clusterId: ID!, $topicName: String!, $tagIds: [ID!]!) {
    topic {
      tag(clusterId: $clusterId, topicName: $topicName, tagIds: $tagIds) {
        id
        name
        color
      }
    }
  }
`,x`
  mutation TopicSqlStatus($clusterId: ID!, $topicId: String!) {
    topic {
      setSqlStatus(clusterId: $clusterId, topicName: $topicId, indexationEnable: $sqlStatus)
    }
  }
`,x`
  mutation TopicCreateTemplate(
    $name: String!
    $clusterId: ID!
    $topicName: String!
    $kind: ViewKind!
    $parameters: Json!
  ) {
    topic {
      views {
        create(
          name: $name
          clusterId: $clusterId
          topicName: $topicName
          kind: $kind
          parameters: $parameters
        ) {
          id
          name
          updatedAt
          parameters
        }
      }
    }
  }
`,x`
  mutation TopicDeleteTemplate($deleteId: ID!) {
    topic {
      views {
        delete(id: $deleteId)
      }
    }
  }
`,x`
  mutation TopicUpdateTemplate($updateId: ID!, $name: String!, $parameters: Json!) {
    topic {
      views {
        update(id: $updateId, name: $name, parameters: $parameters) {
          id
          name
          parameters
          updatedAt
        }
      }
    }
  }
`,x`
  query ClusterACLForTopic($topicName: String!, $clusterId: ID!) {
    acl(clusterId: $clusterId) {
      _id
      forTopic(topicName: $topicName) {
        pattern {
          resourceType
          name
          patternType
        }
        entry {
          principal {
            name
            type
          }
          host
          operation
          permissionType
        }
      }
    }
  }
`,x`
  query ClusterBrokersIds($clusterId: ID!) {
    broker(clusterId: $clusterId) {
      clusterId
      brokerEntities {
        _id
      }
    }
  }
`,x`
  query ClusterBrokersStatistics($clusterId: ID!) {
    broker(clusterId: $clusterId) {
      clusterId
      controllerId
      similarConfig
      brokerEntities {
        _id
        version
      }
    }
  }
`,x`
  query AllBrokers($clusterId: ID!) {
    broker(clusterId: $clusterId) {
      brokerEntities {
        _id
        ...Entity
        ...Logs
        ...Config
      }
      clusterId
      controllerId
      similarConfig
    }
  }
  ${ml}
  ${dl}
  ${pl}
`,x`
  query ClusterDefinition($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
        technicalId
        name
        nameHash
        color
        icon
        isOverLimit
        bootstrapServers
        clusterProvider
        schemaRegistry {
          id
          schemaRegistry {
            ... on ConfluentLike {
              url
            }
            ... on Glue {
              registryName
            }
          }
        }
        kafkaConnects {
          id
          url
        }
        securityProtocol
        isLocal
        kafkaFlavor
        saslMechanism
        ksqlDBs {
          url
        }
      }
    }
  }
`,x`
  query ClusterSchemaIdAndTopicNames($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
        schemaRegistry {
          id
        }
      }
      minimalTopics {
        _id
        name
      }
    }
  }
`,x`
  query ClusterIsReachable($clusterId: ID!) {
    isClusterReachableById(clusterId: $clusterId)
  }
`,x`
  query ClusterKsqlDBs($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
        ksqlDBs {
          name
          slug
          url
        }
      }
    }
  }
`,x`
  query MenuClusters {
    clusters {
      definition {
        id
        name
        technicalId
        icon
        color
      }
    }
  }
`,x`
  query ConsumerGroupStatistics($clusterId: ID!, $consumerGroupName: ConsumerGroupName!) {
    consumerGroups(clusterId: $clusterId) {
      consumerGroup(consumerGroupName: $consumerGroupName) {
        _id
        name
        state
        coordinator {
          ... on AliveNode {
            host
            port
            id
            rack
          }
          ... on Dead {
            id
          }
        }
        partitionAssignor
        listenedTopicsSize
        listenedTopicPartitionsSize
        overallLag
      }
    }
  }
`,x`
  query ConsumerGroupDetails($consumerGroupName: ConsumerGroupName!, $clusterId: ID!) {
    consumerGroups(clusterId: $clusterId) {
      consumerGroup(consumerGroupName: $consumerGroupName) {
        _id
        name
        state
        offsetPerPartition {
          memberId
          topicName
          partition
          partitionBeginningOffset
          partitionEndOffset
          lastCommittedOffset
          lag
        }
        members {
          clientId
          memberId
          host
        }
      }
    }
  }
`,x`
  query ConsumerGroupResetOffsetsPreview(
    $clusterId: ID!
    $consumerGroup: ConsumerGroupName!
    $topicPartitionSelection: TopicPartitionSelectionInput!
    $resetSpecification: OffsetResetSpecificationInput!
  ) {
    consumerGroupResetOffsetsPreview(
      clusterId: $clusterId
      consumerGroup: $consumerGroup
      topicPartitionSelection: $topicPartitionSelection
      resetSpecification: $resetSpecification
    ) {
      key {
        partition
        topic
      }
      value
    }
  }
`,x`
  query ClusterTopicConsumerGroups($topicName: String!, $clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      topic(value: $topicName) {
        _id
        consumerGroupsNames
      }
    }
  }
`,x`
  query ConsumerGroupsStatistics($clusterId: ID!) {
    consumerGroups(clusterId: $clusterId) {
      stats {
        active
        empty
        rebalancing
        dead
      }
    }
  }
`,x`
  query ConsumerGroupsList(
    $clusterId: ID!
    $filter: String
    $pageRequest: PageRequestInput!
    $sortOrder: SortOrder!
  ) {
    consumerGroups(clusterId: $clusterId) {
      listConsumerGroups(filter: $filter, pageRequest: $pageRequest, sortOrder: $sortOrder) {
        data {
          _id
          name
          state
          listenedTopics
          overallLag
          membersSize
          coordinator {
            ... on AliveNode {
              host
              port
              id
              rack
            }
            ... on Dead {
              id
            }
          }
        }
        oldestFetchTime
        page
        perPage
        totalPages
      }
    }
  }
`,x`
  query ConsumerGroups($clusterId: ID!) {
    consumerGroups(clusterId: $clusterId) {
      allNames
    }
  }
`,x`
  query TopicConfigsDocumentation {
    documentation {
      topicConfigsDoc {
        key
        value
      }
    }
  }
`,x`
  query KafkaConnectStatistics($kafkaConnectId: KafkaConnectId!) {
    kafkaConnect(kafkaConnectId: $kafkaConnectId) {
      metadata {
        tasksFailed
        tasksRunning
        connectorsFailed
        connectorsRunning
      }
    }
  }
`,x`
  query KafkaConnectsDefinitions($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
        kafkaConnects {
          id
          url
          name
          slug
        }
      }
    }
  }
`,x`
  query KafkaConnectorNames($kafkaConnectId: KafkaConnectId!) {
    connectors(kafkaConnectId: $kafkaConnectId) {
      name
    }
  }
`,x`
  query KafkaConnector($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    connector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName) {
      name
      connectorClass
      type
      topics
      status
      tasks {
        status
        workerId
        taskId
      }
    }
  }
`,x`
  query KafkaConnectorConfig($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    connector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName) {
      name
      config {
        key
        value
      }
    }
  }
`,x`
  query KafkaConnectorTasks($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    connector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName) {
      name
      tasks {
        status
        workerId
        taskId
        error
      }
    }
  }
`,x`
  query KafkaConnectorValidate(
    $kafkaConnectId: KafkaConnectId!
    $connectorConfiguration: Json!
    $connectorName: String!
  ) {
    validateConnectorPluginConfig(
      kafkaConnectId: $kafkaConnectId
      connectorName: $connectorName
      connectorConfiguration: $connectorConfiguration
    ) {
      errors
      name
    }
  }
`,x`
  query ConnectorRestart($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    connector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName) {
      autoRestart
      name
    }
  }
`,x`
  query AllConnectors($clusterId: ID!) {
    allConnectors(clusterId: $clusterId) {
      ... on ConnectorsFetched {
        id
        connectors {
          autoRestart
          name
          status
          tasks {
            taskId
            status
          }
        }
      }
    }
  }
`,x`
  query Schema(
    $schemaRegistryId: SchemaRegistryId!
    $subjectName: SubjectName!
    $schemaVersion: SchemaVersion!
  ) {
    confluentLikeSchemaRegistry {
      schema(
        schemaRegistryId: $schemaRegistryId
        subjectName: $subjectName
        schemaVersion: $schemaVersion
      ) {
        ... on InvalidSchema {
          error
          format
          schema
          schemaId
          version
        }
        ... on ValidSchema {
          documentation
          format
          schema
          schemaStructure
          records {
            fieldsCount
            record
          }
          schemaId
          version
        }
      }
    }
  }
`,x`
  query SchemaDefinition(
    $schemaRegistryId: SchemaRegistryId!
    $schemaName: String!
    $schemaVersion: SchemaVersion!
  ) {
    glueSchemaRegistry {
      schemaDefinition(
        schemaRegistryId: $schemaRegistryId
        schemaName: $schemaName
        schemaVersion: $schemaVersion
      ) {
        ... on InvalidSchemaDefinition {
          error
          format
          schema
          schemaId
          version
        }
        ... on ValidSchemaDefinition {
          documentation
          format
          schema
          schemaStructure
          records {
            record
            fieldsCount
          }
          schemaId
          version
        }
      }
    }
  }
`,x`
  query SchemaRegistryStatistics($schemaRegistryId: SchemaRegistryId!) {
    confluentLikeSchemaRegistry {
      schemaRegistry(schemaRegistryId: $schemaRegistryId) {
        metadata {
          compatibility
          deletedSubjects
          mode
          subjects
        }
      }
    }
  }
`,x`
  query GlueSchemaRegistryStatistics($schemaRegistryId: SchemaRegistryId!) {
    glueSchemaRegistry {
      schemaRegistry(schemaRegistryId: $schemaRegistryId) {
        metadata {
          schemaCount
        }
      }
    }
  }
`,x`
  query SchemaRegistryCompatibility($schemaRegistryId: SchemaRegistryId!) {
    confluentLikeSchemaRegistry {
      schemaRegistry(schemaRegistryId: $schemaRegistryId) {
        metadata {
          compatibility
        }
      }
    }
  }
`,x`
  query SubjectBasicData($schemaRegistryId: SchemaRegistryId!, $subjectName: SubjectName!) {
    confluentLikeSchemaRegistry {
      subject(schemaRegistryId: $schemaRegistryId, subjectName: $subjectName) {
        compatibility {
          ... on Subject {
            compatibility
          }
          ... on Global {
            compatibility
          }
        }
        count
        name
        latestSchema {
          ... on ValidSchema {
            format
            schema
            version
            records {
              fieldsCount
              record
            }
          }
          ... on InvalidSchema {
            error
            format
            schema
            version
          }
        }
      }
    }
  }
`,x`
  query SubjectLatestSchema($schemaRegistryId: SchemaRegistryId!, $subjectName: SubjectName!) {
    confluentLikeSchemaRegistry {
      subject(schemaRegistryId: $schemaRegistryId, subjectName: $subjectName) {
        name
        latestSchema {
          ... on ValidSchema {
            format
            schema
          }
          ... on InvalidSchema {
            error
          }
        }
      }
    }
  }
`,x`
  query SubjectData($schemaRegistryId: SchemaRegistryId!, $subjectName: SubjectName!) {
    confluentLikeSchemaRegistry {
      subject(schemaRegistryId: $schemaRegistryId, subjectName: $subjectName) {
        compatibility {
          ... on Subject {
            compatibility
          }
          ... on Global {
            compatibility
          }
        }
        count
        name
        versions
        latestSchema {
          ... on ValidSchema {
            format
            version
            records {
              fieldsCount
              record
            }
          }
          ... on InvalidSchema {
            error
          }
        }
      }
    }
  }
`,x`
  query SchemaBasicData($schemaRegistryId: SchemaRegistryId!, $schemaName: String!) {
    glueSchemaRegistry {
      schema(schemaRegistryId: $schemaRegistryId, schemaName: $schemaName) {
        compatibility
        count
        name
        latestSchema {
          ... on ValidSchemaDefinition {
            format
            schema
            version
            records {
              fieldsCount
              record
            }
          }
          ... on InvalidSchemaDefinition {
            error
            format
            schema
            version
          }
        }
      }
    }
  }
`,x`
  query SchemaData($schemaRegistryId: SchemaRegistryId!, $schemaName: String!) {
    glueSchemaRegistry {
      schema(schemaRegistryId: $schemaRegistryId, schemaName: $schemaName) {
        compatibility
        count
        name
        versions
        latestSchema {
          ... on ValidSchemaDefinition {
            format
            version
            records {
              fieldsCount
              record
            }
          }
          ... on InvalidSchemaDefinition {
            error
          }
        }
      }
    }
  }
`,x`
  query SubjectsNames($schemaRegistryId: SchemaRegistryId!) {
    confluentLikeSchemaRegistry {
      subjectsName(schemaRegistryId: $schemaRegistryId)
    }
  }
`,x`
  query CheckSchemaCompatibility(
    $schemaRegistryId: SchemaRegistryId!
    $subjectName: SubjectName!
    $format: SchemaFormat!
    $schema: String!
  ) {
    confluentLikeSchemaRegistry {
      checkSchemaCompatibility(
        schemaRegistryId: $schemaRegistryId
        subjectName: $subjectName
        format: $format
        schema: $schema
      ) {
        ... on Compatible {
          _
        }
        ... on NotCompatible {
          reasons
        }
      }
    }
  }
`,x`
  query SchemasNames($schemaRegistryId: SchemaRegistryId!) {
    glueSchemaRegistry {
      schemaNames(schemaRegistryId: $schemaRegistryId)
    }
  }
`,x`
  query SchemaNamesWithFormat($schemaRegistryId: SchemaRegistryId!) {
    glueSchemaRegistry {
      schemaNamesWithFormat(schemaRegistryId: $schemaRegistryId) {
        format
        schemaName
      }
    }
  }
`,x`
  query Tags {
    tags {
      color
      name
      id
    }
  }
`,x`
  query TopicProduceGeneratedData(
    $format: ProducerFormat!
    $clusterId: ID!
    $options: SchemaRegistryGenOptionsInput
  ) {
    generatedData(format: $format, clusterId: $clusterId, options: $options) {
      ... on GeneratedAvro {
        avro
      }
      ... on GeneratedBytes {
        bytes
      }
      ... on GeneratedDouble {
        Double
      }
      ... on GeneratedFloat {
        float
      }
      ... on GeneratedJson {
        json
      }
      ... on GeneratedLong {
        long
      }
      ... on GeneratedProtobuf {
        protobuf
      }
      ... on GeneratedString {
        string
      }
    }
  }
`,x`
  query TopicJsonPath($clusterId: ID!, $topic: String!, $partitions: [Int!]!) {
    topicJsonPath(clusterId: $clusterId, topic: $topic, partitions: $partitions) {
      key {
        jsonPath
        type
      }
      value {
        jsonPath
        type
      }
    }
  }
`,x`
  query ClusterTopic($clusterId: ID!, $topicId: String!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      topic(value: $topicId) {
        _id
        name
        tags {
          id
          name
          color
        }
        partitions {
          _id
          id
          recordsCount
          size
          beginningOffset
          endOffset
          replicas
          replicaLeader
        }
        config {
          key
          value
          isOverridden
          source
          defaultValue
        }
      }
    }
  }
`,x`
  query ClusterTopicSubjects($clusterId: ID!, $topicId: String!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
        schemaRegistry {
          id
        }
      }
      topic(value: $topicId) {
        _id
        name
        subjects {
          ... on TopicSubjectsDto {
            keySubject {
              compatibility {
                ... on Subject {
                  compatibility
                }
                ... on Global {
                  compatibility
                }
              }
              count
              name
              latestSchema {
                ... on ValidSchema {
                  version
                  format
                }
              }
              versions
            }
            valueSubject {
              compatibility {
                ... on Subject {
                  compatibility
                }
                ... on Global {
                  compatibility
                }
              }
              count
              name
              latestSchema {
                ... on ValidSchema {
                  version
                  format
                }
                ... on InvalidSchema {
                  error
                }
              }
              versions
            }
          }
        }
      }
    }
  }
`,x`
  query ClusterTopicStatistics($clusterId: ID!, $topicId: String!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      topic(value: $topicId) {
        _id
        replicationFactor
        partitionCount
        minInSync
        isCompacted
        size
        recordStats {
          currentCount
        }
      }
    }
  }
`,x`
  query ClusterTopicTemplates($kind: ViewKind!, $topicId: String!, $clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      topic(value: $topicId) {
        _id
        views(kind: $kind) {
          id
          parameters
          name
          updatedAt
          description
          owner
          shared
        }
      }
    }
  }
`,x`
  query ClusterTopicPartitions($clusterId: ID!, $topicId: String!) {
    cluster(clusterId: $clusterId) {
      topic(value: $topicId) {
        partitions {
          id
        }
        _id
      }
    }
  }
`,x`
  query ClusterTopicConfigDefaultValues($clusterId: ID!) {
    topicConfigDefaultValues(clusterId: $clusterId) {
      key
      doc
      defaultValue
    }
  }
`,x`
  query ClusterTopicTags($clusterId: ID!, $topicId: String!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      topic(value: $topicId) {
        _id
        tags {
          id
          name
          color
        }
      }
    }
  }
`,x`
  query TopicConsumerGroupsNames($clusterId: ID!, $topicId: String!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      topic(value: $topicId) {
        _id
        consumerGroupsNames
      }
    }
  }
`,x`
  query TopicConsumerGroupsTableData($clusterId: ID!, $consumerGroupName: ConsumerGroupName!) {
    consumerGroups(clusterId: $clusterId) {
      consumerGroup(consumerGroupName: $consumerGroupName) {
        _id
        name
        state
        membersSize
        overallLag
      }
    }
  }
`,x`
  query TopicConsumerGroupsStatistics($topicId: String!, $clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      topic(value: $topicId) {
        _id
        consumersStats {
          active
          activeUnassigned
          inactive
        }
      }
    }
  }
`,x`
  query ClusterTopicsBasicAndSchema($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
        schemaRegistry {
          id
          schemaRegistry {
            ... on ConfluentLike {
              url
            }
          }
        }
      }
      minimalTopics {
        _id
        name
      }
    }
  }
`,x`
  query ClusterTopics($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      minimalTopics {
        _id
        name
        tags {
          id
          name
          color
        }
      }
    }
  }
`,x`
  query ClusterTopicNames($clusterId: ID!) {
    cluster(clusterId: $clusterId) {
      definition {
        id
      }
      minimalTopics {
        _id
        name
      }
    }
  }
`;const yl=x`
  subscription ConsumeRecords(
    $clusterId: ID!
    $topic: String!
    $partitions: [Int!]!
    $keyFormat: KeyFormatConfiguration!
    $valueFormat: ValueFormatArgsInput!
    $consumeFrom: ConsumeFromConfigurationInput!
    $limit: ConsumeLimitConfigurationInput!
    $zoneId: String!
    $filter: FilterArgsInput
    $valueJsonProjection: String
    $advancedConfiguration: ConsumerAdvancedConfigurationInput
  ) {
    consume(
      clusterId: $clusterId
      topic: $topic
      partitions: $partitions
      keyFormat: $keyFormat
      valueFormat: $valueFormat
      consumeFrom: $consumeFrom
      limit: $limit
      zoneId: $zoneId
      filter: $filter
      advancedConfiguration: $advancedConfiguration
      valueJsonProjection: $valueJsonProjection
    ) {
      ... on Stats {
        total {
          count
          size
        }
      }
      ... on TotalToConsume {
        count
        estimatedCount
      }
      ... on Record {
        partition
        offset
        timestamp
        timestampType
        key {
          ... on Deserialized {
            data
            metadata {
              rawSize
              format
              truncated
              maskedFields {
                fieldPath
                policyName
              }
              schemaId {
                ... on ConfluentSchemaId {
                  id
                }
                ... on GlueSchemaId {
                  id
                }
              }
            }
          }
          ... on Error {
            message
          }
        }
        value {
          ... on Deserialized {
            data
            metadata {
              rawSize
              format
              truncated
              maskedFields {
                fieldPath
                policyName
              }
              schemaId {
                ... on ConfluentSchemaId {
                  id
                }
                ... on GlueSchemaId {
                  id
                }
              }
            }
          }
          ... on Error {
            message
          }
        }
        headers {
          key
          value
        }
        metadata {
          compressionType
        }
      }
      ... on JSFilterError {
        partition
        offset
        timestamp
        timestampType
        error
      }
    }
  }
`;x`
  subscription ProduceRecord(
    $clusterId: ID!
    $topic: String!
    $keyOptions: GenOptionsInput!
    $keyFormat: ProducerFormat!
    $valueOptions: GenOptionsInput!
    $valueFormat: ProducerFormat!
    $chunkSize: Int!
    $headers: [HeaderInput!]!
    $partitionId: Int
    $compression: ProducerCompressionType
    $idempotence: Boolean
    $ack: Ack
    $automaticMode: AutomaticModeInput
  ) {
    produce(
      clusterId: $clusterId
      topic: $topic
      keyOptions: $keyOptions
      keyFormat: $keyFormat
      valueOptions: $valueOptions
      valueFormat: $valueFormat
      chunkSize: $chunkSize
      headers: $headers
      partitionId: $partitionId
      compression: $compression
      idempotence: $idempotence
      ack: $ack
      automaticMode: $automaticMode
    ) {
      key {
        data
        metadata {
          rawSize
          format
        }
      }
      value {
        data
        metadata {
          rawSize
          format
        }
      }
      headers {
        key
        value
      }
      partition
      offset
      timestamp
      timeToProduce
    }
  }
`;function vl(t){return de(t)&&"code"in t&&"reason"in t}function gl(t){var e;return de(t)&&((e=t.target)===null||e===void 0?void 0:e.readyState)===WebSocket.CLOSED}var bl=function(t){Ue(e,t);function e(r){var n=t.call(this)||this;return n.client=r,n}return e.prototype.request=function(r){var n=this;return new pe(function(i){return n.client.subscribe(_(_({},r),{query:bn(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var c=vl(a);return c||gl(a)?i.error(new Error("Socket closed".concat(c?" with event ".concat(a.code):"").concat(c?" ".concat(a.reason):""))):i.error(new wt({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},e}(jt);function Me(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function It(t){return Me(t)==="object"}function El(t){return Array.isArray(t)&&t.length>0&&t.every(e=>"message"in e)}function Ia(t,e){return t.length<124?t:e}const wl="graphql-transport-ws";var qe;(function(t){t[t.InternalServerError=4500]="InternalServerError",t[t.InternalClientError=4005]="InternalClientError",t[t.BadRequest=4400]="BadRequest",t[t.BadResponse=4004]="BadResponse",t[t.Unauthorized=4401]="Unauthorized",t[t.Forbidden=4403]="Forbidden",t[t.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",t[t.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",t[t.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",t[t.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",t[t.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(qe||(qe={}));var we;(function(t){t.ConnectionInit="connection_init",t.ConnectionAck="connection_ack",t.Ping="ping",t.Pong="pong",t.Subscribe="subscribe",t.Next="next",t.Error="error",t.Complete="complete"})(we||(we={}));function ka(t){if(!It(t))throw new Error(`Message is expected to be an object, but got ${Me(t)}`);if(!t.type)throw new Error("Message is missing the 'type' property");if(typeof t.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Me(t.type)}`);switch(t.type){case we.ConnectionInit:case we.ConnectionAck:case we.Ping:case we.Pong:{if(t.payload!=null&&!It(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${t.payload}"`);break}case we.Subscribe:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Me(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!It(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${Me(t.payload)}`);if(typeof t.payload.query!="string")throw new Error(`"${t.type}" message payload expects the 'query' property to be a string, but got ${Me(t.payload.query)}`);if(t.payload.variables!=null&&!It(t.payload.variables))throw new Error(`"${t.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Me(t.payload.variables)}`);if(t.payload.operationName!=null&&Me(t.payload.operationName)!=="string")throw new Error(`"${t.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Me(t.payload.operationName)}`);if(t.payload.extensions!=null&&!It(t.payload.extensions))throw new Error(`"${t.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Me(t.payload.extensions)}`);break}case we.Next:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Me(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!It(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${Me(t.payload)}`);break}case we.Error:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Me(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!El(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(t.payload)}`);break}case we.Complete:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Me(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${t.type}"`)}return t}function Sl(t,e){return ka(typeof t=="string"?JSON.parse(t,e):t)}function hr(t,e){return ka(t),JSON.stringify(t,e)}var Qt=function(t){return this instanceof Qt?(this.v=t,this):new Qt(t)},Il=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),i,a=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(b){n[b]&&(i[b]=function(E){return new Promise(function(I,O){a.push([b,E,I,O])>1||f(b,E)})})}function f(b,E){try{d(n[b](E))}catch(I){v(a[0][3],I)}}function d(b){b.value instanceof Qt?Promise.resolve(b.value.v).then(p,y):v(a[0][2],b)}function p(b){f("next",b)}function y(b){f("throw",b)}function v(b,E){b(E),a.shift(),a.length&&f(a[0][0],a[0][1])}};function kl(t){const{url:e,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:c=0,disablePong:f,connectionAckWaitTimeout:d=0,retryAttempts:p=5,retryWait:y=async function(se){let G=1e3;for(let X=0;X<se;X++)G*=2;await new Promise(X=>setTimeout(X,G+Math.floor(Math.random()*2700+300)))},shouldRetry:v=Wr,isFatalConnectionProblem:b,on:E,webSocketImpl:I,generateID:O=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,se=>{const G=Math.random()*16|0;return(se=="x"?G:G&3|8).toString(16)})},jsonMessageReplacer:R,jsonMessageReviver:k}=t;let A;if(I){if(!Ol(I))throw new Error("Invalid WebSocket implementation provided");A=I}else typeof WebSocket<"u"?A=WebSocket:typeof global<"u"?A=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(A=window.WebSocket||window.MozWebSocket);if(!A)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const T=A,P=(()=>{const z=(()=>{const G={};return{on(X,ce){return G[X]=ce,()=>{delete G[X]}},emit(X){var ce;"id"in X&&((ce=G[X.id])===null||ce===void 0||ce.call(G,X))}}})(),se={connecting:E!=null&&E.connecting?[E.connecting]:[],opened:E!=null&&E.opened?[E.opened]:[],connected:E!=null&&E.connected?[E.connected]:[],ping:E!=null&&E.ping?[E.ping]:[],pong:E!=null&&E.pong?[E.pong]:[],message:E!=null&&E.message?[z.emit,E.message]:[z.emit],closed:E!=null&&E.closed?[E.closed]:[],error:E!=null&&E.error?[E.error]:[]};return{onMessage:z.on,on(G,X){const ce=se[G];return ce.push(X),()=>{ce.splice(ce.indexOf(X),1)}},emit(G,...X){for(const ce of[...se[G]])ce(...X)}}})();function U(z){const se=[P.on("error",G=>{se.forEach(X=>X()),z(G)}),P.on("closed",G=>{se.forEach(X=>X()),z(G)})]}let $,j=0,H,oe=!1,ae=0,ve=!1;async function Fe(){clearTimeout(H);const[z,se]=await($??($=new Promise((ce,ue)=>(async()=>{if(oe){if(await y(ae),!j)return $=void 0,ue({code:1e3,reason:"All Subscriptions Gone"});ae++}P.emit("connecting");const re=new T(typeof e=="function"?await e():e,wl);let Le,$e;function Ge(){isFinite(c)&&c>0&&(clearTimeout($e),$e=setTimeout(()=>{re.readyState===T.OPEN&&(re.send(hr({type:we.Ping})),P.emit("ping",!1,void 0))},c))}U(me=>{$=void 0,clearTimeout(Le),clearTimeout($e),ue(me),Wr(me)&&me.code===4499&&(re.close(4499,"Terminated"),re.onerror=null,re.onclose=null)}),re.onerror=me=>P.emit("error",me),re.onclose=me=>P.emit("closed",me),re.onopen=async()=>{try{P.emit("opened",re);const me=typeof r=="function"?await r():r;if(re.readyState!==T.OPEN)return;re.send(hr(me?{type:we.ConnectionInit,payload:me}:{type:we.ConnectionInit},R)),isFinite(d)&&d>0&&(Le=setTimeout(()=>{re.close(qe.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},d)),Ge()}catch(me){P.emit("error",me),re.close(qe.InternalClientError,Ia(me instanceof Error?me.message:new Error(me).message,"Internal client error"))}};let Ae=!1;re.onmessage=({data:me})=>{try{const Ee=Sl(me,k);if(P.emit("message",Ee),Ee.type==="ping"||Ee.type==="pong"){P.emit(Ee.type,!0,Ee.payload),Ee.type==="pong"?Ge():f||(re.send(hr(Ee.payload?{type:we.Pong,payload:Ee.payload}:{type:we.Pong})),P.emit("pong",!1,Ee.payload));return}if(Ae)return;if(Ee.type!==we.ConnectionAck)throw new Error(`First message cannot be of type ${Ee.type}`);clearTimeout(Le),Ae=!0,P.emit("connected",re,Ee.payload),oe=!1,ae=0,ce([re,new Promise((hi,Gt)=>U(Gt))])}catch(Ee){re.onmessage=null,P.emit("error",Ee),re.close(qe.BadResponse,Ia(Ee instanceof Error?Ee.message:new Error(Ee).message,"Bad response"))}}})())));z.readyState===T.CLOSING&&await se;let G=()=>{};const X=new Promise(ce=>G=ce);return[z,G,Promise.race([X.then(()=>{if(!j){const ce=()=>z.close(1e3,"Normal Closure");isFinite(a)&&a>0?H=setTimeout(()=>{z.readyState===T.OPEN&&ce()},a):ce()}}),se])]}function He(z){if(Wr(z)&&(_l(z.code)||[qe.InternalServerError,qe.InternalClientError,qe.BadRequest,qe.BadResponse,qe.Unauthorized,qe.SubprotocolNotAcceptable,qe.SubscriberAlreadyExists,qe.TooManyInitialisationRequests].includes(z.code)))throw z;if(ve)return!1;if(Wr(z)&&z.code===1e3)return j>0;if(!p||ae>=p||!v(z)||b!=null&&b(z))throw z;return oe=!0}return n||(async()=>{for(j++;;)try{const[,,z]=await Fe();await z}catch(z){try{if(!He(z))return}catch(se){return i==null?void 0:i(se)}}})(),{on:P.on,subscribe(z,se){const G=O(z);let X=!1,ce=!1,ue=()=>{j--,X=!0};return(async()=>{for(j++;;)try{const[re,Le,$e]=await Fe();if(X)return Le();const Ge=P.onMessage(G,Ae=>{switch(Ae.type){case we.Next:{se.next(Ae.payload);return}case we.Error:{ce=!0,X=!0,se.error(Ae.payload),ue();return}case we.Complete:{X=!0,ue();return}}});re.send(hr({id:G,type:we.Subscribe,payload:z},R)),ue=()=>{!X&&re.readyState===T.OPEN&&re.send(hr({id:G,type:we.Complete},R)),j--,X=!0,Le()},await $e.finally(Ge);return}catch(re){if(!He(re))return}})().then(()=>{ce||se.complete()}).catch(re=>{se.error(re)}),()=>{X||ue()}},iterate(z){const se=[],G={done:!1,error:null,resolve:()=>{}},X=this.subscribe(z,{next(ue){se.push(ue),G.resolve()},error(ue){G.done=!0,G.error=ue,G.resolve()},complete(){G.done=!0,G.resolve()}}),ce=function(){return Il(this,arguments,function*(){for(;;){for(se.length||(yield Qt(new Promise(Le=>G.resolve=Le)));se.length;)yield yield Qt(se.shift());if(G.error)throw G.error;if(G.done)return yield Qt(void 0)}})}();return ce.throw=async ue=>(G.done||(G.done=!0,G.error=ue,G.resolve()),{done:!0,value:void 0}),ce.return=async()=>(X(),{done:!0,value:void 0}),ce},async dispose(){if(ve=!0,$){const[z]=await $;z.close(1e3,"Normal Closure")}},terminate(){$&&P.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}function Wr(t){return It(t)&&"code"in t&&"reason"in t}function _l(t){return[1e3,1001,1006,1005,1012,1013,1013].includes(t)?!1:t>=1e3&&t<=1999}function Ol(t){return typeof t=="function"&&"constructor"in t&&"CLOSED"in t&&"CLOSING"in t&&"CONNECTING"in t&&"OPEN"in t}function Dl(){let t;return{getClient:async(r,n,i)=>{if(t)return t;const a=new bl(kl({url:n,connectionParams:()=>({Authorization:`Bearer ${r}`,"X-Organization-Id":i})})),c=new il({link:a,cache:new Ku});return t=c,c}}}function Tl(t,e){if(!t.length)return{jqOperation:"",jsonToProcess:[]};const r="__PLACEHOLDER_FOR_JQ_OPERATION__";let n="";const i=[];for(let a=0;a<t.length;a++){const c=t[a];c.value.__typename==="Deserialized"&&typeof c.value.data=="string"&&c.value.data?(n=`${n} (.[${a}] | ${e}),`,i.push(JSON.parse(c.value.data))):(n=`${n} "${r}",`,i.push(r))}return{jqOperation:`[${n.slice(0,-1)}]`,jsonToProcess:i}}var Ne=(t=>(t.CONSUME_STARTED="CONSUME_STARTED",t.PROCESS_ERROR="PROCESS_ERROR",t.PROCESS_SUCCESS="PROCESS_SUCCESS",t.PROCESS_RECORDS="PROCESS_RECORDS",t.CLEAR_TOP_KEYS="CLEAR_TOP_KEYS",t.SEND_RECORDS="SEND_RECORDS",t.SEND_PROCESSED_RECORDS="SEND_PROCESSED_RECORDS",t.SEND_TOP_KEYS="SEND_TOP_KEYS",t.ERRORS="ERRORS",t.CONSUME_STOPPED="CONSUME_STOPPED",t.JS_FILTER_ERROR="JS_FILTER_ERROR",t.SEND_PROCESSED_JQ="SEND_PROCESSED_JQ",t.PROCESS_ERROR_JQ="PROCESS_ERROR_JQ",t.EMPTY_TOPIC="EMPTY_TOPIC",t))(Ne||{}),zt=(t=>(t.CONSUME_RECORDS="CONSUME_RECORDS",t.PROCESS_RECORDS="PROCESS_RECORDS",t.STOP_CONSUME="STOP_CONSUME",t.PROCESS_JQ="PROCESS_JQ",t.EMPTY_TOPIC="EMPTY_TOPIC",t))(zt||{});const xe=self,fi=60,Rl=fi+100;let Yr,dr,Hr;function _a(){dr&&dr.unsubscribe(),setTimeout(()=>{Yr&&clearInterval(Yr),Yr=void 0},fi+1)}xe.onmessage=async function({data:{config:t,message:e}}){var n,i,a,c,f;const{getClient:r}=Dl();switch(e){case zt.PROCESS_RECORDS:{const d=Oa(Hr,t==null?void 0:t.jqValue,t==null?void 0:t.jqEnabled);d&&xe.postMessage({message:Ne.SEND_PROCESSED_RECORDS,batchedRecords:d});break}case zt.CONSUME_RECORDS:{Hr=[];const d=((i=(n=t==null?void 0:t.variables.filter)==null?void 0:n.jsScripts)==null?void 0:i.length)??0,p=(c=(a=t==null?void 0:t.variables.filter)==null?void 0:a.structured)==null?void 0:c.subFilters,y=(p==null?void 0:p.filter(E=>{var I;return(I=E.jsonPath)==null?void 0:I.trim()}).length)??0,v=((p==null?void 0:p.length)??0)-y,b=d+v+y;xe.postMessage({message:Ne.CONSUME_STARTED,startPayload:{startFrom:t==null?void 0:t.variables.consumeFrom.from,limit:t==null?void 0:t.variables.limit.limit,keyDeserializer:t==null?void 0:t.variables.keyFormat,valueDeserializer:t==null?void 0:t.variables.valueFormat.format,partition:(f=t==null?void 0:t.customProps)==null?void 0:f.partitionType,activeFilters:b,jsFilters:d,unstructuredFilters:v,structuredFilters:y}}),dr&&dr.unsubscribe(),t&&(dr=Cl(t.variables,await r(t.token,t.wsEndpoint,t.organizationId),t.lastByKey,t==null?void 0:t.jqValue,t==null?void 0:t.jqEnabled));break}case zt.PROCESS_JQ:{try{const d=Si.json(t==null?void 0:t.jsonData,(t==null?void 0:t.jqValue)||"");xe.postMessage({message:Ne.SEND_PROCESSED_JQ,jqFilteredData:d})}catch{xe.postMessage({message:Ne.PROCESS_ERROR_JQ})}break}case zt.STOP_CONSUME:{_a();break}case zt.EMPTY_TOPIC:{xe.postMessage({message:Ne.EMPTY_TOPIC});break}}};function Oa(t,e,r){let n;if(r&&e)try{const{jsonToProcess:i,jqOperation:a}=Tl(t,e);n=Si.json(i,a),xe.postMessage({message:Ne.PROCESS_SUCCESS,jqEnabled:r,jqValue:e})}catch{xe.postMessage({message:Ne.PROCESS_ERROR})}else xe.postMessage({message:Ne.PROCESS_SUCCESS,jqEnabled:r,jqValue:e});return t.map((i,a)=>i.value.__typename==="Deserialized"?n&&typeof i.value.data=="string"&&i.value.data?{...i,processedValue:JSON.stringify(n[a])}:{...i,processedValue:i.value.data}:i)}function Cl(t,e,r,n,i){const a=e.subscribe({query:yl,variables:t});let c=[],f=0,d=0,p;return Yr=setInterval(()=>{if(c.length){const v=Oa(c,n,i);xe.postMessage({message:Ne.SEND_RECORDS,batchedRecords:v||c,lastByKey:r,count:f,matchingRecordsCount:d}),Hr=[...Hr,...c],c=[]}else f?xe.postMessage({message:Ne.SEND_RECORDS,count:f}):p&&xe.postMessage({message:Ne.SEND_RECORDS,toConsumeCount:p});f=0,p=void 0},fi),a.subscribe(({data:v,errors:b})=>{v!=null&&v.consume&&(v.consume.__typename==="Record"&&(++d,c.push({...v.consume,topicName:t.topic,uuid:os()})),v.consume.__typename==="Stats"&&(f=v.consume.total.count),v.consume.__typename==="JSFilterError"&&xe.postMessage({message:Ne.JS_FILTER_ERROR,jsFilterError:v.consume}),v.consume.__typename==="TotalToConsume"&&(p=v.consume.count??v.consume.estimatedCount??void 0)),b&&xe.postMessage({message:Ne.ERRORS,errors:b})},v=>{xe.postMessage({message:Ne.ERRORS,errors:[v]})},()=>{_a(),setTimeout(()=>{xe.postMessage({message:Ne.CONSUME_STOPPED})},Rl)})}})();
