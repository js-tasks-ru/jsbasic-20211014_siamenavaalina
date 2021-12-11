import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.elem.querySelector('.ribbon__arrow_left').addEventListener('click', this.onClick);
    this.elem.querySelector('.ribbon__arrow_right').addEventListener('click', this.onClick);
    this.elem.querySelector('.ribbon__item').addEventListener('click', this.onClick);

  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.innerHTML = `<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>
  <!--Ссылки на категории-->
  <nav class="ribbon__inner">
    <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
    <a href="#" class="ribbon__item" data-id="salads">Salads</a>
    <a href="#" class="ribbon__item" data-id="soups">Soups</a>
    <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
    <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
    <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
    <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
    <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
    <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
  </nav>
  <!--Кнопка прокрутки вправо-->
  <button class="ribbon__arrow ribbon__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`;

    //прокрутка
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let ribbonArrow_left = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonArrow_right = this.elem.querySelector('.ribbon__arrow_right');
    ribbonArrow_right.classList.add('ribbon__arrow_visible');
    let ribbonItem = this.elem.querySelectorAll('.ribbon__item');
    let countOfItems = ribbonItem.length;
    ribbonArrow_left.onclick = function () {
      let scrollLeft = ribbonInner.scrollLeft;
      ribbonInner.scrollBy(-350, 0);
      ribbonArrow_right.classList.add('ribbon__arrow_visible');
      if (scrollLeft == 0) {
        ribbonArrow_left.classList.remove('ribbon__arrow_visible');
      }
    }
    ribbonArrow_right.onclick = function () {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      ribbonInner.scrollBy(350, 0);
      ribbonArrow_left.classList.add('ribbon__arrow_visible');
      if (scrollRight < 1) {
        ribbonArrow_right.classList.remove('ribbon__arrow_visible');
      }
    }
    for (let i = 0; i < countOfItems; i++) {
      let category = ribbonItem[i].getAttribute('data-id');;

      ribbonItem[i].onclick = (event) => {
        event.preventDefault();
        for (let j = 0; j < countOfItems; j++) {
          if (ribbonItem[j].classList.contains('ribbon__item_active')) {
            ribbonItem[j].classList.remove('ribbon__item_active');
          }
        }
        ribbonItem[i].classList.add('ribbon__item_active');
        let customEvent = new CustomEvent('ribbon-select', { bubbles: true, detail: category });
        this.elem.dispatchEvent(customEvent);
      }
    }
  };
}
document.body.addEventListener('ribbon-select', (event) => console.log(event.detail));
