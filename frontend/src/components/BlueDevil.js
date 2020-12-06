import React, { useState } from 'react'
import { Fade, Zoom } from "@material-ui/core"

export default function BlueDevil() {

    const [ top, setTop ] = useState(50)
    const [ left, setLeft ] = useState(50)

    const imgStyles = {
        width: "300px",
    }

    const rootStyles = {
        position: "fixed",
        top: `${top}%`,
        left: `${left}%`,
    }

    return (
        <div style={rootStyles}>
            <Fade in={true} timeout={3141}>
                <img src="./img/mascot.gif" style={imgStyles} />
            </Fade>
        </div>
    )
}
