import React from "react"
import { Grid, Statistic, DropdownItemProps, Container } from "semantic-ui-react"
import LeftNav from './left_nav'
import { Article } from '../../types'

type Props = {
    totalSum: number,
    articles: Article[]
    category: DropdownItemProps[] | any
    setCategory: any
}

const Navbar = ({ totalSum, category, setCategory }: Props) => {

    const onFilterSelected = (selectOption: string) => {
        setCategory(selectOption)
    }
    return (
        <Grid className="navbar_container" textAlign='center' verticalAlign="middle">
            <Grid.Row columns={3} className='three_column_row'>
                <Grid.Column >
                    <h2 className="category">Choose your category</h2>
                    <LeftNav onFilterSelected={onFilterSelected} category={category} />
                </Grid.Column>
                <Grid.Column className="hidden_mobile">
                <img className="img" src="https://media.discordapp.net/attachments/915912641548009522/1032732229899649045/News_Website.jpg"/>                
                </Grid.Column>
                <Grid.Column >
                    <Statistic inverted className="statistic">
                        <Statistic.Value >{totalSum}</Statistic.Value>
                        <Statistic.Label>Articles to read</Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default Navbar