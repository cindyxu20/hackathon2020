import React from 'react'
import { Box, Button, Typography, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import SceneDialog from "./SceneDialog";

export default function DialogBar({ scene, goToNextScene, goToPreviousScene }) {
    return (
        <Box align="center" class="blackness fixed-bottom" >
            <Grid style={{ height: "180px" }} container spacing={3} alignItems="center" justify="center">
                <Grid item md={3}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={goToPreviousScene}
                    >
                        Previous Scene
                            </Button>
                </Grid>
                <Grid item md={6}>
                    <Carousel
                        timeout={200}
                        indicators={false}
                        navButtonsAlwaysVisible={false}
                    >
                        {scene.textContent.map((dialog) => (
                            <SceneDialog text={dialog.text} key={dialog.id} />
                        ))}
                    </Carousel>
                </Grid>

                <Grid item md={3}>
                    {scene.id !== 3 && (
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={goToNextScene}
                        >
                            Next Scene
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}
