import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import SceneDialog from "./SceneDialog";
import { useHistory } from "react-router-dom";
// import { BlueDevil } from "./BlueDevil"
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

export default function Scene({ scene, setSceneId }) {
    const history = useHistory();

    function goToNextScene() {
        setSceneId(scene.id + 1);
    }

    function goToPreviousScene() {
        // if in the first scene, go to home screen
        if (scene.id === 1) {
            history.push("/");
            return;
        }

        setSceneId(scene.id - 1);
    }

    return (
        <Box
            class=" background-fixer"
            style={{
                height: "100vh",
                background: `url(${scene.backgroundUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >\
        
            <Box align="center" class="blackness fixed-bottom">
                <Box>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <br></br>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={goToPreviousScene}
                            >
                                Previous Scene
                            </Button>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h4">{scene.name}</Typography>
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

                        <Grid item md={4}>
                            <br></br>
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
            </Box>

        </Box>
    );
}
