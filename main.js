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
let history = []
async function insert(x){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
    try {
    	const response = await fetch(url);
	    const result = await response.json();
        let word = result[0]
        DOMSelectors.parent1.innerHTML=""
        DOMSelectors.wordhist.innerHTML=""
        DOMSelectors.parent1.insertAdjacentHTML(
            "beforeend",
            `<h2 class="word-name">${word.word.toUpperCase()}</h2>
            <h3 class="ptspeech">${word.meanings[0].partOfSpeech.toUpperCase()}</h3>
            <p class="def">${word.meanings[0].definitions[0].definition}</p>`
        )
        makehistory(word.word.toUpperCase())
    } 
    catch (error) {
	    alert(error);
        popHist()
    }

}
function getData(){
    DOMSelectors.itemname.addEventListener('click', function(){
        DOMSelectors.itemname.value=""
    })
    DOMSelectors.submit.addEventListener('click',function(event){
        event.preventDefault()
        let x = DOMSelectors.itemname.value.toLowerCase()
        insert(x)
    })
}
getData()
function makehistory(x){
    if(!history.includes(x)){
    history.push(x)
    }
    popHist()
} 
function popHist(){
    for(let i=0;i<history.length;i++){
        DOMSelectors.wordhist.insertAdjacentHTML(
            'beforeend',
            `<h6 class="word" id=${history[i].toLowerCase()}>${history[i]}</h6>`
        
    )}
}