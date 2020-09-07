import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"
import { Container, Row } from "react-bootstrap"
import Typical from "react-typical"
import ProjectLoop from "../components/project-loop"
import me from "../images/me.jpeg"

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
          <h2>
            <u>Professional Projects</u>
          </h2>
          <div className="professional-grid">
            <div className="professional-col-one">
              <p>
                Currently I'm a front end web developer intern over at Gesture
                (yougesture.com). I Work specifically on the four person website
                team using HTML, SCSS, React, and even a bit of Firebase. Being
                on the team pre-launch up until now has been not only
                challenging but exciting. You'll typically find me doing an
                array of tasks from debugging exsisting code to creating and
                developing exciting new features (like the nifty and simple
                giftbox). One thing that stands out to me the most is having the
                opporunity to not only code but to do product developing
                research and brainstorm and work with other various other
                departments like the UX team
              </p>
            </div>
            <div className="professional-col-two">
              <img src={me} alt="n/a" width="100%" />
            </div>
          </div>

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
