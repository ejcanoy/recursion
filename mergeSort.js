function mergeSort(nums) {
    mergeSortHelper(nums, 0, nums.length - 1);
    return nums
}

function mergeSortHelper(nums, left, right) {
    if (left >= right) return left;
    let mid = Math.trunc((right - left + 1) / 2);
    let leftVal = mergeSortHelper(nums, left, mid);
    let rightVal = mergeSortHelper(nums, mid + 1, right);
    if (nums[leftVal] > nums[rightVal]) {
        let temp = nums[leftVal];
        nums[leftVal] = nums[rightVal];
        nums[rightVal] = temp;
    }
    return;
}

console.log(mergeSort([15,8,23,11,4]));