import scenes from "../../public/data/scenes.json"

export function getScene(id){
    const scene = scenes.find(scene => scene.id === id)

    return scene
}