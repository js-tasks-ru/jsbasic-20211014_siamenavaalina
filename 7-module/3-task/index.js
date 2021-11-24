export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.render();
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML = `
<div class="slider__thumb" style="left: 50%;">
  <span class="slider__value">2</span>
</div>
<div class="slider__progress" style="width: 50%;"></div>
<div class="slider__steps">
</div>`;

    this.elem.addEventListener('click', (event) => {
      let leftRelative = event.offsetX / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let eventProc = event.offsetX / this.elem.offsetWidth * 100;
      let spanAll = this.elem.querySelectorAll('.slider__steps span');
      let arr = [0];
      
      for (let i = 1; i < this.steps; i++) {
        let valuePercents = 100 / segments * i;
        arr.push(valuePercents);
      };
      let curr = arr[0];
      for (let i = 0; i < this.steps; i++) {
        console.log(' arr[i]: ' +  arr[i]);

        if (Math.abs(eventProc - arr[i]) < Math.abs(eventProc - curr)) {
curr = arr[i];
        };
        let sliderValue = this.elem.querySelector('.slider__value');
        sliderValue.innerHTML = `${i}`;
// console.log('index: ' + i);
// console.log('eventProc: ' + eventProc);

    // передвижение ползунка
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    thumb.style.left = `${curr}%`;
    progress.style.width = `${curr}%`;

        // добавление/удаление класса active для ползунка
        for (let j = 0; j < this.steps; j++) {
          spanAll[j].classList.remove('slider__step-active');
        }
        spanAll[i].classList.add('slider__step-active');
        let customEvent = new CustomEvent('slider-change', { bubbles: true, detail: i });
        this.elem.dispatchEvent(customEvent);
        
      }
    });
    // создание span по количеству steps
    let sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      let newSpan = document.createElement('span');
      sliderSteps.appendChild(newSpan);
    }
  }
}
//document.body.addEventListener('slider-change', (event) => console.log(event.detail));
