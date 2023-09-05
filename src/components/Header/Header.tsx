type HeaderProps = {
    name: string;
    url: string;
};

export default function Header(props: HeaderProps) {
    const { name, url } = props;

    return (
        <li><a href={url}>{name}</a></li>
    );
}
