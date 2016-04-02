import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export class AsyncButton extends React.Component<void, {}> {
    @observable
    private isLoading: boolean = false;

    constructor() {
        super();
        console.log('constructor')
    }

    render () {
        console.log('render', this.isLoading);

        return (
            <button
                onClick={() => this.isLoading = !this.isLoading}>
                {this.isLoading ? <span>Loading</span> : <span>Click me</span>}
            </button>
        );
    }
}

ReactDOM.render(
    <div>
        <AsyncButton/>
        <AsyncButton/>
    </div>,
    document.getElementById('root'));
