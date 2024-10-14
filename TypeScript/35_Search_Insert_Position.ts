function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (target > nums[i] && target < nums[i + 1]) {
            return i+1;
        }
        if (i == nums.length - 1) {
            if (target > nums[i]) {
                return i + 1;
            }
        }
    }
    return 0;
};