import { useState } from "react";

import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    /* //////////////////////////////////////////////////// */
    // selectedTopic version 3
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        ></CoreConcept>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </menu>
                    {/* //////////////////////////////////////////////////// */}
                    {/* selectedTopic version 1 */}
                    {selectedTopic ? (
                        <div id="tab-content">
                            {/* {selectedTopic===undefined ? <p>Please select a topic.</p> : null} */}
                            {/* {!selectedTopic ? <p>Please select a topic.</p> : null} */}
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    ) : (
                        <p>Please select a topic.</p>
                    )}

                    {/* //////////////////////////////////////////////////// */}
                    {/* selectedTopic version 2 */}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                    {!selectedTopic && <p>Please select a topic.</p>}

                    {/* //////////////////////////////////////////////////// */}
                    {/* selectedTopic version 3 */}
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
