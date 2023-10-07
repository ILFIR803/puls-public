const sliderLine = document.querySelector('.slider-line'),
      prevBtn = document.querySelector('.button-prev'),
      nextBtn = document.querySelector('.button-next'),
      dots = document.querySelectorAll('.dot'),
      sliderImages = document.querySelectorAll('.slider-wrapper .slider-line img')
 let dotIndex = 0;
let count = 0;
 let sliderWidth;

 //адаптив слайдера
function init() {
   sliderWidth = document.querySelector('.slider-wrapper').offsetWidth;
   sliderLine.style.width = sliderWidth * sliderWidth + 'px';
   sliderImages.forEach(item => {
      item.style.width = sliderWidth + 'px';
      item.style.height = 'auto';
   });
   rollSlider()
}
init();
window.addEventListener('resize', init);

document.querySelector('.button-next').addEventListener('click', function () {
    count++;
    if (count >= sliderImages.length) {
        count = 0;
    }
    rollSlider();
    thisSlide(count);
});

document.querySelector('.button-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = sliderImages.length - 1;
    }
    rollSlider();
    thisSlide(count);
});
//перелистывание слайдера
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * sliderWidth + 'px)';

}
//добавление класса activ на dot
function thisSlide(count) {
   for (let dot of dots) {
      dot.classList.remove('active');
   }
   dots[count].classList.add('active');
}
//перелистывание при нажатии на dot
dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
        count = index
        rollSlider();
        thisSlide(count)
   });
});
