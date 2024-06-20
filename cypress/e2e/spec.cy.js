/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    // NOTE: the scenario is located in an external document because
    // "'file:' URLs are treated as unique security origins."
    // and the browser refuses to load the SVG.
    cy.visit('https://branson-simplethread.github.io/svg-example/icons.html')
  })
})
