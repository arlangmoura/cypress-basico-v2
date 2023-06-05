// ***********************************************
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('cypress')
    cy.get('#email').type('cypress@tat.com.br')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})