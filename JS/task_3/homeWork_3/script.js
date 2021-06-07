// // 1. створити функцію яка приймає масив та виводить його
// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.


// function numbers(){
    
// let arr =[]

// for (let i = 0; i < 10; i++){
//   num = Math.floor(Math.random() * (25 - 3) + 3)
//   arr.push(num)
// }
// return arr
// }

// newArr = numbers()
// console.log(newArr)





// 2. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function minNum(a, b, c){
//      if (a < b && a < c){
//          return a
//      }else if (b < a && b < c){
//          return b
//      }else if (c < a && c < b){
//          return c
//      }
// }


// let res = minNum(3, 5, 40)
// console.log(res)









// 3. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)



// function minNum(a, b, c){
//      if (a > b && a > c){
//          return a
//      }else if (b > a && b > c){
//          return b
//      }else if (c > a && c > b){
//          return c
//      }
// }


// let res = minNum(3, 5, 40)
// console.log(res)



// 4. створити функцію яка повертає найбільше число з масиву
// створити функцію яка повертає найменьше число з масиву



// let arr = [19, 22, 233, 2, 18, 89]



// function maxNum(arrey){
//     let max = arrey[0]
//     for (arr of arrey){
//         if (arr > max){
//             max = arr
//         }
//     }
//     return max
   
// }
   
// let res = maxNum(arr)
// console.log(res)


// ------------------------------------------------------------------------------------------------
// // Попытка сделать через цыкл. Думал сделать так что максимальное значение не попадает в else, а значит все то что в else, можно удалить. Но не получилось



//     // for (let i = 0;i < arr.length; i++){        
//     //     for (let j = 0; j < arr.length; j++){  
//     //         if(arr[i] >= arr[j]){
//     //             let max = arr[i] 
//     //             console.log(max)
                
                
                
//     //         }else{
//     //             let other = arr[i]
//     //             console.log('hello' + other)
//     //             // delete arr[i]
                
                
            
                
//     //         }
            

//     //     }
        
//     // }
//     // console.log(max)
// }

// let max = maxNum(arr)
// console.log(max)




// ______________________________________________________________________________________________


// let arr = [19, 22, 233, 2, 18, 89, -66]




// function minNum(array){

//     let min = array[0]
//     for (arr of array){
//         if(arr < min){
//             min = arr
//         }
//     }
//     return min
// }

// let min = minNum(arr)
// console.log(min)








// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
//  створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.






// let arr = [3, 6, 3, 77, 36]



// function arrSum(arrey){
//     let sum = 0
//     for (let i = 0;i < arrey.length; i++){
//         sum = sum + arrey[i]
//         res = sum/arrey.length
        
//     }
//     return res
    
// }


// let resault =  arrSum(arr)
// console.log(resault)







//6. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//  Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]





// let person = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let person2 = [{name: 'Dima', age: 13}, {model: 'Camry'}, {adress: 'bober'}]



// function newArr(array){
//     let keyArr =[]
//         for (let i = 0;i < array.length; i++){
//             for (const key in array[i]){
//                 keyArr.push(key)
                
                
                
//             }
            
//         }
    
    
//     return keyArr
// }

// let key = newArr(person)
// console.log(key)





// -------------------------------------------------------------






// function newArr(array){
//     let object =[]
//         for (let i = 0;i < array.length; i++){
//             for (const key in array[i]){
                
//                 object.push(array[i][key])
//                 // console.log(person[i][key])
                
//             }
            
//         }
        
    
//     return object
// }

// let obj = newArr(person)
// console.log(obj)









// 7. створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]




let array_1 = [1,2,3,4]
let array_2 = [2,3,4,5]


function sum(a, b){
    e = []
    for (c of a){
        for( d of b){
            if(a.indexOf(c) === b.indexOf(d)){
                e.push(+c + +d)
            }
        }
        
    }

    return e

    
}

let result = sum(array_1, array_2)
console.log(result)








