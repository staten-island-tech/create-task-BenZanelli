const Domselectors = {
    imgs: document.querySelectorAll(".img"),
    board: document.querySelector(".game"),
    select: document.querySelector(".selection"),
    yesbtn: document.querySelector(".yes"),
    nobtn: document.querySelector(".no"),
    se: document.querySelectorAll(".poopy")
}

let boards = [" "," "," "," "," "," "," ", " "," ",]    
function confirm(x,y,z){
    Domselectors.select.insertAdjacentHTML(
        "beforeend",
        `<div class="blah"><h3>You have chosen ${x}, you will go ${y}${z}</h3>
        <h4>Are you sure you would like to play as ${x}?</h4>
        <div class="buttons">
        <button class="yes">Yes</button>
        <button class="no">No</button>
        </div>
        </div>`
    )}
function pop(){
    for(let i=0;i<boards.length;i++){
        let TE =i+1
        Domselectors.board.insertAdjacentHTML(
            "beforeend",
            `<div class="eachthing" id="card${TE.toString()}">
            <h3 class="poopy">${boards[i]}</h3>
            </div>`
        )}
}
function choices(){
Domselectors.imgs.forEach((el)=> el.addEventListener("click", function(event){
    Domselectors.select.innerHTML = ""
    Domselectors.board.innerHTML = ""
    let boom = this.id;
    let y = 0
    let z=""
    let test = this.src
    if(this.id === "circle"){
        y=1
        z="st"
    }else{
        y=2
        z="nd"
    }
    event.preventDefault()
    confirm(boom,y,z)
    main(boom)
}))}
choices()

function main(x){
    let tada = ""
    let move = ""
    if(x=== "circle"){
        move= "player"
    }else{
        move= "computer"
    }
    if(move === "player"){
        Domselectors.select.classList.add("player")
        Domselectors.select.classList.remove("computer")
    }else if(move==="computer"){
        Domselectors.select.classList.add("computer")
        Domselectors.select.classList.remove("player")
    }
    if(Domselectors.select.classList.contains("player")){
        tada = "your"
    }
    else{
        tada = "the computers"
    }
    let yes = document.querySelector(".yes")
    let no = document.querySelector(".no")
    no.addEventListener("click", function(){
       Domselectors.select.innerHTML = ""})
    yes.addEventListener("click", function(){
        Domselectors.select.innerHTML = ""
        Domselectors.select.insertAdjacentHTML(
                'beforeend',
                `<h4>It is ${tada} turn</h4>`
        )
        pop()
        let thoa = document.querySelectorAll(".eachthing") 
    if(move==="player"){
    thoa.forEach((el)=>el.addEventListener('click', function(){ 
        move="computer"
        let bla = this.id
        let blahh = bla.split("d")
        let index = blahh[1]-1
        let replace = ""
        if(x==="circle"){
            replace = "o"
        }else{
            replace ="x"
        }
        boards[index]= replace
        Domselectors.board.innerHTML=""
        pop()        
    
}))} 
if(move==="computer"){
let int = Math.floor(Math.random() * 9);
let haha = boards[int]
let replace = ""
console.log(int)
console.log(haha)
if(haha===" "){
    if(x==="circle"){
        replace ="x"
    }else{
        replace="o"
    }
    haha=replace
    Domselectors.board.innerHTML=""
    pop()
}
}

})   

}

