function patrn(n){
    return new Promise((resolve, reject) => {
        if (n<=5){
            for(let i=n;i>0;i--){
                for(let j=i; j>0; j--)
                {

                    // console.log("*");
                    process.stdout.write("*")
                    
                }
                console.log();
                
            }
            resolve("Successfully Printed the Pattern");

        }
        else{
            reject("Error :Number Should Be less than 5");
        }
    })
}
function disp(msg){
    console.log(msg);
    
}
let n1 = process.argv[2];

patrn(n1).then((msg)=>{
    disp(msg)
})
.catch((err)=>{
    console.log(err);
    
})