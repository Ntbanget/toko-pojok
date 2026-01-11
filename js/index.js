
// navbar
const current = location.pathname.split("/").pop();
const menuItems = document.querySelectorAll(".menu li a");

menuItems.forEach(item => {
    if(item.getAttribute("href") === current){
        item.classList.add("active");
    }
});

// logo
window.onload = function () {
    const text = "Toko-Pojok"; 
    const typingElement = document.getElementById("typing-logo");

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // kecepatan mengetik
        }
    }

    typeEffect();
};

// SALAM
document.addEventListener("DOMContentLoaded", () => {
  const salamEl = document.getElementById("salam");
  const popup = document.getElementById("salam-popup");
  const closeBtn = document.getElementById("close-salam");

  if (!salamEl || !popup || !closeBtn) return;

  const hour = new Date().getHours();
  let salam = "";

  if (hour >= 4 && hour < 11) salam = " Selamat Pagi, Selamat Datang di Toko Pojok";
  else if (hour < 15) salam = " Selamat Siang, Selamat Berbelanja";
  else if (hour < 18) salam = " Selamat Sore, Semoga Harimu Menyenangkan";
  else salam = " Selamat Malam, Terima Kasih Sudah Berkunjung";

  salamEl.textContent = salam;

  setTimeout(() => popup.classList.add("show"), 600);
  closeBtn.addEventListener("click", () => popup.classList.remove("show"));
  setTimeout(() => popup.classList.remove("show"), 6000);
});
//  HERO About
document.addEventListener("scroll", () => {
  const hero = document.querySelector(".toko-hero");
  if (!hero) return;

  const overlay = hero.querySelector(".hero-overlay");
  const content = hero.querySelector(".hero-content");
  const image = hero.querySelector(".hero-bg");

  if (!overlay || !content || !image) return;

  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;
  const progress = Math.min(scrollY / (heroHeight / 2), 1);

  overlay.style.background = `rgba(0,0,0,${0.6 * progress})`;
  image.style.filter = `grayscale(${progress * 100}%)`;

  if (progress > 0.4) {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  } else {
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";
  }
});
  //  SERVICES EFFECT 
document.addEventListener("DOMContentLoaded", () => {
  const svcWrapper = document.querySelector('.svc-wrapper');
  if (!svcWrapper) return; 

  document.body.classList.add('js-svc');

  const svcItems = svcWrapper.querySelectorAll('.svc-block, .svc-head-inner');
  if (!svcItems.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('svc-show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  svcItems.forEach(el => observer.observe(el));
});
// GALERI 
document.querySelectorAll('.btn-view').forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.type;
    if (type === 'produk') window.location.href = 'contact.html';
    if (type === 'testimoni') window.location.href = 'about.html';
  });
});

document.querySelectorAll('.btn-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;

    document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display =
        category === 'all' || item.dataset.category === category ? 'block' : 'none';
    });
  });
});

// WHATSAPP ORDER 
// document.addEventListener("DOMContentLoaded", () => {
//   const waBtn = document.getElementById('sendWA');
//   if (!waBtn) return;

//   waBtn.addEventListener('click', () => {
//     const nama = document.getElementById('nama')?.value || '';
//     const alamat = document.getElementById('alamat')?.value || '';
//     const pesanan = document.getElementById('pesanan')?.value || '';

//     if (!nama || !pesanan) {
//       alert('Nama dan Pesanan wajib diisi!');
//       return;
//     }

//     const pesan =
//       `Halo Toko Pojok,%0A%0A` +
//       `Nama: ${nama}%0A` +
//       `Alamat: ${alamat}%0A` +
//       `Pesanan: ${pesanan}`;

//     window.open(`https://wa.me/085642447207?text=${pesan}`, '_blank');
//   });
// });


