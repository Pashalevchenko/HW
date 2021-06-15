
let mood = 50
let energe = 500
let friend = 5

function wakeUp(areYouWakeUp){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(areYouWakeUp){
                mood -=10
                resolve(`Ка же рано. Но кофе сделает этот день ярче Настроение: ${mood}`)
            }else{
                mood += 50
                reject(false)
                console.log(`O_O, Опоздал.... Настроение: ${mood}`)
            }
                
        }, 3000)
    })
}

function drinkCoffe(timeForCoffe){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(timeForCoffe){
                mood += 50
                
                resolve(`Люблю запах кофе поутру. Но время идти на работу Настроение:${mood}`)
            }else{
                mood = 0
                reject(`Не сегодня. Настроение ${mood}`)
            }
        }, 2000)
    })
}

function goWork(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(mood > 70){
                mood += 20
                resolve(`Продуктивный день получился. Настроение: ${mood}`)
            }else{
                mood -=80
                reject(`Худший день. Настроение: ${mood}`)
            }
        }, 5000)
    })
}

function drinkBeer(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            
            resolve(`После работы можно отдохнуть в компании друзей и пива...`)
            setTimeout(() =>{
                friend -= 1
                console.log(`"Спустя час вы заметели, что пропал Коля" Друзей:${friend}, а было 5`)
            }, 3000)
        }, 2000)
    })
}
function findKolya(){
    return new Promise
}




wakeUp(true)
.then(result =>{
    console.log(result)
    return drinkCoffe(result)
})
.then(coffe =>{
    console.log(coffe)
    return goWork(mood)
})
.then(work =>{
    console.log(work)
    return drinkBeer()
})
.than(lostFriend =>{
    console.log(lostFriend)
})
.catch(reason =>{
    console.log(reason)
})
    




   
