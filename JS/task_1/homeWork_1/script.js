// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let hi = 'hello'
let okten = 'owu'
let com = 'com'
let num1 = 1
let num2 = 10
let num3 = -999
let num4 = 123
let num5 = 3.14
let num6 = 2.7
let num7 = 16
let boolean = true
let boolean2 = false 




function action(){

    console.log(hi)
    console.log(okten)
    console.log(com)
    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num4)
    console.log(num5)
    console.log(num6)
    console.log(num7)
    console.log(boolean)
    console.log(boolean2)
    
    
    // alert(hi)
    // alert(okten)
    // alert(com)
    // alert(num1)
    // alert(num2)
    // alert(num3)
    // alert(num4)
    // alert(num5)
    // alert(num6)
    // alert(num7)
    // alert(boolean)
    // alert(boolean2)
    
    
    document.write('<div>' + hi + '</div>')
    document.write('<div>' + okten + '</div>')
    document.write('<div>' + com + '</div>')
    document.write('<div>' + num1 + '</div>')
    document.write('<div>' + num2 + '</div>')
    document.write('<div>' + num3 + '</div>')
    document.write('<div>' + num4 + '</div>')
    document.write('<div>' + num5 + '</div>')
    document.write('<div>' + num6 + '</div>')
    document.write('<div>' + num7 + '</div>')
    document.write('<div>' + boolean + '</div>')
    document.write('<div>' + boolean2 + '</div>')

}

// action()



// 2.  Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// Вивести кожну змінну за допомогою: console.log , alert, document.write



hi = 'privet'
okten = 'okten univ'
com = 'ua'
num1 = 5
num2 = 9
num3 = -777
num4 = 737
num5 = 3.1415
num6 = 7.145
num7 = 25
boolean = false
boolean2 = true





// action()

// 3. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.


let firstName = 'Pavel'
let middleName = 'Oleksandrovoch'
let lastName = 'Levchenko'
let person = firstName + ' ' + middleName+ ' ' + lastName

// console.log(person)


// 4. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".








// firstName = prompt('Введите ваше имя')
// middleName = prompt('Введите ваше отчество')
// let age = prompt('Введите ваш возраст')

// console.log('Вітаю ' + firstName + ' ' + middleName + '. ' + 'Тобі ' + age + ' років.')










// 5. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;







// let a = 100;
// let b = '100'; 
// let c = true

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)









// 6. - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!

//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

console.log(5 < 6)
console.log(5 > 6)
console.log(5 == 6)
console.log(5 >= 6)
console.log(10 == 10)
console.log(10 === 10)
console.log(10 > 10)
console.log(10 < 10)
console.log(10 != 10)
console.log(123 === '123')
console.log(123 == '123')




