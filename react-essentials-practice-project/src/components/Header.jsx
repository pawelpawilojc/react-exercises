import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo showing a money bag" />
            <h1>Investment Calculator</h1>
            <progress id="percent-loaded" value="75" max="100">
                75 %
            </progress>
        </header>
    );
}
