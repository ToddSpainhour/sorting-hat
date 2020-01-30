console.log("Your JavaScript is connected!")


//print to DOM function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



//Make stuff appear
const events = () => {
    document.getElementById('clickMeToMakeFormAppear').addEventListener('click', buildFormCard)
}


//add print to dom stuff to code below

const buildFormCard = () => {
    let domString = '';
            domString +=   `<form class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">
        
            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
            </div>
        
            <div class="form-check mb-2 mr-sm-2">
            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
            <label class="form-check-label" for="inlineFormCheck">
                Remember me
            </label>
            </div>
        
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>`;

printToDom('sendFormHere', domString)

}

buildProjectsCards(events)