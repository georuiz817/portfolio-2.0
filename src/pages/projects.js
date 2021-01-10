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
        <ProjectLoop />
      </div>
    </div>
  </Layout>
)

export default Projects
