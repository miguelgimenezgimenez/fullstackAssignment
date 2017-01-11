import React from 'react'
import { connect } from 'react-redux'

import * as Actions from '../actions'

import Event from '../components/Event'
import NewEventForm from '../components/NewEventForm'

const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 40,
  display: 'flex'
}


class Dashboard extends React.Component {
  componentWillMount() {
    this.props.getEvents()
  }

  createEvent(data) {
    const { name, venue, date } = data
    this.props.createEvent(name, venue, date)
  }

  // ======================================================
  // RENDERING
  // ======================================================

  renderEvents () {
    return this.props.events.map(event =>
      <Event
        key={event._id}
        event={event} />
    )
  }

  render() {
    return <div style={containerStyle}>
      <div style={{flex:0.6}}>
        {this.renderEvents()}
      </div>
      <div style={{flex:0.4, marginLeft: 20}}>
        <NewEventForm
          onCreate={(data) => this.createEvent(data)}
          loading={this.props.loading}/>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    getEvents: () => dispatch(Actions.getEvents()),
    createEvent: (title, venue, date) => dispatch(Actions.createEvent(title, venue, date))
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
