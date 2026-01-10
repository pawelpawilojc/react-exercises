import "./TabButton.css";

// export default function TabButton(props) {
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>
//     );
// }

export default function TabButton({ children }) {
    // function clickHandler(){}
    function handleClick() {
        console.log("Hello from TabButton");
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}
