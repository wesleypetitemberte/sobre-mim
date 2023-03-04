import "./app.scss";

//Components
import Header from "./components/Header/Header";

//Imagens
//import logo from "./logo.svg";

export default function App() {
    const links = [
        { id: 1, marca: "GM", modelo: "Corsa", km: 320 },
        { id: 2, marca: "VW", modelo: "Gol", km: 240 },
        { id: 3, marca: "Ford", modelo: "Ka", km: 170 },
    ];

    return (
        <div className="header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}

            {/*Tarefa 4*/}
            {links.map((link) => (
                <Header
                    key={link.id}
                    marca={link.marca}
                    modelo={link.modelo}
                    km={link.km}
                />
            ))}
        </div>
    );
}
