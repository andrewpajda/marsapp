import React, { Component } from 'react';
import Result from './ResultComponent';

class ResultList extends Component {
  render() { 
    return (
      <div className='container'>
        <h2 className='result-title'>Results:</h2>
        <ul className='result-list'>
          {this.props.results.map(result => <Result result={result}/>)}
        </ul>
      </div>
    );
  }
}
 
export default ResultList;
