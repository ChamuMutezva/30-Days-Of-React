import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

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
/*
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
<Route path='/contact' component={Contact} />
<Route path='/challenges' component={Challenges} />
*/
class Main3 extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/challenges">Challenges</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/challenges">
                            <Challenges />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </div>
            </Router>
        )
    }
}
export default Main3
