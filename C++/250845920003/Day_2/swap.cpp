#include<iostream>
using namespace std;
int main(){
    int a=5, b=10;
    swap(a,b);
    cout<<"after swapping in main \n";
    cout<<"a="<<a<<"\t"<<"b="<<b;
}
void swap(int p, int q){
    int temp;
    temp = p;
    p=q;
    q=temp;
}