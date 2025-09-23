#include <iostream>
#include <limits> // Required for numeric_limits
using namespace std;
int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    if (n < 2) {
        cout << "Error: The array must have at least two elements." << std::endl;
        return 1;
    }

    int arr[n];
    cout << "Enter elements in the array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int largest = numeric_limits<int>::min();
    int secondLargest = numeric_limits<int>::min();

    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest == numeric_limits<int>::min()) {
        cout << "There is no second largest element (all elements might be the same)." <<endl;
    } else {
        cout << "The second largest element is: " << secondLargest << endl;
        for(int i=0;i<n;i++){
            cout<<arr[i] <<" ";
        }
    }

    return 0;
}