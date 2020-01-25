import React from 'react'
import PropTypes from "prop-types"

 const Article = ({ children, className }) => {
    return (
      <article
        className={className}
        data-aos='fade-up'
      >
        { children }
      </article>
    )
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Article
