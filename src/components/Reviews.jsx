import React, {useState} from 'react'

const Reviews = () => {
    const [goodCount, setGood] = useState(0);
    const [neutralCount, setNeutral] = useState(0);
    const [badCount, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    function handleSetGood () {
        setGood(goodCount + 1)
    }
    function handleSetNeutral () {
        setNeutral(neutralCount + 1)
    }
    function handleSetBad () {
        setBad(badCount + 1)
    }
    return (
        <div>
            <button onClick={handleSetGood}>Good</button>
            <button onClick={handleSetNeutral}>Neutral</button>
            <button onClick={handleSetBad}>Bad</button>
            <div>{goodCount}</div>
            <div>{neutralCount}</div>
            <div>{badCount}</div>
            <div></div>
        </div>
    )
}

export default Reviews;