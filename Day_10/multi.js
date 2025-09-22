function multiple(a, b) {

    return new Promise((resolve, reject) => {

        let s = a * b;
        if (a > 0 && b > 0) {

            resolve("Product is " + s);
        }
        else {
            reject("Error : Number Should Be Positive");

        }
    })
}

function disp(msg) {
    console.log(msg);
}
let n1 = process.argv[2];
let n2 = process.argv[3];


multiple(n1, n2)
    .then((mesg) => {
        disp(mesg);
    })
    .catch((error) => {
        console.log(error);

    })