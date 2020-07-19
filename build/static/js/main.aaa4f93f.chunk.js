(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t(32)},32:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),l=t(5),u=t(6),c=t(2),s=t(1);function m(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: purple;\n  font-size: 1em;\n  font-weight: bold;\n\n  & a {\n    text-decoration: none;\n    padding: 10px;\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(c.a)(["\n  font-size: 32px;\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n"]);return f=function(){return e},e}var p=s.a.header(f()),g=s.a.h1(d()),y=s.a.div(m()),b=function(e){return r.a.createElement(p,null,r.a.createElement(g,null,"Fruit Emporium"),r.a.createElement(y,null,r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement(l.b,{to:"/about"},"About")))},h={a:{id:"a",name:"Avocado",latinName:"Persea americana",description:"An oddly creamy fruit. Surprisingly high in protein. Has a big pit in the middle.  You're not supposed to eat the rind. Millenials like to put it on toast, for reasons not entirely understood.",imageSrc:"/assets/avocado.jpg",countryOfOrigin:"Mexico",sellerId:"alice",price:8,quantity:2},b:{id:"b",name:"Banana",latinName:"Musa acuminata",description:"A mushy, mealy fruit \ud83e\udd22",imageSrc:"/assets/banana.jpg",countryOfOrigin:"Ecuador",sellerId:"bob",price:5,quantity:500},c:{id:"c",name:"Cherry",latinName:"Prunus avium",description:"You're a big winner if you get 3 of these on a slot machine!",imageSrc:"/assets/cherry.jpg",countryOfOrigin:"Turkey",sellerId:"bob",price:3.49,quantity:0},d:{id:"d",name:"Lime",latinName:"Citrus aurantiifolia",description:"The most underrated citrus.",imageSrc:"/assets/lime.jpg",countryOfOrigin:"Spain",sellerId:"alice",price:.99,quantity:5},e:{id:"e",name:"Orange",latinName:"Citrus \xd7 sinensis",description:"Frequently turned into juice.",imageSrc:"/assets/orange.jpg",countryOfOrigin:"United States",sellerId:"alice",price:1.49,quantity:28},f:{id:"f",name:"Blue Lemon",latinName:"Citrus limon caeruleum",description:"Fantastical, mythological item. Exists only in other universes",imageSrc:"/assets/blue-lemon.jpg",countryOfOrigin:"Valhalla",sellerId:"bob",price:400,quantity:0}};function v(){var e=Object(c.a)(["\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-style: italic;\n"]);return v=function(){return e},e}function E(){var e=Object(c.a)(["\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  padding: 10px;\n"]);return E=function(){return e},e}function x(){var e=Object(c.a)(["\n  width: 200px;\n  border-radius: 10px;\n"]);return x=function(){return e},e}function O(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 30px;\n  width: 250px;\n  border-radius: 10px;\n  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);\n  margin: 0 auto;\n"]);return O=function(){return e},e}function j(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 10px;\n  grid-column-gap: 10px;\n"]);return j=function(){return e},e}var w=s.a.span(j()),I=s.a.div(O()),S=s.a.img(x()),T=Object(s.a)(l.b)(E()),k=s.a.span(v()),q=function(e){var n=e.itemList;return r.a.createElement(w,null,n.map(function(e,n){return r.a.createElement(I,{key:e.id+n},r.a.createElement(S,{src:e.imageSrc}),r.a.createElement(T,{Link:!0,to:"/items/".concat(e.id)},e.name),r.a.createElement(k,null,e.latinName))}))};function N(){var e=Object(c.a)(["\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n"]);return N=function(){return e},e}var F=s.a.p(N()),V=function(){return r.a.createElement("div",null,r.a.createElement(F,null,"Fruit emporium sells the finest fruits from this world and beyond."),r.a.createElement(F,null,"Browse items:"),r.a.createElement(q,{itemList:Object.values(h)}))};function A(){var e=Object(c.a)(["\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n"]);return A=function(){return e},e}var G=s.a.p(A()),L=function(){return r.a.createElement("div",null,r.a.createElement(G,null,"Fruit emporium is founded on a very simple principle: Fruit is good."),r.a.createElement(G,null,"We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets."))},B=function(){var e=Object(u.f)().itemId;return console.log(e),r.a.createElement("div",null,"Item Page To Do")};var C=function(e){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(V,null)),r.a.createElement(u.a,{exact:!0,path:"/about"},r.a.createElement(L,null)),r.a.createElement(u.a,{exact:!0,path:"/items/:itemId"},r.a.createElement(B,null)))))},M=document.getElementById("root");o.a.render(r.a.createElement(C,null),M)}},[[21,1,2]]]);
//# sourceMappingURL=main.aaa4f93f.chunk.js.map