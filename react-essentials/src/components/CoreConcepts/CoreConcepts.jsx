import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept
                        key={conceptItem.title}
                        {...conceptItem}
                    ></CoreConcept>
                ))}
                {/* <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
                                <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                                <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                                <CoreConcept
                                    title={CORE_CONCEPTS[3].title}
                                    description={CORE_CONCEPTS[3].description}
                                    image={CORE_CONCEPTS[3].image}
                                ></CoreConcept> */}
            </ul>
        </section>
    );
}
