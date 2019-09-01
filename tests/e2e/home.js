import { testAllViewports } from '../../cypress/lib/viewport'

describe('Homepage: Page displays as desired.', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });

  it('Navigates to Home', () => {
    cy.visit('/').assertRoute('/')
  })

  testAllViewports(() => {
    it('image queries loading as picture elements', () => {
      cy.get('img[srcset]')
        .should('be.visible')
        .parents()
        .should('match', 'picture')
    })
  })
})
