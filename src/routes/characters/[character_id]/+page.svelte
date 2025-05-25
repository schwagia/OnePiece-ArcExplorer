<script>
	let { data } = $props();
	let character = data.character;
</script>

<div class="container mt-5">
	<div class="d-flex justify-content-between align-items-center mb-4">
		<h1>Charakter: {character.name}</h1>
	</div>

	<div class="card shadow-lg">
		<div class="row g-0">
			{#if character.logo_path}
				<div class="col-md-4">
					<img
						src={character.logo_path}
						alt={character.name}
						class="img-fluid rounded-start w-100 h-100 object-fit-cover"
					/>
				</div>
			{/if}

			<div class="col-md-8">
				<div class="card-body">
					<h4 class="card-title">{character.name}</h4>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<strong>Teufelsfrucht:</strong>
							{character.devil_fruit}
						</li>
						<li class="list-group-item">
							<strong>Kategorie:</strong>
							{character.category}
						</li>
						<li class="list-group-item">
							<strong>Typ:</strong>
							{character.type}
						</li>
						<li class="list-group-item">
							<strong>Rolle:</strong>
							{character.role}
						</li>
						<li class="list-group-item">
							<strong>Crew:</strong>
							{character.crew}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Buttons -->
	<div class="mt-4 d-flex gap-2">
		<a href="/characters" class="btn btn-secondary">Back to overview</a>
		<a
			href={"/characters/" + character._id + "/edit"}
			class="btn btn-primary">Edit Character</a
		>
		<form method="POST" action="?/delete">
			<input type="hidden" name="id" value={character._id} />
			<button type="submit" class="btn btn-danger">Delete</button>
		</form>
	</div>
</div>

<style>
	.object-fit-cover {
		object-fit: cover;
		height: 100%;
	}
</style>
