const form = document.getElementById('authForm');
const toggleLink = document.getElementById('toggleForm');
const formTitle = document.getElementById('form-title');
const errorMsg = document.getElementById('error-msg');

let isLogin = true;

toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Login' : 'Register';
  toggleLink.innerHTML = isLogin ? `Don’t have an account? <a href="#">Register here</a>` : `Already have an account? <a href="#">Login here</a>`;
  errorMsg.textContent = '';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (!username || !password) {
    errorMsg.textContent = 'All fields are required.';
    return;
  }

  if (isLogin) {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      window.location.href = 'player.html';
    } else {
      errorMsg.textContent = 'Invalid credentials.';
    }
  } else {
    const exists = users.some(user => user.username === username);
    if (exists) {
      errorMsg.textContent = 'Username already taken.';
      return;
    }
    const newUser = { username, password, playlist: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    errorMsg.style.color = 'green';
    errorMsg.textContent = 'Registration successful! You can now log in.';
    isLogin = true;
    formTitle.textContent = 'Login';
    toggleLink.innerHTML = `Don’t have an account? <a href="#">Register here</a>`;
  }
});
