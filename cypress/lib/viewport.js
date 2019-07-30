const { _ } = Cypress

const viewportSizes = {
  small: [320, 480],
  medium: [768, 680],
  large: [990, 800],
  'x-large': [1440, 1280],
}

export const testAllViewports = (stepsToTest) => testViewports(viewportSizes, stepsToTest)

export const testViewports = (viewports, stepsToTest) => {
  _.each(viewports, (size, label) => {
    context(`Testing ${_.capitalize(label)} resolution`, () => {
      beforeEach(() => {
        cy.viewport(size[0], size[1])
      })

      stepsToTest()
    })
  })
}
