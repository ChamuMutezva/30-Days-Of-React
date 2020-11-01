import React, { Component } from 'react'
import axios from 'axios'

const Cat = ({cat: {name, life_span, weight:{imperial, metric} }}) => {
    return(
        <>
         <h5>{name},  <span>Life span: {life_span}</span>, <strong>Weight: {metric}</strong></h5>
        </>
    )
}

class Cats extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        this.fetchCatsData()
    }
    fetchCatsData = async () => {
        const url = "https://api.thecatapi.com/v1/breeds"
        try {
            const response = await axios.get(url);
            const data = await response.data;

            this.setState({
                data,
            })

        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <>
                <h1>30 days of React</h1>
                <h2>Cats Paradise</h2>
                <h3>There are {this.state.data.length} cats breeds</h3>
                {this.state.data.map((cat) => (
                    <Cat cat={cat} key={cat.id}/>
                ))}
            </>
        )
    }
}
export default Cats