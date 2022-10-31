import React, { useState } from "react"
import { Segment, Image, Grid, Statistic } from "semantic-ui-react"
import RightNav from './right_nav'

type Props = {
totalSum: number
}
const Navbar = ({totalSum}: Props) => {
    return (
        <Segment className="navbar_container">
            <Grid columns='three' divided >
                <Grid.Column>
                    <Statistic className="statistic">
                        <Statistic.Value >{totalSum}</Statistic.Value>
                        <Statistic.Label>Articles to read</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column>
                    <Image centered bordered className="logo" src="https://cdn.discordapp.com/attachments/915912641548009522/1032732229899649045/News_Website.jpg" />
                </Grid.Column>
                <Grid.Column>
                    <RightNav />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}
export default Navbar