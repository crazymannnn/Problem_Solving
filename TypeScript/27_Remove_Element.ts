function removeElement(nums: number[], val: number): number {
    let start : number = nums.length;
    for (var x of nums) {
        nums = nums.filter(x => x !== val);
    }
    let end : number = start - nums.length;
    return end;
};