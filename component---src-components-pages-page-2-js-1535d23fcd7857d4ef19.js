(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(231),c=a(229),l=a(238);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Page 2"),r.a.createElement(l.a,null))}},228:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},229:function(e,t,a){"use strict";var n=a(230),r=a(0),i=a.n(r),c=a(234);function l(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=n.data.site,s=t||o.siteMetadata.description;return i.a.createElement(c.Helmet,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},230:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},231:function(e,t,a){"use strict";var n=a(228),r=a(0),i=a.n(r),c=a(73),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.defaultProps={siteTitle:""};var o=l;a(219),a(220),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{className:"main-wrapper"},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},235:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(73),c=a(235),l=a(239),o=a.n(l),s=function(){var e=c.data;return r.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a(232),d=a(226),m=a(225),p=a.n(m),g=a(245),f=a.n(g),b=a(22),h=function(){return Object(n.useState)(Object(u.isUndefined)(window)?null:window)[0]},E=function(e,t,a,n){var r="up"===n?"-100%":"100%",i="up"===n?"100%":"-100%",c=a.length;return(new d.TimelineMax).set(e,{y:i}).to(e,c/2,{y:"0%",ease:d.Power1.easeInOut}).set(t,{opacity:0}).to(e,c/2,{y:r,ease:d.Power1.easeIn})},w=function(){var e=h(),t=Object(n.useState)(),a=t[0],i=t[1],c=Object(n.useState)(),l=c[0],o=c[1],s=Object(n.useState)(),g=s[0],w=s[1],y=Object(n.useCallback)(function(e){return o(e)},[]),v=Object(n.useCallback)(function(e){return w(e)},[]),A="/";return Object(u.isUndefined)(e)||(A="/"===e.location.pathname?"/page-2":"/"),Object(n.useEffect)(function(){i(e.location.pathname)},[e]),r.a.createElement(b.Location,null,function(e){var t=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{ref:y},r.a.createElement("div",null,r.a.createElement("h2",null,"Transition Links"),a&&r.a.createElement("span",null,"Path: ",t.pathname),r.a.createElement("br",null),r.a.createElement(f.a,{cover:!0,to:A,direction:"right"},"Go to a page, with a cover right"),r.a.createElement("br",null),r.a.createElement(f.a,{paintDrip:!0,to:A,hex:"#4b2571"},"Go to a page, with a paint drip"),r.a.createElement("br",null),r.a.createElement(p.a,{to:A,exit:{length:1,trigger:function(e){var t=e.exit;return E(g,l,t,"down")},state:{test:"exit state"}},entry:{delay:.5,trigger:function(e){e.entry;return function(e,t){return(new d.TimelineMax).staggerFrom(t.querySelectorAll("h2, p, a, pre"),1,{opacity:0,y:"+=50"},.1)}(0,e.node)}}},"Go to a page, that way"," ",r.a.createElement("span",{"aria-label":"pointing up",role:"img"},"👇")," ","and animate in the next page"),r.a.createElement("br",null),r.a.createElement(p.a,{to:A,exit:{length:1.2,trigger:function(e){var t=e.exit;return E(g,l,t,"up")}},entry:{delay:.5,length:1,state:{layoutTheme:"dark"}}},"Go to a page, that way"," ",r.a.createElement("span",{"aria-label":"pointing up",role:"img"},"☝️"),"and give us a dark theme when we get there."),r.a.createElement("br",null))),r.a.createElement(m.TransitionPortal,null,r.a.createElement("div",{ref:v,style:{position:"fixed",background:"#4b2571",top:0,left:0,width:"100vw",height:"100vh",transform:"translateY(100%)"}})))})};w.defaultProps={};var y=w,v=function(e){e.display;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(s,null)),r.a.createElement("label",{htmlFor:"abc"},r.a.createElement("span",null,"Abc"),r.a.createElement("input",{id:"abc",type:"text",name:"abc"})),r.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))};v.defaultProps={display:!0};t.a=v}}]);
//# sourceMappingURL=component---src-components-pages-page-2-js-1535d23fcd7857d4ef19.js.map