// function largestelement(arr){
//     let largestnum=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(largestnum<arr[i]){
//             largestnum= arr[i];
//         }
//     }
//     return largestnum;
// }
// const num=[3,4,1,2]
// console.log(largestelement(num));

// let a = [3,5,9,12,2,4,3];
// let m=a[0]
// a.forEach(x => {if(m<x){
//     m=x;
// }

// });
// console.log(m);

let arr=[56,12,233,111,222,535,11221,12]
function findlarg(arr){
    arr.sort((a,b)=>a-b)
    return arr[arr.length-1];
}
console.log(findlarg(arr));
