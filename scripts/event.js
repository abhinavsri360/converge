let headingarrays = [...document.getElementsByClassName('content-heading')]
let eventContents = [...document.getElementsByClassName('main-content')]


// Injecting data from json




// Logic for collapse menu
const HighlightElement = (index) => {
    // Highlighting headings
    headingarrays.forEach((element,elindex)=> {
        if(elindex!==index) {
            element.classList.remove('bold')
        }else {
            element.classList.add('bold')
        }
    })
    // Displaying or hiding content
    eventContents.forEach((element,elindex)=> {
        if(elindex!=index) {
            element.classList.remove('block')

        }else {
            element.classList.add('block')

        }
    })
}

headingarrays.forEach((element,index) => {
    element.addEventListener('click', HighlightElement.bind(this,index))
});

