// Get existing users from localStorage
const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

// Save users to localStorage
const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

// Register Logic
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;

  const users = getUsers();

  // Check duplicate
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    alert("Username already exists!");
    return;
  }

  const newUser = {
    username,
    password,
    role,
    borrowedBooks: [],
  };

  users.push(newUser);
  saveUsers(users);

  alert("Registered successfully!");
  this.reset();
});

// Login Logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  const users = getUsers();
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    alert("Invalid credentials!");
    return;
  }

  // Save logged-in user
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  // Redirect based on role
  if (user.role === "librarian") {
    window.location.href = "dashboard.html?role=librarian";
  } else {
    window.location.href = "dashboard.html?role=user";
  }
});

// Book functions
const getBooks = () => JSON.parse(localStorage.getItem("books")) || [];
const saveBooks = (books) => localStorage.setItem("books", JSON.stringify(books));

// On Dashboard Load
window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("welcomeMessage").textContent = `Welcome, ${user.username}`;

  if (user.role === "librarian") {
    document.getElementById("librarianPanel").style.display = "block";
    loadBooks();
  }
});

// Add / Edit Book
document.getElementById("bookForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = parseInt(document.getElementById("bookId").value);
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const total = parseInt(document.getElementById("bookTotal").value);

  let books = getBooks();
  const existing = books.find(b => b.id === id);

  if (existing) {
    existing.title = title;
    existing.author = author;
    existing.totalCount = total;
    existing.availableCount = total - (existing.totalCount - existing.availableCount); // adjust availability
  } else {
    books.push({
      id,
      title,
      author,
      totalCount: total,
      availableCount: total,
    });
  }

  saveBooks(books);
  loadBooks();
  this.reset();
});

// Load books to table
function loadBooks() {
  const books = getBooks();
  const tbody = document.querySelector("#bookTable tbody");
  tbody.innerHTML = "";

  books.forEach(book => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.totalCount}</td>
      <td>${book.availableCount}</td>
      <td>
        <button onclick="editBook(${book.id})">Edit</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Edit Book - populate form
function editBook(id) {
  const book = getBooks().find(b => b.id === id);
  if (book) {
    document.getElementById("bookId").value = book.id;
    document.getElementById("bookTitle").value = book.title;
    document.getElementById("bookAuthor").value = book.author;
    document.getElementById("bookTotal").value = book.totalCount;
  }
}

// Delete Book
function deleteBook(id) {
  let books = getBooks().filter(b => b.id !== id);
  saveBooks(books);
  loadBooks();
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// Show available books to users
function showAvailableBooks() {
  const books = getBooks();
  const tbody = document.querySelector("#availableBooksTable tbody");
  tbody.innerHTML = "";

  books.forEach(book => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.availableCount}</td>
      <td>
        <button onclick="borrowBook(${book.id})" ${book.availableCount === 0 ? "disabled" : ""}>Borrow</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Borrow Book
function borrowBook(bookId) {
  const books = getBooks();
  const book = books.find(b => b.id === bookId);
  let users = getUsers();
  let user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!book || book.availableCount === 0) {
    alert("This book is not available.");
    return;
  }

  book.availableCount -= 1;

  const borrowDate = new Date().toISOString().split("T")[0];
  user.borrowedBooks.push({ bookId: book.id, dateBorrowed: borrowDate });

  // Update user and book in localStorage
  books.forEach((b, i) => {
    if (b.id === book.id) books[i] = book;
  });

  users = users.map(u => u.username === user.username ? user : u);
  saveBooks(books);
  saveUsers(users);
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("You borrowed " + " " + book.title);
  showAvailableBooks();
  showBorrowedBooks(user);
}

// Show borrowed books
function showBorrowedBooks(user) {
  const books = getBooks();
  const list = document.getElementById("myBorrowedBooks");
  list.innerHTML = "";

  user.borrowedBooks.forEach(borrowed => {
    const book = books.find(b => b.id === borrowed.bookId);
    const li = document.createElement("li");
    li.textContent = (book.title + " " +  
    "Borrowed on:" + " " +{borrowed.dateBorrowed});
    list.appendChild(li);
  });
}
function showBorrowedBooks(user) {
  const books = getBooks();
  const list = document.getElementById("myBorrowedBooks");
  list.innerHTML = "";

  user.borrowedBooks.forEach((borrowed, index) => {
    const book = books.find(b => b.id === borrowed.bookId);
    const li = document.createElement("li");

    li.innerHTML = 
    book.title + " " + ("Borrowed on:" + " " +  borrowed.dateBorrowed )+
"<button onclick ='returnBook (" + index +")' > Return </button>"
    
    list.appendChild(li);
  });
}
function returnBook(borrowIndex) {
  const books = getBooks();
  let users = getUsers();
  let user = JSON.parse(localStorage.getItem("loggedInUser"));

  const borrowed = user.borrowedBooks[borrowIndex];
  const book = books.find(b => b.id === borrowed.bookId);

  if (book) {
    book.availableCount += 1;
  }

  user.borrowedBooks.splice(borrowIndex, 1);

  // Save changes
  saveBooks(books);
  users = users.map(u => u.username === user.username ? user : u);
  saveUsers(users);
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("You returned "+ " " + book.title);
  showAvailableBooks();
  showBorrowedBooks(user);
}
