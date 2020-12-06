import React, { useEffect } from 'react'
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

export default function DialogBar({
    scene,
    goToNextScene,
    goToPreviousScene,
    dialogIndex,
    handleNextDialog,
    handlePreviousDialog
}) {
    const classes = useStyles()

    return (
        <Box align="center" class="blackness fixed-bottom" >
            <Grid className={classes.root} container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12} md={2}>
                    <Button
                        color="secondary"
                        onClick={goToPreviousScene}
                    >
                        Previous
                    </Button>
                    <br />
                    <Typography variant="caption" color="textSecondary">{scene.prevSceneTitle}</Typography>

                </Grid>
                <Grid item xs={12} md={8}>
                    <Carousel
                        interval={8000}
                        timeout={150}
                        indicators={false}
                        navButtonsAlwaysVisible={true}
                        autoPlay={true}
                        next={handleNextDialog}
                        prev={handlePreviousDialog}
                        index={dialogIndex}
                    >
                        {scene.textContent.map((dialog) => (
                            <SceneDialog text={dialog.text} key={dialog.id} />
                        ))}
                    </Carousel>
                </Grid>

                <Grid item xs={12} md={2}>

                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={goToNextScene}
                    >
                        Next
                    </Button>

                    <br />
                    <Typography variant="caption" color="textSecondary">{scene.nextSceneTitle}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
