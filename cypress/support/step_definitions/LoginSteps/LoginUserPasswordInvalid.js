/// <reference  types="cypress"/>
/*global Then, When, Given*/

When('preencho os dados de login informando com senha incorreta', () => {
    global.usuario.email = 'wesleytesteEnter@gmail.com'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type('senha invalida')
})


