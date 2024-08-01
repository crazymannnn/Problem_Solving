function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let set = new Set<number>();
    let map = new Map<number, number>();
    for (let i: number = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            map.set(nums[i], i);
        } else {
            const value = map.get(nums[i])
            if (value !== undefined) {
                if (Math.abs(i - value) <= k) {
                    return true;
                } else {
                    map.set(nums[i], i);
                }
            }
        }
    }
    return false;
}
