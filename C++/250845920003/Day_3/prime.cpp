#include<iostream>
using namespace std;
void prime(int);
int main()
{
    int n;
    cout<<"enter the number"<<endl;
    cin>>n;
    prime(n);
}
void prime(int num){
    int i=2;
    for (i;i<num;i++){
        if(num%i==0){
            cout<<"Not prime"<<endl;
            break;
        }
        else{
            cout<<"Prime Number"<<endl;
            break;
        }
    }
}