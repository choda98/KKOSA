/*---------Swiper----------*/

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 3,
      },
    },
  });

  /*-------------Hamburger Menu----------*/

  const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
  const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
  const menu_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
  const nav = document.querySelector('.nav.container')

  hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });

  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
      nav.style.backgroundColor = '#29323c';
    } else {
      nav.style.backgroundColor = 'transparent';
    }
  });
  menu_item.forEach(item => {
item.addEventListener('click', () =>{
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
  });
