#include<iostream>
using namespace std;
int main(){
    char str1[100]; 
    char str2[100];
    int i=0;
    cout<<"Enter first strings: ";
    cin.getline(str1,100);
    cout<<"Enter second strings: ";
    cin.getline(str2,100);
    while(str1[i] !='\0' && str2[i] != '\0'){
        if(str1[i]!=str2[i])
        {
            cout<<str1[i];
            
        }
        i++;
    }

               
    }