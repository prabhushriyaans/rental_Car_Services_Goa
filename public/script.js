document.addEventListener("DOMContentLoaded", function() {
    // Initialize Map
    function initMap() {
        const carLocation = { lat: 15.2993, lng: 74.1240 }; // Default location for demo purposes
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: carLocation,
        });
        new google.maps.Marker({
            position: carLocation,
            map: map,
        });
    }

    window.initMap = initMap; // Make sure the initMap function is globally accessible

    // Contact buttons setup
    const contactButtonsContainer = document.createElement('div');
    contactButtonsContainer.className = 'contact-buttons';
    const whatsappButton = document.createElement('a');
    whatsappButton.href = "https://wa.me/919021306734";
    whatsappButton.target = "_blank";
    whatsappButton.className = "contact-btn whatsapp";
    whatsappButton.textContent = "Contact on WhatsApp";
    const emailButton = document.createElement('a');
    emailButton.href = "mailto:gonrentalservices@gmail.com";
    emailButton.target = "_blank";
    emailButton.className = "contact-btn email";
    emailButton.textContent = "Email the Owner";
    contactButtonsContainer.appendChild(whatsappButton);
    contactButtonsContainer.appendChild(emailButton);
    document.body.appendChild(contactButtonsContainer);

    // Car Item Click Event
    const carItems = document.querySelectorAll(".car-item");
    const carModal = document.getElementById("carModal");
    const carName = document.getElementById("carName");
    const carPrice = document.getElementById("carPrice");
    const carYear = document.getElementById("carYear");
    const carDetails = document.getElementById("carDetails");
    const closeModal = document.querySelector(".close");

    carItems.forEach(carItem => {
        carItem.addEventListener("click", function() {
            const carId = carItem.getAttribute("data-id");

            // Correct fetch URL
            fetch(`/car/${carId}`)
                .then(response => response.json())
                .then(data => {
                    carName.textContent = data.name;
                    carPrice.textContent = data.price;
                    carYear.textContent = data.year;
                    carDetails.textContent = data.details;
                    carModal.style.display = "block";
                })
                .catch(error => {
                    console.error('Error fetching car data:', error);
                    alert('Sorry, car details could not be loaded at the moment.');
                });
        });
    });

    closeModal.addEventListener("click", function() {
        carModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == carModal) {
            carModal.style.display = "none";
        }
    });
});
