#include<iostream>
using namespace std;
class A{
    int i;
    public:
    int  geta();
    friend void xyz(A&);

};
int A::geta(){
    cout<<"Enter the value: ";
    cin>>this->i;

}
void xyz(A& a1obj1){
    cout<<"Friend function accessing the value of friend class "<<a1obj1.i;

}
int main(){
    A aobj;
    aobj.geta();
    xyz(aobj);
}