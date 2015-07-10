import React from 'react'

const PersonSummary = React.createClass({
  renderCompany() {
    if (!this.props.company) return null
    return (
      <div>
        <dt>Company</dt>
        <dd>{this.props.company.name}</dd>
      </div>
    )
  },

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
          {this.renderCompany()}
        </dl>
      </div>
    )
  }
})

module.exports = PersonSummary
