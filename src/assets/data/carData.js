// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "13kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Model S ; 396 mi. Range (EPA est.) Range (EPA est.) ; 1.99 s. 0-60 mph*. 0-60 mph* ; 200 mph. Top Speed†. Top Speed† ; 1,020 hp. Peak Power. Peak Power. ",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2023",
    price: 50,
    speed: "11kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Toyota Car Specifications ; 2.8 4x2 AT TRD Limited Edition, Diesel, Automatic, 10/13 KMPL, ₹ 34.98 Lakh ; 2.8 4x2 MT, Diesel, Manual, 12/14 KMPL.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "15kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " BMW 7 Series Specifications ; Displacement (cc), 2998. Max Power, 375.48bhp@5200-6250rpm. Max Torque ; Front Suspension, Air Suspension. Rear Suspension.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2020",
    price: 70,
    speed: "13kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Key Specifications of Nissan Magnite ; ARAI Mileage, 20.0 kmpl ; Fuel Type, Petrol ; Engine Displacement (cc), 999 ; No. of cylinder, 3 ; Max Power (bhp@rpm).",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2021",
    price: 45,
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Petrol engine is 3902 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the 488 has a mileage of 8.77 kmpl.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Key Specifications of Mercedes-Benz New C-Class 1997-2022 ; ARAI Mileage, 17.9 kmpl ; Fuel Type, Petrol ; Engine Displacement (cc), 1991 ; No. of cylinder, 4.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "9.8 kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Key Specifications of Audi A4 ; No. of cylinder, 4 ; Max Power (bhp@rpm), 187.74bhp@4200-6000rpm ; Max Torque (nm@rpm), 320Nm@1450–4200rpm ; Seating Capacity, 5.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "8kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Engine, 2.7L Turbo Plus (310 hp [231 kW] @ 5600 rpm, 391 lb-ft of torque [530 Nm] @ 2000 rpm) (When ordered with (RWQ) LPO, 2.7L Turbo High-Output Calibration.",
  },
];

export default carData;