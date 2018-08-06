import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        const { name } = this.props;
        return <div className="user ib">
            <p>Привет, {name}!</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;