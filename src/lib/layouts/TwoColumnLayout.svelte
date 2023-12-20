<script>
	export let title;
</script>

<main>
	<h1>{title}</h1>

	<slot name="sub-title-left" />
	<slot name="sub-title-right" />

	<slot name="left" />
	<slot name="right" />

	<slot class="footer" name="footer" />
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		padding: 4rem 4%;
		width: 100%;
		height: 100%;
	}

	h1,
	.footer {
		grid-column: span 2;
	}

	h1 {
		font-size: 3rem;
	}
</style>
