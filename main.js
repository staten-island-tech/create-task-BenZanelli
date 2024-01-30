//DOMSelections
const DOMSelectors = {
    form: document.querySelector("#form"),
    submit: document.querySelector(".searchButton"),
    itemname: document.querySelector(".searchInput"),
    spchprt: document.querySelector("#part-of-spch"),
    parent1: document.querySelector(".card"),
    input: document.querySelector(".input"),
    hist: document.querySelector(".history"),
    wordhist:document.querySelector(".wordhist")
}
//Array Data is pushed to
let history = []
//function definition to insert data on screen
async function insert(x){
    //url with variable for data to be used as an endpoint
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
    try {
    	const response = await fetch(url);
        //turns response data into a readable array
	    const result = await response.json();
        console.log(response)
	    console.log(result[0]);
        //streamlines data into one variable
        let word = result[0]
        //clears screen
        DOMSelectors.parent1.innerHTML=""
        DOMSelectors.wordhist.innerHTML=""
        //inserts word, part of speech and definition
        DOMSelectors.parent1.insertAdjacentHTML(
            "beforeend",
            `
            <h2 class="word-name">${word.word.toUpperCase()}</h2>
            <h3 class="ptspeech">${word.meanings[0].partOfSpeech.toUpperCase()}</h3>
            <h4 class="def">${word.meanings[0].definitions[0].definition}</h4>
            `
        )
        //adds data to history array, places on screen
        makehistory(word.word.toUpperCase())
    } 
    //prevents function form running if error
    catch (error) {
        //display error to user    
	    alert(error);
        popHist()
    }

}
//function to get data from form
function getData(){
    //removes form value on click
    DOMSelectors.itemname.addEventListener('click', function(){
        DOMSelectors.itemname.value=""
    })
    //gets data from form on submit
    DOMSelectors.submit.addEventListener('click',function(event){
        event.preventDefault()
        let x = DOMSelectors.itemname.value.toLowerCase()
        console.log(x)
        //runs insertion function using data as parameter
        insert(x)
    })
}
//runs main function
getData()
//function to add data to history array
function makehistory(x){
    if(!history.includes(x)){
         //pushes word to array
    history.push(x)
    //confirms push worked
    console.log(history)
    }
    popHist()
} 
//function to streamline insertion
function popHist(){
        //iterates through array to display word history
    for(let i=0;i<history.length;i++){
        //inserts word history
        DOMSelectors.wordhist.insertAdjacentHTML(
            'beforeend',
            `<h6 class="word" id=${history[i].toLowerCase()}>${history[i]}</h6>`
        
    )}
}