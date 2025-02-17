// destinations.js

// Fetch destinations data from JSON file
export async function fetchDestinations() {
    try {
        console.log('Fetching destinations data...');
        const response = await fetch('./data/destinations.json'); // Ensure the correct path
        if (!response.ok) {
            throw new Error(`Failed to fetch destinations: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Destinations data fetched successfully:', data);
        return data.destinations;
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return [];
    }
}

// Display destinations in the grid
export function displayDestinations(destinations) {
    const container = document.getElementById('destinations-grid');
    if (!container) {
        console.error('Destination container not found!');
        return;
    }

    container.innerHTML = destinations.map(destination => `
        <article class="destination-card" data-id="${destination.id}">
            <img src="${destination.image}" alt="${destination.name}" class="destination-image">
            <div class="destination-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-details">
                    <span class="rating">★ ${destination.rating}</span>
                    <span class="price-level">${destination.price_level}</span>
                </div>

            </div>
        </article>
    `).join('');

}

// Show destination details in modal
function showDestinationDetails(destination) {
    const modal = document.getElementById('destination-modal');
    const modalContent = document.getElementById('modal-details');

    if (!modal || !modalContent) {
        console.error('Modal elements not found!');
        return;
    }

    modalContent.innerHTML = `
        <span class="close-modal">&times;</span>
        <h2>${destination.name}</h2>
        <img src="${destination.image}" alt="${destination.name}" class="modal-image">
        <div class="destination-info">
            <p>${destination.description}</p>
            <h3>Highlights</h3>
            <ul>
                ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
            <div class="additional-info">
                <p><strong>Best Time to Visit:</strong> ${destination.best_time}</p>
                <p><strong>Price Level:</strong> ${destination.price_level}</p>
                <p><strong>Rating:</strong> ${destination.rating} ★</p>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    // Add event listener to close the modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Load and display destinations when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    const destinations = await fetchDestinations();
    if (destinations.length > 0) {
        displayDestinations(destinations);
    } else {
        console.error('No destinations to display.');
    }
});
