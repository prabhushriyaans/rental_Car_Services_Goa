const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let cars = {
    1: { id: 1, name: 'Swift', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    2: { id: 2, name: 'Baleno', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    3: { id: 3, name: 'Ertiga', price: 'Rs 1,800-2,300', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 7, Petrol', availability: 'Available' },
    4: { id: 4, name: 'Brezza', price: 'Rs 2,500-3,000', year: '2018-2024', details: 'Mileage: 17-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    5: { id: 5, name: 'Creta', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 17-18 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    6: { id: 6, name: 'Venue', price: 'Rs 2,000-2,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    7: { id: 7, name: 'Alcazar', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 6/7, Petrol/Diesel', availability: 'Available' },
    8: { id: 8, name: 'Thar', price: 'Rs 3,000-3,500', year: '2018-2024', details: 'Mileage: 10-12 km/l, Manual/Automatic, Seats: 4, Petrol/Diesel', availability: 'Available' },
    9: { id: 9, name: 'Innova Crysta', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 8-12 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel', availability: 'Available' },
    10: { id: 10, name: 'Innova Hycross', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 16-23 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel', availability: 'Available' },
    11: { id: 11, name: 'Fortuner', price: 'Rs 4,500-5,000', year: '2018-2024', details: 'Mileage: 10-14 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel', availability: 'Available' },
    12: { id: 12, name: 'i20', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    13: { id: 13, name: 'i10', price: 'Rs 1,100-1,400', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol', availability: 'Available' },
    14: { id: 14, name: 'Ignis', price: 'Rs 1,100-1,400', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol', availability: 'Available' },
    15: { id: 15, name: 'Dzire', price: 'Rs 1,300-1,800', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel', availability: 'Available' },
    16: { id: 16, name: 'Fronx', price: 'Rs 1,300-1,700', year: '2023-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel', availability: 'Available' },
    17: { id: 17, name: 'Carens', price: 'Rs 2,000-2,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel', availability: 'Available' }
};

// ✅ Update car availability
app.post('/admin/update-car', (req, res) => {
    const { id, availability } = req.body;
    const carId = parseInt(id, 10); // Convert ID to an integer

    if (cars[carId]) {
        cars[carId].availability = availability;
        res.json({ success: true, message: `Car ID ${carId} status updated to ${availability}` });
    } else {
        res.status(404).json({ success: false, message: 'Car not found' });
    }
});

// ✅ Get all cars
app.get('/cars', (req, res) => {
    res.json(Object.values(cars));
});

// ✅ Get a single car's details
app.get('/car/:id', (req, res) => {
    const carId = parseInt(req.params.id, 10); // Convert ID to an integer
    const car = cars[carId];

    if (car) {
        res.json({
            id: car.id,
            name: car.name,
            price: car.price,
            year: car.year,
            details: car.details,
            availability: car.availability
        });
    } else {
        res.status(404).json({ success: false, message: 'Car not found' });
    }
});

// ✅ Start the server
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
