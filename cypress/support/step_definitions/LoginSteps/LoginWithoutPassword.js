/// <reference  types="cypress"/>
/*global Then, When, Given*/

When('preencho os dados de login nao informando a senha', () => {
    global.usuario.email = 'testewesley@wesley.com'
    let backupsenha = global.usuario.senha
    global.usuario.senha =' '

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha).then(()=>{ global.usuario.senha = backupsenha })
})

Then('o sistema notifica o usuario que e necessario informar um senha', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
     .find('ol > li').should('have.text','Password is required.')
})
