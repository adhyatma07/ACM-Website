document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    alert("Thanks for contacting us!");
    window.location.href = 'index.html'; // Redirects to the homepage after clicking OK
});

document.getElementById('signupForm').addEventListener('submit',function(event){
   event.preventDefault();
   alert("Registration Done Successfully");
   window.location.href = 'index.html';
});


