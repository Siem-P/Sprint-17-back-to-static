<main>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a href="/" class="currentTournament">
		<h2>Current Tournament</h2>
		<p>Check the current tournaments</p>
	</a>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a href="/" class="creatTournament">
		<h2>Create Tournament</h2>
		<p>Create your tournament</p>
	</a>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a href="/players/new" class="creatPlayer">
		<h3>Create Player</h3>
		<p>Create your players</p>
	</a>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a href="/" class="creatTeam">
		<h3>Create Team</h3>
		<p>Create your team</p>
	</a>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a href="/" class="completedTournaments">
		<h2>Completed Tournaments</h2>
		<p>View the completed tournaments</p>
	</a>

	<img class="frisbee" src="../frisbee.png" alt="frisbee" />
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			'creatTournament creatTournament completedTournaments completedTournaments'
			'creatTeam creatPlayer completedTournaments completedTournaments'
			'currentTournament currentTournament currentTournament .';
		gap: 2rem;
		padding: 2rem;
		height: 100%;
	}

	a {
		box-shadow: var(--box-shadow);
		border-radius: 25px;
		background-color: white;
		padding: 1.5rem 2.5rem;
		text-decoration: none;
	}

	.creatPlayer {
		grid-area: creatPlayer;
		background-color: var(--primary);
	}

	.creatTeam {
		grid-area: creatTeam;
		background-color: var(--primary);
	}

	.creatTournament {
		grid-area: creatTournament;
		background-color: var(--primary);
	}

	.completedTournaments {
		grid-area: completedTournaments;
	}

	.currentTournament {
		grid-area: currentTournament;
		background-color: var(--secondary);
	}

	.frisbee {
		box-shadow: var(--box-shadow);
		border-radius: 25px;
	}
</style>
