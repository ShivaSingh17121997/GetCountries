import React from 'react'

export default function Card({ id, country, population, Rank }) {
    return (
        <div style={{ border: "1px solid black", padding: "20px ",borderRadius:"10px", margin: "60px",}} >
            <p>Id: {id}</p>
            <h3> {country}</h3>
            <h6>Rank: {Rank}</h6>
            <p>Population : {population}</p>

        </div>
    )
}
