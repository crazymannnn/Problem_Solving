function checkRecord(s: string): boolean {
    let arr : string[] = s.split('');
    let cLate : number = 0;
    let cAbsent : number = 0;
    let flag : boolean = false;
    for (var x of arr) {
        if (x === 'A') {
            cAbsent++;
            flag = true;
            cLate = 0;
        } else if (x === 'L') {
            cLate++;
            flag = false;
        } else {
            cLate = 0;
        }
        if (cAbsent >= 2) {
            return false;
        }
        if (!flag && cLate >= 3) {
            return false;
        }
    }
    return true;
};