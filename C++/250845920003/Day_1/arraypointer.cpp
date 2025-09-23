#include <iostream>
using namespace std ;

int main()
{   
    cout<<"Enter size of array"<<endl;
    int b[5],i=0,k=0;
    cin>>k;
    cout<<"Enter elements in an array of size "<<k<<endl;
    for(i;i<5;i++){
        cin>>b[i];
    }
    cout<<"\nElements are : \n";
    for(i=0;i<5;i++){
        cout<<b[i]<<endl;
    }
    
    int a[3][3]={1,2,3,4,5,6,7,8,9};
    cout<<*(*(a+0)+0)<<*(*(a+0)+1)<<*(*(a+1)+0) <<*(*(a+1)+1);
}