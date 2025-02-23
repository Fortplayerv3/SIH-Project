document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('event-modal');
    const closeModal = document.querySelector('.close-btn');
    const modalDetails = document.getElementById('modal-details');

    // Event data
    const eventDetails = {
        1: {
            title: "Classical Dance Workshop",
            description: "This workshop will cover various classical dance forms including Bharatanatyam, Kathak, and Odissi. The workshop is open to all levels, from beginners to advanced dancers. Participants will also have the opportunity to perform in a showcase at the end of the workshop.",
            additionalInfo: "Registration Fee: INR 500"
        },
        2: {
            title: "Handicrafts Exhibition",
            description: "The Handicrafts Exhibition at Dilli Haat showcases the best of Indian artisanship, from pottery and textiles to woodwork and jewelry. This event is a great opportunity to support local artisans and learn about the traditional crafts of India.",
            additionalInfo: "Entry Fee: INR 50"
        },
        3: {
            title: "Folk Music Festival",
            description: "Enjoy an evening of enchanting folk music performances from different regions of India. The festival features a lineup of renowned artists who will take you on a musical journey through the diverse soundscape of India's folk traditions.",
            additionalInfo: "Free Entry"
        }
    };

    // Function to show the modal with event details
    function showModal(eventId) {
        const event = eventDetails[eventId];
        if (event) {
            modalDetails.innerHTML = `
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <p><strong>Additional Info:</strong> ${event.additionalInfo}</p>
            `;
            modal.style.display = 'flex';
        } else {
            console.error('No event found for ID ${eventId}');
        }
    }

    // Get all "Learn More" buttons and add click event listeners
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const eventId = button.getAttribute('data-event');
            showModal(eventId);
        });
    });

    // Close the modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Function to initialize countdown timers
function initializeCountdown(eventDate, countdownElementId) {
    const eventTime = new Date(eventDate).getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(countdownElementId).innerHTML = 
            `<span>${days}</span> Days 
             <span>${hours}</span> Hours 
             <span>${minutes}</span> Minutes 
             <span>${seconds}</span> Seconds`;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById(countdownElementId).innerHTML = "The event has started!";
        }
    }, 1000);
}

// Initialize countdowns for each event
initializeCountdown("Sep 10, 2024 23:59:59", "countdown1");
initializeCountdown("Oct 5, 2024 23:59:59", "countdown2");
initializeCountdown("Nov 15, 2024 23:59:59", "countdown3");