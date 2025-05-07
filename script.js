document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would generally send the data to your server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Optionally clear the form
    document.getElementById('contactForm').reset();
    alert('Thank you for your message!');
});