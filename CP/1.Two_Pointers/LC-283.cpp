// Move Zeroes

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int i=0;
        int j=i+1;
        while(i!=j && j<nums.size()){
            if(nums[i]==0 && nums[j]!=0){
                    swap(nums[i],nums[j]);
                    i++;
                    j++;
            }
            else if(nums[i]==0 && nums[j]==0){
                j++;
            }
            else{
                i++;
                j++;
            }
        }
        // for(int i=0 ;i< nums.size();i++){
        //     for(int j=i+1;j<nums.size();j++){
        //         if(nums[i]==0) swap(nums[i],nums[j]);
        //     }
        // }   
    }
};

int main(){
    Solution s;
    int n;
    cin>>n;

    vector<int> nums;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        nums.push_back(x);
    }
    s.moveZeroes(nums);
    for(int i=0;i<nums.size();i++){
        cout<<nums[i]<<' ';
    }
}