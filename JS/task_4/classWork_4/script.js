
// 1. -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Human{
//     constructor(name, age, food){
//         this.name = name
//         this.age = age
//         this.food = food

//     }
// }

// class Popelushka extends Human{
//     constructor(name, age, food){
//         super(name, age, food)

        
        
//     }

//     pushArr(){
//         arr.push(this)
//     }
            
// }

// class Prince extends Human{
//     constructor(name, age, food){
//         super(name, age, food)
//     }
// }

// let arr = []

// const angelina = new Popelushka ('angelina', 18, 36)
// const nastya = new Popelushka('nastya', 17, 38)
// const karina = new Popelushka('karina', 15, 34)
// const olya = new Popelushka('olya', 18, 33)
// const dasha = new Popelushka('dasha', 18, 40)
// const vika = new Popelushka('vika', 25, 39)
// const natasha = new Popelushka('natasha', 35, 32)
// const alina = new Popelushka('alina', 17, 41)
// const masha = new Popelushka('masha', 26, 44)
// const lera = new Popelushka('lera', 20, 31)
// const prince = new Prince('prince', 30, 31)


// angelina.pushArr()
// nastya.pushArr()
// karina.pushArr()
// olya.pushArr()
// dasha.pushArr()
// vika.pushArr()
// natasha.pushArr()
// alina.pushArr()
// masha.pushArr()
// lera.pushArr()


// console.log(prince.food)
// console.log(arr.food)


// for(food of arr){
//     if(food.food === prince.food){
//         console.log(`Prince found Popelushka ${food.name}`)
//     }
// }





// 2.-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Human (name, age, footSize){
//     this.name = name
//     this.age = age
//     this.footSize = footSize
// }
// function Prince (name, age, footSize){
//     this.name = name
//     this.age = age
//     this.footSize = footSize
    
   
    
//     this.findPrincess = function(){
//         for(princess of arr){
//             if(princess.footSize === this.footSize){
//                 console.log(`${this.name} found princess ${princess.name}`)
//             }
//         }
//     }
    
    


// }
    
    








// const angelina = new Human ('angelina', 18, 36)
// const nastya = new Human('nastya', 17, 38)
// const karina = new Human('karina', 15, 34)
// const olya = new Human('olya', 18, 33)
// const dasha = new Human('dasha', 18, 40)
// const vika = new Human('vika', 25, 39)
// const natasha = new Human('natasha', 35, 32)
// const alina = new Human('alina', 17, 41)
// const masha = new Human('masha', 26, 44)
// const lera = new Human('lera', 20, 31)
// arr = [angelina, nastya, karina, olya, dasha, vika, nastya, alina, masha, lera]
// // console.log(arr)

// const dimas = new Prince('dimas', 30, 31)


// dimas.findPrincess()



// 3. -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги

//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }



function Tegs(name, action, atributs, titleOfAttr, actionOfAttr){
    this.name = name
    this.action = action
    this.atributs = function atributs(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr
        this.titleOfAttr = titleOfAttr

        
    }

    
    
  
    }
    
    

    
   


const a = new Tegs('a', 'Ссылка','fsdfsdf', 'sdfsfsdfs', 'aefrfer' )
console.log(a)

// console.log(atributs)