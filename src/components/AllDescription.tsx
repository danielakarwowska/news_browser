import axios from "axios"
import React, { useEffect, useState } from "react"

const AllDescription = () => {
    const [description, setDescription] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-10-06&to=2022-10-06&sortBy=popularity&apiKey=992cc5dfe65d43f582c92f6610baab68")
        .then((response) => {
            setDescription(response.data.articles)
            console.log(response.data.articles)
        })
    }, [])
    return(
        <div></div>
    )
}
export default AllDescription