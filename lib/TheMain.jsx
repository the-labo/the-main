'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheMainStyle from './TheMainStyle'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Main for the-components
 */
class TheMain extends React.PureComponent {
  render () {
    const s = this
    const {props} = s
    const {
      className,
      children
    } = props
    return (
      <main {...htmlAttributesFor(props, {except: ['className']})}
           className={c('the-main', className)}
      >
        {children}
      </main>
    )
  }
}

TheMain.Style = TheMainStyle

TheMain.propTypes = {}

TheMain.defaultProps = {}

TheMain.displayName = 'TheMain'

export default TheMain
