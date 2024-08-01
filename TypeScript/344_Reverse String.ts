function reverseString(s: string[]): void {
    // let start : number = 0;
    // let end : number = s.length - 1;
    // let results : string[] = [];
    // if (s.length % 2 == 0) {
    //     while (start < end) {
    //         results[end] = s[start];
    //         results[start] = s[end];
    //         start++;
    //         end--;
    //     }
    // } else {
    //     while (start <= end) {
    //         if (start == end) {
    //             results[start] = s[start];
    //             break;
    //         }
    //         results[end] = s[start];
    //         results[start] = s[end + 1];
    //         start++;
    //         end--;
    //     }
    // }
    // s = results;
    s.reverse();
};
