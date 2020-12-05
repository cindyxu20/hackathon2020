// react
import React from 'react'

// material-ui
import { Box, Button, Typography } from "@material-ui/core"

// duke remote experience
import scenes from "../../../public/data/scenes.json"

import Scene from "./Scene"

export default function HomeScreen() {

    return (
        <div>
            {/* title */}
            <Box align="center" mt={10}>
                <Typography variant = "h2">Remote Duke Experience</Typography>
            </Box>

            {/* button */}
            <Box align="center" p={3}>
                <Button
                    variant="contained"
                    color="primary"
                >
                    start
                </Button>
            </Box>

            <Box align="center" p={3}>
                <Button
                    variant="contained"
                    color="secondary"
                >
                    credits
                </Button>
            </Box>

            <Box align="center">
                <Typography>Scenes: </Typography>
                {scenes.map(scene => <Scene scene={scene} />)}
            </Box>
        </div>
    )
}
