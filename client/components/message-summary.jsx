import React from 'react'

import EmailAddress from 'components/email-address.jsx'

const MessageSummary = React.createClass({
  renderCC() {
    if (!this.props.cc.length) return null

    const renderCCers = (recipient, idx) => {
      return (
        <li key={idx}>
          <EmailAddress email={recipient} />
        </li>
      )
    }
    return (
      <div>
        <dt>CC</dt>
        <dd>
          <ul>{this.props.cc.map(renderCCers)}</ul>
        </dd>
      </div>
    )
  },

  render() {
    return (
      <dl>
        <dt>Subject</dt>
        <dd>{this.props.subject}</dd>
        <dt>From</dt>
        <dd>
          <EmailAddress email={this.props.from} />
        </dd>
        <dt>To</dt>
        <dd>
          <EmailAddress email={this.props.to} />
        </dd>
        {this.renderCC()}
        <dt>Body</dt>
        <dd>{this.props.body}</dd>
      </dl>
    )
  }
})

module.exports = MessageSummary
