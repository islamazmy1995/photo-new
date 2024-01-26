document.querySelectorAll('.player-img').forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      this.style.opacity = '0.8';
    });
  
    item.addEventListener('mouseout', function() {
      this.style.backgroundColor = '';
      this.style.opacity = '';
    });
  });
  