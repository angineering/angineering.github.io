/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import AOS from 'aos'
import 'aos/dist/aos.css';

import Header from "./header"
import "./layout.css"

class Layout extends React.Component {
  componentDidMount() {
    AOS.init({ duration: 1500 })
  }
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            //maxWidth: 960,
            //padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{this.props.children}</main>
          <footer>
            © {new Date().getFullYear()} Angela K J Branaes
          </footer>
        </div>
      </>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
