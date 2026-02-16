# Projeto Gaming Zone - Angular

O projeto Gaming Zone consiste no desenvolvimento de uma aplicação web para gerenciamento de produtos de uma loja de jogos. A primeira fase contempla a implementação do front-end utilizando Angular, juntamente com a integração a um servidor JSON para simulação das operações de CRUD (Create, Read, Update, Delete).

## Escopo do Projeto

Nesta etapa inicial foram desenvolvidos:
- Interface front-end com Angular, HTML, CSS e TypeScript.
- Integração com json-server para persistência temporária dos dados.
- Funcionalidades de: cadastro, edição, listagem e exclusão de produtos.
- Testes de API realizados via Postman, com êxito nas operações GET, POST, PUT e DELETE.

As próximas fases incluem o desenvolvimento do back-end e aprimoramentos contínuos de segurança segundo práticas de CyberDevOps.

## Tecnologia Usada

- [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.9.
- HTML5, CSS3, TypeScript
- json-server
- Postman

## Execução do projeto
### Servidor de desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento.  
Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que houver alterações nos arquivos de código-fonte.

### Servidor JSON

Execute `json-server dbgames.json` para iniciar o servidor JSON.
Acesse `http://localhost:3000/`.

## Teste de APIP - Postman

As operações foram validadas utilizando o Postman. Espaços reservados para inclusão das evidências:

### GET - Listagem de Produtos

![GET Teste](https://drive.google.com/uc?export=view&id=1F-hPTvxQQmbh50nnAf70rt8Rmm1VAuAh)

### POST - Cadastro de Produtos

![POST Teste](https://drive.google.com/uc?export=view&id=1dc5Vo-7H-N4Ex0quIvMYBX0p7nJovuNX)

### PUT - Editar Produtos

![POST Teste](https://drive.google.com/uc?export=view&id=1Emc-sFN5GC3zaMAlREW0NWtF7KGo6IPB)

### DELET - Deletar Produtos

![DELETE Teste](https://drive.google.com/uc?export=view&id=1HDe8QcnZy8QN15h33OfrlNJUQ5DOj34v)

## Geração de código (scaffolding)

Execute `ng generate component nome-do-componente` para gerar um novo componente.  
Você também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para compilar o projeto.  
Os artefatos de build serão armazenados no diretório `dist/`.

## Execução de testes unitários

Execute `ng test` para rodar os testes unitários por meio do [Karma](https://karma-runner.github.io).

## Execução de testes ponta a ponta (end-to-end)

Execute `ng e2e` para rodar os testes ponta a ponta utilizando a plataforma de sua escolha.  
Para utilizar este comando, é necessário adicionar previamente um pacote que implemente funcionalidades de testes end-to-end.

## Ajuda adicional

Para obter mais ajuda sobre o Angular CLI, utilize `ng help` ou consulte a página [Visão geral do Angular CLI e referência de comandos](https://angular.io/cli).
