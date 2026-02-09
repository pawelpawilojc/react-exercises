import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ userInputProp }) {
    const resultsData = calculateInvestmentResults(userInputProp);
    console.log(resultsData);
    return <p>Results...</p>;
}
