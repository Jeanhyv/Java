function toggleSidebar() {
  // Simplemente activa o desactiva las clases en los elementos correspondientes.
  document.getElementById("sidebar").classList.toggle("visible");
  document.getElementById("main-content").classList.toggle("shifted");
}

const username = document.getElementById('username');
const userDropdown = document.getElementById('userDropdown');

username.addEventListener('click', function(e) {
  e.stopPropagation();
  userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function() {
  userDropdown.style.display = 'none';
});

