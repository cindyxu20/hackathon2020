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
        <div style = {{height: "100vh", background:"url(./img/front-page-entrance.jpg)"}}>
            {/* title */}
           
            <Box align="center" mt={10}>
                <Typography  color="whiteness" variant = "h2">Welcome to the Remote University Experience</Typography>
                <Typography  color="whiteness" variant = "h6">Insights about studying in COVID times at Duke, as well as information applicable to students from other universities.</Typography>
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
