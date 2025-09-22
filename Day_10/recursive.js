
function rec(n){
    if(n==1){
        return 1;
    }
    else{

        return n*rec(n-1);
    }
    
}
let a = process.argv[2];
console.log(
 rec(a));