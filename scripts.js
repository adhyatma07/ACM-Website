

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting normally
  alert("Your Subscription is Recorded!");
  window.location.href = 'index.html'; // Redirects to the homepage after clicking OK
});




