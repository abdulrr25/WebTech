#include<iostream>
using namespace std;
class Complex {
    int real , img;
    public:
    Complex();
    Complex(int , int);
    void display() const;
    void setreal(int);
    int getreal() const ;

};
void Complex::setreal(int r )
{
    real=r;
            
}
int Complex::getreal()const {
    return real;

}
Complex::Complex(){
    cout<<"\nIn default Constructor \n"<<endl;
    real=1;
    img=2;
}
Complex::Complex(int r, int i){
    cout<<"\nin para constructor \n"<<endl;
    real =r;
    img=i;
}
void Complex::display() const{
    cout<<"Complex numebr is :"<<real<<"+"<<img<<"i"<<endl;
}
int main(){
    const Complex c2(5,6);
    cout<<"Real part = "<<c2.getreal()<<endl;
    Complex c3(1,2);
    c3.setreal(12);
    cout<<"Real Part = "<<c3.getreal();
}