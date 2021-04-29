import React, {Component} from 'react'

class CoordinatesButton extends Component {
    
    handleClick = e => {
        e.persist()
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render() {
        return (
            <button
                onClick={this.handleClick}
            >Click to Log Coordinates</button>     
        )
    }
}

export default CoordinatesButton
