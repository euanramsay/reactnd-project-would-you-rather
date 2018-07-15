import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { setAuthedUser } from '../actions/authedUser';

class SignIn extends Component {

	handleLogin = (id) => {
		const { dispatch } = this.props;
		dispatch(setAuthedUser(id))
		this.props.history.push('/')
	}

	render(){
		return (
			<div >
				<h2>Login</h2>
				<Card>
					<CardHeader title='Please login to continue' />
					<List>
			          {this.props.userIds.map((id) => (
			          	  <div 
			          	  	key={id}
			          	  	onClick ={() => this.handleLogin(id)}
			          	  	>
				              <User id={id}/>
				              <Divider />
			              </div>
			          ))}
			        </List>
		        </Card>
	        </div>
        )
	}
}

function mapStateToProps({ users }){
	return {
		userIds: Object.keys(users)
	}
}

export default connect(mapStateToProps)(SignIn)