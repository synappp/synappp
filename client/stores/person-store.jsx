import _ from 'lodash'
import Reflux from 'reflux'

import PersonActions from 'actions/person-actions.jsx'

const PersonStore = Reflux.createStore({
  listenables: [PersonActions],

  init() {
    this.person = null
  },

  onLoadOneCompleted(person) {
    this.person = person.body
    this.trigger()
  },

  get() {
    return this.person
  }

})

module.exports = PersonStore
