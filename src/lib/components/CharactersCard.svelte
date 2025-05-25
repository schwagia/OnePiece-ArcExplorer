<script>
  let { character } = $props();

  function badge(type) {
    if (type === "pirat") return "bg-danger";
    if (type === "marine") return "bg-primary";
    return "bg-secondary";
  }
</script>

<tr class="character-row">
  <td>
    <img
      src={character.logo_path}
      alt={character.name}
      class="rounded-circle border"
      style="width: 56px; height: 56px; object-fit: cover;"
    />
  </td>
  <td>
    <a
      href={`/characters/${character._id}`}
      class="text-decoration-none fw-semibold text-info"
    >
      {character.name}
    </a>
  </td>
  <td>{character.devil_fruit}</td>
  <td>{character.category}</td>
  <td>{character.role}</td>
  <td>{character.crew}</td>
  <td>
    <span class={"badge " + badge(character.type)}>{character.type}</span>
  </td>
</tr>

<style>
  .character-row:hover {
    background-color: #2b2b2b;
  }
</style>
