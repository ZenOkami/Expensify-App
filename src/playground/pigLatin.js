/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/ 

function pigIt(str){
    let string = str.split(' ');
    str = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '!' || string[i] === '.' || string[i] === '?') {
            str += string[i];
            continue;
        }
        let word = string[i].split('');
        word = [...word, word[0], 'ay'];
        word.shift();
        str += word.join('') + ' ';
    }
    return str.trim();
  }

const str = 'Hello World !';

console.log(pigIt(str));