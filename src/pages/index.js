import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Typical from "react-typical"
import MiniNav from "../components/miniNav"
import '../../index.css'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="app">
      <div className="index-container">
        <Typical
          steps={[
            "console.log('Hello, World');",
            2000,
            "console.log('...I'm George');",
          ]}
        />
        <div className="miniNav-container">
          <MiniNav />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
