function openPopUp(){
    let component = document.getElementById('popUpBox');
    component.parentElement.style.visibility = 'visible';
}

function closePopUp() {
    let component = document.getElementById('popUpBox');
    component.parentElement.style.visibility = 'hidden';
}