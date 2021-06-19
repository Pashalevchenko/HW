
let mood = 50
let energe = 500
let friend = 5



function wakeUp(areYouWakeUp){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(areYouWakeUp){
                mood -=10
                resolve(`Ка же рано. Но кофе сделает этот день ярче Настроение: ${mood}`)
                return
            }
                mood += 50
                reject(`O_O, Опоздал.... Настроение: ${mood}`)
            
                
        }, 3000)
    })
}

function drinkCoffe(timeForCoffe){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(timeForCoffe){
                mood += 50
                resolve(`Люблю запах кофе поутру. Но время идти на работу Настроение:${mood}`)
                return
            }
                mood = 0
                reject(`Не сегодня. Настроение ${mood}`)
            
        }, 2000)
    })
}

function goWork(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(mood > 70){
                mood += 20
                resolve(`Продуктивный день получился. Настроение: ${mood}`)
                return
            }else
                mood -=80
                reject(`Худший день. Настроение: ${mood}`)
        }, 5000)
    })
}

function drinkBeer(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            friend -= 1
            resolve(`После работы можно отдохнуть в компании друзей и пива...  Но "Спустя час вы заметели, что пропал Коля" Друзей:${friend}, а было 5`)
           
        }, 2000)
    })
}

function findFriend(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
           let search = confirm('Отправиться на поиски Коли?')
           if(search){
               resolve('Вы покидаете шумный бар в надежде отыскть Колю')
               return 
           }
           reject('Кто такой Коля и зачем его искать?')
           
        }, 1000)
    })
}

function wherIsColya(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let find = confirm('Спустя час Вы так и не нашли колю. Продолжите поиски?')
            if(find){
                reject('Поиски не увенчались успехом. Вы вернулись в бар и хорошо провели остаток вечера')
                return
            }
                resolve('Бог с тем Колей. Вы отправились домой спать')
            

        }, 4000)
    })
}

function home(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Проснувшись утром Вы не сразу подумали о Коле. Далеко не сразу...')
        }, 2500)
    })
}
function whatHappend(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve('Спустя 5 лет Вам стало интересно, что случилось с Колей')
        }, 5000);
    })
}

function final(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve('Вы вспомнили насколько скучно было в том баре, и компания была далеко не очень')
            console.log('Коля тогда просто ушел домой')
            forImg = document.querySelector('.forImg')
             let newElem = document.createElement('img')
             newElem.src = 'https://pbs.twimg.com/media/Dsi4XzRWwAAF2MI.jpg'
             forImg.appendChild(newElem)
        }, 2000);
    })
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
.then(lostFriend =>{
    console.log(lostFriend)
    return findFriend()
})
.then(findKola =>{
    console.log(findKola)
    return wherIsColya()
})
.then(lastTry =>{
    console.log(lastTry)
    return home()
})
.then(morning =>{
    console.log(morning)
    return whatHappend()
})
.then(afterYear =>{
    console.log(afterYear)
    return final()
})
.then(remembers =>{
    console.log(remembers)
})
.finally(() =>{
    
})
.catch(reason =>{
    console.log(reason)
})
    




   
