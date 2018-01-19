'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheMainStyle from './TheMainStyle'
import { TheSpin } from 'the-spin'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Main for the-components
 */
class TheMain extends React.Component {
  render () {
    const {props} = this
    const {
      className,
      children,
      spinning,
    } = props
    return (
      <main {...htmlAttributesFor(props, {except: ['className']})}
            className={c('the-main', className)}
      >
        <TheSpin cover
                 enabled={spinning}
                 size={'x-large'}
        />
        {children}
      </main>
    )
  }
}

TheMain.Style = TheMainStyle

TheMain.propTypes = {
  /** Show spinner */
  spinning: PropTypes.bool
}

TheMain.defaultProps = {
  spinning: false
}

TheMain.displayName = 'TheMain'

export default TheMain
