#include<iostream>
using namespace std;
enum Day{sunday=0,monday,tuesday,wednesday,thursday,friday,saturday
};
int main() 
{ 
    Day today=thursday;
  
    switch (today) { 
    case sunday: 
        cout << "it is sunday"; 
        break; 
    case monday: 
        cout << "it is monday"; 
        break;
    case tuesday: 
        cout << "it is tuesday"; 
        break;
    case wednesday: 
        cout << "it is mwednesday"; 
        break;
    case thursday: 
        cout << "it is thursday"; 
        break;
    case friday: 
        cout << "it is friday"; 
        break; 
    case saturday: 
        cout << "it is saturday"; 
        break;
}
}