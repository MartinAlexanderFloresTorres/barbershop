const menubar = document.querySelector('.menubar');
const navegacion = document.querySelector('.navegacion');
const menu_item = document.querySelectorAll('.navegacion .item a');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('active');
    navegacion.classList.toggle('active');
})
menu_item.forEach(item => {
    item.addEventListener('click',() => {
    menubar.classList.toggle('active');
    navegacion.classList.toggle('active');
    })
})