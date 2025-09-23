#include <iostream>
using namespace std ;
class Year{
    int dd , mm , yy;
    public:
    void accept();
    void display();
    void setDd(int);
    int getMm();

};

void Year :: accept(){
    cout<<"accept day month and year\n";
    cin>>dd>>mm>>yy;
}
void Year :: display(){
    cout<<"date is: "<<dd<<"/"<<mm<<"/"<<yy<<endl;
}
void Year ::setDd(int d ){
    dd =d ;
}
int Year ::getMm(){
    return mm;
}


class Complex{
    int real,img;
    public:
    void input();
    void show();
    void setReal(int);
    int getReal();
};

void Complex::input(){
    cout<<"Enter the values of Real and img numbers : \n"<<endl;
    cin>>real>>img;

}
void Complex ::show(){
    cout<<"Complex Number is : "<<real<<"+"<<img<<"i"<<endl;

}
void Complex ::setReal(int r){
    real = r ; 
}

int Complex::getReal(){
    return real;
}


int main()
{
    Complex c1;
    c1.input();
    c1.show();
    c1.setReal(25);
    cout<<"Real Value is "<<c1.getReal()<<endl;

        Year d1;
    d1.accept();
    d1.display();
    d1.setDd(22);
    cout<<"Month is "<<d1.getMm(); 
}