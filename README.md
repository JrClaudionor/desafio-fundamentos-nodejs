# desafio-fundamentos-nodejs
## DESAFIO PARA FIXAÇÃO DOS FUNDAMENTOS DE NODE.JS

Este desafio cumpre os seguintes requisitos solicitados:

<b>should be able to create a new transaction:</b> A aplicação permite que uma transação seja criada, e retorna um json com a transação criada.

<b>should be able to list the transactions:</b> A aplicação permite que um objeto retorne contendo todas as transações junto ao balanço de <b>income, outcome e total das transações</b> que foram criadas até o momento.

<b>should not be able to create outcome transaction without a valid balance:</b> A aplicação não permite que uma transação do tipo <b>outcome</b> extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }
