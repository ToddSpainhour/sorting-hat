
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
    //init() //should this be here?
    
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

    
        
            domString +=  `<div class="card-body col-sm-3 bg-light rounded-lg m-1">`
                    domString += `<h5 class="card-title text-center">${`Name: `}${students[i].name}</h5>`
                    domString += `<p class="card-text text-center">${`House: `}${students[i].house}</p>`
                    domString += `<p class="card-text text-center">${`Unique ID: `}${students[i].IdNumber}</p>`
                    domString +=`<button id="${students[i].IdNumber}" class="expell btn btn-primary">Expell</button>`
            domString += `</div>`  
            
        
    
//`<button id="${students[i].IdNumber}" type="button" class="expel-button btn btn-primary">Expel</button>`



printToDom('printCardsHere', domString)

}
}


const expellButton = document.getElementById('${students[i].IdNumber}');



//i need to create a event listener for the expell button that summons a function that uses splice to get rid of only that card. Then reprint.
const expellStudent = () => {
    
    if(e.target.id === students[i].IdNumber){
        students.splice(i, 1)
        return console.log("This is your expell button")
    }
    ;
    buildFormCard() 
    //init()
};





const madeUpThing = () => {
    console.log("if you see this you expell button event listener is working.")
}





//Click events that make stuff appear
const events = () => {
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', makeFormAppear);
    document.getElementById('submitButtonForUserEnteredName').addEventListener('click', studentNameSubmission); //put a id on it not a class
    document.getElementsById(`this.IdNumber`).addEventListener('click', madeUpThing);
}





const init = () => {
events()
buildFormCard()   //you need to fire this off when the user submits name
}

init()

