
var ch = 1;
switch (ch) {
    case 1:
        function getFactorialImpl(n) {
            for (let i = n; i > 1; i--) {
                return i * i - 1
            }
        }
        console.log(getFactorialImpl(5));
        break;

    case 2:
        function fact(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            else {
                return n * fact(n - 1);
            }
        }
        console.log(fact(5));
        break;
}

