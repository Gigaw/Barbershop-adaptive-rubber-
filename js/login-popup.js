var userLoginBtm = document.querySelector('.user-list__login');
var loginPopup = document.querySelector('.login-popup');
var loginPopupCloseBtm = loginPopup.querySelector('.login-popup__close-button');



userLoginBtm.addEventListener("click", function(evt){
    evt.preventDefault();
    loginPopup.classList.add('login-popup--opened');
})

loginPopupCloseBtm.addEventListener("click", function(evt){
    evt.preventDefault();
    loginPopup.classList.toggle('login-popup--opened');
})

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == loginPopup || loginPopup.contains(target);
    const its_btnMenu = target == userLoginBtm;
    const menu_is_active = loginPopup.classList.contains('login-popup--opened');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        loginPopup.classList.toggle('login-popup--opened');
    }
});


