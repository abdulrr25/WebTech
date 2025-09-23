#include<iostream>
using namespace std;
class employee{
    int id;
    public :
    employee();
    employee(int);
    virtual void display();
    virtual int findsalary()=0;

};
employee::employee(){
    cout<<"Inside employee function \n";
    id=0;
}
employee::employee(int i){
    cout<<"Inside Employee 1 \n";
    id=i;
}
void employee::display(){
    cout<<"Id of the employee is : "<<id<<endl;
}
class wageemployee:public employee
{
	int hrs,rate;
public:
	wageemployee();
	wageemployee(int,int,int);
	 void display();
int findsalary();
};
wageemployee::wageemployee()
{
	cout<<"in default of wage\n"<<endl;
	hrs=0;
	rate=0;
}
wageemployee::wageemployee(int i,int h,int r):employee(i)
{
	cout<<"in para of wage\n"<<endl;
	hrs=h;
	rate=r;
}
int wageemployee::findsalary()
{
	return hrs * rate;
}
void wageemployee::display(){
    employee::display();
    cout<<"Rate is "<<rate<<endl;
    cout<<"hours is "<<hrs<<endl;

}


int main(){
    employee *ptr;
    wageemployee we1(101,5,500);
    ptr=&we1;
    cout<<we1.findsalary();
    ptr->display();
}