import React from 'react'
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const isPrime = num => {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            count++;
            return false;
        }
    }

    if (count === 0) {
        console.log("red")
        return true
    }

}
const isEven = (num) => {
    if (num === 0 || num % 2 === 0) {
        return "green"
    }
}
const isOne = (num) => {
    if (num === 1) {
        return "yellow"
    }
}
const numList = nums.map(num => {
    const background = isOne(num) ? "yellow" : isEven(num) ? "green" : isPrime(num) ? "red" : "yellow"


    return <div key={num} style={{
        width: "140px", height: "140px", borderBottom: "2px solid white",
        textAlign: "center", lineHeight: "140px", backgroundColor: background
    }}>{num}</div>
})
const NumberGenerator = () => {

    return (
        <>
            <h1 style={{ textAlign: "center" }}>30 Days Of React</h1>
            <h2 style={{ textAlign: "center" }}>Number generator</h2>
            <div className="numbers" style={{
                display: "flex", flexWrap: "wrap", width: "80%",
                margin: "auto"
            }}>
                {numList}
            </div>
        </>
    )
}
export default NumberGenerator