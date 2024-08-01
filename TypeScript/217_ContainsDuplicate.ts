function containsDuplicate(nums: number[]): boolean {
    let map = new Map<number, number>;
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) != null) {
            return true;
        } else {
            map.set(nums[i], 1);
        }
    }
    return false;
};

function containsDuplicate2(nums: number[]): boolean {
    let set = new Set<number>;
    for (var num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};

function containsDuplicate3(nums: number[]): boolean {
    let set = new Set<number>;
    let flag : boolean = false;
    nums.forEach((num : number) => {
        if (set.has(num)) {
            flag = true;
            return true;
        } else {
            set.add(num);
        }
    });
    return flag;
};