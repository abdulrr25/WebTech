#include<iostream>
#include<string.h>
using namespace std;
int main()
{
    char str[40];
    char str1[20];
    cout << "enter string 1 " << endl;
    cin.getline(str, 100);

    cout << "enter string 2 " << endl;
    cin.getline(str1, 100);
    cout<<"size of string is: "<<sizeof(str)<<endl;
    cout<<"length of string is: "<<strlen(str)<<endl;
    
    cout<<"size of string is: "<<sizeof(str1)<<endl;
    cout<<"length of string is: "<<strlen(str1)<<endl;
    
}