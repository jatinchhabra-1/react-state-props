import React, { Component } from 'react'
import SecondComponent from './Second'
import ThirdComponent from './Third';

export default class FirstComponent extends Component {
    constructor(props) {
        super(props);

        this.inputRef1 = React.createRef();
        this.inputRef2 = React.createRef();

        this.state = {
            count1: 0,
            count2: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('First Component Created');
    }

    componentDidUpdate() {
        console.log('First Component Updated');
    }

    handleClick(ref) {
        let counter, val;
        if(ref === 'ref1') {
            counter = 'count1';
            val = this.inputRef1.current.value;
        } else {
            counter = 'count2';
            val = this.inputRef2.current.value;
        } 
        this.setState(_ => {
            return {
                ...this.setState,
                [counter]: val
            }
        }, () => 'First Component State Updated');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Inside getSnapshot of First Component', prevProps, prevState);
        return null;
    }

    render() {
        console.log('First Component Will be rendered');
        return (
            <div>
                <h4>Change Second Component Prop:</h4>
                <input type = "text" ref = {this.inputRef1}></input>
                <button onClick={() => this.handleClick('ref1')}>Submit</button> 
                <h4>Change Third Component Prop:</h4>
                <input type = "text" ref = {this.inputRef2}></input>
                <button onClick={() => this.handleClick('ref2')}>Submit</button> 
                <br/><br/>
                <SecondComponent count={this.state.count1}></SecondComponent>
                <ThirdComponent count={this.state.count2}></ThirdComponent>
            </div>
        )
    }
}
