import React, { Component } from 'react';
import Dropdown from './DropdownComponent';
import Date from './DateComponent';
import Button from '../shared/ButtonComponent';

class Form extends Component {
  state = {
    roverInput: this.props.rovers[0],
    dateInput: this.props.rovers[0].max_date,
    cameraInput: 'All',
    minDate: this.props.rovers[0].landing_date,
    maxDate: this.props.rovers[0].max_date,
    cameras: [],
    
  }
  render() {
    return (
      <React.Fragment>
        <Dropdown options={this.props.rovers} onChange={this.handleRoverSelection}/>
        <Date minDate={this.state.minDate} maxDate={this.state.maxDate} value={this.state.dateInput } onChange={this.handleDateSelection}/>
        <Dropdown options={this.state.cameras} onChange={this.handleCameraSelection}/>
        <Button text={'Search'} onClick={() => this.state.handleSubmit(this.state.roverInput.name, this.state.dateInput, this.state.cameraInput)}/>
      </React.Fragment>
    );
  }
  componentDidMount () {
    this.getCameras();
    this.setState({
      handleSubmit: this.props.handleSubmit(this.state.roverInput.name, this.state.dateInput, this.state.cameraInput),
    })
  }

  handleRoverSelection = (e) => {
    const selectedRover = this.props.rovers.filter((rover) => rover.name === e.target.value)[0];
    this.setState({
      roverInput: selectedRover,
      dateInput: selectedRover.max_date,
      minDate: selectedRover.landing_date,
      maxDate: selectedRover.max_date,
    }, () => this.getCameras())
  }

  handleDateSelection = (e) => {
    const selectedDate = e.target.value;
    this.setState({
      dateInput: selectedDate,
    }, () => this.getCameras())
  }

  handleCameraSelection = (e) => {
    this.setState({
      cameraInput: e.target.value
    })
  }
  // to jest zaifowane bo SPIRIT jako jedyny z api nie dostaje pola o nazwie earth_date tylko sol (jest starszy niz pozostale rovery)
  getCameras() {
    if(this.state.dateInput !== '' && this.state.roverInput !== '') {
      if(this.state.roverInput.name !== 'Spirit') {
        const roverDate = this.state.roverInput.photos.filter(date => date.earth_date === this.state.dateInput);
        const availableCameras = roverDate[0].cameras;
        this.setState({
          cameras: [{abbr: 'ALL', name: 'All'}, ...this.props.cameras.filter((camera) => availableCameras.includes(camera.abbr))],
        })
      } else {
        this.setState({
          cameras: [{abbr: 'ALL', name: 'All'}],
        })
      }
    } 
  }
}
 
export default Form;