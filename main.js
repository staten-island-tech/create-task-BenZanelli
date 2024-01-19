/* https://docs.saavn.me/search/songs/

use this api  */
const DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    spchprt: document.querySelector("#part-of-spch"),
    parent1: document.querySelector(".container"),
    input: document.querySelector(".input")
}

//4387 up n down 1 to get teams
async function getData(x,y){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
    try {
    	const response = await fetch(url);
	    const result = await response.json();
        console.log(response)
	    console.log(result[0]);
        let thing = result[0]
        DOMSelectors.parent1.insertAdjacentHTML(
            "beforeend",
            `<div class=${thing.word}>
            <h2>${thing.word.toUpperCase()}</h2>
            <h3>${thing.meanings[0].partOfSpeech.toUpperCase()}</h3>
            <h4>${thing.meanings[0].definitions[0].definition}</h4>
            </div>`
        )
        
    } 
    catch (error) {
	    console.error(error);
    }

}
function insert(){
    DOMSelectors.itemname.addEventListener('click', function(){
        DOMSelectors.itemname.value=""
    })
    DOMSelectors.form.addEventListener('submit',function(event){
        event.preventDefault()
        let x = DOMSelectors.itemname.value.toLowerCase()
        let z = DOMSelectors.spchprt.value.toLowerCase()
        console.log(x,z)
        getData(x,z)
    })
}
insert()