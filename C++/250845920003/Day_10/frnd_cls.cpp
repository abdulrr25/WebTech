#include <iostream>
using namespace std;
class A {
    private:
    int privt;
    protected:
    int prtc;
    public:
     A(){
        privt = 24;
        prtc=234;
    }
    friend class frnd ;
};
class frnd{
    public:
    void display(A& t){
        cout<<"The private value is : "<<t.privt<<endl;
        cout<<"The protected value is : "<<t.prtc<<endl;
        
    }
};
int main(){
    A obj;
    frnd obj1;
    obj1.display(obj);
}