const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#list");
const searchEl = document.querySelector("#search");
let users = [];

async function fetchUsers() {
  statusEl.textContent = "Loading...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    users = await res.json();
    statusEl.textContent = "";
    render(users);
  } catch (err) {
    statusEl.textContent = `Something went wrong: ${err.message}`;
  }
}

function render(items) {
  listEl.innerHTML = items
    .map(u => `<li><strong>${u.name}</strong> (${u.email})</li>`)
    .join("");
  if (items.length === 0) statusEl.textContent = "No users found.";
}

fetchUsers();