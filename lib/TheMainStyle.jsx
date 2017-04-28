'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/** Style for TheMain */
const TheMainStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('te-main-style', className) }
            styles={ TheMainStyle.data(options) }
  />
)

TheMainStyle.displayName = 'TheMainStyle'
TheMainStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheMainStyle.defaultProps = {
  options: {}
}

TheMainStyle.data = (options) => {
  const { theme } = TheStyle
  let {
    dominantColor = theme.DOMINANT_COLOR
  } = options
  return {
    '.the-main': {}
  }
}

export default TheMainStyle
