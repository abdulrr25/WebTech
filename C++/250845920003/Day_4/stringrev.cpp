#include <iostream>
#include <string>
#include <cstring>

using namespace std;
void rev(char *st1, char *st2);
int main() {
    char s1[30];
    char s2[30];
    cout << "Enter the string:" << endl;
    cin.getline(s1, 30);
    rev(s1, s2);
    cout << s2 << endl;
    return 0;
}

void rev(char *st1, char *st2) {
    int length = strlen(st1);
    for (int i = 0; i < length; i++) {
        st2[i] = st1[length - 1 - i];
    }
    
    st2[length] = '\0';
}