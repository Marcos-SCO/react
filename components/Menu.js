import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

const Menu = () => {
    return (
        <ul>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/sobre"><a style={linkStyle}>Sobre</a></Link>
            <Link href="/contato"><a style={linkStyle}>Contato</a></Link>
        </ul>
    );
}

export default Menu;