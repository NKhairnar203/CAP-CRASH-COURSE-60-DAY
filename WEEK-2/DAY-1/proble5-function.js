// Problem 5: Write a function to replace spaces in a given string with - .

function  replaceSpaces(str) {
    let result = '';
    for (let i=0;i<str.length;i++) {
        if (str[i] === ' ') {
            result += '-';
        } else {
            result += str[i];
        }
    }
    console.log(result)
}



replaceSpaces('hello world')