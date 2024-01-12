const Domselectors = {
    imgs: document.querySelectorAll(".img"),
    board: document.querySelector(".game")
}

let boards = [".",".",".",".",".",".",".",".",".",]
function confirm(x,y,z){
    Domselectors.board.insertAdjacentHTML(
        "beforeend",
        `<h3>You have chosen ${x}, you will go ${y}${z}</h3>
        <h4>Are you sure you would like to play as ${x}?</h4>`
    )
}

Domselectors.imgs.forEach((el)=> el.addEventListener("click", function(event){
    let x = this.id;
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
    confirm(x,y,z)
}
))