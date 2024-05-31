const Ship = (name) => {
	let length;
	if (name === "carrier") {
		length = 5;
	} else if (name === "battleship") {
		length = 4;
	} else if (name === "destroyer" || name === "submarine") {
		length = 3;
	} else {
		length = 2;
	}
	let hits = 0;
	const type = name;

	const hit = () => {
		if (hits < length) hits++;
	};

	const isSunk = () => {
		if (hits === length) return true;
		else return false;
	};

	return {
		get type() {
			return type;
		},
		get length() {
			return length;
		},
		hit,
		isSunk,
	};
};

const Gameboard = () => {
	const board = [];
	let sunk = 0;
	let count = 0;

	for (let i = 0; i < 10; i++) {
		const row = [];
		for (let j = 0; j < 10; j++) {
			row.push(0);
		}
		board.push(row);
	}

	const init = () => {
		count = 0;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				board[i][j] = 0;
			}
		}
	};

	const convertCoordinates = (cell) => {
		return [Math.floor(cell / 10), cell % 10];
	};

	const canPlaceShip = (ship, cell, orientation) => {
		const [xStart, yStart] = convertCoordinates(cell);
		if (orientation === 0) {
			if (yStart + ship.length > 10) return false;
			for (let i = yStart; i < yStart + ship.length; i++) {
				if (board[xStart][i] !== 0 && board[xStart][i].type !== ship.type) return false;
			}
		}
		if (orientation === 1) {
			if (xStart + ship.length > 10) return false;
			for (let i = xStart; i < xStart + ship.length; i++) {
				if (board[i][yStart] !== 0 && board[i][yStart].type !== ship.type) return false;
			}
		}
		return true;
	};

	const placeShip = (ship, cell, orientation) => {
		count++;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				if (board[i][j] !== 0 && board[i][j].type === ship.type) {
					board[i][j] = 0;
				}
			}
		}
		const [xStart, yStart] = convertCoordinates(cell);
		if (orientation === 0) {
			for (let i = yStart; i < yStart + ship.length; i++) board[xStart][i] = ship;
		} else {
			for (let i = xStart; i < xStart + ship.length; i++) board[i][yStart] = ship;
		}
	};

	const processAttack = (cell) => {
		const [x, y] = convertCoordinates(cell);
		if (board[x][y] === 0) {
			board[x][y] = -1;
			return -1;
		} else if (board[x][y] !== 1 && board[x][y] !== -1) {
			const ship = board[x][y];
			ship.hit();
			if (ship.isSunk()) sunk++;
			board[x][y] = 1;
			return 1;
		} else {
			return 0;
		}
	};

	const checkGameOver = () => {
		if (sunk === 5) return true;
		return false;
	};

	const generateRandomCoords = () => {
		return [Math.floor(Math.random() * 100), Math.floor(Math.random() * 2)];
	};

	const placeShipRandom = (ship) => {
		const [cell, orientation] = generateRandomCoords();
		if (canPlaceShip(ship, cell, orientation)) {
			placeShip(ship, cell, orientation);
			return [ship, cell, orientation];
		} else {
			return placeShipRandom(ship);
		}
	};

	const generateRandomConfig = () => {
		init();
		const ships = [Ship("carrier"), Ship("battleship"), Ship("destroyer"), Ship("submarine"), Ship("patrolBoat")];
		const positions = [];
		for (let ship of ships) {
			positions.push(placeShipRandom(ship));
		}
		return positions;
	};

	return {
		get shipCount() {
			return count;
		},
		init,
		canPlaceShip,
		placeShip,
		processAttack,
		checkGameOver,
		generateRandomConfig,
	};
};

const Player = (name) => {
	const player = name;
	const playerBoard = Gameboard();

	return {
		get board() {
			return playerBoard;
		},
	};
};

export { Ship, Gameboard, Player };
