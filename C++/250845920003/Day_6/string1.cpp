#include <iostream>
#include <string.h>
#include <cstring>

using namespace std;
int main()
{
    char st1[40];
    char st2[20];
    char st3[100];
    cout << "enter string 1 " << endl;
    cin.getline(st1, 100);

    cout << "enter string 2 " << endl;
    cin.getline(st2, 100);
    cout<<"Copied string is : "<<strcpy(st3,st1)<<endl;
    
    cout<<strcat(st1,st2)<<endl;
}


//strcpy(dest,source );
    //s2.append(s1);