// Дополнительный интерактив: подключается последним, после layout.js, phones.js и script.js.
(() => {
  const fine = window.matchMedia('(pointer: fine)').matches;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const toast = (m) => (typeof showToast === 'function' ? showToast(m) : null);

  /* ---------- 1. Полоса прогресса, кнопка «наверх», скрытие шапки ---------- */
  const bar = document.createElement('div');
  bar.id = 'scrollProgress';
  document.body.appendChild(bar);

  const toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Наверх');
  toTop.textContent = '↑';
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(toTop);

  const header = $('.site-header');
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    toTop.classList.toggle('show', y > 500);
    if (header) {
      const menuOpen = $('.nav.open');
      header.classList.toggle('hide', y > lastY && y > 220 && !menuOpen);
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Свечение за курсором ---------- */
  if (fine && !reduce) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    let tx = innerWidth / 2, ty = innerHeight / 2, cx = tx, cy = ty;
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- 3. Живой фон: звёзды, реагирующие на курсор ---------- */
  if (!reduce) {
    const canvas = document.createElement('canvas');
    canvas.id = 'bgCanvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');
    let W, H, stars = [];
    const mouse = { x: -9999, y: -9999 };
    const colors = ['167,139,250', '255,95,162', '255,255,255'];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width = innerWidth * dpr;
      H = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.floor((innerWidth * innerHeight) / 14000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        c: colors[Math.floor(Math.random() * colors.length)],
        t: Math.random() * Math.PI * 2
      }));
    }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('mouseleave', () => { mouse.x = mouse.y = -9999; });

    let running = true;
    document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) draw(); });

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const s of stars) {
        s.x += s.vx; s.y += s.vy; s.t += 0.02;
        if (s.x < 0) s.x = innerWidth; if (s.x > innerWidth) s.x = 0;
        if (s.y < 0) s.y = innerHeight; if (s.y > innerHeight) s.y = 0;
        const dx = s.x - mouse.x, dy = s.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140) {
          s.x += (dx / d) * 1.2;
          s.y += (dy / d) * 1.2;
          ctx.strokeStyle = `rgba(${s.c},${(1 - d / 140) * 0.55})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${s.c},${0.35 + Math.sin(s.t) * 0.3})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- 4. 3D-наклон и подсветка карточек (делегирование: работает и для новых карточек) ---------- */
  const TILT = '.phone-card, .home-phone-card, .series-card, .feature-card';
  let lastCard = null;
  function resetCard(c) {
    if (!c) return;
    c.classList.remove('tilting');
    c.style.setProperty('--rx', '0deg');
    c.style.setProperty('--ry', '0deg');
  }
  if (fine && !reduce) {
    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest ? e.target.closest(TILT) : null;
      if (card !== lastCard) { resetCard(lastCard); lastCard = card; }
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty('--mx', x + 'px');
      card.style.setProperty('--my', y + 'px');
      card.style.setProperty('--ry', ((x / r.width - 0.5) * 10).toFixed(2) + 'deg');
      card.style.setProperty('--rx', (-(y / r.height - 0.5) * 10).toFixed(2) + 'deg');
      card.classList.add('tilting');
    }, { passive: true });
    document.addEventListener('mouseleave', () => { resetCard(lastCard); lastCard = null; });

    // Параллакс изображения в модальном окне
    document.addEventListener('mousemove', (e) => {
      const wrap = e.target.closest ? e.target.closest('.modal-image-wrap') : null;
      document.querySelectorAll('.modal-image-wrap img').forEach((img) => {
        if (!wrap) { img.style.transform = ''; return; }
        const r = wrap.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        img.style.transform = `perspective(700px) rotateY(${px * 18}deg) rotateX(${-py * 18}deg) scale(1.05)`;
      });
    }, { passive: true });

    // Наклон главного телефона на главной
    const showcase = $('.hero-showcase');
    const hero = $('.hero');
    if (showcase && hero) {
      hero.addEventListener('mousemove', (e) => {
        const r = hero.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        showcase.style.transform = `perspective(1000px) rotateY(${px * 14}deg) rotateX(${-py * 10}deg)`;
        document.querySelectorAll('.showcase-glow').forEach((g, i) => {
          g.style.transform = `translate(${px * (i ? -50 : 50)}px, ${py * (i ? -50 : 50)}px)`;
        });
      });
      hero.addEventListener('mouseleave', () => {
        showcase.style.transform = '';
        document.querySelectorAll('.showcase-glow').forEach((g) => (g.style.transform = ''));
      });
    }

    // «Магнитные» кнопки в hero
    document.querySelectorAll('.hero-actions .btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener('mouseleave', () => (btn.style.transform = ''));
    });
  }

  /* ---------- 5. Ripple на кнопках + сердечки при добавлении в избранное ---------- */
  document.addEventListener('click', (e) => {
    const b = e.target.closest ? e.target.closest('.btn, .btn-small, .fav-btn') : null;
    if (!b) return;
    const r = b.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const rip = document.createElement('span');
    rip.className = 'ripple';
    rip.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    b.appendChild(rip);
    setTimeout(() => rip.remove(), 650);

    if (b.classList.contains('fav-btn')) {
      b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
      setTimeout(() => {
        if (!b.classList.contains('saved') || reduce) return;
        for (let i = 0; i < 9; i++) {
          const h = document.createElement('span');
          h.className = 'heart-particle';
          h.textContent = '♥';
          h.style.left = e.clientX + 'px';
          h.style.top = e.clientY + 'px';
          h.style.fontSize = 12 + Math.random() * 14 + 'px';
          h.style.setProperty('--dx', (Math.random() - 0.5) * 140 + 'px');
          h.style.setProperty('--dy', -40 - Math.random() * 110 + 'px');
          h.style.setProperty('--rot', (Math.random() - 0.5) * 120 + 'deg');
          document.body.appendChild(h);
          setTimeout(() => h.remove(), 1000);
        }
      }, 0);
    }
  });

  /* ---------- 6. Анимированные счётчики в блоке статистики ---------- */
  const counters = document.querySelectorAll('.stats-section strong');
  if (counters.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target;
      const m = el.textContent.match(/(\d+)(.*)/);
      if (!m) return;
      const end = +m[1], suffix = m[2], t0 = performance.now(), dur = 1600;
      (function tick(t) {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }), { threshold: 0.5 });
    counters.forEach((c) => { c.textContent = '0' + (c.textContent.match(/\D+$/) || [''])[0]; io.observe(c); });
  }

  /* ---------- 7. Каталог: быстрые фильтры, «только избранное», случайная модель, горячая клавиша ---------- */
  const toolbar = $('.toolbar');
  const search = $('#searchInput');
  const series = $('#seriesFilter');
  if (toolbar && search && series) {
    const chips = document.createElement('div');
    chips.className = 'chips';
    chips.innerHTML = `
      <button class="chip active" data-s="all">Все</button>
      <button class="chip" data-s="S">Galaxy S</button>
      <button class="chip" data-s="Z">Galaxy Z</button>
      <button class="chip" data-s="A">Galaxy A</button>
      <button class="chip" data-fav="1">♥ Избранное</button>
      <button class="chip fun" data-rand="1">🎲 Случайная модель</button>`;
    toolbar.after(chips);

    const refresh = () => series.dispatchEvent(new Event('input', { bubbles: true }));
    const syncActive = () => chips.querySelectorAll('[data-s]').forEach((c) => c.classList.toggle('active', c.dataset.s === series.value));
    syncActive();
    series.addEventListener('change', syncActive);

    chips.addEventListener('click', (e) => {
      const c = e.target.closest('.chip');
      if (!c) return;
      if (c.dataset.s) { series.value = c.dataset.s; syncActive(); refresh(); }
      if (c.dataset.fav) {
        window.__favOnly = !window.__favOnly;
        c.classList.toggle('active', window.__favOnly);
        refresh();
        if (window.__favOnly && !getFavs().length) toast('Пока нет избранных — нажми ♡ на карточке');
      }
      if (c.dataset.rand && typeof PHONES !== 'undefined') {
        const p = PHONES[Math.floor(Math.random() * PHONES.length)];
        openPhone(p.id);
      }
    });

    // Если включён режим «только избранное», снятие сердечка сразу убирает карточку
    document.addEventListener('click', (e) => {
      if (window.__favOnly && e.target.closest && e.target.closest('.fav-btn')) setTimeout(refresh, 350);
    });

    document.addEventListener('keydown', (e) => {
      const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
      if (e.key === '/' && !typing) { e.preventDefault(); search.focus(); }
    });
    search.setAttribute('placeholder', 'Поиск модели, например S26 Ultra...   (нажми «/»)');
  }

  /* ---------- 8. Сравнение: подсветка отличий, обмен местами, случайная пара, ссылка ---------- */
  const selA = $('#compareA'), selB = $('#compareB'), table = $('#compareTable');
  if (selA && selB && table) {
    const actions = document.createElement('div');
    actions.className = 'compare-actions';
    actions.innerHTML = `
      <button class="btn-small" id="cmpSwap">⇄ Поменять местами</button>
      <button class="btn-small" id="cmpRand">🎲 Случайная пара</button>
      <button class="btn-small" id="cmpLink">🔗 Скопировать ссылку</button>
      <label class="switch"><input type="checkbox" id="cmpDiff"><i></i>Показать только отличия</label>`;
    $('.compare-tip').after(actions);

    const fire = () => { selA.dispatchEvent(new Event('change')); };
    $('#cmpSwap').addEventListener('click', () => {
      const t = selA.value; selA.value = selB.value; selB.value = t; fire();
    });
    $('#cmpRand').addEventListener('click', () => {
      const n = selA.options.length;
      const i = Math.floor(Math.random() * n);
      let j = Math.floor(Math.random() * n);
      if (j === i) j = (j + 1) % n;
      selA.selectedIndex = i; selB.selectedIndex = j; fire();
    });
    $('#cmpLink').addEventListener('click', () => {
      const url = `${location.origin}${location.pathname}?a=${selA.value}&b=${selB.value}`;
      (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
        .then(() => toast('Ссылка скопирована'))
        .catch(() => toast('Не удалось скопировать ссылку'));
    });
    $('#cmpDiff').addEventListener('change', (e) => {
      const t = $('#compareTable .compare-table, #compareTable') ;
      table.classList.toggle('show-diff', e.target.checked);
      void t;
    });

    function markDiff() {
      table.querySelectorAll('.compare-row').forEach((row) => {
        const v = row.querySelectorAll('span');
        if (v.length < 2) return;
        const same = v[0].textContent.trim() === v[1].textContent.trim();
        row.classList.toggle('same', same);
        row.classList.toggle('diff', !same);
      });
    }
    new MutationObserver(markDiff).observe(table, { childList: true });
    markDiff();
  }
})();

