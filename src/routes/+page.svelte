<script>
  import { name } from '$lib/stores'
</script>

<a href="/update-name">Update Name</a>

{#if name}
  <p>The name is {$name}</p>
{:else}
  <p>No name yet.</p>
{/if}