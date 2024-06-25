<script>
  import { name } from '$lib/stores'
  let newName = ''

  function updateName() {
    $name = newName
  }
</script>

<a href="/">Home</a>

<p>Name: {$name}</p>

<label>
  New name:
  <input bind:value={newName}/>
</label>

<button on:click={updateName}>
  Update
</button>