let name = localStorage.getItem('name')
console.log(name)
let body = document.querySelector('body')

body.innerHTML = `<div> ${name} </div>`