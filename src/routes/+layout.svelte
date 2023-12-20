<!-- <script>
	import BaseLayout from '$lib/layouts/BaseLayout.svelte';
</script>

<BaseLayout>
	<slot />
</BaseLayout> -->


<script>
	import NavigationBar from '$lib/organisms/NavigationBar.svelte';
</script>

<header>
	<NavigationBar />
</header>

	<slot />

<style>
	@import '$lib/styles/global.css';
</style>
