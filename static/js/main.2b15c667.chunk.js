(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{36:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(12),r=c.n(n),l=(c(36),c(37),c(38),c(59),c(60),Object(s.createContext)()),j=c(0);var i=c(7),o=c(74),b=c(73),d=c(13),O=c.n(d),x=c(15),u=c(4),h=function(){var e="https://fakestoreapi.com/products/",t=Object(s.useState)([]),c=Object(u.a)(t,2),a=c[0],n=c[1];Object(s.useEffect)((function(){Object(x.a)(O.a.mark((function t(){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(e){return e.json()}));case 2:c=t.sent,n(c),console.log(c);case 5:case"end":return t.stop()}}),t)})))()}),[e]);var r,o=Object(s.useContext)(l),b=o.state,d=b.cart,h=b.search,p=o.dispatch;return console.log("data",h),r=a?a.map((function(e){e.category,e.description;var t=e.id,c=e.image,s=e.price,a=(e.rating,e.title);return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(i.b,{to:"".concat(t),style:{textDecoration:"none",color:"black",textAlign:"left"},className:"col-2",children:Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("div",{className:"big-img1",children:Object(j.jsx)("img",{src:c,alt:""})}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"fs-5 ",children:a}),Object(j.jsxs)("span",{children:["$",s]})]}),d.some((function(e){return e.id===t}))?Object(j.jsx)("button",{className:"btn btn1",onClick:function(t){t.preventDefault(),p({type:"REMOVE_FROM_CART",payload:e})},children:"Remove From Cart"}):Object(j.jsx)("button",{className:"btn btn1",onClick:function(t){t.preventDefault(),p({type:"ADD_TO_CART",payload:e})},children:"Add to cart"})]})]})},t)})})):"product not found",Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),r]})};function m(){var e=Object(s.useContext)(l),t=e.state,c=t.cart,a=(t.search,e.dispatch,e.setSearch,e.setFlag),n=localStorage.getItem("name");return console.log(n),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o.a,{bg:"dark",variant:"dark",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(o.a.Brand,{children:Object(j.jsx)(i.b,{to:"/products",style:{textDecoration:"none",color:"white",textAlign:"left"},children:"Shopping cart"})}),Object(j.jsxs)(o.a.Brand,{children:[Object(j.jsx)(i.b,{to:"/products",style:{textDecoration:"none",color:"white",textAlign:"left"},children:Object(j.jsx)("span",{className:"cart",children:"Products"})}),Object(j.jsxs)(i.b,{to:"/cart",style:{textDecoration:"none",color:"white",textAlign:"left"},children:["Cart ",Object(j.jsx)("span",{className:"cart",style:{color:"red"},children:c.length})]}),"Hello ",Object(j.jsx)("span",{className:"admin cart",children:n.charAt(0).toUpperCase()+n.slice(1)}),Object(j.jsx)("button",{className:"btn",onClick:function(){return a(0)},children:Object(j.jsx)(i.b,{to:"/",className:"fs-6",style:{textDecoration:"none",color:"white",textAlign:"left"},children:"Logout"})})]})]})})})}var p=c(18),f=c(2),v=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(f.a)(Object(f.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),[Object(f.a)(Object(f.a)({},t.payload),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(f.a)(Object(f.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_CART_QTY":return Object(f.a)(Object(f.a)({},e),{},{cart:e.cart.filter((function(e){return e.id===t.payload.id?e.qty=t.payload.qty:e.qty}))});case"SETTOTAL":return Object(f.a)(Object(f.a)({},e),{},{total:t.payload});case"SETNAME":return Object(f.a)(Object(f.a)({},e),{},{name:t.payload});case"SETFLAG":return Object(f.a)(Object(f.a)({},e),{},{flag:t.payload});default:return e}},g=function(e){var t=Object(s.useReducer)(v,{cart:[],qty:1}),c=Object(u.a)(t,2),a=c[0],n=c[1];return Object(j.jsx)(l.Provider,{value:{state:a,dispatch:n,setTotal:function(e){return n({type:"SETTOTAL",payload:e})},setName:function(e){return n({type:"SETNAME",payload:e})},setFlag:function(e){return n({type:"SETFLAG",payload:e})}},children:e.children})},N=c(3),y=function(){var e=Object(s.useContext)(l),t=e.state,c=(t.cart,t.search,e.dispatch,e.setFlag),a=Object(s.useState)(""),n=Object(u.a)(a,2),r=n[0],o=n[1],b=Object(s.useState)(""),d=Object(u.a)(b,2),O=d[0],x=d[1],h=localStorage.getItem("username"),m=localStorage.getItem("password");return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center check",children:"Login Form"}),Object(j.jsxs)("form",{className:"checkout login",children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"UserName "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform",onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Password "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"password",className:"inputform",onChange:function(e){return x(e.target.value)}})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"button2",onClick:function(e){e.preventDefault(),""===r||""===O?alert("Plz fill in all Login Details"):h===r&&m===O?c(1):(localStorage.setItem("flag","false"),alert("Plz Enter valid Username and Password"))},children:"Login"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"formlabel register",children:["Don't have an account? ",Object(j.jsx)("br",{}),Object(j.jsx)(i.b,{to:"/register",children:"Register"})]})})]})]})},C=function(){var e=Object(s.useContext)(l),t=e.state;e.dispatch;return console.log(t.flag),1!==t.flag?Object(j.jsx)("div",{children:Object(j.jsx)(y,{})}):Object(j.jsx)(h,{})},k=function(){var e=Object(s.useContext)(l),t=e.state.cart,c=e.dispatch,a=e.setTotal,n=Object(s.useState)(),r=Object(u.a)(n,2),o=r[0],b=r[1];return Object(s.useEffect)((function(){b(t.reduce((function(e,t){return e+t.price*t.qty}),0))}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(j.Fragment,{children:t.map((function(e){e.category,e.description;var s=e.id,a=e.image,n=e.price,r=(e.rating,e.title);return Object(j.jsx)(i.b,{to:"".concat(s),style:{textDecoration:"none",color:"black",textAlign:"left"},className:"col-4 mb-2 ",children:Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("div",{className:"big-img1",children:Object(j.jsx)("img",{src:a,alt:""})}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"fs-5",children:r}),Object(j.jsxs)("span",{children:["$",n]}),Object(j.jsxs)("span",{children:["Qty :",t.map((function(e){return Object(j.jsx)(j.Fragment,{children:e.id===s?" "+e.qty:""})}))]}),Object(j.jsxs)("span",{children:["price :",t.map((function(e){return Object(j.jsx)(j.Fragment,{children:e.id===s?" "+e.price*e.qty:""})}))]}),Object(j.jsxs)("select",{onClick:function(e){e.preventDefault(),c({type:"CHANGE_CART_QTY",payload:{id:s,qty:e.target.value}})},children:[Object(j.jsx)("option",{selected:!0,children:1}),Object(p.a)(Array(5).keys()).map((function(e){return Object(j.jsx)("option",{children:e+1},e+1)}))]})]}),Object(j.jsx)("button",{className:"btn btn1",onClick:function(t){t.preventDefault(),c({type:"REMOVE_FROM_CART",payload:e})},children:"Remove From Cart"})]})]})},s)}))}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"total fw-bold",children:[Object(j.jsx)("div",{className:"",children:"Total"}),Object(j.jsxs)("div",{className:"",children:["$ ",o," ",Object(j.jsx)("br",{})]})]}),Object(j.jsxs)("div",{className:"cartbutton fw-bold",children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn conti_btn",children:Object(j.jsx)(i.b,{to:"/products",style:{textDecoration:"none",color:"white"},children:"Continue Shopping"})}),Object(j.jsx)("button",{className:"btn checkout_btn",onClick:function(e){e.preventDefault(),a(o)},children:Object(j.jsx)(i.b,{to:"/checkoutform",style:{textDecoration:"none",color:"white"},children:"Checkout"})})]})]})]})},A=c(31),S=c.n(A);var D=function(){var e=Object(s.useContext)(l),t=e.state.cart,c=e.dispatch,a=Object(N.g)().id,n=Object(s.useState)([]),r=Object(u.a)(n,2),i=r[0],o=r[1],b="https://fakestoreapi.com/products/".concat(a);Object(s.useContext)(l),Object(s.useEffect)((function(){Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b).then((function(e){return e.json()}));case 2:t=e.sent,o(t),console.log(t);case 5:case"end":return e.stop()}}),e)})))()}),[b]),console.log("cart ",t);var d=i.category,h=i.description,p=i.image,f=i.price,v=(i.rating,i.title);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("div",{className:"big-img",children:Object(j.jsx)("img",{src:p,alt:""})}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:v}),Object(j.jsxs)("span",{children:["$",f]})]}),Object(j.jsx)(S.a,{count:5,onChange:function(e){console.log(e)},size:24,activeColor:"#ffd700"}),Object(j.jsx)("p",{children:h}),Object(j.jsx)("p",{children:d}),t.some((function(e){return e.id===a}))?Object(j.jsx)("button",{className:"btn btn1",onClick:function(e){e.preventDefault(),c({type:"REMOVE_FROM_CART",payload:i})},children:"Remove From Cart"}):Object(j.jsx)("button",{className:"btn btn1",onClick:function(e){e.preventDefault(),c({type:"ADD_TO_CART",payload:i})},children:"Add to cart"})]})]})})]})},T=function(){var e=Object(s.useContext)(l),t=e.state;e.dispatch;return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)("h1",{className:"text-center check",children:"CheckOut Form"}),Object(j.jsxs)("form",{className:"checkout",children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Email "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform"})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Name "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform"})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Address "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform"})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"formlabel",children:["Payment ( ",t.total," )"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{children:[Object(j.jsx)("option",{children:"Cash on Delivery"}),Object(j.jsx)("option",{children:"Online payment"})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"button2",onClick:function(){return alert("Order Successfully Placed")},children:"Place Order"})})]})]})},F=function(){var e=Object(s.useContext)(l),t=(e.state,e.dispatch,e.setName),c=Object(s.useState)(""),a=Object(u.a)(c,2),n=a[0],r=a[1],o=Object(s.useState)(""),b=Object(u.a)(o,2),d=b[0],O=b[1],x=Object(s.useState)(""),h=Object(u.a)(x,2),m=h[0],p=(h[1],Object(s.useState)("")),f=Object(u.a)(p,2),v=f[0],g=(f[1],Object(s.useState)("")),N=Object(u.a)(g,2),y=N[0];N[1];localStorage.setItem("username",n),localStorage.setItem("password",d),localStorage.setItem("name",n);var C=localStorage.getItem("username");return console.log(C),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center check",children:"Register Form"}),Object(j.jsxs)("form",{className:"checkout reg",children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"UserName "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform",onChange:function(e){r(e.target.value),t(e.target.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Address "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform"})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Mobile No. "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform"})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Email"})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"inputform"})}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:"formlabel",children:"Password "})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"password",className:"inputform",onChange:function(e){return O(e.target.value)}})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"button2",onClick:function(e){e.preventDefault(),""===n&&""===d&&""===m&&""===v&&""===y&&alert("Plz fill in all Registration Details")},children:Object(j.jsx)("span",{children:"Register"})})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"formlabel register",children:["Do you have an account? ",Object(j.jsx)("br",{}),Object(j.jsx)(i.b,{to:"/",children:"Login"})]})})]})]})},w=function(){var e=localStorage.getItem("flag");return console.log(e),"true"===e?"":"incorrect data",Object(j.jsx)(i.a,{children:Object(j.jsxs)(g,{children:[Object(j.jsx)(j.Fragment,{}),Object(j.jsxs)(N.c,{children:[Object(j.jsx)(N.a,{exact:!0,path:"/",element:Object(j.jsx)(C,{})}),Object(j.jsx)(N.a,{path:"/login",element:Object(j.jsx)(C,{})}),Object(j.jsx)(N.a,{path:"/register",element:Object(j.jsx)(F,{})}),Object(j.jsx)(N.a,{path:"/products",element:Object(j.jsx)(h,{})}),Object(j.jsx)(N.a,{path:"/products/:id",element:Object(j.jsx)(D,{})}),Object(j.jsx)(N.a,{exact:!0,path:"/cart",element:Object(j.jsx)(k,{})}),Object(j.jsx)(N.a,{path:"/cart/:id",element:Object(j.jsx)(D,{})}),Object(j.jsx)(N.a,{path:"/checkoutform",element:Object(j.jsx)(T,{})})]})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),E()}},[[68,1,2]]]);
//# sourceMappingURL=main.2b15c667.chunk.js.map