# ⚡ Teste Front End

Olá! Se você está vendo este repositório, provavelmente está participando do processo seletivo da Blocks. 🚀

Este teste é bastante simples, não é tão desafiador, mas iremos analisar principalmente os detalhes e sua habilidade em replicar um design fornecido pela equipe de Design! Vamos lá!? 💪

Um termo muito utilizado em nosso ambiente de trabalho é "Famílias". Não, não estamos falando da sua família ou da nossa! 🤗

No mundo da arquitetura ou, mais especificamente, no Revit, o termo "Famílias" é usado para se referir a um modelo 3D. Ou seja, uma Cadeira é uma Família, uma Mesa é uma Família! Entendido? 🪑

# 🌐 API

Preparamos uma API bem simples e bastante realista em relação ao que trabalhamos atualmente. Caso você não consiga usar a API, poderá baixar este repositório e executar o servidor localmente em sua própria máquina usando o comando:

`yarn node main.js`

O servidor será executado na porta 8080 por padrão. 🖥️

A rota é a seguinte:

_[GET] http://localhost:8080/families_

Parâmetros:

- skip (utilizado para paginação, define a quantidade de famílias a serem ignoradas em relação ao "take")

- take (utilizado para definir quantas famílias são obtidas da API)

Quero obter 10 famílias da API:

http://localhost:8080/families?skip=0&take=10 _(Skip 0 porque não vou pular ninguém)_

Próxima página:

http://localhost:8080/families?skip=10&take=10 _(Agora, vou alterar o skip para 10, pulando de 10 em 10.)_

Nossa API pública para o teste está disponível aqui:

🌐 https://test-candidaturas-front-end.onrender.com/

#

Exemplo utilzando a API pública:

🌐 https://test-candidaturas-front-end.onrender.com/families?skip=0&take=10

##

# 📜 Como será o teste?

Queremos que você crie um catálogo de famílias (blocos 3D), onde a paginação seja do tipo "scroll loading" (como no Instagram, Facebook, etc.). O design será fornecido por nós

📃 Não importa o framework!

📃 É permitido utilizar plugins/pacotes para facilitar o scroll loading

📃 É permitido utilizar uma biblioteca de componentes como Material UI ou Tailwind

📜 Não é obrigatório que seja responsivo, mas se for, você ganhará pontos extras conosco!

📜 Não é obrigatório que faça deploy, mas se fazer, você ganhará pontos extras conosco!

Link para o Figma: 🎨

https://www.figma.com/file/xUT0pnECiRfxxaHGj1yaqh/%5BBLOCKS%5D-%5BTESTE-FRONT-END%5D?type=design&node-id=0%3A1&t=SAmRYHe8FjyzokNd-1

Por favor, não faça alterações no design, pois isso será avaliado. 😉

⚡ Ao concluir o teste, é necessário enviar o código para o GitHub e entrar em contato conosco para que possamos realizar a análise.

##

# 🖼️ Imagens

Para utilizar as imagens em seu catálogo, você pode utilizar nosso banco de imagens. É muito simples de usá-lo!

Primeiramente, utilize o seguinte link:

https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/ID DA FAMÍLIA.jpg

Por exemplo, se o ID da família for "abc-123", o link seria:

https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/abc-123.jpg
