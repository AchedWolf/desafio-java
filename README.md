<h1 align="center">Desafio Java</h1>
<p align="center"><i>Integração simples entre React e Java Spring Boot com autenticação Basic</i></p>

# Sobre o projeto

<p align="justify">Este projeto tem como objetivo a construção de uma aplicação simples com as tecnologias React, Java Spring Boot e PostgreSql. Para tal, foi-se criado um CRUD para a entidade Cliente e uma tela de login para que o usuario possa se autenticar e acessar o sistema com credenciais já previamente cadastradas.</p>

Credenciais:
<ul>
    <li>Username: admin</li>
    <li>Password: 1234</li>
</ul> 

# Metodo de instalação
<h3>Back-end</h3>
<p align="justify">É necessario a intalação prévia do JDK 18 e do banco de dados PostgreSql, recomenda-se utilizar as credencias usuario: postgres senha: admin, ou alterar para os de sua configuração no arquivo /desafio-tecnico/src/main/resources/application.properties).</p>

<p align="justify">Assim, utilizando a ferramente IntelliJ IDE (recomenda-se a verção community por ser gratuita ou a ferramenta que for de mais agrado) você irá fazer a importação do módulo "desafio-tecnico" (selecione a opção de projeto Maven), aguardar o download das depenpendencias de projeto e iniciar o arquivo DesafioTecnicoApplication.java (localizado na pasta desafio-java/desafio-tecnico/src/main/java/dev/vpuchille/desafiotecnico), o projeto se iniciará na url http://localhost:8080.</p>

<h3>Back-end</h3>
<p align="justify">É necessario a intalação prévia do Node 8. Assim, utilizando o terminal (ou o terminal do VS Code) você irá acessar a pasta "front", executar o comando "npm i" para instalar o programa e executar o comando "npm start" para iniciar o programa. Após a compilação uma pagina web irá abrir com a aplicação rodando na url http://localhost:3000. As credenciais de login estão definidas como os valores inicias das variaveis de usuario e senha para economizar seu tempo.</p>

# End-points
<p align="justify">Para facilitar sua vida deixei uma coleção Postman para que você possa testar mais facilmente, peço que não de atenção para alguns valores de testes. Mas caso queira fazer você mesmo aqui estão as urls (entre chaves é o valor de variavel), bodys e metodos:</p>

<li>Busca todos os clientes</li>
<ul>
    <li>Url: http://localhost:8080/cliente</li>
    <li>Metodo: GET</li>
    <li>Body: não é necessário</li>
</ul>

<li>Um cliente especifico</li>
<ul>
    <li>Url: http://localhost:8080/cliente/{cpf}</li>
    <li>Metodo: GET</li>
    <li>Body: não é necessário</li>
</ul>

<li>Cria um cliente</li>
<ul>
    <li>Url: http://localhost:8080/cliente</li>
    <li>Metodo: POST</li>
    <li>Body: { cliente }</li>
</ul>

<li>Altera um cliente</li>
<ul>
    <li>Url: http://localhost:8080/cliente</li>
    <li>Metodo: PUT</li>
    <li>Body: { cliente }</li>
</ul>

<li>Deleta um cliente</li>
<ul>
    <li>Url: http://localhost:8080/cliente/{cpf}</li>
    <li>Metodo: DELETE</li>
    <li>Body: não é necessário</li>
</ul>

# Considerações Finais
<p align="justify">Me diverti muito fazendo este desafio e relembrei muitas coisas outrora esquecidas. Espero que gostem do mesmo o tanto que eu me diverti fazendo, infelizmente não consegui entender o porque de meu background acabar regeitando minhas chamadas pelo front (Erro 403), e para resolver isto acabei desativando a autenticação basic, fazendo o código funcionar.</p>