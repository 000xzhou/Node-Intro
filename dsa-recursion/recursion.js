/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // product([2, 3, 4])   // 24
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, long = 0) {
  // longest(["hello", "hi", "hola"])  // 5
  if (words.length === i) return long;
  if (long > words[i].length) {
    return longest(words, i + 1, long);
  } else {
    return longest(words, i + 1, words[i].length);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, estr = "") {
  // everyOther("hello")  // "hlo"
  if (i >= str.length) return estr;
  estr += str[i];
  return everyOther(str, i + 2, estr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  // isPalindrome("tacocat"); // true
  // isPalindrome("tacodog"); // false
  if (i >= Math.floor(str.length / 2)) {
    return true;
  }
  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }

  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // let animals = ["duck", "cat", "pony"];
  // findIndex(animals, "cat");  // 1
  // findIndex(animals, "porcupine");   // -1
  if (arr.length === i) return -1;
  if (arr[i] === val) {
    return i;
  }
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, revStr = "") {
  // revString("porcupine") // 'enipucrop'
  if (str.length === i) return revStr;
  revStr += str[str.length - 1 - i];
  return revString(str, i + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  // gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      gatherStrings(obj[key], arr);
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // binarySearch([1,2,3,4],1) // 0
  // binarySearch([1,2,3,4],3) // 2
  // binarySearch([1,2,3,4],5) // -1
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }
  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
