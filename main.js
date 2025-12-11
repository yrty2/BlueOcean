const arr=[];
async function callbo(){
    await blueocean.parse("main.bo",[
        {call:function bind(x){arr.push(x)},
         param:["R"],
         result:[]
        },
    ],
    a=>console.log(arr));
}
callbo();