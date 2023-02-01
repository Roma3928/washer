document.addEventListener('DOMContentLoaded', () => {

  // SWIPER

  let swiper = new Swiper(".services-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Кнопка показать больше 
  const showMoreBtn = document.getElementById('whyme__button'),
    hiddenBlocks = document.querySelectorAll(".hidden-block");

  function showMore() {
    for (let i = 0; i < hiddenBlocks.length; i++) {
      if (hiddenBlocks[i].classList.contains('hidden-block')) {
        hiddenBlocks[i].classList.remove('hidden-block');
        showMoreBtn.textContent = "Скрыть информацию";
      }
      else {
        hiddenBlocks[i].classList.add('hidden-block');
        showMoreBtn.textContent = "Показать больше";
      }
    }
  }

  showMoreBtn.addEventListener('click', showMore)


  // Review

  let reviewSwiper = new Swiper(".review-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      }
    }
  });

  // MENU
  const menuBtn = document.getElementById("menu-button"),
        navMenu = document.getElementById("menu-hidden"),
        body = document.body,
        menuItem = document.querySelectorAll(".menu-box__link");

  function showMenu() {
    if (navMenu.classList.contains("menu-active")) {
      navMenu.classList.remove("menu-active");
      body.style.overflow = "visible";
    }
    else {
      navMenu.classList.add("menu-active");
      body.style.overflow = "hidden";
    }
  }

  menuBtn.addEventListener('click', showMenu);
  menuItem.forEach(el => {el.addEventListener('click', showMenu)});


  // box-shadow у nav
  function scrollHeader() {
    const nav = document.getElementById('nav')

    if (this.scrollY >= 200) nav.classList.add('scroll-nav'); else nav.classList.remove('scroll-nav')
  }
  window.addEventListener('scroll', scrollHeader)

  // Показать скрол
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 220) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

    // Переход по секциям
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 150;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

});