const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Handle  responsive navbar
const navbarBars = $('.nav-bars');
const navbars = $$('nav');
const navbarItems = $('.nav-res-items');
const navbarBarsIcon = $('.nav-bars>i');
const overlay = $('.overlay');
const navbarItemsList = $$('.nav-res-item');
const slider = $('.slider');

const turnOffNavbar = () => {
  navbarItems.classList.remove('nav-res-items-active');
  navbarBarsIcon.classList.remove('fa-times');
  navbarBarsIcon.classList.add('fa-bars');
  overlay.style.display = 'none';
};
const turnOnNavbar = () => {
  navbarItems.classList.add('nav-res-items-active');
  navbarBarsIcon.classList.remove('fa-bars');
  navbarBarsIcon.classList.add('fa-times');
  overlay.style.display = 'block';
};

const handleNavbar = () => {
  if (!navbarItems.classList.contains('nav-res-items-active')) {
    turnOnNavbar();
    navbarItemsList.forEach((item) => {
      item.onclick = () => {
        turnOffNavbar();
      };
    });
    slider.addEventListener('click', handleNavbar);
    window.addEventListener('scroll', turnOffNavbar);
  } else {
    turnOffNavbar();
  }
};
overlay.onclick = () => {
  handleNavbar();
  removePopUp();
};
navbarBars.onclick = handleNavbar;

//Handle Slider
const slideList = $$('.slider-slide');
let size = document.documentElement.clientWidth;
let count = 1;
const transform = () => {
  slider.style.transform = 'translateX(-' + size * count + 'px)';
};
transform();

const transformSliderNext = () => {
  if (count >= slideList.length - 1) return;
  slider.style.transition = 'ease 0.3s';
  count++;
  transform();
}; /* 
const transformSliderPrev = () => {
  if (count < 1) return;
  slider.style.transition = 'ease 0.3s';
  count--;
  transform();
}; */
const handleTransformToClone = () => {
  if (slideList[count].id == 'slider-first') {
    slider.style.transition = 'none';
    count = 1;
    transform();
  }
  if (slideList[count].id == 'slider-last') {
    slider.style.transition = 'none';
    count = slideList.length - 2;
    transform();
  }
};
window.addEventListener('resize', () => {
  window.location.reload();
});
slider.addEventListener('transitionend', handleTransformToClone);
setInterval(transformSliderNext, 2000);

//Handle Pop up

const popUp = document.querySelector('.pop-up-buy-ticket');
const buyBtnList = document.querySelectorAll('.buy-btn');
const closeBtnList = document.querySelectorAll('.close-pop-up');

buyBtnList.forEach(
  (item) =>
    (item.onclick = () => {
      addPopUp();
    })
);

closeBtnList.forEach((item) => {
  item.onclick = () => {
    removePopUp();
  };
});

const addPopUp = () => {
  popUp.classList.add('pop-up-active');
  overlay.style.display = 'block';
};
const removePopUp = () => {
  popUp.classList.remove('pop-up-active');
  overlay.style.display = 'none';
};
