import React from 'react'

import PersonActions from 'actions/person-actions.jsx'

const EmailAddress = React.createClass({
  handleClick(evt) {
    evt.preventDefault()
    PersonActions.loadOne(this.props.email)
  },

  render() {
    return (
      <a href="#" onClick={this.handleClick}>{this.props.email}</a>
    )
  }
})

module.exports = EmailAddress
