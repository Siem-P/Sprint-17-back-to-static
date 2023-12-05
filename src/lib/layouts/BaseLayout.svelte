<script>
	import NavigationBar from '../organisms/NavigationBar.svelte';
</script>

<main>
	<header>
		<NavigationBar />
	</header>

	<div>
		<slot />
	</div>
</main>

<style>
	@import '$lib/styles/global.css';

	main {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas: 'main nav';
	}

	header {
		grid-area: nav;
	}

	div {
		grid-area: main;
	}
</style>
