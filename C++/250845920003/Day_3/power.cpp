#include <iostream>
using namespace std;
int main() {
    int base, exponent,result = 1;

    cout << "Enter the base: ";
    cin >> base;

    cout << "Enter the exponent: ";
    cin >> exponent;

    for (int i = 0; i < exponent; i++) {
        result *= base;
    }

    cout << base << " raised to the power of " << exponent << " is: " << result <<endl;

    return 0;
}