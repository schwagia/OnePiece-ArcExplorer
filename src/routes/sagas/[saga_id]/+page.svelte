<script>
	let { data } = $props();
	let saga = data.saga;
</script>

<div class="container">
	<div class="d-flex justify-content-between align-items-center mb-4">
		<a href="/sagas" class="btn btn-primary">Back to overview</a>
		<a href={"/sagas/" + saga._id + "/edit"} class="btn btn-primary">Edit Saga</a>
	</div>

	<div class="layout">
		<div class="poster-box">
			<img class="poster" src={saga.poster_path} alt={saga.title} />

			<form method="POST" action="?/delete" class="delete-form">
				<input type="hidden" name="id" value={saga._id} />
				<button type="submit" class="btn btn-danger">Delete</button>
			</form>
		</div>

		<div class="details">
			<h1>{saga.title}</h1>
			<p>
				<strong>Zeitraum:</strong>
				{saga.start_year} – {saga.end_year}
			</p>
			<p>
				<strong>Folgen:</strong>
				{saga.episodes.from} bis {saga.episodes.to} ({saga.episode_count}
				insgesamt)
			</p>
			<p>
				<strong>Lieblingsfolge:</strong> Episode {saga.favorite_episode}
			</p>

			<div class="section">
				<h2>Arcs</h2>
				<ul>
					{#each saga.arcs as arc}
						<li>{arc}</li>
					{/each}
				</ul>
			</div>

			<div class="section">
				<h2>Filler-Arcs</h2>
				{#if saga.filler_arcs.length > 0}
					<ul>
						{#each saga.filler_arcs as arc}
							<li>{arc}</li>
						{/each}
					</ul>
				{:else}
					<p>Keine</p>
				{/if}
			</div>

			<div class="section">
				<h2>Inseln</h2>
				<ul>
					{#each saga.islands as island}
						<li>{island}</li>
					{/each}
				</ul>
			</div>

			<div class="section">
				<h2>Charaktere</h2>
				<ul>
					{#each saga.characters as character}
						<li>{character}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 960px;
		margin: 2rem auto;
		padding: 2rem;
		border-radius: 1rem;
		background-color: #1e1e1e;
		color: #f0f0f0;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}

	.layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.layout {
			flex-direction: row;
		}
	}

	.poster {
		width: 100%;
		max-width: 300px;
		border-radius: 1rem;
		object-fit: cover;
		align-self: baseline;
	}

	.details {
		flex: 1;
	}

	.section {
		margin-top: 1.5rem;
	}

	.section h2 {
		margin-bottom: 0.5rem;
		border-bottom: 1px solid #666;
		padding-bottom: 0.2rem;
	}

	ul {
		padding-left: 1.2rem;
		margin: 0;
	}
	.poster-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}

	.delete-form {
		margin-top: auto;
	}
</style>
