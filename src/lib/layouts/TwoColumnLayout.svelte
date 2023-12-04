<script>
	export let title;
</script>

<h1>{title}</h1>

<div>
	<section>
		<slot name="left-title" />
	</section>
	<section>
		<slot name="right-title" />
	</section>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
</style>
