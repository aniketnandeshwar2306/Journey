//Remove Duplicates from Sorted Array

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int ptr1,ptr2;
        ptr1=0;
        ptr2=1;
        int k=0;
        int n=nums.size();
        while(ptr2<n){
            if(nums[ptr1]==nums[ptr2]){
                ptr2++;
            } 
            else{
                ++ptr1;
                nums[ptr1]=nums[ptr2];
                ++k;
            }
        }
        return k+1;
    }
};

int main(){
    Solution s;
    int n ;
    cin>>n;
    vector<int> nums;
    for(int i=0; i<n;i++){
        int x;
        cin>>x;
        nums.push_back(x);
    }
    int ans = s.removeDuplicates(nums);
    cout<<ans<<endl;
    for(int i=0;i<ans;i++){
        cout<<nums[i]<<'\t';
    }
    cout<<endl;
    for(int i=0;i<n;i++){
        cout<<nums[i]<<'\t';
    }
}