# 🚀️ Fundamentos Node rocket 🚀️
Este é o resultado do desafio do bootcamp GoStack da RocketSeat! Trata-se de um CRUD feito em TypeScript utilizando os princípios do design pattern SOLID. Nesta API é possível cadastrar, listar e excluir transações.


>### 📋️ Requisitos:
>
>- [Node.Js](https://nodejs.org/en/download/)
>- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
>- [Insomnia](https://insomnia.rest/download/core/?&ref=)


### 🤖️ Como utilizar:
- Faça o download do projeto [aqui](https://github.com/saleszera/fundamentos-node/archive/master.zip)
- Descompacte o arquivo baixado
- Pelo terminal navegue até o diretório onde está o projeto
- No diretório digite `yarn` para fazer o download das dependências
- Ainda no terminal digite `yarn dev:server` para inicializar a API
- Agora basta testar as rotas no Insomnia


### 📝️ Testando as rotas
 Abra o Insomnia
###### Criando uma transaction:
1. Utilize a URL ` http://localhost:3333/transations`
2. Selecione o método **POST**
3. Clique em **Body** e selecione a opção **JSON**
 O corpo da requisição deve conter os seguintes campos:

```json
{
  "title":"Salário",
  "value":2000,
  "type": "income"
}
```
4. Após preencher os campos, clique em send e o repositório será salvo.
###### Listando transactions
1. Utilize a URL ` http://localhost:3333/transations`
2. Selecione o método **GET**
3. Clique em send, serão listadas todas as transations, incluindo a soma das entradas `income`, saídas `outcome` e `total` que é a subtração da entrada e da saída.
###### Deletando uma transaction
1. Utilize a URL  `http://localhost:3333/transations/:id`
 Em **:id** insira o ID da transaction que deseja deletar, o ID pode ser obtido no cadastro da transaction ou na listagem de transactions.
2. Selecione o método **DELETE**
3. Clique em send, caso o repositório exista será retornado o status ***204 No Content*** para indicar que a transaction foi deletada.

### ⚠️ Atenção
- `type` deve ser `income` ou `outcome`, caso contrário será retornado erro.
- `value` deve ser um número, caso contrário será retornado erro.
- `value` do tipo `outcome` não pode ser maior que o total, caso contrário será retornado erro.

### 💥️ Bonus
- [x] Adicionada verificação para `value` para garantir que o valor informado seja um número.
- [x] Adicionada verificação para `type` para garantir que seja sempre informado `income` ou `outcome`
- [x] Adicionado o delete de uma transaction




## Obrigado por testar a API! 😁️
