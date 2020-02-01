console.log("Your JavaScript is connected!")


const students = [
    {
        name: "Todd Spainhour",
        house: "Magic House",

    },

    {
        name: "Jimmy Bobby",
        house: "Abracabra House"
    },

    {
        name: "Susan McWitch",
        house: "Bright House"
    }
]


const makeFormAppear = () => {
    const visibleForm = document.getElementById('letsGetSortingForm')
    letsGetSortingForm.classList.remove('invisible')
    letsGetSortingForm.classList.add('visible')
    console.log("you Let's Get Sorting eventlistener is working")
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
                    domString += `<h5 class="card-title">${students[i].name}</h5>`
                    domString += `<p class="card-text">Randomly Selected House</p>`
                    domString +=`<a href="#" class="btn btn-primary">Expell</a>`
                domString += `</div>`  
            domString += `</div>`
        domString += `</div>`


printToDom('printCardsHere', domString)

}
}



//Click event that make stuff appear
const events = () => {
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', makeFormAppear)
}


const init = () => {
events()
buildFormCard()
}

init()