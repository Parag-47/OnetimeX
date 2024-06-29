function openPopup() {
    document.getElementById('demat-registration-popup').style.display = 'block';
    document.getElementById('background-blur').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('demat-registration-popup').style.display = 'none';
    document.getElementById('background-blur').style.display = 'none';
  }
  
  // Close the popup if the user clicks outside of it
  window.onclick = function(event) {
    var popup = document.getElementById('demat-registration-popup');
    var blur = document.getElementById('background-blur');
    if (event.target == blur) {
      popup.style.display = 'none';
      blur.style.display = 'none';
    }
  }
  