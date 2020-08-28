import React, { useEffect } from "react"
//import { LampFill } from "react-bootstrap-icons"
import { Lamp } from "react-bootstrap-icons"
//import { ToggleOn } from "react-bootstrap-icons"
//import { ToggleOff } from "react-bootstrap-icons"

const DarkMode = () => {
  useEffect(() => {
    localStorage.setItem("darkMode", "false")
  })

  const DarkModeOn = () =>{
    localStorage.setItem("darkMode", "true")
  }

  return (
    <div className="dark-mode-comp">
      <button onClick={DarkModeOn}>
        <Lamp />
      </button>
    </div>
  )
}

export default DarkMode
