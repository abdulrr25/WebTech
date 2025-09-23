#include<iostream>
using namespace std;
class Parent{
    protected:
    int protected_id;
};
class Child: Parent{
    public:
    
    void setID(int childid){
        protected_id=childid;
    }
    void display(){
        cout<<"Protected id id: "<<protected_id;
    }

    

};
int main(){
    Child c1;
    c1.setID(3);
    c1.display();
}