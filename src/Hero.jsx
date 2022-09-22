import { useState } from "react";
import imageGrid from "./assets/images.png";
import "./styles/Hero.css";

export default function Hero() {
    return (
        <div className="main">
            <div className="image-grid">
                <img src={imageGrid}></img>
            </div>
            <h1>Online experiences</h1>
            <h2>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h2>


        </div>
    )
}