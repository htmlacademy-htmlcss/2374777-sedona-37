function modalExecutor(){
    console.log('Clicked...');
    document.querySelector('.modal-container').classList.toggle('modal-container-close');
}

document.addEventListener("DOMContentLoaded", function(){
    console.log('Loaded...');

    document.querySelectorAll('.button-modal').forEach(element => {
        element.addEventListener('click', modalExecutor);
    });

    document.querySelectorAll('.modal-close-button').forEach(element => {
        element.addEventListener('click', modalExecutor);
    });

});
