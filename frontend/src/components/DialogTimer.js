import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@material-ui/core"

export default function DialogTimer() {
    const [percent, setPercent] = useState(0)

    // move timer foreward one tick
    function tickPercent() {
        setPercent(percent => {
            if (percent < 99) {
                return percent + 1
            } else {
                //never reach 100% lol
                return percent + ((100 - percent) / 2)
            }
        })
    }

    // start ticking
    useEffect(() => {
        let tick = setInterval(tickPercent, 80);
        return () => clearInterval(tick)
    }, [])

    return <CircularProgress size={20} variant="determinate" value={percent} />
}
