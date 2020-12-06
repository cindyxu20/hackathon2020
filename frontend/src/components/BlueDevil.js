import React, { useState } from 'react'
import { Fade, Zoom } from "@material-ui/core"

export default function BlueDevil({position, animation}) {

    const imgStyles = {
        width: "300px",
    }

    const rootStyles = {
        position: "fixed",
        bottom: `${position.y}%`,
        right: `${100 - position.x}%`,
    }

    return (
        <div style={rootStyles} className="transition">
            <Fade in={true} timeout={3141}>
                <img id="devi" src="./img/mascot.gif" style={imgStyles} className={animation} />
            </Fade>
        </div>
    )
}
