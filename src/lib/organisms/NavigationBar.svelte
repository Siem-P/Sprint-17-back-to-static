<script>
	import NavItem from '$lib/molecules/NavItem.svelte';

	let items = [
		{ icon: 'home', label: 'Home', href: '/' },
		{ icon: 'players', label: 'Players', href: '/players' },
		{ icon: 'teams', label: 'Teams', href: '/teams' },
		{ icon: 'tournaments', label: 'Tournaments', href: '/tournaments' }
		// { icon: 'live', label: 'Live', href: '/live' }
	];
</script>

<nav aria-label="Main Navigation">
	<ul>
		{#each items as item}
			<NavItem {item} />
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding: 1em;
		height: 100%;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		box-shadow: var(--box-shadow);
		border-radius: 10px;
		background-color: var(--input-background-color);
		height: 100%;
		list-style: none;
	}
</style>
