'use strict';

{
    function play() {
      setTimeout(() => {
        images[currentIndex].classList.remove('current');
        currentIndex++;
        if(currentIndex>images.length-1){
        currentIndex = 0;    
        }
        images[currentIndex].classList.add('current');
        play();
      }, 5000);
    }
  
    const images = document.querySelectorAll('.hero img');
    let currentIndex = 0;
  
    play();

    const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
  }