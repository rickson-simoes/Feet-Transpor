<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  :warning: Etapa 1/4 do Desafio :warning:
</h3>

Criando a aplicação do zero com **Node.JS** utilizando o [Express](https://expressjs.com/), configurando as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

## **Funcionalidades** ***1/4***

- **1. Autenticação**  <br />
usuário deve se autenticar na aplicação utilizando e-mail e uma senha.

- **2. Gestão de destinatários** <br />
permitir que destinatários sejam mantidos (cadastrados/atualizados) na aplicação, e esses devem ter o nome do destinatário e campos de endereço: rua, número, complemento, estado, cidade e CEP. <br />

<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  :warning: Etapa 2/4 do Desafio :warning:
</h3>


## **Funcionalidades** ***2/4***

- **1. Gestão de entregadores**  <br />
<i>Permita que o administrador possa cadastrar entregadores para a plataforma. <br/>
Crie rotas para listagem/cadastro/atualização/remoção de entregadores;</i>

**Obs.: Essa funcionalidade é para administradores autenticados na aplicação.**

- **2. Gestão de encomendas** <br />
<i>Apesar do entregador estar cadastrado, ele não é independente dentro da plataforma, e você deve cadastrar encomendas para os entregadores. Nessa funcionalidade criaremos um cadastro de encomendas por entregador.

A data de início deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h. 

A data de término da entrega deve ser cadastrada quando o entregador finalizar a entrega.

Os campos recipient_id e deliveryman_id devem ser cadastrados no momento que for cadastrada a encomenda.

Quando a encomenda é cadastrada para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.

Crie rotas para listagem/cadastro/atualização/remoção de encomendas.</i>

**Obs.: Essa funcionalidade é para administradores autenticados na aplicação.**
