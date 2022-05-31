/// <reference  types="cypress"/>
/*global Then, When, Given*/

When('preencho os dados de login informando usuario com senha errada', () => {
    global.usuario.email = 'testewesley@wesley.com'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type('senha098invalida')
})

