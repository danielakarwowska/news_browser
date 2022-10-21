import React, { useState } from "react"
import { Segment, Image } from "semantic-ui-react"

const Navbar = () => {
    let time = new Date().toTimeString().slice(0, 8)
    const [currentTime, setCurrentTime] = useState(time)
    const updateTime = () => {
        let time = new Date().toTimeString().slice(0, 8)
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    return (
        <Segment>
            <div className="nav-bar">
                <div className="clock">
                    <h1>{currentDate}</h1>
                    <h2>{currentTime}</h2>
                </div>
                <Image centered bordered className="logo" src="https://cdn.discordapp.com/attachments/915912641548009522/1032732229899649045/News_Website.jpg" />
            </div>
        </Segment>
    )
}
export default Navbar