// Code your solution here!

function printString(str){
    let substring 
    console.log(str[0])
    if(str.length > 1){
        substring = str.substring(1, str.length)
        printString(substring)
    } else {
        return true 
    }
}

function reverseString(str){
    if(str.length < 2){
        return str
    } else {
        return reverseString(str.substring(1)) + str[0]
    }
}

function isPalindrome(str){
    if(str[0] === str[str.length-1] && str.length <= 2){
        return true 
    } else if (str[0] === str[str.length-1] && str.length > 2){
        return isPalindrome(str.substring(1, str.length-1))
    } else {
        return false 
    }
}

function addUpTo(arr, idx){
    // console.log(arr)
    if(idx > 0){
        return addUpTo(arr, idx-1) + arr[idx]
    } else {
        return arr[idx]
    }
}

function maxOf(arr){
    if(arr.length <= 1){
        return arr[0]
    } else if(arr[0] < arr[1]){
        return maxOf(arr.slice(1))
    } else if(arr[0] > arr[1]){
        return maxOf(arr.filter((ele) => ele !== arr[1]))
    }
}

function includesNumber(arr, n){
    if(arr[0] === n){
        return true 
    } else if(arr.length > 1){
        return includesNumber(arr.slice(1, arr.length), n)
    } else {
        return false
    }
}