const display = (() => {
	const root = document.querySelector("#root");
	const container = document.querySelector("#root>div");

	const reset = () => {
		container.innerHTML = "";
	};

	const winnerScreen = (winner) => {
		const div = document.createElement("div");
		div.classList.add("winner");
		const h1 = document.createElement("h1");
		if (winner === 1)
			h1.innerText = "Enemy fleet has been destroyed! You win!";
		else h1.innerText = "Your fleet has been destroyed! You Lose!";
		div.appendChild(h1);
		root.after(div);
	};

	const generateBoard = (id) => {
		const wrapper = document.createElement("div");
		const grid = document.createElement("div");
		grid.classList.add("grid");
		for (let i = 0; i < 100; i++) {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			if (id === 2) cell.id = `cell-${i}`;
			grid.appendChild(cell);
		}
		const heading = document.createElement("h2");
		if (id === 1) {
			grid.id = "player";
			heading.innerText = "Friendly Waters";
		} else {
			grid.id = "computer";
			heading.innerText = "Enemy Waters";
		}
		wrapper.appendChild(heading);
		wrapper.appendChild(grid);
		container.appendChild(wrapper);
	};

	return { reset, generateBoard, winnerScreen };
})();

export default display;
