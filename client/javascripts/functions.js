// jshint esversion: 6

//write a reverseOneWord function
function reverseWord(word) {

  return word;

}

let revWord1 = (sentence) => {
  let wordArray = sentence.split(),
    result ="";

  for (let i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i];
    let reversedWord = reverseWord(currentWord);
  }

  return result;
};

let revWord2 = (sent) => {
  let arr = sent.split("");
  let result = "";
  arr.forEach((char)=>{
    result = char + result;
  })
  return result;
};

let revWord3 = (sent) => {
  let arr = sent.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
