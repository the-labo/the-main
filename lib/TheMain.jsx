'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheMainStyle from './TheMainStyle'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Main for the-components
 */
class TheMain extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children
    } = props
    return (
      <div { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
           className={ classnames('the-main', className) }
      >
        { children }
      </div>
    )
  }
}

TheMain.Style = TheMainStyle

TheMain.propTypes = {}

TheMain.defaultProps = {}

TheMain.displayName = 'TheMain'

export default TheMain
