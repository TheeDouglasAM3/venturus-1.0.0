# venturus-1.0.0: Squad Management Tool

<p align="center">
   <img src="./.github/logo.png" alt="Venturus" width="280"/>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/douglas-alves-marcelino-704250180/">
      <img alt="Douglas Alves Marcelino" src="https://img.shields.io/badge/-Douglas%20Alves%20Marcelino-f2295b?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/TheeDouglasAM3/venturus-1.0.0?color=f2295b">

  <a href="https://github.com/TheeDouglasAM3/venturus-1.0.0/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/TheeDouglasAM3/venturus-1.0.0?color=f2295b">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-f2295b">
  <a href="https://github.com/TheeDouglasAM3/venturus-1.0.0/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/TheeDouglasAM3/venturus-1.0.0?color=f2295b&logo=github">
  </a>
</p>

Projeto criado para ser avaliado pela Venturus

# :star: Sumário

* [Descrição](#descrição)
* [Demonstração da aplicação](#demonstração-da-aplicação) 
* [Minhas Etapas](#minhas-etapas)
* [Tecnologias](#tecnologias)
* [Como rodar o projeto](#como-rodar-o-projeto)
* [Achou algum bug?](#problemas)
* [Licença](#licença)

# Descrição
Squad Management Tool é uma plataforma que orienta os usuários na criação e configuração de times de futebol, mostrando também estatísticas sobre as equipes atuais.

# Demonstração da aplicação
O projeto desenvolvido neste repositório está disponível em: 
[https://theedouglas-venturus.vercel.app/](https://theedouglas-venturus.vercel.app/)

OBS.: A versão gratuita da api-football só permite 100 requisições diárias, logo se em algum momento a aplicação não exibir a lista de jogadores, deve-se trocar o token ou esperar o dia seguinte para a utilização da mesma

# Minhas Etapas
Para preparar o projeto, eu optei por utilizar o Typescript junto com o React, para facilitar no desenvolvimento com as tipagens dos objetos.

Eu optei também por usar a ferramenta ESLINT, para padronizar o todo o meu código no mesmo estilo de codificação usada pela Airbnb, dessa maneira, todo o código fica mais legível para a leitura já que sempre seguirá o mesmo padrão

Eu planejei realizar o projeto em 6 dias, sendo os três primeiros dias reservados para o design, e os três últimos reservados para o funcionamento do sistema

Para facilitar as estilizações nos três primeiros dias eu utilizei a biblioteca styled-components, dessa forma também ficará mais fácil caso haja alguma mudança nos estilos, ou se no futuro optarem por uma versão dark-mode do projeto

No quarto dia eu me dediquei lendo a documentação api-football, e implementei ela no projeto no mesmo dia, exibindo os jogadores na página de gerenciamento de time (ou página de criação)

Os últimos dois dias eu me dediquei em salvar os times e mostrar as estatísticas que deveriam de ser exibidas na página inicial. E após essa conclusão, com o tempo restante, eu alterei os estilos de alguns componentes para ficar mais atrativo em versão para dispositivos móveis.

Para futuras implementações, eu adicionaria o sistema de drag and drops de jogadores ao criar o time, junto com a modificação do campo ao alterar a formação, depois implementaria testes para evitar futuros erros caso essa plataforma se expandanda, no caso, tendo o uso de NodeJS para criação de usuários e armazenamentos dos times, e seria interessante trazer essa plataforma para dispositiveis móveis utilizando React Native :)

# Tecnologias
Neste projeto foram utilizadas as seguintes tecnologias:
* [React](https://pt-br.reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)

# Como rodar o projeto
```bash
# Copie o repositório
$ git clone https://github.com/TheeDouglasAM3/venturus-1.0.0.git

# Instale as depedencias
$ npm install
ou
$ yarn install
```
Crie um arquivo chamado .env na raíz do projeto, seguindo a mesma estrutura do arquivo .example.env
```bash
REACT_APP_API_FOOTBALL_KEY = SEU_TOKEN
```
Em SEU_TOKEN você deverá subsituir pelo seu token disponível em [https://dashboard.api-football.com/](https://dashboard.api-football.com/), todavia, o meu token será enviado no formulário do teste para facilitar o uso do mesmo, e se tiverem quaisquer problemas em relação a isso, eu posso reenviar por email o token, só não estou disponibilizando ele publicamente por motivos de segurança

```bash
# Rode a aplicação
$ npm start
ou
$ yarn start
```

Acesse o website em: http://localhost:3000/

# Problemas
Se você encontrou algum bug, se sinta livre **para criar uma nova issue**  [clicando aqui!](https://github.com/TheeDouglasAM3/venturus-1.0.0/issues). Se você já encontrou a solução para o problema, **faça um pull request**!

# Licença

Criado em 2020 

Feito com carinho por [Douglas Alves Marcelino](https://github.com/TheeDouglasAM3) :duck:

Esse projeto esta sobre [MIT license](./LICENSE).
