import carrierImg from "./icons/carrier.png";
import battleshipImg from "./icons/battleship.png";
import destroyerImg from "./icons/destroyer.png";
import submarineImg from "./icons/submarine.png";
import patrolBoatImg from "./icons/patrolBoat.png";
import { Ship } from "./models.js";
import game from "./gameController.js";

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
		if (winner === 1) h1.innerText = "Enemy fleet has been destroyed! You win!";
		else h1.innerText = "Your fleet has been destroyed! You Lose!";
		div.appendChild(h1);
		root.after(div);
	};

	const loadInitialScreen = (playerBoard, computerBoard) => {
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
		shipDiv1.appendChild(carrier);

		const shipDiv2 = document.createElement("div");
		shipDiv2.classList.add("ship-container");
		const battleship = document.createElement("img");
		battleship.src = battleshipImg;
		battleship.id = "battleship";
		shipDiv2.appendChild(battleship);

		const shipDiv3 = document.createElement("div");
		shipDiv3.classList.add("ship-container");
		const destroyer = document.createElement("img");
		destroyer.src = destroyerImg;
		destroyer.id = "destroyer";
		shipDiv3.appendChild(destroyer);

		const shipDiv4 = document.createElement("div");
		shipDiv4.classList.add("ship-container");
		const submarine = document.createElement("img");
		submarine.src = submarineImg;
		submarine.id = "submarine";
		shipDiv4.appendChild(submarine);

		const shipDiv5 = document.createElement("div");
		shipDiv5.classList.add("ship-container");
		const patrolBoat = document.createElement("img");
		patrolBoat.src = patrolBoatImg;
		patrolBoat.id = "patrolBoat";
		shipDiv5.appendChild(patrolBoat);

		shipContainer.appendChild(shipDiv1);
		shipContainer.appendChild(shipDiv2);
		shipContainer.appendChild(shipDiv3);
		shipContainer.appendChild(shipDiv4);
		shipContainer.appendChild(shipDiv5);
		div.appendChild(shipContainer);
		const p = document.createElement("p");
		p.innerText = "Drag the ships to to the grid, and then click to rotate";
		div.appendChild(p);

		const buttonDiv1 = document.createElement("div");
		const startButton = document.createElement("button");
		startButton.innerText = "Start";
		startButton.classList.add("disabled-btn");
		startButton.id = "start";
		buttonDiv1.appendChild(startButton);
		div.appendChild(buttonDiv1);

		const buttonDiv2 = document.createElement("div");
		const randomizeButton = document.createElement("button");
		randomizeButton.innerText = "Randomize";
		const resetButton = document.createElement("button");
		resetButton.innerText = "Reset";
		buttonDiv2.appendChild(randomizeButton);
		buttonDiv2.appendChild(resetButton);
		div.appendChild(buttonDiv2);

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

		$("#carrier").addClass("horizontal");
		$("#battleship").addClass("horizontal");
		$("#destroyer").addClass("horizontal");
		$("#submarine").addClass("horizontal");
		$("#patrolBoat").addClass("horizontal");

		for (let cell of document.querySelectorAll(".cell")) {
			$(`#${cell.id}`).droppable({
				tolerance: "pointer",
				accept: function (dragElement) {
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
					if (ui.draggable.hasClass("horizontal")) {
						if (dragId === "carrier") {
							top = 5;
							left = -84;
							cellStart = dropCell - 2;
							cellEnd = dropCell + 2;
							if (Math.floor(cellStart / 10) !== Math.floor(dropCell / 10)) withinBound = false;
							if (Math.floor(cellEnd / 10) !== Math.floor(dropCell / 10)) withinBound = false;
						} else if (dragId === "battleship") {
							top = 5;
							left = -83;
							cellStart = dropCell - 2;
							cellEnd = dropCell + 1;
							if (Math.floor(cellStart / 10) !== Math.floor(dropCell / 10)) withinBound = false;
							if (Math.floor(cellEnd / 10) !== Math.floor(dropCell / 10)) withinBound = false;
						} else if (dragId === "destroyer" || dragId === "submarine") {
							top = 5;
							left = -42;
							cellStart = dropCell - 1;
							cellEnd = dropCell + 1;
							if (Math.floor(cellStart / 10) !== Math.floor(dropCell / 10)) withinBound = false;
							if (Math.floor(cellEnd / 10) !== Math.floor(dropCell / 10)) withinBound = false;
						} else {
							top = 5;
							left = -42;
							cellStart = dropCell - 1;
							cellEnd = dropCell;
							if (Math.floor(cellStart / 10) !== Math.floor(dropCell / 10)) withinBound = false;
							if (Math.floor(cellEnd / 10) !== Math.floor(dropCell / 10)) withinBound = false;
						}

						if (withinBound && playerBoard.canPlaceShip(ship, cellStart, 0)) {
							playerBoard.placeShip(ship, cellStart, 0);
							$(ui.draggable).detach().css({ top: top, left: left }).appendTo(this);
							ui.draggable.unbind("click");
							ui.draggable.click(() => {
								const cursorAt = {};
								if (ui.draggable.hasClass("horizontal")) {
									const applyCss = { transform: "rotate(90deg)" };
									if (playerBoard.canPlaceShip(ship, cellStart, 1)) {
										playerBoard.placeShip(ship, cellStart, 1);
										if (dragId === "carrier") {
											applyCss["top"] = 90;
											applyCss["left"] = -84;
											cursorAt["top"] = 104;
											cursorAt["left"] = 13;
										} else if (dragId === "battleship") {
											applyCss["top"] = 70;
											applyCss["left"] = -65;
											cursorAt["top"] = 83;
											cursorAt["left"] = 13;
										} else if (dragId === "destroyer" || dragId === "submarine") {
											applyCss["top"] = 48;
											applyCss["left"] = -36;
											cursorAt["top"] = 62;
											cursorAt["left"] = 13;
										} else {
											applyCss["top"] = 26;
											applyCss["left"] = -20;
											cursorAt["top"] = 41;
											cursorAt["left"] = 13;
										}
										$(`#${dragId}`)
											.detach()
											.css(applyCss)
											.appendTo($(`#cell1-${cellStart}`));
										$(`#${dragId}`).removeClass("horizontal");
										$(`#${dragId}`).draggable("option", "cursorAt", cursorAt);
									}
								} else {
									const applyCss = { top: 5, left: 0, transform: "rotate(0deg)" };
									if (playerBoard.canPlaceShip(ship, cellStart, 0)) {
										playerBoard.placeShip(ship, cellStart, 0);
										$(`#${dragId}`)
											.detach()
											.css(applyCss)
											.appendTo($(`#cell1-${cellStart}`));
										$(`#${dragId}`).addClass("horizontal");
										if (dragId === "carrier") {
											cursorAt["top"] = 13;
											cursorAt["left"] = 104;
										} else if (dragId === "battleship") {
											cursorAt["top"] = 13;
											cursorAt["left"] = 83;
										} else if (dragId === "destroyer" || dragId === "submarine") {
											cursorAt["top"] = 13;
											cursorAt["left"] = 62;
										} else {
											cursorAt["top"] = 13;
											cursorAt["left"] = 41;
										}
										$(`#${dragId}`).draggable("option", "cursorAt", cursorAt);
									}
								}
							});
						} else {
							ui.draggable.draggable("option", "revert", true);
							setTimeout(() => ui.draggable.draggable("option", "revert", "invalid"), 1);
						}
					} else {
						if (dragId === "carrier") {
							top = 5;
							left = -84;
							cellStart = dropCell - 20;
							cellEnd = dropCell + 20;
						} else if (dragId === "battleship") {
							top = 5;
							left = -62;
							cellStart = dropCell - 20;
							cellEnd = dropCell + 10;
						} else if (dragId === "destroyer" || dragId === "submarine") {
							top = 5;
							left = -42;
							cellStart = dropCell - 10;
							cellEnd = dropCell + 10;
						} else {
							top = 5;
							left = -42;
							cellStart = dropCell - 10;
							cellEnd = dropCell;
						}

						if (playerBoard.canPlaceShip(ship, cellStart, 1)) {
							playerBoard.placeShip(ship, cellStart, 1);
							$(ui.draggable).detach().css({ top: top, left: left }).appendTo(this);
							ui.draggable.unbind("click");
							ui.draggable.click(() => {
								const cursorAt = {};
								if (ui.draggable.hasClass("horizontal")) {
									const applyCss = { transform: "rotate(90deg)" };
									if (playerBoard.canPlaceShip(ship, cellStart, 1)) {
										playerBoard.placeShip(ship, cellStart, 1);
										if (dragId === "carrier") {
											applyCss["top"] = 90;
											applyCss["left"] = -84;
											cursorAt["top"] = 104;
											cursorAt["left"] = 13;
										} else if (dragId === "battleship") {
											applyCss["top"] = 70;
											applyCss["left"] = -65;
											cursorAt["top"] = 83;
											cursorAt["left"] = 13;
										} else if (dragId === "destroyer" || dragId === "submarine") {
											applyCss["top"] = 48;
											applyCss["left"] = -36;
											cursorAt["top"] = 62;
											cursorAt["left"] = 13;
										} else {
											applyCss["top"] = 26;
											applyCss["left"] = -20;
											cursorAt["top"] = 41;
											cursorAt["left"] = 13;
										}
										$(`#${dragId}`)
											.detach()
											.css(applyCss)
											.appendTo($(`#cell1-${cellStart}`));
										$(`#${dragId}`).removeClass("horizontal");
										$(`#${dragId}`).draggable("option", "cursorAt", cursorAt);
									}
								} else {
									const applyCss = { top: 5, left: 0, transform: "rotate(0deg)" };
									if (playerBoard.canPlaceShip(ship, cellStart, 0)) {
										playerBoard.placeShip(ship, cellStart, 0);
										$(`#${dragId}`)
											.detach()
											.css(applyCss)
											.appendTo($(`#cell1-${cellStart}`));
										$(`#${dragId}`).addClass("horizontal");
										if (dragId === "carrier") {
											cursorAt["top"] = 13;
											cursorAt["left"] = 104;
										} else if (dragId === "battleship") {
											cursorAt["top"] = 13;
											cursorAt["left"] = 83;
										} else if (dragId === "destroyer" || dragId === "submarine") {
											cursorAt["top"] = 13;
											cursorAt["left"] = 62;
										} else {
											cursorAt["top"] = 13;
											cursorAt["left"] = 41;
										}
										$(`#${dragId}`).draggable("option", "cursorAt", cursorAt);
									}
								}
							});
						} else {
							ui.draggable.draggable("option", "revert", true);
							setTimeout(() => ui.draggable.draggable("option", "revert", "invalid"), 1);
						}
					}

					if ($("#start").hasClass("disabled-btn") && playerBoard.shipCount === 5) {
						startButton.classList.remove("disabled-btn");
						$("#start").click(() => {
							document.querySelector("#ship-div").remove();
							generateBoard(2);
							$("#carrier").draggable("destroy");
							$("#battleship").draggable("destroy");
							$("#destroyer").draggable("destroy");
							$("#submarine").draggable("destroy");
							$("#patrolBoat").draggable("destroy");
							computerBoard.generateRandomConfig();
							game.start();
						});
					}
				},
			});
		}

		resetButton.addEventListener("click", () => {
			playerBoard.init();
			const applyCss = { top: 0, left: 0, transform: "rotate(0deg)" };
			$("#carrier").detach().css(applyCss).appendTo($(".ship-container:first-child"));
			$("#carrier").draggable("option", "cursorAt", { left: 104, top: 13 });
			$("#carrier").addClass("horizontal");
			$("#battleship").detach().css(applyCss).appendTo($(".ship-container:nth-child(2)"));
			$("#battleship").draggable("option", "cursorAt", { left: 83, top: 13 });
			$("#battleship").addClass("horizontal");
			$("#destroyer").detach().css(applyCss).appendTo($(".ship-container:nth-child(3)"));
			$("#destroyer").draggable("option", "cursorAt", { left: 62, top: 13 });
			$("#destroyer").addClass("horizontal");
			$("#submarine").detach().css(applyCss).appendTo($(".ship-container:nth-child(4)"));
			$("#submarine").draggable("option", "cursorAt", { left: 62, top: 13 });
			$("#submarine").addClass("horizontal");
			$("#patrolBoat").detach().css(applyCss).appendTo($(".ship-container:last-child"));
			$("#patrolBoat").draggable("option", "cursorAt", { left: 41, top: 13 });
			$("#patrolBoat").addClass("horizontal");
			startButton.classList.add("disabled-btn");
			$("#start").unbind("click");
		});

		randomizeButton.addEventListener("click", () => {
			playerBoard.init();
			const positions = playerBoard.generateRandomConfig();
			for (let position of positions) {
				const [ship, cell, orientation] = position;
				const shipSelector = $(`#${ship.type}`);
				const target = $(`#cell1-${cell}`);

				const applyCss = {};
				const cursorAt = {};
				if (orientation === 0) {
					shipSelector.addClass("horizontal");
					applyCss["top"] = 5;
					applyCss["left"] = 0;
					applyCss["transform"] = "rotate(0deg)";
					if (ship.type === "carrier") {
						cursorAt["top"] = 13;
						cursorAt["left"] = 104;
					} else if (ship.type === "battleship") {
						cursorAt["top"] = 13;
						cursorAt["left"] = 83;
					} else if (ship.type === "destroyer" || ship.type === "submarine") {
						cursorAt["top"] = 13;
						cursorAt["left"] = 62;
					} else {
						cursorAt["top"] = 13;
						cursorAt["left"] = 41;
					}
				} else {
					shipSelector.removeClass("horizontal");
					if (ship.type === "carrier") {
						applyCss["top"] = 90;
						applyCss["left"] = -84;
						applyCss["transform"] = "rotate(90deg)";
						cursorAt["top"] = 104;
						cursorAt["left"] = 13;
					} else if (ship.type === "battleship") {
						applyCss["top"] = 70;
						applyCss["left"] = -65;
						applyCss["transform"] = "rotate(90deg)";
						cursorAt["top"] = 83;
						cursorAt["left"] = 13;
					} else if (ship.type === "destroyer" || ship.type === "submarine") {
						applyCss["top"] = 48;
						applyCss["left"] = -36;
						applyCss["transform"] = "rotate(90deg)";
						cursorAt["top"] = 62;
						cursorAt["left"] = 13;
					} else {
						applyCss["top"] = 26;
						applyCss["left"] = -20;
						applyCss["transform"] = "rotate(90deg)";
						cursorAt["top"] = 41;
						cursorAt["left"] = 13;
					}
				}

				shipSelector.detach().css(applyCss).appendTo(target);
				shipSelector.draggable("option", "cursorAt", cursorAt);
			}

			if ($("#start").hasClass("disabled-btn") && playerBoard.shipCount === 5) {
				startButton.classList.remove("disabled-btn");
				$("#start").click(() => {
					document.querySelector("#ship-div").remove();
					generateBoard(2);
					$("#carrier").draggable("destroy");
					$("#battleship").draggable("destroy");
					$("#destroyer").draggable("destroy");
					$("#submarine").draggable("destroy");
					$("#patrolBoat").draggable("destroy");
					computerBoard.generateRandomConfig();
					game.start();
				});
			}
		});
	};

	return { reset, loadInitialScreen, generateBoard, winnerScreen };
})();

export default display;
