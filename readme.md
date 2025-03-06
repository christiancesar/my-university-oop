# My University 
O objetivo do projeto é apresentar os Fundamentos da Engenharia de Software, dando aos alunos a percepção da evolução após terem concluído uma avaliação de requisitos funcionais e não funcionais.

O próximo passo é usar diagramas de classes e casos de uso para codificação futura, testes e padrões de design e arquitetura, aplicando assim todos os conceitos básicos da Engenharia de Software.

## Para rodar o projeto (Windows)

### Requisitos

Método 1:
- [Node.js](https://nodejs.org/en/) Faça o download e instale o Node.js
- [Git](https://git-scm.com/) Faça o download e instale o Git
- [Visual Studio Code](https://code.visualstudio.com/) Faça o download e instale o Visual Studio Code
- [Windows Terminal](https://www.microsoft.com/pt-br/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) 

- Você pode baixar facilmente na Microsoft Store a maioria destes programas.

Método 2:
- [Instalação Automatizada](https://github.com/christiancesar/setup-env-development) Baixe o repositório clicando em `Code`, descompacte o arquivo zip e execute o arquivo `step-one.ps1` ao finalizar a instalação execute `step-two.ps2`, todos como administrador.

### Baixar e rodar o projeto

Método 1:
- Crie uma pasta dentro do seu diretório de preferência. Exemplo: `Documentos/Projetos`
- Dentro da pasta `Projetos` clique com o botão direito do mouse e selecione a opção `Abir no terminal`
- Ao abrir o terminal, execute o comando `git clone https://github.com/christiancesar/my-university-oop.git`
- Após o download do projeto, execute o comando `cd my-university-oop`
- Execute o comando `npm install`
- Execute o comando `npm dev`
- Pronto! o projeto estará rodando e mostrará informações em seu terminal.
- Para acessar os códigos do projeto para que você pode visualizar e editar, abra o Visual Studio Code e clique em `Arquivo > Abrir Pasta` e selecione a pasta `my-university-oop` que foi baixada. Ou ainda em seu terminal execute o comando `code .` o projeto será aberto no Visual Studio Code.

Método 2:
- Baixe o projeto em https://github.com/christiancesar/my-university-oop.git, no repositório clique em Code e faça o download do arquivo zip.
- Descompacte o arquivo zip em uma pasta de sua preferência.
- Dentro da pasta onde o projeto foi descompactado clique com o botão direito do mouse e selecione a opção `Abir no terminal`, irá abrir no diretório do projeto.
- Execute o comando `npm install`
- Execute o comando `npm dev`
- Pronto! o projeto estará rodando e mostrará informações em seu terminal.
- Para acessar os códigos do projeto para que você pode visualizar e editar, abra o Visual Studio Code e clique em `Arquivo > Abrir Pasta` e selecione a pasta `my-university-oop` que foi baixada. Ou ainda em seu terminal execute o comando `code .` o projeto será aberto no Visual Studio Code.

## Tipos de scripts
Dentro do projeto encontram-se os seguintes scripts:

![Scripts](./docs/scripts.png)

- `npm run dev` - Inicia o projeto executando o arquivo `index.js`, que tem exemplos de Programação Orientada a Objetos.
- `npm run dev:server`: Inicia o projeto executando o arquivo `server.js`, que tem exemplos de uma aplicação no formatado Cliente/Servidor, no qual é aplicado alguns Padrões de Projetos e conceitos como SOLID.
- `npm run dev:sqlite-playground`: Inicia o projeto executando o arquivo `sqlite-playground.js`, que tem exemplos de como utilizar o banco de dados SQLite. Local onde pode testar comandos SQL com o Nodejs e verificar o retorno.
- `npm run test` - Inicia os testes do projeto.

## Diagrama de Classes

O diagrama de classes é uma representação gráfica das classes de um sistema e dos relacionamentos entre elas. Ele é um dos diagramas mais populares da UML e é usado para modelar a estrutura de um sistema.
![Diagrama de Classes](./docs/entities_diagram.png)

## Organização do Projeto

- `src/` - Diretório onde se encontra os arquivos de código fonte do projeto.
- `src/entities/` - Diretório onde se encontra as classes de entidades do projeto.
- `src/entities/inheritance-examples/` - Diretório onde se encontra os mais exemplos de herança.
- `src/factories/` - Diretório onde se encontra as classes de fábricas do projeto.
- `src/repositories/` - Diretório onde se encontra as classes de repositórios do projeto.
- `src/seeds/` - Diretório onde se encontra as classes de sementes do projeto.
- `tests/` - Diretório onde se encontra os arquivos de testes do projeto.

