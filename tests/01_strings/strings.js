/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {

}
    if(str.includes(letter)){
        return true;
    } else 
    {return false;}
    

function isPalindrome(str) {

function isPalindrome(str) {
let strBackwards = str.toLowercase();
let backwards = ''.toLowerCase();
for (let i = strBackwards.length - 1; 1 >= 0, i--);
{backwards += strBackwards[i];
return backwards;
}
}

function cap(str, letter) {

if (str.includes(letter)){
let letter = (str.indexOf(letter) + 1);
return str.slice(letter, letter + 1).toUpperCase();
}
return 'Letter not found';
}


function firstCharacter(str1, str2) {
if (str1[0] === str2[0])
    return true;
    else if (str1[0].toUpperCase() === str[0].toUpperCase){
        return true;{
            return false;
        }
        }
    }

}

module.exports = { cap, firstCharacter };