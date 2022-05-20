Feature: Cadastro de Usuario

    Eu como consumidor desejo realizar cadastro no site

    Scenario: Cadastrar usuario valido
    Given cliquei para realizar sing-in
    When informo meu email para cadastro de usuario
     And finalizo meu cadastro preenchendo todos os dados do usuario
    Then O sistema realiza meu cadastro com sucesso me autenticando na pagina

    Scenario: Cadastrar usuario com email invalido
    Given cliquei para realizar sing-in
    When tentei me inscrever com um email invalido
    Then o sistema notifica que o email utilizado e invalido

    Scenario: Cadastrar usuario com email existente
    Given cliquei para realizar sing-in
    When tentei me inscrever com um email ja esta em uso
    Then o sistema notifica que o email ja esta sendo utilizado por outro usuario