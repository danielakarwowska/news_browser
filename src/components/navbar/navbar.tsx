import React, { useState } from "react"
import { Segment, Image, Grid, Statistic } from "semantic-ui-react"
import RightNav from './right_nav'
import { SetCategory, Article } from '../../types'
import Articles from "../article/article"

type Props = {
    totalSum: number,
    articles: Article
}
const Navbar = ({ articles, totalSum }: Props) => {
    const [filterCategory, setFilterCategory] = useState()
    console.log(filterCategory)

    const filterArticles = articles.filter((ari: Article) => {
        if (filterCategory === "All category") {
            return ari
        } else if (filterCategory === "sports") {
            return ari.category === "sports"
        } else if (filterCategory === "business") {
            return ari.category === "business"
        }
    })
    const onFilterSelected = (selectOption: any) => {
        console.log(selectOption)
    }
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
                    <RightNav onFilterSelected={onFilterSelected} />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}
export default Navbar