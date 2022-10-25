import React, { useState } from "react"
import { Segment, Image, Grid, Statistic } from "semantic-ui-react"
import RightNav from './right_nav'

const Navbar = () => {
    return (
        <Segment className="navbar_container">
            <Grid columns='three' divided >
                <Grid.Column>
                    <Statistic>
                        <Statistic.Value>2,204</Statistic.Value>
                        <Statistic.Label>Views</Statistic.Label>
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