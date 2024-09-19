let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

let turnO = true;
let winArr = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

boxes.forEach((btn) => {
	btn.addEventListener("click", () => {
		if(turnO) {
			btn.innerText = "X";
			turnO = false;
			btn.disabled = true;
		}else if(!turnO) {
			btn.innerText = "O";
			turnO = true;
			btn.disabled = true;
		}
		checkWinner();
	})
})

let checkWinner = () => {
	for(let x of winArr) {
		let a = boxes[x[0]].innerText;
		let b = boxes[x[1]].innerText;
		let c = boxes[x[2]].innerText;

		if(a != "" && b != "" && c != "") {
			if(a == b && b == c) {
				alert("the winner is " + a);
				boxes.forEach((val) => {
					val.disabled = true;
				})
			}else{

			}
		}
	}
}

reset.addEventListener("click", () => {
	boxes.forEach((val) => {
		val.innerText = "";
		val.disabled = false;
		turnO = true;
	})
})