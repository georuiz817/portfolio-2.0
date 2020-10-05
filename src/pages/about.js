import React from "react"
import Typical from "react-typical"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"

import Image from "../components/image"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <MiniNav />
      <div className="about-typical">
        <Typical steps={["return about;"]} />
      </div>
      <div className="about-grid">
        <div className="about-item-1">
          <Image />
        </div>
        <div className="about-item-2">
          <h1>Hello there!</h1>
          <h1>I'm George</h1>
          <p>
            I'm a full stack developer who gained all his knowledge from not
            only independent learning but from completion of Flatiron Schools
            full stack engineering bootcamp. Now with more of a focus on front
            end, I'm a front end web developer intern over at Gesture
            (yourgesture.com) an on-demand gift delivery service, using React
            and Firebase to supplement 5000+ users and 200+ monthly orders.
            Constantly being put to the test I'm not only broadining my
            knowledge in regards to development but other key areas like
            teamwork, brain storming, and best tech practices. Looking for a
            company to call home, I've adapted well to remote work as well as
            start up companies that provide great company practices and
            small-knit communities.
          </p>
          <p>
            <a href="mailto:ruiz.fullstack@gmail.com">
              ruiz.fullstack@gmail.com
            </a>{" "}
            ||{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/georuiz817/"
            >
              LinkedIn
            </a>{" "}
            ||{" "}
            <a
              href="https://github.com/georuiz817"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
