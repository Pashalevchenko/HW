// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний





let cont = document.getElementById('content')
console.log(cont)
let block = document.getElementById('rules')
console.log(block);

cont.innerHTML = 'Бойцовский клуб'
block.innerHTML = 'Правила БК'
cont.style.backgroundColor = 'red'
block.style.backgroundColor = 'blue'

let allRuls = document.querySelector('#rules').className
console.log(allRuls)

let allClass = document.querySelectorAll('.fc_rules')
console.log(allClass)

for (item of allClass){
    item.style.color = 'red'
}
