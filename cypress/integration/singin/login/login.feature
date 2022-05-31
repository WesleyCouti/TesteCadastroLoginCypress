Feature: Login com Usuario

    Eu como consumidor que ja possuo cadastro gostaria de fazer login

    Scenario: Login com Usuario valido
    Given cliquei para realizar sing-in
    When preencho os dados de login com um usuario valido
     And clico para realizar login
    Then o sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com Usuario valido, precionando enter
    Given cliquei para realizar sing-in
    When preencho os dados de login com um usuario valido, precionando enter apos
    Then o sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com Usuario valido, informando uma senha errada
    Given cliquei para realizar sing-in
    When preencho os dados de login informando usuario com senha errada
     And clico para realizar login
    Then o sistema notifica o usuario que houve problema com a autentificaçao

    Scenario: Login com email nao cadastrado
    Given cliquei para realizar sing-in
    When preencho os dados de login com um usuario nao cadastrado
     And clico para realizar login
    Then o sistema notifica o usuario que houve problema com a autentificaçao

    Scenario: Login sem informar email
    Given cliquei para realizar sing-in
    When preencho os dados de login nao informando o email
     And clico para realizar login
    Then o sistema notifica o usuario que e necessario informar um email

    Scenario: Login sem informar a senha
    Given cliquei para realizar sing-in
    When preencho os dados de login nao informando a senha
     And clico para realizar login
    Then o sistema notifica o usuario que e necessario informar um senha