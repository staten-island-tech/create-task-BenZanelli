const Domselectors = {
    imgs: document.querySelectorAll(".img"),
    board: document.querySelector(".game"),
    select: document.querySelector(".selection"),
    yesbtn: document.querySelector(".yes"),
    nobtn: document.querySelector(".no"),
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
function choices(){
Domselectors.imgs.forEach((el)=> el.addEventListener("click", function(event){
    Domselectors.select.innerHTML = ""
    Domselectors.board.innerHTML = ""
    let boom = this.id;
    let y = 0
    let z=""
    if(this.id === "circle"){
        y=1
        z="st"
    }else{
        y=2
        z="nd"
    }
    event.preventDefault()
    confirm(boom,y,z)
    yesno(boom)
}))}
choices()
function yesno(x){
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
        console.log(move)     
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
        for(let i=0;i<boards.length;i++){
            let x =i+1           
            Domselectors.board.insertAdjacentHTML(
                "beforeend",
                `<div class="eachthing" id="card${x.toString()}">
                <h3 class="poopy">${boards[i]}</h3>
                </div>`
            )}
        let thoa = document.querySelectorAll(".eachthing")
   while(move==="player"){
    thoa.forEach((el)=>el.addEventListener('click', function(){
        move="computer"
        console.log(move)
    }))}
        })
    
}