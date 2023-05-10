// 1.1

function calculateDiscount(price, discountPercentage) {
    let discountAmount = (price * discountPercentage) / 100;
    let discountedPrice = price - discountAmount;
    return discountedPrice;
  }

let price = 100;
let discountPercentage = 10;
let discountedPrice = calculateDiscount(price, discountPercentage);
console.log(discountedPrice); // gamoaq 90


// 1.2

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  const reversedString = reverseString("hello");
  console.log(reversedString);



// 1.3

function capitalizeWords(sentence) {
    let words = sentence.split(' '); 
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    }
    return words.join(' '); 
  }

  let sentence = "hello, world";
  let capitalizedSentence = capitalizeWords(sentence);
  console.log(capitalizedSentence); 
  

// 1.4

function countVowels(str) {
    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) { 
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  
    
  let str = "Hi man";
  let vowelCount = countVowels(str);
  console.log(vowelCount); // 2
  
// 1.5 

// function reverseArray(inputArray) {
//     return inputArray.split('').reverse().join('');
//   }
  
//   let array = [5,4,3,2,1]
//   console.log(array);




  function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  

 let arr = [1, 2, 3, 4, 5];
let reversedArr = reverseArray(arr);
console.log(reversedArr); // [5, 4, 3, 2, 1]
