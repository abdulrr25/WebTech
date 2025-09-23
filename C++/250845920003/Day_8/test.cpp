// #include <iostream>
// using namespace std;
//  class Test {
// public:
//     // User-Defined Constructor
//     Test() { cout << "\n Constructor executed"; }

//     // User-Defined Destructor
//     ~Test() { cout << "\nDestructor executed"; }
// };
// main()
// {
//     Test t;
// }

//  #include <iostream>
// using namespace std;
// class Test {
// public:
//      Test() { cout << "\n Constructor executed"; }

//     ~Test() { cout << "\n Destructor executed"; }
// };
//  main()
// {
//     // Create multiple objects of the Test class
//     Test t, t1, t2, t3;
// }
#include <iostream>
using namespace std;

class Test
{
private:
    static int cnt1;
    static int cnt2;

public:
    static int getcnt1()
    {
        return cnt1;
    }

    Test()
    {
        cnt1++;
        cout << this << endl;
        cout << "constructor is called\n";
    }
    ~Test()
    {

        cout << "destructor is called" << ++cnt2 << endl;
        ;
        cout << this << endl;
    }
};
int Test ::cnt1 = 0;
int Test::cnt2 = 0;
int main()
{
    Test t;
    cout << &t << endl;
    Test t1;
    cout << &t1 << endl;
    cout << "no of cons called" << Test::getcnt1() << endl;
}