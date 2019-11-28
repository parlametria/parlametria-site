# Parlametria

Inteligência de dados para ação cidadã.

## Requisitos

* node 10.15.x
* [angular cli](https://github.com/angular/angular-cli) 8.3.15

## Como desenvolver

Primeiro, instale as dependências do projeto com `npm install`.

O comando `npm start` irá subir um servidor em modo de desenvolvimento. Navegue até `http://localhost:4200/` para ver. O aplicativo vai recarregar automaticamente quando houverem mudanças no código fonte.

### Docker-Compose

Para rodar o projeto com [Docker-compose](https://docs.docker.com/compose/install/), basta executar o comando `sudo docker-compose up`.

## Como implementar

O comando `npm run build` irá preparar o aplicativo para implantação no servidor de produção. Os arquivos necessários serão gerados no diretório `dist/`.

## Rodando testes

O comando `npm run test` executa testes de unidade via [Karma](https://karma-runner.github.io).
O comando `npm run e2e` executa testes de integração via [Protractor](http://www.protractortest.org/).

## Repositórios relacionados

Caso encontre algum problema em um dos projetos do Parlametria ou queira
contribuir com eles, utilize os respectivos repositórios:

* [Leg.go](https://github.com/analytics-ufcg/leggo-geral): [frontend](https://github.com/analytics-ufcg/leggo-frontend) / [backend](https://github.com/analytics-ufcg/leggo-backend)
* [Perfil Parlamentar](https://github.com/analytics-ufcg/perfil-politico): [frontend](https://github.com/analytics-ufcg/perfil-parlamentar-frontend)

