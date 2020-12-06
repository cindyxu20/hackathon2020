import scenes from "../../public/data/scenes.json"

export function getScene(id){
    let scene = scenes.find(scene => scene.id === id) 

    scene.nextSceneTitle = scenes[id + 1]?.name
    scene.prevSceneTitle = scenes[id - 1]?.name

    return scene
}