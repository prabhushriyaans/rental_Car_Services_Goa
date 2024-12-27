document.addEventListener("DOMContentLoaded", function () {
    const carItems = document.querySelectorAll('.car-item');
    const modal = document.getElementById('carModal');
    const modalCloseButton = modal.querySelector('.close');
    const carNameElement = document.getElementById('carName');
    const carPriceElement = document.getElementById('carPrice');
    const carYearElement = document.getElementById('carYear');
    const carDetailsElement = document.getElementById('carDetails');

    // Handle car item click
    carItems.forEach(carItem => {
        carItem.addEventListener('click', () => handleCarClick(carItem));
    });

    async function handleCarClick(carItem) {
        const carId = carItem.getAttribute('data-id');
        try {
            const response = await fetch(`/car/${carId}`);
            if (!response.ok) throw new Error('Car data fetch failed');
            const carData = await response.json();
            showCarModal(carData);
        } catch (error) {
            console.error('Error fetching car data:', error);
            alert('Unable to fetch car details. Please try again later.');
        }
    }

    function showCarModal(carData) {
        carNameElement.textContent = carData.name || 'N/A';
        carPriceElement.textContent = carData.price || 'N/A';
        carYearElement.textContent = carData.year || 'N/A';
        carDetailsElement.textContent = carData.details || 'N/A';
        modal.style.display = 'block';
    }

    // Close modal actions
    modalCloseButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) modal.style.display = 'none';
    });

    // Initialize Google Map
    window.initMap = function () {
        const carLocation = { lat: 15.2993, lng: 74.1240 }; // Example coordinates
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: carLocation,
        });
        new google.maps.Marker({
            position: carLocation,
            map: map,
        });
    };

    // Create and append contact buttons
    createContactButtons([
        {
            href: "https://wa.me/919021306734",
            imgSrc: "whatsapp.jpg",
            alt: "WhatsApp",
            style: { borderRadius: "50%" },
        },
        {
            href: "mailto:gonrentalservices@gmail.com",
            imgSrc: "email.jpg",
            alt: "Email",
            style: { borderRadius: "20%" },
        },
        {
            href: "https://www.instagram.com/gon_car_rentals",
            imgSrc: "insta1.jpg",
            alt: "Instagram",
            style: { borderRadius: "60%" },
        },
    ]);

    function createContactButtons(buttons) {
        const container = document.createElement('div');
        container.className = 'contact-buttons';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.gap = '10px'; // Adjusted gap for closer alignment

        buttons.forEach(({ href, imgSrc, alt, style }) => {
            const button = document.createElement('a');
            button.href = href;
            button.target = "_blank";
            button.className = "contact-btn";
            button.setAttribute('aria-label', alt);
            const icon = document.createElement('img');
            icon.src = imgSrc;
            icon.alt = alt;
            Object.assign(icon.style, {
                width: "90px",
                height: "80px",
                ...style,
            });
            button.appendChild(icon);
            container.appendChild(button);
        });
        document.body.appendChild(container);
    }
});
