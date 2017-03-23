import React, { Component } from 'react';



class Friend extends React.Component {
  render () {
    return (
      <div>
        <li className="friend">
          <img className="profile-pic" src='http://placebear.com/50/50.jpg' />

          <div className="location">
            Location: {this.props.currentLocation.city}, {this.props.currentLocation.state}, { this.props.currentLocation.country }
          </div>

          <div className="status">
            Status: {this.props.status}
          </div>

          <div className="num-friends">
			       {this.props.friendCount}
		      </div>

        </li>

      </div>
    )
  }
}

export default Friend;
