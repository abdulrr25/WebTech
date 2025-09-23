#include<iostream>
#include <cstring>
using namespace std;
int main(){
    char str1[20];
    char str2[20];
    cout<<"Enter any string : "<<endl;
    cin>>str1;
    
    strcpy(str2,str1);
    strrev(str1);
    if(strcmp(str1,str2)){
        cout<<"Not Palindrome\n";
    }
    else{
        cout<<"Palindrome\n";
    }


}