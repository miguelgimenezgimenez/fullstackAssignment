var router = require('koa-router')();
var eventsController = require('./controllers/eventsController.js')

router
  .get('/events', eventsController.getEvents)
  .post('/events', eventsController.postEvent);

module.exports = router;
