import { withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from 'react-scroll'
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F9E4F0`,
      paddingTop: '20px'
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h4>
        <Link
          to="Product"
          smooth={true}
          isDynamic={true}
          style={{
            textDecoration: `none`,
          }}
        >
          Product
        </Link>
      </h4>
      <h4>
        <Link
          to="Teaching"
          smooth={true}
          isDynamic={true}
          style={{
            textDecoration: `none`,
          }}
        >
          Teaching
        </Link>
      </h4>
      <h4>
        <Link
          to="Community"
          smooth={true}
          isDynamic={true}
          style={{
            textDecoration: `none`,
          }}
        >
          Community
        </Link>
      </h4>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
