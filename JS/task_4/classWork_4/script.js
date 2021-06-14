
// 1. -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


class Human{
    constructor(name, age, food){
        this.name = name
        this.age = age
        this.food = food

    }
}

class Popelushka{
    constructor(name, age, food){
        this.name = name
        this.age = age
        this.food = food

        
        
    }

    pushArr(){
        arr.push(this)
    }
            
}

class Prince{
    constructor(name, age, food){
        this.name = name
        this.age = age
        this.food = food

    }


    findPrincess (){
        let find = arr.find(item => item.food === prince.food)
        console.log(find)
        
    
    }
    

    
}

let arr = []

const angelina = new Popelushka ('angelina', 18, 36)
const nastya = new Popelushka('nastya', 17, 38)
const karina = new Popelushka('karina', 15, 31)
const olya = new Popelushka('olya', 18, 33)
const dasha = new Popelushka('dasha', 18, 40)
const vika = new Popelushka('vika', 25, 39)
const natasha = new Popelushka('natasha', 35, 32)
const alina = new Popelushka('alina', 17, 41)
const masha = new Popelushka('masha', 26, 44)
const lera = new Popelushka('lera', 20, 34)
const prince = new Prince('prince', 30, 31)

angelina.pushArr()
nastya.pushArr()
karina.pushArr()
olya.pushArr()
dasha.pushArr()
vika.pushArr()
natasha.pushArr()
alina.pushArr()
masha.pushArr()
lera.pushArr()


prince.findPrincess()









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


// function DescriptionTag (titleOfTag, action, attrs) {
//           this.titleOfTag = titleOfTag;
//           this.action = action;
//           this.attrs = attrs;
    
//           this.output = function () {
//               console.log(this);
//           }
//        }
    
//     let a = new DescriptionTag('a', 'Устанавливает ссылку или якорь', [
//        { accesskey: 'Активация ссылки с помощью комбинации клавиш' },
//        { coords: 'Устанавливает координаты активной области' },
//        { download: 'Предлагает скачать указанный по ссылке файл' },
//     ]);
//     let div = new DescriptionTag(
//        'div',
//        'Выделения фрагмента документа с целью изменения вида содержимого',
//        [
//           { align: 'Задает выравнивание содержимого тега' },
//           { title: 'Добавляет всплывающую подсказку к содержимому' },
//        ],
//     );
//     let h1 = new DescriptionTag(
//        'h1',
//        'Предлагает шесть заголовков разного уровня',
//        [{ align: 'Определяет выравнивание заголовка' }],
//     );
//     let span = new DescriptionTag(
//        'span',
//        'Определения строчных элементов документа',
//        ['Для этого тега доступны универсальные атрибуты'],
//     );
//     let input = new DescriptionTag(
//        'input',
//        'Предназначен для создания текстовых полей, различных кнопок',
//        [
//           { accesskey: 'Переход к элементу с помощью комбинации клавиш' },
//           { align: 'Определяет выравнивание изображения' },
//           { formaction: 'Определяет адрес обработчика формы' },
//        ],
//     );
//     let form = new DescriptionTag('form', 'Устанавливает форму на веб-странице', [
//        {
//           action:
//              'Адрес программы или документа, который обрабатывает данные формы',
//        },
//        { autocomplete: 'Включает автозаполнение полей формы' },
//        {
//           novalidate:
//              'Отменяет встроенную проверку данных формы на корректность ввода',
//        },
//     ]);
//     let option = new DescriptionTag(
//        'option',
//        'Определяет отдельные пункты списка, создаваемого с помощью контейнера',
//        [
//           { disabled: 'Заблокировать для доступа элемент списка' },
//           { label: 'Указание метки пункта списка' },
//           {
//              selected: 'Заранее устанавливает определенный пункт списка выделенным',
//           },
//        ],
//     );
//     let select = new DescriptionTag(
//        'select',
//        'создать элемент интерфейса в виде раскрывающегося списка',
//        [
//           {
//              accesskey:
//                 'Позволяет перейти к списку с помощью некоторого сочетания клавиш',
//           },
//           {
//              autofocus:
//                 'Устанавливает, что список получает фокус после загрузки страницы',
//           },
//           {
//              multiple:
//                 'Позволяет одновременно выбирать сразу несколько элементов списка',
//           },
//        ],
//     );
    
//     a.output();
//     div.output();
//     span.output();
//     input.output();
//     form.output();
//     option.output();
//     select.output();

