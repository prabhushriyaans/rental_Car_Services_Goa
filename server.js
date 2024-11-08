const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const cars = {
    1: { name: 'Swift', price:'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, Seat-5,  petrol/diesel' },
    2: { name: 'Baleno', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 5 seats, petrol/diesel' },
    3: { name: 'Ertiga', price: 'Rs 1,800-2,300', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 7 seats, petrol' },
    4: { name: 'Brezza', price: 'Rs 2,500-3,000', year: '2018-2024', details: 'Mileage-17-20 km/l, manual/automatic, 5 seats, petrol/diesel' },
    5: { name: 'Creta', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage-17-18 km/l, manual/automatic, 5 seats, petrol/diesel' },
    6: { name: 'Venue', price: 'Rs 2,000-2,500', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 5 seats, petrol/diesel' },
    7: { name: 'Alcazar', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 6/7 seats, petrol/diesel' },
    8: { name: 'Thar', price: 'Rs 3,000-3,500', year: '2018-2024', details: 'Mileage-10-12 km/l, manual/automatic, 4 seats, petrol/diesel' },
    9: { name: 'Innova Crysta', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage-8-12 km/l, manual/automatic, 7 seats, petrol/diesel' },
    10: { name: 'Innova Hycross', price: 'Rs 3,500-4,000', year: '2018-2024', details: 'Mileage-16-23 km/l, manual/automatic, 7 seats, petrol/diesel' },
    11: { name: 'Fortuner', price: 'Rs 4,500-5,000', year: '2018-2024', details: 'Mileage-10-14 km/l, manual/automatic, 7 seats, petrol/diesel' },
    12: { name: 'i20', price: 'Rs 1,300-1,500', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 5 seats, petrol/diesel' },
    13: { name: 'i10', price: 'Rs 1,100-1,400', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 5 seats, petrol' },
    14: { name: 'Ignis', price: 'Rs 1,100-1,400', year: '2018-2024', details: 'Mileage-18-20 km/l, manual/automatic, 5 seats, petrol' },
    15: { name: 'Dzire', price: 'Rs 1300-1800', year: '2018-2024', details: 'Mileage-18-20 km/l  manual/automatic  Seat-7 petrol/diesel' },
    16: {name: 'Fronx', price: 'Rs 1300-1700', year: '-2023-2024', details: 'Mileage-18-20 km/l  manual/automatic Seat-5  petrol/diesel'},
    17: {name: 'Carens', price: 'Rs 2000-2500', year: '2018-2024', details: 'Mileage-18-20 km/l , manual/automatic , Seat-7 , petrol/diesel'}
};

app.get('/car/:id', (req, res) => {
    const carId = req.params.id;
    const car = cars[carId];
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Car not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
