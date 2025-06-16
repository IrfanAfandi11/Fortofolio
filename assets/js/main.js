// main.js

// Modal untuk gambar
function openModal(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

// Toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Plyr setup
  Plyr.setup('.plyr');
});
