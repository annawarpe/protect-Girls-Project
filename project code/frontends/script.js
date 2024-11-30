document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration Successful!');
    this.reset(); // Reset the form after submission
});