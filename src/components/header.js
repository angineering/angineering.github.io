import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F9E4F0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h4>
        <Link
          to="#Product"
          style={{
            textDecoration: `none`,
          }}
        >
          Product
        </Link>
      </h4>
      <h4>
        <Link
          to="#Teaching"
          style={{
            textDecoration: `none`,
          }}
        >
          Teaching
        </Link>
      </h4>
      <h4>
        <Link
          to="#Community"
          style={{
            textDecoration: `none`,
          }}
        >
          Community
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
