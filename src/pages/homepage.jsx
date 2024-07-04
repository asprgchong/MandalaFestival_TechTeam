import React, { useState } from "react";
import '../css/homepage.css';
import Artist_mini from '/src/components/artist_mini';
import Footer from '/src/components/footer';
import MiniMap from '/src/components/miniMap';
import Navbar from '/src/components/navbar';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <MiniMap/>
            <div class="row">
                <h2 class="column street">At Crossroads.</h2>
                <h1 class="column cta">cta</h1>
                <div class="line" id="left"></div>
            </div>
            <p class="lp" >Mandala presents an activation at the Morse Station.</p>

            <Artist_mini />

            <Footer />
        </>
    )
}

export default App;

              