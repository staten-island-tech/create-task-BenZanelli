/* https://docs.saavn.me/search/songs/

use this api  */
const DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent1: document.querySelector(".container"),

}

//4387 up n down 1 to get teams
const url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/team/4386/players';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aac7e6b1dmshe54e5f3ba0d7c82p1e541ejsn8479615d9fd8',
		'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
/* function insert(){
    DOMSelectors.form.addEventListener('submit',function(event){
        event.preventDefault()
        let x = DOMSelectors.itemname.value.toLowerCase()
        let y = x.replaceAll(' ','+')
        console.log(y)
        getData(y)
    })
}
insert() */