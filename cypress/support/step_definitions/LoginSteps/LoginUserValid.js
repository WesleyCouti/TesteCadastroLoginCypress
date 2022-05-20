/// <reference  types="cypress"/>
/*global Then, When, Given*/

When('preencho os dados de login com um usuario valido', () => {
    global.usuario.email = 'testewesley@wesley.com'
    global.usuario.nome = 'Wesley Teste'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha)
})



