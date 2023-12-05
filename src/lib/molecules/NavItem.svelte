<script>
	import Icon from '$lib/atoms/Icon.svelte';

	export let item;
</script>

<li>
	<a href={item.href}>
		<Icon name={item.icon} />
		<span>{item.label}</span>
	</a>
</li>

<style>
	li {
		width: 100%;
	}

	a {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		transition: 0.2s;
		padding: 1em;
		color: var(--primary-font-color);
		text-decoration: none;
	}

	a:hover {
		background: rgba(0, 0, 0, 0.1);
	}
</style>
