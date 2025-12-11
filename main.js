let arr=[];
async function callbo(){
    arr=[];
    await blueocean.parse("main.bo",[
        {call:function bind(x){arr.push(x)},
         param:["R"],
         result:[]
        },
    ],
    a=>{
        console.log(arr);
       });
}
callbo();

async function sea(){
    arr=[];
    await blueocean.call(document.querySelector(".left").value,[
        {call:function bind(x){arr.push(x)},
         param:["R"],
         result:[]
        },
    ],
    a=>{
        console.log(arr);
       });
}