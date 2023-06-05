/// <reference types="Cypress" />

describe('Verificano página de privacidade', function() {
    beforeEach(function(){
        cy.visit('./src/privacy.html')
    })

    it.only('testa a página da política de privacidade de forma independente', function(){
        cy.contains('Talking About Testing').should('be.visible')
    }) 
})