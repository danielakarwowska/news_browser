import React, { useState } from "react"
import { Segment, Image, Grid } from "semantic-ui-react"
import Category from './category'

const Navbar = () => {
    const time = new Date().toTimeString().slice(0, 8)
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
        <Grid columns='three' divided>
            <Grid.Column>
                <h1>{currentDate}</h1>
                <h2>{currentTime}</h2>
            </Grid.Column>
            <Grid.Column>
                <Image centered bordered className="logo" src="https://cdn.discordapp.com/attachments/915912641548009522/1032732229899649045/News_Website.jpg" />
            </Grid.Column>
            <Grid.Column>
                <Category />
            </Grid.Column>
        </Grid>
        </Segment>
    )
}
export default Navbar