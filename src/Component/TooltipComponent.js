import React, { Component } from 'react'
import "./TooltipComponent.css"
export default class TooltipComponent extends Component {
    render() {
        return (
            <>
                <div className="mainDiv">
                    <div class="tooltip">Hover over me
                    </div>
                    <span class="tooltiptext">{this.props.TooltipText}</span>
                </div>
            </>
        )
    }
}
