console.log("Your JavaScript is connected!")


const students = [
    
]










const makeFormAppear = () => {
    const visibleForm = document.getElementById('letsGetSortingForm')
    letsGetSortingForm.classList.remove('invisible')
    letsGetSortingForm.classList.add('visible')
    console.log("you Let's Get Sorting eventlistener is working")
}










//send info from student name button to arrary
//take info from input field and push it to the students array


const studentNameSubmission = () =>{
    //console.log("this is your sort! button")
    const studentNameEnteredByUser = document.getElementById('inputAreaForUsertoEnterName').value;
    console.log("You entered" + studentNameEnteredByUser);
    students.push(studentNameEnteredByUser);
    buildFormCard()
    
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
                    domString += `<h5 class="card-title">${`Name: `}${students[i]}</h5>`
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
    document.getElementById('submitButtonForUserEnteredName').addEventListener('click', studentNameSubmission); //put a id on it not a class
}









const init = () => {
events()
buildFormCard()   //you need to fire this off when the user submits name
}

init()