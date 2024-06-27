// This function runs when the form is submitted
function validateLoginForm(event) {
  // Get the values entered in the form fields
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple checks to make sure the user entered valid information
  if (username.length < 3) {
      alert('Username must be at least 3 characters long.');
      event.preventDefault(); // Stop the form from submitting
      return false; // Return false to indicate validation failed
  }

  if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      event.preventDefault(); // Stop the form from submitting
      return false; // Return false to indicate validation failed
  }

  return true; // Return true if validation passes
}

// Attach the validateLoginForm function to the form submit event
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);