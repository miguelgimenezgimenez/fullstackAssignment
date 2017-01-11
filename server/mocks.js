#!/usr/local/bin/node

var db = require('./db.js')
var Event = require('./models/event.js')

Event.create({
  title: "Event 1",
  date: Date.now(),
  venue: "Venue 1"
})

Event.create({
  title: "Event 2",
  date: Date.now(),
  venue: "Venue 2"
})

Event.create({
  title: "Event 3",
  date: Date.now(),
  venue: "Venue 3"
})
