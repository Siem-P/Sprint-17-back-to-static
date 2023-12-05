<script>
    export let data
    console.log(data)
    const { players } = data
</script>

<section class="all-teams">
    {#each players as player}
    <div>
        <img src="/images/raimon.png" alt="Raimon Logo">
        <p>{player.name}</p>
    </div>
    {/each} 
</section>

