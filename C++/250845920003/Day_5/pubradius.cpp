#include<iostream>
using namespace std;
class Circle{
    public:
    double calculate_area(double radius){
        return 3.14*radius*radius;
    }
};
int main(){
    Circle c1;
    cout<<c1.calculate_area(4);
    
}