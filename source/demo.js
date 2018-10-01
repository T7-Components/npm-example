// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import ListInline from '@t7/list-inline'
import { bind } from '@t7/utils'

// UI components.
import {
  ButtonMinus,
  ButtonPlus
} from './'

// Vendor CSS.
import 'sanitize.css/sanitize.css'
import '@t7/list-inline/dist/index.css'
import '@t7/forms/dist/index.css'

// Local CSS.
import './index.css'
import './demo.css'

// Define class.
class Demo extends React.Component {
  constructor (props) {
    super(props)

    // Bind context.
    bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    this.state = {
      count: 0
    }
  }

  // Click event.
  handleClick (count) {
    // Stay positive!
    if (count < 0) {
      count = 0
    }

    // Update.
    this.setState({ count })
  }

  // Render method.
  render () {
    // State.
    const { count } = this.state

    // Events.
    const { handleClick } = this

    // Props for buttons.
    const propsForButtons = {
      count,
      handleClick
    }

    // Expose UI.
    return (
      <React.Fragment>

        <h1>
          @t7/npm-example
        </h1>

        <p>
          <a href='https://github.com/t7-components/npm-example/blob/master/source/demo.js'>
            View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <p>
          Click the buttons below to change the count…
        </p>

        <p>
          <big>
            <b>
              Count: {count}
            </b>
          </big>
        </p>

        <ListInline>

          <li>
            <ButtonMinus
              {...propsForButtons}
            />
          </li>

          <li>
            <ButtonPlus
              {...propsForButtons}
            />
          </li>

        </ListInline>

      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
