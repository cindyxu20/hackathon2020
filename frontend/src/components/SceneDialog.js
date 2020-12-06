import React from 'react'
import { Typography, Box } from "@material-ui/core"
import marked from "marked";
import DialogTimer from "./DialogTimer"

export default function Dialog({ text }) {

    return (
        <Box p={3} px={8}>
            <Box align="right">
                <DialogTimer />
            </Box>
            <Typography style={{ maxWidth: "711px" }} align="center" dangerouslySetInnerHTML={{ __html: marked(text) }} />
        </Box>
    )
}
