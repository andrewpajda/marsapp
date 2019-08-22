import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Form from './components/form/FormComponent';
import Divider from './components/shared/DividerComponent';
import ResultList from './components/results/ResultListComponent';
import axios from 'axios';
import SplashScreen from './components/SplashScreenComponent';
import './sass/app.scss';

class App extends Component {
  state = {
    ready: false, 
    rovers: [],
    cameras: [
      {
        abbr: 'FHAZ',
        name: 'Front Hazard Avoidance Camera'
      },
      {
        abbr: 'RHAZ',
        name: 'Rear Hazard Avoidance Camera'
      },
      {
        abbr: 'MAST',
        name: 'Mast Camera'
      },
      {
        abbr: 'CHEMCAM',
        name: 'Chemistry and Camera Complex'
      },
      {
        abbr: 'MAHLI',
        name: 'Mars Hand Lens Imager'
      },
      {
        abbr: 'MARDI',
        name: 'Mars Descent Imager'
      },
      {
        abbr: 'NAVCAM',
        name: 'Navigation Camera'
      },
      {
        abbr: 'PANCAM',
        name: 'Panoramic Camera'
      },
      {
        abbr: 'MINITES',
        name: 'Miniature Thermal Emission Spectometer (Mini-Tes)'
      }
    ],
    results: [],
    renderResults: false,
  }
  render() {
    if(this.state.ready) {
      if(this.state.renderResults) {
        return (
          <React.Fragment>
            <Header />
            <Form rovers={this.state.rovers} cameras={this.state.cameras} handleSubmit={() => this.handleSubmit}/>
            <Divider />
            <ResultList results={this.state.results}/>
          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <Header />
            <Form rovers={this.state.rovers} cameras={this.state.cameras} handleSubmit={() => this.handleSubmit}/>
            <Divider />
          </React.Fragment>
        ) 
      }
    } else {
      return (
        <SplashScreen />
      )
    }
  }
  
  componentDidMount() {
    this.props.rovers.map((rover) => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=I2tK77U4tFT03b0JW1q8zgPzVe4AAGeew4lK7cWb`)
      .then((res) => {
        this.setState({
          rovers: [...this.state.rovers, res.data.photo_manifest]
        })
        if (this.state.rovers.length === this.props.rovers.length) {
          this.setState({
            ready: true
          })
        }
      })
    })
  }

  handleSubmit = (roverInput, dateInput, cameraInput) => {
    const camera = cameraInput === 'All' ? '' : `&camera=${cameraInput}` // if cameraInput === all do not add camera to url!
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverInput}/photos?earth_date=${dateInput}${camera}&api_key=I2tK77U4tFT03b0JW1q8zgPzVe4AAGeew4lK7cWb `
    axios.get(url)
    .then(res => {
      this.setState({
        results: res.data.photos,
        renderResults: true,
      })
    })
  }
}
 
export default App;
