import React, { useEffect } from "react"
import { LampFill } from "react-bootstrap-icons"
import { Lamp } from "react-bootstrap-icons"
//import { ToggleOn } from "react-bootstrap-icons"
//import { ToggleOff } from "react-bootstrap-icons"

const DarkMode = () => {
  useEffect(() => {
    localStorage.setItem("darkMode", "true")
  })

  const DarkModeOn = () =>{
    localStorage.setItem("darkMode", "true")
  }

  const LightModeOn = () =>{
    localStorage.setItem('darkMode', 'false')
  }

  return (
    <div className="dark-mode-comp light-theme">
      <button onClick={DarkModeOn}>
        <Lamp />
      </button>
 
      <button onClick={LightModeOn}>
        <LampFill/>
      </button>
    </div>
  )
}

export default DarkMode
