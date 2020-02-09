
//todo list
//create a way to assign a unique ID to each card
//expell button
//bootatrap
const students = [
    
]


const studentHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];


//let randomHouse = studentHouses[Math.floor(Math.random()*studentHouses.length)];

let randomHouse = () => {
    return studentHouses[Math.floor(Math.random()*studentHouses.length)]
}





//this function is used for the click event to make the form appear
const makeFormAppear = () => {
    letsGetSortingForm.classList.remove('invisible')
    letsGetSortingForm.classList.add('visible')
}



//take info from input field and push it to the students array

const studentNameSubmission = () =>{
    
    let studentNameEnteredByUser = document.getElementById('inputAreaForUsertoEnterName').value;
    students.push({name: studentNameEnteredByUser, house: randomHouse(), IdNumber: uniqueIdNumber()}); //I wasn't including the object brackets {} before... also adding the () after the newly created randomHouse function got it working
    buildFormCard()
    init() //should this be here?
    
}


//creates unique ID number to add to each card
let uniqueIdNumber = () => {
    return Date.now();
}






//print to DOM functionality
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const buildFormCard = () => {
    let domString = '';
    for (i = 0; i < students.length; i++) {

        domString += `<div class="printCardsHere" style="width: 18rem;">`
            domString += `<div id=".bg-secondary">` //make sure this is correct
                domString +=  `<div class="card-body">`
                    domString += `<h5 class="card-title">${`Name: `}${students[i].name}</h5>`
                    domString += `<p class="card-text">${`House: `}${students[i].house}</p>`
                    domString += `<p class="card-text">${`Unique ID: `}${students[i].IdNumber}</p>`
                    domString +=`<button id="expellButton" class="expell btn btn-primary">Expell${students[i].IdNumber}</button>`
                domString += `</div>`  
            domString += `</div>`
        domString += `</div>`

//`<button id="${arr[i].id}" type="button" class="expel-button btn btn-primary">Expel</button>`
printToDom('printCardsHere', domString)

}
}

//i need to create a event listener for the expell button that summons a function that uses splice to get rid of only that card. Then reprint.
const expellStudent = () => {
    
    console.log("This is your expell button");
    buildFormCard() 
    init()
};



//Click events that make stuff appear
const events = () => {
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', makeFormAppear);
    document.getElementById('submitButtonForUserEnteredName').addEventListener('click', studentNameSubmission); //put a id on it not a class
    //document.getElementById('expellButton').addEventListener('click', expellStudent);
}





const init = () => {
events()
buildFormCard()   //you need to fire this off when the user submits name
}

init()

