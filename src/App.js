import ChordDiagram from "./components/chord-diagram";

import "./App.scss";

function App() {
    const notes = [
        [2, 1, "1"],
        [3, 2, "2"],
        [5, 3, "3"],
        [6, "x"],
    ];

    return (
        <div className="app">
            <h1>Vexchords & React Example</h1>
            <ChordDiagram label="C Major" notes={notes} />
        </div>
    );
}

export default App;
