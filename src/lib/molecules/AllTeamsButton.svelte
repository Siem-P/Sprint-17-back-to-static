<script>
    import AllTeamsIcon from '$lib/atoms/AllTeamsIcon.svelte';
</script>

<a href="/" class="nav-button">
    <AllTeamsIcon/>
    <span>All</span>
    <span>Teams</span>
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
        color: var(--primary-font-color)
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