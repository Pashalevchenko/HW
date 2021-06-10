// зяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let head = document.querySelector('#main_header ')
head.innerHTML = 'Apr-2021'

// b) робить шириниу елементу ul 400px

let list = document.querySelector('ul')
list.style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList  = document.querySelectorAll('.linkList')
for (item of linkList){
    item.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement  = document.querySelector('.listElement2').textContent

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allLi = document.querySelectorAll('li')
for(item3 of allLi){
    item3.style.background = 'gray'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let allA = document.querySelectorAll('a')
console.log(allA)
for (item4 of allA){
    item4.classList.add('anchor')
    item4.classList.add("element_"+item4.textContent)
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for(item5 of allA){
    if(item5.textContent === 'link3'){
        item5.style.fontSize = '40px'
    }
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let color = prompt('Введите цвет')
let subHeader = document.querySelectorAll('.sub-header')

for(item6 of subHeader){
    item6.style.background = color
    
}




// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let colorText = prompt('Введите цвет текста')

// for(item6 of subHeader){
//     if(item6.textContent === 'content 2 segment'){
//         item6.style.color = colorText
//     }
    
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let contentText = prompt('Введите текст')
// let content1 = document.querySelector('.content_1')
// content1.innerHTML = contentText

// l) отримати елементи p та змінити їм padding на 20px

allP = document.querySelectorAll('p')
for(item8 of allP){
    
    item8.style.padding = '20px'
}

console.log(allP)

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let textElem = document.querySelectorAll('.text2')
for(elem10 of textElem){
    elem10.innerHTML = 'Apr-2021'
}
console.log(textElem)








