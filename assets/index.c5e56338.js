import{j as l,a as e,l as d,r as o,R as m,B as h}from"./vendor.de18a33c.js";const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}};x();var f="/assets/anuja3.2a7e2ab2.png";const p=()=>{const n=["logo-instagram","logo-facebook","logo-linkedin","logo-twitter"];return l("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:f,alt:"",className:"w-6/12 md:w-8/12 h-full object-cover"})}),e("div",{className:"flex-1",children:l("div",{className:"md:text-left text-center",children:[l("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[l("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Anuja Dahal"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Biotechnologist"}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:n==null?void 0:n.map(r=>e("div",{className:"text-gray-600 hover:text-white cursor-pointer ",children:e("ion-icon",{name:r})},r))})]})})]})};var g="/assets/anuja2.2840746c.png";const u=()=>e("section",{id:"about",className:"py-10 text-white",children:l("div",{className:"text-center mt-8",children:[l("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),l("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:l("div",{className:"text-gray-300 my-3",children:[l("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:["I\u2019m ",e("span",{style:{fontWeight:"bold"},children:"Anuja Dahal"}),", a recent biotechnology graduate from Kathmandu University. My studies in molecular biology, genetics, and bioinformatics ignited my passion for genetic engineering and sustainable solutions. I\u2019m particularly excited by advancements like CRISPR and synthetic biology. As I transition to the professional world, I\u2019m eager to contribute to innovative research and development that benefits human health and the environment, driven by a commitment to continuous learning and scientific discovery."]}),e("br",{}),e("a",{href:"./src/assets/Anuja Dahal CV.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:g,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})});const y=[{type:"Centrifugation",level:100},{type:"Gel electrophoresis",level:85},{type:"Spectro photometeric analaysis",level:75},{type:"DNA/RNA extraction",level:65},{type:"PCR",level:45},{type:"SDS-PAGE",level:40},{type:"ELIZA",level:35}],b={bar:"rgb(8 145 178)",title:{text:"#fff",background:"rgb(8 145 178)"}},N=()=>e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:l("div",{className:"mt-8 text-gray-100 text-center",children:[l("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"mx-10 mt-5",children:e(d,{skills:y,colors:b})})]})});var v="/assets/anuja1.d830c12d.png";const w=()=>l("section",{id:"hireme",className:"py-10 px-3 text-white",children:[l("div",{className:"text-center",children:[l("h3",{className:"text-4xl font-semibold",children:["Hire ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Do you have any work?"})]}),l("div",{className:"bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center",children:[l("div",{children:[e("h2",{className:"text-2xl font-semibold",children:"Do you want any work from me?"}),e("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6",children:"Thank you for your interest! I\u2019m eager to apply my biotechnology skills to real-world projects, especially in genetic engineering, bioinformatics, or sustainable solutions. I\u2019m excited about opportunities for collaboration, research, or any relevant tasks. Let me know how I can contribute!"}),e("button",{className:"btn-primary mt-10",children:"Say Hello"})]}),e("img",{src:v,alt:"",className:"h-[31rem] lg:h-[39rem] lg:absolute bottom-0 -right-3 object-cover"})]})]}),j=()=>e("section",{id:"contact",className:"py-10 px-3 text-white",children:l("div",{className:"text-center mt-8",children:[l("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),l("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[l("form",{className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name"}),e("input",{type:"Email",placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",rows:10}),e("button",{className:"btn-primary w-fit",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:[{logo:"mail",text:"dahalanuza1@gmail.com"},{logo:"location",text:"Kathmandu, Nepal"}].map((r,i)=>l("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:r.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:r.text})]},i))})]})]})}),k=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2024 Anuja Dahal. All Rights reserved."}),A=()=>{const[n,r]=o.exports.useState(!1),[i,c]=o.exports.useState(!1),a=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"CONTACT",link:"#contact"}];return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?r(!0):r(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${n?"bg-white/60  text-gray-900":"text-white"}`,children:l("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:l("h4",{className:"text-4xl uppercase font-bold",children:["A",e("span",{className:"text-cyan-600",children:"nuj"}),"a"]})}),e("div",{className:` ${n?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:a==null?void 0:a.map((t,s)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},s))})}),e("div",{onClick:()=>c(!i),className:`z-[999]  ${i?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${i?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:a==null?void 0:a.map((t,s)=>e("li",{onClick:()=>c(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},s))})})]})})},M=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses"})}),S=()=>l("div",{children:[e(A,{}),e(M,{}),e(p,{}),e(u,{}),e(N,{}),e(w,{}),e(j,{}),e(k,{})]});m.render(e(h,{children:e(S,{})}),document.getElementById("root"));
