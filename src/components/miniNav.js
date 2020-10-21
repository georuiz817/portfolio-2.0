import React from "react"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { Folder } from "react-bootstrap-icons"
import { Person } from "react-bootstrap-icons"
import { Journal } from "react-bootstrap-icons"
import Tooltip from "react-bootstrap/Tooltip"
import { Link } from "gatsby"
import Resume from "../images/Ruiz_Resume.pdf"

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

  const ResumeToolTip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Resume
    </Tooltip>
  )

  return (
    <div className="MiniNav">
        [{" "}
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
        <Link className="nav-array" disabled>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={ResumeToolTip}
          >
            <a href={Resume} download>
              <Journal />
            </a>
          </OverlayTrigger>
        </Link>{" "}
        ]
    </div>
  )
}

export default MiniNav
