#include<iostream>
using namespace std;
int main()
{
    int m, n ,sum=0;
    float avg= 0.0;
    cout<<"Enter the number of subjects:"<<endl;
    cin>>n;
    cout<<"Enter the number of characters in your name\n";
    cin>>m;
    int *p_marks = new int[n];
    char *p_name = new char[m];
    cout<<"Enter your marks obtained : \n";
    for (int i=0;i<n;i++)
    {
        cin>>p_marks[i];
        sum=sum+p_marks[i];
    }
    avg=(float)sum/n;
    cout<<"Enter your name : \n";
    cin>>p_name;

    cout<<"Name of student is : "<<p_name<<endl;
    cout<<"Average of Marks is : "<<avg<<endl;
    
    delete p_marks;
    delete p_name;
}