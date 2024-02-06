import React from 'react'

export default function SetInterval() {

    const IntervalId = setInterval(() => {
        console.log("i am don")
    }, 1000);

    setTimeout(() => {
        clearInterval(IntervalId)
    }, 10000);

    // Create an interval and store its ID
    const intervalId = setInterval(() => {
        console.log("I am setInterval");
    }, 1000);

    // Clear the interval after 5 seconds
    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval using clearInterval
        console.log("Interval cleared");
    }, 5000);


    return (
        <div>

        </div>
    )
}


