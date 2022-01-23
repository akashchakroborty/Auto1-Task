import { CarsResponse } from '../redux/types/carsTypes';

export const MOCK_CARS_DATA: CarsResponse = {
  cars: [
    {
      stockNumber: 97074,
      manufacturerName: 'Porsche',
      modelName: '718 Cayman',
      color: 'black',
      mileage: { number: 100056, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 12876,
      manufacturerName: 'Tesla',
      modelName: 'Roadster',
      color: 'yellow',
      mileage: { number: 100481, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 18029,
      manufacturerName: 'Fiat',
      modelName: '131',
      color: 'white',
      mileage: { number: 100710, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 65672,
      manufacturerName: 'Skoda',
      modelName: 'Felicia',
      color: 'black',
      mileage: { number: 100751, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 42578,
      manufacturerName: 'Mercedes-Benz',
      modelName: 'Sprinter',
      color: 'yellow',
      mileage: { number: 100782, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 70917,
      manufacturerName: 'Tesla',
      modelName: 'Roadster',
      color: 'green',
      mileage: { number: 100929, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 53029,
      manufacturerName: 'Tesla',
      modelName: 'Model X',
      color: 'black',
      mileage: { number: 100997, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 77489,
      manufacturerName: 'Chrysler',
      modelName: 'Viper',
      color: 'red',
      mileage: { number: 101001, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 98739,
      manufacturerName: 'Tesla',
      modelName: 'Roadster',
      color: 'blue',
      mileage: { number: 101066, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
      stockNumber: 72351,
      manufacturerName: 'Porsche',
      modelName: '968',
      color: 'green',
      mileage: { number: 101069, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
  ],
  totalPageCount: 100,
  totalCarsCount: 1000,
};

export const MOCK_COLORS = {
  colors: ['red', 'blue', 'green', 'black', 'yellow', 'white', 'silver'],
};

export const MOCK_MANUFACTURERS = {
  manufacturers: [
    {
      name: 'Audi',
      models: [
        {
          name: '100',
        },
      ],
    },
  ],
};
