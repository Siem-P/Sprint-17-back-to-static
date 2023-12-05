<script>
    import HomeButton from '$lib/molecules/HomeButton.svelte';
    import AllPlayersButton from '$lib/molecules/AllPlayersButton.svelte';
    import AllTeamsButton from '$lib/molecules/AllTeamsButton.svelte';
    import AllTournamentsButton from '$lib/molecules/AllTournamentsButton.svelte';
    import CurrentTournamentButton from '$lib/molecules/CurrentTournamentButton.svelte';
</script>
  
<main>
    <section>
        <nav aria-label="Main Navigation">
            <HomeButton />
            <AllPlayersButton />
            <AllTeamsButton />
            <AllTournamentsButton />
            <CurrentTournamentButton />
        </nav>
    </section>
</main>

<style>
    main {
        background-color: var(--background-color);
    }

    section {
        margin-left: auto;
        height: 100vh;
        max-width: 8rem;
        padding: 1rem;
    }
    
    nav {
        background-color: var(--input-background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        gap: 4rem;
        box-shadow: var(--box-shadow);
    }
</style>
