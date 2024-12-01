(function(){"use strict";var Qt=function(t,e){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},Qt(t,e)};function ae(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Qt(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var m=function(){return m=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)};function de(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function me(t,e,r,n){function i(o){return o instanceof r?o:new r(function(a){a(o)})}return new(r||(r=Promise))(function(o,a){function s(l){try{u(n.next(l))}catch(p){a(p)}}function c(l){try{u(n.throw(l))}catch(p){a(p)}}function u(l){l.done?o(l.value):i(l.value).then(s,c)}u((n=n.apply(t,e||[])).next())})}function ye(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(l){return c([u,l])}}function c(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(r=0)),r;)try{if(n=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,i=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=e.call(t,r)}catch(l){u=[6,l],i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function ve(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;var Bt="Invariant Violation",Hr=Object.setPrototypeOf,eo=Hr===void 0?function(t,e){return t.__proto__=e,t}:Hr,Xr=function(t){ae(e,t);function e(r){r===void 0&&(r=Bt);var n=t.call(this,typeof r=="number"?Bt+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=Bt,eo(n,e.prototype),n}return e}(Error);function Te(t,e){if(!t)throw new Xr(e)}var Zr=["debug","log","warn","error","silent"],to=Zr.indexOf("log");function yt(t){return function(){if(Zr.indexOf(t)>=to){var e=console[t]||console.log;return e.apply(console,arguments)}}}(function(t){t.debug=yt("debug"),t.log=yt("log"),t.warn=yt("warn"),t.error=yt("error")})(Te||(Te={}));var Ut="3.8.3";function se(t){try{return t()}catch{}}var en=se(function(){return globalThis})||se(function(){return window})||se(function(){return self})||se(function(){return global})||se(function(){return se.constructor("return this")()}),tn=new Map;function Gt(t){var e=tn.get(t)||1;return tn.set(t,e+1),"".concat(t,":").concat(e,":").concat(Math.random().toString(36).slice(2))}function rn(t,e){e===void 0&&(e=0);var r=Gt("stringifyForDisplay");return JSON.stringify(t,function(n,i){return i===void 0?r:i},e).split(JSON.stringify(r)).join("<undefined>")}function vt(t){return function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];t.apply(void 0,ve([typeof e=="number"?zt(e):e],r,!1))}}var C=Object.assign(function(e,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e||Te(e,zt(r,n))},{debug:vt(Te.debug),log:vt(Te.log),warn:vt(Te.warn),error:vt(Te.error)});function te(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Xr(zt(t,e))}var nn=Symbol.for("ApolloErrorMessageHandler_"+Ut);function zt(t,e){if(e===void 0&&(e=[]),!!t){var r=e.map(function(n){return typeof n=="string"?n:rn(n,2).slice(0,1e3)});return en[nn]&&en[nn](t,r)||"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Ut,message:t,args:r})))}}function gt(t,e){if(!!!t)throw new Error(e)}function ro(t){return typeof t=="object"&&t!==null}function no(t,e){if(!!!t)throw new Error("Unexpected invariant triggered.")}const io=/\r\n|[\n\r]/g;function Wt(t,e){let r=0,n=1;for(const i of t.body.matchAll(io)){if(typeof i.index=="number"||no(!1),i.index>=e)break;r=i.index+i[0].length,n+=1}return{line:n,column:e+1-r}}function oo(t){return on(t.source,Wt(t.source,t.start))}function on(t,e){const r=t.locationOffset.column-1,n="".padStart(r)+t.body,i=e.line-1,o=t.locationOffset.line-1,a=e.line+o,s=e.line===1?r:0,c=e.column+s,u=`${t.name}:${a}:${c}
`,l=n.split(/\r\n|[\n\r]/g),p=l[i];if(p.length>120){const f=Math.floor(c/80),h=c%80,y=[];for(let v=0;v<p.length;v+=80)y.push(p.slice(v,v+80));return u+an([[`${a} |`,y[0]],...y.slice(1,f+1).map(v=>["|",v]),["|","^".padStart(h)],["|",y[f+1]]])}return u+an([[`${a-1} |`,l[i-1]],[`${a} |`,p],["|","^".padStart(c)],[`${a+1} |`,l[i+1]]])}function an(t){const e=t.filter(([n,i])=>i!==void 0),r=Math.max(...e.map(([n])=>n.length));return e.map(([n,i])=>n.padStart(r)+(i?" "+i:"")).join(`
`)}function ao(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class Kt extends Error{constructor(e,...r){var n,i,o;const{nodes:a,source:s,positions:c,path:u,originalError:l,extensions:p}=ao(r);super(e),this.name="GraphQLError",this.path=u??void 0,this.originalError=l??void 0,this.nodes=sn(Array.isArray(a)?a:a?[a]:void 0);const f=sn((n=this.nodes)===null||n===void 0?void 0:n.map(y=>y.loc).filter(y=>y!=null));this.source=s??(f==null||(i=f[0])===null||i===void 0?void 0:i.source),this.positions=c??(f==null?void 0:f.map(y=>y.start)),this.locations=c&&s?c.map(y=>Wt(s,y)):f==null?void 0:f.map(y=>Wt(y.source,y.start));const h=ro(l==null?void 0:l.extensions)?l==null?void 0:l.extensions:void 0;this.extensions=(o=p??h)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),l!=null&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Kt):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(e+=`

`+oo(r.loc));else if(this.source&&this.locations)for(const r of this.locations)e+=`

`+on(this.source,r);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function sn(t){return t===void 0||t.length===0?void 0:t}function Y(t,e,r){return new Kt(`Syntax Error: ${r}`,{source:t,positions:[e]})}class so{constructor(e,r,n){this.start=e.start,this.end=r.end,this.startToken=e,this.endToken=r,this.source=n}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class cn{constructor(e,r,n,i,o,a){this.kind=e,this.start=r,this.end=n,this.line=i,this.column=o,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const un={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},co=new Set(Object.keys(un));function ln(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&co.has(e)}var _e;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(_e||(_e={}));var Jt;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Jt||(Jt={}));var w;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(w||(w={}));function Yt(t){return t===9||t===32}function Ke(t){return t>=48&&t<=57}function fn(t){return t>=97&&t<=122||t>=65&&t<=90}function hn(t){return fn(t)||t===95}function uo(t){return fn(t)||Ke(t)||t===95}function lo(t){var e;let r=Number.MAX_SAFE_INTEGER,n=null,i=-1;for(let a=0;a<t.length;++a){var o;const s=t[a],c=fo(s);c!==s.length&&(n=(o=n)!==null&&o!==void 0?o:a,i=a,a!==0&&c<r&&(r=c))}return t.map((a,s)=>s===0?a:a.slice(r)).slice((e=n)!==null&&e!==void 0?e:0,i+1)}function fo(t){let e=0;for(;e<t.length&&Yt(t.charCodeAt(e));)++e;return e}function ho(t,e){const r=t.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,o=n.length>1&&n.slice(1).every(h=>h.length===0||Yt(h.charCodeAt(0))),a=r.endsWith('\\"""'),s=t.endsWith('"')&&!a,c=t.endsWith("\\"),u=s||c,l=!i||t.length>70||u||o||a;let p="";const f=i&&Yt(t.charCodeAt(0));return(l&&!f||o)&&(p+=`
`),p+=r,(l||u)&&(p+=`
`),'"""'+p+'"""'}var I;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(I||(I={}));class po{constructor(e){const r=new cn(I.SOF,0,0,0,0);this.source=e,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==I.EOF)do if(e.next)e=e.next;else{const r=yo(this,e.end);e.next=r,r.prev=e,e=r}while(e.kind===I.COMMENT);return e}}function mo(t){return t===I.BANG||t===I.DOLLAR||t===I.AMP||t===I.PAREN_L||t===I.PAREN_R||t===I.SPREAD||t===I.COLON||t===I.EQUALS||t===I.AT||t===I.BRACKET_L||t===I.BRACKET_R||t===I.BRACE_L||t===I.PIPE||t===I.BRACE_R}function xe(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function bt(t,e){return pn(t.charCodeAt(e))&&dn(t.charCodeAt(e+1))}function pn(t){return t>=55296&&t<=56319}function dn(t){return t>=56320&&t<=57343}function Ne(t,e){const r=t.source.body.codePointAt(e);if(r===void 0)return I.EOF;if(r>=32&&r<=126){const n=String.fromCodePoint(r);return n==='"'?`'"'`:`"${n}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function K(t,e,r,n,i){const o=t.line,a=1+r-t.lineStart;return new cn(e,r,n,o,a,i)}function yo(t,e){const r=t.source.body,n=r.length;let i=e;for(;i<n;){const o=r.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++t.line,t.lineStart=i;continue;case 13:r.charCodeAt(i+1)===10?i+=2:++i,++t.line,t.lineStart=i;continue;case 35:return vo(t,i);case 33:return K(t,I.BANG,i,i+1);case 36:return K(t,I.DOLLAR,i,i+1);case 38:return K(t,I.AMP,i,i+1);case 40:return K(t,I.PAREN_L,i,i+1);case 41:return K(t,I.PAREN_R,i,i+1);case 46:if(r.charCodeAt(i+1)===46&&r.charCodeAt(i+2)===46)return K(t,I.SPREAD,i,i+3);break;case 58:return K(t,I.COLON,i,i+1);case 61:return K(t,I.EQUALS,i,i+1);case 64:return K(t,I.AT,i,i+1);case 91:return K(t,I.BRACKET_L,i,i+1);case 93:return K(t,I.BRACKET_R,i,i+1);case 123:return K(t,I.BRACE_L,i,i+1);case 124:return K(t,I.PIPE,i,i+1);case 125:return K(t,I.BRACE_R,i,i+1);case 34:return r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34?ko(t,i):bo(t,i)}if(Ke(o)||o===45)return go(t,i,o);if(hn(o))return Oo(t,i);throw Y(t.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xe(o)||bt(r,i)?`Unexpected character: ${Ne(t,i)}.`:`Invalid character: ${Ne(t,i)}.`)}return K(t,I.EOF,n,n)}function vo(t,e){const r=t.source.body,n=r.length;let i=e+1;for(;i<n;){const o=r.charCodeAt(i);if(o===10||o===13)break;if(xe(o))++i;else if(bt(r,i))i+=2;else break}return K(t,I.COMMENT,e,i,r.slice(e+1,i))}function go(t,e,r){const n=t.source.body;let i=e,o=r,a=!1;if(o===45&&(o=n.charCodeAt(++i)),o===48){if(o=n.charCodeAt(++i),Ke(o))throw Y(t.source,i,`Invalid number, unexpected digit after 0: ${Ne(t,i)}.`)}else i=Ht(t,i,o),o=n.charCodeAt(i);if(o===46&&(a=!0,o=n.charCodeAt(++i),i=Ht(t,i,o),o=n.charCodeAt(i)),(o===69||o===101)&&(a=!0,o=n.charCodeAt(++i),(o===43||o===45)&&(o=n.charCodeAt(++i)),i=Ht(t,i,o),o=n.charCodeAt(i)),o===46||hn(o))throw Y(t.source,i,`Invalid number, expected digit but got: ${Ne(t,i)}.`);return K(t,a?I.FLOAT:I.INT,e,i,n.slice(e,i))}function Ht(t,e,r){if(!Ke(r))throw Y(t.source,e,`Invalid number, expected digit but got: ${Ne(t,e)}.`);const n=t.source.body;let i=e+1;for(;Ke(n.charCodeAt(i));)++i;return i}function bo(t,e){const r=t.source.body,n=r.length;let i=e+1,o=i,a="";for(;i<n;){const s=r.charCodeAt(i);if(s===34)return a+=r.slice(o,i),K(t,I.STRING,e,i+1,a);if(s===92){a+=r.slice(o,i);const c=r.charCodeAt(i+1)===117?r.charCodeAt(i+2)===123?Io(t,i):So(t,i):Eo(t,i);a+=c.value,i+=c.size,o=i;continue}if(s===10||s===13)break;if(xe(s))++i;else if(bt(r,i))i+=2;else throw Y(t.source,i,`Invalid character within String: ${Ne(t,i)}.`)}throw Y(t.source,i,"Unterminated string.")}function Io(t,e){const r=t.source.body;let n=0,i=3;for(;i<12;){const o=r.charCodeAt(e+i++);if(o===125){if(i<5||!xe(n))break;return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|Je(o),n<0)break}throw Y(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+i)}".`)}function So(t,e){const r=t.source.body,n=mn(r,e+2);if(xe(n))return{value:String.fromCodePoint(n),size:6};if(pn(n)&&r.charCodeAt(e+6)===92&&r.charCodeAt(e+7)===117){const i=mn(r,e+8);if(dn(i))return{value:String.fromCodePoint(n,i),size:12}}throw Y(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+6)}".`)}function mn(t,e){return Je(t.charCodeAt(e))<<12|Je(t.charCodeAt(e+1))<<8|Je(t.charCodeAt(e+2))<<4|Je(t.charCodeAt(e+3))}function Je(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Eo(t,e){const r=t.source.body;switch(r.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Y(t.source,e,`Invalid character escape sequence: "${r.slice(e,e+2)}".`)}function ko(t,e){const r=t.source.body,n=r.length;let i=t.lineStart,o=e+3,a=o,s="";const c=[];for(;o<n;){const u=r.charCodeAt(o);if(u===34&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34){s+=r.slice(a,o),c.push(s);const l=K(t,I.BLOCK_STRING,e,o+3,lo(c).join(`
`));return t.line+=c.length-1,t.lineStart=i,l}if(u===92&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34&&r.charCodeAt(o+3)===34){s+=r.slice(a,o),a=o+1,o+=4;continue}if(u===10||u===13){s+=r.slice(a,o),c.push(s),u===13&&r.charCodeAt(o+1)===10?o+=2:++o,s="",a=o,i=o;continue}if(xe(u))++o;else if(bt(r,o))o+=2;else throw Y(t.source,o,`Invalid character within String: ${Ne(t,o)}.`)}throw Y(t.source,o,"Unterminated string.")}function Oo(t,e){const r=t.source.body,n=r.length;let i=e+1;for(;i<n;){const o=r.charCodeAt(i);if(uo(o))++i;else break}return K(t,I.NAME,e,i,r.slice(e,i))}const wo=10,yn=2;function Xt(t){return It(t,[])}function It(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return To(t,e);default:return String(t)}}function To(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const r=[...e,t];if(No(t)){const n=t.toJSON();if(n!==t)return typeof n=="string"?n:It(n,r)}else if(Array.isArray(t))return Co(t,r);return Do(t,r)}function No(t){return typeof t.toJSON=="function"}function Do(t,e){const r=Object.entries(t);return r.length===0?"{}":e.length>yn?"["+Ro(t)+"]":"{ "+r.map(([i,o])=>i+": "+It(o,e)).join(", ")+" }"}function Co(t,e){if(t.length===0)return"[]";if(e.length>yn)return"[Array]";const r=Math.min(wo,t.length),n=t.length-r,i=[];for(let o=0;o<r;++o)i.push(It(t[o],e));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function Ro(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const r=t.constructor.name;if(typeof r=="string"&&r!=="")return r}return e}const _o=globalThis.process?function(e,r){return e instanceof r}:function(e,r){if(e instanceof r)return!0;if(typeof e=="object"&&e!==null){var n;const i=r.prototype[Symbol.toStringTag],o=Symbol.toStringTag in e?e[Symbol.toStringTag]:(n=e.constructor)===null||n===void 0?void 0:n.name;if(i===o){const a=Xt(e);throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class vn{constructor(e,r="GraphQL request",n={line:1,column:1}){typeof e=="string"||gt(!1,`Body must be a string. Received: ${Xt(e)}.`),this.body=e,this.name=r,this.locationOffset=n,this.locationOffset.line>0||gt(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||gt(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function xo(t){return _o(t,vn)}function $o(t,e){return new Fo(t,e).parseDocument()}class Fo{constructor(e,r={}){const n=xo(e)?e:new vn(e);this._lexer=new po(n),this._options=r,this._tokenCounter=0}parseName(){const e=this.expectToken(I.NAME);return this.node(e,{kind:w.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:w.DOCUMENT,definitions:this.many(I.SOF,this.parseDefinition,I.EOF)})}parseDefinition(){if(this.peek(I.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),r=e?this._lexer.lookahead():this._lexer.token;if(r.kind===I.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw Y(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(I.BRACE_L))return this.node(e,{kind:w.OPERATION_DEFINITION,operation:_e.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let n;return this.peek(I.NAME)&&(n=this.parseName()),this.node(e,{kind:w.OPERATION_DEFINITION,operation:r,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(I.NAME);switch(e.value){case"query":return _e.QUERY;case"mutation":return _e.MUTATION;case"subscription":return _e.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(I.PAREN_L,this.parseVariableDefinition,I.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:w.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(I.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(I.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(I.DOLLAR),this.node(e,{kind:w.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:w.SELECTION_SET,selections:this.many(I.BRACE_L,this.parseSelection,I.BRACE_R)})}parseSelection(){return this.peek(I.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,r=this.parseName();let n,i;return this.expectOptionalToken(I.COLON)?(n=r,i=this.parseName()):i=r,this.node(e,{kind:w.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(I.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const r=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(I.PAREN_L,r,I.PAREN_R)}parseArgument(e=!1){const r=this._lexer.token,n=this.parseName();return this.expectToken(I.COLON),this.node(r,{kind:w.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(I.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(I.NAME)?this.node(e,{kind:w.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:w.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:w.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:w.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const r=this._lexer.token;switch(r.kind){case I.BRACKET_L:return this.parseList(e);case I.BRACE_L:return this.parseObject(e);case I.INT:return this.advanceLexer(),this.node(r,{kind:w.INT,value:r.value});case I.FLOAT:return this.advanceLexer(),this.node(r,{kind:w.FLOAT,value:r.value});case I.STRING:case I.BLOCK_STRING:return this.parseStringLiteral();case I.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:w.BOOLEAN,value:!0});case"false":return this.node(r,{kind:w.BOOLEAN,value:!1});case"null":return this.node(r,{kind:w.NULL});default:return this.node(r,{kind:w.ENUM,value:r.value})}case I.DOLLAR:if(e)if(this.expectToken(I.DOLLAR),this._lexer.token.kind===I.NAME){const n=this._lexer.token.value;throw Y(this._lexer.source,r.start,`Unexpected variable "$${n}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:w.STRING,value:e.value,block:e.kind===I.BLOCK_STRING})}parseList(e){const r=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:w.LIST,values:this.any(I.BRACKET_L,r,I.BRACKET_R)})}parseObject(e){const r=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:w.OBJECT,fields:this.any(I.BRACE_L,r,I.BRACE_R)})}parseObjectField(e){const r=this._lexer.token,n=this.parseName();return this.expectToken(I.COLON),this.node(r,{kind:w.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const r=[];for(;this.peek(I.AT);)r.push(this.parseDirective(e));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const r=this._lexer.token;return this.expectToken(I.AT),this.node(r,{kind:w.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let r;if(this.expectOptionalToken(I.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(I.BRACKET_R),r=this.node(e,{kind:w.LIST_TYPE,type:n})}else r=this.parseNamedType();return this.expectOptionalToken(I.BANG)?this.node(e,{kind:w.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:w.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(I.STRING)||this.peek(I.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);return this.node(e,{kind:w.SCHEMA_DEFINITION,description:r,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,r=this.parseOperationType();this.expectToken(I.COLON);const n=this.parseNamedType();return this.node(e,{kind:w.OPERATION_TYPE_DEFINITION,operation:r,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:w.SCALAR_TYPE_DEFINITION,description:r,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:w.OBJECT_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(I.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(I.BRACE_L,this.parseFieldDefinition,I.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(I.COLON);const o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(e,{kind:w.FIELD_DEFINITION,description:r,name:n,arguments:i,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(I.PAREN_L,this.parseInputValueDef,I.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseName();this.expectToken(I.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(I.EQUALS)&&(o=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(e,{kind:w.INPUT_VALUE_DEFINITION,description:r,name:n,type:i,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:w.INTERFACE_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:o,fields:a})}parseUnionTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(e,{kind:w.UNION_TYPE_DEFINITION,description:r,name:n,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(I.EQUALS)?this.delimitedMany(I.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(e,{kind:w.ENUM_TYPE_DEFINITION,description:r,name:n,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(I.BRACE_L,this.parseEnumValueDefinition,I.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:w.ENUM_VALUE_DEFINITION,description:r,name:n,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Y(this._lexer.source,this._lexer.token.start,`${St(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(e,{kind:w.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:n,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(I.BRACE_L,this.parseInputValueDef,I.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),n=this.optionalMany(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);if(r.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:w.SCHEMA_EXTENSION,directives:r,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),n=this.parseConstDirectives();if(n.length===0)throw this.unexpected();return this.node(e,{kind:w.SCALAR_TYPE_EXTENSION,name:r,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:w.OBJECT_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:o})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:w.INTERFACE_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:o})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:w.UNION_TYPE_EXTENSION,name:r,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:w.ENUM_TYPE_EXTENSION,name:r,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:w.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(I.AT);const n=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(e,{kind:w.DIRECTIVE_DEFINITION,description:r,name:n,arguments:i,repeatable:o,locations:a})}parseDirectiveLocations(){return this.delimitedMany(I.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(Jt,r.value))return r;throw this.unexpected(e)}node(e,r){return this._options.noLocation!==!0&&(r.loc=new so(e,this._lexer.lastToken,this._lexer.source)),r}peek(e){return this._lexer.token.kind===e}expectToken(e){const r=this._lexer.token;if(r.kind===e)return this.advanceLexer(),r;throw Y(this._lexer.source,r.start,`Expected ${gn(e)}, found ${St(r)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const r=this._lexer.token;if(r.kind===I.NAME&&r.value===e)this.advanceLexer();else throw Y(this._lexer.source,r.start,`Expected "${e}", found ${St(r)}.`)}expectOptionalKeyword(e){const r=this._lexer.token;return r.kind===I.NAME&&r.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const r=e??this._lexer.token;return Y(this._lexer.source,r.start,`Unexpected ${St(r)}.`)}any(e,r,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(r.call(this));return i}optionalMany(e,r,n){if(this.expectOptionalToken(e)){const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}return[]}many(e,r,n){this.expectToken(e);const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}delimitedMany(e,r){this.expectOptionalToken(e);const n=[];do n.push(r.call(this));while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,r=this._lexer.advance();if(e!==void 0&&r.kind!==I.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw Y(this._lexer.source,r.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function St(t){const e=t.value;return gn(t.kind)+(e!=null?` "${e}"`:"")}function gn(t){return mo(t)?`"${t}"`:t}function Ao(t){return`"${t.replace(Po,Lo)}"`}const Po=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Lo(t){return Mo[t.charCodeAt(0)]}const Mo=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Zt=Object.freeze({});function fe(t,e,r=un){const n=new Map;for(const d of Object.values(w))n.set(d,jo(e,d));let i,o=Array.isArray(t),a=[t],s=-1,c=[],u=t,l,p;const f=[],h=[];do{s++;const d=s===a.length,E=d&&c.length!==0;if(d){if(l=h.length===0?void 0:f[f.length-1],u=p,p=h.pop(),E)if(o){u=u.slice();let k=0;for(const[D,O]of c){const N=D-k;O===null?(u.splice(N,1),k++):u[N]=O}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[k,D]of c)u[k]=D}s=i.index,a=i.keys,c=i.edits,o=i.inArray,i=i.prev}else if(p){if(l=o?s:a[s],u=p[l],u==null)continue;f.push(l)}let g;if(!Array.isArray(u)){var y,v;ln(u)||gt(!1,`Invalid AST Node: ${Xt(u)}.`);const k=d?(y=n.get(u.kind))===null||y===void 0?void 0:y.leave:(v=n.get(u.kind))===null||v===void 0?void 0:v.enter;if(g=k==null?void 0:k.call(e,u,l,p,f,h),g===Zt)break;if(g===!1){if(!d){f.pop();continue}}else if(g!==void 0&&(c.push([l,g]),!d))if(ln(g))u=g;else{f.pop();continue}}if(g===void 0&&E&&c.push([l,u]),d)f.pop();else{var b;i={inArray:o,index:s,keys:a,edits:c,prev:i},o=Array.isArray(u),a=o?u:(b=r[u.kind])!==null&&b!==void 0?b:[],s=-1,c=[],p&&h.push(p),p=u}}while(i!==void 0);return c.length!==0?c[c.length-1][1]:t}function jo(t,e){const r=t[e];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:t.enter,leave:t.leave}}function qo(t){return fe(t,Qo)}const Vo=80,Qo={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>T(t.definitions,`

`)},OperationDefinition:{leave(t){const e=$("(",T(t.variableDefinitions,", "),")"),r=T([t.operation,T([t.name,e]),T(t.directives," ")]," ");return(r==="query"?"":r+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:r,directives:n})=>t+": "+e+$(" = ",r)+$(" ",T(n," "))},SelectionSet:{leave:({selections:t})=>ce(t)},Field:{leave({alias:t,name:e,arguments:r,directives:n,selectionSet:i}){const o=$("",t,": ")+e;let a=o+$("(",T(r,", "),")");return a.length>Vo&&(a=o+$(`(
`,Et(T(r,`
`)),`
)`)),T([a,T(n," "),i]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+$(" ",T(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:r})=>T(["...",$("on ",t),T(e," "),r]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:r,directives:n,selectionSet:i})=>`fragment ${t}${$("(",T(r,", "),")")} on ${e} ${$("",T(n," ")," ")}`+i},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?ho(t):Ao(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+T(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+T(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+$("(",T(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:r})=>$("",t,`
`)+T(["schema",T(e," "),ce(r)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:r})=>$("",t,`
`)+T(["scalar",e,T(r," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:r,directives:n,fields:i})=>$("",t,`
`)+T(["type",e,$("implements ",T(r," & ")),T(n," "),ce(i)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:r,type:n,directives:i})=>$("",t,`
`)+e+(bn(r)?$(`(
`,Et(T(r,`
`)),`
)`):$("(",T(r,", "),")"))+": "+n+$(" ",T(i," "))},InputValueDefinition:{leave:({description:t,name:e,type:r,defaultValue:n,directives:i})=>$("",t,`
`)+T([e+": "+r,$("= ",n),T(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:r,directives:n,fields:i})=>$("",t,`
`)+T(["interface",e,$("implements ",T(r," & ")),T(n," "),ce(i)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:r,types:n})=>$("",t,`
`)+T(["union",e,T(r," "),$("= ",T(n," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:r,values:n})=>$("",t,`
`)+T(["enum",e,T(r," "),ce(n)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:r})=>$("",t,`
`)+T([e,T(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:r,fields:n})=>$("",t,`
`)+T(["input",e,T(r," "),ce(n)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:r,repeatable:n,locations:i})=>$("",t,`
`)+"directive @"+e+(bn(r)?$(`(
`,Et(T(r,`
`)),`
)`):$("(",T(r,", "),")"))+(n?" repeatable":"")+" on "+T(i," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>T(["extend schema",T(t," "),ce(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>T(["extend scalar",t,T(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:r,fields:n})=>T(["extend type",t,$("implements ",T(e," & ")),T(r," "),ce(n)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:r,fields:n})=>T(["extend interface",t,$("implements ",T(e," & ")),T(r," "),ce(n)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:r})=>T(["extend union",t,T(e," "),$("= ",T(r," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:r})=>T(["extend enum",t,T(e," "),ce(r)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:r})=>T(["extend input",t,T(e," "),ce(r)]," ")}};function T(t,e=""){var r;return(r=t==null?void 0:t.filter(n=>n).join(e))!==null&&r!==void 0?r:""}function ce(t){return $(`{
`,Et(T(t,`
`)),`
}`)}function $(t,e,r=""){return e!=null&&e!==""?t+e+r:""}function Et(t){return $("  ",t.replace(/\n/g,`
  `))}function bn(t){var e;return(e=t==null?void 0:t.some(r=>r.includes(`
`)))!==null&&e!==void 0?e:!1}function In(t){return t.kind===w.FIELD||t.kind===w.FRAGMENT_SPREAD||t.kind===w.INLINE_FRAGMENT}function Ye(t,e){var r=t.directives;return!r||!r.length?!0:Go(r).every(function(n){var i=n.directive,o=n.ifArgument,a=!1;return o.value.kind==="Variable"?(a=e&&e[o.value.name.value],C(a!==void 0,64,i.name.value)):a=o.value.value,i.name.value==="skip"?!a:a})}function He(t,e,r){var n=new Set(t),i=n.size;return fe(e,{Directive:function(o){if(n.delete(o.name.value)&&(!r||!n.size))return Zt}}),r?!n.size:n.size<i}function Bo(t){return t&&He(["client","export"],t,!0)}function Uo(t){var e=t.name.value;return e==="skip"||e==="include"}function Go(t){var e=[];return t&&t.length&&t.forEach(function(r){if(Uo(r)){var n=r.arguments,i=r.name.value;C(n&&n.length===1,65,i);var o=n[0];C(o.name&&o.name.value==="if",66,i);var a=o.value;C(a&&(a.kind==="Variable"||a.kind==="BooleanValue"),67,i),e.push({directive:r,ifArgument:o})}}),e}const zo=()=>Object.create(null),{forEach:Wo,slice:Ko}=Array.prototype,{hasOwnProperty:Jo}=Object.prototype;class ge{constructor(e=!0,r=zo){this.weakness=e,this.makeData=r}lookup(...e){return this.lookupArray(e)}lookupArray(e){let r=this;return Wo.call(e,n=>r=r.getChildTrie(n)),Jo.call(r,"data")?r.data:r.data=this.makeData(Ko.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let r=this;for(let n=0,i=e.length;r&&n<i;++n){const o=this.weakness&&Sn(e[n])?r.weak:r.strong;r=o&&o.get(e[n])}return r&&r.data}getChildTrie(e){const r=this.weakness&&Sn(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map);let n=r.get(e);return n||r.set(e,n=new ge(this.weakness,this.makeData)),n}}function Sn(t){switch(typeof t){case"object":if(t===null)break;case"function":return!0}return!1}var he=typeof WeakMap=="function"&&se(function(){return navigator.product})!=="ReactNative",En=typeof WeakSet=="function",kn=typeof Symbol=="function"&&typeof Symbol.for=="function",kt=kn&&Symbol.asyncIterator;se(function(){return window.document.createElement}),se(function(){return navigator.userAgent.indexOf("jsdom")>=0});function V(t){return t!==null&&typeof t=="object"}function Yo(t,e){var r=e,n=[];t.definitions.forEach(function(o){if(o.kind==="OperationDefinition")throw te(68,o.operation,o.name?" named '".concat(o.name.value,"'"):"");o.kind==="FragmentDefinition"&&n.push(o)}),typeof r>"u"&&(C(n.length===1,69,n.length),r=n[0].name.value);var i=m(m({},t),{definitions:ve([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],t.definitions,!0)});return i}function Ot(t){t===void 0&&(t=[]);var e={};return t.forEach(function(r){e[r.name.value]=r}),e}function wt(t,e){switch(t.kind){case"InlineFragment":return t;case"FragmentSpread":{var r=t.name.value;if(typeof e=="function")return e(r);var n=e&&e[r];return C(n,70,r),n||null}default:return null}}function $e(t){return{__ref:String(t)}}function P(t){return!!(t&&typeof t=="object"&&typeof t.__ref=="string")}function Ho(t){return V(t)&&t.kind==="Document"&&Array.isArray(t.definitions)}function Xo(t){return t.kind==="StringValue"}function Zo(t){return t.kind==="BooleanValue"}function ea(t){return t.kind==="IntValue"}function ta(t){return t.kind==="FloatValue"}function ra(t){return t.kind==="Variable"}function na(t){return t.kind==="ObjectValue"}function ia(t){return t.kind==="ListValue"}function oa(t){return t.kind==="EnumValue"}function aa(t){return t.kind==="NullValue"}function Fe(t,e,r,n){if(ea(r)||ta(r))t[e.value]=Number(r.value);else if(Zo(r)||Xo(r))t[e.value]=r.value;else if(na(r)){var i={};r.fields.map(function(a){return Fe(i,a.name,a.value,n)}),t[e.value]=i}else if(ra(r)){var o=(n||{})[r.name.value];t[e.value]=o}else if(ia(r))t[e.value]=r.values.map(function(a){var s={};return Fe(s,e,a,n),s[e.value]});else if(oa(r))t[e.value]=r.value;else if(aa(r))t[e.value]=null;else throw te(79,e.value,r.kind)}function sa(t,e){var r=null;t.directives&&(r={},t.directives.forEach(function(i){r[i.name.value]={},i.arguments&&i.arguments.forEach(function(o){var a=o.name,s=o.value;return Fe(r[i.name.value],a,s,e)})}));var n=null;return t.arguments&&t.arguments.length&&(n={},t.arguments.forEach(function(i){var o=i.name,a=i.value;return Fe(n,o,a,e)})),er(t.name.value,n,r)}var ca=["connection","include","skip","client","rest","export","nonreactive"],er=Object.assign(function(t,e,r){if(e&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(s){i[s]=e[s]}),"".concat(r.connection.key,"(").concat(Xe(i),")")}else return r.connection.key;var o=t;if(e){var a=Xe(e);o+="(".concat(a,")")}return r&&Object.keys(r).forEach(function(s){ca.indexOf(s)===-1&&(r[s]&&Object.keys(r[s]).length?o+="@".concat(s,"(").concat(Xe(r[s]),")"):o+="@".concat(s))}),o},{setStringify:function(t){var e=Xe;return Xe=t,e}}),Xe=function(e){return JSON.stringify(e,ua)};function ua(t,e){return V(e)&&!Array.isArray(e)&&(e=Object.keys(e).sort().reduce(function(r,n){return r[n]=e[n],r},{})),e}function Tt(t,e){if(t.arguments&&t.arguments.length){var r={};return t.arguments.forEach(function(n){var i=n.name,o=n.value;return Fe(r,i,o,e)}),r}return null}function be(t){return t.alias?t.alias.value:t.name.value}function tr(t,e,r){for(var n,i=0,o=e.selections;i<o.length;i++){var a=o[i];if(Ie(a)){if(a.name.value==="__typename")return t[be(a)]}else n?n.push(a):n=[a]}if(typeof t.__typename=="string")return t.__typename;if(n)for(var s=0,c=n;s<c.length;s++){var a=c[s],u=tr(t,wt(a,r).selectionSet,r);if(typeof u=="string")return u}}function Ie(t){return t.kind==="Field"}function la(t){return t.kind==="InlineFragment"}function Ze(t){C(t&&t.kind==="Document",71);var e=t.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw te(72,r.kind);return r});return C(e.length<=1,73,e.length),t}function et(t){return Ze(t),t.definitions.filter(function(e){return e.kind==="OperationDefinition"})[0]}function rr(t){return t.definitions.filter(function(e){return e.kind==="OperationDefinition"&&!!e.name}).map(function(e){return e.name.value})[0]||null}function Nt(t){return t.definitions.filter(function(e){return e.kind==="FragmentDefinition"})}function On(t){var e=et(t);return C(e&&e.operation==="query",74),e}function fa(t){C(t.kind==="Document",75),C(t.definitions.length<=1,76);var e=t.definitions[0];return C(e.kind==="FragmentDefinition",77),e}function tt(t){Ze(t);for(var e,r=0,n=t.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var o=i.operation;if(o==="query"||o==="mutation"||o==="subscription")return i}i.kind==="FragmentDefinition"&&!e&&(e=i)}if(e)return e;throw te(78)}function nr(t){var e=Object.create(null),r=t&&t.variableDefinitions;return r&&r.length&&r.forEach(function(n){n.defaultValue&&Fe(e,n.variable.name,n.defaultValue)}),e}function ha(t){return t}var wn=function(){function t(e,r){r===void 0&&(r=Object.create(null)),this.resultCache=En?new WeakSet:new Set,this.transform=e,r.getCacheKey&&(this.getCacheKey=r.getCacheKey),r.cache!==!1&&(this.stableCacheKeys=new ge(he,function(n){return{key:n}}))}return t.prototype.getCacheKey=function(e){return[e]},t.identity=function(){return new t(ha,{cache:!1})},t.split=function(e,r,n){return n===void 0&&(n=t.identity()),new t(function(i){var o=e(i)?r:n;return o.transformDocument(i)},{cache:!1})},t.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e;var r=this.getStableCacheEntry(e);if(r&&r.value)return r.value;Ze(e);var n=this.transform(e);return this.resultCache.add(n),r&&(r.value=n),n},t.prototype.concat=function(e){var r=this;return new t(function(n){return e.transformDocument(r.transformDocument(n))},{cache:!1})},t.prototype.getStableCacheEntry=function(e){if(this.stableCacheKeys){var r=this.getCacheKey(e);if(r)return C(Array.isArray(r),63),this.stableCacheKeys.lookupArray(r)}},t}(),Ae=he?new WeakMap:void 0,ir=function(t){var e;return e=Ae==null?void 0:Ae.get(t),e||(e=qo(t),Ae==null||Ae.set(t,e)),e},z=Array.isArray;function le(t){return Array.isArray(t)&&t.length>0}var Tn={kind:w.FIELD,name:{kind:w.NAME,value:"__typename"}};function Nn(t,e){return!t||t.selectionSet.selections.every(function(r){return r.kind===w.FRAGMENT_SPREAD&&Nn(e[r.name.value],e)})}function pa(t){return Nn(et(t)||fa(t),Ot(Nt(t)))?null:t}function da(t){var e=new Map,r=new Map;return t.forEach(function(n){n&&(n.name?e.set(n.name,n):n.test&&r.set(n.test,n))}),function(n){var i=e.get(n.name.value);return!i&&r.size&&r.forEach(function(o,a){a(n)&&(i=o)}),i}}function Dn(t){var e=new Map;return function(n){n===void 0&&(n=t);var i=e.get(n);return i||e.set(n,i={variables:new Set,fragmentSpreads:new Set}),i}}function Cn(t,e){Ze(e);for(var r=Dn(""),n=Dn(""),i=function(d){for(var E=0,g=void 0;E<d.length&&(g=d[E]);++E)if(!z(g)){if(g.kind===w.OPERATION_DEFINITION)return r(g.name&&g.name.value);if(g.kind===w.FRAGMENT_DEFINITION)return n(g.name.value)}return globalThis.__DEV__!==!1&&C.error(80),null},o=0,a=e.definitions.length-1;a>=0;--a)e.definitions[a].kind===w.OPERATION_DEFINITION&&++o;var s=da(t),c=function(d){return le(d)&&d.map(s).some(function(E){return E&&E.remove})},u=new Map,l=!1,p={enter:function(d){if(c(d.directives))return l=!0,null}},f=fe(e,{Field:p,InlineFragment:p,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(d,E,g,k,D){var O=i(D);O&&O.variables.add(d.name.value)}},FragmentSpread:{enter:function(d,E,g,k,D){if(c(d.directives))return l=!0,null;var O=i(D);O&&O.fragmentSpreads.add(d.name.value)}},FragmentDefinition:{enter:function(d,E,g,k){u.set(JSON.stringify(k),d)},leave:function(d,E,g,k){var D=u.get(JSON.stringify(k));if(d===D)return d;if(o>0&&d.selectionSet.selections.every(function(O){return O.kind===w.FIELD&&O.name.value==="__typename"}))return n(d.name.value).removed=!0,l=!0,null}},Directive:{leave:function(d){if(s(d))return l=!0,null}}});if(!l)return e;var h=function(d){return d.transitiveVars||(d.transitiveVars=new Set(d.variables),d.removed||d.fragmentSpreads.forEach(function(E){h(n(E)).transitiveVars.forEach(function(g){d.transitiveVars.add(g)})})),d},y=new Set;f.definitions.forEach(function(d){d.kind===w.OPERATION_DEFINITION?h(r(d.name&&d.name.value)).fragmentSpreads.forEach(function(E){y.add(E)}):d.kind===w.FRAGMENT_DEFINITION&&o===0&&!n(d.name.value).removed&&y.add(d.name.value)}),y.forEach(function(d){h(n(d)).fragmentSpreads.forEach(function(E){y.add(E)})});var v=function(d){return!!(!y.has(d)||n(d).removed)},b={enter:function(d){if(v(d.name.value))return null}};return pa(fe(f,{FragmentSpread:b,FragmentDefinition:b,OperationDefinition:{leave:function(d){if(d.variableDefinitions){var E=h(r(d.name&&d.name.value)).transitiveVars;if(E.size<d.variableDefinitions.length)return m(m({},d),{variableDefinitions:d.variableDefinitions.filter(function(g){return E.has(g.variable.name.value)})})}}}}))}var or=Object.assign(function(t){return fe(t,{SelectionSet:{enter:function(e,r,n){if(!(n&&n.kind===w.OPERATION_DEFINITION)){var i=e.selections;if(i){var o=i.some(function(s){return Ie(s)&&(s.name.value==="__typename"||s.name.value.lastIndexOf("__",0)===0)});if(!o){var a=n;if(!(Ie(a)&&a.directives&&a.directives.some(function(s){return s.name.value==="export"})))return m(m({},e),{selections:ve(ve([],i,!0),[Tn],!1)})}}}}}})},{added:function(t){return t===Tn}});function ma(t){var e=tt(t),r=e.operation;if(r==="query")return t;var n=fe(t,{OperationDefinition:{enter:function(i){return m(m({},i),{operation:"query"})}}});return n}function Rn(t){Ze(t);var e=Cn([{test:function(r){return r.name.value==="client"},remove:!0}],t);return e}var ya=Object.prototype.hasOwnProperty;function _n(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ar(t)}function ar(t){var e=t[0]||{},r=t.length;if(r>1)for(var n=new Se,i=1;i<r;++i)e=n.merge(e,t[i]);return e}var va=function(t,e,r){return this.merge(t[r],e[r])},Se=function(){function t(e){e===void 0&&(e=va),this.reconciler=e,this.isObject=V,this.pastCopies=new Set}return t.prototype.merge=function(e,r){for(var n=this,i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];return V(r)&&V(e)?(Object.keys(r).forEach(function(a){if(ya.call(e,a)){var s=e[a];if(r[a]!==s){var c=n.reconciler.apply(n,ve([e,r,a],i,!1));c!==s&&(e=n.shallowCopyForMerge(e),e[a]=c)}}else e=n.shallowCopyForMerge(e),e[a]=r[a]}),e):r},t.prototype.shallowCopyForMerge=function(e){return V(e)&&(this.pastCopies.has(e)||(Array.isArray(e)?e=e.slice(0):e=m({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},t}();function ga(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=ba(t))||e){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(t,e){if(t){if(typeof t=="string")return xn(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xn(t,e)}}function xn(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function $n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function sr(t,e,r){return e&&$n(t.prototype,e),r&&$n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var cr=function(){return typeof Symbol=="function"},ur=function(t){return cr()&&!!Symbol[t]},lr=function(t){return ur(t)?Symbol[t]:"@@"+t};cr()&&!ur("observable")&&(Symbol.observable=Symbol("observable"));var Ia=lr("iterator"),fr=lr("observable"),Fn=lr("species");function Dt(t,e){var r=t[e];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function rt(t){var e=t.constructor;return e!==void 0&&(e=e[Fn],e===null&&(e=void 0)),e!==void 0?e:Q}function Sa(t){return t instanceof Q}function Pe(t){Pe.log?Pe.log(t):setTimeout(function(){throw t})}function Ct(t){Promise.resolve().then(function(){try{t()}catch(e){Pe(e)}})}function An(t){var e=t._cleanup;if(e!==void 0&&(t._cleanup=void 0,!!e))try{if(typeof e=="function")e();else{var r=Dt(e,"unsubscribe");r&&r.call(e)}}catch(n){Pe(n)}}function hr(t){t._observer=void 0,t._queue=void 0,t._state="closed"}function Ea(t){var e=t._queue;if(e){t._queue=void 0,t._state="ready";for(var r=0;r<e.length&&(Pn(t,e[r].type,e[r].value),t._state!=="closed");++r);}}function Pn(t,e,r){t._state="running";var n=t._observer;try{var i=Dt(n,e);switch(e){case"next":i&&i.call(n,r);break;case"error":if(hr(t),i)i.call(n,r);else throw r;break;case"complete":hr(t),i&&i.call(n);break}}catch(o){Pe(o)}t._state==="closed"?An(t):t._state==="running"&&(t._state="ready")}function pr(t,e,r){if(t._state!=="closed"){if(t._state==="buffering"){t._queue.push({type:e,value:r});return}if(t._state!=="ready"){t._state="buffering",t._queue=[{type:e,value:r}],Ct(function(){return Ea(t)});return}Pn(t,e,r)}}var ka=function(){function t(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new Oa(this);try{this._cleanup=n.call(void 0,i)}catch(o){i.error(o)}this._state==="initializing"&&(this._state="ready")}var e=t.prototype;return e.unsubscribe=function(){this._state!=="closed"&&(hr(this),An(this))},sr(t,[{key:"closed",get:function(){return this._state==="closed"}}]),t}(),Oa=function(){function t(r){this._subscription=r}var e=t.prototype;return e.next=function(n){pr(this._subscription,"next",n)},e.error=function(n){pr(this._subscription,"error",n)},e.complete=function(){pr(this._subscription,"complete")},sr(t,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),t}(),Q=function(){function t(r){if(!(this instanceof t))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var e=t.prototype;return e.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new ka(n,this._subscriber)},e.forEach=function(n){var i=this;return new Promise(function(o,a){if(typeof n!="function"){a(new TypeError(n+" is not a function"));return}function s(){c.unsubscribe(),o()}var c=i.subscribe({next:function(u){try{n(u,s)}catch(l){a(l),c.unsubscribe()}},error:a,complete:o})})},e.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var o=rt(this);return new o(function(a){return i.subscribe({next:function(s){try{s=n(s)}catch(c){return a.error(c)}a.next(s)},error:function(s){a.error(s)},complete:function(){a.complete()}})})},e.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var o=rt(this);return new o(function(a){return i.subscribe({next:function(s){try{if(!n(s))return}catch(c){return a.error(c)}a.next(s)},error:function(s){a.error(s)},complete:function(){a.complete()}})})},e.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var o=rt(this),a=arguments.length>1,s=!1,c=arguments[1],u=c;return new o(function(l){return i.subscribe({next:function(p){var f=!s;if(s=!0,!f||a)try{u=n(u,p)}catch(h){return l.error(h)}else u=p},error:function(p){l.error(p)},complete:function(){if(!s&&!a)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(u),l.complete()}})})},e.concat=function(){for(var n=this,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var s=rt(this);return new s(function(c){var u,l=0;function p(f){u=f.subscribe({next:function(h){c.next(h)},error:function(h){c.error(h)},complete:function(){l===o.length?(u=void 0,c.complete()):p(s.from(o[l++]))}})}return p(n),function(){u&&(u.unsubscribe(),u=void 0)}})},e.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var o=rt(this);return new o(function(a){var s=[],c=i.subscribe({next:function(l){if(n)try{l=n(l)}catch(f){return a.error(f)}var p=o.from(l).subscribe({next:function(f){a.next(f)},error:function(f){a.error(f)},complete:function(){var f=s.indexOf(p);f>=0&&s.splice(f,1),u()}});s.push(p)},error:function(l){a.error(l)},complete:function(){u()}});function u(){c.closed&&s.length===0&&a.complete()}return function(){s.forEach(function(l){return l.unsubscribe()}),c.unsubscribe()}})},e[fr]=function(){return this},t.from=function(n){var i=typeof this=="function"?this:t;if(n==null)throw new TypeError(n+" is not an object");var o=Dt(n,fr);if(o){var a=o.call(n);if(Object(a)!==a)throw new TypeError(a+" is not an object");return Sa(a)&&a.constructor===i?a:new i(function(s){return a.subscribe(s)})}if(ur("iterator")&&(o=Dt(n,Ia),o))return new i(function(s){Ct(function(){if(!s.closed){for(var c=ga(o.call(n)),u;!(u=c()).done;){var l=u.value;if(s.next(l),s.closed)return}s.complete()}})});if(Array.isArray(n))return new i(function(s){Ct(function(){if(!s.closed){for(var c=0;c<n.length;++c)if(s.next(n[c]),s.closed)return;s.complete()}})});throw new TypeError(n+" is not observable")},t.of=function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var a=typeof this=="function"?this:t;return new a(function(s){Ct(function(){if(!s.closed){for(var c=0;c<i.length;++c)if(s.next(i[c]),s.closed)return;s.complete()}})})},sr(t,null,[{key:Fn,get:function(){return this}}]),t}();cr()&&Object.defineProperty(Q,Symbol("extensions"),{value:{symbol:fr,hostReportError:Pe},configurable:!0});function wa(t){var e,r=t.Symbol;if(typeof r=="function")if(r.observable)e=r.observable;else{typeof r.for=="function"?e=r.for("https://github.com/benlesh/symbol-observable"):e=r("https://github.com/benlesh/symbol-observable");try{r.observable=e}catch{}}else e="@@observable";return e}var Le;typeof self<"u"?Le=self:typeof window<"u"?Le=window:typeof global<"u"?Le=global:typeof module<"u"?Le=module:Le=Function("return this")(),wa(Le);var Ln=Q.prototype,Mn="@@observable";Ln[Mn]||(Ln[Mn]=function(){return this});var Ta=Object.prototype.toString;function jn(t){return dr(t)}function dr(t,e){switch(Ta.call(t)){case"[object Array]":{if(e=e||new Map,e.has(t))return e.get(t);var r=t.slice(0);return e.set(t,r),r.forEach(function(i,o){r[o]=dr(i,e)}),r}case"[object Object]":{if(e=e||new Map,e.has(t))return e.get(t);var n=Object.create(Object.getPrototypeOf(t));return e.set(t,n),Object.keys(t).forEach(function(i){n[i]=dr(t[i],e)}),n}default:return t}}function Na(t){var e=new Set([t]);return e.forEach(function(r){V(r)&&Da(r)===r&&Object.getOwnPropertyNames(r).forEach(function(n){V(r[n])&&e.add(r[n])})}),t}function Da(t){if(globalThis.__DEV__!==!1&&!Object.isFrozen(t))try{Object.freeze(t)}catch(e){if(e instanceof TypeError)return null;throw e}return t}function mr(t){return globalThis.__DEV__!==!1&&Na(t),t}function nt(t,e,r){var n=[];t.forEach(function(i){return i[e]&&n.push(i)}),n.forEach(function(i){return i[e](r)})}function yr(t,e,r){return new Q(function(n){var i=n.next,o=n.error,a=n.complete,s=0,c=!1,u={then:function(h){return new Promise(function(y){return y(h())})}};function l(h,y){return h?function(v){++s;var b=function(){return h(v)};u=u.then(b,b).then(function(d){--s,i&&i.call(n,d),c&&p.complete()},function(d){throw--s,d}).catch(function(d){o&&o.call(n,d)})}:function(v){return y&&y.call(n,v)}}var p={next:l(e,i),error:l(r,o),complete:function(){c=!0,s||a&&a.call(n)}},f=t.subscribe(p);return function(){return f.unsubscribe()}})}function qn(t){function e(r){Object.defineProperty(t,r,{value:Q})}return kn&&Symbol.species&&e(Symbol.species),e("@@species"),t}function Vn(t){return t&&typeof t.then=="function"}var Me=function(t){ae(e,t);function e(r){var n=t.call(this,function(i){return n.addObserver(i),function(){return n.removeObserver(i)}})||this;return n.observers=new Set,n.promise=new Promise(function(i,o){n.resolve=i,n.reject=o}),n.handlers={next:function(i){n.sub!==null&&(n.latest=["next",i],n.notify("next",i),nt(n.observers,"next",i))},error:function(i){var o=n.sub;o!==null&&(o&&setTimeout(function(){return o.unsubscribe()}),n.sub=null,n.latest=["error",i],n.reject(i),n.notify("error",i),nt(n.observers,"error",i))},complete:function(){var i=n,o=i.sub,a=i.sources,s=a===void 0?[]:a;if(o!==null){var c=s.shift();c?Vn(c)?c.then(function(u){return n.sub=u.subscribe(n.handlers)}):n.sub=c.subscribe(n.handlers):(o&&setTimeout(function(){return o.unsubscribe()}),n.sub=null,n.latest&&n.latest[0]==="next"?n.resolve(n.latest[1]):n.resolve(),n.notify("complete"),nt(n.observers,"complete"))}}},n.nextResultListeners=new Set,n.cancel=function(i){n.reject(i),n.sources=[],n.handlers.complete()},n.promise.catch(function(i){}),typeof r=="function"&&(r=[new Q(r)]),Vn(r)?r.then(function(i){return n.start(i)},n.handlers.error):n.start(r),n}return e.prototype.start=function(r){this.sub===void 0&&(this.sources=Array.from(r),this.handlers.complete())},e.prototype.deliverLastMessage=function(r){if(this.latest){var n=this.latest[0],i=r[n];i&&i.call(r,this.latest[1]),this.sub===null&&n==="next"&&r.complete&&r.complete()}},e.prototype.addObserver=function(r){this.observers.has(r)||(this.deliverLastMessage(r),this.observers.add(r))},e.prototype.removeObserver=function(r){this.observers.delete(r)&&this.observers.size<1&&this.handlers.complete()},e.prototype.notify=function(r,n){var i=this.nextResultListeners;i.size&&(this.nextResultListeners=new Set,i.forEach(function(o){return o(r,n)}))},e.prototype.beforeNext=function(r){var n=!1;this.nextResultListeners.add(function(i,o){n||(n=!0,r(i,o))})},e}(Q);qn(Me);function je(t){return"incremental"in t}function Ca(t){return"hasNext"in t&&"data"in t}function Ra(t){return je(t)||Ca(t)}function _a(t){return V(t)&&"payload"in t}function Qn(t,e){var r=t,n=new Se;return je(e)&&le(e.incremental)&&e.incremental.forEach(function(i){for(var o=i.data,a=i.path,s=a.length-1;s>=0;--s){var c=a[s],u=!isNaN(+c),l=u?[]:{};l[c]=o,o=l}r=n.merge(r,o)}),r}function Rt(t){var e=vr(t);return le(e)}function vr(t){var e=le(t.errors)?t.errors.slice(0):[];return je(t)&&le(t.incremental)&&t.incremental.forEach(function(r){r.errors&&e.push.apply(e,r.errors)}),e}function qe(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object.create(null);return t.forEach(function(n){n&&Object.keys(n).forEach(function(i){var o=n[i];o!==void 0&&(r[i]=o)})}),r}function gr(t,e){return qe(t,e,e.variables&&{variables:qe(m(m({},t&&t.variables),e.variables))})}function br(t){return new Q(function(e){e.error(t)})}var Ir=function(t,e,r){var n=new Error(r);throw n.name="ServerError",n.response=t,n.statusCode=t.status,n.result=e,n};function xa(t){for(var e=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];if(e.indexOf(i)<0)throw te(41,i)}return t}function $a(t,e){var r=m({},t),n=function(o){typeof o=="function"?r=m(m({},r),o(r)):r=m(m({},r),o)},i=function(){return m({},r)};return Object.defineProperty(e,"setContext",{enumerable:!1,value:n}),Object.defineProperty(e,"getContext",{enumerable:!1,value:i}),e}function Fa(t){var e={variables:t.variables||{},extensions:t.extensions||{},operationName:t.operationName,query:t.query};return e.operationName||(e.operationName=typeof e.query!="string"?rr(e.query)||void 0:""),e}function Aa(t,e){var r=m({},t),n=new Set(Object.keys(t));return fe(e,{Variable:function(i,o,a){a&&a.kind!=="VariableDefinition"&&n.delete(i.name.value)}}),n.forEach(function(i){delete r[i]}),r}function Bn(t,e){return e?e(t):Q.of()}function it(t){return typeof t=="function"?new Ve(t):t}function _t(t){return t.request.length<=1}var Ve=function(){function t(e){e&&(this.request=e)}return t.empty=function(){return new t(function(){return Q.of()})},t.from=function(e){return e.length===0?t.empty():e.map(it).reduce(function(r,n){return r.concat(n)})},t.split=function(e,r,n){var i=it(r),o=it(n||new t(Bn));return _t(i)&&_t(o)?new t(function(a){return e(a)?i.request(a)||Q.of():o.request(a)||Q.of()}):new t(function(a,s){return e(a)?i.request(a,s)||Q.of():o.request(a,s)||Q.of()})},t.execute=function(e,r){return e.request($a(r.context,Fa(xa(r))))||Q.of()},t.concat=function(e,r){var n=it(e);if(_t(n))return globalThis.__DEV__!==!1&&C.warn(33,n),n;var i=it(r);return _t(i)?new t(function(o){return n.request(o,function(a){return i.request(a)||Q.of()})||Q.of()}):new t(function(o,a){return n.request(o,function(s){return i.request(s,a)||Q.of()})||Q.of()})},t.prototype.split=function(e,r,n){return this.concat(t.split(e,r,n||new t(Bn)))},t.prototype.concat=function(e){return t.concat(this,e)},t.prototype.request=function(e,r){throw te(34)},t.prototype.onError=function(e,r){if(r&&r.error)return r.error(e),!1;throw e},t.prototype.setOnError=function(e){return this.onError=e,this},t}(),Sr=Ve.execute;function Pa(t){var e,r=t[Symbol.asyncIterator]();return e={next:function(){return r.next()}},e[Symbol.asyncIterator]=function(){return this},e}function La(t){var e=null,r=null,n=!1,i=[],o=[];function a(p){if(!r){if(o.length){var f=o.shift();if(Array.isArray(f)&&f[0])return f[0]({value:p,done:!1})}i.push(p)}}function s(p){r=p;var f=o.slice();f.forEach(function(h){h[1](p)}),!e||e()}function c(){n=!0;var p=o.slice();p.forEach(function(f){f[0]({value:void 0,done:!0})}),!e||e()}e=function(){e=null,t.removeListener("data",a),t.removeListener("error",s),t.removeListener("end",c),t.removeListener("finish",c),t.removeListener("close",c)},t.on("data",a),t.on("error",s),t.on("end",c),t.on("finish",c),t.on("close",c);function u(){return new Promise(function(p,f){if(r)return f(r);if(i.length)return p({value:i.shift(),done:!1});if(n)return p({value:void 0,done:!0});o.push([p,f])})}var l={next:function(){return u()}};return kt&&(l[Symbol.asyncIterator]=function(){return this}),l}function Ma(t){var e=!1,r={next:function(){return e?Promise.resolve({value:void 0,done:!0}):(e=!0,new Promise(function(n,i){t.then(function(o){n({value:o,done:!1})}).catch(i)}))}};return kt&&(r[Symbol.asyncIterator]=function(){return this}),r}function Un(t){var e={next:function(){return t.read()}};return kt&&(e[Symbol.asyncIterator]=function(){return this}),e}function ja(t){return!!t.body}function qa(t){return!!t.getReader}function Va(t){return!!(kt&&t[Symbol.asyncIterator])}function Qa(t){return!!t.stream}function Ba(t){return!!t.arrayBuffer}function Ua(t){return!!t.pipe}function Ga(t){var e=t;if(ja(t)&&(e=t.body),Va(e))return Pa(e);if(qa(e))return Un(e.getReader());if(Qa(e))return Un(e.stream().getReader());if(Ba(e))return Ma(e.arrayBuffer());if(Ua(e))return La(e);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var Er=Symbol();function za(t){return t.extensions?Array.isArray(t.extensions[Er]):!1}function Wa(t){return t.hasOwnProperty("graphQLErrors")}var Ka=function(t){var e=ve(ve(ve([],t.graphQLErrors,!0),t.clientErrors,!0),t.protocolErrors,!0);return t.networkError&&e.push(t.networkError),e.map(function(r){return V(r)&&r.message||"Error message not found."}).join(`
`)},De=function(t){ae(e,t);function e(r){var n=r.graphQLErrors,i=r.protocolErrors,o=r.clientErrors,a=r.networkError,s=r.errorMessage,c=r.extraInfo,u=t.call(this,s)||this;return u.name="ApolloError",u.graphQLErrors=n||[],u.protocolErrors=i||[],u.clientErrors=o||[],u.networkError=a||null,u.message=s||Ka(u),u.extraInfo=c,u.__proto__=e.prototype,u}return e}(Error),Gn=Object.prototype.hasOwnProperty;function Ja(t,e){var r;return me(this,void 0,void 0,function(){var n,i,o,a,s,c,u,l,p,f,h,y,v,b,d,E,g,k,D,O,N,R,U;return ye(this,function(B){switch(B.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),i=(r=t.headers)===null||r===void 0?void 0:r.get("content-type"),o="boundary=",a=i!=null&&i.includes(o)?i==null?void 0:i.substring((i==null?void 0:i.indexOf(o))+o.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s=`\r
--`.concat(a),c="",u=Ga(t),l=!0,B.label=1;case 1:return l?[4,u.next()]:[3,3];case 2:for(p=B.sent(),f=p.value,h=p.done,y=typeof f=="string"?f:n.decode(f),v=c.length-s.length+1,l=!h,c+=y,b=c.indexOf(s,v);b>-1;){if(d=void 0,R=[c.slice(0,b),c.slice(b+s.length)],d=R[0],c=R[1],E=d.indexOf(`\r
\r
`),g=Ya(d.slice(0,E)),k=g["content-type"],k&&k.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(D=d.slice(E),D){if(O=zn(t,D),Object.keys(O).length>1||"data"in O||"incremental"in O||"errors"in O||"payload"in O)_a(O)?(N={},"payload"in O&&(N=m({},O.payload)),"errors"in O&&(N=m(m({},N),{extensions:m(m({},"extensions"in N?N.extensions:null),(U={},U[Er]=O.errors,U))})),e(N)):e(O);else if(Object.keys(O).length===1&&"hasNext"in O&&!O.hasNext)return[2]}b=c.indexOf(s)}return[3,1];case 3:return[2]}})})}function Ya(t){var e={};return t.split(`
`).forEach(function(r){var n=r.indexOf(":");if(n>-1){var i=r.slice(0,n).trim().toLowerCase(),o=r.slice(n+1).trim();e[i]=o}}),e}function zn(t,e){if(t.status>=300){var r=function(){try{return JSON.parse(e)}catch{return e}};Ir(t,r(),"Response not successful: Received status code ".concat(t.status))}try{return JSON.parse(e)}catch(i){var n=i;throw n.name="ServerParseError",n.response=t,n.statusCode=t.status,n.bodyText=e,n}}function Ha(t,e){t.result&&t.result.errors&&t.result.data&&e.next(t.result),e.error(t)}function Xa(t){return function(e){return e.text().then(function(r){return zn(e,r)}).then(function(r){return e.status>=300&&Ir(e,r,"Response not successful: Received status code ".concat(e.status)),!Array.isArray(r)&&!Gn.call(r,"data")&&!Gn.call(r,"errors")&&Ir(e,r,"Server response was missing for query '".concat(Array.isArray(t)?t.map(function(n){return n.operationName}):t.operationName,"'.")),r})}}var kr=function(t,e){var r;try{r=JSON.stringify(t)}catch(i){var n=te(37,e,i.message);throw n.parseError=i,n}return r},Za={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},es={accept:"*/*","content-type":"application/json"},ts={method:"POST"},rs={http:Za,headers:es,options:ts},ns=function(t,e){return e(t)};function is(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},o={};r.forEach(function(p){i=m(m(m({},i),p.options),{headers:m(m({},i.headers),p.headers)}),p.credentials&&(i.credentials=p.credentials),o=m(m({},o),p.http)}),i.headers&&(i.headers=os(i.headers,o.preserveHeaderCase));var a=t.operationName,s=t.extensions,c=t.variables,u=t.query,l={operationName:a,variables:c};return o.includeExtensions&&(l.extensions=s),o.includeQuery&&(l.query=e(u,ir)),{options:i,body:l}}function os(t,e){if(!e){var r=Object.create(null);return Object.keys(Object(t)).forEach(function(o){r[o.toLowerCase()]=t[o]}),r}var n=Object.create(null);Object.keys(Object(t)).forEach(function(o){n[o.toLowerCase()]={originalName:o,value:t[o]}});var i=Object.create(null);return Object.keys(n).forEach(function(o){i[n[o].originalName]=n[o].value}),i}var as=function(t){if(!t&&typeof fetch>"u")throw te(35)},ss=function(t,e){var r=t.getContext(),n=r.uri;return n||(typeof e=="function"?e(t):e||"/graphql")};function cs(t,e){var r=[],n=function(p,f){r.push("".concat(p,"=").concat(encodeURIComponent(f)))};if("query"in e&&n("query",e.query),e.operationName&&n("operationName",e.operationName),e.variables){var i=void 0;try{i=kr(e.variables,"Variables map")}catch(p){return{parseError:p}}n("variables",i)}if(e.extensions){var o=void 0;try{o=kr(e.extensions,"Extensions map")}catch(p){return{parseError:p}}n("extensions",o)}var a="",s=t,c=t.indexOf("#");c!==-1&&(a=t.substr(c),s=t.substr(0,c));var u=s.indexOf("?")===-1?"?":"&",l=s+u+r.join("&")+a;return{newURI:l}}var Wn=se(function(){return fetch}),us=function(t){t===void 0&&(t={});var e=t.uri,r=e===void 0?"/graphql":e,n=t.fetch,i=t.print,o=i===void 0?ns:i,a=t.includeExtensions,s=t.preserveHeaderCase,c=t.useGETForQueries,u=t.includeUnusedVariables,l=u===void 0?!1:u,p=de(t,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&as(n||Wn);var f={http:{includeExtensions:a,preserveHeaderCase:s},options:p.fetchOptions,credentials:p.credentials,headers:p.headers};return new Ve(function(h){var y=ss(h,r),v=h.getContext(),b={};if(v.clientAwareness){var d=v.clientAwareness,E=d.name,g=d.version;E&&(b["apollographql-client-name"]=E),g&&(b["apollographql-client-version"]=g)}var k=m(m({},b),v.headers),D={http:v.http,options:v.fetchOptions,credentials:v.credentials,headers:k};if(He(["client"],h.query)){var O=Rn(h.query);if(!O)return br(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));h.query=O}var N=is(h,o,rs,f,D),R=N.options,U=N.body;U.variables&&!l&&(U.variables=Aa(U.variables,h.query));var B;!R.signal&&typeof AbortController<"u"&&(B=new AbortController,R.signal=B.signal);var J=function(q){return q.kind==="OperationDefinition"&&q.operation==="mutation"},ie=function(q){return q.kind==="OperationDefinition"&&q.operation==="subscription"},We=ie(tt(h.query)),x=He(["defer"],h.query);if(c&&!h.query.definitions.some(J)&&(R.method="GET"),x||We){R.headers=R.headers||{};var M="multipart/mixed;";We&&x&&globalThis.__DEV__!==!1&&C.warn(36),We?M+="boundary=graphql;subscriptionSpec=1.0,application/json":x&&(M+="deferSpec=20220824,application/json"),R.headers.accept=M}if(R.method==="GET"){var _=cs(y,U),F=_.newURI,j=_.parseError;if(j)return br(j);y=F}else try{R.body=kr(U,"Payload")}catch(q){return br(q)}return new Q(function(q){var A=n||se(function(){return fetch})||Wn,ue=q.next.bind(q);return A(y,R).then(function(oe){var we;h.setContext({response:oe});var pe=(we=oe.headers)===null||we===void 0?void 0:we.get("content-type");return pe!==null&&/^multipart\/mixed/i.test(pe)?Ja(oe,ue):Xa(h)(oe).then(ue)}).then(function(){B=void 0,q.complete()}).catch(function(oe){B=void 0,Ha(oe,q)}),function(){B&&B.abort()}})})},ls=function(t){ae(e,t);function e(r){r===void 0&&(r={});var n=t.call(this,us(r).request)||this;return n.options=r,n}return e}(Ve);const{toString:Kn,hasOwnProperty:fs}=Object.prototype,Jn=Function.prototype.toString,Or=new Map;function G(t,e){try{return wr(t,e)}finally{Or.clear()}}function wr(t,e){if(t===e)return!0;const r=Kn.call(t),n=Kn.call(e);if(r!==n)return!1;switch(r){case"[object Array]":if(t.length!==e.length)return!1;case"[object Object]":{if(Hn(t,e))return!0;const i=Yn(t),o=Yn(e),a=i.length;if(a!==o.length)return!1;for(let s=0;s<a;++s)if(!fs.call(e,i[s]))return!1;for(let s=0;s<a;++s){const c=i[s];if(!wr(t[c],e[c]))return!1}return!0}case"[object Error]":return t.name===e.name&&t.message===e.message;case"[object Number]":if(t!==t)return e!==e;case"[object Boolean]":case"[object Date]":return+t==+e;case"[object RegExp]":case"[object String]":return t==`${e}`;case"[object Map]":case"[object Set]":{if(t.size!==e.size)return!1;if(Hn(t,e))return!0;const i=t.entries(),o=r==="[object Map]";for(;;){const a=i.next();if(a.done)break;const[s,c]=a.value;if(!e.has(s)||o&&!wr(c,e.get(s)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),e=new Uint8Array(e);case"[object DataView]":{let i=t.byteLength;if(i===e.byteLength)for(;i--&&t[i]===e[i];);return i===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const i=Jn.call(t);return i!==Jn.call(e)?!1:!ds(i,ps)}}return!1}function Yn(t){return Object.keys(t).filter(hs,t)}function hs(t){return this[t]!==void 0}const ps="{ [native code] }";function ds(t,e){const r=t.length-e.length;return r>=0&&t.indexOf(e,r)===r}function Hn(t,e){let r=Or.get(t);if(r){if(r.has(e))return!0}else Or.set(t,r=new Set);return r.add(e),!1}function ms(){}class ys{constructor(e=1/0,r=ms){this.max=e,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const r=this.getNode(e);return r&&r.value}getNode(e){const r=this.map.get(e);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(e,r){let n=this.getNode(e);return n?n.value=r:(n={key:e,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const r=this.map.get(e);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(e),this.dispose(r.value,e),!0):!1}}let X=null;const Xn={};let vs=1;const gs=()=>class{constructor(){this.id=["slot",vs++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=X;e;e=e.parent)if(this.id in e.slots){const r=e.slots[this.id];if(r===Xn)break;return e!==X&&(X.slots[this.id]=r),!0}return X&&(X.slots[this.id]=Xn),!1}getValue(){if(this.hasValue())return X.slots[this.id]}withValue(e,r,n,i){const o={__proto__:null,[this.id]:e},a=X;X={parent:a,slots:o};try{return r.apply(i,n)}finally{X=a}}static bind(e){const r=X;return function(){const n=X;try{return X=r,e.apply(this,arguments)}finally{X=n}}}static noContext(e,r,n){if(X){const i=X;try{return X=null,e.apply(n,r)}finally{X=i}}else return e.apply(n,r)}};function Zn(t){try{return t()}catch{}}const Tr="@wry/context:Slot",ei=Zn(()=>globalThis)||Zn(()=>global)||Object.create(null),ti=ei[Tr]||Array[Tr]||function(t){try{Object.defineProperty(ei,Tr,{value:t,enumerable:!1,writable:!1,configurable:!0})}finally{return t}}(gs()),xt=new ti,{hasOwnProperty:bs}=Object.prototype,Nr=Array.from||function(t){const e=[];return t.forEach(r=>e.push(r)),e};function Dr(t){const{unsubscribe:e}=t;typeof e=="function"&&(t.unsubscribe=void 0,e())}const ot=[],Is=100;function Qe(t,e){if(!t)throw new Error(e||"assertion failure")}function Ss(t,e){const r=t.length;return r>0&&r===e.length&&t[r-1]===e[r-1]}function ri(t){switch(t.length){case 0:throw new Error("unknown value");case 1:return t[0];case 2:throw t[1]}}function Es(t){return t.slice(0)}class $t{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++$t.count}peek(){if(this.value.length===1&&!Ee(this))return ni(this),this.value[0]}recompute(e){return Qe(!this.recomputing,"already recomputing"),ni(this),Ee(this)?ks(this,e):ri(this.value)}setDirty(){this.dirty||(this.dirty=!0,this.value.length=0,ii(this),Dr(this))}dispose(){this.setDirty(),ui(this),Cr(this,(e,r)=>{e.setDirty(),li(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=ot.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(Nr(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),ot.push(this.deps),this.deps=null)}}$t.count=0;function ni(t){const e=xt.getValue();if(e)return t.parents.add(e),e.childValues.has(t)||e.childValues.set(t,[]),Ee(t)?ai(e,t):si(e,t),e}function ks(t,e){return ui(t),xt.withValue(t,Os,[t,e]),Ts(t,e)&&ws(t),ri(t.value)}function Os(t,e){t.recomputing=!0,t.value.length=0;try{t.value[0]=t.fn.apply(null,e)}catch(r){t.value[1]=r}t.recomputing=!1}function Ee(t){return t.dirty||!!(t.dirtyChildren&&t.dirtyChildren.size)}function ws(t){t.dirty=!1,!Ee(t)&&oi(t)}function ii(t){Cr(t,ai)}function oi(t){Cr(t,si)}function Cr(t,e){const r=t.parents.size;if(r){const n=Nr(t.parents);for(let i=0;i<r;++i)e(n[i],t)}}function ai(t,e){Qe(t.childValues.has(e)),Qe(Ee(e));const r=!Ee(t);if(!t.dirtyChildren)t.dirtyChildren=ot.pop()||new Set;else if(t.dirtyChildren.has(e))return;t.dirtyChildren.add(e),r&&ii(t)}function si(t,e){Qe(t.childValues.has(e)),Qe(!Ee(e));const r=t.childValues.get(e);r.length===0?t.childValues.set(e,Es(e.value)):Ss(r,e.value)||t.setDirty(),ci(t,e),!Ee(t)&&oi(t)}function ci(t,e){const r=t.dirtyChildren;r&&(r.delete(e),r.size===0&&(ot.length<Is&&ot.push(r),t.dirtyChildren=null))}function ui(t){t.childValues.size>0&&t.childValues.forEach((e,r)=>{li(t,r)}),t.forgetDeps(),Qe(t.dirtyChildren===null)}function li(t,e){e.parents.delete(t),t.childValues.delete(e),ci(t,e)}function Ts(t,e){if(typeof t.subscribe=="function")try{Dr(t),t.unsubscribe=t.subscribe.apply(null,e)}catch{return t.setDirty(),!1}return!0}const Ns={setDirty:!0,dispose:!0,forget:!0};function fi(t){const e=new Map;function r(n){const i=xt.getValue();if(i){let o=e.get(n);o||e.set(n,o=new Set),i.dependOn(o)}}return r.dirty=function(i,o){const a=e.get(i);if(a){const s=o&&bs.call(Ns,o)?o:"setDirty";Nr(a).forEach(c=>c[s]()),e.delete(i),Dr(a)}},r}let hi;function Ds(...t){return(hi||(hi=new ge(typeof WeakMap=="function"))).lookupArray(t)}const Rr=new Set;function Ft(t,{max:e=Math.pow(2,16),makeCacheKey:r=Ds,keyArgs:n,subscribe:i}=Object.create(null)){const o=new ys(e,l=>l.dispose()),a=function(){const l=r.apply(null,n?n.apply(null,arguments):arguments);if(l===void 0)return t.apply(null,arguments);let p=o.get(l);p||(o.set(l,p=new $t(t)),p.subscribe=i,p.forget=()=>o.delete(l));const f=p.recompute(Array.prototype.slice.call(arguments));return o.set(l,p),Rr.add(o),xt.hasValue()||(Rr.forEach(h=>h.clean()),Rr.clear()),f};Object.defineProperty(a,"size",{get(){return o.map.size},configurable:!1,enumerable:!1}),Object.freeze(a.options={max:e,makeCacheKey:r,keyArgs:n,subscribe:i});function s(l){const p=o.get(l);p&&p.setDirty()}a.dirtyKey=s,a.dirty=function(){s(r.apply(null,arguments))};function c(l){const p=o.get(l);if(p)return p.peek()}a.peekKey=c,a.peek=function(){return c(r.apply(null,arguments))};function u(l){return o.delete(l)}return a.forgetKey=u,a.forget=function(){return u(r.apply(null,arguments))},a.makeCacheKey=r,a.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(a)}var Cs=function(){function t(){this.assumeImmutableResults=!1,this.getFragmentDoc=Ft(Yo)}return t.prototype.batch=function(e){var r=this,n=typeof e.optimistic=="string"?e.optimistic:e.optimistic===!1?null:void 0,i;return this.performTransaction(function(){return i=e.update(r)},n),i},t.prototype.recordOptimisticTransaction=function(e,r){this.performTransaction(e,r)},t.prototype.transformDocument=function(e){return e},t.prototype.transformForLink=function(e){return e},t.prototype.identify=function(e){},t.prototype.gc=function(){return[]},t.prototype.modify=function(e){return!1},t.prototype.readQuery=function(e,r){return r===void 0&&(r=!!e.optimistic),this.read(m(m({},e),{rootId:e.id||"ROOT_QUERY",optimistic:r}))},t.prototype.readFragment=function(e,r){return r===void 0&&(r=!!e.optimistic),this.read(m(m({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:r}))},t.prototype.writeQuery=function(e){var r=e.id,n=e.data,i=de(e,["id","data"]);return this.write(Object.assign(i,{dataId:r||"ROOT_QUERY",result:n}))},t.prototype.writeFragment=function(e){var r=e.id,n=e.data,i=e.fragment,o=e.fragmentName,a=de(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(a,{query:this.getFragmentDoc(i,o),dataId:r,result:n}))},t.prototype.updateQuery=function(e,r){return this.batch({update:function(n){var i=n.readQuery(e),o=r(i);return o==null?i:(n.writeQuery(m(m({},e),{data:o})),o)}})},t.prototype.updateFragment=function(e,r){return this.batch({update:function(n){var i=n.readFragment(e),o=r(i);return o==null?i:(n.writeFragment(m(m({},e),{data:o})),o)}})},t}(),pi=function(t){ae(e,t);function e(r,n,i,o){var a,s=t.call(this,r)||this;if(s.message=r,s.path=n,s.query=i,s.variables=o,Array.isArray(s.path)){s.missing=s.message;for(var c=s.path.length-1;c>=0;--c)s.missing=(a={},a[s.path[c]]=s.missing,a)}else s.missing=s.path;return s.__proto__=e.prototype,s}return e}(Error),H=Object.prototype.hasOwnProperty;function at(t){return t==null}function di(t,e){var r=t.__typename,n=t.id,i=t._id;if(typeof r=="string"&&(e&&(e.keyObject=at(n)?at(i)?void 0:{_id:i}:{id:n}),at(n)&&!at(i)&&(n=i),!at(n)))return"".concat(r,":").concat(typeof n=="number"||typeof n=="string"?n:JSON.stringify(n))}var mi={dataIdFromObject:di,addTypename:!0,resultCaching:!0,canonizeResults:!1};function Rs(t){return qe(mi,t)}function yi(t){var e=t.canonizeResults;return e===void 0?mi.canonizeResults:e}function _s(t,e){return P(e)?t.get(e.__ref,"__typename"):e&&e.__typename}var vi=/^[_a-z][_0-9a-z]*/i;function ke(t){var e=t.match(vi);return e?e[0]:t}function _r(t,e,r){return V(e)?z(e)?e.every(function(n){return _r(t,n,r)}):t.selections.every(function(n){if(Ie(n)&&Ye(n,r)){var i=be(n);return H.call(e,i)&&(!n.selectionSet||_r(n.selectionSet,e[i],r))}return!0}):!1}function Be(t){return V(t)&&!P(t)&&!z(t)}function xs(){return new Se}function gi(t,e){var r=Ot(Nt(t));return{fragmentMap:r,lookupFragment:function(n){var i=r[n];return!i&&e&&(i=e.lookup(n)),i||null}}}var At=Object.create(null),xr=function(){return At},bi=Object.create(null),st=function(){function t(e,r){var n=this;this.policies=e,this.group=r,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(i,o){return mr(P(i)?n.get(i.__ref,o):i&&i[o])},this.canRead=function(i){return P(i)?n.has(i.__ref):typeof i=="object"},this.toReference=function(i,o){if(typeof i=="string")return $e(i);if(P(i))return i;var a=n.policies.identify(i)[0];if(a){var s=$e(a);return o&&n.merge(a,i),s}}}return t.prototype.toObject=function(){return m({},this.data)},t.prototype.has=function(e){return this.lookup(e,!0)!==void 0},t.prototype.get=function(e,r){if(this.group.depend(e,r),H.call(this.data,e)){var n=this.data[e];if(n&&H.call(n,r))return n[r]}if(r==="__typename"&&H.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof Oe)return this.parent.get(e,r)},t.prototype.lookup=function(e,r){if(r&&this.group.depend(e,"__exists"),H.call(this.data,e))return this.data[e];if(this instanceof Oe)return this.parent.lookup(e,r);if(this.policies.rootTypenamesById[e])return Object.create(null)},t.prototype.merge=function(e,r){var n=this,i;P(e)&&(e=e.__ref),P(r)&&(r=r.__ref);var o=typeof e=="string"?this.lookup(i=e):e,a=typeof r=="string"?this.lookup(i=r):r;if(a){C(typeof i=="string",1);var s=new Se(Fs).merge(o,a);if(this.data[i]=s,s!==o&&(delete this.refs[i],this.group.caching)){var c=Object.create(null);o||(c.__exists=1),Object.keys(a).forEach(function(u){if(!o||o[u]!==s[u]){c[u]=1;var l=ke(u);l!==u&&!n.policies.hasKeyArgs(s.__typename,l)&&(c[l]=1),s[u]===void 0&&!(n instanceof Oe)&&delete s[u]}}),c.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[i]===s.__typename&&delete c.__typename,Object.keys(c).forEach(function(u){return n.group.dirty(i,u)})}}},t.prototype.modify=function(e,r){var n=this,i=this.lookup(e);if(i){var o=Object.create(null),a=!1,s=!0,c={DELETE:At,INVALIDATE:bi,isReference:P,toReference:this.toReference,canRead:this.canRead,readField:function(u,l){return n.policies.readField(typeof u=="string"?{fieldName:u,from:l||$e(e)}:u,{store:n})}};if(Object.keys(i).forEach(function(u){var l=ke(u),p=i[u];if(p!==void 0){var f=typeof r=="function"?r:r[u]||r[l];if(f){var h=f===xr?At:f(mr(p),m(m({},c),{fieldName:l,storeFieldName:u,storage:n.getStorage(e,u)}));h===bi?n.group.dirty(e,u):(h===At&&(h=void 0),h!==p&&(o[u]=h,a=!0,p=h))}p!==void 0&&(s=!1)}}),a)return this.merge(e,o),s&&(this instanceof Oe?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},t.prototype.delete=function(e,r,n){var i,o=this.lookup(e);if(o){var a=this.getFieldValue(o,"__typename"),s=r&&n?this.policies.getStoreFieldName({typename:a,fieldName:r,args:n}):r;return this.modify(e,s?(i={},i[s]=xr,i):xr)}return!1},t.prototype.evict=function(e,r){var n=!1;return e.id&&(H.call(this.data,e.id)&&(n=this.delete(e.id,e.fieldName,e.args)),this instanceof Oe&&this!==r&&(n=this.parent.evict(e,r)||n),(e.fieldName||n)&&this.group.dirty(e.id,e.fieldName||"__exists")),n},t.prototype.clear=function(){this.replace(null)},t.prototype.extract=function(){var e=this,r=this.toObject(),n=[];return this.getRootIdSet().forEach(function(i){H.call(e.policies.rootTypenamesById,i)||n.push(i)}),n.length&&(r.__META={extraRootIds:n.sort()}),r},t.prototype.replace=function(e){var r=this;if(Object.keys(this.data).forEach(function(o){e&&H.call(e,o)||r.delete(o)}),e){var n=e.__META,i=de(e,["__META"]);Object.keys(i).forEach(function(o){r.merge(o,i[o])}),n&&n.extraRootIds.forEach(this.retain,this)}},t.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},t.prototype.release=function(e){if(this.rootIds[e]>0){var r=--this.rootIds[e];return r||delete this.rootIds[e],r}return 0},t.prototype.getRootIdSet=function(e){return e===void 0&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof Oe?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},t.prototype.gc=function(){var e=this,r=this.getRootIdSet(),n=this.toObject();r.forEach(function(a){H.call(n,a)&&(Object.keys(e.findChildRefIds(a)).forEach(r.add,r),delete n[a])});var i=Object.keys(n);if(i.length){for(var o=this;o instanceof Oe;)o=o.parent;i.forEach(function(a){return o.delete(a)})}return i},t.prototype.findChildRefIds=function(e){if(!H.call(this.refs,e)){var r=this.refs[e]=Object.create(null),n=this.data[e];if(!n)return r;var i=new Set([n]);i.forEach(function(o){P(o)&&(r[o.__ref]=!0),V(o)&&Object.keys(o).forEach(function(a){var s=o[a];V(s)&&i.add(s)})})}return this.refs[e]},t.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},t}(),Ii=function(){function t(e,r){r===void 0&&(r=null),this.caching=e,this.parent=r,this.d=null,this.resetCaching()}return t.prototype.resetCaching=function(){this.d=this.caching?fi():null,this.keyMaker=new ge(he)},t.prototype.depend=function(e,r){if(this.d){this.d($r(e,r));var n=ke(r);n!==r&&this.d($r(e,n)),this.parent&&this.parent.depend(e,r)}},t.prototype.dirty=function(e,r){this.d&&this.d.dirty($r(e,r),r==="__exists"?"forget":"setDirty")},t}();function $r(t,e){return e+"#"+t}function Si(t,e){ct(t)&&t.group.depend(e,"__exists")}(function(t){var e=function(r){ae(n,r);function n(i){var o=i.policies,a=i.resultCaching,s=a===void 0?!0:a,c=i.seed,u=r.call(this,o,new Ii(s))||this;return u.stump=new $s(u),u.storageTrie=new ge(he),c&&u.replace(c),u}return n.prototype.addLayer=function(i,o){return this.stump.addLayer(i,o)},n.prototype.removeLayer=function(){return this},n.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},n}(t);t.Root=e})(st||(st={}));var Oe=function(t){ae(e,t);function e(r,n,i,o){var a=t.call(this,n.policies,o)||this;return a.id=r,a.parent=n,a.replay=i,a.group=o,i(a),a}return e.prototype.addLayer=function(r,n){return new e(r,this,n,this.group)},e.prototype.removeLayer=function(r){var n=this,i=this.parent.removeLayer(r);return r===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(o){var a=n.data[o],s=i.lookup(o);s?a?a!==s&&Object.keys(a).forEach(function(c){G(a[c],s[c])||n.group.dirty(o,c)}):(n.group.dirty(o,"__exists"),Object.keys(s).forEach(function(c){n.group.dirty(o,c)})):n.delete(o)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},e.prototype.toObject=function(){return m(m({},this.parent.toObject()),this.data)},e.prototype.findChildRefIds=function(r){var n=this.parent.findChildRefIds(r);return H.call(this.data,r)?m(m({},n),t.prototype.findChildRefIds.call(this,r)):n},e.prototype.getStorage=function(){for(var r=this.parent;r.parent;)r=r.parent;return r.getStorage.apply(r,arguments)},e}(st),$s=function(t){ae(e,t);function e(r){return t.call(this,"EntityStore.Stump",r,function(){},new Ii(r.group.caching,r.group))||this}return e.prototype.removeLayer=function(){return this},e.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},e}(Oe);function Fs(t,e,r){var n=t[r],i=e[r];return G(n,i)?n:i}function ct(t){return!!(t instanceof st&&t.group.caching)}function As(t){return V(t)?z(t)?t.slice(0):m({__proto__:Object.getPrototypeOf(t)},t):t}var Fr=function(){function t(){this.known=new(En?WeakSet:Set),this.pool=new ge(he),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return t.prototype.isKnown=function(e){return V(e)&&this.known.has(e)},t.prototype.pass=function(e){if(V(e)){var r=As(e);return this.passes.set(r,e),r}return e},t.prototype.admit=function(e){var r=this;if(V(e)){var n=this.passes.get(e);if(n)return n;var i=Object.getPrototypeOf(e);switch(i){case Array.prototype:{if(this.known.has(e))return e;var o=e.map(this.admit,this),a=this.pool.lookupArray(o);return a.array||(this.known.add(a.array=o),globalThis.__DEV__!==!1&&Object.freeze(o)),a.array}case null:case Object.prototype:{if(this.known.has(e))return e;var s=Object.getPrototypeOf(e),c=[s],u=this.sortedKeys(e);c.push(u.json);var l=c.length;u.sorted.forEach(function(h){c.push(r.admit(e[h]))});var a=this.pool.lookupArray(c);if(!a.object){var p=a.object=Object.create(s);this.known.add(p),u.sorted.forEach(function(h,y){p[h]=c[l+y]}),globalThis.__DEV__!==!1&&Object.freeze(p)}return a.object}}}return e},t.prototype.sortedKeys=function(e){var r=Object.keys(e),n=this.pool.lookupArray(r);if(!n.keys){r.sort();var i=JSON.stringify(r);(n.keys=this.keysByJSON.get(i))||this.keysByJSON.set(i,n.keys={sorted:r,json:i})}return n.keys},t}(),Ce=Object.assign(function(t){if(V(t)){Ar===void 0&&Ei();var e=Ar.admit(t),r=Pr.get(e);return r===void 0&&Pr.set(e,r=JSON.stringify(e)),r}return JSON.stringify(t)},{reset:Ei}),Ar,Pr;function Ei(){Ar=new Fr,Pr=new(he?WeakMap:Map)}function ki(t){return[t.selectionSet,t.objectOrReference,t.context,t.context.canonizeResults]}var Ps=function(){function t(e){var r=this;this.knownResults=new(he?WeakMap:Map),this.config=qe(e,{addTypename:e.addTypename!==!1,canonizeResults:yi(e)}),this.canon=e.canon||new Fr,this.executeSelectionSet=Ft(function(n){var i,o=n.context.canonizeResults,a=ki(n);a[3]=!o;var s=(i=r.executeSelectionSet).peek.apply(i,a);return s?o?m(m({},s),{result:r.canon.admit(s.result)}):s:(Si(n.context.store,n.enclosingRef.__ref),r.execSelectionSetImpl(n))},{max:this.config.resultCacheMaxSize,keyArgs:ki,makeCacheKey:function(n,i,o,a){if(ct(o.store))return o.store.makeCacheKey(n,P(i)?i.__ref:i,o.varString,a)}}),this.executeSubSelectedArray=Ft(function(n){return Si(n.context.store,n.enclosingRef.__ref),r.execSubSelectedArrayImpl(n)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(n){var i=n.field,o=n.array,a=n.context;if(ct(a.store))return a.store.makeCacheKey(i,o,a.varString)}})}return t.prototype.resetCanon=function(){this.canon=new Fr},t.prototype.diffQueryAgainstStore=function(e){var r=e.store,n=e.query,i=e.rootId,o=i===void 0?"ROOT_QUERY":i,a=e.variables,s=e.returnPartialData,c=s===void 0?!0:s,u=e.canonizeResults,l=u===void 0?this.config.canonizeResults:u,p=this.config.cache.policies;a=m(m({},nr(On(n))),a);var f=$e(o),h=this.executeSelectionSet({selectionSet:tt(n).selectionSet,objectOrReference:f,enclosingRef:f,context:m({store:r,query:n,policies:p,variables:a,varString:Ce(a),canonizeResults:l},gi(n,this.config.fragments))}),y;if(h.missing&&(y=[new pi(Ls(h.missing),h.missing,n,a)],!c))throw y[0];return{result:h.result,complete:!y,missing:y}},t.prototype.isFresh=function(e,r,n,i){if(ct(i.store)&&this.knownResults.get(e)===n){var o=this.executeSelectionSet.peek(n,r,i,this.canon.isKnown(e));if(o&&e===o.result)return!0}return!1},t.prototype.execSelectionSetImpl=function(e){var r=this,n=e.selectionSet,i=e.objectOrReference,o=e.enclosingRef,a=e.context;if(P(i)&&!a.policies.rootTypenamesById[i.__ref]&&!a.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var s=a.variables,c=a.policies,u=a.store,l=u.getFieldValue(i,"__typename"),p=[],f,h=new Se;this.config.addTypename&&typeof l=="string"&&!c.rootIdsByTypename[l]&&p.push({__typename:l});function y(g,k){var D;return g.missing&&(f=h.merge(f,(D={},D[k]=g.missing,D))),g.result}var v=new Set(n.selections);v.forEach(function(g){var k,D;if(Ye(g,s))if(Ie(g)){var O=c.readField({fieldName:g.name.value,field:g,variables:a.variables,from:i},a),N=be(g);O===void 0?or.added(g)||(f=h.merge(f,(k={},k[N]="Can't find field '".concat(g.name.value,"' on ").concat(P(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),k))):z(O)?O=y(r.executeSubSelectedArray({field:g,array:O,enclosingRef:o,context:a}),N):g.selectionSet?O!=null&&(O=y(r.executeSelectionSet({selectionSet:g.selectionSet,objectOrReference:O,enclosingRef:P(O)?O:o,context:a}),N)):a.canonizeResults&&(O=r.canon.pass(O)),O!==void 0&&p.push((D={},D[N]=O,D))}else{var R=wt(g,a.lookupFragment);if(!R&&g.kind===w.FRAGMENT_SPREAD)throw te(7,g.name.value);R&&c.fragmentMatches(R,l)&&R.selectionSet.selections.forEach(v.add,v)}});var b=ar(p),d={result:b,missing:f},E=a.canonizeResults?this.canon.admit(d):mr(d);return E.result&&this.knownResults.set(E.result,n),E},t.prototype.execSubSelectedArrayImpl=function(e){var r=this,n=e.field,i=e.array,o=e.enclosingRef,a=e.context,s,c=new Se;function u(l,p){var f;return l.missing&&(s=c.merge(s,(f={},f[p]=l.missing,f))),l.result}return n.selectionSet&&(i=i.filter(a.store.canRead)),i=i.map(function(l,p){return l===null?null:z(l)?u(r.executeSubSelectedArray({field:n,array:l,enclosingRef:o,context:a}),p):n.selectionSet?u(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:l,enclosingRef:P(l)?l:o,context:a}),p):(globalThis.__DEV__!==!1&&Ms(a.store,n,l),l)}),{result:a.canonizeResults?this.canon.admit(i):i,missing:s}},t}();function Ls(t){try{JSON.stringify(t,function(e,r){if(typeof r=="string")throw r;return r})}catch(e){return e}}function Ms(t,e,r){if(!e.selectionSet){var n=new Set([r]);n.forEach(function(i){V(i)&&(C(!P(i),8,_s(t,i),e.name.value),Object.values(i).forEach(n.add,n))})}}var Lr=new ti,Oi=new WeakMap;function ut(t){var e=Oi.get(t);return e||Oi.set(t,e={vars:new Set,dep:fi()}),e}function wi(t){ut(t).vars.forEach(function(e){return e.forgetCache(t)})}function js(t){ut(t).vars.forEach(function(e){return e.attachCache(t)})}function qs(t){var e=new Set,r=new Set,n=function(o){if(arguments.length>0){if(t!==o){t=o,e.forEach(function(c){ut(c).dep.dirty(n),Vs(c)});var a=Array.from(r);r.clear(),a.forEach(function(c){return c(t)})}}else{var s=Lr.getValue();s&&(i(s),ut(s).dep(n))}return t};n.onNextChange=function(o){return r.add(o),function(){r.delete(o)}};var i=n.attachCache=function(o){return e.add(o),ut(o).vars.add(n),n};return n.forgetCache=function(o){return e.delete(o)},n}function Vs(t){t.broadcastWatches&&t.broadcastWatches()}var Ti=Object.create(null);function Mr(t){var e=JSON.stringify(t);return Ti[e]||(Ti[e]=Object.create(null))}function Ni(t){var e=Mr(t);return e.keyFieldsFn||(e.keyFieldsFn=function(r,n){var i=function(a,s){return n.readField(s,a)},o=n.keyObject=jr(t,function(a){var s=Ue(n.storeObject,a,i);return s===void 0&&r!==n.storeObject&&H.call(r,a[0])&&(s=Ue(r,a,Ri)),C(s!==void 0,2,a.join("."),r),s});return"".concat(n.typename,":").concat(JSON.stringify(o))})}function Di(t){var e=Mr(t);return e.keyArgsFn||(e.keyArgsFn=function(r,n){var i=n.field,o=n.variables,a=n.fieldName,s=jr(t,function(u){var l=u[0],p=l.charAt(0);if(p==="@"){if(i&&le(i.directives)){var f=l.slice(1),h=i.directives.find(function(d){return d.name.value===f}),y=h&&Tt(h,o);return y&&Ue(y,u.slice(1))}return}if(p==="$"){var v=l.slice(1);if(o&&H.call(o,v)){var b=u.slice(0);return b[0]=v,Ue(o,b)}return}if(r)return Ue(r,u)}),c=JSON.stringify(s);return(r||c!=="{}")&&(a+=":"+c),a})}function jr(t,e){var r=new Se;return Ci(t).reduce(function(n,i){var o,a=e(i);if(a!==void 0){for(var s=i.length-1;s>=0;--s)a=(o={},o[i[s]]=a,o);n=r.merge(n,a)}return n},Object.create(null))}function Ci(t){var e=Mr(t);if(!e.paths){var r=e.paths=[],n=[];t.forEach(function(i,o){z(i)?(Ci(i).forEach(function(a){return r.push(n.concat(a))}),n.length=0):(n.push(i),z(t[o+1])||(r.push(n.slice(0)),n.length=0))})}return e.paths}function Ri(t,e){return t[e]}function Ue(t,e,r){return r=r||Ri,_i(e.reduce(function n(i,o){return z(i)?i.map(function(a){return n(a,o)}):i&&r(i,o)},t))}function _i(t){return V(t)?z(t)?t.map(_i):jr(Object.keys(t).sort(),function(e){return Ue(t,e)}):t}er.setStringify(Ce);function qr(t){return t.args!==void 0?t.args:t.field?Tt(t.field,t.variables):null}var Qs=function(){},xi=function(t,e){return e.fieldName},$i=function(t,e,r){var n=r.mergeObjects;return n(t,e)},Fi=function(t,e){return e},Bs=function(){function t(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=m({dataIdFromObject:di},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return t.prototype.identify=function(e,r){var n,i=this,o=r&&(r.typename||((n=r.storeObject)===null||n===void 0?void 0:n.__typename))||e.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var a=r&&r.storeObject||e,s=m(m({},r),{typename:o,storeObject:a,readField:r&&r.readField||function(){var f=Vr(arguments,a);return i.readField(f,{store:i.cache.data,variables:f.variables})}}),c,u=o&&this.getTypePolicy(o),l=u&&u.keyFn||this.config.dataIdFromObject;l;){var p=l(m(m({},e),a),s);if(z(p))l=Ni(p);else{c=p;break}}return c=c?String(c):void 0,s.keyObject?[c,s.keyObject]:[c]},t.prototype.addTypePolicies=function(e){var r=this;Object.keys(e).forEach(function(n){var i=e[n],o=i.queryType,a=i.mutationType,s=i.subscriptionType,c=de(i,["queryType","mutationType","subscriptionType"]);o&&r.setRootTypename("Query",n),a&&r.setRootTypename("Mutation",n),s&&r.setRootTypename("Subscription",n),H.call(r.toBeAdded,n)?r.toBeAdded[n].push(c):r.toBeAdded[n]=[c]})},t.prototype.updateTypePolicy=function(e,r){var n=this,i=this.getTypePolicy(e),o=r.keyFields,a=r.fields;function s(c,u){c.merge=typeof u=="function"?u:u===!0?$i:u===!1?Fi:c.merge}s(i,r.merge),i.keyFn=o===!1?Qs:z(o)?Ni(o):typeof o=="function"?o:i.keyFn,a&&Object.keys(a).forEach(function(c){var u=n.getFieldPolicy(e,c,!0),l=a[c];if(typeof l=="function")u.read=l;else{var p=l.keyArgs,f=l.read,h=l.merge;u.keyFn=p===!1?xi:z(p)?Di(p):typeof p=="function"?p:u.keyFn,typeof f=="function"&&(u.read=f),s(u,h)}u.read&&u.merge&&(u.keyFn=u.keyFn||xi)})},t.prototype.setRootTypename=function(e,r){r===void 0&&(r=e);var n="ROOT_"+e.toUpperCase(),i=this.rootTypenamesById[n];r!==i&&(C(!i||i===e,3,e),i&&delete this.rootIdsByTypename[i],this.rootIdsByTypename[r]=n,this.rootTypenamesById[n]=r)},t.prototype.addPossibleTypes=function(e){var r=this;this.usingPossibleTypes=!0,Object.keys(e).forEach(function(n){r.getSupertypeSet(n,!0),e[n].forEach(function(i){r.getSupertypeSet(i,!0).add(n);var o=i.match(vi);(!o||o[0]!==i)&&r.fuzzySubtypes.set(i,new RegExp(i))})})},t.prototype.getTypePolicy=function(e){var r=this;if(!H.call(this.typePolicies,e)){var n=this.typePolicies[e]=Object.create(null);n.fields=Object.create(null);var i=this.supertypeMap.get(e);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach(function(a,s){if(a.test(e)){var c=r.supertypeMap.get(s);c&&c.forEach(function(u){return i.add(u)})}})),i&&i.size&&i.forEach(function(a){var s=r.getTypePolicy(a),c=s.fields,u=de(s,["fields"]);Object.assign(n,u),Object.assign(n.fields,c)})}var o=this.toBeAdded[e];return o&&o.length&&o.splice(0).forEach(function(a){r.updateTypePolicy(e,a)}),this.typePolicies[e]},t.prototype.getFieldPolicy=function(e,r,n){if(e){var i=this.getTypePolicy(e).fields;return i[r]||n&&(i[r]=Object.create(null))}},t.prototype.getSupertypeSet=function(e,r){var n=this.supertypeMap.get(e);return!n&&r&&this.supertypeMap.set(e,n=new Set),n},t.prototype.fragmentMatches=function(e,r,n,i){var o=this;if(!e.typeCondition)return!0;if(!r)return!1;var a=e.typeCondition.name.value;if(r===a)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(a))for(var s=this.getSupertypeSet(r,!0),c=[s],u=function(y){var v=o.getSupertypeSet(y,!1);v&&v.size&&c.indexOf(v)<0&&c.push(v)},l=!!(n&&this.fuzzySubtypes.size),p=!1,f=0;f<c.length;++f){var h=c[f];if(h.has(a))return s.has(a)||(p&&globalThis.__DEV__!==!1&&C.warn(4,r,a),s.add(a)),!0;h.forEach(u),l&&f===c.length-1&&_r(e.selectionSet,n,i)&&(l=!1,p=!0,this.fuzzySubtypes.forEach(function(y,v){var b=r.match(y);b&&b[0]===r&&u(v)}))}return!1},t.prototype.hasKeyArgs=function(e,r){var n=this.getFieldPolicy(e,r,!1);return!!(n&&n.keyFn)},t.prototype.getStoreFieldName=function(e){var r=e.typename,n=e.fieldName,i=this.getFieldPolicy(r,n,!1),o,a=i&&i.keyFn;if(a&&r)for(var s={typename:r,fieldName:n,field:e.field||null,variables:e.variables},c=qr(e);a;){var u=a(c,s);if(z(u))a=Di(u);else{o=u||n;break}}return o===void 0&&(o=e.field?sa(e.field,e.variables):er(n,qr(e))),o===!1?n:n===ke(o)?o:n+":"+o},t.prototype.readField=function(e,r){var n=e.from;if(n){var i=e.field||e.fieldName;if(i){if(e.typename===void 0){var o=r.store.getFieldValue(n,"__typename");o&&(e.typename=o)}var a=this.getStoreFieldName(e),s=ke(a),c=r.store.getFieldValue(n,a),u=this.getFieldPolicy(e.typename,s,!1),l=u&&u.read;if(l){var p=Ai(this,n,e,r,r.store.getStorage(P(n)?n.__ref:n,a));return Lr.withValue(this.cache,l,[c,p])}return c}}},t.prototype.getReadFunction=function(e,r){var n=this.getFieldPolicy(e,r,!1);return n&&n.read},t.prototype.getMergeFunction=function(e,r,n){var i=this.getFieldPolicy(e,r,!1),o=i&&i.merge;return!o&&n&&(i=this.getTypePolicy(n),o=i&&i.merge),o},t.prototype.runMergeFunction=function(e,r,n,i,o){var a=n.field,s=n.typename,c=n.merge;return c===$i?Pi(i.store)(e,r):c===Fi?r:(i.overwrite&&(e=void 0),c(e,r,Ai(this,void 0,{typename:s,fieldName:a.name.value,field:a,variables:i.variables},i,o||Object.create(null))))},t}();function Ai(t,e,r,n,i){var o=t.getStoreFieldName(r),a=ke(o),s=r.variables||n.variables,c=n.store,u=c.toReference,l=c.canRead;return{args:qr(r),field:r.field||null,fieldName:a,storeFieldName:o,variables:s,isReference:P,toReference:u,storage:i,cache:t.cache,canRead:l,readField:function(){return t.readField(Vr(arguments,e,s),n)},mergeObjects:Pi(n.store)}}function Vr(t,e,r){var n=t[0],i=t[1],o=t.length,a;return typeof n=="string"?a={fieldName:n,from:o>1?i:e}:(a=m({},n),H.call(a,"from")||(a.from=e)),globalThis.__DEV__!==!1&&a.from===void 0&&globalThis.__DEV__!==!1&&C.warn(5,rn(Array.from(t))),a.variables===void 0&&(a.variables=r),a}function Pi(t){return function(r,n){if(z(r)||z(n))throw te(6);if(V(r)&&V(n)){var i=t.getFieldValue(r,"__typename"),o=t.getFieldValue(n,"__typename"),a=i&&o&&i!==o;if(a)return n;if(P(r)&&Be(n))return t.merge(r.__ref,n),r;if(Be(r)&&P(n))return t.merge(r,n.__ref),n;if(Be(r)&&Be(n))return m(m({},r),n)}return n}}function Qr(t,e,r){var n="".concat(e).concat(r),i=t.flavors.get(n);return i||t.flavors.set(n,i=t.clientOnly===e&&t.deferred===r?t:m(m({},t),{clientOnly:e,deferred:r})),i}var Us=function(){function t(e,r,n){this.cache=e,this.reader=r,this.fragments=n}return t.prototype.writeToStore=function(e,r){var n=this,i=r.query,o=r.result,a=r.dataId,s=r.variables,c=r.overwrite,u=et(i),l=xs();s=m(m({},nr(u)),s);var p=m(m({store:e,written:Object.create(null),merge:function(h,y){return l.merge(h,y)},variables:s,varString:Ce(s)},gi(i,this.fragments)),{overwrite:!!c,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),f=this.processSelectionSet({result:o||Object.create(null),dataId:a,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:p});if(!P(f))throw te(9,o);return p.incomingById.forEach(function(h,y){var v=h.storeObject,b=h.mergeTree,d=h.fieldNodeSet,E=$e(y);if(b&&b.map.size){var g=n.applyMerges(b,E,v,p);if(P(g))return;v=g}if(globalThis.__DEV__!==!1&&!p.overwrite){var k=Object.create(null);d.forEach(function(N){N.selectionSet&&(k[N.name.value]=!0)});var D=function(N){return k[ke(N)]===!0},O=function(N){var R=b&&b.map.get(N);return!!(R&&R.info&&R.info.merge)};Object.keys(v).forEach(function(N){D(N)&&!O(N)&&Gs(E,v,N,p.store)})}e.merge(y,v)}),e.retain(f.__ref),f},t.prototype.processSelectionSet=function(e){var r=this,n=e.dataId,i=e.result,o=e.selectionSet,a=e.context,s=e.mergeTree,c=this.cache.policies,u=Object.create(null),l=n&&c.rootTypenamesById[n]||tr(i,o,a.fragmentMap)||n&&a.store.get(n,"__typename");typeof l=="string"&&(u.__typename=l);var p=function(){var g=Vr(arguments,u,a.variables);if(P(g.from)){var k=a.incomingById.get(g.from.__ref);if(k){var D=c.readField(m(m({},g),{from:k.storeObject}),a);if(D!==void 0)return D}}return c.readField(g,a)},f=new Set;this.flattenFields(o,i,a,l).forEach(function(g,k){var D,O=be(k),N=i[O];if(f.add(k),N!==void 0){var R=c.getStoreFieldName({typename:l,fieldName:k.name.value,field:k,variables:g.variables}),U=Mi(s,R),B=r.processFieldValue(N,k,k.selectionSet?Qr(g,!1,!1):g,U),J=void 0;k.selectionSet&&(P(B)||Be(B))&&(J=p("__typename",B));var ie=c.getMergeFunction(l,k.name.value,J);ie?U.info={field:k,typename:l,merge:ie}:ji(s,R),u=g.merge(u,(D={},D[R]=B,D))}else globalThis.__DEV__!==!1&&!g.clientOnly&&!g.deferred&&!or.added(k)&&!c.getReadFunction(l,k.name.value)&&globalThis.__DEV__!==!1&&C.error(10,be(k),i)});try{var h=c.identify(i,{typename:l,selectionSet:o,fragmentMap:a.fragmentMap,storeObject:u,readField:p}),y=h[0],v=h[1];n=n||y,v&&(u=a.merge(u,v))}catch(g){if(!n)throw g}if(typeof n=="string"){var b=$e(n),d=a.written[n]||(a.written[n]=[]);if(d.indexOf(o)>=0||(d.push(o),this.reader&&this.reader.isFresh(i,b,o,a)))return b;var E=a.incomingById.get(n);return E?(E.storeObject=a.merge(E.storeObject,u),E.mergeTree=Br(E.mergeTree,s),f.forEach(function(g){return E.fieldNodeSet.add(g)})):a.incomingById.set(n,{storeObject:u,mergeTree:Pt(s)?void 0:s,fieldNodeSet:f}),b}return u},t.prototype.processFieldValue=function(e,r,n,i){var o=this;return!r.selectionSet||e===null?globalThis.__DEV__!==!1?jn(e):e:z(e)?e.map(function(a,s){var c=o.processFieldValue(a,r,n,Mi(i,s));return ji(i,s),c}):this.processSelectionSet({result:e,selectionSet:r.selectionSet,context:n,mergeTree:i})},t.prototype.flattenFields=function(e,r,n,i){i===void 0&&(i=tr(r,e,n.fragmentMap));var o=new Map,a=this.cache.policies,s=new ge(!1);return function c(u,l){var p=s.lookup(u,l.clientOnly,l.deferred);p.visited||(p.visited=!0,u.selections.forEach(function(f){if(Ye(f,n.variables)){var h=l.clientOnly,y=l.deferred;if(!(h&&y)&&le(f.directives)&&f.directives.forEach(function(d){var E=d.name.value;if(E==="client"&&(h=!0),E==="defer"){var g=Tt(d,n.variables);(!g||g.if!==!1)&&(y=!0)}}),Ie(f)){var v=o.get(f);v&&(h=h&&v.clientOnly,y=y&&v.deferred),o.set(f,Qr(n,h,y))}else{var b=wt(f,n.lookupFragment);if(!b&&f.kind===w.FRAGMENT_SPREAD)throw te(11,f.name.value);b&&a.fragmentMatches(b,i,r,n.variables)&&c(b.selectionSet,Qr(n,h,y))}}}))}(e,n),o},t.prototype.applyMerges=function(e,r,n,i,o){var a,s=this;if(e.map.size&&!P(n)){var c=!z(n)&&(P(r)||Be(r))?r:void 0,u=n;c&&!o&&(o=[P(c)?c.__ref:c]);var l,p=function(f,h){return z(f)?typeof h=="number"?f[h]:void 0:i.store.getFieldValue(f,String(h))};e.map.forEach(function(f,h){var y=p(c,h),v=p(u,h);if(v!==void 0){o&&o.push(h);var b=s.applyMerges(f,y,v,i,o);b!==v&&(l=l||new Map,l.set(h,b)),o&&C(o.pop()===h)}}),l&&(n=z(u)?u.slice(0):m({},u),l.forEach(function(f,h){n[h]=f}))}return e.info?this.cache.policies.runMergeFunction(r,n,e.info,i,o&&(a=i.store).getStorage.apply(a,o)):n},t}(),Li=[];function Mi(t,e){var r=t.map;return r.has(e)||r.set(e,Li.pop()||{map:new Map}),r.get(e)}function Br(t,e){if(t===e||!e||Pt(e))return t;if(!t||Pt(t))return e;var r=t.info&&e.info?m(m({},t.info),e.info):t.info||e.info,n=t.map.size&&e.map.size,i=n?new Map:t.map.size?t.map:e.map,o={info:r,map:i};if(n){var a=new Set(e.map.keys());t.map.forEach(function(s,c){o.map.set(c,Br(s,e.map.get(c))),a.delete(c)}),a.forEach(function(s){o.map.set(s,Br(e.map.get(s),t.map.get(s)))})}return o}function Pt(t){return!t||!(t.info||t.map.size)}function ji(t,e){var r=t.map,n=r.get(e);n&&Pt(n)&&(Li.push(n),r.delete(e))}var qi=new Set;function Gs(t,e,r,n){var i=function(p){var f=n.getFieldValue(p,r);return typeof f=="object"&&f},o=i(t);if(o){var a=i(e);if(a&&!P(o)&&!G(o,a)&&!Object.keys(o).every(function(p){return n.getFieldValue(a,p)!==void 0})){var s=n.getFieldValue(t,"__typename")||n.getFieldValue(e,"__typename"),c=ke(r),u="".concat(s,".").concat(c);if(!qi.has(u)){qi.add(u);var l=[];!z(o)&&!z(a)&&[o,a].forEach(function(p){var f=n.getFieldValue(p,"__typename");typeof f=="string"&&!l.includes(f)&&l.push(f)}),globalThis.__DEV__!==!1&&C.warn(12,c,s,l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"",u,o,a)}}}}var zs=function(t){ae(e,t);function e(r){r===void 0&&(r={});var n=t.call(this)||this;return n.watches=new Set,n.addTypenameTransform=new wn(or),n.assumeImmutableResults=!0,n.makeVar=qs,n.txCount=0,n.config=Rs(r),n.addTypename=!!n.config.addTypename,n.policies=new Bs({cache:n,dataIdFromObject:n.config.dataIdFromObject,possibleTypes:n.config.possibleTypes,typePolicies:n.config.typePolicies}),n.init(),n}return e.prototype.init=function(){var r=this.data=new st.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=r.stump,this.resetResultCache()},e.prototype.resetResultCache=function(r){var n=this,i=this.storeReader,o=this.config.fragments;this.storeWriter=new Us(this,this.storeReader=new Ps({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:yi(this.config),canon:r?void 0:i&&i.canon,fragments:o}),o),this.maybeBroadcastWatch=Ft(function(a,s){return n.broadcastWatch(a,s)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(a){var s=a.optimistic?n.optimisticData:n.data;if(ct(s)){var c=a.optimistic,u=a.id,l=a.variables;return s.makeCacheKey(a.query,a.callback,Ce({optimistic:c,id:u,variables:l}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(a){return a.resetCaching()})},e.prototype.restore=function(r){return this.init(),r&&this.data.replace(r),this},e.prototype.extract=function(r){return r===void 0&&(r=!1),(r?this.optimisticData:this.data).extract()},e.prototype.read=function(r){var n=r.returnPartialData,i=n===void 0?!1:n;try{return this.storeReader.diffQueryAgainstStore(m(m({},r),{store:r.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:i})).result||null}catch(o){if(o instanceof pi)return null;throw o}},e.prototype.write=function(r){try{return++this.txCount,this.storeWriter.writeToStore(this.data,r)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.modify=function(r){if(H.call(r,"id")&&!r.id)return!1;var n=r.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(r.id||"ROOT_QUERY",r.fields)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.diff=function(r){return this.storeReader.diffQueryAgainstStore(m(m({},r),{store:r.optimistic?this.optimisticData:this.data,rootId:r.id||"ROOT_QUERY",config:this.config}))},e.prototype.watch=function(r){var n=this;return this.watches.size||js(this),this.watches.add(r),r.immediate&&this.maybeBroadcastWatch(r),function(){n.watches.delete(r)&&!n.watches.size&&wi(n),n.maybeBroadcastWatch.forget(r)}},e.prototype.gc=function(r){Ce.reset();var n=this.optimisticData.gc();return r&&!this.txCount&&(r.resetResultCache?this.resetResultCache(r.resetResultIdentities):r.resetResultIdentities&&this.storeReader.resetCanon()),n},e.prototype.retain=function(r,n){return(n?this.optimisticData:this.data).retain(r)},e.prototype.release=function(r,n){return(n?this.optimisticData:this.data).release(r)},e.prototype.identify=function(r){if(P(r))return r.__ref;try{return this.policies.identify(r)[0]}catch(n){globalThis.__DEV__!==!1&&C.warn(n)}},e.prototype.evict=function(r){if(!r.id){if(H.call(r,"id"))return!1;r=m(m({},r),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(r,this.data)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.reset=function(r){var n=this;return this.init(),Ce.reset(),r&&r.discardWatches?(this.watches.forEach(function(i){return n.maybeBroadcastWatch.forget(i)}),this.watches.clear(),wi(this)):this.broadcastWatches(),Promise.resolve()},e.prototype.removeOptimistic=function(r){var n=this.optimisticData.removeLayer(r);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())},e.prototype.batch=function(r){var n=this,i=r.update,o=r.optimistic,a=o===void 0?!0:o,s=r.removeOptimistic,c=r.onWatchUpdated,u,l=function(f){var h=n,y=h.data,v=h.optimisticData;++n.txCount,f&&(n.data=n.optimisticData=f);try{return u=i(n)}finally{--n.txCount,n.data=y,n.optimisticData=v}},p=new Set;return c&&!this.txCount&&this.broadcastWatches(m(m({},r),{onWatchUpdated:function(f){return p.add(f),!1}})),typeof a=="string"?this.optimisticData=this.optimisticData.addLayer(a,l):a===!1?l(this.data):l(),typeof s=="string"&&(this.optimisticData=this.optimisticData.removeLayer(s)),c&&p.size?(this.broadcastWatches(m(m({},r),{onWatchUpdated:function(f,h){var y=c.call(this,f,h);return y!==!1&&p.delete(f),y}})),p.size&&p.forEach(function(f){return n.maybeBroadcastWatch.dirty(f)})):this.broadcastWatches(r),u},e.prototype.performTransaction=function(r,n){return this.batch({update:r,optimistic:n||n!==null})},e.prototype.transformDocument=function(r){return this.addTypenameToDocument(this.addFragmentsToDocument(r))},e.prototype.broadcastWatches=function(r){var n=this;this.txCount||this.watches.forEach(function(i){return n.maybeBroadcastWatch(i,r)})},e.prototype.addFragmentsToDocument=function(r){var n=this.config.fragments;return n?n.transform(r):r},e.prototype.addTypenameToDocument=function(r){return this.addTypename?this.addTypenameTransform.transformDocument(r):r},e.prototype.broadcastWatch=function(r,n){var i=r.lastDiff,o=this.diff(r);n&&(r.optimistic&&typeof n.optimistic=="string"&&(o.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,r,o,i)===!1)||(!i||!G(i.result,o.result))&&r.callback(r.lastDiff=o,i)},e}(Cs),L;(function(t){t[t.loading=1]="loading",t[t.setVariables=2]="setVariables",t[t.fetchMore=3]="fetchMore",t[t.refetch=4]="refetch",t[t.poll=6]="poll",t[t.ready=7]="ready",t[t.error=8]="error"})(L||(L={}));function lt(t){return t?t<7:!1}function Ws(t,e,r,n){var i=e.data,o=de(e,["data"]),a=r.data,s=de(r,["data"]);return G(o,s)&&Lt(tt(t).selectionSet,i,a,{fragmentMap:Ot(Nt(t)),variables:n})}function Lt(t,e,r,n){if(e===r)return!0;var i=new Set;return t.selections.every(function(o){if(i.has(o)||(i.add(o),!Ye(o,n.variables))||Vi(o))return!0;if(Ie(o)){var a=be(o),s=e&&e[a],c=r&&r[a],u=o.selectionSet;if(!u)return G(s,c);var l=Array.isArray(s),p=Array.isArray(c);if(l!==p)return!1;if(l&&p){var f=s.length;if(c.length!==f)return!1;for(var h=0;h<f;++h)if(!Lt(u,s[h],c[h],n))return!1;return!0}return Lt(u,s,c,n)}else{var y=wt(o,n.fragmentMap);if(y)return Vi(y)?!0:Lt(y.selectionSet,e,r,n)}})}function Vi(t){return!!t.directives&&t.directives.some(Ks)}function Ks(t){return t.name.value==="nonreactive"}var Qi=Object.assign,Js=Object.hasOwnProperty,Ur=function(t){ae(e,t);function e(r){var n=r.queryManager,i=r.queryInfo,o=r.options,a=t.call(this,function(b){try{var d=b._subscription._observer;d&&!d.error&&(d.error=Ys)}catch{}var E=!a.observers.size;a.observers.add(b);var g=a.last;return g&&g.error?b.error&&b.error(g.error):g&&g.result&&b.next&&b.next(g.result),E&&a.reobserve().catch(function(){}),function(){a.observers.delete(b)&&!a.observers.size&&a.tearDownQuery()}})||this;a.observers=new Set,a.subscriptions=new Set,a.queryInfo=i,a.queryManager=n,a.waitForOwnResult=Gr(o.fetchPolicy),a.isTornDown=!1;var s=n.defaultOptions.watchQuery,c=s===void 0?{}:s,u=c.fetchPolicy,l=u===void 0?"cache-first":u,p=o.fetchPolicy,f=p===void 0?l:p,h=o.initialFetchPolicy,y=h===void 0?f==="standby"?l:f:h;a.options=m(m({},o),{initialFetchPolicy:y,fetchPolicy:f}),a.queryId=i.queryId||n.generateQueryId();var v=et(a.query);return a.queryName=v&&v.name&&v.name.value,a}return Object.defineProperty(e.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),e.prototype.result=function(){var r=this;return new Promise(function(n,i){var o={next:function(s){n(s),r.observers.delete(o),r.observers.size||r.queryManager.removeQuery(r.queryId),setTimeout(function(){a.unsubscribe()},0)},error:i},a=r.subscribe(o)})},e.prototype.getCurrentResult=function(r){r===void 0&&(r=!0);var n=this.getLastResult(!0),i=this.queryInfo.networkStatus||n&&n.networkStatus||L.ready,o=m(m({},n),{loading:lt(i),networkStatus:i}),a=this.options.fetchPolicy,s=a===void 0?"cache-first":a;if(!(Gr(s)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var c=this.queryInfo.getDiff();(c.complete||this.options.returnPartialData)&&(o.data=c.result),G(o.data,{})&&(o.data=void 0),c.complete?(delete o.partial,c.complete&&o.networkStatus===L.loading&&(s==="cache-first"||s==="cache-only")&&(o.networkStatus=L.ready,o.loading=!1)):o.partial=!0,globalThis.__DEV__!==!1&&!c.complete&&!this.options.partialRefetch&&!o.loading&&!o.data&&!o.error&&Ui(c.missing)}return r&&this.updateLastResult(o),o},e.prototype.isDifferentFromLastResult=function(r,n){if(!this.last)return!0;var i=this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective?!Ws(this.query,this.last.result,r,this.variables):!G(this.last.result,r);return i||n&&!G(this.last.variables,n)},e.prototype.getLast=function(r,n){var i=this.last;if(i&&i[r]&&(!n||G(i.variables,this.variables)))return i[r]},e.prototype.getLastResult=function(r){return this.getLast("result",r)},e.prototype.getLastError=function(r){return this.getLast("error",r)},e.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},e.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},e.prototype.refetch=function(r){var n,i={pollInterval:0},o=this.options.fetchPolicy;if(o==="cache-and-network"?i.fetchPolicy=o:o==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",globalThis.__DEV__!==!1&&r&&Js.call(r,"variables")){var a=On(this.query),s=a.variableDefinitions;(!s||!s.some(function(c){return c.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&C.warn(18,r,((n=a.name)===null||n===void 0?void 0:n.value)||a)}return r&&!G(this.options.variables,r)&&(i.variables=this.options.variables=m(m({},this.options.variables),r)),this.queryInfo.resetLastWrite(),this.reobserve(i,L.refetch)},e.prototype.fetchMore=function(r){var n=this,i=m(m({},r.query?r:m(m(m(m({},this.options),{query:this.options.query}),r),{variables:m(m({},this.options.variables),r.variables)})),{fetchPolicy:"no-cache"});i.query=this.transformDocument(i.query);var o=this.queryManager.generateQueryId();this.lastQuery=r.query?this.transformDocument(this.options.query):i.query;var a=this.queryInfo,s=a.networkStatus;a.networkStatus=L.fetchMore,i.notifyOnNetworkStatusChange&&this.observe();var c=new Set;return this.queryManager.fetchQuery(o,i,L.fetchMore).then(function(u){return n.queryManager.removeQuery(o),a.networkStatus===L.fetchMore&&(a.networkStatus=s),n.queryManager.cache.batch({update:function(l){var p=r.updateQuery;p?l.updateQuery({query:n.query,variables:n.variables,returnPartialData:!0,optimistic:!1},function(f){return p(f,{fetchMoreResult:u.data,variables:i.variables})}):l.writeQuery({query:i.query,variables:i.variables,data:u.data})},onWatchUpdated:function(l){c.add(l.query)}}),u}).finally(function(){c.has(n.query)||Bi(n)})},e.prototype.subscribeToMore=function(r){var n=this,i=this.queryManager.startGraphQLSubscription({query:r.document,variables:r.variables,context:r.context}).subscribe({next:function(o){var a=r.updateQuery;a&&n.updateQuery(function(s,c){var u=c.variables;return a(s,{subscriptionData:o,variables:u})})},error:function(o){if(r.onError){r.onError(o);return}globalThis.__DEV__!==!1&&C.error(19,o)}});return this.subscriptions.add(i),function(){n.subscriptions.delete(i)&&i.unsubscribe()}},e.prototype.setOptions=function(r){return this.reobserve(r)},e.prototype.silentSetOptions=function(r){var n=qe(this.options,r||{});Qi(this.options,n)},e.prototype.setVariables=function(r){return G(this.variables,r)?this.observers.size?this.result():Promise.resolve():(this.options.variables=r,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:r},L.setVariables):Promise.resolve())},e.prototype.updateQuery=function(r){var n=this.queryManager,i=n.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,o=r(i,{variables:this.variables});o&&(n.cache.writeQuery({query:this.options.query,data:o,variables:this.variables}),n.broadcastQueries())},e.prototype.startPolling=function(r){this.options.pollInterval=r,this.updatePolling()},e.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},e.prototype.applyNextFetchPolicy=function(r,n){if(n.nextFetchPolicy){var i=n.fetchPolicy,o=i===void 0?"cache-first":i,a=n.initialFetchPolicy,s=a===void 0?o:a;o==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy(o,{reason:r,options:n,observable:this,initialFetchPolicy:s}):r==="variables-changed"?n.fetchPolicy=s:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy},e.prototype.fetch=function(r,n){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,r,n)},e.prototype.updatePolling=function(){var r=this;if(!this.queryManager.ssrMode){var n=this,i=n.pollingInfo,o=n.options.pollInterval;if(!o){i&&(clearTimeout(i.timeout),delete this.pollingInfo);return}if(!(i&&i.interval===o)){C(o,20);var a=i||(this.pollingInfo={});a.interval=o;var s=function(){r.pollingInfo&&(lt(r.queryInfo.networkStatus)?c():r.reobserve({fetchPolicy:r.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},L.poll).then(c,c))},c=function(){var u=r.pollingInfo;u&&(clearTimeout(u.timeout),u.timeout=setTimeout(s,u.interval))};c()}}},e.prototype.updateLastResult=function(r,n){n===void 0&&(n=this.variables);var i=this.getLastError();return i&&this.last&&!G(n,this.last.variables)&&(i=void 0),this.last=m({result:this.queryManager.assumeImmutableResults?r:jn(r),variables:n},i?{error:i}:null)},e.prototype.reobserveAsConcast=function(r,n){var i=this;this.isTornDown=!1;var o=n===L.refetch||n===L.fetchMore||n===L.poll,a=this.options.variables,s=this.options.fetchPolicy,c=qe(this.options,r||{}),u=o?c:Qi(this.options,c),l=this.transformDocument(u.query);this.lastQuery=l,o||(this.updatePolling(),r&&r.variables&&!G(r.variables,a)&&u.fetchPolicy!=="standby"&&u.fetchPolicy===s&&(this.applyNextFetchPolicy("variables-changed",u),n===void 0&&(n=L.setVariables)));var p=l===u.query?u:m(m({},u),{query:l});this.waitForOwnResult&&(this.waitForOwnResult=Gr(p.fetchPolicy));var f=function(){i.concast===v&&(i.waitForOwnResult=!1)},h=p.variables&&m({},p.variables),y=this.fetch(p,n),v=y.concast,b=y.fromLink,d={next:function(E){f(),i.reportResult(E,h)},error:function(E){f(),i.reportError(E,h)}};return!o&&(b||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=v,this.observer=d),v.addObserver(d),v},e.prototype.reobserve=function(r,n){return this.reobserveAsConcast(r,n).promise},e.prototype.resubscribeAfterError=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=this.last;this.resetLastResults();var o=this.subscribe.apply(this,r);return this.last=i,o},e.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},e.prototype.reportResult=function(r,n){var i=this.getLastError(),o=this.isDifferentFromLastResult(r,n);(i||!r.partial||this.options.returnPartialData)&&this.updateLastResult(r,n),(i||o)&&nt(this.observers,"next",r)},e.prototype.reportError=function(r,n){var i=m(m({},this.getLastResult()),{error:r,errors:r.graphQLErrors,networkStatus:L.error,loading:!1});this.updateLastResult(i,n),nt(this.observers,"error",this.last.error=r)},e.prototype.hasObservers=function(){return this.observers.size>0},e.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(r){return r.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},e.prototype.transformDocument=function(r){return this.queryManager.transform(r)},e}(Q);qn(Ur);function Bi(t){var e=t.options,r=e.fetchPolicy,n=e.nextFetchPolicy;return r==="cache-and-network"||r==="network-only"?t.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(){return this.nextFetchPolicy=n,typeof n=="function"?n.apply(this,arguments):r}}):t.reobserve()}function Ys(t){globalThis.__DEV__!==!1&&C.error(21,t.message,t.stack)}function Ui(t){globalThis.__DEV__!==!1&&t&&globalThis.__DEV__!==!1&&C.debug(22,t)}function Gr(t){return t==="network-only"||t==="no-cache"||t==="standby"}var Gi=function(){function t(e){var r=e.cache,n=e.client,i=e.resolvers,o=e.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=r,n&&(this.client=n),i&&this.addResolvers(i),o&&this.setFragmentMatcher(o)}return t.prototype.addResolvers=function(e){var r=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach(function(n){r.resolvers=_n(r.resolvers,n)}):this.resolvers=_n(this.resolvers,e)},t.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},t.prototype.getResolvers=function(){return this.resolvers||{}},t.prototype.runResolvers=function(e){var r=e.document,n=e.remoteResult,i=e.context,o=e.variables,a=e.onlyRunForcedResolvers,s=a===void 0?!1:a;return me(this,void 0,void 0,function(){return ye(this,function(c){return r?[2,this.resolveDocument(r,n.data,i,o,this.fragmentMatcher,s).then(function(u){return m(m({},n),{data:u.result})})]:[2,n]})})},t.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},t.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},t.prototype.clientQuery=function(e){return He(["client"],e)&&this.resolvers?e:null},t.prototype.serverQuery=function(e){return Rn(e)},t.prototype.prepareContext=function(e){var r=this.cache;return m(m({},e),{cache:r,getCacheKey:function(n){return r.identify(n)}})},t.prototype.addExportedVariables=function(e,r,n){return r===void 0&&(r={}),n===void 0&&(n={}),me(this,void 0,void 0,function(){return ye(this,function(i){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,r)||{},this.prepareContext(n),r).then(function(o){return m(m({},r),o.exportedVariables)})]:[2,m({},r)]})})},t.prototype.shouldForceResolvers=function(e){var r=!1;return fe(e,{Directive:{enter:function(n){if(n.name.value==="client"&&n.arguments&&(r=n.arguments.some(function(i){return i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0}),r))return Zt}}}),r},t.prototype.buildRootValueFromCache=function(e,r){return this.cache.diff({query:ma(e),variables:r,returnPartialData:!0,optimistic:!1}).result},t.prototype.resolveDocument=function(e,r,n,i,o,a){return n===void 0&&(n={}),i===void 0&&(i={}),o===void 0&&(o=function(){return!0}),a===void 0&&(a=!1),me(this,void 0,void 0,function(){var s,c,u,l,p,f,h,y,v,b,d;return ye(this,function(E){return s=tt(e),c=Nt(e),u=Ot(c),l=this.collectSelectionsToResolve(s,u),p=s.operation,f=p?p.charAt(0).toUpperCase()+p.slice(1):"Query",h=this,y=h.cache,v=h.client,b={fragmentMap:u,context:m(m({},n),{cache:y,client:v}),variables:i,fragmentMatcher:o,defaultOperationType:f,exportedVariables:{},selectionsToResolve:l,onlyRunForcedResolvers:a},d=!1,[2,this.resolveSelectionSet(s.selectionSet,d,r,b).then(function(g){return{result:g,exportedVariables:b.exportedVariables}})]})})},t.prototype.resolveSelectionSet=function(e,r,n,i){return me(this,void 0,void 0,function(){var o,a,s,c,u,l=this;return ye(this,function(p){return o=i.fragmentMap,a=i.context,s=i.variables,c=[n],u=function(f){return me(l,void 0,void 0,function(){var h,y;return ye(this,function(v){return!r&&!i.selectionsToResolve.has(f)?[2]:Ye(f,s)?Ie(f)?[2,this.resolveField(f,r,n,i).then(function(b){var d;typeof b<"u"&&c.push((d={},d[be(f)]=b,d))})]:(la(f)?h=f:(h=o[f.name.value],C(h,16,f.name.value)),h&&h.typeCondition&&(y=h.typeCondition.name.value,i.fragmentMatcher(n,y,a))?[2,this.resolveSelectionSet(h.selectionSet,r,n,i).then(function(b){c.push(b)})]:[2]):[2]})})},[2,Promise.all(e.selections.map(u)).then(function(){return ar(c)})]})})},t.prototype.resolveField=function(e,r,n,i){return me(this,void 0,void 0,function(){var o,a,s,c,u,l,p,f,h,y=this;return ye(this,function(v){return n?(o=i.variables,a=e.name.value,s=be(e),c=a!==s,u=n[s]||n[a],l=Promise.resolve(u),(!i.onlyRunForcedResolvers||this.shouldForceResolvers(e))&&(p=n.__typename||i.defaultOperationType,f=this.resolvers&&this.resolvers[p],f&&(h=f[c?a:s],h&&(l=Promise.resolve(Lr.withValue(this.cache,h,[n,Tt(e,o),i.context,{field:e,fragmentMap:i.fragmentMap}]))))),[2,l.then(function(b){var d,E;if(b===void 0&&(b=u),e.directives&&e.directives.forEach(function(k){k.name.value==="export"&&k.arguments&&k.arguments.forEach(function(D){D.name.value==="as"&&D.value.kind==="StringValue"&&(i.exportedVariables[D.value.value]=b)})}),!e.selectionSet||b==null)return b;var g=(E=(d=e.directives)===null||d===void 0?void 0:d.some(function(k){return k.name.value==="client"}))!==null&&E!==void 0?E:!1;if(Array.isArray(b))return y.resolveSubSelectedArray(e,r||g,b,i);if(e.selectionSet)return y.resolveSelectionSet(e.selectionSet,r||g,b,i)})]):[2,null]})})},t.prototype.resolveSubSelectedArray=function(e,r,n,i){var o=this;return Promise.all(n.map(function(a){if(a===null)return null;if(Array.isArray(a))return o.resolveSubSelectedArray(e,r,a,i);if(e.selectionSet)return o.resolveSelectionSet(e.selectionSet,r,a,i)}))},t.prototype.collectSelectionsToResolve=function(e,r){var n=function(a){return!Array.isArray(a)},i=this.selectionsToResolveCache;function o(a){if(!i.has(a)){var s=new Set;i.set(a,s),fe(a,{Directive:function(c,u,l,p,f){c.name.value==="client"&&f.forEach(function(h){n(h)&&In(h)&&s.add(h)})},FragmentSpread:function(c,u,l,p,f){var h=r[c.name.value];C(h,17,c.name.value);var y=o(h);y.size>0&&(f.forEach(function(v){n(v)&&In(v)&&s.add(v)}),s.add(c),y.forEach(function(v){s.add(v)}))}})}return i.get(a)}return o(e)},t}(),Ge=new(he?WeakMap:Map);function zr(t,e){var r=t[e];typeof r=="function"&&(t[e]=function(){return Ge.set(t,(Ge.get(t)+1)%1e15),r.apply(this,arguments)})}function zi(t){t.notifyTimeout&&(clearTimeout(t.notifyTimeout),t.notifyTimeout=void 0)}var Wr=function(){function t(e,r){r===void 0&&(r=e.generateQueryId()),this.queryId=r,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.subscriptions=new Set,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var n=this.cache=e.cache;Ge.has(n)||(Ge.set(n,0),zr(n,"evict"),zr(n,"modify"),zr(n,"reset"))}return t.prototype.init=function(e){var r=e.networkStatus||L.loading;return this.variables&&this.networkStatus!==L.loading&&!G(this.variables,e.variables)&&(r=L.setVariables),G(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:r}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},t.prototype.reset=function(){zi(this),this.dirty=!1},t.prototype.getDiff=function(){var e=this.getDiffOptions();if(this.lastDiff&&G(e,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var r=this.observableQuery;if(r&&r.options.fetchPolicy==="no-cache")return{complete:!1};var n=this.cache.diff(e);return this.updateLastDiff(n,e),n},t.prototype.updateLastDiff=function(e,r){this.lastDiff=e?{diff:e,options:r||this.getDiffOptions()}:void 0},t.prototype.getDiffOptions=function(e){var r;return e===void 0&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:(r=this.observableQuery)===null||r===void 0?void 0:r.options.canonizeResults}},t.prototype.setDiff=function(e){var r=this,n=this.lastDiff&&this.lastDiff.diff;this.updateLastDiff(e),!this.dirty&&!G(n&&n.result,e&&e.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return r.notify()},0)))},t.prototype.setObservableQuery=function(e){var r=this;e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){var n=r.getDiff();n.fromOptimisticTransaction?e.observe():Bi(e)})):delete this.oqListener)},t.prototype.notify=function(){var e=this;zi(this),this.shouldNotify()&&this.listeners.forEach(function(r){return r(e)}),this.dirty=!1},t.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(lt(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy;if(e!=="cache-only"&&e!=="cache-and-network")return!1}return!0},t.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=t.prototype.cancel,this.subscriptions.forEach(function(r){return r.unsubscribe()});var e=this.observableQuery;e&&e.stopPolling()}},t.prototype.cancel=function(){},t.prototype.updateWatch=function(e){var r=this;e===void 0&&(e=this.variables);var n=this.observableQuery;if(!(n&&n.options.fetchPolicy==="no-cache")){var i=m(m({},this.getDiffOptions(e)),{watcher:this,callback:function(o){return r.setDiff(o)}});(!this.lastWatch||!G(i,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=i))}},t.prototype.resetLastWrite=function(){this.lastWrite=void 0},t.prototype.shouldWrite=function(e,r){var n=this.lastWrite;return!(n&&n.dmCount===Ge.get(this.cache)&&G(r,n.variables)&&G(e.data,n.result.data))},t.prototype.markResult=function(e,r,n,i){var o=this,a=new Se,s=le(e.errors)?e.errors.slice(0):[];if(this.reset(),"incremental"in e&&le(e.incremental)){var c=Qn(this.getDiff().result,e);e.data=c}else if("hasNext"in e&&e.hasNext){var u=this.getDiff();e.data=a.merge(u.result,e.data)}this.graphQLErrors=s,n.fetchPolicy==="no-cache"?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(n.variables)):i!==0&&(Kr(e,n.errorPolicy)?this.cache.performTransaction(function(l){if(o.shouldWrite(e,n.variables))l.writeQuery({query:r,data:e.data,variables:n.variables,overwrite:i===1}),o.lastWrite={result:e,variables:n.variables,dmCount:Ge.get(o.cache)};else if(o.lastDiff&&o.lastDiff.diff.complete){e.data=o.lastDiff.diff.result;return}var p=o.getDiffOptions(n.variables),f=l.diff(p);!o.stopped&&G(o.variables,n.variables)&&o.updateWatch(n.variables),o.updateLastDiff(f,p),f.complete&&(e.data=f.result)}):this.lastWrite=void 0)},t.prototype.markReady=function(){return this.networkError=null,this.networkStatus=L.ready},t.prototype.markError=function(e){return this.networkStatus=L.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},t}();function Kr(t,e){e===void 0&&(e="none");var r=e==="ignore"||e==="all",n=!Rt(t);return!n&&r&&t.data&&(n=!0),n}var Hs=Object.prototype.hasOwnProperty,Xs=function(){function t(e){var r=this,n=e.cache,i=e.link,o=e.defaultOptions,a=e.documentTransform,s=e.queryDeduplication,c=s===void 0?!1:s,u=e.onBroadcast,l=e.ssrMode,p=l===void 0?!1:l,f=e.clientAwareness,h=f===void 0?{}:f,y=e.localState,v=e.assumeImmutableResults,b=v===void 0?!!n.assumeImmutableResults:v;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(he?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map;var d=new wn(function(E){return r.cache.transformDocument(E)},{cache:!1});this.cache=n,this.link=i,this.defaultOptions=o||Object.create(null),this.queryDeduplication=c,this.clientAwareness=h,this.localState=y||new Gi({cache:n}),this.ssrMode=p,this.assumeImmutableResults=b,this.documentTransform=a?d.concat(a).concat(d):d,(this.onBroadcast=u)&&(this.mutationStore=Object.create(null))}return t.prototype.stop=function(){var e=this;this.queries.forEach(function(r,n){e.stopQueryNoBroadcast(n)}),this.cancelPendingFetches(te(23))},t.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach(function(r){return r(e)}),this.fetchCancelFns.clear()},t.prototype.mutate=function(e){var r,n,i=e.mutation,o=e.variables,a=e.optimisticResponse,s=e.updateQueries,c=e.refetchQueries,u=c===void 0?[]:c,l=e.awaitRefetchQueries,p=l===void 0?!1:l,f=e.update,h=e.onQueryUpdated,y=e.fetchPolicy,v=y===void 0?((r=this.defaultOptions.mutate)===null||r===void 0?void 0:r.fetchPolicy)||"network-only":y,b=e.errorPolicy,d=b===void 0?((n=this.defaultOptions.mutate)===null||n===void 0?void 0:n.errorPolicy)||"none":b,E=e.keepRootFields,g=e.context;return me(this,void 0,void 0,function(){var k,D,O,N;return ye(this,function(R){switch(R.label){case 0:return C(i,24),C(v==="network-only"||v==="no-cache",25),k=this.generateMutationId(),i=this.cache.transformForLink(this.transform(i)),D=this.getDocumentInfo(i).hasClientExports,o=this.getVariables(i,o),D?[4,this.localState.addExportedVariables(i,o,g)]:[3,2];case 1:o=R.sent(),R.label=2;case 2:return O=this.mutationStore&&(this.mutationStore[k]={mutation:i,variables:o,loading:!0,error:null}),a&&this.markMutationOptimistic(a,{mutationId:k,document:i,variables:o,fetchPolicy:v,errorPolicy:d,context:g,updateQueries:s,update:f,keepRootFields:E}),this.broadcastQueries(),N=this,[2,new Promise(function(U,B){return yr(N.getObservableFromLink(i,m(m({},g),{optimisticResponse:a}),o,!1),function(J){if(Rt(J)&&d==="none")throw new De({graphQLErrors:vr(J)});O&&(O.loading=!1,O.error=null);var ie=m({},J);return typeof u=="function"&&(u=u(ie)),d==="ignore"&&Rt(ie)&&delete ie.errors,N.markMutationResult({mutationId:k,result:ie,document:i,variables:o,fetchPolicy:v,errorPolicy:d,context:g,update:f,updateQueries:s,awaitRefetchQueries:p,refetchQueries:u,removeOptimistic:a?k:void 0,onQueryUpdated:h,keepRootFields:E})}).subscribe({next:function(J){N.broadcastQueries(),(!("hasNext"in J)||J.hasNext===!1)&&U(J)},error:function(J){O&&(O.loading=!1,O.error=J),a&&N.cache.removeOptimistic(k),N.broadcastQueries(),B(J instanceof De?J:new De({networkError:J}))}})})]}})})},t.prototype.markMutationResult=function(e,r){var n=this;r===void 0&&(r=this.cache);var i=e.result,o=[],a=e.fetchPolicy==="no-cache";if(!a&&Kr(i,e.errorPolicy)){if(je(i)||o.push({result:i.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),je(i)&&le(i.incremental)){var s=r.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),c=void 0;s.result&&(c=Qn(s.result,i)),typeof c<"u"&&(i.data=c,o.push({result:c,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var u=e.updateQueries;u&&this.queries.forEach(function(p,f){var h=p.observableQuery,y=h&&h.queryName;if(!(!y||!Hs.call(u,y))){var v=u[y],b=n.queries.get(f),d=b.document,E=b.variables,g=r.diff({query:d,variables:E,returnPartialData:!0,optimistic:!1}),k=g.result,D=g.complete;if(D&&k){var O=v(k,{mutationResult:i,queryName:d&&rr(d)||void 0,queryVariables:E});O&&o.push({result:O,dataId:"ROOT_QUERY",query:d,variables:E})}}})}if(o.length>0||e.refetchQueries||e.update||e.onQueryUpdated||e.removeOptimistic){var l=[];if(this.refetchQueries({updateCache:function(p){a||o.forEach(function(v){return p.write(v)});var f=e.update,h=!Ra(i)||je(i)&&!i.hasNext;if(f){if(!a){var y=p.diff({id:"ROOT_MUTATION",query:n.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});y.complete&&(i=m(m({},i),{data:y.result}),"incremental"in i&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}h&&f(p,i,{context:e.context,variables:e.variables})}!a&&!e.keepRootFields&&h&&p.modify({id:"ROOT_MUTATION",fields:function(v,b){var d=b.fieldName,E=b.DELETE;return d==="__typename"?v:E}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach(function(p){return l.push(p)}),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(l).then(function(){return i})}return Promise.resolve(i)},t.prototype.markMutationOptimistic=function(e,r){var n=this,i=typeof e=="function"?e(r.variables):e;return this.cache.recordOptimisticTransaction(function(o){try{n.markMutationResult(m(m({},r),{result:{data:i}}),o)}catch(a){globalThis.__DEV__!==!1&&C.error(a)}},r.mutationId)},t.prototype.fetchQuery=function(e,r,n){return this.fetchConcastWithInfo(e,r,n).concast.promise},t.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach(function(r,n){e[n]={variables:r.variables,networkStatus:r.networkStatus,networkError:r.networkError,graphQLErrors:r.graphQLErrors}}),e},t.prototype.resetErrors=function(e){var r=this.queries.get(e);r&&(r.networkError=void 0,r.graphQLErrors=[])},t.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},t.prototype.getDocumentInfo=function(e){var r=this.transformCache;if(!r.has(e)){var n={hasClientExports:Bo(e),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:He(["nonreactive"],e),clientQuery:this.localState.clientQuery(e),serverQuery:Cn([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"}],e),defaultVars:nr(et(e)),asQuery:m(m({},e),{definitions:e.definitions.map(function(i){return i.kind==="OperationDefinition"&&i.operation!=="query"?m(m({},i),{operation:"query"}):i})})};r.set(e,n)}return r.get(e)},t.prototype.getVariables=function(e,r){return m(m({},this.getDocumentInfo(e).defaultVars),r)},t.prototype.watchQuery=function(e){var r=this.transform(e.query);e=m(m({},e),{variables:this.getVariables(r,e.variables)}),typeof e.notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!1);var n=new Wr(this),i=new Ur({queryManager:this,queryInfo:n,options:e});return i.lastQuery=r,this.queries.set(i.queryId,n),n.init({document:r,observableQuery:i,variables:i.variables}),i},t.prototype.query=function(e,r){var n=this;return r===void 0&&(r=this.generateQueryId()),C(e.query,26),C(e.query.kind==="Document",27),C(!e.returnPartialData,28),C(!e.pollInterval,29),this.fetchQuery(r,m(m({},e),{query:this.transform(e.query)})).finally(function(){return n.stopQuery(r)})},t.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},t.prototype.generateRequestId=function(){return this.requestIdCounter++},t.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},t.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},t.prototype.stopQueryInStoreNoBroadcast=function(e){var r=this.queries.get(e);r&&r.stop()},t.prototype.clearStore=function(e){return e===void 0&&(e={discardWatches:!0}),this.cancelPendingFetches(te(30)),this.queries.forEach(function(r){r.observableQuery?r.networkStatus=L.loading:r.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},t.prototype.getObservableQueries=function(e){var r=this;e===void 0&&(e="active");var n=new Map,i=new Map,o=new Set;return Array.isArray(e)&&e.forEach(function(a){typeof a=="string"?i.set(a,!1):Ho(a)?i.set(r.transform(a),!1):V(a)&&a.query&&o.add(a)}),this.queries.forEach(function(a,s){var c=a.observableQuery,u=a.document;if(c){if(e==="all"){n.set(s,c);return}var l=c.queryName,p=c.options.fetchPolicy;if(p==="standby"||e==="active"&&!c.hasObservers())return;(e==="active"||l&&i.has(l)||u&&i.has(u))&&(n.set(s,c),l&&i.set(l,!0),u&&i.set(u,!0))}}),o.size&&o.forEach(function(a){var s=Gt("legacyOneTimeQuery"),c=r.getQuery(s).init({document:a.query,variables:a.variables}),u=new Ur({queryManager:r,queryInfo:c,options:m(m({},a),{fetchPolicy:"network-only"})});C(u.queryId===s),c.setObservableQuery(u),n.set(s,u)}),globalThis.__DEV__!==!1&&i.size&&i.forEach(function(a,s){a||globalThis.__DEV__!==!1&&C.warn(typeof s=="string"?31:32,s)}),n},t.prototype.reFetchObservableQueries=function(e){var r=this;e===void 0&&(e=!1);var n=[];return this.getObservableQueries(e?"all":"active").forEach(function(i,o){var a=i.options.fetchPolicy;i.resetLastResults(),(e||a!=="standby"&&a!=="cache-only")&&n.push(i.refetch()),r.getQuery(o).setDiff(null)}),this.broadcastQueries(),Promise.all(n)},t.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},t.prototype.startGraphQLSubscription=function(e){var r=this,n=e.query,i=e.fetchPolicy,o=e.errorPolicy,a=o===void 0?"none":o,s=e.variables,c=e.context,u=c===void 0?{}:c;n=this.transform(n),s=this.getVariables(n,s);var l=function(f){return r.getObservableFromLink(n,u,f).map(function(h){i!=="no-cache"&&(Kr(h,a)&&r.cache.write({query:n,result:h.data,dataId:"ROOT_SUBSCRIPTION",variables:f}),r.broadcastQueries());var y=Rt(h),v=za(h);if(y||v){var b={};if(y&&(b.graphQLErrors=h.errors),v&&(b.protocolErrors=h.extensions[Er]),a==="none"||v)throw new De(b)}return a==="ignore"&&delete h.errors,h})};if(this.getDocumentInfo(n).hasClientExports){var p=this.localState.addExportedVariables(n,s,u).then(l);return new Q(function(f){var h=null;return p.then(function(y){return h=y.subscribe(f)},f.error),function(){return h&&h.unsubscribe()}})}return l(s)},t.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},t.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},t.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},t.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(e){return e.notify()})},t.prototype.getLocalState=function(){return this.localState},t.prototype.getObservableFromLink=function(e,r,n,i){var o=this,a;i===void 0&&(i=(a=r==null?void 0:r.queryDeduplication)!==null&&a!==void 0?a:this.queryDeduplication);var s,c=this.getDocumentInfo(e),u=c.serverQuery,l=c.clientQuery;if(u){var p=this,f=p.inFlightLinkObservables,h=p.link,y={query:u,variables:n,operationName:rr(u)||void 0,context:this.prepareContext(m(m({},r),{forceFetch:!i}))};if(r=y.context,i){var v=ir(u),b=f.get(v)||new Map;f.set(v,b);var d=Ce(n);if(s=b.get(d),!s){var E=new Me([Sr(h,y)]);b.set(d,s=E),E.beforeNext(function(){b.delete(d)&&b.size<1&&f.delete(v)})}}else s=new Me([Sr(h,y)])}else s=new Me([Q.of({data:{}})]),r=this.prepareContext(r);return l&&(s=yr(s,function(g){return o.localState.runResolvers({document:l,remoteResult:g,context:r,variables:n})})),s},t.prototype.getResultsFromLink=function(e,r,n){var i=e.lastRequestId=this.generateRequestId(),o=this.cache.transformForLink(n.query);return yr(this.getObservableFromLink(o,n.context,n.variables),function(a){var s=vr(a),c=s.length>0;if(i>=e.lastRequestId){if(c&&n.errorPolicy==="none")throw e.markError(new De({graphQLErrors:s}));e.markResult(a,o,n,r),e.markReady()}var u={data:a.data,loading:!1,networkStatus:L.ready};return c&&n.errorPolicy!=="ignore"&&(u.errors=s,u.networkStatus=L.error),u},function(a){var s=Wa(a)?a:new De({networkError:a});throw i>=e.lastRequestId&&e.markError(s),s})},t.prototype.fetchConcastWithInfo=function(e,r,n){var i=this;n===void 0&&(n=L.loading);var o=r.query,a=this.getVariables(o,r.variables),s=this.getQuery(e),c=this.defaultOptions.watchQuery,u=r.fetchPolicy,l=u===void 0?c&&c.fetchPolicy||"cache-first":u,p=r.errorPolicy,f=p===void 0?c&&c.errorPolicy||"none":p,h=r.returnPartialData,y=h===void 0?!1:h,v=r.notifyOnNetworkStatusChange,b=v===void 0?!1:v,d=r.context,E=d===void 0?{}:d,g=Object.assign({},r,{query:o,variables:a,fetchPolicy:l,errorPolicy:f,returnPartialData:y,notifyOnNetworkStatusChange:b,context:E}),k=function(U){g.variables=U;var B=i.fetchQueryByPolicy(s,g,n);return g.fetchPolicy!=="standby"&&B.sources.length>0&&s.observableQuery&&s.observableQuery.applyNextFetchPolicy("after-fetch",r),B},D=function(){return i.fetchCancelFns.delete(e)};this.fetchCancelFns.set(e,function(U){D(),setTimeout(function(){return O.cancel(U)})});var O,N;if(this.getDocumentInfo(g.query).hasClientExports)O=new Me(this.localState.addExportedVariables(g.query,g.variables,g.context).then(k).then(function(U){return U.sources})),N=!0;else{var R=k(g.variables);N=R.fromLink,O=new Me(R.sources)}return O.promise.then(D,D),{concast:O,fromLink:N}},t.prototype.refetchQueries=function(e){var r=this,n=e.updateCache,i=e.include,o=e.optimistic,a=o===void 0?!1:o,s=e.removeOptimistic,c=s===void 0?a?Gt("refetchQueries"):void 0:s,u=e.onQueryUpdated,l=new Map;i&&this.getObservableQueries(i).forEach(function(f,h){l.set(h,{oq:f,lastDiff:r.getQuery(h).getDiff()})});var p=new Map;return n&&this.cache.batch({update:n,optimistic:a&&c||!1,removeOptimistic:c,onWatchUpdated:function(f,h,y){var v=f.watcher instanceof Wr&&f.watcher.observableQuery;if(v){if(u){l.delete(v.queryId);var b=u(v,h,y);return b===!0&&(b=v.refetch()),b!==!1&&p.set(v,b),b}u!==null&&l.set(v.queryId,{oq:v,lastDiff:y,diff:h})}}}),l.size&&l.forEach(function(f,h){var y=f.oq,v=f.lastDiff,b=f.diff,d;if(u){if(!b){var E=y.queryInfo;E.reset(),b=E.getDiff()}d=u(y,b,v)}(!u||d===!0)&&(d=y.refetch()),d!==!1&&p.set(y,d),h.indexOf("legacyOneTimeQuery")>=0&&r.stopQueryNoBroadcast(h)}),c&&this.cache.removeOptimistic(c),p},t.prototype.fetchQueryByPolicy=function(e,r,n){var i=this,o=r.query,a=r.variables,s=r.fetchPolicy,c=r.refetchWritePolicy,u=r.errorPolicy,l=r.returnPartialData,p=r.context,f=r.notifyOnNetworkStatusChange,h=e.networkStatus;e.init({document:o,variables:a,networkStatus:n});var y=function(){return e.getDiff()},v=function(k,D){D===void 0&&(D=e.networkStatus||L.loading);var O=k.result;globalThis.__DEV__!==!1&&!l&&!G(O,{})&&Ui(k.missing);var N=function(R){return Q.of(m({data:R,loading:lt(D),networkStatus:D},k.complete?null:{partial:!0}))};return O&&i.getDocumentInfo(o).hasForcedResolvers?i.localState.runResolvers({document:o,remoteResult:{data:O},context:p,variables:a,onlyRunForcedResolvers:!0}).then(function(R){return N(R.data||void 0)}):u==="none"&&D===L.refetch&&Array.isArray(k.missing)?N(void 0):N(O)},b=s==="no-cache"?0:n===L.refetch&&c!=="merge"?1:2,d=function(){return i.getResultsFromLink(e,b,{query:o,variables:a,context:p,fetchPolicy:s,errorPolicy:u})},E=f&&typeof h=="number"&&h!==n&&lt(n);switch(s){default:case"cache-first":{var g=y();return g.complete?{fromLink:!1,sources:[v(g,e.markReady())]}:l||E?{fromLink:!0,sources:[v(g),d()]}:{fromLink:!0,sources:[d()]}}case"cache-and-network":{var g=y();return g.complete||l||E?{fromLink:!0,sources:[v(g),d()]}:{fromLink:!0,sources:[d()]}}case"cache-only":return{fromLink:!1,sources:[v(y(),e.markReady())]};case"network-only":return E?{fromLink:!0,sources:[v(y()),d()]}:{fromLink:!0,sources:[d()]};case"no-cache":return E?{fromLink:!0,sources:[v(e.getDiff()),d()]}:{fromLink:!0,sources:[d()]};case"standby":return{fromLink:!1,sources:[]}}},t.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new Wr(this,e)),this.queries.get(e)},t.prototype.prepareContext=function(e){e===void 0&&(e={});var r=this.localState.prepareContext(e);return m(m({},r),{clientAwareness:this.clientAwareness})},t}(),Wi=!1,Zs=function(){function t(e){var r=this;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw te(13);var n=e.uri,i=e.credentials,o=e.headers,a=e.cache,s=e.documentTransform,c=e.ssrMode,u=c===void 0?!1:c,l=e.ssrForceFetchDelay,p=l===void 0?0:l,f=e.connectToDevTools,h=f===void 0?typeof window=="object"&&!window.__APOLLO_CLIENT__&&globalThis.__DEV__!==!1:f,y=e.queryDeduplication,v=y===void 0?!0:y,b=e.defaultOptions,d=e.assumeImmutableResults,E=d===void 0?a.assumeImmutableResults:d,g=e.resolvers,k=e.typeDefs,D=e.fragmentMatcher,O=e.name,N=e.version,R=e.link;R||(R=n?new ls({uri:n,credentials:i,headers:o}):Ve.empty()),this.link=R,this.cache=a,this.disableNetworkFetches=u||p>0,this.queryDeduplication=v,this.defaultOptions=b||Object.create(null),this.typeDefs=k,p&&setTimeout(function(){return r.disableNetworkFetches=!1},p),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=Ut,this.localState=new Gi({cache:a,client:this,resolvers:g,fragmentMatcher:D}),this.queryManager=new Xs({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,documentTransform:s,queryDeduplication:v,ssrMode:u,clientAwareness:{name:O,version:N},localState:this.localState,assumeImmutableResults:E,onBroadcast:h?function(){r.devToolsHookCb&&r.devToolsHookCb({action:{},state:{queries:r.queryManager.getQueryStore(),mutations:r.queryManager.mutationStore||{}},dataWithOptimisticResults:r.cache.extract(!0)})}:void 0}),h&&this.connectToDevTools()}return t.prototype.connectToDevTools=function(){if(typeof window=="object"){var e=window,r=Symbol.for("apollo.devtools");(e[r]=e[r]||[]).push(this),e.__APOLLO_CLIENT__=this}!Wi&&globalThis.__DEV__!==!1&&(Wi=!0,setTimeout(function(){if(typeof window<"u"&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var n=window.navigator,i=n&&n.userAgent,o=void 0;typeof i=="string"&&(i.indexOf("Chrome/")>-1?o="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":i.indexOf("Firefox/")>-1&&(o="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),o&&globalThis.__DEV__!==!1&&C.log("Download the Apollo DevTools for a better development experience: %s",o)}},1e4))},Object.defineProperty(t.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),t.prototype.stop=function(){this.queryManager.stop()},t.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=gr(this.defaultOptions.watchQuery,e)),this.disableNetworkFetches&&(e.fetchPolicy==="network-only"||e.fetchPolicy==="cache-and-network")&&(e=m(m({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},t.prototype.query=function(e){return this.defaultOptions.query&&(e=gr(this.defaultOptions.query,e)),C(e.fetchPolicy!=="cache-and-network",14),this.disableNetworkFetches&&e.fetchPolicy==="network-only"&&(e=m(m({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},t.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=gr(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},t.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},t.prototype.readQuery=function(e,r){return r===void 0&&(r=!1),this.cache.readQuery(e,r)},t.prototype.readFragment=function(e,r){return r===void 0&&(r=!1),this.cache.readFragment(e,r)},t.prototype.writeQuery=function(e){var r=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),r},t.prototype.writeFragment=function(e){var r=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),r},t.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},t.prototype.__requestRaw=function(e){return Sr(this.link,e)},t.prototype.resetStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(e.resetStoreCallbacks.map(function(r){return r()}))}).then(function(){return e.reFetchObservableQueries()})},t.prototype.clearStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(e.clearStoreCallbacks.map(function(r){return r()}))})},t.prototype.onResetStore=function(e){var r=this;return this.resetStoreCallbacks.push(e),function(){r.resetStoreCallbacks=r.resetStoreCallbacks.filter(function(n){return n!==e})}},t.prototype.onClearStore=function(e){var r=this;return this.clearStoreCallbacks.push(e),function(){r.clearStoreCallbacks=r.clearStoreCallbacks.filter(function(n){return n!==e})}},t.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},t.prototype.refetchQueries=function(e){var r=this.queryManager.refetchQueries(e),n=[],i=[];r.forEach(function(a,s){n.push(s),i.push(a)});var o=Promise.all(i);return o.queries=n,o.results=i,o.catch(function(a){globalThis.__DEV__!==!1&&C.debug(15,a)}),o},t.prototype.getObservableQueries=function(e){return e===void 0&&(e="active"),this.queryManager.getObservableQueries(e)},t.prototype.extract=function(e){return this.cache.extract(e)},t.prototype.restore=function(e){return this.cache.restore(e)},t.prototype.addResolvers=function(e){this.localState.addResolvers(e)},t.prototype.setResolvers=function(e){this.localState.setResolvers(e)},t.prototype.getResolvers=function(){return this.localState.getResolvers()},t.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},t.prototype.setLink=function(e){this.link=this.queryManager.link=e},t}(),Mt=new Map,Jr=new Map,Ki=!0,jt=!1;function Ji(t){return t.replace(/[\s,]+/g," ").trim()}function ec(t){return Ji(t.source.body.substring(t.start,t.end))}function tc(t){var e=new Set,r=[];return t.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var i=n.name.value,o=ec(n.loc),a=Jr.get(i);a&&!a.has(o)?Ki&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||Jr.set(i,a=new Set),a.add(o),e.has(o)||(e.add(o),r.push(n))}else r.push(n)}),m(m({},t),{definitions:r})}function rc(t){var e=new Set(t.definitions);e.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(i){var o=n[i];o&&typeof o=="object"&&e.add(o)})});var r=t.loc;return r&&(delete r.startToken,delete r.endToken),t}function nc(t){var e=Ji(t);if(!Mt.has(e)){var r=$o(t,{experimentalFragmentVariables:jt,allowLegacyFragmentVariables:jt});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");Mt.set(e,rc(tc(r)))}return Mt.get(e)}function S(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];typeof t=="string"&&(t=[t]);var n=t[0];return e.forEach(function(i,o){i&&i.kind==="Document"?n+=i.loc.source.body:n+=i,n+=t[o+1]}),nc(n)}function ic(){Mt.clear(),Jr.clear()}function oc(){Ki=!1}function ac(){jt=!0}function sc(){jt=!1}var ft={gql:S,resetCaches:ic,disableFragmentWarnings:oc,enableExperimentalFragmentVariables:ac,disableExperimentalFragmentVariables:sc};(function(t){t.gql=ft.gql,t.resetCaches=ft.resetCaches,t.disableFragmentWarnings=ft.disableFragmentWarnings,t.enableExperimentalFragmentVariables=ft.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=ft.disableExperimentalFragmentVariables})(S||(S={})),S.default=S;const cc=S`
  fragment Logs on BrokerDto {
    logs {
      offsetLag
      partition
      path
      size
      topic
    }
  }
`,uc=S`
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
`,lc=S`
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
`;S`
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
`,S`
  mutation DeleteConsumerGroups($clusterId: ID!, $consumerGroups: [ConsumerGroupName!]!) {
    consumerGroups {
      deleteConsumerGroups(clusterId: $clusterId, consumerGroups: $consumerGroups)
    }
  }
`,S`
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
`,S`
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
`,S`
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
`,S`
  mutation KafkaConnectorDelete($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      deleteConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,S`
  mutation KafkaConnectorPause($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      pauseConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,S`
  mutation KafkaConnectorRestart($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      restartConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,S`
  mutation KafkaConnectorResume($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      resumeConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,S`
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
`,S`
  mutation KafkaConnectorResetTopics($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      resetTopicsConnector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,S`
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
`,S`
  mutation StopAutoRestart($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    kafkaConnect {
      stopAutoRestart(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName)
    }
  }
`,S`
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
`,S`
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
`,S`
  mutation DeleteGlueSchema($schemaRegistryId: SchemaRegistryId!, $schemaName: String!) {
    glueSchemaRegistry {
      deleteSchema(schemaRegistryId: $schemaRegistryId, schemaName: $schemaName)
    }
  }
`,S`
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
`,S`
  mutation PermanentDeleteVersions(
    $schemaRegistryId: SchemaRegistryId!
    $versions: [SubjectAndVersionInput!]!
  ) {
    confluentLikeSchemaRegistry {
      permanentDeleteVersions(schemaRegistryId: $schemaRegistryId, versions: $versions)
    }
  }
`,S`
  mutation PermanentDeleteSubjects(
    $schemaRegistryId: SchemaRegistryId!
    $subjects: [SubjectName!]!
  ) {
    confluentLikeSchemaRegistry {
      permanentDeleteSubjects(schemaRegistryId: $schemaRegistryId, subjects: $subjects)
    }
  }
`,S`
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
`,S`
  mutation SoftDeleteVersions(
    $schemaRegistryId: SchemaRegistryId!
    $versions: [SubjectAndVersionInput!]!
  ) {
    confluentLikeSchemaRegistry {
      softDeleteVersions(schemaRegistryId: $schemaRegistryId, versions: $versions)
    }
  }
`,S`
  mutation SoftDeleteSubjects($schemaRegistryId: SchemaRegistryId!, $subjects: [SubjectName!]!) {
    confluentLikeSchemaRegistry {
      softDeleteSubjects(schemaRegistryId: $schemaRegistryId, subjects: $subjects)
    }
  }
`,S`
  mutation UpdateGlobalCompatibility(
    $schemaRegistryId: SchemaRegistryId!
    $compatibility: Compatibility!
  ) {
    confluentLikeSchemaRegistry {
      updateCompatibility(schemaRegistryId: $schemaRegistryId, compatibility: $compatibility)
    }
  }
`,S`
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
`,S`
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
`,S`
  mutation TagCreate($name: String!, $color: String!) {
    tag {
      create(name: $name, color: $color) {
        name
        id
        color
      }
    }
  }
`,S`
  mutation TagDelete($id: ID!) {
    tag {
      delete(value: $id)
    }
  }
`,S`
  mutation TagUpdate($id: ID!, $name: String!, $color: String!) {
    tag {
      update(name: $name, color: $color, id: $id) {
        name
        id
        color
      }
    }
  }
`,S`
  mutation TopicDelete($clusterId: ID!, $topicNames: [String!]!) {
    topic {
      delete(clusterId: $clusterId, topicNames: $topicNames)
    }
  }
`,S`
  mutation EmptyPartitions($clusterId: ID!, $topicPartitions: [TopicPartitionInput!]!) {
    topic {
      emptyPartitions(clusterId: $clusterId, topicPartitions: $topicPartitions)
    }
  }
`,S`
  mutation TopicsEmpty($clusterId: ID!, $topicNames: [String!]!) {
    topics {
      empty(clusterId: $clusterId, topicNames: $topicNames)
    }
  }
`,S`
  mutation TopicTag($clusterId: ID!, $topicName: String!, $tagIds: [ID!]!) {
    topic {
      tag(clusterId: $clusterId, topicName: $topicName, tagIds: $tagIds) {
        id
        name
        color
      }
    }
  }
`,S`
  mutation TopicSqlStatus($clusterId: ID!, $topicId: String!) {
    topic {
      setSqlStatus(clusterId: $clusterId, topicName: $topicId, indexationEnable: $sqlStatus)
    }
  }
`,S`
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
`,S`
  mutation TopicDeleteTemplate($deleteId: ID!) {
    topic {
      views {
        delete(id: $deleteId)
      }
    }
  }
`,S`
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
`,S`
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
`,S`
  query ClusterBrokersIds($clusterId: ID!) {
    broker(clusterId: $clusterId) {
      clusterId
      brokerEntities {
        _id
      }
    }
  }
`,S`
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
`,S`
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
  ${lc}
  ${cc}
  ${uc}
`,S`
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
`,S`
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
`,S`
  query ClusterIsReachable($clusterId: ID!) {
    isClusterReachableById(clusterId: $clusterId)
  }
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
  query ConsumerGroups($clusterId: ID!) {
    consumerGroups(clusterId: $clusterId) {
      allNames
    }
  }
`,S`
  query TopicConfigsDocumentation {
    documentation {
      topicConfigsDoc {
        key
        value
      }
    }
  }
`,S`
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
`,S`
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
`,S`
  query KafkaConnectorNames($kafkaConnectId: KafkaConnectId!) {
    connectors(kafkaConnectId: $kafkaConnectId) {
      name
    }
  }
`,S`
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
`,S`
  query KafkaConnectorConfig($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    connector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName) {
      name
      config {
        key
        value
      }
    }
  }
`,S`
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
`,S`
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
`,S`
  query ConnectorRestart($kafkaConnectId: KafkaConnectId!, $connectorName: String!) {
    connector(kafkaConnectId: $kafkaConnectId, connectorName: $connectorName) {
      autoRestart
      name
    }
  }
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
  query GlueSchemaRegistryStatistics($schemaRegistryId: SchemaRegistryId!) {
    glueSchemaRegistry {
      schemaRegistry(schemaRegistryId: $schemaRegistryId) {
        metadata {
          schemaCount
        }
      }
    }
  }
`,S`
  query SchemaRegistryCompatibility($schemaRegistryId: SchemaRegistryId!) {
    confluentLikeSchemaRegistry {
      schemaRegistry(schemaRegistryId: $schemaRegistryId) {
        metadata {
          compatibility
        }
      }
    }
  }
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
  query SubjectsNames($schemaRegistryId: SchemaRegistryId!) {
    confluentLikeSchemaRegistry {
      subjectsName(schemaRegistryId: $schemaRegistryId)
    }
  }
`,S`
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
`,S`
  query SchemasNames($schemaRegistryId: SchemaRegistryId!) {
    glueSchemaRegistry {
      schemaNames(schemaRegistryId: $schemaRegistryId)
    }
  }
`,S`
  query SchemaNamesWithFormat($schemaRegistryId: SchemaRegistryId!) {
    glueSchemaRegistry {
      schemaNamesWithFormat(schemaRegistryId: $schemaRegistryId) {
        format
        schemaName
      }
    }
  }
`,S`
  query Tags {
    tags {
      color
      name
      id
    }
  }
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
  query ClusterTopicConfigDefaultValues($clusterId: ID!) {
    topicConfigDefaultValues(clusterId: $clusterId) {
      key
      doc
      defaultValue
    }
  }
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`,S`
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
`;const fc=S`
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
`;function hc(t){return V(t)&&"code"in t&&"reason"in t}function pc(t){var e;return V(t)&&((e=t.target)===null||e===void 0?void 0:e.readyState)===WebSocket.CLOSED}var dc=function(t){ae(e,t);function e(r){var n=t.call(this)||this;return n.client=r,n}return e.prototype.request=function(r){var n=this;return new Q(function(i){return n.client.subscribe(m(m({},r),{query:ir(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(o){if(o instanceof Error)return i.error(o);var a=hc(o);return a||pc(o)?i.error(new Error("Socket closed".concat(a?" with event ".concat(o.code):"").concat(a?" ".concat(o.reason):""))):i.error(new De({graphQLErrors:Array.isArray(o)?o:[o]}))}})})},e}(Ve);function re(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function Re(t){return re(t)==="object"}function mc(t){return Array.isArray(t)&&t.length>0&&t.every(e=>"message"in e)}function Yi(t,e){return t.length<124?t:e}const yc="graphql-transport-ws";var ne;(function(t){t[t.InternalServerError=4500]="InternalServerError",t[t.InternalClientError=4005]="InternalClientError",t[t.BadRequest=4400]="BadRequest",t[t.BadResponse=4004]="BadResponse",t[t.Unauthorized=4401]="Unauthorized",t[t.Forbidden=4403]="Forbidden",t[t.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",t[t.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",t[t.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",t[t.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",t[t.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(ne||(ne={}));var W;(function(t){t.ConnectionInit="connection_init",t.ConnectionAck="connection_ack",t.Ping="ping",t.Pong="pong",t.Subscribe="subscribe",t.Next="next",t.Error="error",t.Complete="complete"})(W||(W={}));function Hi(t){if(!Re(t))throw new Error(`Message is expected to be an object, but got ${re(t)}`);if(!t.type)throw new Error("Message is missing the 'type' property");if(typeof t.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${re(t.type)}`);switch(t.type){case W.ConnectionInit:case W.ConnectionAck:case W.Ping:case W.Pong:{if(t.payload!=null&&!Re(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${t.payload}"`);break}case W.Subscribe:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${re(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!Re(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${re(t.payload)}`);if(typeof t.payload.query!="string")throw new Error(`"${t.type}" message payload expects the 'query' property to be a string, but got ${re(t.payload.query)}`);if(t.payload.variables!=null&&!Re(t.payload.variables))throw new Error(`"${t.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${re(t.payload.variables)}`);if(t.payload.operationName!=null&&re(t.payload.operationName)!=="string")throw new Error(`"${t.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${re(t.payload.operationName)}`);if(t.payload.extensions!=null&&!Re(t.payload.extensions))throw new Error(`"${t.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${re(t.payload.extensions)}`);break}case W.Next:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${re(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!Re(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${re(t.payload)}`);break}case W.Error:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${re(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!mc(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(t.payload)}`);break}case W.Complete:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${re(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${t.type}"`)}return t}function vc(t,e){return Hi(typeof t=="string"?JSON.parse(t,e):t)}function ht(t,e){return Hi(t),JSON.stringify(t,e)}var ze=function(t){return this instanceof ze?(this.v=t,this):new ze(t)},gc=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),i,o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(f){n[f]&&(i[f]=function(h){return new Promise(function(y,v){o.push([f,h,y,v])>1||s(f,h)})})}function s(f,h){try{c(n[f](h))}catch(y){p(o[0][3],y)}}function c(f){f.value instanceof ze?Promise.resolve(f.value.v).then(u,l):p(o[0][2],f)}function u(f){s("next",f)}function l(f){s("throw",f)}function p(f,h){f(h),o.shift(),o.length&&s(o[0][0],o[0][1])}};function bc(t){const{url:e,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:o=0,keepAlive:a=0,disablePong:s,connectionAckWaitTimeout:c=0,retryAttempts:u=5,retryWait:l=async function(M){let _=1e3;for(let F=0;F<M;F++)_*=2;await new Promise(F=>setTimeout(F,_+Math.floor(Math.random()*2700+300)))},shouldRetry:p=qt,isFatalConnectionProblem:f,on:h,webSocketImpl:y,generateID:v=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,M=>{const _=Math.random()*16|0;return(M=="x"?_:_&3|8).toString(16)})},jsonMessageReplacer:b,jsonMessageReviver:d}=t;let E;if(y){if(!Sc(y))throw new Error("Invalid WebSocket implementation provided");E=y}else typeof WebSocket<"u"?E=WebSocket:typeof global<"u"?E=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(E=window.WebSocket||window.MozWebSocket);if(!E)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const g=E,k=(()=>{const x=(()=>{const _={};return{on(F,j){return _[F]=j,()=>{delete _[F]}},emit(F){var j;"id"in F&&((j=_[F.id])===null||j===void 0||j.call(_,F))}}})(),M={connecting:h!=null&&h.connecting?[h.connecting]:[],opened:h!=null&&h.opened?[h.opened]:[],connected:h!=null&&h.connected?[h.connected]:[],ping:h!=null&&h.ping?[h.ping]:[],pong:h!=null&&h.pong?[h.pong]:[],message:h!=null&&h.message?[x.emit,h.message]:[x.emit],closed:h!=null&&h.closed?[h.closed]:[],error:h!=null&&h.error?[h.error]:[]};return{onMessage:x.on,on(_,F){const j=M[_];return j.push(F),()=>{j.splice(j.indexOf(F),1)}},emit(_,...F){for(const j of[...M[_]])j(...F)}}})();function D(x){const M=[k.on("error",_=>{M.forEach(F=>F()),x(_)}),k.on("closed",_=>{M.forEach(F=>F()),x(_)})]}let O,N=0,R,U=!1,B=0,J=!1;async function ie(){clearTimeout(R);const[x,M]=await(O??(O=new Promise((j,q)=>(async()=>{if(U){if(await l(B),!N)return O=void 0,q({code:1e3,reason:"All Subscriptions Gone"});B++}k.emit("connecting");const A=new g(typeof e=="function"?await e():e,yc);let ue,oe;function we(){isFinite(a)&&a>0&&(clearTimeout(oe),oe=setTimeout(()=>{A.readyState===g.OPEN&&(A.send(ht({type:W.Ping})),k.emit("ping",!1,void 0))},a))}D(Z=>{O=void 0,clearTimeout(ue),clearTimeout(oe),q(Z),qt(Z)&&Z.code===4499&&(A.close(4499,"Terminated"),A.onerror=null,A.onclose=null)}),A.onerror=Z=>k.emit("error",Z),A.onclose=Z=>k.emit("closed",Z),A.onopen=async()=>{try{k.emit("opened",A);const Z=typeof r=="function"?await r():r;if(A.readyState!==g.OPEN)return;A.send(ht(Z?{type:W.ConnectionInit,payload:Z}:{type:W.ConnectionInit},b)),isFinite(c)&&c>0&&(ue=setTimeout(()=>{A.close(ne.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},c)),we()}catch(Z){k.emit("error",Z),A.close(ne.InternalClientError,Yi(Z instanceof Error?Z.message:new Error(Z).message,"Internal client error"))}};let pe=!1;A.onmessage=({data:Z})=>{try{const ee=vc(Z,d);if(k.emit("message",ee),ee.type==="ping"||ee.type==="pong"){k.emit(ee.type,!0,ee.payload),ee.type==="pong"?we():s||(A.send(ht(ee.payload?{type:W.Pong,payload:ee.payload}:{type:W.Pong})),k.emit("pong",!1,ee.payload));return}if(pe)return;if(ee.type!==W.ConnectionAck)throw new Error(`First message cannot be of type ${ee.type}`);clearTimeout(ue),pe=!0,k.emit("connected",A,ee.payload),U=!1,B=0,j([A,new Promise((Tc,Oc)=>D(Oc))])}catch(ee){A.onmessage=null,k.emit("error",ee),A.close(ne.BadResponse,Yi(ee instanceof Error?ee.message:new Error(ee).message,"Bad response"))}}})())));x.readyState===g.CLOSING&&await M;let _=()=>{};const F=new Promise(j=>_=j);return[x,_,Promise.race([F.then(()=>{if(!N){const j=()=>x.close(1e3,"Normal Closure");isFinite(o)&&o>0?R=setTimeout(()=>{x.readyState===g.OPEN&&j()},o):j()}}),M])]}function We(x){if(qt(x)&&(Ic(x.code)||[ne.InternalServerError,ne.InternalClientError,ne.BadRequest,ne.BadResponse,ne.Unauthorized,ne.SubprotocolNotAcceptable,ne.SubscriberAlreadyExists,ne.TooManyInitialisationRequests].includes(x.code)))throw x;if(J)return!1;if(qt(x)&&x.code===1e3)return N>0;if(!u||B>=u||!p(x)||f!=null&&f(x))throw x;return U=!0}return n||(async()=>{for(N++;;)try{const[,,x]=await ie();await x}catch(x){try{if(!We(x))return}catch(M){return i==null?void 0:i(M)}}})(),{on:k.on,subscribe(x,M){const _=v(x);let F=!1,j=!1,q=()=>{N--,F=!0};return(async()=>{for(N++;;)try{const[A,ue,oe]=await ie();if(F)return ue();const we=k.onMessage(_,pe=>{switch(pe.type){case W.Next:{M.next(pe.payload);return}case W.Error:{j=!0,F=!0,M.error(pe.payload),q();return}case W.Complete:{F=!0,q();return}}});A.send(ht({id:_,type:W.Subscribe,payload:x},b)),q=()=>{!F&&A.readyState===g.OPEN&&A.send(ht({id:_,type:W.Complete},b)),N--,F=!0,ue()},await oe.finally(we);return}catch(A){if(!We(A))return}})().then(()=>{j||M.complete()}).catch(A=>{M.error(A)}),()=>{F||q()}},iterate(x){const M=[],_={done:!1,error:null,resolve:()=>{}},F=this.subscribe(x,{next(q){M.push(q),_.resolve()},error(q){_.done=!0,_.error=q,_.resolve()},complete(){_.done=!0,_.resolve()}}),j=function(){return gc(this,arguments,function*(){for(;;){for(M.length||(yield ze(new Promise(ue=>_.resolve=ue)));M.length;)yield yield ze(M.shift());if(_.error)throw _.error;if(_.done)return yield ze(void 0)}})}();return j.throw=async q=>(_.done||(_.done=!0,_.error=q,_.resolve()),{done:!0,value:void 0}),j.return=async()=>(F(),{done:!0,value:void 0}),j},async dispose(){if(J=!0,O){const[x]=await O;x.close(1e3,"Normal Closure")}},terminate(){O&&k.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}function qt(t){return Re(t)&&"code"in t&&"reason"in t}function Ic(t){return[1e3,1001,1006,1005,1012,1013,1013].includes(t)?!1:t>=1e3&&t<=1999}function Sc(t){return typeof t=="function"&&"constructor"in t&&"CLOSED"in t&&"CLOSING"in t&&"CONNECTING"in t&&"OPEN"in t}function Ec(){let t;return{getClient:async(r,n,i)=>{if(t)return t;const o=new dc(bc({url:n,connectionParams:()=>({Authorization:`Bearer ${r}`,"X-Organization-Id":i})})),a=new Zs({link:o,cache:new zs});return t=a,a}}}var Yr=(t=>(t.PRODUCE="PRODUCE",t.STOP_PRODUCE="STOP_PRODUCE",t))(Yr||{}),pt=(t=>(t.SEND_RECORDS="SEND_RECORDS",t.PRODUCE_STOPPED="PRODUCE_STOPPED",t.ERRORS="ERRORS",t))(pt||{});const dt=self,Xi=100;let Vt,mt;function Zi(){mt&&mt.unsubscribe(),setTimeout(()=>{Vt&&clearInterval(Vt),Vt=void 0},Xi+1)}dt.onmessage=async function({data:{message:t,config:e}}){const{getClient:r}=Ec();switch(t){case Yr.PRODUCE:{mt&&mt.unsubscribe(),e&&(mt=kc(e.variables,await r(e.token,e.wsEndpoint,e.organizationId)));break}case Yr.STOP_PRODUCE:{Zi();break}}};function kc(t,e){const r=e.subscribe({query:fc,variables:t});let n=[];return Vt=setInterval(()=>{dt.postMessage({message:pt.SEND_RECORDS,batchedRecords:n,topicName:t.topic}),n=[]},Xi),r.subscribe(({data:a,errors:s})=>{a!=null&&a.produce&&n.push(...a.produce),s&&dt.postMessage({message:pt.ERRORS,errors:s})},a=>{dt.postMessage({message:pt.ERRORS,errors:[a]})},()=>{Zi(),dt.postMessage({message:pt.PRODUCE_STOPPED})})}})();
