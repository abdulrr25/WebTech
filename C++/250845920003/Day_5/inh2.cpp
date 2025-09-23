#include <iostream>
using namespace std;
class parent{
    public:
    int s_id;
};
class child:public parent{
    public :
    int ch;

};

int main()
{
    parent c1;
    int z = c1.s_id=12;
    cout<<z;
    // c1.ch=12 
}