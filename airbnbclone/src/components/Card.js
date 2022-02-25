import React from "react"
import img from "../images/image12.png"
import img2 from "../images/Star1.png"


export default function Card() {
    return (
        <div className="card">
        <img src={img} className="card--img"></img>
        <div className="card--stats">
            <img src={img2} className="card--star"></img>
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}