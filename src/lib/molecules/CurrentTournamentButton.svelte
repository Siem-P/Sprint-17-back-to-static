<script>
    import CurrentTournamentIcon from '$lib/atoms/CurrentTournamentIcon.svelte';
</script>

<a href="/" class="nav-button">
    <CurrentTournamentIcon/>
        <span>Current<span/>
        <span>Tournament<span/>  
</a>

<style>
.nav-button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        font-family: var(--secondary-font-family);
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--button-background-color)
    }

    .nav-button:hover{
        opacity: 0.5;
    }

    .nav-button:focus{
        background-color: var(--hover-background-color);
        border-radius: 5px;
        min-width: 5rem;
    }

</style>