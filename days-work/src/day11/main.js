import React, { useState } from 'react'


const Main = () => {
    const [marginleft, changeLeft] = useState(30)
    const [margintop, changeTop] = useState(30)

    const ChangePosition = () => {
        let pos = Math.floor((Math.random() * 600) + 1);
        changeLeft(pos)
        changeTop(pos + 10)
        console.log(pos)
    }

    return (
        <>
            <div className="blueDiv" style={{
                width: "350px", height: "50px", backgroundColor: "blue",
                textAlign: "center", lineHeight: "50px", marginLeft: marginleft + "px", marginTop: margintop + "px"
               
            }}  onMouseEnter={ChangePosition}>
                <h1>30 days of react</h1>
            </div>
        </>
    )
}
export default Main