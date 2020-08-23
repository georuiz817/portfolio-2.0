import React from "react"
import Typical from "react-typical"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MiniNav from "../components/miniNav.js"
import me from "../images/me.jpeg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <MiniNav />
      <div className="about-container" style={{ marginTop: "5%" }}>
      <Typical className="display-3" steps={["console.log('about');"]} />
        <div className="about-item-1">
          <h1>About me</h1>
          <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate 
                office environments. I was able to thrive in hands on experience with topics like team building, 
                data management, customer service, and corporate best practices. Feeling that the cubicle life and 
                monotony of Insurance wasn't for me, I decided to start researching into other fields of business.
                When doing my research I had a few things in mind that needed to be required of the field. Creativity,
                spontanuity, and fun were all things I believed would spark my interest
            </p>
        </div>
        <div className="about-item-2">
          <img src={me} width="50%" alt="n/a" />
        </div>
      </div>
    </div>
  </Layout>
)

export default About
