import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';


class User extends Component {
	render(){
		const { user } = this.props

		const {
      name, avatarURL
    } = user

		return (
				<ListItem >
	          <Avatar alt={name} src={avatarURL} />
	          <ListItemText primary={name} />
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