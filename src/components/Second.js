import React, { Component } from 'react'

export default class SecondComponent extends Component {

    componentDidMount() {
        console.log('Second Component Created');
    }

    componentDidUpdate() {
        console.log('Second Component Updated');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Inside getSnapshot of Second Component', prevProps, prevState);
        return null;
    }

    render() {
        console.log('Second Component Will be rendered');
        return (
            <div>
                <span>Second Component Number in input box is: {this.props.count}</span> 
            </div>
        )
    }
}
