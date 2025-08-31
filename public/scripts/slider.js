// Slider JS para Astro (modular)
export default function initSlider() {
  let nextDom = document.getElementById('next');
  let prevDom = document.getElementById('prev');
  let carouselDom = document.querySelector('.carousel');
  let SliderDom = carouselDom.querySelector('.carousel .list');
  let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
  let timeDom = document.querySelector('.carousel .time');
  let timeRunning = 3000;
  let runTimeOut;

  function showSlider(type) {
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    if(type === 'next'){
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add('next');
    }else{
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add('prev');
    }
    restartTextAnimation();
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, timeRunning);
  }

  function restartTextAnimation() {
    const firstItem = SliderDom.querySelector('.item');
    if (!firstItem) return;
    const content = firstItem.querySelector('.content');
    if (!content) return;
    const animatedEls = [
      content.querySelector('.author'),
      content.querySelector('.title'),
      content.querySelector('.topic'),
      content.querySelector('.des'),
      content.querySelector('.buttons')
    ];
    animatedEls.forEach(el => {
      if (el) {
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = '';
      }
    });
  }

  nextDom.onclick = function(){
    showSlider('next');    
  }
  prevDom.onclick = function(){
    showSlider('prev');    
  }
}

// Inicializar automáticamente si se ejecuta en el navegador
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    initSlider();
  });
}
