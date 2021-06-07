// 1. --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль




// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = ['hello', 'how', 'are', 'you', 'my frend']
// let arr3 = ['that', 'number', 3, 'is', true]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)





// 2. -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль




// let arr4 = []

// arr4[0] = 1
// arr4[1] = 5
// arr4[2] = 'hello'
// arr4[3] = false


// console.log(arr4)


// 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині





// let newArr = ['hello', 'that', 'string','just', 'for', 'test', 'becouse', 'i dont now', 'what text', 'write']




// for (const newArrs of newArr){
//     document.write(`<div> Hello:  ${newArrs} </div>`)
// }





// for (const newArrs in newArr){
//     document.write(`<div> Hello:  ${newArrs} </div>`)
// }





// 4. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.





// let i = 0
// while (i < 20){
//     document.write(`<h1> hello: ${++i}</h1>`)
    
// }


// 5 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі



// let newArr = ['hello', 'that', 'string','just', 'for', 'test', 'becouse', 'i dont now', 'what text', 'write']
// let index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for (let i = 0;i < index.length; i++){
//     console.log(index[i])
// }
// for (let i = 0;i < newArr.length; i++){
//     console.log(newArr[i])
// }



// 6.- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let mixType = [true, 'hello', 'dude', false, 23, 77, 'friday', true, 'YES', 22]


// for (let i = 0; i < mixType.length; i++){
//     // console.log(mixTipe[i])
//     if (typeof mixType[i] === 'boolean'){
//         console.log(mixType[i])
//     }
  
// }

// for (let i = 0; i < mixType.length; i++){
//     // console.log(mixTipe[i])
//     if (typeof mixType[i] === 'number'){
//         console.log(mixType[i])
//     }
  
// }

// for (let i = 0; i < mixType.length; i++){
//     // console.log(mixTipe[i])
//     if (typeof mixType[i] === 'string'){
//         console.log(mixType[i])
//     }
  
// }










// 7.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі



// const numbers = []

// numbers[0] = 22
// numbers[1] = 'hi'
// numbers[2] = 19
// numbers[3] = true
// numbers[4] = 'yes'
// numbers[5] = false
// numbers[6] = 47
// numbers[7] = true
// numbers[8] = 'Script'
// numbers[9] = 99


// for (const number of numbers){
//     console.log(number)
// }







// 8.- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.writ



// for (let i = 0;i < 100; i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }




// 9.- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write



// for (let i = 0;i < 100; i +=2){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }






// 10.- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write





// for (let i = 0;i < 100; i++){
//     if (i % 2){
//         console.log(i)
//          document.write(`<div>${i}</div>`)
//     }
// }




// for (let i = 0;i < 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//          document.write(`<div>${i}</div>`)
//     }
// }






// 11. - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];



// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// let usersWithCities = []




// for (let i = 0; i < usersWithId.length; i++){
//     for(let j = 0;j < citiesWithId.length; j++){
//         if(usersWithId[i].id === citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j]
//         }
//     }
// }

// usersWithCities.push(usersWithId)

// console.log(usersWithCities)














