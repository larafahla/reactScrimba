import React from "react"
import img from "../images/Group77.png"


export default function Hero() {
    return (
        <section className="hero">
            <img src={img} className="main--img" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}