#include<iostream>
using namespace std;
int main(){
    int n,j=0,k=1;
    cout<<"Enter the value of n: ";
    cin>>n;
    cout<<j<<","<<k<<",";
    for(int i=2; i<=n; i++){
        int fib=j+k;
        cout<<fib<<",";
        j=k;
        k=fib;
    }
}