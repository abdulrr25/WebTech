#include <iostream>
using namespace std;
class temp
{
    int a;

public:
    void get();

    temp add(temp &b1)
    {
        temp aobj3;
        aobj3.a = this->a + b1.a;
        return aobj3;
    }
    void show()
    {
        cout << "value is: " << a;
    }
};
void temp::get()
{
    cin >> this->a;
}
int main()
{
    temp obj1, obj2;
    obj1.get();
    obj2.get();
    temp aobj4 = obj1.add(obj2);
    aobj4.show();
}