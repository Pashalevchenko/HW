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
//     v = Math.PI * Math.pow(r, 2) * 40 
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


let array = [9,8,0,4]

function foo(arr, index){
    let newArr = []
    console.log(arr[index])
    if(arr[index]){
        
        arr[index] = arr[index +1]
        arr[index] = newArr
        console.log(newArr)
    }
    return newArr
    
}


let res = foo(array, 2)
console.log(res)



