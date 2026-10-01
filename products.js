const PRODUCTS = [{"n":"7 CM ELECTRIC SPARKLERS","c":"Sparklers","p":"1 BOX","r":100.0,"o":10.0},{"n":"7 CM COLOUR SPARKLERS","c":"Sparklers","p":"1 BOX","r":110.0,"o":11.0},{"n":"7 CM RED SPARKLERS","c":"Sparklers","p":"1 BOX","r":120.0,"o":12.0},{"n":"7 CM GREEN SPARKLERS","c":"Sparklers","p":"1 BOX","r":140.0,"o":14.0},{"n":"10 CM ELECTRIC SPARKLERS","c":"Sparklers","p":"1 BOX","r":150.0,"o":15.0},{"n":"10 CM COLOUR SPARKLERS","c":"Sparklers","p":"1 BOX","r":170.0,"o":17.0},{"n":"10 CM RED SPARKLERS","c":"Sparklers","p":"1 BOX","r":190.0,"o":19.0},{"n":"10 CM GREEN SPARKLERS","c":"Sparklers","p":"1 BOX","r":200.0,"o":20.0},{"n":"12 CM ELECTRIC SPARKLERS","c":"Sparklers","p":"1 BOX","r":250.0,"o":25.0},{"n":"12 CM CRACKLING SPARKLERS","c":"Sparklers","p":"1 BOX","r":280.0,"o":28.0},{"n":"12 CM GREEN SPARKLERS","c":"Sparklers","p":"1 BOX","r":300.0,"o":30.0},{"n":"12 CM SUN RED SPARKLERS","c":"Sparklers","p":"1 BOX","r":340.0,"o":34.0},{"n":"15 CM ELECTRIC SPARKLERS","c":"Sparklers","p":"1 BOX","r":400.0,"o":40.0},{"n":"15 CM CRACKLING SPARKLERS","c":"Sparklers","p":"1 BOX","r":440.0,"o":44.0},{"n":"15 CM GREEN SPARKLERS","c":"Sparklers","p":"1 BOX","r":460.0,"o":46.0},{"n":"15 CM RED SPARKLERS","c":"Sparklers","p":"1 BOX","r":480.0,"o":48.0},{"n":"30 CM ELECTRIC SPARKLERS","c":"Sparklers","p":"1 BOX","r":400.0,"o":40.0},{"n":"30 CM CRACKLING","c":"Sparklers","p":"1 BOX","r":440.0,"o":44.0},{"n":"30 CM GREEN SPARKLERS","c":"Sparklers","p":"1 BOX","r":460.0,"o":46.0},{"n":"30 CM RED SPARKLERS","c":"Sparklers","p":"1 BOX","r":480.0,"o":48.0},{"n":"50 CM ELECTRIC SPARKLERS","c":"Sparklers","p":"1 TUBE","r":1900.0,"o":190.0},{"n":"50 CM CRACKLING","c":"Sparklers","p":"1 TUBE","r":2000.0,"o":200.0},{"n":"75 CM COLOUR SPARKLERS","c":"Sparklers","p":"1 TUBE","r":2600.0,"o":260.0},{"n":"ROTATING SPARKLERS","c":"Sparklers","p":"1 TUBE","r":1850.0,"o":185.0},{"n":"50 RED BIJILI","c":"Bijili","p":"1 PKT","r":200.0,"o":20.0},{"n":"100 RED BIJILI","c":"Bijili","p":"1 PKT","r":400.0,"o":40.0},{"n":"100 STRIPED RED BIJILI","c":"Bijili","p":"1 PKT","r":600.0,"o":60.0},{"n":"HYDRO BOMB","c":"Bombs","p":"1 BOX","r":1000.0,"o":100.0},{"n":"CLASSIC BOMB","c":"Bombs","p":"1 BOX","r":1400.0,"o":140.0},{"n":"KING OF KING BOMB","c":"Bombs","p":"1 BOX","r":1200.0,"o":120.0},{"n":"ATOM BOMB","c":"Bombs","p":"1 BOX","r":1000.0,"o":100.0},{"n":"BULLET BOMB","c":"Bombs","p":"1 BOX","r":500.0,"o":50.0},{"n":"MILITERY BOMB","c":"Bombs","p":"1 BOX","r":700.0,"o":70.0},{"n":"AVATAR PAPER BOMB 10 PCS","c":"Bombs","p":"1 BOX","r":3000.0,"o":300.0},{"n":"ADIYAL PAPER BOMB 1/4 KG","c":"Bombs","p":"1 BOX","r":500.0,"o":50.0},{"n":"ADIYAL PAPER BOMB 1/2 KG","c":"Bombs","p":"1 BOX","r":1000.0,"o":100.0},{"n":"ADIYAL PAPER BOMB 1 KG","c":"Bombs","p":"1 BOX","r":2000.0,"o":200.0},{"n":"FLOWER POTS SMALL","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":500.0,"o":50.0},{"n":"FLOWER POTS SPECIAL","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":1000.0,"o":100.0},{"n":"FLOWER POTS ASHOKA","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":1200.0,"o":120.0},{"n":"FLOWER POTS COLOUR KOTI","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":2000.0,"o":200.0},{"n":"GROUND CHAKKAR BIG","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":350.0,"o":35.0},{"n":"GROUND CHAKKAR SPECIAL","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":600.0,"o":60.0},{"n":"GROUND CHAKKAR DELUXE","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":1200.0,"o":120.0},{"n":"WIRE CHAKKAR","c":"Ground Chakkars & Flower Pots","p":"1 BOX","r":1800.0,"o":180.0},{"n":"SELFIE STICK (3PCS)","c":"Candles","p":"1 BOX","r":500.0,"o":50.0},{"n":"AMAZING CANDLE (3PCS)","c":"Candles","p":"1 BOX","r":1000.0,"o":100.0},{"n":"JELLY BEAN CANDLE (3PCS)","c":"Candles","p":"1 BOX","r":1000.0,"o":100.0},{"n":"POWERFUL CANDLE (2PCS)","c":"Candles","p":"1 BOX","r":2000.0,"o":200.0},{"n":"WATERFALL CANDLE","c":"Candles","p":"1 BOX","r":2400.0,"o":240.0},{"n":"1 1/2\" TWINKLING STAR","c":"Twinkling Stars & Blast","p":"1 BOX","r":250.0,"o":25.0},{"n":"4\" TWINKLING STAR","c":"Twinkling Stars & Blast","p":"1 BOX","r":650.0,"o":65.0},{"n":"1K BLAST","c":"Twinkling Stars & Blast","p":"1 BOX","r":1800.0,"o":180.0},{"n":"2K BLAST","c":"Twinkling Stars & Blast","p":"1 BOX","r":3600.0,"o":360.0},{"n":"5K BLAST","c":"Twinkling Stars & Blast","p":"1 BOX","r":9000.0,"o":900.0},{"n":"10K BLAST","c":"Twinkling Stars & Blast","p":"1 BOX","r":18000.0,"o":1800.0},{"n":"24 DLX","c":"Twinkling Stars & Blast","p":"1 PKT","r":400.0,"o":40.0},{"n":"28 DLX","c":"Twinkling Stars & Blast","p":"1 PKT","r":500.0,"o":50.0},{"n":"50 DLX","c":"Twinkling Stars & Blast","p":"1 PKT","r":900.0,"o":90.0},{"n":"2 3/4 KURUVI","c":"Sound Crackers","p":"1 PKT","r":90.0,"o":9.0},{"n":"3 1/2 LAKSHMI","c":"Sound Crackers","p":"1 PKT","r":130.0,"o":13.0},{"n":"4\" LAKSHMI","c":"Sound Crackers","p":"1 PKT","r":180.0,"o":18.0},{"n":"4\" HULK DLX","c":"Sound Crackers","p":"1 PKT","r":250.0,"o":25.0},{"n":"4\" GOLD LAKSHMI","c":"Sound Crackers","p":"1 PKT","r":350.0,"o":35.0},{"n":"5\" JALLIKATTU","c":"Sound Crackers","p":"1 PKT","r":450.0,"o":45.0},{"n":"6\" BAHUBALI","c":"Sound Crackers","p":"1 PKT","r":600.0,"o":60.0},{"n":"BABY ROCKET","c":"Rockets","p":"1 BOX","r":450.0,"o":45.0},{"n":"LUNIK ROCKET","c":"Rockets","p":"1 BOX","r":1500.0,"o":150.0},{"n":"WISHTLING ROCKET","c":"Rockets","p":"1 BOX","r":2000.0,"o":200.0},{"n":"7 SHOT","c":"Aerial Shots","p":"1 BOX","r":1200.0,"o":120.0},{"n":"12 SHOT","c":"Aerial Shots","p":"1 BOX","r":1700.0,"o":170.0},{"n":"15 SHOT","c":"Aerial Shots","p":"1 BOX","r":2500.0,"o":250.0},{"n":"30 SHOT","c":"Aerial Shots","p":"1 BOX","r":4000.0,"o":400.0},{"n":"60 SHOT","c":"Aerial Shots","p":"1 BOX","r":8000.0,"o":800.0},{"n":"120 SHOT","c":"Aerial Shots","p":"1 BOX","r":16000.0,"o":1600.0},{"n":"240 SHOT","c":"Aerial Shots","p":"1 BOX","r":32000.0,"o":3200.0},{"n":"50 SHOT","c":"Aerial Shots","p":"1 BOX","r":5500.0,"o":550.0},{"n":"30 SHOT","c":"Aerial Shots","p":"1 BOX","r":3800.0,"o":380.0},{"n":"60 SHOT","c":"Aerial Shots","p":"1 BOX","r":7200.0,"o":720.0},{"n":"120 SHOT","c":"Aerial Shots","p":"1 BOX","r":14400.0,"o":1440.0},{"n":"PARTY ZONE (PAPER SHOT)","c":"Aerial Shots","p":"1 BOX","r":2500.0,"o":250.0},{"n":"15 SMOKE","c":"Aerial Shots","p":"1 BOX","r":4000.0,"o":400.0},{"n":"12 SHOT","c":"Aerial Shots","p":"1 BOX","r":1700.0,"o":170.0},{"n":"25 SHOT","c":"Aerial Shots","p":"1 BOX","r":4000.0,"o":400.0},{"n":"30 SHOT","c":"Aerial Shots","p":"1 BOX","r":4800.0,"o":480.0},{"n":"60 SHOT","c":"Aerial Shots","p":"1 BOX","r":9600.0,"o":960.0},{"n":"120 SHOT","c":"Aerial Shots","p":"1 BOX","r":19200.0,"o":1920.0},{"n":"CHOTTA FANCY (5PCS)","c":"Fancy & Multi Shots","p":"1 BOX","r":1400.0,"o":140.0},{"n":"2\" SINGLE","c":"Fancy & Multi Shots","p":"1 BOX","r":1000.0,"o":100.0},{"n":"2\" SINGLE","c":"Fancy & Multi Shots","p":"1 BOX","r":1200.0,"o":120.0},{"n":"2\" FANCY (3PCS)","c":"Fancy & Multi Shots","p":"1 BOX","r":2500.0,"o":250.0},{"n":"DOUBLE BALL","c":"Fancy & Multi Shots","p":"1 BOX","r":4200.0,"o":420.0},{"n":"3.5\" FANCY","c":"Fancy & Multi Shots","p":"1 BOX","r":3000.0,"o":300.0},{"n":"4\" FANCY","c":"Fancy & Multi Shots","p":"1 BOX","r":4200.0,"o":420.0},{"n":"2\" SINGLE FANCY","c":"Fancy & Multi Shots","p":"1 BOX","r":1400.0,"o":140.0},{"n":"2\" FANCY (3PCS)","c":"Fancy & Multi Shots","p":"1 BOX","r":2800.0,"o":280.0},{"n":"2\" FANCY CRACKLING (3PCS)","c":"Fancy & Multi Shots","p":"1 BOX","r":2900.0,"o":290.0},{"n":"3 1/2\" FANCY (2PCS)","c":"Fancy & Multi Shots","p":"1 BOX","r":8000.0,"o":800.0},{"n":"4\" NAYAGARA FALLS (2PCS)","c":"Fancy & Multi Shots","p":"1 BOX","r":9800.0,"o":980.0},{"n":"4\" HOT SERIES","c":"Fancy & Multi Shots","p":"1 BOX","r":8200.0,"o":820.0},{"n":"PHOTO FLASH","c":"Fountains, Tins & Rain","p":"1 BOX","r":700.0,"o":70.0},{"n":"PEACOCK FEATHER (5PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":1100.0,"o":110.0},{"n":"GOLDEN DROPS (5PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":1100.0,"o":110.0},{"n":"PINK RAIN (5PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":1900.0,"o":190.0},{"n":"SILVER RAIN (5PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":1700.0,"o":170.0},{"n":"POPCORN (5PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2000.0,"o":200.0},{"n":"TIN GREEN GRAPES","c":"Fountains, Tins & Rain","p":"1 BOX","r":1100.0,"o":110.0},{"n":"TIN WATER MELON","c":"Fountains, Tins & Rain","p":"1 BOX","r":1100.0,"o":110.0},{"n":"TIN SILVER STARS","c":"Fountains, Tins & Rain","p":"1 BOX","r":1100.0,"o":110.0},{"n":"HIGH VOLTAGE TIN (2PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2400.0,"o":240.0},{"n":"LOLIPOP TIN (2PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2400.0,"o":240.0},{"n":"MOJITO TIN (2PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2350.0,"o":235.0},{"n":"PEACOCK TIN (2PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2400.0,"o":240.0},{"n":"POPCORN TIN (2PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2350.0,"o":235.0},{"n":"COCK FIGHT (2PCS)","c":"Fountains, Tins & Rain","p":"1 BOX","r":2400.0,"o":240.0},{"n":"BUTTERFLY","c":"Novelty & Kids Items","p":"1 BOX","r":1000.0,"o":100.0},{"n":"HELICOPTER","c":"Novelty & Kids Items","p":"1 BOX","r":1000.0,"o":100.0},{"n":"LOLIPOP (5 PCS)","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"I CONE (2PCS)","c":"Novelty & Kids Items","p":"1 BOX","r":2300.0,"o":230.0},{"n":"SMOKE","c":"Novelty & Kids Items","p":"1 BOX","r":1400.0,"o":140.0},{"n":"BAT","c":"Novelty & Kids Items","p":"1 BOX","r":2000.0,"o":200.0},{"n":"VEL","c":"Novelty & Kids Items","p":"1 BOX","r":2500.0,"o":250.0},{"n":"WARRIOR SWORD","c":"Novelty & Kids Items","p":"1 BOX","r":1600.0,"o":160.0},{"n":"PAMPARAM","c":"Novelty & Kids Items","p":"1 BOX","r":1000.0,"o":100.0},{"n":"JEE BOOM BAA","c":"Novelty & Kids Items","p":"1 BOX","r":100.0,"o":10.0},{"n":"KIT KAT","c":"Novelty & Kids Items","p":"1 BOX","r":300.0,"o":30.0},{"n":"MINI PEACOCK","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"PADA PEACOCK","c":"Novelty & Kids Items","p":"1 BOX","r":4000.0,"o":400.0},{"n":"WATER MELON","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"LOVE DOSE","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"PARACHUTE","c":"Novelty & Kids Items","p":"1 BOX","r":600.0,"o":60.0},{"n":"TRICOLOUR FOUNTAIN (5PCS)","c":"Novelty & Kids Items","p":"1 BOX","r":2500.0,"o":250.0},{"n":"CYLINDER","c":"Novelty & Kids Items","p":"1 BOX","r":3000.0,"o":300.0},{"n":"EMU EGG","c":"Novelty & Kids Items","p":"1 BOX","r":2400.0,"o":240.0},{"n":"GUN","c":"Novelty & Kids Items","p":"1 BOX","r":2200.0,"o":220.0},{"n":"MONEY BANK","c":"Novelty & Kids Items","p":"1 BOX","r":2350.0,"o":235.0},{"n":"ELECTRIC STONE","c":"Novelty & Kids Items","p":"1 BOX","r":100.0,"o":10.0},{"n":"SNAKE TABLET","c":"Novelty & Kids Items","p":"1 BOX","r":300.0,"o":30.0},{"n":"DISCO WHEEL","c":"Novelty & Kids Items","p":"1 BOX","r":650.0,"o":65.0},{"n":"4 * 4 WHEEL","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"HYBRID SHOWER","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"ROLL CAP","c":"Novelty & Kids Items","p":"1 BOX","r":800.0,"o":80.0},{"n":"ELECTRIC STONE","c":"Novelty & Kids Items","p":"1 BOX","r":150.0,"o":15.0},{"n":"SHINCHAN","c":"Novelty & Kids Items","p":"1 BOX","r":1500.0,"o":150.0},{"n":"PAW PATROL","c":"Novelty & Kids Items","p":"1 BOX","r":1500.0,"o":150.0},{"n":"SPIDERMAN","c":"Novelty & Kids Items","p":"1 BOX","r":1500.0,"o":150.0},{"n":"BRITISH EMPIRE TIN","c":"Branded Tins","p":"1 PCS","r":1200.0,"o":120.0},{"n":"KINGFISHER TIN","c":"Branded Tins","p":"1 PCS","r":1200.0,"o":120.0},{"n":"TUBORG TIN","c":"Branded Tins","p":"1 PCS","r":1200.0,"o":120.0},{"n":"FIVE RANGERS","c":"Novelty & Kids Items","p":"1 BOX","r":3000.0,"o":300.0},{"n":"INKY PINKY","c":"Novelty & Kids Items","p":"1 BOX","r":2500.0,"o":250.0},{"n":"MAGIC SHOW","c":"Novelty & Kids Items","p":"1 BOX","r":2350.0,"o":235.0},{"n":"SIREN","c":"Novelty & Kids Items","p":"1 BOX","r":1900.0,"o":190.0},{"n":"MINI SIREN","c":"Novelty & Kids Items","p":"1 BOX","r":1600.0,"o":160.0},{"n":"DELUXE COLOUR STICK","c":"Novelty & Kids Items","p":"1 BOX","r":1000.0,"o":100.0},{"n":"RAIDER COLOUR STICK","c":"Novelty & Kids Items","p":"1 BOX","r":1800.0,"o":180.0},{"n":"CHOTTA LAPTOP","c":"Novelty & Kids Items","p":"1 BOX","r":2500.0,"o":250.0},{"n":"SMOKE COLOUR STICK","c":"Novelty & Kids Items","p":"1 BOX","r":2100.0,"o":210.0},{"n":"20 ITEMS GIFT BOX","c":"Gift Boxes","p":"1 BOX","r":null,"o":null},{"n":"30 ITEMS GIFT BOX","c":"Gift Boxes","p":"1 BOX","r":null,"o":null},{"n":"40 ITEMS GIFT BOX","c":"Gift Boxes","p":"1 BOX","r":null,"o":null},{"n":"50 ITEMS GIFT BOX","c":"Gift Boxes","p":"1 BOX","r":null,"o":null},{"n":"RIN CAP","c":"Novelty & Kids Items","p":"1 BOX","r":1200.0,"o":120.0},{"n":"DISCO SHOWER (5PCS)","c":"Novelty & Kids Items","p":"1 BOX","r":1050.0,"o":105.0},{"n":"3000 COMBO","c":"Combo Packs","p":"1 BOX","r":3000.0,"o":3000.0},{"n":"5000 COMBO","c":"Combo Packs","p":"1 BOX","r":5000.0,"o":5000.0},{"n":"10000 COMBO","c":"Combo Packs","p":"1 BOX","r":10000.0,"o":10000.0}];

const WHATSAPP_NUMBER = "916369852054";

const state = {}; // key: product name -> qty

function fmt(n) {
  return '₹' + n.toLocaleString('en-IN', {maximumFractionDigits: 0});
}

function groupByCategory(list) {
  const map = {};
  list.forEach(p => {
    if (!map[p.c]) map[p.c] = [];
    map[p.c].push(p);
  });
  return map;
}

function render(filterText) {
  const listArea = document.getElementById('listArea');
  const q = (filterText || '').trim().toLowerCase();
  const filtered = q? PRODUCTS.filter(p => p.n.toLowerCase().includes(q)) : PRODUCTS;

  if (filtered.length === 0) {
    listArea.innerHTML = '<div class="empty-msg">No product found. Try a different search.</div>';
    return;
  }

  const grouped = groupByCategory(filtered);
  let html = '';
  Object.keys(grouped).forEach(cat => {
    html += `<div class="cat-block"><div class="cat-title">${cat}</div>`;
    grouped[cat].forEach(p => {
      const noPrice = (p.r === null || p.o === null);
      if (noPrice) {
        html += `
          <div class="item item-noprice" data-name="${p.n}">
            <div class="item-name">${p.n}<div class="item-pack">${p.p}</div></div>
            <div class="price-row">
              <span class="price-on-request">📞 Price on request</span>
            </div>
          </div>`;
        return;
      }
      const qty = state[p.n] || 0;
      const discountPct = Math.round((1 - p.o / p.r) * 100);
      const itemTotal = qty * p.o;
      html += `
        <div class="item ${qty > 0? 'has-qty' : ''}" data-name="${p.n}">
          <div class="item-name">${p.n}<div class="item-pack">${p.p}</div></div>
          <div class="qty-box">
            <div class="qty-btn" data-action="dec">−</div>
            <input class="qty-input" type="number" min="0" inputmode="numeric" value="${qty || ''}" placeholder="0">
            <div class="qty-btn" data-action="inc">+</div>
          </div>
          <div class="price-row">
            <span class="actual-price">${fmt(p.r)}</span>
            <span class="offer-price">${fmt(p.o)}</span>
            ${discountPct > 0? `<span class="discount-badge">${discountPct}% off</span>` : ''}
          </div>
          <div class="item-total">${qty} × ${fmt(p.o)} = <strong>${fmt(itemTotal)}</strong></div>
        </div>`;
    });
    html += `</div>`;
  });
  listArea.innerHTML = html;
  attachItemEvents();
}

function attachItemEvents() {
  document.querySelectorAll('.item').forEach(itemEl => {
    if (itemEl.classList.contains('item-noprice')) return;
    const name = itemEl.dataset.name;
    const input = itemEl.querySelector('.qty-input');
    const decBtn = itemEl.querySelector('[data-action="dec"]');
    const incBtn = itemEl.querySelector('[data-action="inc"]');

    function setQty(v) {
      v = Math.max(0, Math.floor(Number(v) || 0));
      if (v === 0) delete state[name]; else state[name] = v;
      updateItemUI(itemEl, name);
      updateCart();
    }

    input.addEventListener('input', () => setQty(input.value));
    input.addEventListener('blur', () => { input.value = state[name] || ''; });
    decBtn.addEventListener('click', () => setQty((state[name] || 0) - 1));
    incBtn.addEventListener('click', () => setQty((state[name] || 0) + 1));
  });
}

function updateItemUI(itemEl, name) {
  const p = PRODUCTS.find(x => x.n === name);
  const qty = state[name] || 0;
  itemEl.classList.toggle('has-qty', qty > 0);
  const totalEl = itemEl.querySelector('.item-total');
  totalEl.innerHTML = `${qty} × ${fmt(p.o)} = <strong>${fmt(qty * p.o)}</strong>`;
}

function updateCart() {
  const entries = Object.entries(state);
  const count = entries.length;
  let total = 0, mrpTotal = 0;
  entries.forEach(([name, qty]) => {
    const p = PRODUCTS.find(x => x.n === name);
    total += qty * p.o;
    mrpTotal += qty * p.r;
  });
  document.getElementById('cartCount').textContent = count === 0? 'No items selected' : `${count} item${count > 1? 's' : ''} selected`;
  document.getElementById('cartTotal').textContent = fmt(total);
  document.getElementById('cartSavings').textContent = total > 0? `You save ${fmt(mrpTotal - total)}` : '';
  document.getElementById('sendBtn').disabled = count === 0;
}

function buildWhatsAppMessage() {
  const entries = Object.entries(state);
  let lines = ['🎆 *Crackers Order*', ''];
  let total = 0;
  entries.forEach(([name, qty]) => {
    const p = PRODUCTS.find(x => x.n === name);
    const lineTotal = qty * p.o;
    total += lineTotal;
    lines.push(`${name} (${p.p}) × ${qty} = ${fmt(lineTotal)}`);
  });
  lines.push('', `*Total: ${fmt(total)}*`);
  return lines.join('\n');
}

document.getElementById('sendBtn').addEventListener('click', () => {
  const msg = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

document.getElementById('searchBox').addEventListener('input', (e) => render(e.target.value));

document.getElementById('waNote').textContent =
  WHATSAPP_NUMBER === "916369852054";

render('');
updateCart();