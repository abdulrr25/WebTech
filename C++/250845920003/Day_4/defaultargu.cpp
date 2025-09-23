#include<iostream>
using namespace std;
void add(int = 1,int =2,int =3);
int main(){
add();
add(4);
add(4,5);
add(4,7,6);
}
void add(int a, int b, int c){
    cout<<a+b+c<<endl;
}