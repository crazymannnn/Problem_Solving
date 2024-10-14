function missingNumber(nums: number[]): number {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return 0;
};

let nums : Array<number> = [3,0,1];

console.log(missingNumber(nums)); // Output: 2