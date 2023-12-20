<script>
	import TwoColumnLayout from '$lib/layouts/TwoColumnLayout.svelte';
	import Form from '$lib/organisms/form.svelte';
	import Button from '$lib/atoms/button.svelte';
</script>

<TwoColumnLayout title={'Players'}>
	<h2 slot="sub-title-left">Create a player</h2>

	<h2 slot="sub-title-right">Add player to team</h2>

	<section slot="left">
		<Form FormID="FormID" Method="get" Action="/AllPlayers" />
	</section>

	<section slot="right">
		<p>test rechts</p>
	</section>
	<h2 slot="footer"><Button ButtonType="submit" FormID="FormID" ButtonText="save" /></h2>
</TwoColumnLayout>

<style>
	h2 {
		font-size: 1.5rem;
	}

	section {
		overflow-x: auto;
	}

	section::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	section::-webkit-scrollbar {
		width: 12px;
	}

	section::-webkit-scrollbar-thumb {
		border-radius: 10px;
		/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
		background-color: #a7a7a7;
	}
</style>
