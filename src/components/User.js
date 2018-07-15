import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';


class User extends Component {
	render(){
		const { classes, user } = this.props;
		return (
			<ListItem >
	          <Avatar alt={user.name} src={user.avatarURL} />
	          <ListItemText primary={user.name} />
	        </ListItem>
        )
	}
}

function mapStateToProps({ users }, { id }){
	const user = users[id]
	return {
		user
	}
}
export default connect(mapStateToProps)(User)