(this["webpackJsonpportfolio-gelar"]=this["webpackJsonpportfolio-gelar"]||[]).push([[0],{26:function(e,t,i){},27:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(19),r=i.n(a),s=(i(26),i(27),i(13)),o=i(2),l=i(4),j=i(5),h=i(7),p=i(6),b=i(0),d=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsx)("li",{id:this.props.item,children:Object(b.jsx)(s.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item),children:this.props.item})})}}]),i}(c.Component),u=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).activeitem=function(e){c.state.NavItemActive.length>0&&document.getElementById(c.state.NavItemActive).classList.remove("active"),c.setState({NavItemActive:e},(function(){document.getElementById(c.state.NavItemActive).classList.add("active")}))},c.state={NavItemActive:""},c}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)(d,{item:"Home",tolink:"/",activec:this.activeitem}),Object(b.jsx)(d,{item:"Education",tolink:"/education",activec:this.activeitem}),Object(b.jsx)(d,{item:"Projects",tolink:"/projects",activec:this.activeitem}),Object(b.jsx)(d,{item:"Contact",tolink:"/contact",activec:this.activeitem})]})})}}]),i}(c.Component),m=i(21),O=i.n(m),g=i.p+"static/media/foto_gelar.b47e37e1.jpg",f=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{class:"social",children:[Object(b.jsx)("a",{href:"https://github.com/gelarpambudi",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{class:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://Linkedin.com/in/gelaradhiluhung",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(b.jsx)("a",{href:"mailto:gelaradhiluhung@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{class:"far fa-envelope"})})]})}}]),i}(c.Component),v=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"condiv home",children:[Object(b.jsx)("img",{src:g,className:"profilepic",alt:""}),Object(b.jsx)(O.a,{className:"typingeffect",text:["Hi there!","I'm Gelar Pambudi Adhiluhung"],speed:75,eraseDelay:650}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"I'm Gelar, Telecommunication Engineering fresh graduate."}),Object(b.jsx)("h3",{children:"I have interest in cloud computing, IT infrastructure, and web technology"}),Object(b.jsx)(f,{})]})}}]),i}(c.Component),x=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"widecard",children:Object(b.jsxs)("div",{class:"compdet",children:[Object(b.jsx)("h3",{children:this.props.title}),Object(b.jsx)("h4",{class:"secondtext",children:this.props.where}),Object(b.jsxs)("h4",{class:"secondtext",children:[this.props.from," - ",this.props.to]})]})})}}]),i}(c.Component),_=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"condiv",children:[Object(b.jsx)("h1",{className:"subtopic",children:"Education Background"}),Object(b.jsx)(x,{title:"Telecommunication Engineering (Bachelor)",where:"ITB (Bandung Institute of Technology)",from:"2017",to:"2021"}),Object(b.jsx)("h1",{className:"subtopic",children:"License & Certification"}),Object(b.jsx)(x,{title:"Huawei Certified ICT Associate AI",where:"Huawei",from:"2020",to:"2023"}),Object(b.jsx)(x,{title:"Huawei Certified ICT Associate Cloud Computing",where:"Huawei",from:"2020",to:"2023"}),Object(b.jsx)(x,{title:"Huawei Certified ICT Associate Routing & Switching",where:"Huawei",from:"2019",to:"2022"})]})}}]),i}(c.Component),y=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"condiv",children:[Object(b.jsx)("h1",{className:"subtopic",children:"Contact Me"}),Object(b.jsx)("h3",{children:"Email  :   gelaradhilhung@gmail.com"}),Object(b.jsx)(f,{})]})}}]),i}(c.Component),k=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"widecard",children:Object(b.jsxs)("div",{class:"compdet",children:[Object(b.jsx)("h2",{class:"project_title",children:this.props.title}),Object(b.jsx)("img",{class:this.props.img_style_1,src:this.props.img_project_1,alt:""}),Object(b.jsx)("img",{class:this.props.img_style_2,src:this.props.img_project_2,alt:""}),Object(b.jsx)("h3",{class:"secondtext",children:this.props.description}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{class:"repo_link",target:"_blank",rel:"noreferer",href:this.props.link,children:"Github Repo"})]})})}}]),i}(c.Component),w=i.p+"static/media/druma_project.6e361064.JPG",C=i.p+"static/media/druma_project2.54d19b7a.JPG",I=i.p+"static/media/ansible_project.e6166ee9.png",A=i.p+"static/media/ansible_project2.dc9d464d.PNG",N=i.p+"static/media/alumni_project.4efa2b41.JPG",T=i.p+"static/media/alumni_project2.65648d7b.jpg",B=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"condiv",children:[Object(b.jsx)("h1",{className:"subtopic",children:"Projects"}),Object(b.jsx)(k,{title:"Druma",img_project_1:w,img_project_2:C,img_style_1:"project_image",img_style_2:"project_image",description:"Druma is an AI system for detecting potentialy dangerous trees along the power line Right of Way.\r Druma is designed to detect trees and power line from satellite imagery or UAVs images. The detected trees will be marked accordingly\r based on their horizontal distance from the nearest power line",link:"https://github.com/gelarpambudi/druma"}),Object(b.jsx)(k,{title:"Server Provisioning & Automation with Ansible",img_project_1:I,img_project_2:A,img_style_1:"project_image",img_style_2:"project_image_phone",description:"This project is about provisioning server application with Ansible. Our main objectives are\r install and deploy NGINX Load Balancer with its backend services configuration and create health check automation that will send notification\r status to Telegram Bot.",link:"https://github.com/gelarpambudi/ansible-et4044"}),Object(b.jsx)(k,{title:"Alumni Mobile App",img_project_1:N,img_project_2:T,img_style_1:"project_image",img_style_2:"project_image_phone",description:"Android app for managing alumni data in the database. The mobile app will make a request to the web service, \r then the web service will process the request.",link:"https://github.com/gelarpambudi/alumni-mobile-app"})]})}}]),i}(c.Component);var P=function(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{}),Object(b.jsxs)(o.a,{exact:!0,path:"/",children:[" ",Object(b.jsx)(v,{})," "]}),Object(b.jsxs)(o.a,{path:"/education",children:[" ",Object(b.jsx)(_,{})," "]}),Object(b.jsxs)(o.a,{path:"/contact",children:[" ",Object(b.jsx)(y,{})," "]}),Object(b.jsxs)(o.a,{path:"/projects",children:[" ",Object(b.jsx)(B,{})," "]})]})})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.bbfcac83.chunk.js.map