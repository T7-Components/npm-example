module.exports = {
  extends: [
    'stylelint-config-dev'
  ],
  plugins: [
    'stylelint-media-use-custom-media',
    'stylelint-use-logical',
    'stylelint-value-no-unknown-custom-properties'
  ],
  rules: {
    'csstools/media-use-custom-media': true,
    'csstools/use-logical': true,
    'csstools/value-no-unknown-custom-properties': true,
    'color-hex-length': 'short',
    indentation: 2
  }
}
