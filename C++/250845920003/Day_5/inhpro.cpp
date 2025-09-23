#include <iostream> 
using namespace std; 
  
class Base { 
private: 
    int pvt = 1; 
  
protected: 
    int prot = 2; 
  
public: 
    int pub = 3; 
    int getPVT() { return pvt; } 
}; 
  
class ProtectedDerived : public Base { 
public: 
    int getProt() { return prot; } 
  
    int getPub() { return pub; } 
}; 
  
int main() 
{ 
    ProtectedDerived object1; 
    cout << "Private cannot be accessed." << endl; 
    cout << "Protected = " << object1.getProt() << endl; 
    cout << "Public = " << object1.getPub() << endl; 
    Base b1;
    cout<<b1.getPVT();
// cout<<object1.prot;//error
// cout<<object1.pub;//error
// cout<<object1.getPvt();//error

}