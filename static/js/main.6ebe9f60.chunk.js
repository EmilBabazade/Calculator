(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{31:function(c,o,r){"use strict";r.r(o);var t=r(0),e=r.n(t),n=r(17),a=r.n(n),l=r(8),i=(r(15),r(10)),s=r(1),u=Object(l.a)({pad:{backgroundColor:function(c){return c.bg},color:function(c){return"".concat(c.color)},gridColumn:function(c){return"".concat(c.column)},gridRow:function(c){return"".concat(c.row)},fontSize:20,display:"flex",justifyContent:"center",alignItems:"center",margin:1,cursor:"pointer",userSelect:"none","&:hover":{margin:0,color:"#000000",border:"1px solid grey"}}}),b=function(c){var o=c.column,r=c.row,t=c.character,e=c.bg,n=c.color,a=c.onClick,l=u({column:o,row:r,bg:e,color:n});return Object(s.jsx)("div",{onClick:a,className:l.pad,children:t})},j="white",d=Object(l.a)({calculator:{padding:5,margin:0,width:400,height:500,backgroundColor:"#000000",border:"solid #47476b 2px",display:"grid",fontFamily:"Share Tech Mono, sans-serif",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr 1fr 1fr 1fr"},"@media screen and (max-width: 430px)":{calculator:{width:"90%",height:"70%"}},display:{gridColumn:"1/7",gridRow:"1",margin:0,color:"".concat(j),"& *":{margin:0,padding:0,textAlign:"end"},"& h3":{color:"#b07200"},fontFamily:"Geostar, sans-serif",width:"100%",overflowY:"scroll"},input:{fontSize:35},output:{color:"#b07200",maxWidth:"100%",wordWrap:"break-word"}}),g=function(c,o,r){switch(r){case"+":return c+o;case"-":return c-o;case"/":return c/o;case"x":return c*o;default:return c}},h=function(){var c=Object(t.useState)(""),o=Object(i.a)(c,2),r=o[0],e=o[1],n=Object(t.useState)(""),a=Object(i.a)(n,2),l=a[0],u=a[1],h=Object(t.useState)(""),m=Object(i.a)(h,2),x=m[0],f=m[1],O=Object(t.useState)(""),w=Object(i.a)(O,2),p=w[0],C=w[1],k=Object(t.useState)(null),v=Object(i.a)(k,2),y=v[0],S=v[1],N=function(c){var o=c.target.textContent,r=l[l.length-1];"."===o&&isNaN(parseFloat(r))||"."===o&&p.includes(".")||(e(o),u("".concat(l).concat(o)),C("".concat(p).concat(o)))},F=function(){return function(c){var o=c.target.textContent;if(0!==l.length){e(o);var r=l[l.length-1];isNaN(parseFloat(r))||"."===r?(p.length>0&&null!==y&&null!=o&&(S(g(y,parseFloat(p),x)),C("")),f(o),u("".concat(l.slice(0,-1)).concat(o))):(p.length>0&&null!==y&&null!=o&&(S(g(y,parseFloat(p),x)),C("")),f(o),u("".concat(l).concat(o))),null===y&&(S(parseFloat(p)),C(""))}}},z=d(),I="#4d4d4d",R="#666666";return Object(s.jsxs)("div",{className:z.calculator,children:[Object(s.jsxs)("div",{className:z.display,children:[Object(s.jsx)("div",{className:z.output,children:l}),Object(s.jsx)("div",{className:z.input,children:r})]}),Object(s.jsx)(b,{bg:"#ac3939",onClick:function(){e(""),u(""),C(""),f(""),S(null)},character:"AC",column:"1/3",row:"2",color:j}),Object(s.jsx)(b,{bg:R,onClick:F(),character:"/",column:"3",row:"2",color:j}),Object(s.jsx)(b,{bg:R,onClick:F(),character:"x",column:"4",row:"2",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"7",column:"1",row:"3",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"8",column:"2",row:"3",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"9",column:"3",row:"3",color:j}),Object(s.jsx)(b,{bg:R,onClick:F(),character:"-",column:"4",row:"3",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"4",column:"1",row:"4",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"5",column:"2",row:"4",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"6",column:"3",row:"4",color:j}),Object(s.jsx)(b,{bg:R,onClick:F(),character:"+",column:"4",row:"4",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"1",column:"1",row:"5",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"2",column:"2",row:"5",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"3",column:"3",row:"5",color:j}),Object(s.jsx)(b,{bg:"#004466",onClick:function(){if(0!==p.length&&0!==x.length&&null!==y){var c=g(y,parseFloat(p),x);S(c),C(""),u("".concat(l,"=").concat(c))}},character:"=",column:"4",row:"5/7",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:"0",column:"1/3",row:"6",color:j}),Object(s.jsx)(b,{bg:I,onClick:N,character:".",column:"3",row:"6",color:j})]})},m=Object(l.a)({"@global":{html:{boxSizing:"border-box"},"html, body, #root":{height:"100%",width:"100%",margin:0,padding:0},"*, *:before, *:after":{boxSizing:"inherit"}},container:{backgroundColor:"#c2c2d6",width:"100%",height:"100%",padding:0,margin:0,display:"flex",justifyContent:"center",alignItems:"center"}}),x=function(){var c=m();return Object(s.jsx)("div",{className:c.container,children:Object(s.jsx)(h,{})})};a.a.render(Object(s.jsx)(e.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6ebe9f60.chunk.js.map