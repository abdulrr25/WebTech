#include <iostream>  
using namespace std; 
int main()  
{  
	int a,b;
	cout<<"enter values of a & b\n"<<endl;
	cin>>a>>b;//10 20
	swap1(a,b);
	cout<<"after swapping "<<endl;
	cout<<"values of a & b is "<<a<<","<<b<<endl;
}
void swap1(int p,int q)
{
	int temp;
	temp=p;
	p=q;
	q=temp;
	
}
