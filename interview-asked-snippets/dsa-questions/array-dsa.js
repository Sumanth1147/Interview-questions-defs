// 1. Two Sum
// Given an array and a target, return indices of two numbers such that they add up to the target.
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}
// Example: Input: [2,7,11,15], 9 => Output: [0,1]

// 2. Best Time to Buy and Sell Stock
function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let price of prices) {
    min = Math.min(min, price);
    maxProfit = Math.max(maxProfit, price - min);
  }
  return maxProfit;
}
// Example: [7,1,5,3,6,4] => 5

// 3. Contains Duplicate
function containsDuplicate(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
}
// Example: [1,2,3,1] => true

// 4. Product of Array Except Self
function productExceptSelf(nums) {
  const n = nums.length;
  const res = Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}
// Example: [1,2,3,4] => [24,12,8,6]

// 5. Maximum Subarray (Kadane’s Algorithm)
function maxSubArray(nums) {
  let max = nums[0], curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}
// Example: [-2,1,-3,4,-1,2,1,-5,4] => 6

// 6. Move Zeroes
function moveZeroes(nums) {
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) nums[insertPos++] = num;
  }
  while (insertPos < nums.length) nums[insertPos++] = 0;
  return nums;
}
// Example: [0,1,0,3,12] => [1,3,12,0,0]

// 7. Rotate Array by k Steps
function rotate(nums, k) {
  k %= nums.length;
  nums.reverse();
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  function reverse(start, end) {
    while (start < end) [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
}
// Example: [1,2,3,4,5,6,7], k=3 => [5,6,7,1,2,3,4]

// 8. Find the Duplicate Number
function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
// Example: [1,3,4,2,2] => 2

// 9. Merge Intervals
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let [start, end] of intervals.slice(1)) {
    let last = result[result.length - 1];
    if (start <= last[1]) last[1] = Math.max(last[1], end);
    else result.push([start, end]);
  }
  return result;
}
// Example: [[1,3],[2,6],[8,10],[15,18]] => [[1,6],[8,10],[15,18]]

// 10. Intersection of Two Arrays
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter(x => set2.has(x));
}
// Example: [1,2,2,1], [2,2] => [2]

// 11. Pascal's Triangle
function generate(numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const row = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(row);
  }
  return res;
}
// Example: 5 => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// 12. Majority Element (Moore’s Voting Algorithm)
function majorityElement(nums) {
  let count = 0, candidate = null;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
// Example: [3,2,3] => 3

// 13. Find All Duplicates in an Array
function findDuplicates(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) res.push(Math.abs(nums[i]));
    nums[idx] = -nums[idx];
  }
  return res;
}
// Example: [4,3,2,7,8,2,3,1] => [2,3]

// 14. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) nums[++i] = nums[j];
  }
  return i + 1;
}
// Example: [1,1,2] => length 2, array becomes [1,2]

// 15. Find Missing Number
function missingNumber(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let n = nums.length;
  return (n * (n + 1)) / 2 - sum;
}
// Example: [3,0,1] => 2

// 16. Max Consecutive Ones
function findMaxConsecutiveOnes(nums) {
  let count = 0, max = 0;
  for (let num of nums) {
    count = (num === 1) ? count + 1 : 0;
    max = Math.max(max, count);
  }
  return max;
}
// Example: [1,1,0,1,1,1] => 3

// 17. Check if Array is Sorted and Rotated
function check(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) count++;
  }
  return count <= 1;
}
// Example: [3,4,5,1,2] => true

// 18. Next Greater Element
function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  return nums1.map(n => map.get(n) || -1);
}
// Example: nums1=[4,1,2], nums2=[1,3,4,2] => [-1,3,-1]

// 19. Third Maximum Number
function thirdMax(nums) {
  const set = [...new Set(nums)].sort((a, b) => b - a);
  return set[2] !== undefined ? set[2] : set[0];
}
// Example: [3,2,1] => 1

// 20. Minimum Size Subarray Sum
function minSubArrayLen(target, nums) {
  let left = 0, sum = 0, minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
// Example: target=7, nums=[2,3,1,2,4,3] => 2


// Triplet Sum: Find indices i, j, k such that nums[i] + nums[j] + nums[k] === target

function findTriplets(nums, target) {
  const result = [];
  const n = nums.length;

  // Brute-force approach: O(n^3), but we’ll filter duplicates
  const seen = new Set(); // To avoid duplicate index combinations

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          const key = `${i},${j},${k}`;
          if (!seen.has(key)) {
            seen.add(key);
            result.push([i, j, k]);
          }
        }
      }
    }
  }

  return result;
}

// 🔍 Example:
const nums = [2, 7, 4, 0, 9, 5, 1, 3];
const target = 10;
console.log(findTriplets(nums, target));
// Output: Array of index triplets where sum matches target
// Possible Output: [[0,1,3], [0,2,6], [0,5,6], [1,3,6], etc.]
// Note: Output may vary depending on index combination
