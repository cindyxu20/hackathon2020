import React, { useState } from 'react'
import { getScene } from "../functions"
import Scene from "./Scene"

export default function SceneController() {

    const [sceneId, setSceneId] = useState(1)
    const [dialogIndex, setDialogIndex] = useState(0)

    const scene = getScene(sceneId)

    return <Scene scene={scene} setSceneId={setSceneId} dialogIndex={dialogIndex} setDialogIndex={setDialogIndex} />
}
