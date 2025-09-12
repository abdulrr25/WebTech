function calculate(...a) {
    let sum = 0;
    a.forEach(x =>{

        
        sum = sum + x;
        
        if (x % 2 != 0) {
            console.log(x);
            
        } 

    } 
    
)
console.log("Max is : ", Math.max(...a));
console.log("Sum is ",sum);

}
calculate(4,5,2,3,1,4,)
calculate(2,3,5,4)

