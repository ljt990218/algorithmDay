/* 滑动窗口 */
const checkSum = (arr: Array<number>, sum: number) => {
    let left = 0
    let right = 0
    let total = 0
    while (right < arr.length) {
        total += arr[right]
        while (total >= sum) {
            if (total === sum) {
                return [left, right]
            }
            total -= arr[left]
            left++
        }
        right++
    }
    return false
}

console.log(checkSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
