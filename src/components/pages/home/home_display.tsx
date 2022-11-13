import React, { useEffect, useState } from "react"

const HomeDisplay = ({articles}) => {  
    const [displayArticles, setDisplayArticles] = useState<number[]>([]) 
    useEffect(() => {
       let i = 0
       setTimeout(() => {
          if (articles && articles.length <= i) {
            (setDisplayArticles as unknown as any[]).push(articles[i])
             i++
          }
       }, 2000)
    }, [articles])
    debugger

   return(
        <div>
        </div>
    )
}
export default HomeDisplay