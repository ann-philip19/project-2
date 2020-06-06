// jshint esversion: 6

//write a reverseOneWord function

let revWords1 = phrase => {
  let wordArray = phrase.split("");
  let newPhrase = " ";
  for (let i = 0; i < wordArray.length; i++) {
    newPhrase = wordArray[i] + newPhrase;
  }
  return newPhrase;
};

let revWords2 = (phrase) => {
  let arr = phrase.split("");
  let newPhrase = " ";
  arr.forEach(function(word) {
    newPhrase = word + newPhrase;
  });
  return newPhrase;
};

let revWords3 = (phrase) => {
  let arr = phrase.split("");
  let newPhrase = " ";
  for (const x of arr){
    newPhrase = x + newPhrase;
  }
  return newPhrase;
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
