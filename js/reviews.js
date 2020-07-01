const reviews = document.querySelector('.reviews');
const reviewsListItems = reviews.querySelectorAll('.reviews__list-item');
const reviewsSliderToggles = reviews.querySelectorAll('.slider__toggle');
const reviewsLeftBtn = reviews.querySelector('.reviews__prev');
const reviewsRightBtn = reviews.querySelector('.reviews__next');


reviews.classList.remove('reviews--nojs');

for(let i = 0; i < reviewsSliderToggles.length; i++ ){

    reviewsSliderToggles[i].addEventListener('click', function(){
        for(var j = 0; j< reviewsSliderToggles.length; j++){

        reviewsListItems[j].classList.remove('reviews__list-item--active');
        reviewsSliderToggles[j].classList.remove('slider__toggle--active');

        }
        reviewsListItems[i].classList.add('reviews__list-item--active');
        reviewsSliderToggles[i].classList.add('slider__toggle--active');
 
        
     })
}

reviewsRightBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    var currentReviewsListItemIndex ;
    for(var i = 0; i < reviewsSliderToggles.length; i++){
        if(reviewsListItems[i].classList.contains('reviews__list-item--active')){
            currentReviewsListItemIndex = i; 
            reviewsListItems[i].classList.remove('reviews__list-item--active');
            reviewsSliderToggles[i].classList.remove('slider__toggle--active');
        }
    }
    
    if(currentReviewsListItemIndex === reviewsListItems.length -1){
        reviewsListItems[0].classList.add('reviews__list-item--active');
        reviewsSliderToggles[0].classList.add('slider__toggle--active');
    }else {
        reviewsListItems[currentReviewsListItemIndex+1 ].classList.add('reviews__list-item--active');
        reviewsSliderToggles[currentReviewsListItemIndex+1].classList.add('slider__toggle--active');
    }
})

reviewsLeftBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    var currentReviewsListItemIndex ;
    for(var i = 0; i < reviewsSliderToggles.length; i++){
        if(reviewsListItems[i].classList.contains('reviews__list-item--active')){
            currentReviewsListItemIndex = i; 
            reviewsListItems[i].classList.remove('reviews__list-item--active');
            reviewsSliderToggles[i].classList.remove('slider__toggle--active');
        }
    }

    if(currentReviewsListItemIndex === 0){
        reviewsListItems[reviewsSliderToggles.length - 1].classList.add('reviews__list-item--active');
        reviewsSliderToggles[reviewsSliderToggles.length - 1].classList.add('slider__toggle--active');
    }else {
        reviewsListItems[currentReviewsListItemIndex-1 ].classList.add('reviews__list-item--active');
        reviewsSliderToggles[currentReviewsListItemIndex-1].classList.add('slider__toggle--active');
    }

    
})