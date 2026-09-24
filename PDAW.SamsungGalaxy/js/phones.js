const PHONES = [
  {id:'s26u',name:'Galaxy S26 Ultra',series:'S',screen:'6.9″',battery:'5000 мА·ч',camera:'200 МП + 50 МП + 50 МП + 10 МП',storage:'256 ГБ / 512 ГБ / 1 ТБ',weight:'214 г',desc:'Флагман 2026 года с S Pen, камерой 200 МП и Privacy Display.',image:'images/s26-ultra-hero.png',tag:'Флагман 2026'},
  {id:'s26p',name:'Galaxy S26+',series:'S',screen:'6.7″',battery:'4900 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'256 ГБ / 512 ГБ',weight:'190 г',desc:'Большой флагман с 120 Гц, Galaxy AI и мощной камерой.',image:'https://cdn.shopify.com/s/files/1/0641/9388/8321/files/50097882_1045496.png?v=1776334774',tag:'Новинка'},
  {id:'s26',name:'Galaxy S26',series:'S',screen:'6.3″',battery:'4300 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'256 ГБ / 512 ГБ',weight:'167 г',desc:'Компактный флагман с 120 Гц и Galaxy AI.',image:'https://media.falabella.com/falabellaCO/73555662_1/w%3D1500%2Ch%3D1500%2Cfit%3Dcover',tag:'Новинка'},
  {id:'s26fe',name:'Galaxy S26 FE',series:'S',screen:'6.7″',battery:'4900 мА·ч',camera:'50 МП + 12 МП + 8 МП',storage:'128 ГБ / 256 ГБ',weight:'193 г',desc:'FE-модель с Dynamic AMOLED 2X, 120 Гц и Galaxy AI.',image:'https://shop.samsung.com/latin/pub/media/catalog/product/s/m/sm-s741_galaxys26fe_001_1.png',tag:'FE'},
  {id:'s25u',name:'Galaxy S25 Ultra',series:'S',screen:'6.9″',battery:'5000 мА·ч',camera:'200 МП + 50 МП + 10 МП + 12 МП',storage:'256 ГБ / 512 ГБ / 1 ТБ',weight:'218 г',desc:'Ultra-модель с титановой рамкой, S Pen и Galaxy AI.',image:'https://i5.walmartimages.com/asr/415944aa-6bb5-44b1-a360-0945a3ebd6ca.f9b2c310bba7a57032ca55e2ad5dc8e5.jpeg?odnBg=FFFFFF&odnHeight=2000&odnWidth=2000',tag:'Ultra'},
  {id:'s25p',name:'Galaxy S25+',series:'S',screen:'6.7″',battery:'4900 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'256 ГБ / 512 ГБ',weight:'190 г',desc:'Большой Dynamic AMOLED 2X экран и флагманская производительность.',image:'https://images.samsung.com/cl/smartphones/galaxy-s25/buy/product_color_silverShadow_plus_PC.png',tag:'S-серия'},
  {id:'s25',name:'Galaxy S25',series:'S',screen:'6.2″',battery:'4000 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'128 ГБ / 256 ГБ / 512 ГБ',weight:'162 г',desc:'Компактный Galaxy с Snapdragon 8 Elite for Galaxy и Galaxy AI.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-dtw89gd8zop3d7cny00jat2_set-cut-all_00_thumb_1.png',tag:'S-серия'},
  {id:'s25fe',name:'Galaxy S25 FE',series:'S',screen:'6.7″',battery:'4900 мА·ч',camera:'50 МП + 12 МП + 8 МП',storage:'128 ГБ / 256 ГБ',weight:'190 г',desc:'Тонкий FE-смартфон с Dynamic AMOLED 2X, Galaxy AI и IP68.',image:'https://samsungbrshop.vtexassets.com/arquivos/ids/272379-800-auto?v=638971929273470000',tag:'FE'},
  {id:'s24u',name:'Galaxy S24 Ultra',series:'S',screen:'6.8″',battery:'5000 мА·ч',camera:'200 МП + 50 МП + 10 МП + 12 МП',storage:'256 ГБ / 512 ГБ / 1 ТБ',weight:'232 г',desc:'Ultra-модель с титановой рамкой, S Pen и Galaxy AI.',image:'https://images.samsung.com/ru/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv.jpg?imbypass=true',tag:'Ultra'},
  {id:'s24',name:'Galaxy S24',series:'S',screen:'6.2″',battery:'4000 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'128 ГБ / 256 ГБ',weight:'167 г',desc:'Компактный флагман 2024 года с Galaxy AI и 120 Гц.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/0/0/00-sm-s921_galaxys24_all-logo_thumb.png',tag:'S-серия'},
  {id:'s23p',name:'Galaxy S23+',series:'S',screen:'6.6″',battery:'4700 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'256 ГБ / 512 ГБ',weight:'196 г',desc:'Большой флагман 2023 года с AMOLED 120 Гц и тройной камерой.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/0/0/00-diamont-sm-s916_galaxys23plus_all-name_thumb_4_1_1.png',tag:'S-серия'},
  {id:'s23',name:'Galaxy S23',series:'S',screen:'6.1″',battery:'3900 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'128 ГБ / 256 ГБ',weight:'168 г',desc:'Компактный флагман с Snapdragon 8 Gen 2 for Galaxy.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/0/0/00-diamot-sm-s911_galaxys23_all-name_thumb_3.png',tag:'S-серия'},
  {id:'s23fe',name:'Galaxy S23 FE',series:'S',screen:'6.4″',battery:'4500 мА·ч',camera:'50 МП + 12 МП + 8 МП',storage:'128 ГБ / 256 ГБ',weight:'209 г',desc:'FE-версия с большим AMOLED 120 Гц и флагманским набором камер.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-s711_thumb.png',tag:'FE'},
  {id:'fold7',name:'Galaxy Z Fold7',series:'Z',screen:'8.0″ внутри / 6.5″ снаружи',battery:'4400 мА·ч',camera:'200 МП + 10 МП + 12 МП',storage:'256 ГБ / 512 ГБ / 1 ТБ',weight:'215 г',desc:'Большой складной Galaxy с экраном 8″ и камерой 200 МП.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-f966_all-name_thumb.png',tag:'Foldable'},
  {id:'flip7',name:'Galaxy Z Flip7',series:'Z',screen:'6.9″ + 4.1″',battery:'4300 мА·ч',camera:'50 МП + 12 МП',storage:'256 ГБ / 512 ГБ',weight:'188 г',desc:'Компактный складной смартфон с FlexWindow и FlexCam.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-f766_set-cut-all-2_thumb.png',tag:'Foldable'},
  {id:'fold6',name:'Galaxy Z Fold6',series:'Z',screen:'7.6″ внутри / 6.3″ снаружи',battery:'4400 мА·ч',camera:'50 МП + 12 МП + 10 МП',storage:'256 ГБ / 512 ГБ / 1 ТБ',weight:'239 г',desc:'Складной смартфон для многозадачности с большим внутренним экраном.',image:'https://shop.samsung.com/latin/pub/media/catalog/product/0/0/000-onlineexclusive_sm-f956_zfold6_all-name2_thumb_2_.png',tag:'Foldable'},
  {id:'a57',name:'Galaxy A57 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 12 МП + 5 МП',storage:'128 ГБ / 256 ГБ / 512 ГБ',weight:'—',desc:'Новая A-серия с Super AMOLED Plus 120 Гц и AI-функциями.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-a576_galaxya57_5g_set-cut-all-01_thumb_3.png',tag:'A-серия 2026'},
  {id:'a56',name:'Galaxy A56 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 12 МП + 5 МП',storage:'128 ГБ / 256 ГБ',weight:'198 г',desc:'Популярная A-серия с Super AMOLED, 120 Гц и Galaxy AI.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/0/0/001-galaxy-a56-5g-set-cut-all_thumb.png',tag:'A-серия'},
  {id:'a55',name:'Galaxy A55 5G',series:'A',screen:'6.6″',battery:'5000 мА·ч',camera:'50 МП + 12 МП + 5 МП',storage:'128 ГБ / 256 ГБ',weight:'213 г',desc:'A-серия с металлической рамкой, Super AMOLED 120 Гц и IP67.',image:'https://images.samsung.com/is/image/samsung/assets/ua/moldova/galaxy-a55-a35/a55_1.jpg',tag:'A-серия'},
  {id:'a37',name:'Galaxy A37 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 8 МП + 5 МП',storage:'128 ГБ / 256 ГБ',weight:'—',desc:'Сбалансированная модель с Super AMOLED FHD+ 120 Гц.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-a376_galaxya37_5g_set-cut-all_2_thumb_1.png',tag:'A-серия 2026'},
  {id:'a36',name:'Galaxy A36 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 8 МП + 5 МП',storage:'128 ГБ / 256 ГБ',weight:'195 г',desc:'Яркий Super AMOLED 120 Гц, IP67 и быстрая зарядка 45 Вт.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-a366_ep-t2510nbtgtw_thumb.png',tag:'A-серия'},
  {id:'a35',name:'Galaxy A35 5G',series:'A',screen:'6.6″',battery:'5000 мА·ч',camera:'50 МП + 8 МП + 5 МП',storage:'128 ГБ / 256 ГБ',weight:'209 г',desc:'Super AMOLED 120 Гц, камера 50 МП с OIS и защита IP67.',image:'https://images.samsung.com/is/image/samsung/assets/ua/moldova/galaxy-a55-a35/a35_1.jpg',tag:'A-серия'},
  {id:'a27',name:'Galaxy A27 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 8 МП + 2 МП',storage:'128 ГБ',weight:'—',desc:'Доступная модель с Super AMOLED 120 Гц и защитой IP64.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/s/m/sm-a276_galaxya27_5g_setcut-all_00_thumb_1.png',tag:'A-серия'},
  {id:'a26',name:'Galaxy A26 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 8 МП + 2 МП',storage:'128 ГБ / 256 ГБ',weight:'—',desc:'Большой Super AMOLED 120 Гц и основная камера 50 МП.',image:'https://shop.samsung.com/latin/cac/pub/media/catalog/product/0/0/001-galaxy-a26-5g_set-cut-all_thumb.png',tag:'A-серия'},
  {id:'a17',name:'Galaxy A17 5G',series:'A',screen:'6.7″',battery:'5000 мА·ч',camera:'50 МП + 5 МП + 2 МП',storage:'128 ГБ',weight:'—',desc:'Практичный Galaxy для повседневных задач с Super AMOLED.',image:'https://shop.samsung.com/latin/pub/media/catalog/product/s/m/sm-a175_galaxy-a17_5g_00_thumb_1.png',tag:'A-серия'}
];

const EXTRA_SPECS = {
  s26u:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Elite Gen 5 for Galaxy',ram:'12 / 16 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 16 · One UI 8',frontCamera:'12 МП',ai:'Galaxy AI',pen:'S Pen'},
  s26p:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Elite Gen 5 for Galaxy',ram:'12 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 16 · One UI 8',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s26:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Exynos 2600',ram:'12 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 16 · One UI 8',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s26fe:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Exynos 2500',ram:'8 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 6E · NFC',os:'Android 16 · One UI 8',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s25u:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Elite for Galaxy',ram:'12 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 15 · One UI 7',frontCamera:'12 МП',ai:'Galaxy AI',pen:'S Pen'},
  s25p:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Elite for Galaxy',ram:'12 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 15 · One UI 7',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s25:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Elite for Galaxy',ram:'12 ГБ',charging:'25 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 15 · One UI 7',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s25fe:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Exynos 2400',ram:'8 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 6E · NFC',os:'Android 15 · One UI 7',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s24u:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Gen 3 for Galaxy',ram:'12 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 7 · NFC',os:'Android 14 · One UI 6.1',frontCamera:'12 МП',ai:'Galaxy AI',pen:'S Pen'},
  s24:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Gen 3 / Exynos 2400',ram:'8 ГБ',charging:'25 Вт',protection:'IP68',network:'5G · Wi‑Fi 6E · NFC',os:'Android 14 · One UI 6.1',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  s23p:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Gen 2 for Galaxy',ram:'8 ГБ',charging:'45 Вт',protection:'IP68',network:'5G · Wi‑Fi 6E · NFC',os:'Android 13 · One UI',frontCamera:'12 МП',ai:'Galaxy AI features',pen:'Нет'},
  s23:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Gen 2 for Galaxy',ram:'8 ГБ',charging:'25 Вт',protection:'IP68',network:'5G · Wi‑Fi 6E · NFC',os:'Android 13 · One UI',frontCamera:'12 МП',ai:'Galaxy AI features',pen:'Нет'},
  s23fe:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Exynos 2200',ram:'8 ГБ',charging:'25 Вт',protection:'IP68',network:'5G · Wi‑Fi 6E · NFC',os:'Android 13 · One UI',frontCamera:'10 МП',ai:'Galaxy AI features',pen:'Нет'},
  fold7:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Elite for Galaxy',ram:'12 ГБ',charging:'25 Вт',protection:'IP48',network:'5G · Wi‑Fi 7 · NFC',os:'Android 16 · One UI',frontCamera:'10 МП',ai:'Galaxy AI',pen:'Нет'},
  flip7:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Exynos 2500',ram:'12 ГБ',charging:'25 Вт',protection:'IP48',network:'5G · Wi‑Fi 7 · NFC',os:'Android 16 · One UI',frontCamera:'10 МП',ai:'Galaxy AI',pen:'Нет'},
  fold6:{display:'Dynamic AMOLED 2X',refresh:'120 Гц',processor:'Snapdragon 8 Gen 3 for Galaxy',ram:'12 ГБ',charging:'25 Вт',protection:'IP48',network:'5G · Wi‑Fi 6E · NFC',os:'Android 14 · One UI',frontCamera:'10 МП',ai:'Galaxy AI',pen:'Поддержка S Pen'},
  a57:{display:'Super AMOLED Plus',refresh:'120 Гц',processor:'Exynos 1680',ram:'8 / 12 ГБ',charging:'45 Вт',protection:'IP67',network:'5G · Wi‑Fi · NFC',os:'Android 16 · One UI',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  a56:{display:'Super AMOLED',refresh:'120 Гц',processor:'Exynos 1580',ram:'8 / 12 ГБ',charging:'45 Вт',protection:'IP67',network:'5G · Wi‑Fi 6 · NFC',os:'Android 15 · One UI',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  a55:{display:'Super AMOLED',refresh:'120 Гц',processor:'Exynos 1480',ram:'8 / 12 ГБ',charging:'25 Вт',protection:'IP67',network:'5G · Wi‑Fi 6 · NFC',os:'Android 14 · One UI',frontCamera:'32 МП',ai:'Galaxy AI features',pen:'Нет'},
  a37:{display:'Super AMOLED',refresh:'120 Гц',processor:'Exynos 1480',ram:'8 ГБ',charging:'45 Вт',protection:'IP67',network:'5G · Wi‑Fi · NFC',os:'Android 16 · One UI',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  a36:{display:'Super AMOLED',refresh:'120 Гц',processor:'Snapdragon 6 Gen 3',ram:'6 / 8 ГБ',charging:'45 Вт',protection:'IP67',network:'5G · Wi‑Fi · NFC',os:'Android 15 · One UI',frontCamera:'12 МП',ai:'Galaxy AI',pen:'Нет'},
  a35:{display:'Super AMOLED',refresh:'120 Гц',processor:'Exynos 1380',ram:'6 / 8 ГБ',charging:'25 Вт',protection:'IP67',network:'5G · Wi‑Fi 6 · NFC',os:'Android 14 · One UI',frontCamera:'13 МП',ai:'Galaxy AI features',pen:'Нет'},
  a27:{display:'Super AMOLED',refresh:'120 Гц',processor:'Exynos',ram:'6 / 8 ГБ',charging:'25 Вт',protection:'IP64',network:'5G · Wi‑Fi · NFC',os:'Android · One UI',frontCamera:'13 МП',ai:'Galaxy AI features',pen:'Нет'},
  a26:{display:'Super AMOLED',refresh:'120 Гц',processor:'Exynos 1380',ram:'6 / 8 ГБ',charging:'25 Вт',protection:'IP67',network:'5G · Wi‑Fi · NFC',os:'Android 15 · One UI',frontCamera:'13 МП',ai:'Galaxy AI features',pen:'Нет'},
  a17:{display:'Super AMOLED',refresh:'90 Гц',processor:'Exynos / MediaTek',ram:'4 / 6 ГБ',charging:'25 Вт',protection:'IP54',network:'5G · Wi‑Fi · NFC',os:'Android · One UI',frontCamera:'13 МП',ai:'Galaxy AI features',pen:'Нет'}
};
PHONES.forEach(p=>Object.assign(p,EXTRA_SPECS[p.id]||{}));

function getFavs(){
  try { return JSON.parse(localStorage.getItem('galaxyFavs') || '[]'); }
  catch { return []; }
}

function toggleFav(id,btn){
  let f=getFavs();
  f=f.includes(id)?f.filter(x=>x!==id):[...f,id];
  localStorage.setItem('galaxyFavs',JSON.stringify(f));
  btn.classList.toggle('saved',f.includes(id));
  btn.textContent=f.includes(id)?'♥':'♡';
  updateFavCount();
  showToast(f.includes(id)?'Добавлено в избранное':'Удалено из избранного');
}

function updateFavCount(){
  const el=document.getElementById('favCount');
  if(el) el.textContent=getFavs().length;
}

function showToast(message){
  let toast=document.getElementById('siteToast');
  if(!toast){toast=document.createElement('div');toast.id='siteToast';toast.className='site-toast';document.body.appendChild(toast);}
  toast.textContent=message;toast.classList.add('show');
  clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>toast.classList.remove('show'),1800);
}

function renderPhones(list){
  const grid=document.getElementById('phoneGrid'); if(!grid)return;
  document.getElementById('resultCount').textContent=`Найдено моделей: ${list.length}`;
  if(!list.length){grid.innerHTML='<div class="empty-state"><strong>Ничего не найдено</strong><span>Попробуй изменить запрос или фильтр.</span></div>';return;}
  grid.innerHTML=list.map(p=>`<article class="phone-card"><div class="phone-image"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.closest('.phone-image').classList.add('image-error');this.style.display='none'">${p.tag?`<span class="phone-tag">${p.tag}</span>`:''}</div><div class="phone-card-body"><span class="series-pill">Galaxy ${p.series}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="mini-specs"><span>${p.screen}</span><span>${p.camera.split(' + ')[0]}</span><span>${p.battery}</span></div><div class="card-actions"><button class="btn-small details-btn" data-id="${p.id}">Подробнее</button><button class="fav-btn ${getFavs().includes(p.id)?'saved':''}" data-id="${p.id}" aria-label="Избранное">${getFavs().includes(p.id)?'♥':'♡'}</button></div></div></article>`).join('');
  grid.querySelectorAll('.details-btn').forEach(b=>b.addEventListener('click',()=>openPhone(b.dataset.id)));
  grid.querySelectorAll('.fav-btn').forEach(b=>b.addEventListener('click',()=>toggleFav(b.dataset.id,b)));
}

function openPhone(id){
  const p=PHONES.find(x=>x.id===id);const modal=document.getElementById('phoneModal');const c=document.getElementById('modalContent');if(!p||!modal||!c)return;
  c.innerHTML=`<div class="modal-phone"><div class="modal-image-wrap"><img src="${p.image}" alt="${p.name}"></div><div><span class="series-pill">Galaxy ${p.series}</span><h2>${p.name}</h2><p>${p.desc}</p><div class="detail-list"><div><b>Дисплей</b><span>${p.screen} · ${p.display||'AMOLED'}</span></div><div><b>Камеры</b><span>${p.camera} · фронтальная ${p.frontCamera||'12 МП'}</span></div><div><b>Процессор</b><span>${p.processor||'Galaxy chipset'}</span></div><div><b>ОЗУ</b><span>${p.ram||'8 ГБ'}</span></div><div><b>Батарея</b><span>${p.battery} · ${p.charging||'быстрая зарядка'}</span></div><div><b>Память</b><span>${p.storage}</span></div><div><b>Защита</b><span>${p.protection||'—'}</span></div><div><b>Вес</b><span>${p.weight}</span></div></div><div class="modal-actions"><button class="btn btn-light" id="modalCompare">Сравнить</button><button class="btn btn-ghost" id="modalFav">${getFavs().includes(p.id)?'♥ В избранном':'♡ В избранное'}</button></div></div></div>`;
  modal.classList.add('show');modal.setAttribute('aria-hidden','false');
  document.getElementById('modalCompare').addEventListener('click',()=>location.href=`compare.html?a=${p.id}`);
  document.getElementById('modalFav').addEventListener('click',()=>{const btn=document.querySelector(`.fav-btn[data-id="${p.id}"]`);if(btn)toggleFav(p.id,btn);document.getElementById('modalFav').textContent=getFavs().includes(p.id)?'♥ В избранном':'♡ В избранное';});
}

function initCatalog(){
  const q=document.getElementById('searchInput'),s=document.getElementById('seriesFilter'),sort=document.getElementById('sortFilter');if(!q)return;
  const params=new URLSearchParams(location.search);if(params.get('series'))s.value=params.get('series');if(params.get('focus')){const fp=PHONES.find(p=>p.id===params.get('focus'));if(fp)q.value=fp.name;}
  function update(){
    let list=PHONES.filter(p=>(s.value==='all'||p.series===s.value)&&p.name.toLowerCase().includes(q.value.trim().toLowerCase()));
    if(sort.value==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
    if(sort.value==='screen')list.sort((a,b)=>parseFloat(b.screen)-parseFloat(a.screen));
    if(sort.value==='series')list.sort((a,b)=>a.series.localeCompare(b.series)||a.name.localeCompare(b.name));
    renderPhones(list);
  }
  [q,s,sort].forEach(x=>x.addEventListener('input',update));
  update();
  document.querySelector('.modal-close')?.addEventListener('click',()=>closeModal());
  document.getElementById('phoneModal')?.addEventListener('click',e=>{if(e.target.id==='phoneModal')closeModal()});
}
function closeModal(){const m=document.getElementById('phoneModal');if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true')}}

function initCompare(){
  const a=document.getElementById('compareA'),b=document.getElementById('compareB');if(!a)return;
  const options=PHONES.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');a.innerHTML=options;b.innerHTML=options;
  const params=new URLSearchParams(location.search);a.value=params.get('a')||'s26u';b.value=params.get('b')||'s26';
  const rows=[
    ['Серия',(p)=>`Galaxy ${p.series}`],['Экран',(p)=>`${p.screen} · ${p.display||'AMOLED'}`],['Частота',(p)=>p.refresh||'120 Гц'],['Процессор',(p)=>p.processor||'Galaxy chipset'],['ОЗУ',(p)=>p.ram||'8 ГБ'],['Основные камеры',(p)=>p.camera],['Фронтальная камера',(p)=>p.frontCamera||'12 МП'],['Батарея',(p)=>p.battery],['Зарядка',(p)=>p.charging||'Быстрая зарядка'],['Память',(p)=>p.storage],['Защита',(p)=>p.protection||'—'],['Связь',(p)=>p.network||'5G / Wi‑Fi'],['ОС',(p)=>p.os||'Android / One UI'],['Galaxy AI',(p)=>p.ai||'Поддерживается'],['S Pen',(p)=>p.pen||'Нет'],['Вес',(p)=>p.weight]
  ];
  function draw(){
    const x=PHONES.find(p=>p.id===a.value),y=PHONES.find(p=>p.id===b.value);if(!x||!y)return;
    const rowHtml=rows.map(([label,get])=>`<div class="compare-row"><strong>${label}</strong><span>${get(x)}</span><span>${get(y)}</span></div>`).join('');
    document.getElementById('compareTable').innerHTML=`<div class="compare-head"><div class="compare-label">Параметр</div><div><div class="compare-image"><img src="${x.image}" alt="${x.name}"></div><span class="series-pill">Galaxy ${x.series}</span><h2>${x.name}</h2><a href="smartphones.html?focus=${x.id}">Открыть модель →</a></div><div><div class="compare-image"><img src="${y.image}" alt="${y.name}"></div><span class="series-pill">Galaxy ${y.series}</span><h2>${y.name}</h2><a href="smartphones.html?focus=${y.id}">Открыть модель →</a></div></div>${rowHtml}`;
    document.getElementById('compareSummary').innerHTML=`<div><span>Параметров</span><b>${rows.length}</b></div><div><span>Модель A</span><b>${x.name.replace('Galaxy ','')}</b></div><div><span>Модель B</span><b>${y.name.replace('Galaxy ','')}</b></div>`;
  }
  [a,b].forEach(x=>x.addEventListener('change',draw));draw();
}

function initHome(){
  const grid=document.getElementById('homePhoneGrid');if(!grid)return;
  const ids=['s26u','s26fe','s25u','s25','fold7','flip7','a57','a55'];
  const list=ids.map(id=>PHONES.find(p=>p.id===id)).filter(Boolean);
  grid.innerHTML=list.map(p=>`<article class="home-phone-card"><div class="home-phone-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div><span class="series-pill">Galaxy ${p.series}</span><h3>${p.name}</h3><button class="home-details" data-id="${p.id}">Подробнее →</button></div></article>`).join('');
  grid.querySelectorAll('.home-details').forEach(btn=>btn.addEventListener('click',()=>location.href=`smartphones.html?focus=${btn.dataset.id}`));
}

function initFocusPhone(){
  const params=new URLSearchParams(location.search),focus=params.get('focus');if(!focus)return;
  const phone=PHONES.find(p=>p.id===focus);if(!phone)return;
  const q=document.getElementById('searchInput');if(q){q.value=phone.name;}
}

initCatalog();initCompare();initHome();updateFavCount();
