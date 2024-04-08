var btnSearch= document.querySelector('.search-box__icon')
btnSearch.onclick= function() {
    btnSearch.parentElement.classList.toggle('open')
    btnSearch.previousElementSibling.focus();
}