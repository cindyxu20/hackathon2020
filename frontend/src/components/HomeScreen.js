// react
import React from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { Box, Button, Typography } from "@material-ui/core"

export default function HomeScreen() {

    return (
        <div class = "overlay" style={{height: "100vh", background: "url(./img/front-page-entrance.jpg)", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            {/* title */}
            <Box bgcolor="primary">
                <Box align="center">
                    <Typography color="whiteness" variant="h3">Welcome to the Remote University Experience</Typography>
                    <Typography color="whiteness" variant="h6">Explore Duke while gaining insights, resources, and advice to help you succeed in a virtual learning environment!</Typography>
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
            </Box>
        </div>
    )
}
