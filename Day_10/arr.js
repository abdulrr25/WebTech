function array(ar) {
    return new Promise((resolve, reject) => {

        if (ar) {
            // console.log(ar);
            let sumad = 0;
            let sumin = 0;
            let sumpr = 0;
            for (var i = 0; i < 10; i++) {
                if (ar[i] % 2 == 0) {
                    sumad = sumad + ar[i];
                }
                if (i % 2 == 0) {
                    sumin = sumin + ar[i];
                }
                let isComposite = false;
                if (ar[i] > 1) {
                    for (let k = 2; k < ar[i]; k++) {
                        if (ar[i] % k == 0) {
                            isComposite = true;
                            break;
                        }
                    }
                }
                if (ar[i] <= 1) {
                    isComposite = true;
                }
                if (isComposite) {
                    sumpr = sumpr + ar[i];
                }
            }
            console.log("Addition of Even Numbers is " + sumad + " , Even Index is " + sumin + " , prime is " + sumpr)
            resolve("Output above")
        }
        else {
            reject("Number Should be greater than 0")
        }
    })
}
function disp(msg) {
    return (msg)
}

let ar = []
for (var j = 0; j < 10; j++) {
    ar[j] = parseInt(process.argv[j + 2]);
}

array(ar).then((msg) => {
    disp(msg)
})
    .catch((Error) => {
        console.log(Error);

    })