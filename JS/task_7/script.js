// setTimeout(() =>{
//     console.log('1')
// }, 1000)
// setTimeout(() =>{
//     console.log('2')
// }, 3000)
// setTimeout(() =>{
//     console.log('3')
// }, 2000)


maney = 100

function goWork(doneJobe){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(doneJobe){
                maney +=500
                resolve(maney)
            }else{
                reject(`на твоем счету без изменений ${maney}`)
            }

        }, 2000)
    })
}

function goShoping(maneyForStuff){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(maneyForStuff < 200){
                console.log('без крос сегодня')
                reject('not today')
                
            }else{
                maneyForStuff -= 200
                resolve(maneyForStuff)
                
            }
        }, 1500)
    })
}

function goEat (manyForFood){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(manyForFood > 100){
                manyForFood -= 150
                resolve(manyForFood)
                console.log('вкусно, но дорого')
            }else{
                reject('im hungry')
            }
        }, 1000)
    })
}




// goWork(true)
//     .then(res => {
//         console.log(res)
//         return goShoping(maney)
//     })
//     .then(shop =>{
//         console.log(shop)
//         return goEat(shop)
//     })
//     .then(eat =>{
//         console.log(eat)
//     })
//     .catch(resson =>{
//         console.log(resson)
//     })


async function goZavod(){
    let workRes = await goWork(true)
    console.log(workRes)
    let shop = await goShoping(workRes)
    console.log(shop)
    let eat = await goEat(shop)
    console.log(eat)
}
goZavod()

   
