import React from 'react'

const MessageSummary = React.createClass({
  renderCC() {
    if (!this.props.cc.length) return null

    const renderCCers = (recipient, idx) => {
      return <li key={idx}>{recipient}</li>
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
        <dt>From</dt>
        <dd>{this.props.from}</dd>
        <dt>Subject</dt>
        <dd>{this.props.subject}</dd>
        <dt>To</dt>
        <dd>{this.props.to}</dd>
        {this.renderCC()}
        <dt>Body</dt>
        <dd>{this.props.body}</dd>
      </dl>
    )
  }
})

module.exports = MessageSummary
