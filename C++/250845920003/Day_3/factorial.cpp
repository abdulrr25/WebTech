#include<iostream>
using namespace std;
void fac(int);
int main(){
    int n;
    cout<<"enter the value of number"<<endl;
    cin>>n;
    fac(n);
}
void fac(int n){
    int fact=1;
    int num=n;
    while (num>0)
    {
        fact*=(num);
        num = num-1;
    }
    cout<<fact;
}

// #include<iostream>
// using namespace std;

// void fac(int n){
//     if (n < 0) {
//         cout << "Factorial is not defined for negative numbers." << endl;
//         return;
//     }
//     long long fact = 1;

//     while (n > 0) {
//         fact *= n;  
//         n--;        
//     }
    
//     cout << "The factorial is: " << fact << endl;
// }
