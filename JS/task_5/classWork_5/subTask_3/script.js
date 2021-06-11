// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.



const form = document.forms.sendForm
const name = document.querySelector('.nameStuff')
const quontity = document.querySelector('.quontity')
const price = document.querySelector('.price')
const link = document.querySelector('.link')
const btn = document.querySelector('.btn')
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.width = '400px'
form.style.rowGap = '5px'
form.style.margin = '60px auto'
console.log(form.nameStuff)
btn.addEventListener('click', sendRequest)
let click = 0
function sendRequest(ev){
    
    click += 1 
    console.log(click)
    ev.preventDefault()
    console.log(price.value)
    let arr = []
    arr.push(name.value)
    arr.push(price.value)
    arr.push(quontity.value)
    arr.push(link.value)
    console.log(arr)
    localStorage.setItem(click, arr )
}



