import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DialogBar from "./DialogBar"
import BlueDevil from "./BlueDevil"
import TopBar from "./TopBar"

export default function Scene({ scene, setSceneId, dialogIndex, setDialogIndex }) {
    const history = useHistory();

    const [deviAnimation, setDeviAnimation] = useState("bounce-subtle")

    function bigBounce() {
        setDeviAnimation("bounce")
        setTimeout(() => setDeviAnimation("bounce-subtle"), 2000)
    }

    function handleDialogChange(e) {

        const lastDialogIndex = scene.textContent.length - 1

        if (dialogIndex === lastDialogIndex && e === 0) {
            goToNextScene()
        } else if (dialogIndex === 0 && e === lastDialogIndex ) {
            goToPreviousScene()
        } else {
            setDialogIndex(e)
        }
    }

    function goToNextScene() {
        bigBounce()
        setDialogIndex(0)
        setSceneId(scene.id + 1);
    }

    function goToPreviousScene() {
        // if in the first scene, go to home screen
        if (scene.id === 1) history.push("/");

        bigBounce()
        setDialogIndex(0)
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
        >
            <TopBar text={scene.name} />
            <BlueDevil position={scene.deviPos} animation={deviAnimation} />
            <DialogBar
                scene={scene}
                goToNextScene={goToNextScene}
                goToPreviousScene={goToPreviousScene}
                dialogIndex={dialogIndex}
                setDialogIndex={setDialogIndex}
                handleDialogChange={handleDialogChange}
            />
        </Box>
    );
}
