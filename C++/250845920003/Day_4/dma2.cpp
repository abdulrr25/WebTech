#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the value of N :"<<endl;
    cin>>n;

    int *ptr = new int[n];
    cout<<"Accept the elements "<<endl;
    for(int i=0;i<n;i++)
    {
        cin>>ptr[i];
    }
    cout<<"display the elements "<<endl;
    for(int i=0;i<n;i++)
    {
        cout<<ptr[i]<<"\t";
    }
    delete[]ptr;
}