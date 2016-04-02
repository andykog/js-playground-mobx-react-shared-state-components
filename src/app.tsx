import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class Model {
  @observable count = 0
}

@observer
class MyComponent extends React.Component<{model: Model}, {}> {

  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <h1>Count: {this.props.model.count}</h1>
        <button onClick={() => this.props.model.count++}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent model={new Model()} />,
  document.getElementById('root')
);
