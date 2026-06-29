// dark mode
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  const root = document.documentElement;

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      root.removeAttribute('data-theme');
      themeIcon.className = 'fa-solid fa-moon';
    }
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  themeToggle.addEventListener('click', ()=>{
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

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
