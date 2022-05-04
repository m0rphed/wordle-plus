<script lang="ts">
    import Keyboard from "./components/Keyboard.svelte";
    import Board from "./components/Board.svelte";
</script>


<main>
    <nav>Wordle Clone</nav>
    <Board />
    <Keyboard />
</main>

<style>
    nav {
        background-color: var(--bg);
        color: white;
        font-weight: bold;
        padding: 15px;
        text-align: center;
    }
</style>