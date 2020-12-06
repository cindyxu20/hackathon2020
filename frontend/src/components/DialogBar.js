import React from 'react'
import { Box, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import Carousel from "react-material-ui-carousel";
import SceneDialog from "./SceneDialog";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "300px",
        [theme.breakpoints.up('md')]: {
            height: "180px"
        }
    }
}))

export default function DialogBar({ scene, goToNextScene, goToPreviousScene, dialogIndex, handleDialogChange }) {
    const classes = useStyles()

    return (
        <Box align="center" class="blackness fixed-bottom" >
            <Grid className={classes.root} container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12} md={2}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={goToPreviousScene}
                    >
                        Previous
                    </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Carousel
                        interval={8000}
                        indicators={false}
                        navButtonsAlwaysVisible={true}
                        autoPlay={true}
                        onChange={handleDialogChange}
                        index={dialogIndex}
                    >
                        {scene.textContent.map((dialog) => (
                            <SceneDialog text={dialog.text} key={dialog.id} />
                        ))}
                    </Carousel>
                </Grid>

                <Grid item xs={12} md={2}>
                    {scene.id !== 8 && (
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={goToNextScene}
                        >
                            Next
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}
