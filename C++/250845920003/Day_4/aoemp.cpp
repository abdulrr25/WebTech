#include <iostream>
using namespace std;
class Employee
{
    int id;
    char name[30];

public:
    void getdata();
    void showdata();
};
void Employee::getdata()
{

    cout << "Enter Employees Id" << endl;
    cin >> id;
    cout << "Enter Employees Name:" << endl;
    cin >> name;
}
void Employee::showdata()
{
    cout << id << endl;
    cout << name << endl;
}
int main()
{
    Employee e[30];
    cout << "Enter the no of employee: \n";
    int n, i;
    cin >> n;
    for (i = 0; i < n; i++)
    {
        e[i].getdata();
    }
    cout << "Display element: ";
        for (i = 0; i < n; i++)
        {
            e[i].showdata();
        }
    
}