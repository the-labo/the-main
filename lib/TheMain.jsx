'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/**
 * Main of the-compontents
 */
class TheMain extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      id,
      className,
      styles,
      children
    } = props
    return (
      <div className={ classnames('the-main', className) }
           style={ styles.root }
           { ...{ id }}
      >
        { children }
      </div>
    )
  }

  /**
   * Define style
   * @param [options={}] options - Optional settings
   * @returns {Object} Style object
   */
  static styles (options = {}) {
    const { theme } = TheStyle
    let {
      dominant = theme.DOMINANT_COLOR
    } = options
    return {
      root: {}
    }
  }
}

TheMain.propTypes = {
  /** CSS class name */
  className: PropTypes.string,
  /** Style objects */
  styles: PropTypes.object,
  /** DOM Id */
  id: PropTypes.string
}

TheMain.defaultProps = {
  className: null,
  styles: TheMain.styles({}),
  id: null
}

TheMain.displayName = 'TheMain'

export default TheMain
