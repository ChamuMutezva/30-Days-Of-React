import React from 'react'

const SubscribeForm = () => {
    return(
        <>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email to receive news and updates</p>
            <form style={{display: "flex", flexWrap: "wrap" , justifyContent: "center"}}>
                <input type="text" placeholder="first name" style={{width:"100px" , padding: "15px" }} />
                <input type="text" placeholder="last name" style={{width:"100px" , padding: "15px" }} />
                <input type="email" placeholder="email" style={{width:"100px" , padding: "15px" }}/>
                <input type="submit" value="Subscribe" style={{width:"120px" , padding: "15px" }}/>
            </form>
        </>
    )
}
export default SubscribeForm