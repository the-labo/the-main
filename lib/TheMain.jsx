'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { htmlAttributesFor } from 'the-component-util'
import { TheSpin } from 'the-spin'
import TheMainStyle from './TheMainStyle'

/**
 * Main for the-components
 */
class TheMain extends React.Component {
  render () {
    const {props} = this
    const {
      children,
      className,
      spinning,
    } = props
    return (
      <main {...htmlAttributesFor(props, {except: ['className']})}
            className={c('the-main', className)}
      >
        {spinning && (
          <TheSpin className='the-main-spin'
                   cover
                   enabled
                   size='xx-large'
          />
        )
        }
        {children}
      </main>
    )
  }
}

TheMain.Style = TheMainStyle

TheMain.propTypes = {
  /** Show spinner */
  spinning: PropTypes.bool,
}

TheMain.defaultProps = {
  spinning: false,
}

TheMain.displayName = 'TheMain'

export default TheMain
