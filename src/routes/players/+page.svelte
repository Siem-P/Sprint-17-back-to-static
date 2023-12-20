<script>
	import TwoColumnLayout from '$lib/layouts/TwoColumnLayout.svelte';
</script>

<TwoColumnLayout title={'Players'}>
	<section slot="sub-title-left">
		<h2>sut title Left</h2>
	</section>

	<section slot="sub-title-right">
		<h2>sut title Right</h2>
	</section>

	<section slot="left">
		<h2>Left</h2>
	</section>

	<section slot="right">
		<h2>Right</h2>
	</section>

	<footer slot="footer">
		<h2>Footer</h2>
	</footer>
</TwoColumnLayout>
