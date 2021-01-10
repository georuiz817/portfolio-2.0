import React from "react"
import Typical from "react-typical"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <MiniNav />
      <div className="about-typical">
        <Typical steps={["return about;"]} />
      </div>
      <div className="about-grid">
        <div>
          <h1>Hello there!</h1>
          <h1>I'm George</h1>
          <p id="contact-link">
            <a href="mailto:ruiz.fullstack@gmail.com">
              ruiz.fullstack@gmail.com
            </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/georuiz817/"
            >
              LinkedIn
            </a>{" "}
            ,{" "}
            <a
              href="https://github.com/georuiz817"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            I'm a former Flatiron Full-stack bootcamp grad and now web developer
            who is currently doing Front-end development over at Gesture.
            Gesture, an on-demand gift delivery service has me sharpening my
            skills in not only vanilla JavaScript but as well as React and
            Google Firebase. I typically enjoy working remotley as well as being
            able to bring modern and simplistic (for the user) features to life.
          </p>
          <p>
            If I'm not working on a Front-end site for Gesture or a freelance
            client, I'll typically be found on leetcode.com. Usually I will be
            just whiteboarding and solving there mildy infuriating code
            challenges with Python.
          </p>
          <p>Core skills: </p>
          <p>Front-end</p>
          <p>
            JavaScript | React | Redux | HTML | jQuery | CSS | Sass | Bootstrap
            | WordPress
          </p>
          <p>Back-end</p>
          <p>
            Python (Django) | Google Firebase | Rails | Node.js | SQLite |
            Postgres
          </p>
          <p>Other</p>
          <p>
            Git | Yarn | Microsoft Office | Debugging | Problem Solving |
            Teamwork | Creativity
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
