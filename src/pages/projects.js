import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"
import { Container, Row } from "react-bootstrap"
import Typical from "react-typical"
import ProjectLoop from "../components/project-loop"
import ProfessionalCol from "../components/professional-col"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects light-theme">
      <MiniNav />
      <Container style={{ marginTop: "5%" }}>
        <Typical className="display-3" steps={["return projects;"]} />
        <div className="project-cards">
          <p>
            Click{" "}
            <a
              href="http://ruiz-dev.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>here</b>
            </a>{" "}
            to see my old portoflio.. This counts as a project right?
          </p>
          <h2 style={{ marginBottom: "1.5rem" }}>
            <u>Professional Projects</u>
          </h2>
          <ProfessionalCol />
          <h2>
            <u>Personal Projects</u>
          </h2>
          <Row style={{ marginTop: "3%" }}>
            <ProjectLoop />
          </Row>
        </div>
      </Container>
    </div>
  </Layout>
)

export default Projects
