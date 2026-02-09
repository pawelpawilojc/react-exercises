import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
function App() {
    const [userInputState, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    return (
        <>
            <Header />
            <UserInput userInputProp={userInputState} onChange={handleChange} />
            <Results userInputProp={userInputState} />
        </>
    );
}

export default App;
