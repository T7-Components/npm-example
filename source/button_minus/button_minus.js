// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@t7/forms'
import { bind } from '@t7/utils'

// Define class.
class ButtonMinus extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Click event.
  handleClick () {
    // Props.
    let { count } = this.props

    // Decrement.
    try {
      count--
    } catch (e) {}

    // Ensure numeric.
    if (isNaN(count)) {
      count = 0
    }

    // Fire callback.
    this.props.handleClick(count)
  }

  // Render method.
  render () {
    // Events.
    const { handleClick } = this

    // Style.
    const style = {
      fontFamily: 'monospace'
    }

    // Props for button.
    const propsForButton = {
      handleClick,
      style,
      children: '-',
      title: 'Minus'
    }

    // Expose UI.
    return (
      <Button
        {...propsForButton}
      />
    )
  }
}

// Validation.
ButtonMinus.propTypes = {
  count: PropTypes.number,

  // Events.
  handleClick: PropTypes.func
}

// Defaults.
ButtonMinus.defaultProps = {
  count: 0,

  // Events.
  handleClick: () => {}
}

// Export.
export default ButtonMinus
