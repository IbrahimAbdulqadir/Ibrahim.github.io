// drawer
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  document.getElementById('openDrawer').onclick = ()=>{drawer.classList.add('open');overlay.classList.add('open');};
  document.getElementById('closeDrawer').onclick = ()=>{drawer.classList.remove('open');overlay.classList.remove('open');};
  overlay.onclick = ()=>{drawer.classList.remove('open');overlay.classList.remove('open');};
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{drawer.classList.remove('open');overlay.classList.remove('open');}));

  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('in-view'), i*70); io.unobserve(e.target); }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // project filters
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-card');
  pills.forEach(p=>{
    p.addEventListener('click', ()=>{
      pills.forEach(x=>x.classList.remove('active'));
      p.classList.add('active');
      const f = p.dataset.filter;
      cards.forEach(c=>{
        const tags = c.dataset.tags;
        c.classList.toggle('show', f==='all' || tags.includes(f));
      });
    });
  });

  // contact form -> mailto fallback
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const [name, email, msg] = this.querySelectorAll('input,textarea');
    const body = encodeURIComponent(`From: ${name.value} (${email.value})\n\n${msg.value}`);
    window.location.href = `mailto:your.email@example.com?subject=Portfolio contact from ${encodeURIComponent(name.value)}&body=${body}`;
  });
