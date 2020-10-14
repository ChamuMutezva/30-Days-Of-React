import React from 'react';
import Portfolio from './portfolio'

class Main extends React.Component {
    state = {
        count: 0,
    }
    render() {
        const count = this.state.count
        return (
            <div className="app">
                <h1>{count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Add One
                </button>{'  '}
                <button onClick={() => this.setState({count: this.state.count - 1})}>
                    Minus One
                </button>
                <Portfolio />
            </div>
        )
    }

}
export default Main