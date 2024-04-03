// Problem 4: Write a function to check if the char is a small case or not.


function  isSmallCase(char) {
    if(char >= 'a' && char <= 'z'){
      console.log(char+ " is a Small Case");
    } else {
        console.log(char +" is Not a Small Case");
    }
}

isSmallCase('masai')
isSmallCase("Masai")