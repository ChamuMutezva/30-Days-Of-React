import React from 'react'

const SubscribeForm = () => {
    const styles = {
        width:"100px" , 
        padding: "15px" 
    }
    return(
        <>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email to receive news and updates</p>
            <form style={{display: "flex", flexWrap: "wrap" , justifyContent: "center"}}>
                <input type="text" placeholder="first name" style={styles} />
                <input type="text" placeholder="last name" style={styles} />
                <input type="email" placeholder="email" style={styles}/>
                <input type="submit" value="Subscribe" style={styles}/>
            </form>
        </>
    )
}
export default SubscribeForm