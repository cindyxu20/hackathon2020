import React from "react";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DialogBar from "./DialogBar"
import BlueDevil from "./BlueDevil"
import TopBar from "./TopBar"

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
        >
            <TopBar text={scene.name} />
            <BlueDevil />
            <DialogBar scene={scene} goToNextScene={goToNextScene} goToPreviousScene={goToPreviousScene}></DialogBar>
        </Box>
    );
}
