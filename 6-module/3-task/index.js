import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.render();
    this.elem.querySelector('.carousel__arrow_right').addEventListener('click', this.onClick);
    this.elem.querySelector('.carousel__arrow_left').addEventListener('click', this.onClick);
    this.elem.querySelector('.carousel__button').addEventListener('click', this.onClick);


  }
  render() {
    //стрелки слайдов
    let carousel = document.createElement('div');
    carousel.classList.add('carousel');
    carousel.innerHTML = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class='carousel__inner'></div>`;

    //слайды
    this.slides.forEach(function (item) {
      let itemWrap = document.createElement('div');
      itemWrap.classList.add('carousel__slide');
      itemWrap.setAttribute('data-id', `${item.id}`);
      let itemHtml = `
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>`;
      itemWrap.innerHTML = itemHtml;
      carousel.querySelector('.carousel__inner').append(itemWrap);
    });
    this.elem = carousel;
    let carouselWidth = document.querySelector('.container').offsetWidth;
    let arrowRight = carousel.querySelector('.carousel__arrow_right');
    let arrowLeft = carousel.querySelector('.carousel__arrow_left');
    arrowLeft.style.display = 'none';
    let carousel__inner = carousel.querySelector('.carousel__inner');
    let carousel__button = carousel.querySelectorAll('.carousel__button');
    let countOfSlides = carousel.querySelectorAll('.carousel__slide').length;


    // Сдвиг слайдов при клике на правую стрелку
    arrowRight.onclick = function () {
      let carouselStyle = carousel__inner.style.transform;
      let carouselWidthMinus = -carouselWidth;

      let lastSlide = carouselWidth * (countOfSlides - 2);

      if (carouselStyle) {
        carouselStyle = Number(carouselStyle.slice(11, -3));
        carouselWidthMinus = carouselWidthMinus + carouselStyle;
      }
      carousel__inner.style.transform = `translateX(${carouselWidthMinus}px)`;
      if (-lastSlide == carouselStyle) {
        arrowRight.style.display = 'none';
      }
      else {
        arrowRight.style.display = '';
      }
      if (lastSlide != 0) {
        arrowLeft.style.display = ''
      }
    }
    // Сдвиг слайдов при клике на левую стрелку

    arrowLeft.onclick = function () {
      let carouselStyle = carousel__inner.style.transform;
      let carouselWidthPlus = carouselWidth;
      arrowRight.style.display = '';
      if (carouselStyle) {
        carouselStyle = Number(carouselStyle.slice(11, -3));
        carouselWidthPlus = carouselWidthPlus + carouselStyle;
      }
      carousel__inner.style.transform = `translateX(${carouselWidthPlus}px)`;
      if (carouselStyle == -carouselWidth) {
        arrowLeft.style.display = 'none';
      }
      else {
        arrowLeft.style.display = '';
      }
    }
    //клик на +
    for (let i = 0; i < countOfSlides;i++) {
      let idName = carousel.querySelectorAll('.carousel__slide')[i].getAttribute('data-id');
      carousel__button[i].onclick = (event) => {
        let customEvent = new CustomEvent('product-add', { bubbles: true, detail: idName });
        this.elem.dispatchEvent(customEvent);
      }
    }
  }

}
document.body.addEventListener('product-add', (event) => console.log(event.detail));
