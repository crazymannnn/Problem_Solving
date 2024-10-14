function climbStairs(n: number): number {
    let n1 : number = 1;
    let n2 : number = 1;
    let total = 0;
    if (n == 2) {
        return 2;
    }
    if (n == 1) {
        return 1;
    }
    for (let i = 1; i < n; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
    }
    return total;
};