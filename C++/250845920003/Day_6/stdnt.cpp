#include<iostream>
using namespace std;
class student{
    int rollno;
    char name[25];
    char dob[20];
    int totalmarks;
    public:
    void accept();
    void sort(student s1[],int);
    void display(student s1[],int);
};
void student ::accept(){
    cout<<"Enter your name :"<<endl;
    cin>>name;
    cout<<"Enter your roll number :"<<endl;
    cin>>rollno;
    cout<<"Enter your dob :"<<endl;
    cin>>dob;
    cout<<"Enter your total marks :"<<endl;
    cin>>totalmarks;
    
}
void student::display(student s1[],int size){
    cout<<"Roll Number \t\tName \t\t DOB \t\tTotal Marks"<<endl;
    for(int i=0;i<size;i++){
        cout<<s1[i].rollno<<"\t"<<s1[i].name<<"\t"<<s1[i].dob<<"\t"<<s1[i].totalmarks<<endl;
    }
}

void student::sort(student s1[],int size){
    for (int i=0;i<size-1;i++){
        for(int j=0;j<size-i-1;j++)
        {
            if (s1[j].rollno > s1[j + 1].rollno) {
                swap(s1[j], s1[j + 1]);
            }
        }
    }
}

int main(){
    int size=10;
    student s1[size];
    cout<<"Enter the details of Students :"<<endl;
    for(int i=0;i<size;i++)
    {
        s1[i].accept();
    }
    s1->sort(s1,size);
    s1->display(s1,size);

}
