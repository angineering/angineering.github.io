import React from 'react'
import PropTypes from "prop-types"

 const Section = ({ sectionId, children }) => {
    return (
      <section
        id={ sectionId }
      >
        { children }
      </section>
    )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  sectionId: PropTypes.string
}

export default Section
