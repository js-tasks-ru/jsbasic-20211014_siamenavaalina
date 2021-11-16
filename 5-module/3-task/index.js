function initCarousel() {

  let arrowRight = document.querySelector('.carousel .carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel .carousel__arrow_left');
  console.log(arrowRight);
  arrowLeft.style.display = 'none';
  let carousel = document.querySelector('.carousel__inner');
  let carouselWidth = carousel.offsetWidth;
  let countOfSlides = document.querySelectorAll('.carousel__slide').length;
  let lastSlide = carouselWidth * (countOfSlides - 2);

  // Сдвиг слайдов при клике на правую стрелку
  arrowRight.onclick = function () {
     let carouselStyle = carousel.style.transform;
    let carouselWidthMinus = -carouselWidth;

    if (carouselStyle) {
      carouselStyle = Number(carouselStyle.slice(11, -3));
      carouselWidthMinus = carouselWidthMinus + carouselStyle;
    }
    carousel.style.transform = `translateX(${carouselWidthMinus}px)`;

if (-lastSlide == carouselStyle) {
  arrowRight.style.display = 'none';
}
else{
 arrowRight.style.display = '';
}
if(lastSlide != 0){
  arrowLeft.style.display = ''
}

  }
  // Сдвиг слайдов при клике на левую стрелку

  arrowLeft.onclick = function () {
    let carouselStyle = carousel.style.transform;
    let carouselWidthPlus = carouselWidth;
    arrowRight.style.display = '';
    if (carouselStyle) {
      carouselStyle = Number(carouselStyle.slice(11, -3));
      carouselWidthPlus = carouselWidthPlus + carouselStyle;
    }
    carousel.style.transform = `translateX(${carouselWidthPlus}px)`;
if (carouselStyle == -carouselWidth) {
  arrowLeft.style.display = 'none';
}
else{
  arrowLeft.style.display = '';
}
  }
}