// klik diluar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-btn');
const sc = document.querySelector('#shopping-btn');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
document.addEventListener('click', function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});
document.addEventListener('click', function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// toggle class active untuk hamburger
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// ketika diklik search
document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping');
// ketika diklik search
document.querySelector('#shopping-btn').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// modal box
const modalBtn = document.querySelector('#item-detail-modal');
const itemDetailBtns = document.querySelectorAll('.item-detail-btn');

itemDetailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    modalBtn.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.close-icon').onclick = (e) => {
  modalBtn.style.display = 'none';
  e.preventDefault();
};

// klik modal di luar
window.onclick = (e) => {
  if (e.target === modalBtn) {
    modalBtn.style.display = 'none';
  }
};

// back to top start
let mybutton = document.getElementById('myBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top end
