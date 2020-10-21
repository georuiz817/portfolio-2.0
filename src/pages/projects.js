import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"
import Typical from "react-typical"
import ProjectLoop from "../components/project-loop"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects">
      <MiniNav />
      <div className="about-typical">
        <Typical steps={["return projects;"]} />
      </div>
      <div className="about-grid">
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
        <hr></hr>

        <ProjectLoop />
      </div>
    </div>
  </Layout>
)

export default Projects
