describe('cypress docs', () => {
  context('desktop', () => {
    beforeEach(() => {
      cy.visit('https://docs.cypress.io')
    })
    
    it('it does not display hamburger icon', () => {
      cy
      .get('#mobile-nav-toggle')
      .should('not.be.visible')
    })

    it('fails finding some element', () => {
      cy.contains('something that does not exist in text')
    })
  })

  context('mobile', () => {
    beforeEach(() => {
      cy.visit('https://docs.cypress.io')
    })

    ;['iphone-3', 'iphone-4', 'iphone-5', 'iphone-6'].forEach((phone) => {
      it(`displays hamburger icon for phone: ${phone}`, () => {
        cy.viewport(phone)
        
        cy
        .get('#mobile-nav-toggle')
        .should('be.visible')
      })

    })

  })
})
