document.addEventListener('DOMContentLoaded', () => {
  // Highlight Menu Navigasi Aktif Otomatis
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'home.html')) {
      link.classList.add('active');
    }
  });

  // Fitur Modal / Zoom Gambar Galeri
  const galleryImages = document.querySelectorAll('.gallery-card img');
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '1000';

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.style.maxWidth = '90%';
      fullImg.style.maxHeight = '90%';
      fullImg.style.borderRadius = '8px';

      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});