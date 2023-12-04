<script>
	import Menu from '../organisms/Menu.svelte';
</script>

<main class="main">
	<header class="main__header">
		<Menu />
	</header>

	<div class="main__content">
		<slot />
	</div>
</main>

<style>
	@import '$lib/styles/global.css';

	.main {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas: 'main nav';
	}

	.main__header {
		grid-area: nav;
	}

	.main__content {
		grid-area: main;
	}
</style>
