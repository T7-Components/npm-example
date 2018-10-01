// Dependencies.
import * as all from './'

// Describe `<Component/>` name.
describe('T7 NPM example -- index.js', () => {
  // Expected components.
  const componentList = [
    'ButtonMinus',
    'ButtonPlus'
  ]

  // ==========================
  // Test for component export.
  // ==========================

  it('exports React components', () => {
    // Loop through.
    Object.keys(all).forEach((key) => {
      // Get component.
      const component = all[key]

      // Expected component?
      expect(componentList)
        .toContain(component.name)

      // Only functions?
      expect(typeof component)
        .toBe('function')
    })
  })
})
