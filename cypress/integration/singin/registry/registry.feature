Feature: Login Corretor Parceiro

    Background: Acessar página de login
    Given acesso a pagina inicial do VOL

    Scenario: Realizar login com corretor cadastrado
    When insiro os dados de um corretor já cadastrado
    Then deverá apresentar a tela inicial do VOL para o perfil do Corretor Parceiro

    Scenario: Inserir e-mail inválido no login do Corretor
    When insiro um e-mail invalido
    Then deverá apresentar mensagem de "E-mail inválido" e "Campo obrigatório" em senha