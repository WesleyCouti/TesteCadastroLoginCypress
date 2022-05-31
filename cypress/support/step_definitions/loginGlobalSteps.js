/// <reference  types="cypress"/>
/* global Then, When, Given */

Then('o sistema realiza meu login com sucesso me autenticando na pagina', () => {
    cy.get('.account > span')
        .should('be.visible')
        .should('have.text',global.usuario.nome)
})

Then('o sistema notifica o usuario que houve problema com a autentificaçao', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
     .find('ol > li').should('have.text','Authentication failed.')
})

And('clico para realizar login', ()=> {
    cy.get('#SubmitLogin').click()
})



