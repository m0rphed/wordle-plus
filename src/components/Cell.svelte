<script lang="ts">
    import { board } from "../store";
    export let x: number;
    export let y: number;
    // '$' - use this reactive statement declaration
    $: letter = $board[x][y];
    // update board state
    board.update((previous) => {
        const newBoard = previous;
        newBoard[x][y] = "H";
        return newBoard;
    });
</script>

<div class="cell">
    {letter}
</div>

<style>
    .cell {
        width: 70px;
        height: 70px;
        color: white;
        background-color: var(--bg);
        margin: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 55px;
        border-radius: 5px;
    }
</style>
