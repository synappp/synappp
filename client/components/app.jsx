import React from 'react'
import Reflux from 'reflux'

import MessageStore from 'stores/message-store.jsx'
import MessageSummary from 'components/message-summary.jsx'
import PersonStore from 'stores/person-store.jsx'
import PersonSummary from 'components/person-summary.jsx'

const App = React.createClass({
  mixins: [Reflux.ListenerMixin],

  componentDidMount() {
    this.listenTo(MessageStore, this.handleStoreChange)
    this.listenTo(PersonStore, this.handleStoreChange)
  },

  getInitialState() {
    return {
      messages: MessageStore.getAll(),
      person: PersonStore.get()
    }
  },

  handleStoreChange() {
    this.setState({
      messages: MessageStore.getAll(),
      person: PersonStore.get()
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
    return <li><i>Fetching messages…</i></li>
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
          <div className="u-mobile">
            <input placeholder="Search…" type="search" className="SearchBox" />
          </div>
          {this.state.person && this.state.person.name ? this.renderPersonSummary(this.state.person) : ''}
        </header>
        <main className="SearchResults">
          <div className="u-desktop">
            <div className="Search">
              <input placeholder="Search…" type="search" className="SearchBox" />
            </div>
          </div>
          <ol>
            {messages.length ? this.state.messages.map(this.renderMessageSummary) : this.renderLoading()}
          </ol>
        </main>
      </div>
    )
  }
})

module.exports = App
