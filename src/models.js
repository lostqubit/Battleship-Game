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

	const init = () => {
		for(let i=0;i<10;i++){
			for(let j=0;j<10;j++){
				board[i][j] = 0;
			}
		}
	};

	const convertCoordinates = (cell) => {
		return [Math.floor(cell / 10), cell % 10];
	};

	const canPlaceShip = (ship, cell, orientation) => {
		const [xStart, yStart] = convertCoordinates(cell);
		if (orientation === 0){
			if(xStart + ship.length >9) return false;
			for(let i=xStart;i<xStart+ship.length;i++){
				if(board[i][yStart]!==0) return false;
			}
		}
		if (orientation === 1){
			if(yStart + ship.length > 9) return false;
			for (let i = yStart; i < yStart + ship.length; i++){
				if(board[xStart][i]!==0) return false;		
			}
		}
		return true;
	};

	const placeShip = (ship, cell, orientation) => {
		const [xStart, yStart] = convertCoordinates(cell);
		if (orientation === 0) {
			for (let i = xStart; i < xStart + ship.length; i++)
				board[i][yStart] = ship;
		} else {
			for (let i = yStart; i < yStart + ship.length; i++)
				board[xStart][i] = ship;
		}
	};

	const processAttack = (cell) => {
		const [x, y] = convertCoordinates(cell);
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

	const generateRandomCoords = () => {
		return [Math.floor(Math.random()*100), Math.floor(Math.random()*2)];
	}

	const placeShipRandom = (ship) => {
		const [cell, orientation] = generateRandomCoords();
		if(canPlaceShip(ship,cell,orientation)){
			placeShip(ship,cell,orientation);
			return null;
		}
		else{
			placeShipRandom(ship);
		}
	};

	const generateRandomConfig = () => {
		init();
		const ships = [Ship(5),Ship(4),Ship(3),Ship(3),Ship(2)];
		

		for(let ship of ships){
			placeShipRandom(ship);
		}

		console.log(board);
	};

	return { canPlaceShip, placeShip, processAttack, checkGameOver, generateRandomConfig };
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
