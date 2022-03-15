import logo192 from '../images/logo192.png';

export default function Header() {
    return (
        <nav className="nav">
            <img src={logo192} className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}