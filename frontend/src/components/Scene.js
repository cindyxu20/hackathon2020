import React from 'react'
import { Box, Button, Typography } from "@material-ui/core"
import Carousel from 'react-material-ui-carousel'
import SceneDialog from "./SceneDialog"
import { useHistory } from "react-router-dom"

    

export default function Scene({ scene, setSceneId }) {
    const history = useHistory()

    function goToNextScene() {
        setSceneId(scene.id + 1)
    }

    function goToPreviousScene() {

        // if in the first scene, go to home screen
        if (scene.id === 1) {
            history.push("/")
            return;
        }

        setSceneId(scene.id - 1)
    }

    return (
        <Box class = "background-fixer" style={{
            height: "100vh",
            background: `url(${scene.backgroundUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <Box style = {{position: "relative", top: "vh-300" }}><Typography variant="h4">{scene.name}</Typography>
            <Carousel timeout={200} indicators={false} navButtonsAlwaysVisible={true}>
                {
                    scene.textContent.map(dialog => (
                        <SceneDialog text={dialog.text} key={dialog.id} />
                    ))
                }
            </Carousel>
            <Button color="secondary" variant="contained" onClick={goToPreviousScene}>Previous Scene</Button>
            {scene.id !== 3 && <Button color="secondary" variant="contained" onClick={goToNextScene}>Next Scene</Button>}</Box>
            
        </Box>
    )
}
