const advantages = document.querySelector('.advantages');
var advantagesSliderToggles = advantages.querySelectorAll('.slider__toggle');
var advantagesListItems = advantages.querySelectorAll('.advantages__item');

advantages.classList.remove('advantages--nojs');

for(let i = 0; i < advantagesSliderToggles.length; i++ ){

    advantagesSliderToggles[i].addEventListener('click', function(){
        for(var j = 0; j< advantagesSliderToggles.length; j++){
         advantagesListItems[j].classList.remove('advantages__item--mobile-active');
         advantagesSliderToggles[j].classList.remove('slider__toggle--active');

        }
        advantagesListItems[i].classList.add('advantages__item--mobile-active');
        advantagesSliderToggles[i].classList.add('slider__toggle--active');
 
        
     })
}



