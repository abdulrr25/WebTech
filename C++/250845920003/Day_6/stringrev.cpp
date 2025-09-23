#include <iostream>
#include <string.h>
#include <cstring>

using namespace std;
int main()
{
    char st1[40];
    char st2[20];
    cout << "enter string 1 " << endl;
    cin.getline(st1, 100);

    cout << "enter string 2 " << endl;
    cin.getline(st2, 100);
    
    strcat(st1,st2);
    cout<<strrev(st1)<<endl;
}