import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsersRequest } from '../../redux/actions/user';

class UserList extends Component {
    componentDidMount() {
        // only fetch the data if there is no data
        // if (!this.props.users) 
        this.props.fetchUsers();
    }
    renderUserList(users) {
        return users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))
    }
    render() {
        return (
            <div>
                UserList1
                <ul>{this.renderUserList(this.props.users)}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsersRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)

export function getUserData(store) {
    console.log('getUserData');
    return store.dispatch(fetchUsersRequest())
}