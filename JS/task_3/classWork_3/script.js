// 1. - створити функцію яка обчислює та повертає площу прямокутника висотою

// let height = 10
// let widht = 7

// function area(a, b){
//     s = a * b



//     return s
  
// }


// let res = area(height, widht)
// console.log(res)



// 2. - створити функцію яка обчислює та повертає площу кола



// let radius = 12

// function areaOfCyrcule(r){
//     s = Math.PI * Math.pow(r, 2)
//     return s
// }



// let result = areaOfCyrcule(radius)
// console.log(result)



// 3. - створити функцію яка обчислює та повертає площу (обьем) циліндру




// let radius = 12
// let height = 40

// function areaOfCyrcule(r, h){
//     v = Math.PI * Math.pow(r, 2) * h 
//     return v
// }



// let result = areaOfCyrcule(radius, height)
// console.log(result)


// 4. - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)

// function printPrint(){
//     let min = arguments[0]
//     let max = []
//     for (argument of arguments){
//         if(argument > max){
//             max = argument
//         }else if(argument < min){
            
//             min = argument
//         }
//     }
//     console.log(max)
//     return min
// }




// let min = printPrint(33, 2, 8, 99, 458, 21)
// console.log(min)





// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]





// let array = [9,8,0,4]


// function foo(arr, index){
//     let array1 = [...arr]
    
//         let item = array1[index]
//         array1[index] = array1[index +1]
//         array1[index+1] = item
        
    
//     return array1
 
// }


// let res = foo(array, 1)
// console.log(res)




// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



// let array1 = [1,0,6,0,3]
// let array2 = [0,1,2,3,4]
// let array3 = [0,0,1,0]


// function endZero(arr){
//     let zero = []
//     for(item of arr){
//         if(item === 0){
//             zero.push(item)
//         }else{
//             zero.unshift(item)
//         }
//     }
//     return zero
// }



// let res = endZero(array3)
// console.log(res)


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger



// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '

// function valid(str){
//     str = str.trim()
//     str = str.split(' ')
//     str.splice(1, str.length - 3)

//     str = str.toString()
//     str = str.replace(',,', ' ')
//     return str
// }

// let correct = valid(n3)
// console.log(correct)


