import React from 'react'
// import { navpage } from "../navpage";
import Sliders from './Topslide'
// import Tproduct from '../Componet/TProdctpage'

import "./HomePage.css"
import Navbar from './Navbar';


export default function Mainhome() {
    return (
        <div>
            <div className="main">
                {/* Hello EveryOne */}
                <Navbar />
                <Sliders />


            </div>
        </div>
    )
}
