import React, { Component } from 'react';
import Result from './ResultComponent';

class ResultList extends Component {
  render() { 
    return (
      <div>
        <h2>Results:</h2>
        <ul>
          {this.props.results.map(result => <li><Result result={result} /></li>)}
        </ul>
      </div>
    );
  }
}
 
export default ResultList;
