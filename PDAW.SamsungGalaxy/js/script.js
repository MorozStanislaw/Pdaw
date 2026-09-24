document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
  toggle?.addEventListener('click',()=>{nav?.classList.toggle('open');toggle.setAttribute('aria-expanded',nav?.classList.contains('open')?'true':'false');});
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

  const form=document.getElementById('contactForm');
  form?.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=document.getElementById('formMessage');
    msg.textContent='Сообщение успешно подготовлено. В учебной версии данные никуда не отправляются.';
    form.reset();
  });

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') document.querySelectorAll('.modal.show').forEach(m=>m.classList.remove('show'));
  });

  const revealItems=document.querySelectorAll('.series-card,.phone-card,.home-phone-card,.feature-card,.stats-section>div');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
    revealItems.forEach(el=>{el.classList.add('reveal');observer.observe(el);});
  }
});
