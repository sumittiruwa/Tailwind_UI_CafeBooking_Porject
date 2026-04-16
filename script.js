
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));


const menuItems = [
  { name: 'Espresso',        desc: 'Double shot, 18g, 30ml',            price: 'Rs 180',  tag: 'Classic'  },
  { name: 'Pour Over',       desc: 'Single origin, filter brew',         price: 'Rs 280',  tag: 'Seasonal' },
  { name: 'Flat White',      desc: 'Ristretto, micro-foam, 180ml',       price: 'Rs 250',  tag: 'Popular'  },
  { name: 'Cold Brew',       desc: '18hr steep, served over ice',        price: 'Rs 320',  tag: 'Cold'     },
  { name: 'Cortado',         desc: 'Equal parts espresso & steamed milk',price: 'Rs 220',  tag: 'Classic'  },
  { name: 'Chai Latte',      desc: 'House-spiced masala, oat milk',      price: 'Rs 240',  tag: 'Special'  },
];

const menuContainer = document.getElementById('menu-items');
if (menuContainer) {
  menuItems.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'menu-item p-8 bg-espresso reveal-up';
    el.style.transitionDelay = `${i * 0.08}s`;
    el.innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-3">
        <h3 class="font-serif font-bold text-xl">${item.name}</h3>
        <span class="text-caramel font-medium text-sm whitespace-nowrap mt-1">${item.price}</span>
      </div>
      <p class="text-cream/40 text-sm mb-4">${item.desc}</p>
      <span class="text-xs tracking-widest uppercase text-caramel/60 border border-caramel/20 px-2 py-1 rounded-full">${item.tag}</span>
    `;
    menuContainer.appendChild(el);
    observer.observe(el);
  });
}



const values = [
  { icon: '🌱', title: 'Direct Trade',    desc: 'We buy directly from farmers, cutting out middlemen and paying above-market prices.' },
  { icon: '🔥', title: 'Small Batch',     desc: 'Every roast is under 5kg. Freshness isn\'t a feature — it\'s the whole point.' },
  { icon: '🤝', title: 'Community',       desc: 'Monthly cuppings, barista workshops, and open sourced brewing guides for all.' },
];

const valuesList = document.getElementById('values-list');
if (valuesList) {
  values.forEach(v => {
    valuesList.innerHTML += `
      <div class="flex gap-4 items-start">
        <span class="text-2xl">${v.icon}</span>
        <div>
          <p class="font-semibold text-espresso mb-0.5">${v.title}</p>
          <p class="text-espresso/50 text-sm leading-relaxed">${v.desc}</p>
        </div>
      </div>
    `;
  });
}

const team = [
  { name: 'Priya Shrestha',  role: 'Founder & Head Roaster' },
  { name: 'Kiran Tamang',    role: 'Head Barista' },
  { name: 'Sita Karmacharya',role: 'Farm Relations' },
];

const teamList = document.getElementById('team-list');
if (teamList) {
  team.forEach(t => {
    teamList.innerHTML += `
      <div class="flex items-center justify-between">
        <p class="font-medium">${t.name}</p>
        <p class="text-cream/50 text-sm">${t.role}</p>
      </div>
    `;
  });
}

const milestones = [
  { year: '1987', text: 'Priya opens the first shopfront in Thamel with a single 1kg roaster.' },
  { year: '1994', text: 'First direct-trade partnership established with Yirgacheffe farmers in Ethiopia.' },
  { year: '2001', text: 'Moved to current 3-storey location. Added a cupping lab and training room.' },
  { year: '2010', text: 'Launched wholesale program — now supplying 40+ restaurants in Kathmandu.' },
  { year: '2019', text: 'Won "Best Independent Coffee Shop in South Asia" at the Asia Coffee Awards.' },
  { year: '2024', text: 'Celebrating 36 years. Still roasting every batch by hand, every single day.' },
];

const timeline = document.getElementById('timeline');
if (timeline) {
  milestones.forEach((m, i) => {
    const el = document.createElement('div');
    el.className = 'flex gap-8 items-start reveal-up';
    el.style.transitionDelay = `${i * 0.1}s`;
    el.innerHTML = `
      <div class="relative">
        <div class="w-2 h-2 rounded-full bg-caramel absolute -left-9 top-1.5"></div>
        <p class="font-serif font-black text-3xl text-caramel/60">${m.year}</p>
      </div>
      <p class="text-cream/60 leading-relaxed pt-1">${m.text}</p>
    `;
    timeline.appendChild(el);
    observer.observe(el);
  });
}



const hoursData = [
  { day: 'Monday – Friday', hours: '7:00 AM – 9:00 PM' },
  { day: 'Saturday',        hours: '8:00 AM – 10:00 PM' },
  { day: 'Sunday',          hours: '8:00 AM – 10:00 PM' },
  { day: 'Public Holidays', hours: '9:00 AM – 6:00 PM' },
];

const hoursList = document.getElementById('hours-list');
if (hoursList) {
  hoursData.forEach(h => {
    hoursList.innerHTML += `
      <div class="flex justify-between text-espresso/70">
        <span>${h.day}</span>
        <span class="font-medium text-espresso">${h.hours}</span>
      </div>
    `;
  });
}


const openStatus = document.getElementById('open-status');
const openDetail = document.getElementById('open-detail');
if (openStatus) {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();

  let open = false;
  let openHour = 7, closeHour = 21;
  if (day === 0 || day === 6) { openHour = 8; closeHour = 22; }

  open = hour >= openHour && hour < closeHour;

  if (open) {
    openStatus.textContent = 'We\'re Open ✓';
    openDetail.textContent = `Closes at ${closeHour}:00 today`;
  } else {
    openStatus.textContent = 'Currently Closed';
    const tomorrow = day === 6 ? 8 : (day === 5 ? 8 : 7);
    openDetail.textContent = `Opens at ${tomorrow}:00 AM tomorrow`;
  }
}


window.submitForm = function () {
  const fname   = document.getElementById('fname')?.value.trim();
  const lname   = document.getElementById('lname')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const reason  = document.getElementById('reason')?.value;
  const message = document.getElementById('message')?.value.trim();
  const errEl   = document.getElementById('form-error');

  if (!fname || !lname || !email || !reason || !message) {
    errEl.classList.remove('hidden');
    return;
  }
  errEl.classList.add('hidden');

 
  document.getElementById('contact-form').classList.add('hidden');
  document.getElementById('form-success').classList.remove('hidden');
};