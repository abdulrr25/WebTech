#include<iostream>
using namespace std;
class Parent{
    public:
    int id;
};
class Child: public Parent{
    public:
    int id_child;
};

// #include <bits/stdc++.h>
// using namespace std;
// class Parent {
// public:
//     int id_p;
// };
// class Child : public Parent {
// public:
//     int id_c;
// };

int main(){
    Child c1;
    c1.id_child=45;
    c1.id=2;
    
}