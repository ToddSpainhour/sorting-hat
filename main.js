console.log("Your JavaScript is connected!")


const students = [
    {
        name: "",
        house: "",

    }
]










const makeFormAppear = () => {
    const visibleForm = document.getElementById('letsGetSortingForm')
    letsGetSortingForm.classList.remove('invisible')
    letsGetSortingForm.classList.add('visible')
    console.log("you Let's Get Sorting eventlistener is working")
}










//send info from student name button to arrary
const studentNameSubmission = () =>{
    //const studentNameEnteredByUser = ''
    //document.getElementById('inlineFormInputName2').value;
    console.log("this is your sort! button")
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
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', makeFormAppear);
    document.getElementById('inlineFormInputName2').addEventListener('click', studentNameSubmission); //put a id on it not a class
}









const init = () => {
events()
//buildFormCard()   you need to fire this off when the user submits name
}

init()