import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import Panel from '../components/Panel/Panel';
import * as pageActions from '../actions/PageActions';

class App extends Component {
    render() {
        const {user, page} = this.props;
        const {getPhotos} = this.props.pageActions;
        return <div>
            {/*<User name={user.name}/>*/}
            {/*<Page year={page.year} photos={page.photos} getPhotos={getPhotos} fetching={page.fetching}/>*/}
            <Panel />
        </div>
    }
}

const mapStateToProps = state => ({
    user: state.user,
    page: state.page
});

const mapDispatchProps = dispatch => ({
    pageActions: bindActionCreators(pageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(App);