#include <iostream>
int *bubble(int *inArray, int size){
    if (inArray!= NULL && size > 0){
        int *prt = inArray;
        for(int i=0; i<size; i++){
            for(int j=i; j<size; j++){
                if (inArray[i]>inArray[j]){
                    int temp = inArray[i];
                    inArray[i] = inArray[j];
                    inArray[j] = temp;
                }
            }
        }
    }
    return inArray;
};

int main(){
    int myArray[] = { 9,8,7,6,5,4,3,2,1};
    int size = sizeof(myArray)/sizeof(int);
    int * newArray = bubble(myArray,size);
    for (int i=0; i<size;i++){
        int *prt = newArray;
        std::cout<<* prt+i;
    }
};