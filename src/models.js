const Ship = (size) => {
	const length = size;
	let hits = 0;

	const hit = () => {
		if (hits < length) hits++;
	};

	const isSunk = () => {
		if (hits === length) return true;
		else return false;
	};

	return {
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

	for (let i = 0; i < 10; i++) {
		const row = [];
		for (let j = 0; j < 10; j++) {
			row.push(0);
		}
		board.push(row);
	}

	const canPlaceShip = (ship, xStart, yStart, orientation) => {
		if (orientation === 0 && xStart + ship.length > 9) return false;
		if (orientation === 1 && yStart + ship.length > 9) return false;
		return true;
	};

	const placeShip = (ship, xStart, yStart, orientation) => {
		if (orientation === 0) {
			for (let i = xStart; i < xStart + ship.length; i++)
				board[i][yStart] = ship;
		} else {
			for (let i = yStart; i < yStart + ship.length; i++)
				board[xStart][i] = ship;
		}
	};

	const processAttack = (x, y) => {
		if (board[x][y] === 0) board[x][y] = -1;
		else if (board[x][y] !== 1) {
			const ship = board[x][y];
			ship.hit();
			if (ship.isSunk()) sunk++;
			board[x][y] = 1;
		}
	};

	const checkGameOver = () => {
		if (sunk === 5) return true;
		return false;
	};

	return { canPlaceShip, placeShip, processAttack, checkGameOver };
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
