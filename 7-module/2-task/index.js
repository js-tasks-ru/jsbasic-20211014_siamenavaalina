import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    let th = this;
    this.render();
    this.elem.querySelector('.modal__close').addEventListener('click', function () {
      th.close();
    });
    document.addEventListener('keydown', function (event) {
      if (event.code === 'Escape') {
        th.close();
      }
    });
  }
  render() {
    this.elem = document.querySelector('div');
    this.elem.classList.add('container');
    this.elem.innerHTML = `<div class="modal">
<!--Прозрачная подложка перекрывающая интерфейс-->
<div class="modal__overlay"></div>

<div class="modal__inner">
  <div class="modal__header">
    <!--Кнопка закрытия модального окна-->
    <button type="button" class="modal__close">
      <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
    </button>

    <h3 class="modal__title">
    Вот сюда нужно добавлять заголовок
  </h3>
</div>

<div class="modal__body">
  A сюда нужно добавлять содержимое тела модального окна
</div>
</div>
</div>`
  }
  open() {
    document.body.classList.add('is-modal-open');
  }
  setTitle(parametr) {
    this.elem.querySelector('.modal__title').innerHTML = parametr;
  }
  setBody(parametr) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(parametr);

  }
  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.innerHTML = '';
  }

}
