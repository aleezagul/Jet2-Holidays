// Select the dropdown button and content
const dropdownBtn = document.querySelector('.flag-dropdownbtn');
const dropdownContent = document.querySelector('.flag-dropdown-content');

// Toggle the dropdown when the button is clicked
dropdownBtn.addEventListener('click', () => {
  dropdownContent.style.display =
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.country-select')) {
    dropdownContent.style.display = 'none';
  }
});

// Optional: Handle item selection
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedCountry = item.getAttribute('data-country');
    const selectedFlag = item.getAttribute('data-flag');

    // Update the button with the selected flag 
    dropdownBtn.querySelector('img').src = selectedFlag;
    dropdownContent.style.display = 'none';

    console.log(`Selected: ${selectedCountry}`);
  });
});
