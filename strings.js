//number one
let word = "extravaganza"
console.log(word.slice(8))

//number two
let constFood= "The quick fox jumped over the lazy dog"
console.log(constFood.slice(0,4)+ "eat"+ constFood(4))


//number three
let constStory= "The quick brown fox jumps over the lazy dog"
function countOccurrences(text, word) {
    return text.toLowerCase().split(word.toLowerCase()).length - 1;
}
console.log(countOccurrences(constStory, "the"));  
console.log(countOccurrences(constStory, "brown"));


//number four
let constString1= "The pupils are reading in the library."
console.log(constStory.includes("are"))? "are": "not found";


let constString2= "The child was sitting on the table before it fell."
console.log(constString2.includes("sitting"))? "sitting": "not found";


//number five
let upperCase = "wonderful".toUpperCase();
let lowerCase = "amazing".toLowerCase();
let titleCase = "A wonderful world".split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(upperCase); 
console.log(lowerCase);  
console.log(titleCase); 