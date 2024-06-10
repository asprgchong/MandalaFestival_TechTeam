import { useState } from 'react'
import './App.css'
import Arist_mini from './components/artist_mini'
import Button from './components/button'
import MiniMap from './components/miniMap'
import Navbar from './components/navbar'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <MiniMap/>
            <div class="row">
                <h2 class="column street">155 Indian Boundary Park</h2>
                <h1 class="column">cta</h1>
                <div class="line" id="left"></div>
            </div>

            <Button />

            <Arist_mini />
        </>
    )
}

export default App