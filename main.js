
function random(min, max) {
	return parseInt(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}

// randomNum = 1 - 3
// 1 = rock
// 2 = paper
// 3 = scissors
function winOrLoose(randomNum, value) {
	gameview.classList.remove("slide-top")
	gameview.classList.add("slide-top-times-2")
	
	winview.classList.remove("slide-top")
	winview.classList.add("slide-top-times-2")
	
	btn.classList.add("opacity")
	
	if (randomNum == value) {
		winCondition = 'null'
	} else {
		if (randomNum == 1 && value == 2) {
			winCondition = 'true'
		} else if (randomNum == 1 && value == 3) {
			winCondition = 'false'
		} else if (randomNum == 2 && value == 1) {
			winCondition = 'false'
		} else if (randomNum == 2 && value == 3) {
			winCondition = 'true'
		} else if (randomNum == 3 && value == 1) {
			winCondition = 'true'
		} else if (randomNum == 3 && value == 2) {
			winCondition = 'false'
		} else {
			winCondition = undefined
		}  
	}
	
	if (winCondition == 'null') {
		winview.style.backgroundColor = "#5585ed"
		winTitle.textContent = "It's a draw !"
		btn.textContent = "retry !"
		
	} else if (winCondition == 'true') {
		winview.style.backgroundColor = "#55ed6b"
		winTitle.textContent = "You won !"
		btn.textContent = "won again ?"
		
	} else if (winCondition == 'false') {
		winview.style.backgroundColor = "#ed7955"
		winTitle.textContent = "Maybe next time !"
		btn.textContent = "retry !"
	} 
}

function refresh() {
	location.reload()
}

// variable de fonction
let min = 1
let max = 3
let randomNum = random(min, max)
let winCondition

// variable d'element html selectionné
let startview = document.querySelector(".start-view")
let gameview = document.querySelector(".game-view")
let winview = document.querySelector(".win-view")

let containers = document.createElement("div")
containers.classList.add("containers")

let hand = document.createElement("div")
hand.classList.add("fa-solid")
hand.classList.add("fa-hand-back-fist")
hand.setAttribute("data-value", "1")

let paper = document.createElement("div")
paper.classList.add("fa-solid")
paper.classList.add("fa-hand")
paper.setAttribute("data-value", "2")

let scissors = document.createElement("div")
scissors.classList.add("fa-solid")
scissors.classList.add("fa-hand-scissors")
scissors.setAttribute("data-value", "3")

let btn = document.createElement("div")
btn.classList.add("absolute")

// variable d'element html créé
let startTitle = document.createElement("h1")
let gameTitle = document.createElement("h1")
let winTitle = document.createElement("h1")

// ajout d'un content
startTitle.textContent = "Start !"
startview.appendChild(startTitle)

gameTitle.textContent = "Choose your hand"
gameTitle.style.color = "#111"

gameview.appendChild(gameTitle)
gameview.appendChild(containers)

containers.appendChild(hand)
containers.appendChild(paper)
containers.appendChild(scissors)

winview.appendChild(winTitle)
winview.appendChild(btn)


// if element clicked change view
document.body.addEventListener('click', () => {
	startview.classList.add("slide-top")
	gameview.classList.add("slide-top")
	winview.classList.add("slide-top")
})

hand.addEventListener('click', () => {
	winCondition = winOrLoose(randomNum, parseInt(hand.getAttribute("data-value")))
})

paper.addEventListener('click', () => {
	winCondition = winOrLoose(randomNum, parseInt(paper.getAttribute("data-value")))
})

scissors.addEventListener('click', () => {
	winCondition = winOrLoose(randomNum, parseInt(scissors.getAttribute("data-value")))
})

btn.addEventListener('click', () => {
	refresh()
})

document.addEventListener('keypress', (e) => {
	if (e.code === "ArrowLeft" || e.code === "ArrowUp" || e.code === "Enter") {
		refresh()
	}
})