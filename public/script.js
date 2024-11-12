document.addEventListener("DOMContentLoaded", function () {
    const carItems = document.querySelectorAll('.car-item');
    const modal = document.getElementById('carModal');
    const modalCloseButton = modal.querySelector('.close');
    const carNameElement = document.getElementById('carName');
    const carPriceElement = document.getElementById('carPrice');
    const carYearElement = document.getElementById('carYear');
    const carDetailsElement = document.getElementById('carDetails');

    // Fetch car data when a car image is clicked
    carItems.forEach(carItem => {
        carItem.addEventListener('click', async function () {
            const carId = carItem.getAttribute('data-id'); // Get car ID from the clicked item

            try {
                const response = await fetch(`/car/${carId}`); // Fetch car data from server
                if (!response.ok) {
                    throw new Error('Car not found');
                }
                const carData = await response.json();
                showCarModal(carData); // Display modal with fetched car details
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        });
    });

    // Function to display the car details modal
    function showCarModal(carData) {
        carNameElement.textContent = carData.name;
        carPriceElement.textContent = carData.price;
        carYearElement.textContent = carData.year;
        carDetailsElement.textContent = carData.details;
        modal.style.display = 'block'; // Show the modal
    }

    // Close the modal when the close button is clicked
    modalCloseButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal if the user clicks outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });

    // Initialize Map for car location (if you are using Google Maps)
    function initMap() {
        const carLocation = { lat: 15.2993, lng: 74.1240 }; // Example coordinates for Goa
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: carLocation,
        });
        new google.maps.Marker({
            position: carLocation,
            map: map,
        });
    }

    window.initMap = initMap;

    // Contact buttons setup
    const contactButtonsContainer = document.createElement('div');
    contactButtonsContainer.className = 'contact-buttons';

    // WhatsApp Button
    const WA_URL = "https://wa.me/919021306734";
    const whatsappButton = document.createElement('a');
    whatsappButton.href = WA_URL;
    whatsappButton.target = "_blank";
    whatsappButton.className = "contact-btn whatsapp";
    const whatsappIcon = document.createElement('img');
    whatsappIcon.src = "whatsapp.jpg";  // Replace with actual path to the WhatsApp icon image
    whatsappIcon.alt = "WhatsApp";
    whatsappIcon.style.width = "90px";  // Adjust size as needed
    whatsappIcon.style.height = "80px";
    whatsappIcon.style.borderRadius = "50%";  // Make the image round
    whatsappButton.style.background = "none";
    whatsappButton.style.border = "none";
    whatsappButton.style.padding = "0";
    whatsappButton.style.margin = "0";
    whatsappButton.style.display = "inline-block";
    whatsappButton.appendChild(whatsappIcon);

    // Email Button
    const emailButton = document.createElement('a');
    emailButton.href = "mailto:gonrentalservices@gmail.com";
    emailButton.target = "_blank";
    emailButton.className = "contact-btn email";
    const emailIcon = document.createElement('img');
    emailIcon.src = "email.jpg";  // Replace with the actual path to the email icon image
    emailIcon.alt = "Email";
    emailIcon.style.width = "90px";  // Adjust size as needed
    emailIcon.style.height = "80px";
    emailIcon.style.borderRadius = "20%";
    emailButton.style.background = "none";
    emailButton.style.border = "none";
    emailButton.style.padding = "0";
    emailButton.style.margin = "0";
    emailButton.style.display = "inline-block";
    emailButton.appendChild(emailIcon);

    // Instagram Button
    const IG_URL = "https://www.instagram.com/gon_car_rentals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
    const instagramButton = document.createElement('a');
    instagramButton.href = IG_URL;
    instagramButton.target = "_blank";
    instagramButton.className = "contact-btn instagram";
    const instagramIcon = document.createElement('img');
    instagramIcon.src = "insta1.jpg";  // Replace with actual path to the Instagram icon image
    instagramIcon.alt = "Instagram";
    instagramIcon.style.width = "90px";  // Adjust size as needed
    instagramIcon.style.height = "80px";
    instagramIcon.style.borderRadius = "60%";
    instagramButton.style.background = "none";
    instagramButton.style.border = "none";
    instagramButton.style.padding = "0";
    instagramButton.style.margin = "0";
    instagramButton.style.display = "inline-block";
    instagramButton.appendChild(instagramIcon);

    // Append buttons to the container and add to the body
    contactButtonsContainer.appendChild(whatsappButton);
    contactButtonsContainer.appendChild(emailButton);
    contactButtonsContainer.appendChild(instagramButton);
    document.body.appendChild(contactButtonsContainer);
});
