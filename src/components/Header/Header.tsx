type HeaderProps = {
    marca: string;
    modelo: string;
    km: number;
};

export default function Header(props: HeaderProps) {
    const { marca, modelo, km } = props;

    return (
        <section className="header container">
            <h2>{marca}</h2>
            <ul>
                <li>Modelo: {modelo}</li>
                <li>Kilometragem: {km}</li>
            </ul>
        </section>
    );
}
