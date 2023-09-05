import "./app.scss";

//Components
import Header from "./components/Header/Header";

//Imagens
import logo from "./images/logo.png";

export default function App() {
    const links = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Sobre", url: "/sobre" },
        { id: 3, name: "Contato", url: "/contato" },
    ];

    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="logo" href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="menu">
                        <ul>
                            {links.map((link) => (
                                <Header
                                    key={link.id}
                                    name={link.name}
                                    url={link.url}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
