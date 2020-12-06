import React from 'react'
import { Typography, Box } from "@material-ui/core"

export default function Dialog({ text }) {
    return (
        <Box px={8}>
            <Typography style={{minHeight: "70px"}}>{text}</Typography>
        </Box>
    )
}
