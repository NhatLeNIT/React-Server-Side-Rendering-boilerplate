import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                Hello world!
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/users">User</Link>
                    <Link to="/users/1">User 1</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App;