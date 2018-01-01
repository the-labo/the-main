'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheMain */
const TheMainStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={classnames('te-main-style', className)}
            styles={TheMainStyle.data(options)}
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
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor
  } = options
  return asStyleData('.the-main', {
    '&': {
      'width': '100%',
      'flexGrow': 1
    }
  })
}

export default TheMainStyle
