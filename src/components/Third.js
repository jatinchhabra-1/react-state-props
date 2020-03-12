import React, { Component } from 'react'

export default class ThirdComponent extends Component {

    componentDidMount() {
        console.log('Third Component Created');
    }

    componentDidUpdate() {
        console.log('Third Component Updated');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Inside getSnapshot of Second Component', prevProps, prevState);
        return null;
    }

    render() {
        console.log('Third Component Will be rendered');
        return (
            <div>
                <span>Third Component Number in input box is: {this.props.count}</span> 
            </div>
        )
    }
}
