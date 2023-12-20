<script>
	import NavigationBar from '../organisms/NavigationBar.svelte';
</script>

<header>
	<NavigationBar />
</header>

	<slot />

<style>
	@import '$lib/styles/global.css';

	:global(body) {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas: '. nav';
		height: 100vh;
	}

	header {
		grid-area: nav;
	}
</style>
