import { useState } from 'react'
import './App.css'
import Arist_mini from './components/artist_mini'
import Button from './components/button'
import Minimap from './components/MiniMap'
import Navbar from './components/navbar'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <div class="row">
                <h2 class="column street">155 Indian Boundary Park</h2>
                <h1 class="column">bus stop</h1>
                <div class="line" id="left"></div>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Minimap/>

            <Arist_mini />
        </>
    )
}

export default App