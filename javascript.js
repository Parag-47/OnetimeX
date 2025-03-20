

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
    if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
    } else {
        collapseMenu.style.display = 'block';
    }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);



//  -----------typing text script------------- >

const texts = [
    'Invest Now,',
    'Grow With OneTimex',
    'Think Onetimex',
    'Invest Smarter, Not Harder',
    'Secure Your Wealth',
    'Maximize Returns with:',
    'Key to Growth'
];

let currentTextIndex = 0;
const textElement = document.getElementById('text');

function typeText() {
    textElement.textContent = texts[currentTextIndex];
    textElement.style.animation = 'typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite';
}

function eraseText() {
    textElement.style.animation = 'erase 2s steps(30) forwards, blink 0.75s step-end infinite';
}

function cycleText() {
    typeText();
    setTimeout(() => {
        eraseText();
        setTimeout(() => {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            cycleText();
        }, 5000); // Time for erase animation to finish
    }, 4000); // Time for type animation to finish
}

cycleText();


//-------------dropdown menu------------------- >

// Get the Products menu and the dropdown
const productsMenu = document.getElementById('productsMenu');
const dropdown = productsMenu.querySelector('.dropdown');

// Toggle dropdown visibility on click
productsMenu.querySelector('a').addEventListener('click', function (event) {
    // Prevent the link from navigating
    event.preventDefault();

    // Toggle the dropdown visibility
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.style.visibility = 'visible';
        dropdown.style.opacity = '1';
        dropdown.style.transform = 'translateY(0)';
    } else {
        dropdown.classList.add('hidden');
        dropdown.style.visibility = 'hidden';
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'translateY(-10px)';
    }
});

// Close dropdown if clicked anywhere outside
document.addEventListener('click', function (event) {
    if (!productsMenu.contains(event.target)) {
        dropdown.classList.add('hidden');
        dropdown.style.visibility = 'hidden';
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'translateY(-10px)';
    }
});

//-------------listed and unlisted toggle button---------------

document.addEventListener("DOMContentLoaded", function () {
    const unlistedBtn = document.getElementById("unlistedBtn");
    const listedBtn = document.getElementById("listedBtn");
    const toggleButton = document.getElementById("toggleButton");
    const unlistedCompanies = document.getElementById("unlistedCompanies");
    const listedCompanies = document.getElementById("listedCompanies");

    unlistedBtn.addEventListener("click", function () {
        toggleButton.style.transform = "translateX(0)";
        unlistedBtn.classList.add("active-text");
        listedBtn.classList.remove("active-text");
        listedBtn.classList.add("inactive-text");

        unlistedCompanies.classList.add("active");
        listedCompanies.classList.remove("active");
    });

    listedBtn.addEventListener("click", function () {
        toggleButton.style.transform = "translateX(80px)";
        listedBtn.classList.add("active-text");
        unlistedBtn.classList.remove("active-text");
        unlistedBtn.classList.add("inactive-text");

        listedCompanies.classList.add("active");
        unlistedCompanies.classList.remove("active");
    });
});

//---------image channging--------------------

let images = [
    'IAP, PMS, AIF\\AIF.JPEG',
    'IAP, PMS, AIF\\IAP.JPEG',
    'IAP, PMS, AIF\\PMS.JPEG'
];

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('banner-img').src = images[currentImageIndex];
}

setInterval(changeImage, 3000);
//-------------------- login pop------------------------------
function openPopup() {
    let mobile = document.getElementById('mobileNumber').value.trim();
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }
    document.getElementById('popupMobileNumber').value = mobile;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

function submitForm() {
    let userName = document.getElementById('userName').value.trim();
    if (userName === '') {
        alert('Please enter your name.');
        return;
    }

    // Open signup.html in a new window or tab
    window.open('signup.html', '_blank');

    closePopup();
}

//---------search bar toggle--------------

const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
});

//---------change listed and unlisted avatar-------------------

let categories = ["Unlisted+Stocks", "Listed+Stocks"];
let index = 0;

function updateAvatar() {
    document.getElementById("avatar").src = `https://ui-avatars.com/api/?name=${categories[index]}&background=random&color=fff&size=64`;
    index = (index + 1) % categories.length;
}

updateAvatar(); // Set initial avatar
setInterval(updateAvatar, 3000); // Change avatar every 3 seconds

//--------Investment+Advisory avatar------------------

function updateAdvisorAvatar() {
    let avatarName = "Investment+Advisory"; // Avatar text
    document.getElementById("advisor-avatar").src = `https://ui-avatars.com/api/?name=${avatarName}&background=random&color=fff&size=64`;
}

updateAdvisorAvatar(); // Set the avatar initially

//-------insurance avatar-----------------
function updateInsuranceAvatar() {
    let avatarName = "Insurance+Services"; // Avatar text for Insurance Services
    document.getElementById("insurance-avatar").src = `https://ui-avatars.com/api/?name=${avatarName}&background=random&color=fff&size=64`;
}

updateInsuranceAvatar(); // Set the avatar initially

//------------IPO Investment------------------
function updateIPOAvatar() {
    let avatarName = "IPO+Investment"; // Avatar text for IPO Investment
    document.getElementById("ipo-avatar").src = `https://ui-avatars.com/api/?name=${avatarName}&background=random&color=fff&size=64`;
}

updateIPOAvatar(); // Set the avatar initially

//------------Alternative Investments------------------
function updateAlternativeInvestmentsAvatar() {
    let avatarName = "Alternative+Investments"; // Avatar text for Alternative Investments
    document.getElementById("alternative-investments-avatar").src = `https://ui-avatars.com/api/?name=${avatarName}&background=random&color=fff&size=64`;
}

updateAlternativeInvestmentsAvatar(); // Set the avatar initially


