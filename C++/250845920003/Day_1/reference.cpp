#include<iostream>
using namespace std;
int main()
{
    int a = 25;
    int &a_n = a;
    cout<<a_n<<endl;
    
    cout<<&a_n<<"\t"<<&a<<endl;
    
}