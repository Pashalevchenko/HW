setTimeout(() =>{
    console.log('1')
}, 1000)
setTimeout(() =>{
    console.log('2')
}, 3000)
setTimeout(() =>{
    console.log('3')
}, 2000)


maney = 100

function goWork(doneJobe){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(maney > 200){
                maney +=500
                
            }
        }, 2000)
    })
}