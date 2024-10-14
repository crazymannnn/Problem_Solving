function lengthOfLastWord(s: string): number {
    let count : number = 0;
    for (let i = s.length-1;  i >= 0; i--) {
        let word = s.substring(i);
        if (s[i] == " " && count == 0) {
            continue;
        } else {
            count = count + 1;
            if (word.startsWith(" ")) {
                count = count - 1;
                break;
            }
        }
    }
    return count;
};