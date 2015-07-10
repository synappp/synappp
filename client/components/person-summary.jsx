import React from 'react'

const PersonSummary = React.createClass({
  render() {
    return (
      <div>
        <div className="u-center">
          <img src={this.props.avatar} className="Avatar" />
        </div>
        <dl className="PersonDetails">
          <dt>Name</dt>
          <dd>{this.props.name}</dd>
          <dt>Email</dt>
          <dd>{this.props.email}</dd>
          <dt>Company</dt>
          <dd>{this.props.company.name}</dd>
        </dl>
      </div>
    )
  }
})

module.exports = PersonSummary
