 // Add event listener to the form submit event
    document.getElementById("button").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the input values
    var FirstName = document.getElementById("first-name").value;
    var LastName = document.getElementById("last-name").value;
    var Email = document.getElementById("email").value;
     var AccountNumber = document.getElementById("account-number").value;
      var PhoneNumber = document.getElementById("phone-number").value;
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

      // Validate the username and password
      if (FirstName && LastName && Email && AccountNumber && PhoneNumber && username && password && confirmpassword) {
        alert("Sign-in successful!");
        // Redirect to a new page or perform other actions

        window.location.href = "./login.html"
      } else {
        alert("Invalid info. Please try again.");
        // Clear the input fields
        document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("AccountNumber").value = "";
        document.getElementById("PhoneNumber").value = "";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmpassword").value = "";
      }
    });

    function validateForm() {
  var FirstName = document.forms["myForm"]["first-name"].value;
  var LastName = document.forms["myForm"]["last-name"].value;
  var Email = document.forms["myForm"]["email"].value;
  var AccountNumber= document.forms["myForm"]["acct-number "].value;
  var AccountName= document.forms["myForm"]["acct-name "].value;
  var PhoneNumber= document.forms["myForm"]["phone-number"].value;
  var UserName = document.forms["myForm"]["user-name"].value;
  var Password = document.forms["myForm"]["password"].value;
  var ConfirmPassword = document.forms["myForm"]["confirm-password"].value;
  
  if (FirstName === "" || LastName === "" || Email === "" || AccountNumber === "" || AccountName === "" 
  || PhoneNumber === "" || UserName === "" || Password === "" || ConfirmPassword === "") {
    alert("Please fill in all fields.");
    return false;
  }
  
  // Code to submit the form or perform further validation
}