// function add(x,y){
//     console.log("Addition is: " +(x+y));
// }
// function add(a,b,c,d){
//     console.log("Addition is: " +(a+b+c+d));
// }

// function add(...a){
//     let sum=0;
//     a.forEach(x=>(sum=sum+x
//     )
// )
// console.log(sum)
// }
// add(7,1)
// add(2,3,4,5)

function add (...a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    console.log(sum);
    
}

add(2,3,4)