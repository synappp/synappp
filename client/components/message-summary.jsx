import React from 'react'

const MessageSummary = React.createClass({
  render() {
    return (
      <dl>
        <dt>From</dt>
        <dd>{this.props.from}</dd>
        <dt>To</dt>
        <dd>{this.props.to}</dd>
        <dt>Subject</dt>
        <dd>{this.props.subject}</dd>
        <dt>Body</dt>
        <dd>{this.props.body}</dd>
      </dl>
    )
  }
})

module.exports = MessageSummary
