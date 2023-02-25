type CarDetailsProps = {
    marca: string;
    modelo: string;
    km: number;
};

export default function CarDetails(props: CarDetailsProps) {
    const { marca, modelo, km } = props;

    return (
        <section className="car-details container">
            <h2>{marca}</h2>
            <ul>
                <li>Modelo: {modelo}</li>
                <li>Kilometragem: {km}</li>
            </ul>
        </section>
    );
}
