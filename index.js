// Code your solution here!

function printString(string){
  let substring;
  console.log(string[0]);
  if (string.length > 1){
    substring = string.substring(1, string.length);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(string){
  if(string.length < 2){
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string){
  if(string[0] === string[string.length-1] && string.length > 2){
      return isPalindrome(string.substring(1, string.length-1))
  } else if(string[0] === string[string.length-1] && string.length <= 3){
    return true;
  } else {
    return false
  }
}

function addUpTo(array, index){
  if(index > 0){
    return addUpTo(array, index-1) + array[index]
  } else {
    return array[index]
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  } else if (array[0] < array[1]){
    return maxOf(array.slice(1, array.length))
  } else {
    return maxOf([array[0], ...array.slice(2)])
  }
}

function includesNumber(array, num){
  if(array[0] === num){
    return true;
  } else if(array.length === 1){
    return false;
  } else {
    return includesNumber(array.slice(1, array.length), num)
  }
}
