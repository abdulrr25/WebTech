#include <iostream>
#include <fstream>
using namespace std;
int main() {

    fstream my_file("tt.txt", ios::app);
    if(!my_file) {
        cout << "Failed to open the file for appending." << endl;
        return 1;  
    }
    my_file << "Hello" << endl;
    my_file << "Thak Gaya hu class kar kar ke" << endl;

    my_file << "Mujhe ghar jana haiii ;..( " << endl;

    my_file.close();

    return 0;
}