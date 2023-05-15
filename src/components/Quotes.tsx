import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuotes } from '../redux/quotes/quotesSlice'
import { RootState } from '../redux/store'

const Quotes = () => {
    const dispatch = useDispatch()
    const quotes = useSelector((state:RootState) => state.quotes.list)
    console.log(quotes)
    useEffect(() => {
        axios.get("https://dummyjson.com/quotes")
        .then(res =>{
            console.log(res.data.quotes)
            dispatch(setQuotes(res.data.quotes))
        })
    },[])
  return (
    <div>
    <h2 style={{textAlign: "center"}}>quotes management </h2>
    <div style={{ width: "80%", border: "1px solid #cdc9c9", margin: "20px auto" }}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "20px", rowGap: "20px", columnGap: "20px"}}>
           {quotes.map((item) =>{
            return(
                <div style={{border: "1px solid #cdc9c9", padding: "20px"}}>
                    <p>{item.id}</p>
                    <p>{item.author}</p>
                    <p>{item.quote}</p>
                </div>
            )
           })}
        </div>
    </div>
</div>
  )
}

export default Quotes