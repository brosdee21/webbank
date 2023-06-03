// Get the toggle switch element
const toggleSwitch = document.getElementById('color-blindness-toggle');

// Add event listener for the toggle switch
toggleSwitch.addEventListener('change', function() {
  // If the toggle switch is checked
  if (this.checked) {
    // Apply color blindness mode
    document.documentElement.classList.add('color-blindness-mode');
  } else {
    // Remove color blindness mode
    document.documentElement.classList.remove('color-blindness-mode');
  }
});