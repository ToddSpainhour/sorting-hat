console.log("Your JavaScript is connected!")


//print to DOM function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const makeFormAppear = () => {
    const visibleForm = document.getElementById('letsGetSortingForm')
    letsGetSortingForm.classList.remove('invisible')
    letsGetSortingForm.classList.add('visible')
    console.log("you eventlistener is working")
}




//Click event that make stuff appear
const events = () => {
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', makeFormAppear)
}


const init = () => {
events()
}

init()

//add print to dom stuff to code below
/*
const buildFormCard = () => {
    let domString = '';
            domString +=   ;

printToDom('sendFormHere', domString)

}

//buildFormCard(events)

*/