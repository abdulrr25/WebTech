#include<iostream>
using namespace std;
int main(){
    int a=5, b=10;
    cout<<"Before swapping \n ";
    cout<<"a="<<a<<"\t"<<"b="<<b;
    swap(a,b);
    cout<<"after swapping in main \n";
    cout<<"a="<<a<<"\t"<<"b="<<b;
}

void swap(int p, int q){
    int temp;
    temp = p;
    p=q;
    q=temp;
    cout<<"in swapp function:\n";
    cout<<"p="<<p<<"\t"<<"q="<<q;
}

