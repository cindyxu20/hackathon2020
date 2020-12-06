import React, { useEffect } from "react"

export default function PlaySound({ url }) {
  
  if (!url) return false;
  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }, [])

  return (
    <div>
      <audio className="audio-element">
        <source src={url}></source>
      </audio>
    </div>
  )
}