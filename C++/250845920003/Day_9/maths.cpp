#include<iostream>
#include<math.h>
using namespace std;
int main(){
    int n,p,b;
    float f;
    cout<<"enter the number for sqrt"<<endl;
    
    cin>>n;
    cout<<"enter the numbers for power"<<endl;
    cin>>p>>b;
    cout<<"enter the number for floor , ceil , round and absolute"<<endl;
    cin>>f;

    cout<<"Power of "<<p<<"is "<<pow(p,b)<<endl;
    cout<<"Square root is "<<sqrt(n)<<endl;
    cout<<"Floor value is "<<floor(f)<<endl;
    cout<<"Ceil Value is "<<ceil(f)<<endl;
    cout<<"Round Value is "<<round(f)<<endl;
    cout<<"Absolute Value is "<<abs(f)<<endl;

    

}
