const v=document.getElementById('heroVideo');
addEventListener('scroll',()=>{
const p=scrollY/(document.body.scrollHeight-innerHeight);
v.style.transform=`translateZ(${p*180}px) rotateX(${10+p*18}deg) rotateY(${p*20}deg) scale(${1+p*0.25})`;
});