// 1.  Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.







// let str = 'Привіт'
// let num = 123
// let flag = true
// let text = "true"

// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof flag)
// console.log(typeof text)







// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
// 34,
// 12,
// 66,
// 90,
// 87
// Старайтесь використовувати різні оператори.
// Example: 88 = (16 / 2) * 11




// Немного не понял, что имеется ввиду (Похоже на 3-е задание?)







// let a1 = (10 * 4) - 6
// let a2 = 144 / 6 - 12
// let a3 = '6' + 6 - 0
// let a4 = 200 - 120 + 10
// let a5 = 3 * 28 + 3
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)








// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг






// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 =  5 + '3'
// let a9 = '5' - 3
// let a10 = 75 + 'кг'

// console.log(a6)
// console.log(a7)
// console.log(a8)
// console.log(a9)
// console.log(a10)





// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s




// let height = 23
// let width = 10

// let s = height * width

// console.log(s + 'm^2')



// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.






// let heightC = 10
// let dC = 4

// let v = (Math.PI * Math.pow((dC/2), 2)) * heightC
// console.log(v)





// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).








// let n = 3
// let m = 4

// let k = Math.pow(n, 2) + Math.pow(m, 2)

// console.log(k + '^2')







// 7. В задании нет пункта 7:(


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n)




// alert('ФИО: Левченко Павел Александрович \nвозраст: 25 \nхобби: спорт, книги')







// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write







// let str1 = 'Кто'
// let str2 = 'ты'
// let str3 = 'такой?'

// let concatenation = str1 + ' ' + str2+ ' ' + str3

// document.write(concatenation)




// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?



     // let str = "20";
     // let a = 5;
     // document.write(str + a + "<br/>"); // JS видит, что string + num и переводит num в string, происходит конкатенация
     // document.write(str - a + "<br/>"); // конкатенация работает только с плюсом, если другой оперетор, js преобразует в num и выполняет операцию
     // document.write(str * "2" + "<br/>"); // аналогично
     // document.write(str / 2 + "<br/>");// И тут так)





    //  13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert




    // let num1 = +prompt('num1')
    // let num2 = +prompt('num2')

    // alert(num1 + num2)



    // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
    //   Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert



    // let name = prompt('Введите ваше имя')
    // let sureName = prompt('Введите вашу фамилию')
    // let age = +prompt('Введите ваш возраст')

    // let res = 'Доброго вечера ' +  name + sureName + ', ' +  'мои поздравления что вам ' + age
    // alert(res)















    // =====================
    // ======ДОП============
    // =====================




    // 1. Три різних числа вводяться через prompt().
    // За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)



    let n1 = +prompt('Введіть число № 1')
    let n2 = +prompt('Введіть число № 2')
    let n3 = +prompt('Введіть число № 3')

    if (n1 >= n2 && n1 >= n3 && n2 >= n3){
      console.log(n3, n2, n1)
    } else if (n2 >= n1 && n2 >= n3 && n1 >= n3){
      console.log(n3, n1, n2)

    } else if (n1 >= n3 && n1 >= n3 && n2 <= n3){
      console.log(n2, n3, n1)
    } else if (n3 >= n1 && n3 >= n2 && n1 >= n2){
      console.log(n2, n1, n3)

    } else if (n2 >= n1 && n2 >= n3 && n1 <= n3){
      console.log(n1, n3, n2)
    } else if (n3 >= n1 && n3 >= n2 && n2 >= n1){
      console.log(n1, n2, n3)

    }else {
      console.log('Введено некоректні дані')
    }



// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!





// let color = '';

// switch (color) {
//     case 'зеленый': console.log('иди')
//         break;
//     case 'желтый': console.log('подожди')
//         break;
//     case 'красный': console.log('стой')
//         break;

//     default: console.log('делай что хочешь')
//         break;
// }






// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!







// let color = prompt('какой цвет светофора?')

// let isRoadClear = confirm('На дороге есть машины?')


// if (color === 'зеленый' && isRoadClear === false){
//     alert('иди')
// }else if(color === 'зеленый' && isRoadClear === true){
//     alert('подожди пока нарушители проедут')
// }else if(color === 'желтый' && isRoadClear === true){
//     alert('жди')
// }else if(color === 'желтый' && isRoadClear === false){
//     alert('все рано жди')
// }else if(color === 'красный' && isRoadClear === false){
//     alert('стой все рано')
// }else if(color === 'красный' && isRoadClear === true){
//     alert('стой и жди')
// }else{
//     alert('делай что хочешь')
// }


































