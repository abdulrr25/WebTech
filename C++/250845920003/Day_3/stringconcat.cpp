#include<iostream>
#include<string.h>
using namespace std;
void concat(char*,char*);
int main(){
    char str1[30]="Hello";
    char str2[30]="everyone";
    concat(str1,str2);
    cout<<"Concatinated string is : "<<str1;
}
void concat(char *s1, char *s2){
    while(*s1!='\0'){
        s1++;
    }
    while(*s2!='\0'){
        *s1=*s2;
        s1++;
        s2++;

    }
    *s1='\0';


}