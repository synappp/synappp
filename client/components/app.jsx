import React from 'react'
import Reflux from 'reflux'

import MessageStore from 'stores/message-store.jsx'
import MessageSummary from 'components/message-summary.jsx'
import PersonStore from 'stores/person-store.jsx'
import PersonSummary from 'components/person-summary.jsx'

var email = 'white_jackson@ziemann.com'

const App = React.createClass({
  mixins: [Reflux.ListenerMixin],

  componentDidMount() {
    this.listenTo(MessageStore, this.handleStoreChange)
    this.listenTo(PersonStore, this.handleStoreChange)
  },

  getInitialState() {
    return {
      messages: MessageStore.getAll(),
      selectedPerson: PersonStore.get(email)
    }
  },

  handleStoreChange() {
    this.setState({
      messages: MessageStore.getAll(),
      selectedPerson: PersonStore.get(email)
    })
  },

  renderMessageSummary(message, idx) {
    return (
      <li className="MessageSummary" key={idx}>
        <MessageSummary {...message} />
      </li>
    )
  },

  renderLoading() {
    return <li><i>Fetching your messages…</i></li>
  },

  renderPersonSummary(person) {
    return (
      <div className="PersonSummary">
        <PersonSummary {...person} />
      </div>
    )
  },

  render() {
    const messages = this.state.messages
    return (
      <div>
        <header className="Header">
          <div>
            <input placeholder="Search…" type="search" className="SearchBox" />
          </div>
          {this.state.selectedPerson ? this.renderPersonSummary(this.state.selectedPerson) : 'Select a person…'}
        </header>
        <main className="SearchResults">
          <ol>
            {messages.length ? this.state.messages.map(this.renderMessageSummary) : this.renderLoading()}
          </ol>
        </main>
      </div>
    )
  }
})

module.exports = App
