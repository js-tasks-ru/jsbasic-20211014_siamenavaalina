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

      let sliderWidth = document.body.querySelector('.slider').offsetWidth;
      let eventCoordinate = (event.offsetX * 100) / sliderWidth;
      let spanAll = this.elem.querySelectorAll('.slider__steps span');
      let arr = [0];
      for (let i = 1; i < this.steps; i++) {
        let spanCoord = (sliderWidth / 4) * i;
        arr.push(spanCoord);
      };
      for (let i = 0; i < this.steps; i++) {
        if (arr[i] >= event.offsetX) {
          let sliderValue = this.elem.querySelector('.slider__value');
          sliderValue.innerHTML = `${i}`;

          for (let j = 0; j < this.steps; j++) {
          spanAll[j].classList.remove('slider__step-active');

          }

          spanAll[i].classList.add('slider__step-active');
          let customEvent = new CustomEvent('slider-change', { bubbles: true, detail: i });
          this.elem.dispatchEvent(customEvent);

          break;

        }

      }

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${eventCoordinate}%`;
      progress.style.width = `${eventCoordinate}%`;
    });

    let sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      let newSpan = document.createElement('span');
      sliderSteps.appendChild(newSpan);
    }
  }
}
document.body.addEventListener('slider-change', (event) => console.log(event.detail));
