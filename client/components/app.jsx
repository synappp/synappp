import React from 'react'
import Reflux from 'reflux'

import MessageSummary from 'components/message-summary.jsx'
import MessageStore from 'stores/message-store.jsx'
import MessageActions from 'actions/message-actions.jsx'

const App = React.createClass({
  mixins: [Reflux.ListenerMixin],

  componentDidMount() {
    this.listenTo(MessageStore, this.handleStoreChange)
  },

  getInitialState() {
    return {
      messages: MessageStore.getAll()
    }
  },

  handleStoreChange() {
    this.setState({
      messages: MessageStore.getAll()
    })
  },

  renderMessageSummary(message, idx) {
    return (
      <li key={idx}>
        <MessageSummary {...message} />
      </li>
    )
  },

  renderLoading() {
    return <li><i>Fetching your messages…</i></li>
  },

  render() {
    const messages = this.state.messages
    return (
      <div>
        <nav>
          <input placeholder="Search…" type="search" />
        </nav>
        <h1>Person/Company</h1>
        <ol>
          {messages.length ? this.state.messages.map(this.renderMessageSummary) : this.renderLoading()}
        </ol>
      </div>
    )
  }
})

module.exports = App
