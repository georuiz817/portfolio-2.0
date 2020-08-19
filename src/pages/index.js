import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Typical from "react-typical"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import MiniNav from "../components/miniNav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="app">
      <Container className="home h-100 d-flex justify-content-center">
        <Jumbotron className="jumbo my-auto">
          <Typical
            className="display-3"
            steps={[
              "console.log('Hello, World')",
              2000,
              "console.log('...I'm George')",
            ]}
          />
        </Jumbotron>
      </Container>
      <Container className="home h-100 d-flex justify-content-center">
        <MiniNav />
      </Container>
    </div>
  </Layout>
)

export default IndexPage
