import React from 'react';
import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className ='Navbar'>
                <div className ='container-fluid text-light'>
                <h4>XRP Ledger Visualization</h4>
                </div>
            </div>
        )
}
}

export default Navbar;
