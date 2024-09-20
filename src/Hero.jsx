// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Hero(){
    let Age = 33
    Age> 30 ? console.log("you are older than expected") : console.log("you are younger")
    
    let password = "my"
    password === "mypassword" ? console.log("Password Correct") : console.log("Password Incorrect")
    return(
        <div className="hero">
            <div className="animated-box">
            Over 3 million ready-to-work creatives!
            </div>
            <div className="h1s">The worlds destination <br /> for design</div>
            <div className="subTitle">Get inspired by the work of millions of top-rated designers & agencies around the world.</div>
            <div className="get-started">Get started</div>
        </div>
    )
}