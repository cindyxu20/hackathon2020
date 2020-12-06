import React, { useState, Suspense } from "react";
import { Box, Fade } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const DialogBar = React.lazy(() => import("./DialogBar"))
import PlaySound from "./PlaySound"
import BlueDevil from "./BlueDevil"
import TopBar from "./TopBar"
import { getScene } from "../functions"

export default function Scene() {
    const history = useHistory();
    const [sceneId, setSceneId] = useState(0)
    const [dialogIndex, setDialogIndex] = useState(0)
    const [deviAnimation, setDeviAnimation] = useState("bounce-subtle")

    const scene = getScene(sceneId)

    let animationTimeOut

    function act(animationName) {
        clearTimeout(animationTimeOut)
        setDeviAnimation(animationName)
        animationTimeOut = setTimeout(() => setDeviAnimation("bounce-subtle"), 2000)
    }

    function handleNextDialog(next, active) {
        if (next === 0) {
            // if next dialog on last dialog
            goToNextScene()
        } else {
            act("shake")
        }
    }

    function handlePreviousDialog(previous, active) {
        if (active === 0) {
            // if previous dialog on first dialog
            goToPreviousScene()
        } else {
            act("shake")
        }
    }

    function goToNextScene() {
        if(scene.id === 11) location.href = "./credit";
        act("bounce")
        setDialogIndex(0)
        setSceneId(scene.id + 1);
    }

    function goToPreviousScene() {
        // if in the first scene, go to home screen
        if (scene.id === 0) history.push("/");

        act("tip")
        setDialogIndex(0)
        setSceneId(scene.id - 1);
    }

    return (
        <Fade timeout={4000} in={true}>
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
                {/* if sound url, play the sound */}
                <PlaySound url={scene.soundUrl} />

                <TopBar text={scene.name} />
                <BlueDevil position={scene.deviPos} animation={deviAnimation} />
                <Suspense fallback={<div />}>
                    <DialogBar
                        {...{
                            scene,
                            goToNextScene,
                            goToPreviousScene,
                            dialogIndex,
                            setDialogIndex,
                            handleNextDialog,
                            handlePreviousDialog
                        }}
                    />
                </Suspense>
            </Box>
        </Fade>
    );
}
