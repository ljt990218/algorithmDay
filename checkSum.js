/* 滑动窗口 */
var checkSum = function (arr, sum) {
    var left = 0;
    var right = 0;
    var total = 0;
    while (right < arr.length) {
        total += arr[right];
        while (total >= sum) {
            if (total === sum) {
                return [left, right];
            }
            total -= arr[left];
            left++;
        }
        right++;
    }
    return false;
};
console.log(checkSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
