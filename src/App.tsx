import "./App.scss";
import { useState } from "react";

//Components
import CarDetails from "./components/CarDetails/CarDetails";

//Imagens
//import logo from "./logo.svg";

export default function App() {
    const cars = [
        { id: 1, marca: "GM", modelo: "Corsa", km: 320 },
        { id: 2, marca: "VW", modelo: "Gol", km: 240 },
        { id: 3, marca: "Ford", modelo: "Ka", km: 170 },
    ];

    return (
        <div className="App">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}

            {/*Tarefa 4*/}
            {cars.map((car) => (
                <CarDetails
                    key={car.id}
                    marca={car.marca}
                    modelo={car.modelo}
                    km={car.km}
                />
            ))}
        </div>
    );
}
