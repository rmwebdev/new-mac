
const branches = new Swiper('#slide-branches', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: false,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  onlyExternal: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// slider.controller.control = thumbs;
// thumbs.controller.control = slider;


var thumbs = new Swiper('.logos', {
  slidesPerView: 3.5,
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  initialSlide:1,
  slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  
  });

  var slider = new Swiper('.description-logos', {

    slidesPerView: 1,
    spaceBetween:10,
    centeredSlides: false,
    loop: true,
    loopedSlides: 4,
    initialSlide:1,
    mousewheel: false,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  onlyExternal: true,
  observer: true,
  observeParents: true,
            

});

slider.controller.control = thumbs;
thumbs.controller.control = slider;



const client= new Swiper("#slide-client", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: '.client-pagination',
    clickable: true,
  },
});
// Bussines Unit

// const slider = new Swiper ('.bussines-slider', {
//   slidesPerView: 1,
//   centeredSlides: true,
//   loop: true,
//   loopedSlides: 6,
// });


// const thumbs = new Swiper ('.bussines-thumbs', {
//   slidesPerView: 'auto',
//   // spaceBetween: 10,
//   centeredSlides: true,
//   loop: true,
//   slideToClickedSlide: true,
//   navigation: {
//       nextEl: '.slider-button-next',
//       prevEl: '.slider-button-prev',
//   },
// });

// slider.controller.control = thumbs;
// thumbs.controller.control = slider;
