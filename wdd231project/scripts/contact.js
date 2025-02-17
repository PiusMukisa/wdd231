document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.querySelector('#name').value;
    const email = event.target.querySelector('#email').value;
    const phone = event.target.querySelector('#phone').value;
    const contactReason = event.target.querySelector('#contactReason').value;
    const message = event.target.querySelector('#message').value;
    const newsletter = event.target.querySelector('#newsletter').checked;
    
    let formMessage = `Thank you, ${name}! Your message has been sent.`;
    if (newsletter) {
        formMessage += ` You have subscribed to our newsletter.`;
    }
    
    document.getElementById('formMessage').textContent = formMessage;
    document.getElementById('formMessage').style.display = 'block';
    event.target.reset();
});
