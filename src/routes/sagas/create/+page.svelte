<script>
    let { form } = $props();
</script>

<h1>Add a Saga</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">Titel</label>
        <input name="title" class="form-control" type="text" />
    </div>

    <div class="row">
        <div class="col mb-3">
            <label for="" class="form-label">Start Year</label>
            <input name="start_year" class="form-control" type="number" />
        </div>
        <div class="col mb-3">
            <label for="" class="form-label">End Year</label>
            <input name="end_year" class="form-control" type="number" />
        </div>
    </div>

    <div class="row">
        <div class="col mb-3">
            <label for="" class="form-label">Episodes From</label>
            <input name="episodes_from" class="form-control" type="number" />
        </div>
        <div class="col mb-3">
            <label for="" class="form-label">Episodes To</label>
            <input name="episodes_to" class="form-control" type="number" />
        </div>
        <div class="col mb-3">
            <label for="" class="form-label">Total Episode Count</label>
            <input name="episode_count" class="form-control" type="number" />
        </div>
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Favorite Episode</label>
        <input name="favorite_episode" type="number" class="form-control" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Poster Path</label>
        <input
            name="poster_path"
            type="text"
            class="form-control"
            placeholder="/images/..."
        />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Arcs</label>
        <input
            name="arcs"
            type="text"
            class="form-control mb-1"
            placeholder="One per field"
        />
        <input name="arcs" type="text" class="form-control mb-1" />
        <input name="arcs" type="text" class="form-control mb-1" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Islands</label>
        <input name="islands" type="text" class="form-control mb-1" />
        <input name="islands" type="text" class="form-control mb-1" />
        <input name="islands" type="text" class="form-control mb-1" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Filler Arcs</label>
        <input name="filler_arcs" type="text" class="form-control mb-1" />
        <input name="filler_arcs" type="text" class="form-control mb-1" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Characters</label>
        <input
            name="characters"
            type="text"
            class="form-control mb-1"
            placeholder="z.B. Luffy"
        />
        <input name="characters" type="text" class="form-control mb-1" />
        <input name="characters" type="text" class="form-control mb-1" />
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
        <a href="/sagas" class="btn btn-primary">Back to overview</a>
        <button type="submit" class="btn btn-success">Add Saga</button>
    </div>
</form>

{#if form?.success}
    <div class="success-message">✅ Saga successfully created!</div>
{/if}
