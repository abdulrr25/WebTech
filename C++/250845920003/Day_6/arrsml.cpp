#include<iostream>
using namespace std;
int main(){
    int n,i;
    cout<<"Enter the size of an array: ";
    cin>>n;

    int arr[n];
    cout<<"Enter the elements in array: ";
    //cin>>arr[i];
    for(int i=0; i<n; i++){
        cin>>arr[i];


    }
    for(i=1;i<=n;i++){
        for(int j=0; j<=n; j++){
            if(arr[i]<arr[i+1]){
                int temp = arr[i];
                arr[i] = arr[i+1];
                
            }

        }
        int min=min+
    }
}