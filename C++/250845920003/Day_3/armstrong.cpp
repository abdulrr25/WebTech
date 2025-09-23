#include<iostream>
using namespace std;
void armstrong(int);
int main(){
    int n;
    cout<<"Enter the number "<<endl;
    cin>>n;
    armstrong(n);
}
void armstrong(int num){
    int sum =0 , nn=num;
    while (nn!=0){
        int rem = nn%10;
        sum+=rem*rem*rem;
        nn=nn/10;
    }
    if(sum==num){
        cout<<"Armstrng Number"<<endl;

    }
    else{
        cout<<"not armstrong";
    }
}