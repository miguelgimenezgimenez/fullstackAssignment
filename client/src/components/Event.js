import React from 'react'
import { Card } from 'material-ui/Card'

const eventStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
}

export default class Event extends React.Component {
  render() {
    return (
      <Card style={eventStyle}>
        <h1>{this.props.event.title}</h1>
        <h2>{this.props.event.venue}</h2>
      </Card>
    )
  }
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired
}
