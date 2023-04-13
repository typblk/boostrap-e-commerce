
// menu

let menus = document.querySelectorAll('.menu');
menus.forEach(menu => {
    menu.addEventListener('click', function () {
        menus.forEach(btn => btn.classList.remove('menu-active'));
        this.classList.add('menu-active');
    });
});

//pagination

let pages = document.querySelectorAll('.page');
pages.forEach(page => {
    page.addEventListener('click', function () {
        pages.forEach(btn => btn.classList.remove('page-active'));
        this.classList.add('page-active');
    });
});




//slick slider

$('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    dots: false,
    focusOnSelect: true,
    vertical: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    let slide = $(this).data('slide');
    $('.slider-bottom').slick('slickGoTo', slide - 1);
  });