// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { ButtonPlus } from '..'

// Helper.
const renderWithProps = (props = {}) => {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ButtonPlus
      {...props}
    />
  )

  // Get content.
  const parent =
    T.findRenderedDOMComponentWithTag(el, 'button')

  // Expose object.
  return {
    el,
    parent
  }
}

// Describe `<Component/>` name.
describe('ButtonPlus', () => {
  // Dummy events.
  const handleClick = jest.fn()

  // Dummy props.
  const props = {
    handleClick,
    count: 0
  }

  const propsNaN = {
    handleClick,
    count: 'NOT_A_NUMBER'
  }

  // ======
  // Reset.
  // ======

  beforeEach(() => {
    jest.resetAllMocks()
  })

  // =======================
  // Test for initial state.
  // =======================

  it('has correct initial state', () => {
    // Render.
    const {
      el,
      parent
    } = renderWithProps(props)

    expect(el.props.count)
      .toBe(props.count)

    expect(parent.style.fontFamily)
      .toBe('monospace')

    expect(parent.textContent)
      .toBe('+')

    expect(parent.title)
      .toBe('Plus')
  })

  // =======================
  // Test for "click" event.
  // =======================

  it('handles "click" event', () => {
    // Render.
    const { el } =
      renderWithProps(props)

    // Fire event.
    el.handleClick()

    expect(handleClick)
      .toBeCalledWith(1)
  })

  // ===========================
  // Test for "NaN click" event.
  // ===========================

  it('handles "NaN click" event', () => {
    // Render.
    const { el } =
      renderWithProps(propsNaN)

    // Fire event.
    el.handleClick()

    expect(handleClick)
      .toBeCalledWith(0)
  })
})
