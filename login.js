 // Add event listener to the form submit event
document.getElementById("login-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var username = document.getElementById("user-name").value;
  var password = document.getElementById("password").value;

  // Validate the username and password
  if (username && password) {
    alert("Login successful!");
    // Redirect to a new page or perform other actions
    window.location.href = "./home.html"
  } else {
    alert("Invalid username or password. Please try again.");
    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
});






