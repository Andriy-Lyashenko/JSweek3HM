const i = 20
function check4(){
    return new Promise(function(yes,no){
        const e1 = new Promise(function(yes1,no){
                if(i<2)
              yes1('dfg')
                else
                no(false)
            })

        console.log(e1);
        if(i==1)
        yes(e1)
        else
        no(false)
    })

}
check4().then(function(data){
    console.log(data);
}).catch(function(r){
    console.log(r)

}) //Promise in to promise

 async function resolve(){
     let y = await check4()
     console.log(y)
 }
 resolve()