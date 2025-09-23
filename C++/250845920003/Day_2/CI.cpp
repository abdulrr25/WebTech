#include<iostream>
#include<cmath>

using namespace std;

void main()
{
    double p, r, t, n;

    cout << "Enter principal, rate, time and n" << endl;
    cin >> p >> r >> t >> n;

    r = r / 100.0;

    double amount = p * pow((1 + r / n), (n * t));
    double ci = amount - p;

    cout << "Compund interest is :" << ci;
    
}