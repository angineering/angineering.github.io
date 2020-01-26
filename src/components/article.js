import React from 'react'
import PropTypes from "prop-types"

 const Article = ( props ) => {
    return (
      <article
        {...props}
      >
        { props.children }
      </article>
    )
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Article
