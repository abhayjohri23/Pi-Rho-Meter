function openPopUp(){
    var component = document.getElementById('popUpBox');
    component.parentElement.style.visibility = 'visible';
}

function closePopUp() {
    var component = document.getElementById('popUpBox');
    component.parentElement.style.visibility = 'hidden';
}

function openShareBox(){
    var component = document.getElementById('shareBtn');
    component.nextElementSibling.style.visibility = 'visible';
}

function closeShareBox(){
    var component = document.getElementById('shareBtn');
    component.nextElementSibling.style.visibility = 'hidden';
    
}