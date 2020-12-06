import React from 'react'
import { Typography, Box } from "@material-ui/core"

export default function TopBar({ text }) {
    return (
        <Box className="fixed-top blackness" p={1} align="center">
            <Typography variant="h4">{text}</Typography>
        </Box>
    )
}
