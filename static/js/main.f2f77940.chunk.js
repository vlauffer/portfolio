(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{144:function(e,a,t){},145:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),o=t.n(r),s=(t(73),t(74),t(75),t(64)),i=t(13),c=t(23),m=t(24),u=t(29),p=t(25),d=t(30),g=t(154),h=t(155),E=t(156),f=t(157),v=(t(76),t(32)),y=t.n(v),b=t(33);t(144);function w(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.Card,{shadow:5,style:{maxWidth:"100%",minHeight:"200px",margin:"auto",marginTop:"15px"}},l.a.createElement(b.CardTitle,{expand:!0,style:{color:"red",background:(a=e.img,"url("+a+")  center 50% no-repeat #D8D8D8"),backgroundSize:"100%"}}),l.a.createElement(b.CardText,{style:{width:"100%"}},e.name,e.desc)));var a}var k=[{name:"WH3N",url:"https://wh3nfrontend.herokuapp.com",img:"assets/wh3npic.jpg",desc:": a mobile-friendly solution for organizing meetings"},{name:"Nobee",url:"https://www.rentnobee.com/",img:"assets/house.png",desc:": an easier way to find apartments in Waltham"},{name:"Slippery Melon",url:"https://imapopanyway.itch.io/slippery-melon",img:"assets/Melon2.png",desc:": a short game, if you can beat it :)"}],C=[{name:"NRG Marketing Strategy",url:"https://drive.google.com/file/d/1WhOo_pWgJ7RCqARoTyJTbz9JvIs7Z1Yx/view",img:"assets/nrg.png",desc:""},{name:"Boeing Case Competition",url:"https://drive.google.com/file/d/151Bm_cB6hmy8T3HbvG5_sKMYzNALncpZ/view",img:"assets/boeing.png",desc:""},{name:"Xiaomi's Feature Phone in India",url:"https://drive.google.com/file/d/1v9Z-ykPJeEeWVkC4rcZUM-BzM0cRsUsG/view",img:"assets/xmi.png",desc:""}],x=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"makeList",value:function(e){return l.a.createElement(l.a.Fragment,null,e.map((function(e,a){return l.a.createElement(g.a,{key:a,xs:12,sm:4,md:4},l.a.createElement("a",{className:"imageLink",href:e.url},l.a.createElement(w,{img:e.img,name:e.name,desc:e.desc})))})))}},{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"splitter"},l.a.createElement(g.a,{className:"firstCol",xs:12,md:6},l.a.createElement("div",{className:"col-md-12 align-self-center"},l.a.createElement(y.a,null,l.a.createElement("h3",null,"Hello! ",l.a.createElement(y.a.Delay,{ms:800}),"I'm ",l.a.createElement(y.a.Delay,{ms:500})),l.a.createElement("strong",null,"Vincent Lauffer")))),l.a.createElement(g.a,{className:"secondCol",xs:2,md:1}),l.a.createElement(g.a,{className:"secondCol",xs:8,md:4},l.a.createElement(f.a,{src:"assets/vincent.jpg",roundedCircle:!0}))),l.a.createElement(E.a,{className:"aboutRow"},l.a.createElement(h.a,{className:"aboutContainer",fluid:!0},l.a.createElement(g.a,{xs:12,sm:12},l.a.createElement("h2",null,"Here's what I love:"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{className:"aboutRow2"},l.a.createElement(g.a,{xs:12,sm:4},l.a.createElement(f.a,{src:"assets/webdev.png"}),l.a.createElement("h5",null," Web App Developement"),l.a.createElement("p",null,"Knowledge of React.js, Node.js, PostgreSQL, GitHub and more! ")),l.a.createElement(g.a,{xs:12,sm:4},l.a.createElement(f.a,{src:"assets/pm.png"}),l.a.createElement("h5",null," Product Management"),l.a.createElement("p",null,"I love building things that make people smile ")),l.a.createElement(g.a,{xs:12,sm:4},l.a.createElement(f.a,{src:"assets/marketing.png"}),l.a.createElement("h5",null,"Marketing Analytics"),l.a.createElement("p",null,"Customer discovery, segmentation and analysis   ")))))),l.a.createElement(E.a,null,l.a.createElement(h.a,{className:"portfolio"},l.a.createElement(g.a,{xs:12,sm:12},l.a.createElement("h2",null,"Web Apps"),l.a.createElement(E.a,{className:"webApps"},this.makeList(k)),l.a.createElement("h2",null,"Product Strategy and Marketing Analysis"),l.a.createElement(E.a,null,this.makeList(C))))))}}]),a}(n.Component),N=t(159),j=t(160),O=t(158),Y=(t(145),["You smell great!","I am really proud of you","I love your smile","You look great today","You\u2019re like sunshine on a rainy day","You're wonderful","You're like sunshine on a rainy day","You always know how to find that silver lining","You're inspiring","You're a smart cookie","The people you love are lucky to have you in their lives","Your hair looks stunning","On a scale from 1 to 10, you're an 11","You're really something special","Where is the nearest Chipotle?"]),M=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"makeComplement",value:function(){alert(Y[Math.floor(Math.random()*(Y.length-0)+0)])}},{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{bg:"dark",expand:"sm"},l.a.createElement(N.a.Brand,{href:"/"},l.a.createElement(f.a,{src:"assets/navbaricon.png",width:30})),l.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(j.a,null,l.a.createElement(O.a,{onClick:function(){return e.makeComplement()}},"Receive a Compliment"),l.a.createElement(O.a,{variant:"warning",href:"https://drive.google.com/file/d/1X954NTIu21SfKRXEs7fk0Cwp_4VCLVhl/view?usp=sharing"},"View Full Resume"),l.a.createElement(O.a,{variant:"primary",href:"https://www.linkedin.com/in/vincent-lauffer-391317119/"},"Connect on LinkedIn"))))}}]),a}(n.Component);var W=function(){return l.a.createElement(s.a,{basename:""},l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(i.a,{exact:!0,path:"/",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(150),t(151);o.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,a,t){e.exports=t(152)},73:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.f2f77940.chunk.js.map