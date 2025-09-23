#include <iostream>
using namespace std;
namespace first{
    void display(){
        cout<<"Inside first function\n";
    }
}
namespace second{
    void display(){
        cout<<"Hello, In second function";
    }
}
int main(){
    first::display();
    second::display();
}