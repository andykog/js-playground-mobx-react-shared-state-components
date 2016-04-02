import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class MyComponent extends Component<void, {}> {

  constructor() {
    super();
  }

  render () {
    return (
      <h1>Hello</h1>
    );
  }
}

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('root')
);
