import carrierImg from "./icons/carrier.png";
import battleshipImg from "./icons/battleship.png";
import destroyerImg from "./icons/destroyer.png";
import submarineImg from "./icons/submarine.png";
import patrolBoatImg from "./icons/patrolBoat.png";
import { Ship } from "./models.js";

const display = (() => {
	const root = document.querySelector("#root");
	const container = document.querySelector("#root>div");

	const reset = () => {
		container.innerHTML = "";
	};

	const generateBoard = (id) => {
		const wrapper = document.createElement("div");
		const grid = document.createElement("div");
		grid.classList.add("grid");
		for (let i = 0; i < 100; i++) {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			cell.id = `cell${id}-${i}`;
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

	const loadInitialScreen = (playerBoard) => {
		const div = document.createElement("div");
		div.id = "ship-div";
		const heading = document.createElement("h2");
		heading.innerText = "Place your ships";
		div.appendChild(heading);

		const shipContainer = document.createElement("div");
		shipContainer.classList.add("ships");

		const shipDiv1 = document.createElement("div");
		shipDiv1.classList.add("ship-container");
		const carrier = document.createElement("img");
		carrier.src = carrierImg;
		carrier.id = "carrier";
		//carrier.draggable = "true";
		shipDiv1.appendChild(carrier);

		const shipDiv2 = document.createElement("div");
		shipDiv2.classList.add("ship-container");
		const battleship = document.createElement("img");
		battleship.src = battleshipImg;
		battleship.id = "battleship";
		// battleship.draggable = "true";
		shipDiv2.appendChild(battleship);

		const shipDiv3 = document.createElement("div");
		shipDiv3.classList.add("ship-container");
		const destroyer = document.createElement("img");
		destroyer.src = destroyerImg;
		destroyer.id = "destroyer";
		//destroyer.draggable = "true";
		shipDiv3.appendChild(destroyer);

		const shipDiv4 = document.createElement("div");
		shipDiv4.classList.add("ship-container");
		const submarine = document.createElement("img");
		submarine.src = submarineImg;
		submarine.id = "submarine";
		//submarine.draggable = "true";

		shipDiv4.appendChild(submarine);
		const shipDiv5 = document.createElement("div");
		shipDiv5.classList.add("ship-container");
		const patrolBoat = document.createElement("img");
		patrolBoat.src = patrolBoatImg;
		patrolBoat.id = "patrolBoat";
		//patrolBoat.draggable = "true";
		shipDiv5.appendChild(patrolBoat);

		shipContainer.appendChild(shipDiv1);
		shipContainer.appendChild(shipDiv2);
		shipContainer.appendChild(shipDiv3);
		shipContainer.appendChild(shipDiv4);
		shipContainer.appendChild(shipDiv5);
		div.appendChild(shipContainer);
		const p = document.createElement("p");

		p.innerText = "Drag the ships to to the grid, and then click to rotate";
		const buttonDiv = document.createElement("div");
		div.appendChild(p);

		const randomizeButton = document.createElement("button");
		randomizeButton.innerText = "Randomize";
		const resetButton = document.createElement("button");
		resetButton.innerText = "Reset";
		buttonDiv.appendChild(randomizeButton);
		buttonDiv.appendChild(resetButton);
		div.appendChild(buttonDiv);

		container.appendChild(div);
		generateBoard(1);

		$("#carrier").draggable({
			cursorAt: { left: 104, top: 13 },
			revert: "invalid",
			containment: "#root",
		});
		$("#battleship").draggable({
			cursorAt: { left: 83, top: 13 },
			revert: "invalid",
			containment: "#root",
		});
		$("#destroyer").draggable({
			cursorAt: { left: 62, top: 13 },
			revert: "invalid",
			containment: "#root",
		});
		$("#submarine").draggable({
			cursorAt: { left: 62, top: 13 },
			revert: "invalid",
			containment: "#root",
		});
		$("#patrolBoat").draggable({
			cursorAt: { left: 41, top: 13 },
			revert: "invalid",
			containment: "#root",
		});

		for (let cell of document.querySelectorAll(".cell")) {
			$(`#${cell.id}`).droppable({
				tolerance: "pointer",
				accept: function (dragElement) {
					//$(dragElement).draggable('option','revert',false)
					return true;
				},
				drop: function (event, ui) {
					let top;
					let left;
					let cellStart;
					let cellEnd;
					let withinBound = true;
					const dragId = ui.draggable.attr("id");
					const ship = Ship(dragId);
					const dropCell = parseInt(event.target.id.split("-")[1]);
					if (dragId === "carrier") {
						top = 5;
						left = -84;
						cellStart = dropCell - 2;
						cellEnd = dropCell + 2;
						console.log(cellStart, dropCell);
						if (
							Math.floor(cellStart / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
						if (
							Math.floor(cellEnd / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
					} else if (dragId === "battleship") {
						top = 5;
						left = -83;
						cellStart = dropCell - 2;
						cellEnd = dropCell + 1;
						if (
							Math.floor(cellStart / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
						if (
							Math.floor(cellEnd / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
					} else if (
						dragId === "destroyer" ||
						dragId === "submarine"
					) {
						top = 5;
						left = -42;
						cellStart = dropCell - 1;
						cellEnd = dropCell + 1;
						if (
							Math.floor(cellStart / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
						if (
							Math.floor(cellEnd / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
					} else {
						top = 5;
						left = -42;
						cellStart = dropCell - 1;
						cellEnd = dropCell;
						if (
							Math.floor(cellStart / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
						if (
							Math.floor(cellEnd / 10) !==
							Math.floor(dropCell / 10)
						)
							withinBound = false;
					}

					if (
						withinBound &&
						playerBoard.canPlaceShip(ship, cellStart, 0)
					) {
						playerBoard.placeShip(ship, cellStart, 0);
						$(ui.draggable)
							.detach()
							.css({ top: top, left: left })
							.appendTo(this);
						ui.draggable.click(() => console.log("rotate"));
					} else {
						ui.draggable.draggable("option", "revert", true);
						setTimeout(
							() =>
								ui.draggable.draggable(
									"option",
									"revert",
									"invalid"
								),
							1
						);
					}
				},
			});
		}
	};

	return { reset, loadInitialScreen, generateBoard, winnerScreen };
})();

export default display;
