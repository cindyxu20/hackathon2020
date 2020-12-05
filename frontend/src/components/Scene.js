import React from 'react'
import { Box, Button, Typography } from "@material-ui/core"
import Carousel from 'react-material-ui-carousel'
import SceneDialog from "./SceneDialog"

export default function Scene({ scene }) {
    return (
        <Box mb={5}>
            <Typography variant="h6">{scene.name}</Typography>
            <img src={scene.backgroundUrl} width="60px" />
            <Carousel>
                {
                    scene.textContent.map(dialog => <Typography>{dialog.text}</Typography>)
                }
            </Carousel>
        </Box>
    )
}
