(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(9),n=s(3),i=s(1),a=s(0),l=Object(i.createContext)(),r=function(e){var t=e.children,s=Object(i.useState)("light"),c=Object(n.a)(s,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: light)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rocyzas.github.io/portfolio",j="^_^",h="Rokas Pranevi\u010dius",d="Software Engineer",u="Katarsis laim\u0117s Eurovizij\u0105.",b="https://drive.google.com/file/d/1iZQRCnpg3KeTh6KUi4r47wTlhw1cKoah/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/rokas-pranevicius/",github:"https://github.com/Rocyzas/"},p=[],O="pranas.rokas@gmail.com",f=[{name:"Image Classification App",description:"Muffin and Chihuahua image classification app deployed on Azure.",stack:["Python","Tensorflow","Flask"],sourceCode:"https://github.com/Rocyzas/Muffin-vs-Chihuahua-Classification"},{name:"Lindenmayer Systems",description:"Performed genetic operations on L-Systems using crossover and mutation, visualising patterns of growing biological structures.",stack:["Python","Turtle"],sourceCode:"https://github.com/Rocyzas/Genetic-operations-on-L-systems"},{name:"Alzheimer's Disease diagnosis",description:"Classified MRI hippocampus scans between healthy cases, mildy impared and Alzheimer's achieving 84% accuracy",stack:["Python","Tensorflow","Keras","Hippodeep"],sourceCode:"https://github.com/Rocyzas/Explainable-AI-Classifiers-for-Alzheimers-Disease-Diagnosis"},{name:"OpenGL Cybertruck",description:"Designed and implemented rotating Cybertruck in OpenGL with UI, Hierarchical Modelling, Textures, Normals",stack:["C++","OpenGL"],sourceCode:"https://github.com/Rocyzas/OpenGL-cybertruck"},{name:"Fake News Detection App",description:"Implemented Multimodal fake news detection classifier to identify suspicious post from Reddit",stack:["Python","Pytorch","Transformers"],sourceCode:"https://gitlab.com/ACopley/fakenews_detector/-/tree/classifier",livePreview:"https://drive.google.com/file/d/1KjxXTttONSiLapGaFK2wjdpDgUEgogzl/view?usp=sharing"}],x=s(16),g=s.n(x),k=s(14),v=s.n(k),N=s(18),_=s.n(N),y=s(17),w=s.n(y),C=(s(28),function(){var e=Object(i.useContext)(l),t=Object(n.a)(e,1)[0],s=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(n.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,O?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===s?Object(a.jsx)(v.a,{}):Object(a.jsx)(g.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(w.a,{}):Object(a.jsx)(_.a,{})})]})}),z=(s(32),s.p,s.p+"static/media/monkey.6d52306e.gif"),P=function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:Object(a.jsx)("img",{src:z,alt:"Logo",className:"logo"})}):t}),Object(a.jsx)(C,{})]})},L=s(11),E=s.n(L),R=s(19),S=s.n(R),T=(s(33),function(){var e=h,t=d,s=u,c=b,n=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:s&&s}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(a.jsxs)(a.Fragment,{children:[n.github&&Object(a.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),n.linkedin&&Object(a.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(S.a,{})})]})]})]})}),A=s(7),I=s.n(A),K=s(20),D=s.n(K),G=(s(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(D.a,{})})]})}),M=(s(36),function(){return f.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(a.jsx)(G,{project:e},I()())}))})]}):null}),F=(s(37),function(){return p.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),H=s(21),U=s.n(H),B=(s(38),function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),s?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(U.a,{fontSize:"large"})})}):null}),J=(s(39),function(){return O?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(O),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(s(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rocyzas/portfolio",className:"link footer__link",children:"Created By Rokas Pranevi\u010dius"})})}),X=(s(41),function(){var e=Object(i.useContext)(l),t=Object(n.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(T,{}),Object(a.jsx)(M,{}),Object(a.jsx)(F,{}),Object(a.jsx)(J,{})]}),Object(a.jsx)(B,{}),Object(a.jsx)(Q,{})]})});s(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(X,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a660bd5f.chunk.js.map