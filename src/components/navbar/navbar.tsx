import React from "react"
import { Segment, Image, Grid, Statistic, DropdownItemProps, Container } from "semantic-ui-react"
import LeftNav from './left_nav'
import { Article } from '../../types'

type Props = {
    totalSum: number,
    articles: Article[]
    category:  DropdownItemProps[]|any
    setCategory: any
}

const Navbar = ({ articles, totalSum, category, setCategory }: Props) => {


    const onFilterSelected = (selectOption: string) => {
        setCategory(selectOption)
        console.log(selectOption)
    }
    return (
        <Grid className="navbar_container"textAlign='center' verticalAlign="middle">
            <Grid.Row columns={3}>
                <Grid.Column >
                <h1>Choose your category</h1>
                <LeftNav 
                    onFilterSelected={onFilterSelected}
                    category={category} />
                </Grid.Column>
                <Grid.Column>
                    <Image centered bordered className="logo" src="https://cdn.discordapp.com/attachments/915912641548009522/1032732229899649045/News_Website.jpg" />
                </Grid.Column>
                <Grid.Column >
                    <Statistic inverted>
                        <Statistic.Value >{totalSum}</Statistic.Value> 
                         <Statistic.Label>Articles to read</Statistic.Label>
                         </Statistic>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default Navbar