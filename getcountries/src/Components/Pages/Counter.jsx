import { useEffect, useState } from "react";

export default function Counter() {
    const [timer, setTimer] = useState(0);

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);
    
    useEffect(() => {
        if (timer === 0) {
            clearInterval(intervalId); // Stop the interval when timer reaches 0
        }
    }, [timer]); // Add timer as a dependency to the useEffect hook
    const handleInputChange = (e) => {
        setTimer(parseInt(e.target.value)); // Parse the input value to integer
    };

    return (
        <div className="App">
            <h1>Countdown</h1>
            <input
                value={timer}
                onChange={handleInputChange}
                type="number"
                placeholder="Enter number"
            />
            <h1>{timer}</h1>
        </div>
    );
}
