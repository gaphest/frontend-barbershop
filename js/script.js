var showMap=document.querySelector(".show-map");
var login=document.querySelector(".login");
var iconUser=document.querySelector(".icon-user");
var iconPassword=document.querySelector(".icon-password");
var loginForm=document.querySelector(".login-form");
var modalForm=document.querySelector(".modal-content");
var map=document.querySelector(".modal-content-map");
var modalOverlay=document.querySelector(".modal-overlay");
var closeIcon=document.querySelectorAll(".modal-content-close");

//popup карты
showMap.addEventListener("click", function(e){
    e.preventDefault();
    map.classList.add('become-active');
    modalOverlay.classList.add('become-active');
});

//popup формы
login.addEventListener("click", function(e){
    e.preventDefault();
    modalForm.classList.add('become-active');
    modalOverlay.classList.add('become-active');

    if(localStorage.getItem('name')) { //если в localstorage уже есть имя то вписываем его и фокусируемся на password
        iconUser.value = localStorage.getItem('name');
        iconPassword.focus();
    }
    else
        iconUser.focus();
});

loginForm.addEventListener("submit", function(e){ /*при сабмите формы*/
    if(iconUser.value.length>3 && iconPassword.value!="")
        localStorage.setItem('name',iconUser.value);//запоминаем введеное в поле имя в localStorage

    else{
        e.preventDefault();//предотвращаю отправку формы
        alert("Логин должен быть > 3 символов и должен быть password");
    }
});


//Закрытие
closeIcon[0].addEventListener('click',function(){
    close();
});
closeIcon[1].addEventListener('click',function(){
    close();
});

modalOverlay.addEventListener('click',function(){
    close();
});
window.addEventListener('keydown', function(e){
   if(e.keyCode==27) //если escape
        close();
});

function close(){
    if(map.classList.contains('become-active'))
        map.classList.remove('become-active');

    if(modalOverlay.classList.contains('become-active'))
        modalOverlay.classList.remove('become-active');

    if(modalForm.classList.contains('become-active'))
        modalForm.classList.remove('become-active');
}

