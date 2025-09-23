#include<iostream>
using namespace std;

void increment() {
    static int num = 10; 
    cout << "Current value: " << num << endl;
    num++; 
}

int main(){
    increment(); 
    increment(); 
    increment();
    return 0;
}