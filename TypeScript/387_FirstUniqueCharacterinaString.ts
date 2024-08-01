function firstUniqChar(s: string): number {
    let arr : string[] = s.split("");
    let map = new Map<string, number>;
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) == null) {
            map.set(arr[i], 1);
        } else {
            const value = map.get(arr[i]);
            if (value !== undefined) {
                map.set(arr[i], value + 1);
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === 1) {
            return i;
        }
    }
    return -1;
};