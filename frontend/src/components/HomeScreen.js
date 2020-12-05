// react
import React from 'react'
import { Link } from 'react-router-dom'

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
                    component={Link}
                    to={"/scene"}
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
        </div>
    )
}
