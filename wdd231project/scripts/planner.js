document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
        'Paris, France',
        'New York, USA',
        'Tokyo, Japan',
        'Sydney, Australia',
        'Cape Town, South Africa'
    ];

    const destinationSelect = document.getElementById('destination');

    destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination;
        option.textContent = destination;
        destinationSelect.appendChild(option);
    });
});
