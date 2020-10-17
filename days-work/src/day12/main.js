import React, { Component } from 'react'

class Main extends Component {
    //declaring state initial values
    state = {
        firstName: '',
        lastName: '',
        country: '',
        title: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        console.log(this.state)
    }
    render() {
        const { firstName, lastName, title, country } = this.state
        return (
            <div className='Main'>
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' placeholder="First Name"
                            name='firstName' value={firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type='text'
                            name='lastName' placeholder='Last Name'
                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='country'
                            placeholder='Country'
                            value={country}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Main