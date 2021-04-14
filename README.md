# ecommerce-pokemon-frontend

E-commerce desenvolvido para a venda de Pokémon, produto totalmente white label, contemplado os temas água, fogo e dragão.

# Tecnologias utilizadas

- Para o frontend foi utilizado a ferramenta React Typescript;

- Para os testes automaizados foi utilizado o framework cypress;

## O projeto consiste em:

### Catálogo de produtos;

> Só é atualizada a vitrine de pokémon se o carrinho de compras estiver vazio;

### Carrinho lateral;

> Totalizadores por quantidade e valor;

### Resumo do carrinho;

> Totalizadores por quantidade e valor;

### 3 lojas com estilos e tipos diferentes de Pokémon;

> Fogo = volcanic, água = seavell e dragão = wingeon;

> > http://localhost:3000/volcanic

> > https://epokemon.netlify.app/volcanic

> > http://localhost:3000/seavell

> > https://epokemon.netlify.app/seavell

> > http://localhost:3000/wingeon

> > https://epokemon.netlify.app/wingeon

> Os pokémon são pesquisados na API dinâmicamente através de ranges aleatórios, sempre limitados a 20;

### Barra de busca para filtrar os Pokémon;

> É adicionado o pokémon pesquisado a primeira posição da vitrine;

### Botão de finalizar compra, reiniciando o processo de compra;

> Finaliza a compra limpando o carrinho e redirecionando após 3 segundo para a home;

### Modal de obrigado ao finalizar compra

> Step de confirmação e parabenização do pedido;

### Salvar os dados da compra do usuário localmente para não perdê-las ao atualizar a página

> Os dados sobre o carrinho do cliente são transitados no redux e salvos no local storage na chave @pokemon-ecommerce/storage, é armazenada informações sobre a vitrine e sobre o carrinho;

### Testes E2E/UI automatizados para garantir que suas funcionalidades estão funcionando corretamente.

> Implementado teste E2E happy-path, onde simula a trajetória feliz de um usuário na plataforma, do início até a finalização da compra;

> Utilizado cypress;

### Colocá-lo online em alguma url pública para que as pessoas consigam utilizar a loja, afinal como vamos vender Pokémon se não nos acharem?

> Continuous integration e continuous deployment integrados com a plataforma netlify, onde automatiza todo o processo;

> > Projeto online: https://epokemon.netlify.app;

> > > https://epokemon.netlify.app/volcanic

> > > https://epokemon.netlify.app/seavell

> > > https://epokemon.netlify.app/wingeon

> O Ideal seria com github actions "deploy as code, tendo o main.yml contendo toda a pipeline de deploy (dev || hml || prd)" e s3 com cloudFront na aws para disponibilização do frontend;

### Uma página com mais detalhes do Pokémon, tendo informações como os tipos, movimentos, pontos fracos e pontos fortes. Dessa forma o usuário poderá navegar para essa página e adicionar o Pokémon no carrinho ou voltar para o catálogo.

> Criada modal de detalhes do Pokémon, que é exibida ao clicar na imagem de pokémon;

# Requisitos para a execução do projeto

- Ter o NodeJS instalado de preferência a última versão ou superior a v12.16.1;

  > [Instalando o Node](https://nodejs.org/pt-br/download/package-manager/ 'Clique aqui para aprender a instalar o Node!')

- Ter o gerenciador de dependências yarn instalado (npm também funciona, porém recomendo fortemente o yarn)
  > [Instalando o yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable 'Clique aqui para aprender a instalar o yarn!')

## Executando o projeto

1. Acessar a pasta frontend e executar os seguintes comandos:

> yarn install

> yarn start (obs: configurar o arquivo .env na raiz da pasta frontend: copiar conteúdo do .env.example)

> yarn cy:open (para executar os testes e2e no frontend) | (obs: para linux caso dê problema de permissão executar o comando "/home sudo chmod -R 777 murillo/.config/Cypress")

> divirta-se com as funcionalidades
