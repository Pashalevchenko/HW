
// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User


function User (id, name, surename, email, phone,){
    this.id = id;
    this.name = name;
    this.surename = surename;
    this.email = email;
    this.phone = phone;
    
   
    this.pushUser = function (){
        arr.push(this)
    }
    
}

let arr = []

let user1 = new User(100, 'kostya', 'ivanov', 'kosIv@Meil.com', 54649846, )
let user2 = new User(2, 'pasha', 'ivanov', 'kosIv@Meil.com', 4524242)
let user3 = new User(3, 'max', 'ivanov', 'kosIv@Meil.com', 7375757)
let user4 = new User(4, 'karina', 'ivanov', 'kosIv@Meil.com', 54649846)
let user5 = new User(25, 'boris', 'ivanov', 'kosIv@Meil.com', 54649846)
let user6 = new User(6, 'kostya', 'ivanov', 'kosIv@Meil.com', 54649846)
let user7 = new User(7, 'jon', 'ivanov', 'kosIv@Meil.com', 54649846)
let user8 = new User(8, 'dimoon', 'ivanov', 'kosIv@Meil.com', 54649846)
let user9 = new User(77, 'lera', 'ivanov', 'kosIv@Meil.com', 892658)
let user10 = new User(10, 'oleh', 'ivanov', 'kosIv@Meil.com', 79841538)

   
user1.pushUser()
user2.pushUser()
user3.pushUser()
user4.pushUser()
user5.pushUser()
user6.pushUser()
user7.pushUser()
user8.pushUser()
user9.pushUser()
user10.pushUser()

console.log(arr)



// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client{
//     constructor(id, name, surname , email, phone, order){
//         this.id = id
//         this.name = name
//         this.surename = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
        
//     }
//     pushArr(){
//         arr.push(this)
//     }

// }

// arr = []


// const anton = new Client(1, 'anton', 'ivanov', 'ant@gmail.com', 38077777777, ['bread', 'milk', 'coffe', 'peach', 'apple'])
// const kostya = new Client(2, 'kostya', 'ivanov', 'ant@gmail.com', 38081697954, ['bread', 'milk', 'apple'])
// const oleh = new Client(3, 'oleh', 'ivanov', 'ant@gmail.com', 38097846156, ['bread', 'milk', 'coffe', 'peach', 'apple'])
// const bohdan = new Client(4, 'bohdan', 'ivanov', 'ant@gmail.com', 38058786846, ['bread', 'milk', 'coffe', ])
// const ira = new Client(5, 'ira', 'ivanov', 'ant@gmail.com', 38089498485, ['bread', 'milk', 'coffe', 'peach', 'apple'])
// const masha = new Client(6, 'masha', 'ivanov', 'ant@gmail.com', 38089598849, ['bread'])
// const pasha = new Client(7, 'pasha', 'ivanov', 'ant@gmail.com', 38059449628, ['bread', 'milk'])
// const dima = new Client(8, 'dima', 'ivanov', 'ant@gmail.com', 38098753547, ['bread', 'milk', 'coffe', 'peach', 'apple', 'fish'])
// const nastya = new Client(9, 'nastya', 'ivanov', 'ant@gmail.com', 38068716847, ['bread', 'milk', 'coffe', 'peach'])
// const tonya = new Client(10, 'tonya', 'ivanov', 'ant@gmail.com', 38068716849, ['bread', 'milk', 'coffe', 'peach', 'apple'])




// anton.pushArr()
// kostya.pushArr()
// oleh.pushArr()
// bohdan.pushArr()
// ira.pushArr()
// masha.pushArr()
// pasha.pushArr()
// dima.pushArr()
// nastya.pushArr()
// tonya.pushArr()

// console.log(arr)



// 3 Створити функцію конструктор/класс яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car




// function Car(prod, year, maxSpeed, engineV){
//     this.prod = prod
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineV = engineV



//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function(){
//         console.log(`Виробник: ${prod} \nРік випуску: ${year} \nМаксимальна швидкість ${maxSpeed} \nОб'єм двигуна: ${engineV}`)
//     }

//     this.increaseMaxSpeed = function(newSpeed){
//         maxSpeed += newSpeed
//         console.log(maxSpeed)
//     }
//     this.changeYear = function(newValue){
//         year = newValue
//         return year
//     }

//     this.addDriver = function(drivers){
//         console.log(arguments)
//         let arr = []
//         for(driver of arguments){
//             arr.push(drivers)
//         }
//             this.driver = arr
        
//         return arr
//     }
// }

// const audi = new Car('audi Corp', 2020, 270, 1983)

// audi.drive()
// audi.info()
// audi.increaseMaxSpeed(70)
// audi.changeYear(2021)
// audi.info()
// audi.addDriver('dimas')
// console.log(audi)





// class Car{
//     constructor(prod, year, maxSpeed, engineV){
//         this.prod = prod
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engineV = engineV


        
//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function(){
//         console.log(`Виробник: ${prod} \nРік випуску: ${year} \nМаксимальна швидкість ${maxSpeed} \nОб'єм двигуна: ${engineV}`)
//     }

//     this.increaseMaxSpeed = function(newSpeed){
//         maxSpeed += newSpeed
//         console.log(maxSpeed)
//     }
//     this.changeYear = function(newValue){
//         year = newValue
//         return year
//     }


//     this.addDriver = function(drivers){  
//         let arr = []
//         this.driver = arr
//          for (let i = 0; i < arguments.length; i++){
//              arr.push(arguments[i])
//          }
            
//             return arr
//     }

//     }
// }

// const bmw = new Car('bmw company', 2000, 240, 1752)





// bmw.drive()
// bmw.info()
// bmw.increaseMaxSpeed(70)
// bmw.changeYear(2021)
// bmw.info()
// bmw.addDriver('dimas', 'colasic')
// console.log(bmw)








// 3. Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню



// Расскоментить задание 1




// let id1 = arr.filter(function (userId){
//     return userId.id%2 === 0
// })

// console.log(id1)

// let sort = arr.sort(function(userOne, userTwo){
    
//     return userOne.id - userTwo.id
// })



// let sort = arr.sort(function(userOne, userTwo){
    
//     return userTwo.id - userOne.id 
// })

// console.log(sort)



// 4.6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню


// Расскоментить задание 2



// let sort = arr.sort(function(userOne, userTwo){
//     return userTwo.order.length - userOne.order.length
// })

// console.log(sort)