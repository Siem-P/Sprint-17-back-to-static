<script>
	import NavigationBar from '../organisms/NavigationBar.svelte';
</script>

<header>
	<NavigationBar />
</header>

<main>
	<slot />
</main>

<style>
	@import '$lib/styles/global.css';

	:global(body) {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas: 'main nav';
	}

	header {
		grid-area: nav;
	}

	main {
		grid-area: main;
	}
</style>
