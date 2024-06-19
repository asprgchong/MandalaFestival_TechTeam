import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import ArtistDetails from './pages/artistDetails';
import Home from './pages/homepage';
import Playlist from './pages/playlist';

function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/"
                    element={<Home/>}
                />
                <Route 
                    path='/chethanAnant'
                    element={<ArtistDetails/>}
                />
                <Route 
                    path='/shantahNurullah'
                    element={<ArtistDetails/>}
                />
                <Route 
                    path='/IGustiNgurahKertayuda'
                    element={<ArtistDetails/>}
                />
                <Route 
                    path='/juanPastor'
                    element={<ArtistDetails/>}
                />

                <Route 
                    path='/playlist'
                    element={<Playlist/>}
                />
            </Routes>
        </Router>
    )
}

export default App;

              