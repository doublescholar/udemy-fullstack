import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from "./Payments";
class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return <li><a href="/api/logout">Logout null</a></li>
            case false:
                return <li><a href="/auth/google">Login</a></li>
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{margin: '0 10px'}}>Creds: {this.props.auth.credits}</li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                    ]
        }
    }
    render () {
        console.log(this.props);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? '/surveys': '/'}
                            className="left brand-logo">Emaily</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {auth }
}
export default connect(mapStateToProps)(Header);