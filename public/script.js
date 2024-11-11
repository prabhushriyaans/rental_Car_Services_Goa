document.addEventListener("DOMContentLoaded", function() {
    const WA_URL = window.env.WA_URL
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
    whatsappButton.href = {WA_URL};
    whatsappButton.target = "_blank";
    whatsappButton.className = "contact-btn whatsapp";
    whatsappButton.textContent = "WhatsApp";
    const emailButton = document.createElement('a');
    emailButton.href = "mailto:gonrentalservices@gmail.com";
    emailButton.target = "_blank";
    emailButton.className = "contact-btn email";
    emailButton.textContent = "Email";
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

document.addEventListener('DOMContentLoaded', () => {
    const carList = document.getElementById('carList');
    const modal = document.getElementById('carModal');
    const modalClose = modal.querySelector('.close');
    const carName = document.getElementById('carName');
    const carPrice = document.getElementById('carPrice');
    const carYear = document.getElementById('carYear');
    const carDetails = document.getElementById('carDetails');

    // Fetch car data from the server
    fetch('http://localhost:3000/cars')
        .then(response => response.json())
        .then(data => {
            data.forEach(car => {
                const carItem = document.createElement('div');
                carItem.classList.add('car-item');
                carItem.setAttribute('data-id', car.id);
                carItem.innerHTML = `
                    <img src="images/${car.name.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${car.name}">
                    <h2>${car.name}</h2>
                `;
                carList.appendChild(carItem);

                carItem.addEventListener('click', () => {
                    fetch(`http://localhost:3000/${car.id}`)
                        .then(response => response.json())
                        .then(carData => {
                            carName.textContent = carData.name;
                            carPrice.textContent = carData.price;
                            carYear.textContent = carData.year;
                            carDetails.textContent = carData.details;
                            modal.style.display = 'flex';
                        })
                        .catch(error => console.error('Error fetching car details:', error));
                });
            });
        })
        .catch(error => console.error('Error fetching car list:', error));

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
