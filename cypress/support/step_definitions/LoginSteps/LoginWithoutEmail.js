/// <reference  types="cypress"/>
/*global Then, When, Given*/

When('preencho os dados de login nao informando o email', () => {
    global.usuario.email = ' '

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha)
})
 
Then('o sistema notifica o usuario que e necessario informar um email', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
     .find('ol > li').should('have.text','An email address required.')
})
