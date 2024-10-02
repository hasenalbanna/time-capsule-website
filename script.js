document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        console.log(`Name: ${name}, Message: ${message}`);
        alert('Your message has been submitted to the time capsule!');
    } else {
        alert('Please fill in all fields.');
    }

    // Reset the form
    document.getElementById('messageForm').reset();
});
