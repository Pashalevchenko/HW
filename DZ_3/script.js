let button = document.querySelector('.block_1__button')
let alert = document.querySelector('.block_1')

button.addEventListener('click', delElem)

function  delElem(){
    let del = this.parentElement
    alert.removeChild(del)
}