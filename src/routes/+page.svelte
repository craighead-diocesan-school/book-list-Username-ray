<script>
  import Header from "$lib/Header.svelte"

  function addBook() {
    const bookInput = document.getElementById("bookInput")
    const bookTitle = bookInput.value.trim()

    if (bookTitle) {
      const book = {
        title: bookTitle,
        read: false,
      }
      saveBook(book)
      bookInput.value = ""
    }
  }

  function saveBook(book) {
    const books = getBooks()
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
    displayBooks()
  }
</script>

<Header />

<main>
  <h2>SvelteKit</h2>

  <p>Welcome to coding with SvelteKit, a modern JavaScript framework that makes it easy to code great apps.</p>

  <input type="text" id="bookInput" placeholder="Enter the title of the book" />
  <button onclick="addBook()">Add</button>
  <button onclick="saveBook()">Save</button>
  <ul id="bookList"></ul>
</main>

<footer>
  <p>&copy; Craighead Diocesan School 2024</p>
</footer>
