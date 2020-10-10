import React from 'react'
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        } else {
        return true
        }
    }   
   
}
const numList = nums.map(num => {
   // isPrime(num);
   // const background = isPrime(num) ? "red" : "green"
   const background = isPrime(num) ? "red" : num % 2 === 0 ? "green" : "yellow"
  // let background = "yellow"
 
 
return <div key={num} style={{width: "90px", height: "90px",
textAlign: "center", lineHeight: "90px", backgroundColor: background}}>{num}</div>})
const NumberGenerator = () => {

    return (
        <>
            <h1>Number generator</h1>
            <div className="numbers">
                {numList}
            </div>
        </>
    )
}
export default NumberGenerator