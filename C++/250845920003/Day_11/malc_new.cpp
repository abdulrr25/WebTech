#include <iostream>
using namespace std;
#include<stdlib.h>

class A {
    int a;
public:
   
 
    A()
    {
        cout << "Constructor was Called!"
             << endl;
    }
 
    ~A()
    {
        cout << "Destructor was Called!"
             << endl;
    }
};
 
int main()
{

    A* a = new A;
    cout << "Object of class A was "
         << "created using new operator!"
         << endl;
 
    free(a);
    cout << "Object of class A was "
         << "deleted using free keyword!"
         << endl;
 
    cout << endl;
 
    A* b = (A*)malloc(sizeof(A));
    cout << "Object of class A was "
         << "created using malloc()!"
         << endl;
 
    delete b;
    cout << "Object of class A was "
         << "deleted using delete!"
         << endl;
 
    return 0;
}
