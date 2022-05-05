export { }
import { writable } from "svelte/store";

function createGrid() {
    const grid = [];

    for (let col = 0; col < 6; col++) {
        grid.push([]);

        for (let row = 0; row < 5; row++) {
            grid[col][row] = "";
        }
    }

    return grid;
}

export const board = writable(createGrid());