import React, {Component} from 'react';
import Accounts from './accounts';
import {Link} from 'react-router-dom';


class Header extends Component {
  onBinCLick(event) {
    event.preventDefault();
    const browserHistory = this.props.history;
    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Accounts/></li>
          <li><a href="#" onClick={this.onBinCLick.bind(this)}>Create Bin</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header;