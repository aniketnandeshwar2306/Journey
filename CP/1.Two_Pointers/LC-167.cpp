// Two Sum II - Input Array Is Sorted

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0;
        int n = numbers.size();
        int right = n-1;

        while(left <= right){
            if((numbers[left]+numbers[right])==target) return {left+1,right+1};
            else{
                if(target-numbers[left]<numbers[right]) right--;
                else left++;
            } 
        }
        return {};
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

    int t;
    cin>>t;

    vector<int> ans;
    ans = s.twoSum(nums,t);
    
    for(int i=0;i<ans.size();i++){
        cout<<ans[i]<<' ';
    }
}