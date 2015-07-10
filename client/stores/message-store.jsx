import _ from 'lodash'
import Reflux from 'reflux'

import MessageActions from 'actions/message-actions.jsx'

const MessageStore = Reflux.createStore({
  listenables: [MessageActions],

  init() {
    this.messages = MessageActions.load()
  },

  getInitialState() {
    return this.messages
  },

  onLoadCompleted(messages) {
    messages = messages.body
    messages.forEach((message) => this.messages[message.id] = message)
    this.trigger(this.messages)
  },

  getAll() {
    return _.values(this.messages)
  }

})

module.exports = MessageStore
