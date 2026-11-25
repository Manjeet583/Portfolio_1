// PORTRAIT: save your photo as assets/abhay.jpg (or paste your original data:image/jpeg;base64,... string here)
const PHOTO="image/profile.jpeg";
const RESUME="";           // e.g. "assets/Abhay_Maurya_Resume.pdf"
const FORM_ENDPOINT="";    // e.g. a Formspree URL
const PROJECTS=[
{t:"Smart Skill Gap Analyzer",d:"A platform concept designed to help students identify skill gaps and understand the technical skills required for their desired career paths.",tags:["Concept","Skill Mapping"],github:"",demo:""},
{t:"Academia–Industry Collaboration Portal",d:"A platform designed to connect students, academic institutions, and industries through skill assessment, skill mapping, internships, and job opportunities.",tags:["Web Platform","Skill Assessment"],github:"",demo:""},
{t:"Library Management System",d:"A web-based application designed to manage library records and basic library operations.",tags:["Web App","Records"],github:"",demo:""}];
const $=s=>document.querySelector(s);
$("#yr").textContent=new Date().getFullYear();
if(PHOTO){$("#ph").innerHTML='<img src="'+PHOTO+'" alt="Portrait of Abhay Maurya">'}
if(RESUME){$("#resume").href=RESUME;$("#resume").setAttribute("download","")}else{$("#resume").addEventListener("click",e=>{e.preventDefault();alert("Resume file not added yet. Set RESUME in the script.")})}
const link=(h,l)=>h?'<a class="btn" style="min-height:40px" href="'+h+'" target="_blank" rel="noopener">'+l+'</a>':'<span class="btn" style="min-height:40px;opacity:.5;cursor:default">'+l+' · Coming soon</span>';
$("#pg").innerHTML=PROJECTS.map(p=>'<article class="glass pad proj"><div class="ph">'+p.t.split(/[ –]/).filter(Boolean).slice(0,2).map(w=>w[0]).join("")+'</div><h3>'+p.t+'</h3><p>'+p.d+'</p><div class="tags">'+p.tags.map(t=>'<span class="tag">'+t+'</span>').join("")+'</div><div class="row" style="margin-top:16px">'+link(p.github,"GitHub")+link(p.demo,"Live Demo")+'</div></article>').join("");
const bg=$("#bg"),lk=$("#lk");
bg.onclick=()=>{const o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
lk.querySelectorAll("a").forEach(a=>a.onclick=()=>{lk.classList.remove("open");bg.setAttribute("aria-expanded",false)});
const tp=$("#top");addEventListener("scroll",()=>tp.classList.toggle("on",scrollY>600),{passive:true});
tp.onclick=()=>scrollTo({top:0});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const W=["Aspiring AI & ML Engineer","Software Development Enthusiast","Problem Solver","Computer Science Student"],ty=$("#ty");
if(matchMedia("(prefers-reduced-motion:reduce)").matches){ty.textContent=W[0]}else{let i=0,j=0,del=false;(function t(){const w=W[i];ty.textContent=w.slice(0,j);if(!del&&j===w.length){del=true;return setTimeout(t,1600)}if(del&&j===0){del=false;i=(i+1)%W.length}j+=del?-1:1;setTimeout(t,del?35:70)})()}
$("#cf").addEventListener("submit",async e=>{e.preventDefault();const f=new FormData(e.target);
if(FORM_ENDPOINT){try{const r=await fetch(FORM_ENDPOINT,{method:"POST",body:f,headers:{Accept:"application/json"}});$("#fm").textContent=r.ok?"Message sent. Thank you!":"Could not send. Please email me directly.";if(r.ok)e.target.reset()}catch(_){$("#fm").textContent="Could not send. Please email me directly."}return}
location.href="mailto:mauryaabhay583@gmail.com?subject="+encodeURIComponent(f.get("subject"))+"&body="+encodeURIComponent(f.get("message")+"\n\n— "+f.get("name")+" ("+f.get("email")+")")});
