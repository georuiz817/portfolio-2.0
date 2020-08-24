import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"
import { Container, Col, Row } from "react-bootstrap"
import Typical from "react-typical"
import GitHub from "../images/GitHub.png"
import { Laptop } from "react-bootstrap-icons"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

let projectArray = [
  {
    name: "Horizons-Library",
    icon: "🍃",
    description:
      "Need information on your favorite Animal Crossing villagers and items? Look no further!",
    site: "http://horizons-library.herokuapp.com/",
    gitHub: "https://github.com/georuiz817/Horizons-Library",
  },
  {
    name: "Gobbler",
    icon: "🦃",
    description:
      "Celebrate the holiday by contributing to a sponsored charitable cause. Interact and discover what Thanksgiving is all about.",
    gitHub: "https://github.com/georuiz817/Gobbler",
  },

  {
    name: "Turtles-App",
    icon: "🍕",
    description:
      "Who doesn't love pizza? Gain inspiration by viewing the board and feed a turtle your favorite classic (or obscure) pizza slices.",
    gitHub: "https://github.com/georuiz817/turtles-app-",
  },
]

const GitHubToolTip = props => (
  <Tooltip id="button-tooltip" {...props}>
    GitHub
  </Tooltip>
)

const SiteToolTip = props => (
  <Tooltip id="button-tooltip" {...props}>
    Live Site
  </Tooltip>
)

const projectsLoops = projectArray.map(p => (
  <Col>
    <div className="my-card">
      <div className="my-card-content">
        <h2>
          {p.name}
          {p.icon}
        </h2>
        <div className="my-card-desc">
          <p>{p.description}</p>
        </div>
        {p.site != null ? (
          <div>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <a className='nav-array' href={p.site} target="_blank" rel="noopener noreferrer">
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={SiteToolTip}
                  >
                    <h1><Laptop/></h1>
                  </OverlayTrigger>
                </a>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <a href={p.gitHub} target="_blank" rel="noopener noreferrer">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={GitHubToolTip}
                  >
                    <img src={GitHub} alt="n/a" />
                  </OverlayTrigger>
                </a>
              </Col>
            </Row>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <a href={p.gitHub} target="_blank" rel="noopener noreferrer">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={GitHubToolTip}
              >
                <img src={GitHub} alt="n/a" />
              </OverlayTrigger>
            </a>
          </div>
        )}
      </div>
    </div>
  </Col>
))

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects">
      <MiniNav />
      <Container style={{ marginTop: "5%" }}>
        <Typical className="display-3" steps={["return projects;"]} />
        <Row style={{ marginTop: "5%" }}>{projectsLoops}</Row>
      </Container>
    </div>
  </Layout>
)

export default Projects
