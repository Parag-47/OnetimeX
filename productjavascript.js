//------------products javascript dropdown menu------------------

// Get the Products menu and the dropdown
const productsMenu = document.getElementById('productsMenu');
const dropdown = productsMenu.querySelector('.dropdown');
const productLink = productsMenu.querySelector('a');

// Toggle dropdown visibility on click
productLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Toggle dropdown visibility with animation
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        setTimeout(() => {
            dropdown.style.visibility = 'visible';
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateY(0)';
        }, 10);
    } else {
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            dropdown.classList.add('hidden');
            dropdown.style.visibility = 'hidden';
        }, 300);
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    if (!productsMenu.contains(event.target)) {
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            dropdown.classList.add('hidden');
            dropdown.style.visibility = 'hidden';
        }, 300);
    }
});

//------------submit button message------------------

document.getElementById("submitBtn").addEventListener("click", function () {
    this.style.display = "none"; // Hide the button
    document.getElementById("successMessage").classList.remove("hidden"); // Show the success message
  });

//------------contact from scroll down------------------
function scrollToForm() {
    document.getElementById("investmentForm").scrollIntoView({ behavior: "smooth" });
  }

  document.getElementById("investButton").addEventListener("click", scrollToForm);
  document.getElementById("learnMoreButton").addEventListener("click", scrollToForm);
