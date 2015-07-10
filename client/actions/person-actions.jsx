import Reflux from 'reflux'
import request from 'superagent'
require('superagent-as-promised')(request)

var PersonActions = Reflux.createActions({
  loadOne: {asyncResult: true}
})

PersonActions.loadOne.listen(function (id) {
  PersonActions.loadOne.promise(
    request.get(`https://morning-falls-3769.herokuapp.com/api/people/${id}`)
  )
})

module.exports = PersonActions
