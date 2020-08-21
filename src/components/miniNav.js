import React from "react"
//import {Lamp} from "react-bootstrap-icons";
//import {LampFill} from "react-bootstrap-icons";
//import {ToggleOn} from 'react-bootstrap-icons';
//import {ToggleOff} from 'react-bootstrap-icons';
//import './MiniNav.scss';
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { HouseDoor } from "react-bootstrap-icons"
import { Folder } from "react-bootstrap-icons"
import { Person } from "react-bootstrap-icons"
import { Envelope } from "react-bootstrap-icons"
import Tooltip from "react-bootstrap/Tooltip"
import { Link } from "gatsby"

const MiniNav = () => {
  const ProjectsToolTip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Projects
    </Tooltip>
  )

  const AboutToolTip = props => (
    <Tooltip id="button-tooltip" {...props}>
      About
    </Tooltip>
  )

  const ContactToolTip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Mail
    </Tooltip>
  )

  const HomeToolTip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Home
    </Tooltip>
  )
  return (
    <div className="MiniNav">
      <h1>
        [{" "}
        <Link className="nav-array" to="/">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={HomeToolTip}
          >
            <HouseDoor />
          </OverlayTrigger>
        </Link>{" "},
        {" "}
        <Link className="nav-array" to="/projects">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={ProjectsToolTip}
          >
            <Folder />
          </OverlayTrigger>
        </Link>{" "}
        ,{" "}
        <Link className="nav-array" to="/about">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={AboutToolTip}
          >
            <Person />
          </OverlayTrigger>
        </Link>{" "}
        ,{" "}
        <Link className="nav-array" to="/">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={ContactToolTip}
          >
            <a href="mailto:ruiz.fullstack@gmail.com">
              <Envelope />
            </a>
          </OverlayTrigger>
        </Link>{" "}
        ]
      </h1>
    </div>
  )
}

export default MiniNav
