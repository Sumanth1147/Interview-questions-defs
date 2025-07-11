```javascript


// ============================
// 1. Reverse a String
// ============================
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"

// ============================
// 2. Check for Palindrome
// ============================
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("racecar")); // true

// ============================
// 3. Check Anagram
// ============================
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
console.log(isAnagram("listen", "silent")); // true

// ============================
// 4. First Unique Character
// ============================
function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}
console.log(firstUniqChar("leetcode")); // 0

// ============================
// 5. Valid Parentheses
// ============================
function isValid(s) {
  const stack = [];
  const map = { '(': ')', '{': '}', '[': ']' };
  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}")); // true

// ============================
// 5. Valid Parentheses, in any order
// ============================

function isBalancedBracketsUnordered(s) {
  let round = 0;   // For '(' and ')'
  let square = 0;  // For '[' and ']'
  let curly = 0;   // For '{' and '}'

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') round++;
    else if (char === ')') round--;
    else if (char === '[') square++;
    else if (char === ']') square--;
    else if (char === '{') curly++;
    else if (char === '}') curly--;

    // If any count goes negative, there's an extra closing bracket
    if (round < 0 || square < 0 || curly < 0) return false;
  }

  // All counters must end at 0 for balanced brackets
  return round === 0 && square === 0 && curly === 0;
}

// Example usage:
console.log(isBalancedBracketsUnordered("()[]{}"));     // true
console.log(isBalancedBracketsUnordered("){[("));       // false
console.log(isBalancedBracketsUnordered("){([})"));     // false
console.log(isBalancedBracketsUnordered(")([]{}"));     // true


// ============================
// 6. Longest Common Prefix
// ============================
function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

// ============================
// 7. Implement strStr()
// ============================
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}
console.log(strStr("hello", "ll")); // 2

// ============================
// 8. Group Anagrams
// ============================
function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// ============================
// 9. Longest Palindromic Substring
// ============================
function longestPalindrome(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substr = s.slice(i, j + 1);
      if (substr === substr.split('').reverse().join('') && substr.length > res.length) {
        res = substr;
      }
    }
  }
  return res;
}
console.log(longestPalindrome("babad")); // "bab" or "aba"

// ============================
// 10. String Compression
// ============================
function compress(chars) {
  let i = 0, ans = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) j++;
    chars[ans++] = chars[i];
    if (j - i > 1) {
      for (let c of String(j - i)) chars[ans++] = c;
    }
    i = j;
  }
  return ans;
}
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6

// ============================
// 11. Check if Isomorphic Strings
// ============================
function isIsomorphic(s, t) {
  const map1 = {}, map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] !== map2[t[i]]) return false;
    map1[s[i]] = i;
    map2[t[i]] = i;
  }
  return true;
}
console.log(isIsomorphic("egg", "add")); // true

// ============================
// 12. Count and Say
// ============================
function countAndSay(n) {
  if (n === 1) return "1";
  const prev = countAndSay(n - 1);
  let res = "", count = 1;

  for (let i = 1; i <= prev.length; i++) {
    if (prev[i] === prev[i - 1]) {
      count++;
    } else {
      res += count + prev[i - 1];
      count = 1;
    }
  }
  return res;
}
console.log(countAndSay(4)); // "1211"

// ============================
// 13. Multiply Strings
// ============================
function multiply(num1, num2) {
  return (BigInt(num1) * BigInt(num2)).toString();
}
console.log(multiply("123", "456")); // "56088"

// ============================
// 14. Add Binary Strings
// ============================
function addBinary(a, b) {
  let i = a.length - 1, j = b.length - 1, carry = 0, res = "";
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += +a[i--];
    if (j >= 0) sum += +b[j--];
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);
  }
  return res;
}
console.log(addBinary("11", "1")); // "100"

// ============================
// 15. Decode Ways (DP)
// ============================
function numDecodings(s) {
  if (s[0] === '0') return 0;
  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const oneDigit = +s.slice(i - 1, i);
    const twoDigit = +s.slice(i - 2, i);
    if (oneDigit >= 1) dp[i] += dp[i - 1];
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2];
  }
  return dp[s.length];
}
console.log(numDecodings("226")); // 3

// ============================
// 16. Is Subsequence
// ============================
function isSubsequence(s, t) {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
}
console.log(isSubsequence("abc", "ahbgdc")); // true

// ============================
// 17. Remove Adjacent Duplicates
// ============================
function removeDuplicates(s) {
  const stack = [];
  for (let char of s) {
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }
  return stack.join('');
}
console.log(removeDuplicates("abbaca")); // "ca"

// ============================
// 18. Min Add to Make Parentheses Valid
// ============================
function minAddToMakeValid(s) {
  let res = 0, bal = 0;
  for (let c of s) {
    if (c === '(') bal++;
    else if (bal === 0) res++;
    else bal--;
  }
  return res + bal;
}
console.log(minAddToMakeValid("()))((")); // 4

// ============================
// 19. License Key Formatting
// ============================
function licenseKeyFormatting(s, k) {
  const clean = s.replace(/-/g, '').toUpperCase();
  let res = '';
  let first = clean.length % k || k;
  res = clean.slice(0, first);
  for (let i = first; i < clean.length; i += k) {
    res += '-' + clean.slice(i, i + k);
  }
  return res;
}
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // "5F3Z-2E9W"

// ============================
// 20. Check if Rotated String
// ============================
function isRotation(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}
console.log(isRotation("abcde", "cdeab")); // true



```