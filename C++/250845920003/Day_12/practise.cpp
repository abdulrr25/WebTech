#include<iostream>
using namespace std;
class student{
    int n;
    string name;
    int marks[5];
    int rollno;
    public:
    void accept(){
        int sum=0;
        cout<<"Enter your name :";
        cin>>name;
        cout<<"Enter your Roll Number :";
        cin>>rollno;
        cout<<"Enter your Marks in 5 Subjects : \n";
        for(int i=0;i<5;i++){
            cin>>marks[i];
        }

        
    }

};
int main(){
    int n;
    cin>>n;
    student* s1=new student[n];
    for(int i=0;i<n;i++)
    {

        s1[i].accept();
    }
}