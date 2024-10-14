function singleNumber(nums: number[]): number {
    let map : Map<number, number> = new Map<number, number>();
    for (var num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            const val = map.get(num);
            if (val !== undefined) {
                map.set(num, val + 1);
            }
        }
    }
    for (var i of map.keys()) {
        if (map.get(i)==1) {
            return i;
        }
    }
    return 0;
};