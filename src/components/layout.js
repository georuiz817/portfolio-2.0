import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
//import DarkMode from '../components/dark-mode'
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
