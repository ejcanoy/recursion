function iterativeFibonacci(n) {
    let total = 0;
    let fibSeq = [0];
    for(let i = 1; i <= n; i++) {
        if (i === 1) {
            fibSeq.push(1);
        } else {
            fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
        }
    }
    return fibSeq;
}

// for (let i = 1; i <= 8; i++) {
//     console.log(iterativeFibonacci(i));
// }

function recursiveFibonacci(n) {
    return n <= 1 ? n : recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// for (let i = 1; i <= 8; i++) {
//     console.log(recursiveFibonacci(i));
// }


function mergeSort(nums) {
    mergeSortHelper(nums, 0, nums.length - 1);
    return nums
}

function mergeSortHelper(nums, left, right) {   
    if (left < right)  {
        const mid = Math.floor((right - left) / 2) + left;
        mergeSortHelper(nums, left, mid);
        mergeSortHelper(nums, mid + 1, right);
        merge(nums, left, mid, right);
        console.log(nums);
    }
}

function merge(nums, left, mid, right) {
    let lp = left;
    let rp = mid + 1;
    const mergedResult = [];

    while (lp <= mid && rp <= right) {
        if (nums[lp] < nums[rp]) {
            mergedResult.push(nums[lp]);
            lp++;
        } else {
            mergedResult.push(nums[rp]);
            rp++;
        }
    }

    while (lp <= mid) {
        mergedResult.push(nums[lp]);
        lp++;
    }

    while (rp <= right) {
        mergedResult.push(nums[rp]);
        rp++;
    }

    let i = 0;
    for (let k = left; k <= right; k++) {
        nums[k] = mergedResult[i];
        i++;
    }
}


console.log(mergeSort([15,8,23,11,4]));
