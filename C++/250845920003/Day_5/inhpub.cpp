#include<iostream>
using namespace std;
class Base{
    public:
    int pub=3;
    protected:
    int pro=4;
    private:
    int pri=5;
    public : int getpri(){
        return pri;

    }
};
class publicderived: public Base{
    public:
    int getpro(){
        return pro;
    }

};
int main(){
    publicderived p1;
    cout<<p1.getpro()<<endl;
    cout<<p1.getpri()<<endl;
    cout<<p1.pub<<endl;
}