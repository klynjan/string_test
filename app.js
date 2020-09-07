const myDiv = document.getElementById('my-div');
const myUl = document.getElementById('my-ul');
const myInput = document.getElementById('my-input');

myInput.addEventListener('keyup', () => {
    firstLetter(myInput);
    lasttLetter(myInput.value);
    returnLength(myInput);
    returnUpperCaseWord(myInput);
    returnLowerCaseWord(myInput);
});

function firstLetter(element){
    const myfirstLetter = element.value[0];
    return myUl.innerHTML = `<li>First Character: ${myfirstLetter}</li>`;
} 

function lasttLetter(element){
    const myLastLetter = element[element.length -1];
    return myUl.innerHTML += `<li>Last Character: ${myLastLetter}</li>`;
}  

function returnLength(element){
   const myLength = element.value.length;
   return myUl.innerHTML += `<li>Amount of Characters: ${myLength}</li>`;
} 

function returnUpperCaseWord(element){
    const myUpperCaseWord = element.value.toUpperCase();
    return myUl.innerHTML += `<li>All Upper case : ${myUpperCaseWord}</li>`;
}

function returnLowerCaseWord(element){
    const myLowerCaseWord = element.value.toLowerCase();
    return myUl.innerHTML += `<li>All Lower case : ${myLowerCaseWord}</li>`;
}