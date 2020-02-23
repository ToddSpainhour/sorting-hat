
const students = []

const studentHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

let randomHouse = () => {
    return studentHouses[Math.floor(Math.random()*studentHouses.length)]
};

//this function is used for the click event to make the form appear
const makeFormAppear = () => {
    letsGetSortingForm.classList.remove('invisible')
    letsGetSortingForm.classList.add('visible')
};

//take info from input field and push it to the students array
const studentNameSubmission = (e) =>{
    
    let studentNameEnteredByUser = document.getElementById('inputAreaForUsertoEnterName').value;
    students.push({name: studentNameEnteredByUser, house: randomHouse(), IdNumber: uniqueIdNumber()}); //I wasn't including the object brackets {} before... also adding the () after the newly created randomHouse function got it working
    buildFormCard(students);
    addExpelClickEvent(); 
    e.preventDefault();

};

// function that loops through all objects and adds click event to expel button on each object card
const addExpelClickEvent = () => {

    for (let i = 0; i < students.length; i++) {
        let expelButton = document.getElementsByClassName('expelBtn');
        expelButton[i].addEventListener('click', expel);
    }
};

// expel click event function that removes selected student and reprints the array
const expel = (e) => {
    for (let i = 0; i < students.length; i++) {
        if (e.target.id == students[i].IdNumber) {
            students.splice(i, 1);
            buildFormCard(students);
        }
    }
};

//creates unique ID number to add to each card
let uniqueIdNumber = () => {
    return Date.now();
}

//print to DOM functionality
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//builds student card
const buildFormCard = () => {
    let domString = '';
    for (i = 0; i < students.length; i++) {
            domString +=  `<div class="card-body col-sm-3 bg-light rounded-lg m-1">`
                    domString += `<h5 class="card-title text-center">${`Name: `}${students[i].name}</h5>`
                    domString += `<p class="card-text text-center">${`House: `}${students[i].house}</p>`
                    domString += `<p class="card-text text-center">${`IdNumber: `}${students[i].IdNumber}</p>`
                    domString +=`<button id="${students[i].IdNumber}" class="expelBtn btn btn-primary">Expel</button>`
            domString += `</div>`  
printToDom('printCardsHere', domString);
};
};

//Click events that make other elements appear
const events = () => {
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', makeFormAppear);
    document.getElementById('submitButtonForUserEnteredName').addEventListener('click', studentNameSubmission); //put a id on it not a class
    // document.getElementsByClassName(`expelBtn`).addEventListener('click', addExpelClickEvent )
};

const init = () => {
events()
buildFormCard() 
};

init();

