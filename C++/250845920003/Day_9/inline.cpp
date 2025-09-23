#include<iostream>
using namespace std;
int sum(int a, int b){return (a+b);};
int main(){
    int n,m;
    cout<<"Enter value of A and B for their sum"<<endl;
    cin>>n>>m;
    cout<<"Sum is "<<sum(n,m)<<endl;
}