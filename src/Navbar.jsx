import { useState } from 'react'
import logo from "./assets/logo-small.png"
import './styles/Navbar.css'

export default function Navbar () {
    return (
        <nav>
            <img src={logo}></img>
        </nav>
    )
}