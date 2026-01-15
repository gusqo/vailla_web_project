/** Header Change Effect **/
const header = document.querySelector('header');

const stickyHeader = () => {
  const scry = window / scrollY;
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', stickyHeader);

/**Menu Elements Clone For Mobile **/
const mobileMenu = document.querySelector('.mobile-menus');
const navs = document.querySelector('.nav-lists').cloneNode(true);
const info = document.querySelector('.info').cloneNode(true);

mobileMenu.appendChild(navs);
mobileMenu.appendChild(info);

/** Mobile Menu Toggle **/
const mobileBtn = document.querySelector('.mibile-btn');
const menuHeight = mobileMenus.scrollHeight;

toggleMobileBtn = (e) => {
  const target = e.currentTarget;
  target.classList.toggle('active');
  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    mobileMenus.style.height = menuHeight + 'px';
  } else {
    target.classList.add('not-active');
  }
};

mobileBtn.addEventListener('click', toggleMobileBtn);
