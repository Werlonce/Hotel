var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows

    navigation:  {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    },
    // Перелистывать слайдер с помощью клавиатуры
    keyboard: {
        enabled: true,
    }   
})