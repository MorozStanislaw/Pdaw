// Общие элементы сайта: шапка, навигация и подвал.
// Они создаются здесь один раз, чтобы не дублировать разметку на каждой странице.
(() => {
  const page = document.body.dataset.page || 'index';
  const pages = [
    ['index', 'Главная', 'index.html'],
    ['smartphones', 'Смартфоны', 'smartphones.html'],
    ['compare', 'Сравнение', 'compare.html'],
    ['about', 'О Galaxy', 'about.html'],
    ['contact', 'Контакты', 'contact.html']
  ];

  const links = pages.map(([id, title, href]) =>
    `<a${page === id ? ' class="active Red-text-acasa"' : ''} href="${href}">${title}</a>`
  ).join('\n');

  const tools = ['index', 'compare'].includes(page) ? `
    <div class="header-tools">
      <a aria-label="Поиск" class="header-icon" href="smartphones.html">⌕</a>
      <a aria-label="Избранное" class="header-icon favorite-link" href="smartphones.html">
        ♡ <span id="favCount">0</span>
      </a>
    </div>` : '';

  const header = document.getElementById('siteHeader');
  if (header) header.outerHTML = `
    <div class="Bara-de-sus">
      <div class="ContactNav">
        <span>Учебный проект · <span class="Red-text">IT11Z</span></span>
        <a href="contact.html">Moroz Stanislav · Контакты</a>
      </div>
    </div>
    <header class="site-header">
      <a class="Logo" href="index.html"><b>Samsung</b><span>Galaxy</span></a>
      <button aria-label="Открыть меню" aria-expanded="false" class="menu-toggle">☰</button>
      <nav class="nav">${links}</nav>
      ${tools}
    </header>`;

  const footer = document.getElementById('siteFooter');
  if (footer) footer.outerHTML = `
    <footer><p>© 2026 Samsung Galaxy — учебный проект${page === 'index' ? ' Moroz Stanislav, IT11Z' : ''}</p></footer>`;
})();

