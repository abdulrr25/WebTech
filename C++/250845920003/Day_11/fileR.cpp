#include <iostream>
#include <fstream>
using namespace std; 
int main() {    
    ifstream my_file("tt.txt");
    if(!my_file) {
        cout << "Error: Unable to open the file." << endl;
    }
    else
    cout<<"file opened";   
    string line;
    while (!my_file.eof()) {

        getline(my_file, line);

        cout << line << endl;
    }


    my_file.close();

    return 0;
}