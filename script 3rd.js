function test(){
    return new Promise(function(yes,no){
    if(i == 3)
        yes(true)
    else 
        no(false)
    })
}

setTimeout(function(){
    test().then(function(data){
        console.log(data)
    }).catch(function(data1){
        console.log(data1)
    })
},10000)// 3rd task