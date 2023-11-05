import React from "react"
import twitter_logo from "./images/Twitter.png"
import insta_logo from "./images/Instagram.png"
import facebook_logo from "./images/Facebook.png"
import github_logo from "./images/GitHub.png"


export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/Akram_Hany12"><img src={twitter_logo} alt="" /></a>
            <a href="https://www.facebook.com/akram.hany.18/"><img src={facebook_logo} alt="" /></a>
            <img src={insta_logo} alt="" />
            <a href="https://github.com/akramhany"><img src={github_logo} alt="" /></a>
        </div>
    )
}