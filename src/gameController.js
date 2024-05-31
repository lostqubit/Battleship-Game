import display from "./render.js";
import { Player } from "./models.js";

const game = (() => {
	const player = Player("1");
	const computer = Player("2");

	const playerBoard = player.board;
	const computerBoard = computer.board;

	const renderMove = (cell, res) => {
		if (res === 1) {
			cell.style.backgroundColor = "red";
		} else if (res === -1) {
			cell.style.backgroundColor = "green";
		}
	};

	const generateComputerMove = () => {
		const cell = Math.floor(Math.random() * 100);
		const x = Math.floor(cell / 10);
		const y = cell % 10;
		const res = playerBoard.processAttack(cell);
		if (res) {
			renderMove(document.querySelector(`#player>.cell:nth-child(${cell + 1})`), res);
		} else {
			generateComputerMove();
		}
	};

	const playRound = (event) => {
		const cellId = event.target.id;
		const cell = cellId.split("-")[1];
		const res = computerBoard.processAttack(cell);
		renderMove(event.target, res);
		if (res) {
			if (computerBoard.checkGameOver()) {
				for (let cell of document.querySelectorAll("#computer>.cell")) {
					cell.removeEventListener("click", playRound);
				}
				display.winnerScreen(1);
			} else {
				generateComputerMove();
				if (playerBoard.checkGameOver()) {
					for (let cell of document.querySelectorAll("#computer>.cell")) {
						cell.removeEventListener("click", playRound);
					}
					display.winnerScreen(2);
				}
			}
		}
	};

	const init = () => {
		display.reset();
		playerBoard.init();
		computerBoard.init();
		display.loadInitialScreen(playerBoard, computerBoard);
		// display.generateBoard(1);
		// display.generateBoard(2);

		// playerBoard.generateRandomConfig();
		// computerBoard.generateRandomConfig();

		// const cells = document.querySelectorAll("#computer>.cell");
		// for (let cell of cells) {
		// 	cell.addEventListener("click", playRound);
		// }
	};

	const start = () => {
		computerBoard.generateRandomConfig();

		const cells = document.querySelectorAll("#computer>.cell");
		for (let cell of cells) {
			cell.addEventListener("click", playRound);
		}
	};

	return { init, start };
})();

export default game;
