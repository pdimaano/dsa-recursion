/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  const thisWordLength = words[0].length;
  return Math.max(thisWordLength, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  const thisVal = arr[0];
  return thisVal === val || find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;

  const thisVal = str[0];
  const mirroredVal = str[str.length - 1];
  return thisVal === mirroredVal && isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// function findIndex(arr, val, idx = 0) {
//   if(idx === arr.length) return -1;
//   if(arr[idx] === val) return idx;

//   return findIndex(arr, val, idx + 1);
// }

function findIndex(arr, val) {
  if(arr.length === 0) return -1;
  if(arr[0] === val) return 0;

  const foundIndex = findIndex(arr.slice(1), val);

  return foundIndex === -1 ? -1 : foundIndex + 1;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];

  for(let key in obj) {
    if(typeof obj[key] === "string") strArr.push(obj[key]);
    if(typeof obj[key] === "object") strArr.push(...gatherStrings(obj[key]));
  }

  return strArr;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
