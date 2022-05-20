/// <reference  types="cypress"/>
/*global Then, When, Given*/

When('preencho os dados de login com um usuario valido, precionando enter apos', () => {
    global.usuario.email = 'wesleytesteEnter@gmail.com'
    global.usuario.nome = 'Wesley Enter'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(`${global.usuario.senha}{enter}`)
})


