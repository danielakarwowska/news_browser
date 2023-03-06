import React from "react"

const ResponsiveImage = () => {
    return(
        <img 
        src="https://media.discordapp.net/attachments/915912641548009522/1032732229899649045/News_Website.jpg"
        srcSet="https://cdn.discordapp.com/attachments/869898142437503006/1079356736915374090/332066739_1268419794110486_6065554568358209215_n.png"
        sizes="(min-width: 800px)  (min-width: 400px) "

         />

    )
}
export default ResponsiveImage