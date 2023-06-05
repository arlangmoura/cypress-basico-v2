describe('Search', () => {
    const searchTerm = 'cypress.io'

    beforeEach(function(){
        cy.intercept(
            'GET',
            `**?q=${searchTerm}**`
        ).as('getSearchResults')

        cy.visit('https://duckduckgo.com')
        cy.get('input[type="text"]').as('searchField').should('be.visible')
    })

    it('types and hits Enter', () => { 
        cy.get('@searchField').type(`${searchTerm}{enter}`)

        cy.wait('@getSearchResults')
        cy.get('.nrn-react-div').should('have.length', 11)//não é um teste muito seguro, valor pode modificar
        cy.get('.result').should('have.length', 1).last().should('contain', 'Mais resultado')
    })

    it('types and clicks the magnifying glass button', () => {
        cy.get('@searchField').type(searchTerm)
        cy.get('input[type="submit"]').should('be.visible').click()

        cy.wait('@getSearchResults')
    })

    it('types and submits the form directly', () => {
        cy.get('@searchField').type(searchTerm)
        cy.get('form').submit()

        cy.wait('@getSearchResults')
    })

    it('searches by typing and select the first option from the list', () => {
        cy.get('@searchField').type(`${searchTerm}{downarrow}{enter}`, {delay: 300})
        cy.get('form').submit()

        cy.wait('@getSearchResults')
    })

    it('searches by typing and select the second option from the list', () => {
        cy.get('@searchField').type(`${searchTerm}{downarrow}{downarrow}{enter}`, {delay: 400})
        cy.get('form').submit()

        cy.wait('@getSearchResults')
    })
})