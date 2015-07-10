import Reflux from 'reflux'
import request from 'superagent'
require('superagent-as-promised')(request)

var MessageActions = Reflux.createActions({
  load: {asyncResult: true}
})

MessageActions.load.listen(function () {
  MessageActions.load.promise(
    request.get('https://morning-falls-3769.herokuapp.com/api/messages')
  )
})

module.exports = MessageActions
