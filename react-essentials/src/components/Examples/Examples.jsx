import { useState } from "react";
import TabButton from "../TabButton.jsx/TabButton.jsx";
import { EXAMPLES } from "../../data.js";

/* //////////////////////////////////////////////////// */
// selectedTopic version 3
// let tabContent = <p>Please select a topic.</p>;
// if (selectedTopic) {
//     tabContent = (
//         <div id="tab-content">
//             <h3>{EXAMPLES[selectedTopic].title}</h3>
//             <p>{EXAMPLES[selectedTopic].description}</p>
//             <pre>
//                 <code>{EXAMPLES[selectedTopic].code}</code>
//             </pre>
//         </div>
//     );
// }

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    return (
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
            {/* {selectedTopic ? (
                        <div id="tab-content">
                            {/* {selectedTopic===undefined ? <p>Please select a topic.</p> : null} */}
            {/* {!selectedTopic ? <p>Please select a topic.</p> : null} */}
            {/* <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    ) : (
                        <p>Please select a topic.</p>
                    )} */}

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
            {/* {tabContent} */}
        </section>
    );
}
