import React, { Component } from 'react'

export default class DelayedButton extends React.Component {

    handleClick = (e) => {
        e.persist()
        setTimeout(() => {
        this.props.onDelayedClick(e)
        }, this.props.delay);
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                This is a button.
            </button>
        )
    }
}