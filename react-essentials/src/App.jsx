import { useState } from "react";
// import { Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
    return (
        // <Fragment>
        // <> - shorter syntax for Fragment
        <>
            <Header></Header>
            <main>
                <CoreConcepts></CoreConcepts>
                <Examples></Examples>
            </main>
        </>
        // </Fragment>
    );
}

export default App;
