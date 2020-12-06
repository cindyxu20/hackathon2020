// react
import React from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { Box, Button, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid";

export default function HomeScreen() {

    return (
        <div class = "overlay" style={{height: "100vh", background: "url(./img/front-page-entrance.jpg)", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            {/* title */}
            <Grid container style={{height: "100vh"}} direction="row" justify="center" alignItems="center">
                <Grid item>
                <Box   bgcolor="primary">
                <Box align="center">
                    <Typography color="whiteness" variant="h4">Welcome to the Remote University Experience</Typography>
                    <Typography color="whiteness" variant="h6">Insights about studying in COVID times at Duke, as well as information applicable to students from other universities.</Typography>
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
                </Grid>
            
            </Grid>
        </div>
    )
}
