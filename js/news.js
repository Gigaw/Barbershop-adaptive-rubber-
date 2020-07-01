const news = document.querySelector('.news');
const newsBtns = news.querySelectorAll('.news__to-all');

news.classList.remove('news--nojs');

for(let i = 0; i < newsBtns.length; i++){

    newsBtns[i].addEventListener("click", function(evt){
        evt.preventDefault();
        news.classList.toggle('news--opened');
    })

}
