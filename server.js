const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const cars = {
    1: {id: 1, name: 'Swift', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    2: {id: 2, name: 'Baleno', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    3: {id: 3, name: 'Ertiga', price: 'Rs 1,800-2,300', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 7, Petrol'},
    4: {id: 4, name: 'Brezza', price: 'Rs 2,500-3,000', year: '2018-2024', details: 'Mileage: 17-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    5: {id: 5, name: 'Creta', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 17-18 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    6: {id: 6, name: 'Venue', price: 'Rs 2,000-2,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    7: {id: 7, name: 'Alcazar', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 6/7, Petrol/Diesel'},
    8: {id: 8, name: 'Thar', price: 'Rs 3,000-3,500', year: '2018-2024', details: 'Mileage: 10-12 km/l, Manual/Automatic, Seats: 4, Petrol/Diesel'},
    9: {id: 9, name: 'Innova Crysta', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 8-12 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel'},
    10: {id: 10, name: 'Innova Hycross', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage: 16-23 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel'},
    11: {id: 11, name: 'Fortuner', price: 'Rs 4,500-5,000', year: '2018-2024', details: 'Mileage: 10-14 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel'},
    12: {id: 12, name: 'i20', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    13: {id: 13, name: 'i10', price: 'Rs 1,100-1,400', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol'},
    14: {id: 14, name: 'Ignis', price: 'Rs 1,100-1,400', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol'},
    15: {id: 15, name: 'Dzire', price: 'Rs 1,300-1,800', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel'},
    16: {id: 16, name: 'Fronx', price: 'Rs 1,300-1,700', year: '2023-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 5, Petrol/Diesel'},
    17: {id: 17, name: 'Carens', price: 'Rs 2,000-2,500', year: '2018-2024', details: 'Mileage: 18-20 km/l, Manual/Automatic, Seats: 7, Petrol/Diesel'}
};

// Endpoint to get all cars
app.get('/cars', (req, res) => {
    res.json(Object.values(cars));
});

// Endpoint to get a specific car by its ID
app.get('/car/:id', (req, res) => {
    const carId = req.params.id;
    const car = cars[carId];
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Car not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
