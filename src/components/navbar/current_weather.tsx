import React, { useEffect, useState } from "react"

const CurrentWeather = () => {
const [lat, setLat] = useState<number | []>([])
const [long, setLong] = useState<number | []>([])
const [data, setData] = useState([])

// useEffect(() => {
    const fetchData = async () => {
//     navigator.geolocation.getCurrentPosition((posision) => {
//         setLat(posision.coords.latitude)
//         console.log(setLat)
//         setLong(posision.coords.longitude)
    // })
    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    
//     fetchData()
//     console.log(lat)
//     console.log(long)
// }, [lat,long])

return(
    <div></div>
)
}
export default CurrentWeather