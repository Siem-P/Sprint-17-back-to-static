<script>
	export let title;
</script>

<div>
	<h1>{title}</h1>

	<slot name="left" />
	<slot name="right" />

	<slot name="footer" />
</div>

<style>
	div {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: auto 1fr auto;
	}

	h1,
	footer {
		grid-column: span 2;
	}
</style>
