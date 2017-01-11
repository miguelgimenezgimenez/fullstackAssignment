import React, { Component } from 'react'
import { Card } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

class NewEventForm extends Component {
  state = {
    name: "",
    venue: "",
    date: ""
  }

  submit() {
    const {name, venue, date} = this.state;
    const data = {name, venue, date}
    this.props.onCreate(data)
  }

  // ======================================================
  // RENDERING
  // ======================================================

  renderSubmitButton() {
    if(this.props.loading){
      return <CircularProgress />
    }else{
      return <RaisedButton
        label="Create Event"
        primary
        onTouchTap={() => this.submit()} />
    }
  }

  render () {
    return <Card style={{padding: 20}}>
      <h1>New event</h1>
      <TextField
        floatingLabelText="Name"
        onChange={(event, name) => this.setState({name})}
      />
      <TextField
        floatingLabelText="Venue"
        onChange={(event, venue) => this.setState({venue})}
      />
      <DatePicker hintText="Date"
        onChange={(event, date) => this.setState({date})}/>
      {this.renderSubmitButton()}
    </Card>


  }
}

NewEventForm.propTypes = {
  onCreate: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool
}

export default NewEventForm
