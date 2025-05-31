const menuToggle = document.getElementById('menu-toggle');
  const mobileNavbar = document.getElementById('mobile-navbar');

  menuToggle.addEventListener('click', () => {
    mobileNavbar.style.display = mobileNavbar.style.display === 'flex' ? 'none' : 'flex';
  });