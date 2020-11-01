import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
    <div>
        <h1>30 Days Of React Challenge</h1>
    </div>
)
const NotFound = (props) => <h1>The page your looking for not found</h1>

class Navlinkeg extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/challenges'>Challenges</NavLink>
                        </li>
                    </ul>

                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/challenges' component={Challenges} />
                        <Route exact path='/' component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navlinkeg