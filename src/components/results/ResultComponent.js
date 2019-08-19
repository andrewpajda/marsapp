import React, { Component } from 'react';
import Button from '../shared/ButtonComponent';

class Result extends Component {
  state = {

  }
  render() { 
    return (
      <div>
        <img src={this.props.result.img_src} alt='picture taken by martian rover'/>>
        <h4>Photo ID: {this.props.result.id}</h4>
        <p>Taken on {this.props.result.earth_date}, {this.props.result.sol} martian Sol</p>
        <Button onClick={this.props.result.img_src} text={'View full image'}/>
      </div>
    );
  }
}
 
export default Result
