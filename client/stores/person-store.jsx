import _ from 'lodash'
import Reflux from 'reflux'

import PersonActions from 'actions/person-actions.jsx'

const PersonStore = Reflux.createStore({
  listenables: [PersonActions],

  init() {
    this.people = PersonActions.loadOne('white_jackson@ziemann.com')
  },

  getInitialState() {
    return this.people
  },

  onLoadOneCompleted(person) {
    person = person.body
    this.people[person.email] = person
    this.trigger(this.people)
  },

  get(email) {
    return this.people[email]
  },

  getAll() {
    return _.values(this.people)
  }

})

module.exports = PersonStore
