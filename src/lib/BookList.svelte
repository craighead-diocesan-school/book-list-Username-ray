<script>
  import { onMount } from "svelte"

  let bookInput = ""
  let books = []

  // ページ読み込み時にリストを表示
  onMount(() => {
    loadBooks()
  })

  function addBook() {
    const bookTitle = bookInput.trim()
    if (bookTitle) {
      books.push({ title: bookTitle, read: false })
      bookInput = ""
      saveBooks()
    }
  }

  function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books))
  }

  function loadBooks() {
    const storedBooks = localStorage.getItem("books")
    books = storedBooks ? JSON.parse(storedBooks) : []
  }

  function toggleReadStatus(index) {
    books[index].read = !books[index].read
    saveBooks()
  }

  function deleteBook(index) {
    books.splice(index, 1)
    saveBooks()
  }
</script>

<body>
  <input type="text" bind:value={bookInput} placeholder="Enter the title of the book" />
  <button on:click={addBook}>Add</button>
  <button on:click={saveBooks}>Save</button>
  <button on:click={loadBooks}>Load</button>
  <ul>
    {#each books as book, index}
      <li class="book {book.read ? 'read' : ''}">
        <input type="checkbox" checked={book.read} on:change={() => toggleReadStatus(index)} />
        <span class="book-title">{book.title}</span>
        <button on:click={() => deleteBook(index)}>Delete</button>
      </li>
    {/each}
  </ul>
</body>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .book {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .book.read .book-title {
    text-decoration: line-through;
    color: gray;
  }
  .book-title {
    flex-grow: 1;
    margin-left: 10px;
  }
  button {
    margin: 5px;
  }
</style>
