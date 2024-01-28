import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'

export default function Home() {
    const [countries, setCountries] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=8`)
            .then((responce) => {
                console.log(responce.data.data);
                setCountries(responce.data.data)
                setSortedData(responce.data.data)
            })
    }, [page])

    const handleAsc = () => {
        const sorted = [...sortedData].sort((a, b) => a.population - b.population)
        setCountries(sorted)
    }

    const handleDesc = () => {
        const sorted = [...sortedData].sort((a, b) => b.population - a.population)
        setCountries(sorted)

    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const search = sortedData.filter((item) => item.country.toLowerCase().includes(searchTerm) )
        setCountries(search)
    }

    return (
        <div>

            <div>
                <input type="text" placeholder='Search...' onChange={handleSearch} />
            </div>
            <div>
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc} >Desc</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} >
                {countries?.map((item) => <Card key={item.id} {...item} />)}
            </div>
            <div>
                <button disabled={page==1} onClick={() => setPage(page-1) } > Prev</button>
                <button>{page}</button>
                <button disabled={(countries.length) === 0} onClick={() => setPage(page+1) } >Next</button>
            </div>
        </div>
    )
}
