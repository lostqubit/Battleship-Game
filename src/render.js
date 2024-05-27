const display = (() => {
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
			cell.id = `cell${id}-${i}`;
            cell.classList.add("cell");
            grid.appendChild(cell);

            cell.addEventListener("click", (event) => {
                const board = event.target.id[4];
                const cellId = event.target.id.split("-")[1];
            });
		}
        const heading = document.createElement("h2");
        if(id===1) heading.innerText = "Friendly Waters";
        else heading.innerText = "Enemy Waters";
        wrapper.appendChild(heading);
        wrapper.appendChild(grid);
        container.appendChild(wrapper);
	};

    return {generateBoard};
})();

export default display;
