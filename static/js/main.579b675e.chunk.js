(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),o=s(5),c=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return s===n.LENGTH?i.sort((function(t,e){return t.length-e.length})):s===n.ALPABET&&i.sort((function(t,e){return t.localeCompare(e)})),r&&i.reverse(),i}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var T=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:0},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":this.state.sortType!==n.ALPABET}),onClick:function(){t.setState({sortType:n.ALPABET})},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":this.state.sortType!==n.LENGTH}),onClick:function(){t.setState({sortType:n.LENGTH})},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!this.state.isReversed}),onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),(this.state.sortType!==n.NONE||this.state.isReversed)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState({sortType:n.NONE,isReversed:!1})},children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:v(y,{sortType:this.state.sortType,isReversed:this.state.isReversed}).map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.a.Component);i.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.579b675e.chunk.js.map