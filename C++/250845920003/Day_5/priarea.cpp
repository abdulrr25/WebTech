#include<iostream>
using namespace std;
class Circle{
    protected:
    double radius;
    public:
    double calculate_area(){
        return 3.14*radius*radius;
    }
};
int main(){
    Circle c1;
    c1.radius=5.5;
    cout<<c1.calculate_area();
    
}