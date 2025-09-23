#include<iostream>
using namespace std;
int main(){
    int i,j;
    for(i=65;i<70;i++){
        for(j=65;j<=i;j++){
            cout<<char(i);
        }
        cout<<"\n";
    }
}