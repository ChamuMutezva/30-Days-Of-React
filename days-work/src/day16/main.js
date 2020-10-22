import React from 'react'
//import { BrowserRouter, Route, NavLink, Switch, Redirect, Prompt, withRouter,} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home'


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

class Main extends React.Component {
    render() {
        return (
            <div>
                hello
                <Router>
                    <div className='App'>
                        <Route path='./home' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/challenges' component={Challenges} />
                    </div>
                </Router>
            </div>
        )
    }
}
export default Main